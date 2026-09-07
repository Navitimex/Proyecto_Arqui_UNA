/**
 * PROYECTO ACADÉMICO CON FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - Universidad Nacional (UNA)
 * Página Principal (Home): Prototipo no oficial de la Escuela de Informática
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  FileText,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  Cpu,
  Cloud,
  CheckCircle2,
  Building,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  BookOpen,
  Laptop,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [showcaseSlide, setShowcaseSlide] = useState<number>(0);

  const showcaseSlides = [
    {
      badge: "CALIDAD ACADÉMICA",
      badgeColor: "bg-emerald-700 text-emerald-100",
      image: "/images/acreditacion.jpg",
      title: "Acreditación SINAES de Calidad Internacional",
      subtitle:
        "Estándar de excelencia pedagógica y rigor curricular con validez y reconocimiento global.",
    },
    {
      badge: "ADMISIÓN 2026",
      badgeColor: "bg-una-red text-white",
      image: "/images/admision.jpg",
      title: "Proceso de Admisión y Matrícula Abierta",
      subtitle:
        "Conoce los requisitos de ingreso a la carrera de Bachillerato en Ingeniería en Sistemas de Información.",
    },
  ];

  return (
    <div className="bg-[#FAF8FF] min-h-screen space-y-12 pb-16">
      {/* ==========================================
          1. HERO SECTION & INSTITUTIONAL SHOWCASE
          ========================================== */}
      <section className="bg-[#283044] text-white py-14 lg:py-18 px-4 sm:px-6 relative overflow-hidden border-b border-[#DADEEB]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Columna Izquierda: Mensaje y Llamados a la Acción */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pills institucionales */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-slate-200 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                CAMPUS OMAR DENGO • HEREDIA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-una-red/20 border border-una-red/40 text-[11px] font-bold text-[#FFAFA3] uppercase tracking-wide">
                <Shield className="w-3.5 h-3.5 text-una-red" />
                ACREDITADA SINAES
              </span>
            </div>

            {/* Título Principal */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight text-[#FAF8FF]">
                Escuela de Informática
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight text-[#FFAFA3]">
                Universidad Nacional
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
              Formando profesionales y líderes de excelencia en ingeniería de software,
              ciberseguridad e innovación tecnológica con vocación social para transformar Costa
              Rica y el mundo.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/bachillerato"
                className="px-5 py-3 rounded-lg bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-red-900/30 flex items-center gap-2 group"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Conocer Plan de Estudios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/pps"
                className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Trámites Estudiantiles</span>
              </Link>
            </div>

            {/* Kickers inferiores */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acreditación Oficial SINAES</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Red Internacional de Investigación TIC</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Vitrina / Showcase Slider */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C2230] rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl relative">
              {/* Imagen Showcase */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src={showcaseSlides[showcaseSlide].image}
                  alt={showcaseSlides[showcaseSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2230] via-transparent to-black/30" />
                <span
                  className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${showcaseSlides[showcaseSlide].badgeColor}`}
                >
                  {showcaseSlides[showcaseSlide].badge}
                </span>
              </div>

              {/* Contenido Showcase */}
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="font-heading font-black text-white text-base sm:text-lg leading-snug">
                  {showcaseSlides[showcaseSlide].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {showcaseSlides[showcaseSlide].subtitle}
                </p>

                {/* Controles de Slide */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-700/50 mt-4">
                  <div className="flex items-center gap-2">
                    {showcaseSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setShowcaseSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          showcaseSlide === idx ? "w-6 bg-una-red" : "w-2 bg-slate-600"
                        }`}
                        aria-label={`Ir al slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setShowcaseSlide((prev) =>
                          prev === 0 ? showcaseSlides.length - 1 : prev - 1
                        )
                      }
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Slide anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setShowcaseSlide((prev) =>
                          prev === showcaseSlides.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Siguiente slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          ACCESOS RÁPIDOS Y TRÁMITES FRECUENTES (HUB ESTUDIANTIL)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-una-red block">
                AUTOSERVICIO & ACCESO DIRECTO
              </span>
              <h2 className="text-base sm:text-lg font-black font-heading text-una-blue">
                Trámites y Servicios Más Consultados
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Acceso en 1 clic a las gestiones frecuentes del ciclo lectivo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tarjeta 1: Plan de Estudios */}
            <Link
              href="/bachillerato"
              className="p-4 rounded-xl border border-slate-200 hover:border-una-red hover:shadow-sm bg-slate-50/60 hover:bg-white transition-all group space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 text-una-red flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-una-red transition-colors flex items-center justify-between">
                  <span>Malla Bachillerato</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-una-red transition-all" />
                </h3>
                <p className="text-[11.5px] text-slate-500 leading-snug mt-1">
                  Malla 2026 interactiva, créditos y prerrequisitos.
                </p>
              </div>
            </Link>

            {/* Tarjeta 2: Formulario PPS */}
            <Link
              href="/pps"
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-sm bg-slate-50/60 hover:bg-white transition-all group space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>Práctica PPS (F-01)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </h3>
                <p className="text-[11.5px] text-slate-500 leading-snug mt-1">
                  Descarga del Formulario F-01 y requisitos de 480 hrs.
                </p>
              </div>
            </Link>

            {/* Tarjeta 3: Sobrepasos */}
            <Link
              href="/comunidad/sobrepasos"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-sm bg-slate-50/60 hover:bg-white transition-all group space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  <span>Sobrepasos Matrícula</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-600 transition-all" />
                </h3>
                <p className="text-[11.5px] text-slate-500 leading-snug mt-1">
                  Solicitud de cupos extraordinarios y fechas oficiales.
                </p>
              </div>
            </Link>

            {/* Tarjeta 4: Portal TIC */}
            <a
              href="https://www.dtic.una.ac.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm bg-slate-50/60 hover:bg-white transition-all group space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                  <span>Soporte y Clave TIC</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-emerald-600 transition-all" />
                </h3>
                <p className="text-[11.5px] text-slate-500 leading-snug mt-1">
                  Restablecer clave @una.cr y servicios DTIC oficiales.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FRANJA INSTITUCIONAL Y MÉTRICAS CLAVE
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="space-y-1 sm:px-4 first:pl-0">
              <div className="text-3xl sm:text-4xl font-black font-heading text-una-blue tracking-tight">
                +35
              </div>
              <div className="font-heading font-bold text-sm text-slate-800">
                Años de Liderazgo
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pioneros en la educación informática y tecnológica de Costa Rica.
              </p>
            </div>

            <div className="space-y-1 sm:px-4 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black font-heading text-una-blue tracking-tight">
                100%
              </div>
              <div className="font-heading font-bold text-sm text-slate-800">
                Inserción Laboral
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Graduados vinculados al sector tecnológico nacional e internacional.
              </p>
            </div>

            <div className="space-y-1 sm:px-4 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black font-heading text-una-red tracking-tight">
                SINAES
              </div>
              <div className="font-heading font-bold text-sm text-slate-800">
                Acreditación Oficial
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Estándares de calidad y rigor curricular con validez global.
              </p>
            </div>

            <div className="space-y-1 sm:px-4 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black font-heading text-una-blue tracking-tight">
                +1,200
              </div>
              <div className="font-heading font-bold text-sm text-slate-800">
                Estudiantes Activos
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Comunidad académica en sede central y campus regionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. OFERTA ACADÉMICA Y EJES DE FORMACIÓN (MALLA 2026)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-una-red block">
              FORMACIÓN PROFESIONAL DE VANGUARDIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-una-blue">
              Ejes Formativos de la Carrera
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md md:text-right leading-relaxed">
            La Malla Curricular 2026 está estructurada para formar profesionales líderes
            en las áreas de mayor impacto y proyección de la industria tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Eje 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-red-50 group-hover:text-una-red transition-colors">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-una-red transition-colors">
              Ingeniería & Software
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diseño de sistemas escalables, microservicios, metodologías ágiles, pruebas automatizadas y DevOps.
            </p>
          </div>

          {/* Eje 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-red-50 group-hover:text-una-red transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-una-red transition-colors">
              Inteligencia Artificial
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Machine Learning, procesamiento de lenguaje natural, visión por computadora y analítica de datos.
            </p>
          </div>

          {/* Eje 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-red-50 group-hover:text-una-red transition-colors">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-una-red transition-colors">
              Cloud & Infraestructura
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Infraestructura moderna en la nube, virtualización, redes de alta velocidad y gobernanza tecnológica.
            </p>
          </div>

          {/* Eje 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-red-50 group-hover:text-una-red transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-una-red transition-colors">
              Ciberseguridad & Gestión
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protección de activos digitales, auditoría de sistemas, estándares éticos y gestión estratégica TIC.
            </p>
          </div>
        </div>

        {/* Banner complementario Malla 2026 */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-xl">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              PLAN DE ESTUDIOS VIGENTE
            </div>
            <h3 className="text-lg sm:text-xl font-black font-heading text-white">
              Bachillerato en Ingeniería en Sistemas de Información (Malla 2026)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore la distribución semestral de asignaturas, requisitos académicos y perfil profesional de salida.
            </p>
          </div>

          <Link
            href="/bachillerato"
            className="px-5 py-3 rounded-xl bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md shrink-0"
          >
            <span>Ver Plan de Estudios Completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==========================================
          4. NOTICIAS Y EVENTOS DE LA ESCUELA
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase text-una-red tracking-wider block">
              ACTUALIDAD & ACONTECIMIENTOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-una-blue">
              Noticias y Eventos de la Escuela
            </h2>
          </div>

          <Link
            href="/bachillerato"
            className="text-xs font-bold text-una-red hover:underline inline-flex items-center gap-1"
          >
            <span>Ver todas las noticias</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cuadrícula de 3 Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Noticia 1 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/images/noticia-pps.jpg"
                  alt="Convocatoria PPS"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold">
                  Convocatorias
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>12 de Enero, 2026</span>
                </div>

                <h3 className="font-heading font-black text-slate-900 text-base leading-snug group-hover:text-una-red transition-colors">
                  Convocatoria abierta para Práctica Profesional Supervisada Ciclo I-2026
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  La coordinación de PPS informa la apertura del periodo de recepción de solicitudes
                  para estudiantes avanzados con el 80% del plan...
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="/pps"
                className="text-xs font-bold text-una-red hover:underline inline-flex items-center gap-1"
              >
                <span>Leer comunicado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Noticia 2 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/images/noticia-hackathon.jpg"
                  alt="Hackathon Nacional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-una-red text-white text-[10px] font-bold">
                  Logro Estudiantil
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>8 de Enero, 2026</span>
                </div>

                <h3 className="font-heading font-black text-slate-900 text-base leading-snug group-hover:text-una-red transition-colors">
                  Estudiantes de Informática UNA obtienen primer lugar en Hackathon Nacional
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  El equipo multidisciplinario desarrolló una solución de inteligencia artificial
                  orientada a la mitigación de riesgos climáticos en cuencas...
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="/bachillerato"
                className="text-xs font-bold text-una-red hover:underline inline-flex items-center gap-1"
              >
                <span>Conocer proyecto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Noticia 3 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/images/noticia-ciberseguridad.jpg"
                  alt="Taller de IA y Ciberseguridad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-emerald-600 text-white text-[10px] font-bold">
                  Capacitación
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>4 de Enero, 2026</span>
                </div>

                <h3 className="font-heading font-black text-slate-900 text-base leading-snug group-hover:text-una-red transition-colors">
                  Taller de Inteligencia Artificial Aplicada y Ciberseguridad
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  Jornada formativa internacional impartida por especialistas de centros de
                  investigación para la detección proactiva de intrusiones en redes...
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="/investigacion/actividades"
                className="text-xs font-bold text-una-red hover:underline inline-flex items-center gap-1"
              >
                <span>Inscripción y detalles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ==========================================
          5. BANNER DE CONTACTO Y ATENCIÓN ESTUDIANTIL
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EEF2FF] rounded-3xl p-8 sm:p-10 border border-[#E0E7FF] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>LUNES A VIERNES • 8:00 AM - 5:00 PM</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-una-blue leading-tight">
              ¿Dudas con tus trámites académicos o matrícula?
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Nuestro equipo de secretaría académica, orientación vocacional y consejería
              estudiantil está disponible en el Campus Omar Dengo o vía atención digital inmediata.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.dtic.una.ac.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#8B0000] hover:bg-una-red-dark text-white font-heading font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Mesa de Ayuda Virtual (DTIC)</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>

            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-heading font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <Building className="w-4 h-4 text-slate-600" />
              <span>Ubicación en Campus</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
