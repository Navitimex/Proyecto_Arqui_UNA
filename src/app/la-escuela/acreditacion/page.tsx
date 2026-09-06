import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { ShieldCheck, Award, CheckCircle2, Download } from "lucide-react";

export default function AcreditacionPage() {
  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Acreditación Oficial SINAES"
      badge="Calidad Certificada"
      description="Certificación de excelencia académica del Bachillerato y Licenciatura en Sistemas otorgada por el Sistema Nacional de Acreditación de la Educación Superior."
      icon={<ShieldCheck className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Plan de Estudios Bachillerato", href: "/bachillerato" },
        { label: "Informes de Autoevaluación", href: "/la-escuela/autoevaluacion" },
      ]}
    >
      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
          <Award className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-heading font-black text-sm sm:text-base text-emerald-950">
              Sello Oficial de Calidad SINAES Vigente (2024 - 2028)
            </h3>
            <p className="text-emerald-900 text-xs">
              La carrera de Bachillerato en Ingeniería en Sistemas de Información cumple con los 16 criterios de calidad internacional, pertinencia social y rigor científico fijados por el órgano oficial acreditador de Costa Rica.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-black text-sm text-una-blue">
            Beneficios para la Persona Graduada
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Preferencia legal en contrataciones y concursos del Estado costarricense (Ley N° 8256).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Reconocimiento internacional de competencias para estudios de posgrado en el extranjero.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Garantía de actualización continua en laboratorios, equipamiento y formación docente.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
