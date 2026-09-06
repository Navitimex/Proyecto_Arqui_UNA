import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export default function AutoevaluacionPage() {
  const reports = [
    { year: "2024 - 2025", title: "Informe Quinquenal de Reacreditación SINAES", size: "4.2 MB", type: "PDF Oficial" },
    { year: "2023", title: "Informe de Compromiso de Mejoramiento Continuo", size: "2.8 MB", type: "PDF Oficial" },
    { year: "2022", title: "Evaluación de Satisfacción Estudiantil y Empleadores", size: "1.9 MB", type: "PDF Oficial" },
  ];

  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Informes de Autoevaluación"
      badge="Transparencia y Calidad"
      description="Documentación pública del proceso de evaluación continua, planes de mejora y métricas institucionales de la Escuela de Informática."
      icon={<FileText className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Acreditación SINAES", href: "/la-escuela/acreditacion" },
        { label: "Normativas Oficiales", href: "/la-escuela/normativas" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Repositorio de Informes Oficiales
        </h3>

        <div className="space-y-3">
          {reports.map((r, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-una-red bg-red-50 px-2 py-0.5 rounded">
                  Período {r.year}
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900">{r.title}</h4>
                <span className="text-xs text-slate-500">{r.type} • {r.size}</span>
              </div>

              <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 hover:border-una-red hover:text-una-red text-xs font-bold text-slate-700 transition-colors shrink-0">
                <Download className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
