/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Pinta los términos resaltados por el buscador como <mark>, sin usar HTML crudo.
 */

import React from "react";
import { HIGHLIGHT_POST, HIGHLIGHT_PRE } from "@/lib/search/types";

interface SearchHighlightProps {
  text: string;
  highlighted?: string;
}

export const SearchHighlight: React.FC<SearchHighlightProps> = ({ text, highlighted }) => {
  if (!highlighted) return <>{text}</>;

  // "a\u0002b\u0003c" → ["a", "b", "c"]: las posiciones impares son las coincidencias
  const parts = highlighted.split(new RegExp(`[${HIGHLIGHT_PRE}${HIGHLIGHT_POST}]`));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-amber-100 text-inherit rounded px-0.5">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
};
