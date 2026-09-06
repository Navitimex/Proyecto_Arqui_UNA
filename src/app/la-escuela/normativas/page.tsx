import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Scale, Download } from "lucide-react";

export default function NormativasPage() {
  const normativas = [
    { title: "Reglamento General de la Práctica Profesional Supervisada (PPS)", code: "REG-PPS-UNA-2024" },
    { title: "Normativa de Trabajos Finales de Graduación (TFG)", code: "REG-TFG-EIF-2023" },
    { title: "Reglamento de Régimen Académico Estudiantil UNA", code: "CONSU-2022-04" },
    { title: "Lineamientos de Uso Ético y de Laboratorios de Cómputo", code: "DIR-LAB-2025" },
  ];

  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Normativas y Reglamentos Oficiales"
      badge="Marco Jurídico Institucional"
      description="Compendio de reglamentos, políticas de evaluación, derechos y deberes que rigen la vida académica en la Escuela de Informática."
      icon={<Scale className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Práctica Profesional (PPS)", href: "/pps" },
        { label: "Actas de Consejo de Unidad", href: "/la-escuela/actas" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Reglamentos Vigentes de Consulta Pública
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {normativas.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded">
                {item.code}
              </span>
              <h4 className="font-heading font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-una-red hover:underline">
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Reglamento Oficial</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
