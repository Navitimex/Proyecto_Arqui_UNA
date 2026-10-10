/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Crea (o actualiza) el índice de Azure AI Search y sube el contenido del sitio.
 *
 *   npm run search:index              → crea/actualiza el índice y sincroniza documentos
 *   npm run search:index -- --recreate → borra el índice y lo crea de cero
 *                                       (necesario si se cambian analizadores o campos)
 *
 * Requiere en .env.local: AZURE_SEARCH_ENDPOINT y AZURE_SEARCH_ADMIN_KEY
 * (y opcionalmente AZURE_SEARCH_INDEX). Ver docs/BUSCADOR_AZURE.md.
 */

import { loadEnvConfig } from "@next/env";
import {
  AzureKeyCredential,
  SearchIndexClient,
  type SearchIndex,
} from "@azure/search-documents";
import { buildSearchDocuments } from "@/data/search-documents";
import { DEFAULT_INDEX_NAME } from "@/lib/search/azure";
import type { SearchDocument } from "@/lib/search/types";

loadEnvConfig(process.cwd());

const ANALYZER = "es_sin_tildes";

function buildIndexDefinition(name: string): SearchIndex {
  const text = { type: "Edm.String", searchable: true, analyzerName: ANALYZER } as const;

  return {
    name,
    fields: [
      { name: "id", type: "Edm.String", key: true, filterable: true },
      { name: "title", ...text },
      { name: "description", ...text },
      { name: "keywords", type: "Collection(Edm.String)", searchable: true, analyzerName: ANALYZER },
      { name: "pillar", ...text, filterable: true, facetable: true },
      { name: "section", ...text, filterable: true, facetable: true },
      { name: "type", type: "Edm.String", filterable: true, facetable: true },
      { name: "url", type: "Edm.String" },
    ],
    // Español con raíces ("becas" ≈ "beca") y sin tildes ("matricula" = "matrícula")
    tokenizers: [
      {
        odatatype: "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer",
        name: "es_raices",
        language: "spanish",
      },
    ],
    analyzers: [
      {
        odatatype: "#Microsoft.Azure.Search.CustomAnalyzer",
        name: ANALYZER,
        tokenizerName: "es_raices",
        tokenFilters: ["lowercase", "asciifolding"],
      },
    ],
    // El título pesa más que las palabras clave, y estas más que la descripción
    scoringProfiles: [
      {
        name: "pesos",
        textWeights: { weights: { title: 5, keywords: 3, section: 1.5, pillar: 1.5, description: 1 } },
      },
    ],
    defaultScoringProfile: "pesos",
  };
}

async function main() {
  const endpoint = process.env.AZURE_SEARCH_ENDPOINT;
  const adminKey = process.env.AZURE_SEARCH_ADMIN_KEY;
  const indexName = process.env.AZURE_SEARCH_INDEX || DEFAULT_INDEX_NAME;

  if (!endpoint || !adminKey) {
    console.error("Faltan AZURE_SEARCH_ENDPOINT y/o AZURE_SEARCH_ADMIN_KEY en .env.local (ver docs/BUSCADOR_AZURE.md).");
    process.exit(1);
  }

  const indexClient = new SearchIndexClient(endpoint, new AzureKeyCredential(adminKey));

  if (process.argv.includes("--recreate")) {
    console.log(`Borrando el índice "${indexName}"...`);
    await indexClient.deleteIndex(indexName).catch(() => undefined);
  }

  console.log(`Creando/actualizando el índice "${indexName}"...`);
  await indexClient.createOrUpdateIndex(buildIndexDefinition(indexName));

  const searchClient = indexClient.getSearchClient<SearchDocument>(indexName);
  const documents = buildSearchDocuments();

  const uploaded = await searchClient.mergeOrUploadDocuments(documents);
  const failed = uploaded.results.filter((r) => !r.succeeded);
  if (failed.length > 0) {
    console.error("Documentos con error:", failed.map((r) => `${r.key}: ${r.errorMessage}`));
    process.exit(1);
  }

  // Quitar documentos de páginas que ya no existen en el sitio
  const currentIds = new Set(documents.map((d) => d.id));
  const existing = await searchClient.search("*", { select: ["id"], top: 1000 });
  const staleIds: string[] = [];
  for await (const result of existing.results) {
    if (!currentIds.has(result.document.id)) staleIds.push(result.document.id);
  }
  if (staleIds.length > 0) {
    await searchClient.deleteDocuments("id", staleIds);
  }

  console.log(`Listo: ${documents.length} documentos indexados, ${staleIds.length} obsoletos eliminados.`);
}

main().catch((error) => {
  console.error("Error al indexar:", error);
  process.exit(1);
});
