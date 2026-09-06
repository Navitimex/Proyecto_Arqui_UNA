import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { FileArchive, Download } from "lucide-react";

export default function ActasPage() {
  const actas = [
    { num: "Acta Ordinaria N° 04-2026", date: "24 de Febrero, 2026", summary: "Aprobación de cupos semestrales y ratificación de tribunales de PPS." },
    { num: "Acta Extraordinaria N° 01-2026", date: "10 de Febrero, 2026", summary: "Designación de comisiones de autoevaluación e investigación docente." },
    { num: "Acta Ordinaria N° 12-2025", date: "15 de Diciembre, 2025", summary: "Cierre de curso lectivo y aprobación de oferta curricular 2026." },
  ];

  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Actas de Consejo de Unidad"
      badge="Rendición de Cuentas"
      description="Registro público y acuerdos tomados por el Consejo de Unidad Académica de la Escuela de Informática de la UNA."
      icon={<FileArchive className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Normativas Oficiales", href: "/la-escuela/normativas" },
        { label: "Directorio de Autoridades", href: "/la-escuela/directorio" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Sesiones Recientes del Consejo de Unidad
        </h3>

        <div className="space-y-3">
          {actas.map((acta, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sm text-slate-900">{acta.num}</span>
                  <span className="text-xs text-slate-400">• {acta.date}</span>
                </div>
                <p className="text-xs text-slate-600">{acta.summary}</p>
              </div>

              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-una-red hover:text-una-red text-xs font-bold text-slate-700 transition-colors shrink-0">
                <Download className="w-3.5 h-3.5" />
                <span>PDF Acta</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
