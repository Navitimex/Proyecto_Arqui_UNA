import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Layers, Calendar, CheckCircle2, AlertCircle } from "lucide-react";

export default function SobrepasosPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Sistema de Sobrepasos y Matrícula Extraordinaria"
      badge="Trámite Estudiantil Oficial"
      description="Procedimiento para la solicitud formal de inclusión de cupo en asignaturas del plan de estudios durante los períodos semestrales de matrícula ordinaria y extraordinaria."
      icon={<Layers className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Práctica Profesional (PPS)", href: "/pps" },
        { label: "Malla Curricular Bachillerato", href: "/bachillerato" },
        { label: "Mesa de Ayuda Técnica", href: "/servicios-tic#soporte-tecnico" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-sm text-amber-900">Período de Recepción de Solicitudes</h4>
            <p className="text-amber-800 text-xs">
              Las solicitudes de sobrepaso se gestionan exclusivamente durante los primeros tres días hábiles de la semana de matrícula ordinaria mediante el sistema oficial de la Escuela.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading font-black text-base text-una-blue">
            Criterios de Prioridad de Asignación
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Estudiantes en último año que requieran la materia para ingresar a la Práctica Profesional Supervisada (PPS).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Estudiantes con promedio ponderado anual superior a 8.5 que hayan aprobado la totalidad de requisitos previos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Capacidad física y de licenciamiento en los laboratorios de cómputo correspondientes al grupo.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
