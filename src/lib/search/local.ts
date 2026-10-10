/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Buscador de respaldo en memoria. Se usa cuando Azure AI Search no está configurado
 * (desarrollo local) o no responde, para que la búsqueda nunca quede caída en la demo.
 * Imita lo esencial de Azure: ignora tildes y mayúsculas, acepta prefijos ("matri")
 * y tolera un error de tipeo por palabra ("matricla").
 */

import { buildSearchDocuments } from "@/data/search-documents";
import { HIGHLIGHT_POST, HIGHLIGHT_PRE, type SearchDocument, type SearchHit } from "./types";

const STOPWORDS = new Set([
  "a", "al", "con", "de", "del", "e", "el", "en", "la", "las", "lo", "los",
  "o", "para", "por", "que", "se", "su", "sus", "un", "y",
]);

// Letras (con tildes y ñ) y dígitos. Con new RegExp porque el tsconfig no fija un target ES6+.
const WORD_PATTERN = new RegExp("[\\p{L}\\p{N}]+", "gu");

// Pesos por campo, alineados con el scoring profile del índice en Azure
const WEIGHTS = { title: 5, keywords: 3, section: 1.5, pillar: 1.5, description: 1 } as const;
type Field = keyof typeof WEIGHTS;

function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Singular aproximado: "becas" → "beca", "redes" → "red". */
function stem(word: string): string {
  if (word.length > 4 && word.endsWith("es")) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  return word;
}

function words(text: string): string[] {
  return normalize(text).match(WORD_PATTERN) ?? [];
}

/** true si a y b difieren en como máximo una edición (inserción, borrado o sustitución). */
function withinOneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

/** Qué tan bien coincide una palabra del documento con un término buscado (0 = no coincide). */
function matchStrength(word: string, term: string): number {
  if (word === term || stem(word) === stem(term)) return 1;
  if (term.length >= 2 && word.startsWith(term)) return 0.7;
  if (term.length >= 4 && withinOneEdit(stem(word), stem(term))) return 0.5;
  return 0;
}

export function queryTerms(query: string): string[] {
  const all = words(query);
  const meaningful = all.filter((w) => !STOPWORDS.has(w));
  return meaningful.length > 0 ? meaningful : all;
}

interface IndexedDocument {
  doc: SearchDocument;
  fields: Record<Field, string[]>;
}

let cachedIndex: IndexedDocument[] | null = null;

function getIndex(): IndexedDocument[] {
  cachedIndex ??= buildSearchDocuments().map((doc) => ({
    doc,
    fields: {
      title: words(doc.title),
      keywords: words(doc.keywords.join(" ")),
      section: words(doc.section),
      pillar: words(doc.pillar),
      description: words(doc.description),
    },
  }));
  return cachedIndex;
}

/** Envuelve en marcadores de resaltado las palabras del texto original que coinciden con la búsqueda. */
function highlight(text: string, terms: string[]): string | undefined {
  let found = false;
  const marked = text.replace(WORD_PATTERN, (original) => {
    const word = normalize(original);
    if (!terms.some((term) => matchStrength(word, term) > 0)) return original;
    found = true;
    return `${HIGHLIGHT_PRE}${original}${HIGHLIGHT_POST}`;
  });
  return found ? marked : undefined;
}

export function searchLocal(query: string, top: number): SearchHit[] {
  const terms = queryTerms(query);
  if (terms.length === 0) return [];

  const scored: Array<{ hit: SearchHit; score: number }> = [];

  for (const { doc, fields } of getIndex()) {
    let score = 0;
    let matchedTerms = 0;

    for (const term of terms) {
      let best = 0;
      for (const field of Object.keys(WEIGHTS) as Field[]) {
        for (const word of fields[field]) {
          best = Math.max(best, matchStrength(word, term) * WEIGHTS[field]);
        }
      }
      if (best > 0) matchedTerms++;
      score += best;
    }

    if (matchedTerms === 0) continue;
    // Premia los documentos que contienen todos los términos de la búsqueda
    if (matchedTerms === terms.length) score *= 1.5;

    scored.push({
      score,
      hit: {
        id: doc.id,
        title: doc.title,
        description: doc.description,
        url: doc.url,
        pillar: doc.pillar,
        section: doc.section,
        type: doc.type,
        highlights: {
          title: highlight(doc.title, terms),
          description: highlight(doc.description, terms),
        },
      },
    });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, top)
    .map(({ hit }) => hit);
}
