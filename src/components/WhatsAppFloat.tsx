"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/50622773000?text=Hola,%20solicito%20información%20sobre%20los%20trámites%20de%20la%20Escuela%20de%20Informática"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atención al Estudiante vía WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full animate-pulse" />
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
        Atención estudiantil por WhatsApp
      </span>
    </a>
  );
};
