import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Network, Award, CheckCircle2 } from "lucide-react";

export default function CiscoPage() {
  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Academia CISCO Networking Academy UNA"
      badge="Certificación Internacional"
      description="Centro de formación autorizado por Cisco Systems para la preparación oficial en redes, switching, routing y ciberseguridad con instructores certificados."
      icon={<Network className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Cursos de Actualización", href: "/investigacion/cursos-actualizacion" },
        { label: "Academia ICAI", href: "/investigacion/icai" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Programas Oficiales de Certificación
          </h3>
          <p>
            Los cursos de la Academia CISCO brindan acceso a la plataforma global NetAcad, simuladores de vanguardia Packet Tracer y equipos físicos en rack para la preparación de los exámenes de certificación CCNA y CyberOps Associate.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-black text-sm text-una-blue">
            Módulos Impartidos
          </h4>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CCNA 1: Introduction to Networks (ITN)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CCNA 2: Switching, Routing, and Wireless Essentials (SRWE)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CCNA 3: Enterprise Networking, Security, and Automation (ENSA)</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
