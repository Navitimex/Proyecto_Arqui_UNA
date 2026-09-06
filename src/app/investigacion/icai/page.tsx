import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Cpu, Award, Sparkles } from "lucide-react";

export default function IcaiPage() {
  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Instituto de Capacitación y Actualización en Informática (ICAI)"
      badge="Formación Continua UNA"
      description="Programa emblemático de extensión universitaria dedicado a la alfabetización digital, formación vocacional técnica y actualización tecnológica permanente para la sociedad."
      icon={<Cpu className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Cursos de Actualización", href: "/investigacion/cursos-actualizacion" },
        { label: "Academia CISCO UNA", href: "/investigacion/cisco" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Impacto Social y Extensión del ICAI
          </h3>
          <p>
            Desde 1996, el ICAI capacita anualmente a miles de personas entre estudiantes de secundaria, profesionales y adultos mayores en competencias ofimáticas, fundamentos de programación, desarrollo web y uso responsable de herramientas de inteligencia artificial.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
