import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Calendar, Users, Award, ExternalLink } from "lucide-react";

export default function ActividadesDivulgacionPage() {
  const events = [
    { title: "Congreso Internacional de Computación e Informática (CICI-UNA)", date: "Octubre 2026", desc: "Presentación de ponencias científicas arbitradas y conferencias magistrales con ponentes de IEEE y ACM." },
    { title: "Jornadas de Innovación y Ciberseguridad", date: "Julio 2026", desc: "Competencia de tipo Capture The Flag (CTF) y talleres prácticos en laboratorios de redes." },
    { title: "Feria de Proyectos de Ingeniería de Software", date: "Noviembre 2026", desc: "Exposición pública de soluciones desarrolladas por estudiantes de Bachillerato para empresas invitadas." },
  ];

  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Actividades y Divulgación Científica"
      badge="Eventos y Extensión"
      description="Congresos, seminarios técnicos, hackathones y foros de divulgación que conectan a la comunidad académica con el ecosistema tecnológico global."
      icon={<Calendar className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Líneas de Investigación", href: "/investigacion/lineas" },
        { label: "Canal de YouTube", href: "https://www.youtube.com", external: true },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Eventos Académicos del Año
        </h3>

        <div className="space-y-3">
          {events.map((ev, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-una-red bg-red-50 px-2 py-0.5 rounded">
                  {ev.date}
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900">{ev.title}</h4>
                <p className="text-xs text-slate-600">{ev.desc}</p>
              </div>

              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-una-red hover:text-una-red text-xs font-bold text-slate-700 transition-colors shrink-0">
                <span>Detalles</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
