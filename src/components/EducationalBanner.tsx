import React from "react";
import { AlertTriangle } from "lucide-react";

export const EducationalBanner: React.FC = () => {
  return (
    <div className="bg-amber-300 text-amber-950 text-[11px] sm:text-xs py-1 px-4 border-b border-amber-400 font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 text-center">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-900 shrink-0" />
        <span>
          <strong>Aviso:</strong> Este es un proyecto desarrollado con fines educativos — <strong>No es una página oficial</strong> de la Universidad Nacional de Costa Rica.
        </span>
      </div>
    </div>
  );
};
