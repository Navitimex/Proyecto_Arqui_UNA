/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Utilidades del lado del navegador para consultar /api/search.
 */

import type { SearchResponse } from "./types";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export async function fetchSearch(
  query: string,
  mode: "suggest" | "full",
  signal?: AbortSignal
): Promise<SearchResponse> {
  const params = new URLSearchParams({ q: query, mode });
  const res = await fetch(`/api/search?${params}`, { signal });
  if (!res.ok) throw new Error(`Error ${res.status} al buscar`);
  return res.json();
}

/** Registra un evento personalizado en Microsoft Clarity (si está cargado) para la evaluación UX. */
export function trackSearchEvent(name: "busqueda" | "busqueda_seleccion") {
  window.clarity?.("event", name);
}

export const ENGINE_LABEL = {
  azure: "Azure AI Search",
  local: "Búsqueda local",
} as const;
