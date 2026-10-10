/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Página de resultados del motor de búsqueda (/buscar?q=...), agrupados por pilar
 * de la arquitectura de información.
 */

"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ExternalLink, FileText, Loader2, Search } from "lucide-react";
import { PageTemplate } from "@/components/PageTemplate";
import { SearchHighlight } from "@/components/SearchHighlight";
import { ENGINE_LABEL, fetchSearch, trackSearchEvent } from "@/lib/search/client";
import { MAX_QUERY_LENGTH, MIN_QUERY_LENGTH, type SearchHit, type SearchResponse } from "@/lib/search/types";

const SUGGESTED_TOPICS = ["Matrícula", "Becas", "PPS", "Maestrías", "Contraseña", "Bolsa de empleo"];

type Status = "idle" | "loading" | "done" | "error";

function groupByPillar(results: SearchHit[]): Array<[pillar: string, hits: SearchHit[]]> {
  // Map conserva el orden de inserción: el pilar con el resultado más relevante va primero
  const groups = new Map<string, SearchHit[]>();
  for (const hit of results) {
    groups.set(hit.pillar, [...(groups.get(hit.pillar) ?? []), hit]);
  }
  return Array.from(groups.entries());
}

function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const [input, setInput] = useState(query);
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    setInput(query);
    if (query.length < MIN_QUERY_LENGTH) {
      setResponse(null);
      setStatus("idle");
      return;
    }

    const controller = new AbortController();
    setStatus("loading");
    fetchSearch(query, "full", controller.signal)
      .then((data) => {
        setResponse(data);
        setStatus("done");
        trackSearchEvent("busqueda");
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error");
      });
    return () => controller.abort();
  }, [query]);

  const submit = (value: string) => {
    const q = value.trim();
    if (q.length < MIN_QUERY_LENGTH) return;
    router.push(`/buscar?q=${encodeURIComponent(q)}`);
  };

  const results = response?.results ?? [];

  return (
    <div className="space-y-6">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="flex flex-col sm:flex-row gap-2.5"
      >
        <label htmlFor="buscar-q" className="sr-only">
          Buscar en el sitio
        </label>
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="buscar-q"
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={MAX_QUERY_LENGTH}
            placeholder="Buscar carreras, trámites, becas, plataformas..."
            className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-una-red/30 focus:border-una-red"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-una-blue hover:bg-slate-800 text-white text-sm font-heading font-bold transition-colors"
        >
          Buscar
        </button>
      </form>

      {status === "idle" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-600">
            Escriba lo que necesita encontrar o pruebe con uno de estos temas:
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => submit(topic)}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-una-red transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {status === "loading" && (
        <div className="flex items-center gap-2 text-sm text-slate-500 py-6" role="status">
          <Loader2 className="w-4 h-4 animate-spin text-una-red" />
          <span>Buscando “{query}”...</span>
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-slate-600 py-6" role="alert">
          No se pudo completar la búsqueda. Intente de nuevo en unos segundos.
        </p>
      )}

      {status === "done" && response && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <p className="text-sm text-slate-700" role="status">
              <strong>{results.length}</strong> {results.length === 1 ? "resultado" : "resultados"} para{" "}
              <strong>“{response.query}”</strong>
            </p>
            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
              Resultados por {ENGINE_LABEL[response.engine]}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8 space-y-2">
              <Search className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No encontramos coincidencias</p>
              <p className="text-xs text-slate-500">
                Revise la ortografía o use términos más generales, por ejemplo “matrícula” o “becas”.
              </p>
            </div>
          ) : (
            groupByPillar(results).map(([pillar, hits], groupIndex) => (
              <section key={pillar} aria-labelledby={`grupo-${groupIndex}`} className="space-y-2">
                <h2
                  id={`grupo-${groupIndex}`}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  {pillar} <span className="text-slate-400 font-medium">({hits.length})</span>
                </h2>
                <ul className="space-y-2">
                  {hits.map((hit) => (
                    <li key={hit.id}>
                      <Link
                        href={hit.url}
                        target={hit.type === "externo" ? "_blank" : undefined}
                        rel={hit.type === "externo" ? "noopener noreferrer" : undefined}
                        onClick={() => trackSearchEvent("busqueda_seleccion")}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-una-red/40 hover:bg-slate-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:text-una-red shrink-0">
                          {hit.type === "externo" ? (
                            <ExternalLink className="w-4 h-4" />
                          ) : (
                            <FileText className="w-4 h-4" />
                          )}
                        </div>
                        <div className="min-w-0 space-y-1">
                          <h3 className="font-heading font-bold text-[15px] text-una-blue group-hover:text-una-red transition-colors">
                            <SearchHighlight text={hit.title} highlighted={hit.highlights.title} />
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <SearchHighlight text={hit.description} highlighted={hit.highlights.description} />
                          </p>
                          <p className="text-[11px] text-slate-400 truncate">
                            {hit.section !== hit.pillar && `${hit.section} · `}
                            {hit.url}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function BuscarPage() {
  return (
    <PageTemplate
      pillar="Búsqueda"
      pillarHref="/buscar"
      title="Buscar en el sitio"
      badge="Motor de búsqueda"
      description="Encuentre carreras, trámites, servicios estudiantiles y plataformas institucionales de la Escuela de Informática desde un solo lugar."
      icon={<Search className="w-3.5 h-3.5" />}
    >
      {/* useSearchParams requiere un límite de Suspense en Next.js 14 */}
      <Suspense fallback={<div className="h-12 rounded-xl bg-slate-50 animate-pulse" />}>
        <SearchResults />
      </Suspense>
    </PageTemplate>
  );
}
