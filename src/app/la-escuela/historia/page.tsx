import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function HistoriaPage() {
  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Acerca de la Escuela e Historia"
      badge="Reseña Institucional"
      description="Fundada para liderar el desarrollo computacional y tecnológico en Costa Rica, formando generaciones de profesionales en sistemas de información con excelencia y vocación social."
      icon={<BookOpen className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Ver Acreditación SINAES", href: "/la-escuela/acreditacion" },
        { label: "Plan de Estudios Bachillerato", href: "/bachillerato" },
        { label: "Directorio Académico", href: "/la-escuela/directorio" },
      ]}
    >
      <div className="space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-heading font-black text-base text-una-blue">Misión Oficial</h3>
            <p>
              Formar profesionales humanistas e íntegros en computación e informática, capaces de generar soluciones tecnológicas innovadoras, sostenibles y de alto impacto nacional e internacional a través de la docencia, investigación y extensión social.
            </p>
          </div>
          <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-heading font-black text-base text-una-blue">Visión</h3>
            <p>
              Ser la unidad académica referente en América Central por su vanguardia en ciencias de la computación, acreditación de calidad rigurosa, liderazgo ético y vinculación proactiva con el sector productivo y la sociedad.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading font-black text-base text-una-blue">Hitos Históricos</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>1980:</strong> Creación del Departamento de Informática en la Facultad de Ciencias Exactas y Naturales.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>1992:</strong> Establecimiento oficial como Escuela de Informática y lanzamiento del Bachillerato y Licenciatura en Sistemas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>2003:</strong> Primera acreditación oficial otorgada por el Sistema Nacional de Acreditación de la Educación Superior (SINAES).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-una-red shrink-0 mt-0.5" />
              <span><strong>2026:</strong> Implementación del nuevo plan curricular innovador con énfasis en Inteligencia Artificial, Cloud Computing y Ciberseguridad.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
