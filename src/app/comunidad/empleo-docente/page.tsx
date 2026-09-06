import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { UserCheck, FileCheck, CheckCircle2 } from "lucide-react";

export default function EmpleoDocentePage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/"
      title="Oportunidades de Empleo y Concursos Docentes"
      badge="Reclutamiento Académico"
      description="Concursos de antecedentes, plazas interinas y convocatorias abiertas para la contratación de profesorado en áreas de ciencias de la computación."
      icon={<UserCheck className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Directorio de Autoridades", href: "/la-escuela/directorio" },
        { label: "Normativas Oficiales", href: "/la-escuela/normativas" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Requisitos Generales para Postulación Docente
          </h3>
          <p>
            Los concursos para plazas docentes en la Escuela de Informática se rigen por el Reglamento del Estatuto Orgánico y las disposiciones de la Comisión de Régimen Académico de la UNA.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-black text-sm text-una-blue">
            Perfil Mínimo Requerido
          </h4>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Grado mínimo de Licenciatura o Maestría en Ingeniería en Sistemas, Ciencias de la Computación o afines.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Incorporación activa y al día en el Colegio de Profesionales en Informática y Computación (CPIC).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Experiencia comprobada en docencia universitaria o trayectoria profesional destacada en industria.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
