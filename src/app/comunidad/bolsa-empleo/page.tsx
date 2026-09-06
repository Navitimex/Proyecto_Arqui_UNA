import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Briefcase, Building, CheckCircle2 } from "lucide-react";

export default function BolsaEmpleoPage() {
  const jobs = [
    { title: "Desarrollador/a Frontend (React / TypeScript)", company: "Multinacional de Software", type: "Híbrido • Heredia", exp: "Estudiante avanzado o Bachiller" },
    { title: "Ingeniero/a Cloud Jr (AWS / Terraform)", company: "Empresa de Telecomunicaciones", type: "100% Remoto", exp: "Bachiller en Sistemas" },
    { title: "Pasantía en Aseguramiento de Calidad (QA Automation)", company: "Centro de Servicios Compartidos", type: "Presencial • Barreal", exp: "Estudiante de 3er año" },
  ];

  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Bolsa de Empleo y Pasantías TIC UNA"
      badge="Inserción Profesional"
      description="Vinculación directa entre el talento estudiantil y graduado de la Escuela de Informática y las empresas líderes del sector tecnológico en Costa Rica."
      icon={<Briefcase className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Práctica Profesional (PPS)", href: "/pps" },
        { label: "Campo Laboral y Estadísticas", href: "/bachillerato" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Oportunidades de Empleo y Pasantías Destacadas
        </h3>

        <div className="space-y-3">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-sm text-slate-900">{job.title}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                  <span className="font-semibold text-slate-700">{job.company}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span className="text-una-red font-medium">{job.exp}</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-una-blue hover:bg-una-red text-white text-xs font-bold transition-colors shrink-0">
                <span>Aplicar a Vacante</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
