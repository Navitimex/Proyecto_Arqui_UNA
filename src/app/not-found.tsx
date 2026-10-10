/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Página 404 en español. Reemplaza la de Next.js, que está en inglés, agrega un segundo <title>
 * y hereda el canonical de la portada.
 */

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { NOT_FOUND_METADATA } from "@/data/seo";

export const metadata = NOT_FOUND_METADATA;

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center space-y-5">
      <p className="text-xs font-bold uppercase tracking-wider text-una-red">Error 404</p>
      <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-una-blue">
        Página no encontrada
      </h1>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        La dirección que buscó no existe o cambió de lugar. Puede volver a la portada o buscar el
        contenido en el sitio.
      </p>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-sm transition-colors shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la portada</span>
        </Link>
        <Link
          href="/buscar"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-heading font-bold text-sm transition-colors shadow-sm"
        >
          <Search className="w-4 h-4" />
          <span>Buscar en el sitio</span>
        </Link>
      </div>
    </section>
  );
}
