/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - UNA
 * Contenido indexable del buscador. Se arma a partir de las fuentes de verdad
 * existentes (PAGE_SEO y navigation.ts) para no duplicar textos: si cambia un título
 * o una descripción ahí, basta con volver a ejecutar `npm run search:index`.
 */

import { PAGE_SEO } from "@/data/seo";
import { PORTAL_TIC_ITEMS, SITEMAP_NAVIGATION } from "@/data/navigation";
import type { SearchDocument } from "@/lib/search/types";

const PORTAL_TIC_PILLAR = "Portal TIC";

// Rutas que existen pero no deben aparecer como resultado
const EXCLUDED_PATHS = new Set(["/buscar"]);

// Pilar por prefijo de ruta, para las páginas que no aparecen en el megamenú
const PILLAR_BY_PREFIX: Array<[prefix: string, pillar: string]> = [
  ["/la-escuela", "La Escuela"],
  ["/oferta-academica", "Oferta Académica"],
  ["/bachillerato", "Oferta Académica"],
  ["/investigacion", "Investigación y Extensión"],
  ["/comunidad", "Comunidad"],
  ["/pps", "Comunidad"],
];

// Sinónimos y términos que la gente escribe pero que no están en el título o la descripción
const EXTRA_KEYWORDS: Record<string, string[]> = {
  "/": ["inicio", "portada", "noticias", "escuela de informática"],
  "/bachillerato": ["carrera", "malla curricular", "plan de estudios", "cursos", "ingeniería en sistemas", "admisión"],
  "/pps": ["práctica", "F-01", "formulario", "pasantía", "graduación"],
  "/oferta-academica/diplomado": ["diplomado", "título intermedio"],
  "/oferta-academica/licenciatura": ["licenciatura", "TFG", "arquitectura empresarial"],
  "/oferta-academica/posgrados": ["maestría", "MATI", "MATIE", "MAGIT", "PROGESTIC", "posgrado"],
  "/la-escuela/historia": ["misión", "visión", "historia", "quiénes somos"],
  "/la-escuela/directorio": ["contacto", "teléfono", "correo", "profesores", "dirección", "secretaría"],
  "/la-escuela/acreditacion": ["SINAES", "calidad", "acreditada"],
  "/la-escuela/normativas": ["reglamento", "evaluación", "políticas"],
  "/la-escuela/actas": ["consejo", "acuerdos", "sesiones"],
  "/investigacion/proyectos": ["FIDA", "investigación"],
  "/investigacion/cursos-actualizacion": ["capacitación", "educación continua", "cursos libres"],
  "/investigacion/cisco": ["CCNA", "redes", "certificación"],
  "/comunidad/becas": ["beca", "ayuda económica", "residencias", "bienestar"],
  "/comunidad/bolsa-empleo": ["trabajo", "empleo", "pasantías", "empresas", "egresados"],
  "/comunidad/carne-estudiantil": ["carnet", "identificación"],
  "/comunidad/empleo-docente": ["concurso", "plazas", "profesores", "trabaje con nosotros"],
  "/comunidad/normas-apa": ["APA", "citas", "referencias", "LaTeX", "Word"],
  "/comunidad/sobrepasos": ["matrícula", "cupo", "sobrecupo"],
  "/comunidad/tfg": ["tesis", "anteproyecto", "defensa", "graduación"],
  "Restablecer Contraseña": ["clave", "password", "contraseña olvidada", "cuenta"],
  "Mesa de Ayuda Técnica": ["soporte", "DTIC", "ticket", "incidencia"],
  "Aula Virtual UNA": ["Moodle", "cursos virtuales"],
  "Red Eduroam (WiFi)": ["wifi", "internet", "red inalámbrica"],
  "SIGESA": ["notas", "calificaciones", "expediente"],
  "Banner de Matrícula (SSB)": ["matrícula", "Banner", "inscripción"],
};

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pillarFromPrefix(path: string): string {
  const match = PILLAR_BY_PREFIX.find(([prefix]) => path === prefix || path.startsWith(`${prefix}/`));
  return match ? match[1] : "Inicio";
}

