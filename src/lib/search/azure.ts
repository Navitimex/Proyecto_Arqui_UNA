/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Consulta al índice de Azure AI Search. Solo se ejecuta en el servidor (API route),
 * así la query key nunca llega al navegador.
 */

import { AzureKeyCredential, SearchClient } from "@azure/search-documents";
import { HIGHLIGHT_POST, HIGHLIGHT_PRE, type SearchDocument, type SearchHit } from "./types";

export const DEFAULT_INDEX_NAME = "una-contenido";

const REQUEST_TIMEOUT_MS = 4000;

let client: SearchClient<SearchDocument> | null = null;

export function isAzureSearchConfigured(): boolean {
  return Boolean(process.env.AZURE_SEARCH_ENDPOINT && process.env.AZURE_SEARCH_QUERY_KEY);
}

function getClient(): SearchClient<SearchDocument> {
  client ??= new SearchClient<SearchDocument>(
    process.env.AZURE_SEARCH_ENDPOINT!,
    process.env.AZURE_SEARCH_INDEX || DEFAULT_INDEX_NAME,
    new AzureKeyCredential(process.env.AZURE_SEARCH_QUERY_KEY!),
    // Un solo reintento: si Azure falla preferimos caer rápido al buscador local
    { retryOptions: { maxRetries: 1 } }
  );
  return client;
}

/**
 * Convierte cada término en "término OR prefijo* OR término~1" (sintaxis Lucene completa)
 * para que funcione el autocompletado ("matri") y se toleren errores de tipeo ("matricla").
 */
export function buildLuceneQuery(terms: string[]): string {
  return terms
    .map((term) => {
      const variants = [term, `${term}*`];
      if (term.length >= 4) variants.push(`${term}~1`);
      return `(${variants.join(" OR ")})`;
    })
    .join(" ");
}

export async function searchAzure(terms: string[], top: number): Promise<SearchHit[]> {
  const response = await getClient().search(buildLuceneQuery(terms), {
    queryType: "full",
    searchMode: "any",
    top,
    select: ["id", "title", "description", "url", "pillar", "section", "type"],
    highlightFields: "title,description",
    highlightPreTag: HIGHLIGHT_PRE,
    highlightPostTag: HIGHLIGHT_POST,
    abortSignal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  const hits: SearchHit[] = [];
  for await (const result of response.results) {
    const doc = result.document;
    hits.push({
      id: doc.id,
      title: doc.title,
      description: doc.description,
      url: doc.url,
      pillar: doc.pillar,
      section: doc.section,
      type: doc.type,
      highlights: {
        title: result.highlights?.title?.[0],
        description: result.highlights?.description?.[0],
      },
    });
  }
  return hits;
}
