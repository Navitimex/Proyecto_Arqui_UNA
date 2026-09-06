import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { FolderGit2, CheckCircle2 } from "lucide-react";

export default function ProyectosInvestigacionPage() {
  const proyectos = [
    { code: "PR-INF-01-2025", title: "Monitoreo Ambiental Inteligente con Redes IoT y Edge Computing", lead: "Dr. Carlos Rojas", state: "En Ejecución" },
    { code: "PR-INF-04-2024", title: "Detección Temprana de Amenazas Cibernéticas mediante Modelos de Deep Learning", lead: "Dra. Sofía Valverde", state: "En Ejecución" },
    { code: "PR-INF-02-2023", title: "Optimización de Consultas en Arquitecturas de Datos Heterogéneas y NoSQL", lead: "M.Sc. Fernando Mora", state: "Fase de Cierre" },
  ];

  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Proyectos de Investigación Vigentes"
      badge="Investigación Oficial"
      description="Iniciativas científicas y de desarrollo tecnológico financiadas por el Fondo Institucional de Desarrollo Académico (FIDA) y organismos cooperantes."
      icon={<FolderGit2 className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Líneas de Investigación", href: "/investigacion/lineas" },
        { label: "Laboratorios Especializados", href: "/investigacion/laboratorios/bases-datos" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Proyectos Activos Registrados ante la Vicerrectoría
        </h3>

        <div className="space-y-3">
          {proyectos.map((p, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-una-red bg-red-50 px-2 py-0.5 rounded">
                    {p.code}
                  </span>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    {p.state}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900">{p.title}</h4>
                <span className="text-xs text-slate-500">Investigador Principal: <strong>{p.lead}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
