import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { BookOpenCheck, Clock, Award } from "lucide-react";

export default function CursosActualizacionPage() {
  const cursos = [
    { title: "Desarrollo Web Full Stack con Next.js y TypeScript", hours: "40 horas", modality: "Virtual con sesiones en vivo" },
    { title: "Fundamentos de Ciberseguridad Defensiva (Blue Team)", hours: "45 horas", modality: "Bimodal con laboratorios prácticos" },
    { title: "Automatización de Infraestructura con Docker y Kubernetes", hours: "35 horas", modality: "Virtual" },
    { title: "Análisis de Datos con Python y Power BI", hours: "40 horas", modality: "Virtual" },
  ];

  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Cursos de Actualización Profesional"
      badge="Educación Continua"
      description="Oferta periódica de capacitación técnica y especialización abierta a profesionales, egresados y público general con certificación oficial de la UNA."
      icon={<BookOpenCheck className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Academia CISCO UNA", href: "/investigacion/cisco" },
        { label: "Academia ICAI", href: "/investigacion/icai" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Convocatorias Abiertas de Matrícula
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cursos.map((c, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <h4 className="font-heading font-bold text-sm text-slate-900">{c.title}</h4>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{c.hours}</span>
                <span>•</span>
                <span>{c.modality}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
