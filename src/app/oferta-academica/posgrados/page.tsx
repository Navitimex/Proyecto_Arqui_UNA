import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export default function PosgradosPage() {
  const masterPrograms = [
    {
      code: "MATI",
      name: "Maestría en Aplicaciones de Tecnologías de Información",
      desc: "Especialización avanzada en arquitectura de software distribuido, big data, machine learning y computación en la nube para líderes técnicos.",
      modality: "Virtual / Bimodal",
      duration: "2 Años",
    },
    {
      code: "MATIE",
      name: "Maestría en Tecnología e Innovación Educativa",
      desc: "Formación interdisciplinaria para el diseño de entornos virtuales de aprendizaje, gamificación e inclusión pedagógica digital.",
      modality: "100% Virtual",
      duration: "2 Años",
    },
    {
      code: "MAGIT",
      name: "Maestría en Gestión y Auditoría de la Innovación Tecnológica",
      desc: "Alta dirección estratégica de activos digitales, ciberseguridad corporativa, cumplimiento normativo y transformación digital.",
      modality: "Virtual / Híbrida",
      duration: "2 Años",
    },
  ];

  return (
    <PageTemplate
      pillar="Oferta Académica"
      pillarHref="/bachillerato"
      title="Posgrados y Maestrías en Tecnologías de Información"
      badge="Formación de Cuarto Nivel"
      description="Programas de maestría profesional de alto nivel orientados a la especialización técnica, dirección estratégica e innovación en la era digital."
      icon={<Sparkles className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Bachillerato en Sistemas", href: "/bachillerato" },
        { label: "Licenciatura en Sistemas", href: "/oferta-academica/licenciatura" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Oferta Oficial de Maestrías
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {masterPrograms.map((prog) => (
            <div key={prog.code} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-una-red/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-xs font-black text-una-red bg-red-50 px-2 py-0.5 rounded">
                  {prog.code}
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900 leading-snug">
                  {prog.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                <div className="flex justify-between">
                  <span>Modalidad:</span>
                  <strong className="text-slate-800">{prog.modality}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Duración:</span>
                  <strong className="text-slate-800">{prog.duration}</strong>
                </div>
                <button className="w-full mt-2 py-2 rounded-lg bg-una-blue hover:bg-una-red text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                  <span>Más Información</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
