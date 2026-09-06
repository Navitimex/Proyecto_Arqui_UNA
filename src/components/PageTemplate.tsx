"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export interface PageTemplateProps {
  pillar: string;
  pillarHref?: string;
  title: string;
  badge?: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  quickLinks?: Array<{ label: string; href: string; external?: boolean }>;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  pillar,
  pillarHref = "/",
  title,
  badge = "Escuela de Informática UNA",
  description,
  icon,
  children,
  quickLinks,
}) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Institucional */}
      <section className="bg-gradient-to-br from-una-blue-dark via-una-blue to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-una-red relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          {/* Migas de Pan Accesibles */}
          <nav className="text-xs text-slate-300 flex items-center gap-2 flex-wrap" aria-label="Miga de pan">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={pillarHref} className="hover:text-white transition-colors">
              {pillar}
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold underline decoration-una-red decoration-2 underline-offset-4">
              {title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-3 pt-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-una-red/25 border border-una-red/40 text-red-200 text-xs font-bold uppercase tracking-wider">
              {icon}
              <span>{badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-tight leading-tight text-white">
              {title}
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm sm:leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Contenedor Principal de la Página */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {children ? (
            children
          ) : (
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                Esta sección forma parte de la estructura oficial de <strong>{pillar}</strong> en el portal de la Escuela de Informática de la Universidad Nacional de Costa Rica.
              </p>
              <p>
                Para consultas específicas sobre este contenido o gestiones asociadas, puede comunicarse con la secretaría académica de la Escuela o acudir a las oficinas ubicadas en el Campus Benjamín Núñez.
              </p>
            </div>
          )}

          {/* Enlaces de Interés o Acciones Rápidas */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Enlaces Relacionados
              </span>
              <div className="flex flex-wrap gap-2.5">
                {quickLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-una-red text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Botón de Regreso */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-100 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-una-blue font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la Portada Principal</span>
            </Link>

            <span className="text-slate-400">Escuela de Informática • UNA</span>
          </div>
        </div>
      </section>
    </div>
  );
};
