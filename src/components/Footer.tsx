/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - Universidad Nacional (UNA)
 * Footer institucional con identidad, contacto directo y redes sociales.
 */

import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Mail, Phone } from "lucide-react";

interface SocialNetwork {
  name: string;
  url: string;
  hoverClasses: string;
  icon: React.ReactNode;
}

const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/EscueladeInformaticaUNA/?locale=es_LA",
    hoverClasses: "hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@EscinfUNA/featured",
    hoverClasses: "hover:bg-[#FF0000]/20 hover:text-[#FF0000] hover:border-[#FF0000]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/escinf.una/?hl=es",
    hoverClasses: "hover:bg-[#E4405F]/20 hover:text-[#E4405F] hover:border-[#E4405F]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://whatsapp.com/channel/0029VaK1Joe6GcG89OliSR3T",
    hoverClasses: "hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/joinchat/RgHKYP6U-etfFW8V",
    hoverClasses: "hover:bg-[#229ED9]/20 hover:text-[#229ED9] hover:border-[#229ED9]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.226-.46-1.901-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://cr.linkedin.com/company/escinf",
    hoverClasses: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/50",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-una-blue text-slate-400 border-t-2 border-una-red mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Fila principal: Identidad a la izquierda; Contacto y Redes Sociales a la derecha */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          {/* Identidad Institucional */}
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src="/images/logo-escuela-informatica.png"
                alt="Logo Escuela de Informática UNA"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 block leading-tight">
                Universidad Nacional
              </span>
              <span className="text-sm font-black font-heading text-white tracking-wide block leading-tight">
                Escuela de Informática
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[11px] text-emerald-400 font-medium ml-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Acreditación Oficial SINAES</span>
            </div>
          </div>

          {/* Bloque Contacto y Redes Sociales (debajo de contacto en horizontal) */}
          <div className="flex flex-col items-start md:items-end gap-3">
            {/* Contacto Directo - Estructura original respetada */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-una-red shrink-0" />
                <span>Campus Benjamín Núñez, Heredia</span>
              </span>
              <a
                href="mailto:informatica@una.cr"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>informatica@una.cr</span>
              </a>
              <a
                href="tel:+50622773000"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+506 2277-3000</span>
              </a>
            </div>

            {/* Redes Sociales: solo los iconos en horizontal todas debajo de contacto */}
            <div className="flex items-center gap-2">
              {SOCIAL_NETWORKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow ${social.hoverClasses}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fila inferior: Copyright y Enlaces Indispensables */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Escuela de Informática • Universidad Nacional de Costa Rica
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="sm:hidden inline-flex items-center gap-1 text-emerald-400 text-xs">
              <ShieldCheck className="w-3 h-3" />
              <span>SINAES</span>
            </span>
            <a
              href="https://www.dtic.una.ac.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Soporte TIC (DTIC)
            </a>
            <span>•</span>
            <a
              href="https://www.una.ac.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Portal UNA
            </a>
            <span>•</span>
            <a
              href="https://transparencia.una.ac.cr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Transparencia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
