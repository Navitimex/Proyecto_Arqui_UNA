import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { CreditCard, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CarneEstudiantilPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/pps"
      title="Carné Estudiantil Digital UNA"
      badge="Identidad Universitaria"
      description="Identificación oficial para el acceso a laboratorios de cómputo, préstamo bibliotecario en SIBEUNA, servicios de salud estudiantil y beneficios comerciales."
      icon={<CreditCard className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Portal de Registro UNA", href: "https://www.registro.una.ac.cr", external: true },
        { label: "Junta de Becas y Bienestar", href: "/comunidad/becas" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Activación del Carné Digital
          </h3>
          <p>
            El carné estudiantil digital se genera directamente a través de la aplicación móvil institucional de la Universidad Nacional o mediante el portal web del Departamento de Registro, cargando una fotografía formal tipo pasaporte con fondo blanco.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
