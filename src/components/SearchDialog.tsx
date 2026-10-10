/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Buscador rápido (Ctrl+K / lupa del header): resultados en vivo mientras se escribe,
 * navegación con teclado y acceso a la página completa de resultados (/buscar).
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CornerDownLeft, ExternalLink, FileText, Loader2, Search, X } from "lucide-react";
import { SearchHighlight } from "@/components/SearchHighlight";
import { ENGINE_LABEL, fetchSearch, trackSearchEvent } from "@/lib/search/client";
import { MIN_QUERY_LENGTH, type SearchEngine, type SearchHit } from "@/lib/search/types";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Accesos sugeridos mientras el campo está vacío (tareas más frecuentes del Card Sorting)
const SUGGESTED_LINKS = [
  { title: "Bachillerato en Ingeniería en Sistemas", href: "/bachillerato" },
  { title: "Práctica Profesional Supervisada (PPS)", href: "/pps" },
  { title: "Becas y Bienestar Estudiantil", href: "/comunidad/becas" },
  { title: "Bolsa de Empleo", href: "/comunidad/bolsa-empleo" },
];

const DEBOUNCE_MS = 200;

type Status = "idle" | "loading" | "done" | "error";

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchHit[]>([]);
  const [engine, setEngine] = useState<SearchEngine | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);

  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const trimmed = query.trim();

  // Al abrir: guardar el foco previo, enfocar el campo y bloquear el scroll. Al cerrar: restaurar todo.
  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
      setQuery("");
      setResults([]);
      setEngine(null);
      setStatus("idle");
      setActiveIndex(-1);
    };
  }, [isOpen]);

  // Búsqueda con debounce; se cancela la petición anterior si el usuario sigue escribiendo
  useEffect(() => {
    if (!isOpen || trimmed.length < MIN_QUERY_LENGTH) {
      setResults([]);
      setStatus("idle");
      setActiveIndex(-1);
      return;
    }

    const controller = new AbortController();
    setStatus("loading");
    const timer = setTimeout(async () => {
      try {
        const data = await fetchSearch(trimmed, "suggest", controller.signal);
        setResults(data.results);
        setEngine(data.engine);
        setActiveIndex(data.results.length > 0 ? 0 : -1);
        setStatus("done");
      } catch (error) {
        if (!controller.signal.aborted) setStatus("error");
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmed, isOpen]);

  const goToResultsPage = () => {
    if (trimmed.length < MIN_QUERY_LENGTH) return;
    onClose();
    router.push(`/buscar?q=${encodeURIComponent(trimmed)}`);
  };

  const openResult = (hit: SearchHit) => {
    trackSearchEvent("busqueda_seleccion");
    onClose();
    if (hit.type === "externo") {
      window.open(hit.url, "_blank", "noopener,noreferrer");
    } else {
      router.push(hit.url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length > 0) {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter" && e.target === inputRef.current) {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) openResult(results[activeIndex]);
      else goToResultsPage();
    } else if (e.key === "Tab" && dialogRef.current) {
      // Mantener el foco dentro del diálogo
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("input, button, a[href]");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!isOpen) return null;

  const listboxId = "buscador-resultados";
  const optionId = (index: number) => `buscador-opcion-${index}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[8vh] sm:pt-[12vh]">
      {/* Fondo */}
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Buscar en el sitio"
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden"
      >
        {/* Campo de búsqueda */}
        <div className="flex items-center gap-3 px-4 sm:px-5 h-16 border-b border-slate-100">
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 text-una-red animate-spin shrink-0" />
          ) : (
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
          )}
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar carreras, trámites, becas, plataformas..."
            className="flex-1 min-w-0 h-full bg-transparent text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls={listboxId}
            aria-activedescendant={activeIndex >= 0 ? optionId(activeIndex) : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-500 hover:text-una-red hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
            aria-label="Cerrar buscador"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Contenido */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {trimmed.length < MIN_QUERY_LENGTH ? (
            <div className="p-2">
              <span className="block px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Accesos frecuentes
              </span>
              <ul className="space-y-0.5">
                {SUGGESTED_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:text-una-red hover:bg-slate-50 transition-colors"
                    >
                      <span>{link.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-una-red" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : status === "error" ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">
              No se pudo completar la búsqueda. Intente de nuevo en unos segundos.
            </p>
          ) : status === "done" && results.length === 0 ? (
            <div className="px-4 py-8 text-center space-y-1">
              <p className="text-sm font-semibold text-slate-700">Sin resultados para “{trimmed}”</p>
              <p className="text-xs text-slate-500">Pruebe con otras palabras, por ejemplo “matrícula” o “becas”.</p>
            </div>
          ) : (
            <ul id={listboxId} role="listbox" aria-label="Resultados de búsqueda" className="space-y-0.5">
              {results.map((hit, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={hit.id}
                    id={optionId(index)}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => openResult(hit)}
                    className={`flex items-start gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                      isActive ? "bg-slate-100" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-500 shrink-0 mt-0.5">
                      {hit.type === "externo" ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[13.5px] font-semibold truncate ${
                            isActive ? "text-una-red" : "text-slate-800"
                          }`}
                        >
                          <SearchHighlight text={hit.title} highlighted={hit.highlights.title} />
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full shrink-0">
                          {hit.pillar}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                        <SearchHighlight text={hit.description} highlighted={hit.highlights.description} />
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Pie: ver todos + motor usado + atajos */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500">
          {trimmed.length >= MIN_QUERY_LENGTH ? (
            <button
              onClick={goToResultsPage}
              className="inline-flex items-center gap-1.5 font-semibold text-una-blue hover:text-una-red transition-colors"
            >
              <span>Ver todos los resultados</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span>Escriba al menos {MIN_QUERY_LENGTH} caracteres</span>
          )}
          <div className="flex items-center gap-3">
            {engine && <span className="hidden sm:inline">Motor: {ENGINE_LABEL[engine]}</span>}
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-white font-sans">↑↓</kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-white font-sans inline-flex items-center">
                <CornerDownLeft className="w-3 h-3" />
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-slate-300 bg-white font-sans">Esc</kbd>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
