/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * GET /api/search?q=texto&mode=suggest|full
 * - suggest: pocos resultados para el buscador rápido del header (Ctrl+K).
 * - full: lista completa para la página /buscar.
 */

import { NextResponse, type NextRequest } from "next/server";
import { search } from "@/lib/search";
import { MAX_QUERY_LENGTH, MIN_QUERY_LENGTH } from "@/lib/search/types";

export const dynamic = "force-dynamic";

const TOP_BY_MODE = { suggest: 6, full: 30 } as const;

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const query = (params.get("q") ?? "").trim();
  const mode = params.get("mode") === "full" ? "full" : "suggest";

  if (query.length < MIN_QUERY_LENGTH || query.length > MAX_QUERY_LENGTH) {
    return NextResponse.json(
      { error: `La búsqueda debe tener entre ${MIN_QUERY_LENGTH} y ${MAX_QUERY_LENGTH} caracteres.` },
      { status: 400 }
    );
  }

  const response = await search(query, TOP_BY_MODE[mode]);

  return NextResponse.json(response, {
    headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
  });
}
