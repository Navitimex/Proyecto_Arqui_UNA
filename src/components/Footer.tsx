import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-una-blue text-slate-400 border-t-2 border-una-red mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Fila principal: Identidad a la izquierda y Contacto directo a la derecha */}
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

          {/* Contacto Directo y Esencial */}
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
            <Link href="/servicios-tic" className="hover:text-white transition-colors">
              Soporte TIC
            </Link>
            <span>•</span>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Canal YouTube
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
