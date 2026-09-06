import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { ClipboardList, ExternalLink, Calendar } from "lucide-react";

export default function TramitesDocentesPage() {
  return (
    <PageTemplate
      pillar="Comunidad"
      pillarHref="/"
      title="Trámites y Gestiones Internas Docentes"
      badge="Gestión Académica"
      description="Punto de acceso para solicitudes de permisos, actas de notas, asignación de laboratorios y gestiones de cátedra para el cuerpo docente."
      icon={<ClipboardList className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Plantillas de Cátedra", href: "/comunidad/plantillas-docentes" },
        { label: "Sistema SIGESA", href: "https://sigesa.una.ac.cr", external: true },
        { label: "Biblioteca SIBEUNA", href: "https://sibeuna.una.ac.cr", external: true },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Calendario de Entregas y Trámites
          </h3>
          <p>
            Los docentes pueden gestionar en esta sección la inclusión de actas digitales, solicitudes de viáticos para giras académicas, reservación anticipada de aulas especializadas y actualización de su currículum oficial en el sistema SIGESA.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
