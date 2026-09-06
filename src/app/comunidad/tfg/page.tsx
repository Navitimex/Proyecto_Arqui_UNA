import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { GraduationCap, FileCheck2, Download } from "lucide-react";

export default function TFGPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Trabajo Final de Graduación (TFG)"
      badge="Requisito de Licenciatura"
      description="Guía normativa, cronograma de entregas de anteproyecto y proceso de defensa oral para la culminación del grado de Licenciatura en Informática."
      icon={<GraduationCap className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Normas APA y Plantillas", href: "/comunidad/normas-apa" },
        { label: "Licenciatura en Sistemas", href: "/oferta-academica/licenciatura" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Modalidades de Graduación en Licenciatura
          </h3>
          <p>
            El estudiantado de Licenciatura puede optar por tres modalidades oficiales: <strong>Proyecto de Graduación</strong> (desarrollo tecnológico inédito con cliente real), <strong>Tesis de Grado</strong> (investigación científica pura o aplicada) o <strong>Seminario de Graduación</strong>.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
