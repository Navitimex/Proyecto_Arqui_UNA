"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Laptop, ArrowRight, Shield, ExternalLink } from "lucide-react";
import { SITEMAP_NAVIGATION, PORTAL_TIC_ITEMS } from "@/data/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);
  const [isPortalExpanded, setIsPortalExpanded] = useState(false);

  // Close with Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleCategory = (id: string) => {
    setExpandedCategory((prev) => (prev === id ? null : id));
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (title: string) => {
    setExpandedSubcategory((prev) => (prev === title ? null : title));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-50 overflow-hidden border-l-4 border-una-red animate-in slide-in-from-right duration-250"
        aria-label="Menú de navegación institucional"
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-auto shrink-0 flex items-center justify-center">
              <img
                src="/images/logo-escuela-informatica.png"
                alt="Logo Escuela de Informática UNA"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-una-red hover:bg-red-50 flex items-center justify-center transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Button: Portal TIC (Direct Callout for Mobile con Enlaces Externos) */}
        <div className="p-4 bg-gradient-to-r from-una-blue to-slate-900 text-white border-b border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-300">
                <Laptop className="w-4 h-4" />
              </span>
              <span className="font-heading font-black text-sm text-white">
                Portal TIC & Plataformas
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[11px] text-slate-300 mb-3">
            Autoservicio institucional de contraseñas y soporte oficial DTIC UNA.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <a
              href="https://recuperacion.una.ac.cr/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-center text-slate-100 flex items-center justify-center gap-1 transition-colors"
            >
              <span>Restablecer Clave</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
            <a
              href="https://www.dtic.una.ac.cr/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-lg bg-una-red hover:bg-una-red-dark text-xs font-bold text-center text-white flex items-center justify-center gap-1 transition-colors"
            >
              <span>Mesa de Ayuda</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>
          </div>

          <button
            onClick={() => setIsPortalExpanded((prev) => !prev)}
            className="w-full mt-1 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11.5px] text-slate-300 flex items-center justify-between transition-colors border border-white/10"
          >
            <span>Ver plataformas y sistemas ({PORTAL_TIC_ITEMS.length})</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPortalExpanded ? "rotate-180" : ""}`} />
          </button>

          {isPortalExpanded && (
            <div className="mt-2 pt-2 border-t border-white/10 space-y-1 max-h-48 overflow-y-auto pr-1">
              {PORTAL_TIC_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-between py-1 px-2 rounded text-[11px] text-slate-200 hover:bg-white/10 transition-colors"
                >
                  <span className="truncate">{item.title}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 4 Pilares Principales (Accordion List) */}
        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-5 py-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
            4 Pilares Académicos
          </div>
          <ul className="divide-y divide-slate-100">
            {SITEMAP_NAVIGATION.map((cat) => {
              const isExpanded = expandedCategory === cat.id;

              return (
                <li key={cat.id} className="border-b border-slate-100">
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-left font-heading font-bold text-sm text-una-blue hover:text-una-red hover:bg-slate-50 transition-colors"
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-una-red" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="bg-slate-50/70 px-4 py-2 border-t border-slate-100 space-y-1.5">
                      {/* Direct Items */}
                      {cat.directItems && cat.directItems.length > 0 && (
                        <div className="space-y-1 pb-1">
                          {cat.directItems.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              target={item.isExternal ? "_blank" : undefined}
                              rel={item.isExternal ? "noopener noreferrer" : undefined}
                              onClick={onClose}
                              className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-una-red hover:bg-white transition-colors"
                            >
                              <span>{item.title}</span>
                              {item.isExternal && (
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              )}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Subcategories con acordeón progresivo */}
                      {cat.subcategories &&
                        cat.subcategories.map((sub, sIdx) => {
                          const isSubExpanded = expandedSubcategory === sub.title;

                          return (
                            <div key={sIdx} className="border-t border-slate-200/60 pt-1">
                              <button
                                onClick={() => toggleSubcategory(sub.title)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors ${
                                  isSubExpanded
                                    ? "font-semibold text-una-red bg-white"
                                    : "font-semibold text-slate-700 hover:text-una-red hover:bg-white"
                                }`}
                              >
                                <span>{sub.title}</span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                                    isSubExpanded ? "rotate-180 text-una-red" : "text-slate-400"
                                  }`}
                                />
                              </button>

                              {isSubExpanded && (
                                <div className="space-y-1 pl-4 pr-1 py-1.5 bg-white rounded-lg my-1 border-l-2 border-slate-200 animate-in fade-in duration-150">
                                  {sub.items.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.href}
                                      target={subItem.isExternal ? "_blank" : undefined}
                                      rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-1.5 px-3 text-xs font-medium rounded text-slate-600 hover:text-una-red hover:bg-slate-50 transition-colors"
                                    >
                                      <span>{subItem.title}</span>
                                      {subItem.isExternal && (
                                        <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer (Accesos Institucionales Globales) */}
        <div className="p-4 bg-slate-100 text-slate-700 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
          <a
            href="https://www.dtic.una.ac.cr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-1.5 text-una-red hover:underline font-bold"
          >
            <span>Portal Oficial DTIC UNA</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>SINAES</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
