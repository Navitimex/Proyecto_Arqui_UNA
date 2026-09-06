import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Award, HeartHandshake, CheckCircle2, ExternalLink } from "lucide-react";

export default function BecasPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Junta de Becas y Bienestar Estudiantil"
      badge="Apoyo Socioeconómico"
      description="Sistema integral de beneficios, exoneración de costos de matrícula, residencias universitarias y becas por excelencia académica y cultural de la UNA."
      icon={<HeartHandshake className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Vicerrectoría de Vida Estudiantil", href: "https://www.vidaestudiantil.una.ac.cr", external: true },
        { label: "Carné Estudiantil", href: "/comunidad/carne-estudiantil" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Categorías de Becas Disponibles
          </h3>
          <p>
            La Universidad Nacional garantiza que ninguna persona con vocación y capacidad académica abandone sus estudios por razones socioeconómicas, ofreciendo becas que cubren aranceles, subsidio mensual de alimentación y residencia estudiantil en Heredia.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
