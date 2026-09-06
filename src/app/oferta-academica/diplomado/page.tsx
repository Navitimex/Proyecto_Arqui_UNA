import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { BookMarked, CheckCircle2, Clock } from "lucide-react";

export default function DiplomadoPage() {
  return (
    <PageTemplate
      pillar="Oferta Académica"
      pillarHref="/bachillerato"
      title="Diplomado en Sistemas de Información"
      badge="Título de Salida Lateral"
      description="Certificación universitaria intermedia otorgada al aprobar con éxito los primeros dos años (I al IV ciclo) del plan de estudios de la carrera."
      icon={<BookMarked className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Ver Malla Curricular Bachillerato", href: "/bachillerato" },
        { label: "Trámites de Matrícula", href: "/pps" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Perfil de Competencias del Diplomado
          </h3>
          <p>
            El Diplomado en Sistemas de Información acredita habilidades sólidas en programación orientada a objetos, bases de datos relacionales intermedias, estructuras de datos y soporte técnico operativo, permitiendo una rápida inserción laboral temprana como Desarrollador Junior mientras se completa el Bachillerato.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-black text-sm text-una-blue">
            Requisitos de Obtención
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Aprobación completa de las 16 asignaturas correspondientes al Ciclo I, II, III y IV.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Estar al día con las obligaciones financieras y administrativas con la Universidad Nacional.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Solicitar la certificación ante el Departamento de Registro UNA en las fechas de graduación ordinaria.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
