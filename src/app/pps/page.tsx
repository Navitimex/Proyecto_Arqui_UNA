"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ChevronDown,
  Clock,
  Building,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { useToast } from "@/components/Toast";

interface FAQItem {
  q: string;
  a: string;
}

export default function PPSPage() {
  const { showToast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "¿Cuáles son los requisitos académicos previos para matricular la PPS?",
      a: "Haber aprobado la totalidad de los cursos correspondientes del I al VII ciclo del plan de estudios del Bachillerato en Ingeniería en Sistemas de Información (incluyendo Sistemas Operativos, Redes y Bases de Datos II).",
    },
    {
      q: "¿Cuántas horas comprende la Práctica Profesional y en qué modalidad?",
      a: "Comprende un mínimo de 480 horas efectivas de trabajo profesional en una organización, empresa pública/privada o proyecto avalado por la Comisión de PPS de la Escuela.",
    },
    {
      q: "¿En qué formato debo presentar el Formulario F-01?",
      a: "El Formulario F-01 debe completarse digitalmente, estar firmado por el tutor empresarial y el estudiante, y enviarse en formato PDF a la coordinación de PPS antes de la fecha límite establecida en el calendario académico.",
    },
    {
      q: "¿Puedo realizar la práctica en la empresa donde trabajo actualmente?",
      a: "Sí, siempre que el proyecto asignado sea de desarrollo tecnológico o consultoría inédita, cuente con un tutor profesional con grado mínimo de licenciatura en TI y no corresponda a sus tareas operativas cotidianas.",
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header Institucional de la Página */}
      <section className="bg-una-blue text-white py-12 px-4 sm:px-6 border-b-4 border-una-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav className="text-xs text-slate-400 flex items-center gap-1.5" aria-label="Miga de pan">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>›</span>
            <span>Estudiantes y Egresados</span>
            <span>›</span>
            <span className="text-white font-semibold">Práctica Profesional Supervisada (PPS)</span>
          </nav>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-una-red/20 border border-una-red/40 text-red-200 text-xs font-bold uppercase tracking-wider">
              <span>Requisito Oficial de Graduación • VIII Ciclo</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
              Práctica Profesional Supervisada (PPS)
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Punto central de información, requisitos normativos, cronogramas y descarga del{" "}
              <strong>Formulario Oficial de Aprobación (F-01)</strong> para estudiantes de término.
            </p>
          </div>
        </div>
      </section>

      {/* Tarjetas Resumen de Requisitos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-una-red flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Dedicación</span>
              <span className="text-lg font-black font-heading text-una-blue">480 Horas</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Nivel del Plan</span>
              <span className="text-lg font-black font-heading text-una-blue">8º Semestre</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Sede / Modalidad</span>
              <span className="text-lg font-black font-heading text-una-blue">Presencial / Híbrido</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Inscripción</span>
              <span className="text-lg font-black font-heading text-una-blue">Ciclo I y II</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DOCUMENTACIÓN Y DESCARGA FORMULARIO F-01 */}
      <section id="documentacion" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border-2 border-una-red/40 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-una-red uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Documento Clave de Validación</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-una-blue">
                Formularios y Documentación Oficial de PPS
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Descarga directamente las plantillas vigentes aprobadas por el Consejo de Unidad de la Escuela.
              </p>
            </div>

            <button
              onClick={() =>
                showToast("Descargando Formulario F-01_Aprobacion_PPS_UNA_2026.docx...")
              }
              className="px-5 py-3 rounded-lg bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-red-900/20 transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Formulario F-01 (.DOCX)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-xs text-slate-800 block">
                F-01: Aprobación de Tema de PPS
              </span>
              <p className="text-[11px] text-slate-600">
                Detalla la descripción de la empresa, objetivos, alcance y cronograma de 480 horas.
              </p>
              <button
                onClick={() => showToast("Descargando Formulario F-01 Oficial...")}
                className="text-xs font-bold text-una-red hover:underline flex items-center gap-1 pt-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar F-01 (Word)</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-xs text-slate-800 block">
                F-02: Evaluación Parcial del Tutor
              </span>
              <p className="text-[11px] text-slate-600">
                Instrumento de seguimiento a las 240 horas firmado por la jefatura inmediata.
              </p>
              <button
                onClick={() => showToast("Descargando Formulario F-02...")}
                className="text-xs font-bold text-una-red hover:underline flex items-center gap-1 pt-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar F-02 (PDF)</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-xs text-slate-800 block">
                Guía Oficial para el Informe Final
              </span>
              <p className="text-[11px] text-slate-600">
                Estructura formal con normas APA y directrices para la defensa ante tribunal.
              </p>
              <button
                onClick={() => showToast("Descargando Guía de Informe Final...")}
                className="text-xs font-bold text-una-red hover:underline flex items-center gap-1 pt-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Guía (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQS) */}
      <section id="faqs" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold text-una-red uppercase tracking-wider">
              Resolución de Dudas
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-heading text-una-blue mt-1">
              Preguntas Frecuentes sobre la PPS
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="py-3.5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left font-heading font-bold text-sm text-slate-900 hover:text-una-red transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180 text-una-red" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-2 border-l-2 border-una-red">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
