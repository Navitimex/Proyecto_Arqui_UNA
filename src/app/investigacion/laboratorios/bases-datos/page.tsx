import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Database, Server, Cpu } from "lucide-react";

export default function LabBasesDatosPage() {
  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Laboratorio de Bases de Datos y Gestión del Conocimiento"
      badge="Infraestructura Científica"
      description="Espacio de investigación aplicada equipado para experimentación con motores relacionales, NoSQL, data warehouses y procesamiento masivo de datos."
      icon={<Database className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Lab. de Procesamiento de Imágenes", href: "/investigacion/laboratorios/imagenes" },
        { label: "Líneas de Investigación", href: "/investigacion/lineas" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Capacidades Técnicas del Laboratorio
          </h3>
          <p>
            El laboratorio cuenta con clusters de servidores dedicados a la investigación en gobernanza de datos, optimización de queries complejas, minería de datos y arquitecturas escalables de Big Data para apoyar proyectos de estudiantes de grado y posgrado.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
