/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Tipos compartidos del buscador. Este archivo no importa nada del servidor,
 * por lo que se puede usar tanto en la API como en los componentes cliente.
 */

export type SearchDocumentType = "pagina" | "externo";

/** Documento tal como se guarda en el índice de Azure AI Search (y en el respaldo local). */
export interface SearchDocument {
  id: string;
  title: string;
  description: string;
  url: string;
  pillar: string;
  section: string;
  type: SearchDocumentType;
  keywords: string[];
}

/** Resultado que devuelve /api/search. Los resaltados usan los marcadores HIGHLIGHT_PRE/POST. */
export interface SearchHit {
  id: string;
  title: string;
  description: string;
  url: string;
  pillar: string;
  section: string;
  type: SearchDocumentType;
  highlights: { title?: string; description?: string };
}

export type SearchEngine = "azure" | "local";

export interface SearchResponse {
  query: string;
  engine: SearchEngine;
  results: SearchHit[];
}

// Caracteres de control como marcadores de resaltado: nunca aparecen en el contenido
// y permiten pintar <mark> en React sin usar dangerouslySetInnerHTML.
export const HIGHLIGHT_PRE = "\u0002";
export const HIGHLIGHT_POST = "\u0003";

export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 100;
