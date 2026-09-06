import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { FileCode, Download, CheckCircle2 } from "lucide-react";

export default function PlantillasDocentesPage() {
  const templates = [
    { title: "Plantilla Oficial de Programa de Curso (Syllabus 2026)", type: "Word (.docx)" },
    { title: "Rúbrica Estandarizada de Evaluación de Proyectos de Software", type: "Excel (.xlsx)" },
    { title: "Formato Institucional de Pruebas Escritas y Exámenes", type: "Word (.docx)" },
    { title: "Informe de Cumplimiento de Cátedra Semestral", type: "Word (.docx)" },
  ];

  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/"
      title="Plantillas de Cátedra e Instrumentos de Evaluación"
      badge="Recursos Docentes"
      description="Formatos estandarizados y avalados por la Subdirección para programas de estudio, rúbricas de evaluación y reportes de cátedra."
      icon={<FileCode className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Trámites Docentes", href: "/comunidad/tramites-docentes" },
        { label: "Directorio de Cátedras", href: "/la-escuela/directorio" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Instrumentos Institucionales Descargables
        </h3>

        <div className="space-y-3">
          {templates.map((tpl, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">{tpl.title}</h4>
                <span className="text-xs text-slate-500">Formato: {tpl.type}</span>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-una-red hover:text-una-red text-xs font-bold text-slate-700 transition-colors shrink-0">
                <Download className="w-3.5 h-3.5" />
                <span>Descargar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
