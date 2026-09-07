/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - Universidad Nacional (UNA)
 * Componente Header: Megamenú de 4 pilares + Portal TIC para prototipo evaluativo.
 */

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  Laptop,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  FlaskConical,
  Users,
  KeyRound,
  LifeBuoy,
  Wifi,
  BookOpen,
  FileCheck2,
  Library,
  Building2,
  Clock,
  Award,
  FileText,
  Globe,
} from "lucide-react";
import {
  SITEMAP_NAVIGATION,
  PORTAL_TIC_ITEMS,
  NavCategory,
} from "@/data/navigation";

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  const pathname = usePathname();
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const openTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timers safely
  const cancelTimers = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  }, []);

  // Schedule close with a generous grace period (280ms)
  const scheduleClose = useCallback((delay = 280) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setActivePillar(null);
      setIsPortalOpen(false);
    }, delay);
  }, []);

  // Immediately close all dropdowns
  const closeImmediately = useCallback(() => {
    cancelTimers();
    setActivePillar(null);
    setIsPortalOpen(false);
  }, [cancelTimers]);

  // Pillar hover enter with a tiny 60ms debounce for deliberate mouse intent
  const handlePillarMouseEnter = (pillarId: string) => {
    cancelTimers();
    openTimerRef.current = setTimeout(() => {
      setIsPortalOpen(false);
      setActivePillar(pillarId);
    }, 60);
  };

  // Pillar click toggle
  const handlePillarClick = (pillarId: string, e: React.MouseEvent) => {
    e.preventDefault();
    cancelTimers();
    setIsPortalOpen(false);
    setActivePillar((prev) => (prev === pillarId ? null : pillarId));
  };

  // Portal TIC hover enter
  const handlePortalMouseEnter = () => {
    cancelTimers();
    openTimerRef.current = setTimeout(() => {
      setActivePillar(null);
      setIsPortalOpen(true);
    }, 60);
  };

  // Portal TIC click toggle
  const handlePortalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    cancelTimers();
    setActivePillar(null);
    setIsPortalOpen((prev) => !prev);
  };

  // Close when clicking outside header
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeImmediately();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      cancelTimers();
    };
  }, [closeImmediately, cancelTimers]);

  // Close when pressing Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeImmediately();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeImmediately]);

  // Close when pathname changes (user navigated)
  useEffect(() => {
    closeImmediately();
  }, [pathname, closeImmediately]);

  // Find the currently active category object for mega menu
  const currentCategory = SITEMAP_NAVIGATION.find(
    (cat) => cat.id === activePillar
  );

  // Helper icons for TIC services & institutional platforms (uniform styling)
  const getTicIcon = (title: string) => {
    const t = title.toLowerCase();
    const iconClass = "w-4 h-4 text-slate-600 group-hover:text-una-red transition-colors";
    if (t.includes("contraseña") || t.includes("clave"))
      return <KeyRound className={iconClass} />;
    if (t.includes("ayuda") || t.includes("soporte"))
      return <LifeBuoy className={iconClass} />;
    if (t.includes("aula"))
      return <BookOpen className={iconClass} />;
    if (t.includes("eduroam") || t.includes("wifi"))
      return <Wifi className={iconClass} />;
    if (t.includes("sigesa"))
      return <GraduationCap className={iconClass} />;
    if (t.includes("sibeuna") || t.includes("beca"))
      return <Library className={iconClass} />;
    if (t.includes("agde") || t.includes("document"))
      return <FileCheck2 className={iconClass} />;
    if (t.includes("secretari"))
      return <Building2 className={iconClass} />;
    if (t.includes("teletrabajo"))
      return <Laptop className={iconClass} />;
    if (t.includes("horario"))
      return <Clock className={iconClass} />;
    if (t.includes("acreditaci"))
      return <Award className={iconClass} />;
    if (t.includes("informe") || t.includes("transparencia"))
      return <FileText className={iconClass} />;
    return <Globe className={iconClass} />;
  };

  // Detección jerárquica de pilar activo (Wayfinding espacial permanente)
  const isPillarActive = (pillarId: string): boolean => {
    if (!pathname) return false;
    if (pillarId === "la-escuela") {
      return pathname.startsWith("/la-escuela");
    }
    if (pillarId === "oferta-academica") {
      return (
        pathname.startsWith("/oferta-academica") ||
        pathname === "/bachillerato" ||
        pathname === "/pps"
      );
    }
    if (pillarId === "investigacion") {
      return pathname.startsWith("/investigacion");
    }
    if (pillarId === "comunidad") {
      return (
        pathname.startsWith("/comunidad") ||
        pathname === "/pps"
      );
    }
    return false;
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-una-red shadow-sm transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* ==========================================
            LOGO OFICIAL NUEVO (ESCUELA DE INFORMÁTICA)
            ========================================== */}
        <Link
          href="/"
          onClick={closeImmediately}
          className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-una-red rounded-lg p-1 group"
          aria-label="Escuela de Informática - Universidad Nacional"
        >
          <div className="relative h-14 w-auto shrink-0 flex items-center justify-center">
            <img
              src="/images/logo-escuela-informatica.png"
              alt="Logo Escuela de Informática UNA"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </Link>

        {/* ==========================================
            NAVEGACIÓN PRINCIPAL DESKTOP (>= 1024px)
            ========================================== */}
        <div className="hidden lg:flex items-center justify-end flex-1 gap-4">
          <nav
            className="flex items-center gap-1 xl:gap-2"
            aria-label="Navegación principal institucional"
          >
            {SITEMAP_NAVIGATION.map((category) => {
              const isOpen = activePillar === category.id;
              const isActivePillarRoute = isPillarActive(category.id);

              return (
                <div
                  key={category.id}
                  className="relative py-2"
                  onMouseEnter={() => handlePillarMouseEnter(category.id)}
                  onMouseLeave={() => scheduleClose(280)}
                >
                  <button
                    onClick={(e) => handlePillarClick(category.id, e)}
                    className={`relative inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-[14px] font-heading tracking-tight whitespace-nowrap transition-all duration-150 ${
                      isOpen
                        ? "bg-slate-100 text-una-red font-bold"
                        : isActivePillarRoute
                        ? "text-una-red font-bold bg-una-red/5"
                        : "text-slate-700 font-semibold hover:text-una-red hover:bg-slate-50"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{category.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-una-red" : isActivePillarRoute ? "text-una-red" : "text-slate-400"
                      }`}
                    />
                    {/* Indicador de Línea Activa (Wayfinding) */}
                    {isActivePillarRoute && (
                      <span
                        className="absolute -bottom-1 left-3 right-3 h-0.5 bg-una-red rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* ==========================================
              BOTÓN DE ACCIÓN FUNCIONAL: PORTAL TIC
              ========================================== */}
          <div
            className="relative py-2"
            onMouseEnter={handlePortalMouseEnter}
            onMouseLeave={() => scheduleClose(280)}
          >
            <button
              onClick={handlePortalClick}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs tracking-wide transition-all shadow-sm ${
                isPortalOpen
                  ? "bg-una-red text-white shadow-md shadow-red-900/25"
                  : "bg-una-blue hover:bg-slate-800 text-white"
              }`}
              aria-label="Abrir menú de plataformas institucionales y servicios TIC"
              aria-expanded={isPortalOpen}
              aria-haspopup="true"
            >
              <Laptop className="w-4 h-4 text-amber-300" />
              <span>Portal TIC</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isPortalOpen ? "rotate-180 text-white" : "text-slate-300"
                }`}
              />
            </button>

            {/* Puente continuo invisible que une el botón con el dropdown (evita cierres accidentales) */}
            <div
              className={`absolute top-full right-0 left-0 h-4 z-40 ${
                isPortalOpen ? "block" : "hidden"
              }`}
              aria-hidden="true"
            />

            {/* ==========================================
                DROPDOWN PORTAL TIC (FUSIÓN PLATAFORMAS & SERVICIOS TIC)
                Formato de cuadrícula en 2 columnas, enlaces externos directos
                ========================================== */}
            {isPortalOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-[580px] lg:w-[620px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={cancelTimers}
                onMouseLeave={() => scheduleClose(280)}
              >
                {/* Puente superior directo */}
                <div className="absolute -top-3 left-0 right-0 h-3" aria-hidden="true" />

                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 overflow-hidden">
                  {/* Encabezado del Portal */}
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-100 mb-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Plataformas Institucionales & TIC
                      </span>
                      <span className="font-heading font-bold text-slate-800 text-sm">
                        Portal de Sistemas & Servicios UNA
                      </span>
                    </div>
                    <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Enlaces Directos Oficiales
                    </span>
                  </div>

                  {/* Lista de Servicios y Plataformas en Cuadrícula Doble */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[440px] overflow-y-auto pr-0.5">
                    {PORTAL_TIC_ITEMS.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeImmediately}
                        className="p-2 rounded-xl flex items-start gap-2.5 transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100 group"
                      >
                        <div className="p-2 rounded-lg shrink-0 bg-slate-100 group-hover:bg-slate-200/70 text-slate-600 transition-colors mt-0.5">
                          {getTicIcon(item.title)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[12.5px] font-semibold text-slate-800 group-hover:text-una-red transition-colors truncate">
                              {item.title}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-una-red shrink-0" />
                          </div>
                          {item.description && (
                            <p className="text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Enlace Externo Oficial DTIC */}
                  <div className="pt-2.5 mt-2 border-t border-slate-100">
                    <a
                      href="https://www.dtic.una.ac.cr"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeImmediately}
                      className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-center text-slate-700 hover:text-una-red hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors border border-slate-100"
                    >
                      <span>Dirección de Tecnologías de Información y Comunicación (DTIC UNA)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA (< 1024px) */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Abrir menú de navegación institucional"
          className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-una-blue hover:bg-slate-200 hover:text-una-red border border-slate-300 font-heading font-bold text-xs uppercase tracking-wider transition-colors"
        >
          <Menu className="w-5 h-5" />
          <span>Menú</span>
        </button>
      </div>

      {/* =========================================================
          TELÓN DE FONDO (BACKDROP BLUR OVERLAY)
          ========================================================= */}
      {(activePillar !== null || isPortalOpen) && (
        <div
          className="hidden lg:block fixed inset-x-0 bottom-0 top-full bg-slate-950/20 backdrop-blur-[1.5px] z-30 animate-in fade-in duration-150 cursor-default"
          onClick={closeImmediately}
          aria-hidden="true"
        />
      )}

      {/* =========================================================
          MEGA MENÚ INSTITUCIONAL EN COLUMNAS UNIFORMES (DESKTOP >= 1024px)
          - Todas las opciones siguen el mismo formato y color
          - Cero badges y cero colores llamativos asimétricos
          - Zona de hover continua sin cierres prematuros
          ========================================================= */}
      {currentCategory && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={cancelTimers}
          onMouseLeave={() => scheduleClose(280)}
        >
          {/* Puente continuo superior invisible */}
          <div className="absolute -top-3 left-0 right-0 h-4" aria-hidden="true" />

          {/* Panel Flotante Containerizado */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
              <div
                className={`p-7 grid gap-6 xl:gap-8 ${
                  (currentCategory.directItems?.length ? 1 : 0) +
                    (currentCategory.subcategories?.length || 0) ===
                  2
                    ? "grid-cols-2 max-w-3xl mx-auto"
                    : (currentCategory.directItems?.length ? 1 : 0) +
                        (currentCategory.subcategories?.length || 0) ===
                      4
                    ? "grid-cols-4 max-w-6xl mx-auto"
                    : "grid-cols-3"
                }`}
              >
                {/* Columna 1: Enlaces Directos / Sección Principal */}
                {currentCategory.directItems && currentCategory.directItems.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 mb-3">
                      {currentCategory.id === "oferta-academica"
                        ? "Carreras de Grado"
                        : currentCategory.id === "comunidad"
                        ? "Estudiantil & Egresados"
                        : "Enlaces Principales"}
                    </h4>
                    <ul className="space-y-1">
                      {currentCategory.directItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            onClick={closeImmediately}
                            className="group flex items-center justify-between py-2 px-3 rounded-lg text-[13.5px] font-medium text-slate-700 hover:text-una-red hover:bg-slate-50 transition-colors"
                          >
                            <span className="group-hover:translate-x-0.5 transition-transform">
                              {item.title}
                            </span>
                            {item.isExternal && (
                              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-una-red shrink-0" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Columnas siguientes: Subcategorías organizadas verticalmente */}
                {currentCategory.subcategories &&
                  currentCategory.subcategories.map((sub, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 mb-3">
                        {sub.title}
                      </h4>
                      <ul className="space-y-1">
                        {sub.items.map((subItem, iIdx) => (
                          <li key={iIdx}>
                            <Link
                              href={subItem.href}
                              target={subItem.isExternal ? "_blank" : undefined}
                              rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                              onClick={closeImmediately}
                              className="group flex items-center justify-between py-1.5 px-2.5 rounded-lg text-[13px] font-medium text-slate-700 hover:text-una-red hover:bg-slate-50 transition-colors"
                            >
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                {subItem.title}
                              </span>
                              {subItem.isExternal && (
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-una-red shrink-0" />
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

