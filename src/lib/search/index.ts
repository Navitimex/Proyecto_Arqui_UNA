/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Punto de entrada del buscador: usa Azure AI Search si está configurado y,
 * si no lo está o falla, responde con el buscador local sobre los mismos datos.
 */

import { isAzureSearchConfigured, searchAzure } from "./azure";
import { queryTerms, searchLocal } from "./local";
import type { SearchResponse } from "./types";

export async function search(query: string, top: number): Promise<SearchResponse> {
  if (isAzureSearchConfigured()) {
    try {
      const terms = queryTerms(query);
      const results = terms.length > 0 ? await searchAzure(terms, top) : [];
      return { query, engine: "azure", results };
    } catch (error) {
      console.error("[search] Azure AI Search no respondió, se usa el buscador local:", error);
    }
  }

  return { query, engine: "local", results: searchLocal(query, top) };
}
