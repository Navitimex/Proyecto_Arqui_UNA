import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { GraduationCap, Clock, Award, CheckCircle2 } from "lucide-react";

export default function LicenciaturaPage() {
  return (
    <PageTemplate
      pillar="Oferta Académica"
      pillarHref="/bachillerato"
      title="Licenciatura en Ingeniería en Sistemas de Información"
      badge="Grado Profesional Superior"
      description="Programa de profundización profesional enfocado en alta dirección tecnológica, arquitectura empresarial, gestión estratégica de TI y Trabajo Final de Graduación."
      icon={<GraduationCap className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Bachillerato en Sistemas", href: "/bachillerato" },
        { label: "Trabajo Final de Graduación (TFG)", href: "/comunidad/tfg" },
        { label: "Posgrados y Maestrías", href: "/oferta-academica/posgrados" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Duración</span>
            <span className="text-base font-black font-heading text-una-blue">1 Año (2 Ciclos)</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Requisito</span>
            <span className="text-base font-black font-heading text-una-blue">Bachiller en Sistemas</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Modalidad</span>
            <span className="text-base font-black font-heading text-una-blue">Híbrida / Noche</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Acreditación</span>
            <span className="text-base font-black font-heading text-emerald-600">SINAES Oficial</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading font-black text-base text-una-blue">
            Ejes Formativos de la Licenciatura
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>Arquitectura Empresarial y Gobernanza:</strong> Alineamiento estratégico entre objetivos de negocio y ecosistemas tecnológicos complejos (TOGAF, COBIT).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>Formulación y Evaluación de Megaproyectos TI:</strong> Métodos cuantitativos de viabilidad económica, financiera y de impacto social.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>Trabajo Final de Graduación (TFG):</strong> Modalidades de Tesis de Grado, Proyecto de Graduación o Seminario de Graduación.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