/** Construye la lista completa de documentos a indexar (páginas internas + enlaces externos). */
export function buildSearchDocuments(): SearchDocument[] {
  const docs: SearchDocument[] = [];
  const usedIds = new Set<string>();
  const usedUrls = new Set<string>();

  const add = (doc: Omit<SearchDocument, "id">, idBase: string) => {
    // Azure solo acepta letras, dígitos, "_", "-" y "=" en la clave del documento
    let id = slugify(idBase) || "inicio";
    for (let n = 2; usedIds.has(id); n++) id = `${slugify(idBase)}-${n}`;
    usedIds.add(id);
    usedUrls.add(doc.url);
    docs.push({ id, ...doc });
  };

  // Ubicación (pilar / sección) de cada enlace interno según el megamenú
  const location = new Map<string, { pillar: string; section: string }>();
  for (const category of SITEMAP_NAVIGATION) {
    for (const item of category.directItems ?? []) {
      if (!item.isExternal) location.set(item.href, { pillar: category.title, section: category.title });
    }
    for (const sub of category.subcategories ?? []) {
      for (const item of sub.items) {
        if (!item.isExternal) location.set(item.href, { pillar: category.title, section: sub.title });
      }
    }
  }

  // 1. Portada
  add(
    {
      title: "Inicio - Escuela de Informática UNA",
      description:
        "Portada del portal: oferta académica, accesos rápidos, noticias y servicios de la Escuela de Informática de la Universidad Nacional.",
      url: "/",
      pillar: "Inicio",
      section: "Inicio",
      type: "pagina",
      keywords: EXTRA_KEYWORDS["/"] ?? [],
    },
    "inicio"
  );

  // 2. Páginas internas con metadata SEO
  for (const [path, seo] of Object.entries(PAGE_SEO)) {
    if (EXCLUDED_PATHS.has(path)) continue;
    const pillar = location.get(path)?.pillar ?? pillarFromPrefix(path);
    add(
      {
        title: seo.title,
        description: seo.description,
        url: path,
        pillar,
        section: location.get(path)?.section ?? pillar,
        type: "pagina",
        keywords: EXTRA_KEYWORDS[path] ?? [],
      },
      `pagina-${path}`
    );
  }

  // 3. Plataformas del Portal TIC (tienen descripción propia)
  for (const item of PORTAL_TIC_ITEMS) {
    add(
      {
        title: item.title,
        description: item.description ?? "Plataforma institucional de la UNA.",
        url: item.href,
        pillar: PORTAL_TIC_PILLAR,
        section: "Plataformas Institucionales",
        type: "externo",
        keywords: EXTRA_KEYWORDS[item.title] ?? [],
      },
      `externo-${item.title}`
    );
  }
  const portalUrls = new Set(PORTAL_TIC_ITEMS.map((item) => item.href));

  // 4. Enlaces del megamenú que no son páginas propias: anclas (#) y sitios externos
  for (const category of SITEMAP_NAVIGATION) {
    const groups = [
      { section: category.title, items: category.directItems ?? [] },
      ...(category.subcategories ?? []).map((sub) => ({ section: sub.title, items: sub.items })),
    ];
    for (const { section, items } of groups) {
      for (const item of items) {
        if (item.isExternal) {
          // Si el Portal TIC ya tiene ese mismo sitio (p. ej. Aula Virtual), no se repite
          if (portalUrls.has(item.href)) continue;
          add(
            {
              title: item.title,
              description: item.description ?? `Enlace externo de ${section} (${category.title}).`,
              url: item.href,
              pillar: category.title,
              section,
              type: "externo",
              keywords: EXTRA_KEYWORDS[item.title] ?? [],
            },
            `externo-${item.title}`
          );
          continue;
        }

        // Solo anclas dentro de páginas existentes (evita enlaces rotos del megamenú)
        const [basePath, hash] = item.href.split("#");
        if (!hash || !PAGE_SEO[basePath] || usedUrls.has(item.href)) continue;
        add(
          {
            title: item.title,
            description: `${item.title}: sección de ${PAGE_SEO[basePath].title}.`,
            url: item.href,
            pillar: category.title,
            section,
            type: "pagina",
            keywords: EXTRA_KEYWORDS[item.title] ?? [],
          },
          `pagina-${item.href}`
        );
      }
    }
  }

  return docs;
}
