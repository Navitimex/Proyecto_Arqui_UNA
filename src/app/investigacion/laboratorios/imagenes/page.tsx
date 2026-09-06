import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Eye, Cpu, Camera } from "lucide-react";

export default function LabImagenesPage() {
  return (
    <PageTemplate
      pillar="Investigación"
      pillarHref="/"
      title="Laboratorio de Procesamiento de Imágenes y Visión por Computadora"
      badge="Infraestructura Científica"
      description="Centro de investigación en análisis visual automatizado, reconocimiento de patrones, realidad aumentada y algoritmos de visión computacional con redes neuronales."
      icon={<Eye className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Lab. de Bases de Datos", href: "/investigacion/laboratorios/bases-datos" },
        { label: "Líneas de Investigación", href: "/investigacion/lineas" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="font-heading font-black text-base text-una-blue">
            Líneas de Trabajo del Laboratorio
          </h3>
          <p>
            Equipado con estaciones de trabajo con GPUs de alto rendimiento para el entrenamiento de modelos de visión artificial (YOLO, OpenCV, PyTorch) aplicados a la clasificación de cultivos agrícolas, diagnóstico médico asistido e interfaces gestuales accesibles.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
