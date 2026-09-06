import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Search, Database, Network, Cpu, ShieldCheck } from "lucide-react";

export default function LineasInvestigacionPage() {
  const lineas = [
    {
      title: "Inteligencia Artificial y Aprendizaje Automático",
      desc: "Modelado predictivo, procesamiento de lenguaje natural, visión por computadora aplicada a la agricultura de precisión y salud digital.",
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Ingeniería de Datos y Sistemas Inteligentes",
      desc: "Bases de datos no convencionales, ontologías computacionales, gobernanza analítica y procesamiento de flujos masivos de datos.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Ciberseguridad, Redes y Sistemas Distribuidos",
      desc: "Seguridad defensiva, protocolos de comunicación IoT, resiliencia perimetral y tecnologías de computación en la nube.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Tecnología Educativa y Computación Social",
      desc: "Plataformas para la inclusión tecnológica, análisis de accesibilidad web, analítica de aprendizaje y gamificación pedagógica.",
      icon: <Network className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Líneas de Investigación Oficiales"
      badge="Generación de Conocimiento"
      description="Ejes estratégicos de investigación científica e innovación aplicada aprobados por el Consejo de Unidad y la Vicerrectoría de Investigación de la UNA."
      icon={<Search className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Proyectos Vigentes", href: "/investigacion/proyectos" },
        { label: "Laboratorio de Bases de Datos", href: "/investigacion/laboratorios/bases-datos" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Áreas Temáticas Prioritarias
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lineas.map((linea, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white shadow-sm">{linea.icon}</div>
                <h4 className="font-heading font-bold text-sm text-slate-900">{linea.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{linea.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
