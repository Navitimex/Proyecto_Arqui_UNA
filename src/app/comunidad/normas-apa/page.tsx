import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { BookOpen, Download, FileText } from "lucide-react";

export default function NormasApaPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Guías de Formato Oficial y Normas APA"
      badge="Recurso Académico"
      description="Manuales de citación bibliográfica APA (7ma edición), plantillas oficiales en LaTeX y Microsoft Word para reportes técnicos, artículos y TFG."
      icon={<BookOpen className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Trabajo Final de Graduación (TFG)", href: "/comunidad/tfg" },
        { label: "Práctica Profesional (PPS)", href: "/pps" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h3 className="font-heading font-black text-base text-una-blue">
            Descargas de Plantillas Oficiales de la Escuela
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-slate-800 block">Plantilla TFG en Microsoft Word (.docx)</span>
                <span className="text-[11px] text-slate-400">Estilos preconfigurados APA 7ma</span>
              </div>
              <button className="p-2 text-una-red hover:bg-red-50 rounded-lg">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-slate-800 block">Plantilla Oficial en LaTeX (Overleaf)</span>
                <span className="text-[11px] text-slate-400">Para artículos y reportes de investigación</span>
              </div>
              <button className="p-2 text-una-red hover:bg-red-50 rounded-lg">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
