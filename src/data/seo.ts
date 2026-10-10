/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - UNA
 * Metadatos SEO por ruta. Las páginas son componentes cliente ("use client"),
 * por lo que cada segmento expone su metadata desde un layout.tsx de servidor.
 */

import type { Metadata } from "next";

export const SITE_NAME = "Escuela de Informática UNA (Proyecto Académico)";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://arqui-una.vercel.app";

export const SITE_DESCRIPTION =
  "Prototipo de Arquitectura de Información desarrollado exclusivamente con fines académicos para el curso EIF-511 de la Universidad Nacional de Costa Rica (UNA). Este sitio no representa un canal institucional oficial.";

// Imagen para compartir en redes (1200×630, con el aviso de proyecto académico), generada por
// src/app/opengraph-image.tsx. Se referencia a mano porque la imagen por archivo solo se aplica
// a la portada: las rutas que definen su propio openGraph la pierden.
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Escuela de Informática UNA: prototipo académico del curso EIF-511, no es un sitio oficial",
};

// Next.js reemplaza (no fusiona) openGraph/twitter en rutas hijas, así que estos campos se repiten en cada ruta
export const OPEN_GRAPH_BASE = {
  siteName: SITE_NAME,
  type: "website",
  locale: "es_CR",
  images: [OG_IMAGE],
} satisfies Metadata["openGraph"];

export const TWITTER_BASE = {
  card: "summary_large_image",
  images: [OG_IMAGE],
} satisfies Metadata["twitter"];

interface PageSeo {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/buscar": {
    title: "Buscar en el sitio",
    description:
      "Motor de búsqueda del portal de la Escuela de Informática: encuentre carreras, trámites, servicios y plataformas institucionales.",
  },
  "/bachillerato": {
    title: "Bachillerato en Ingeniería en Sistemas de Información",
    description:
      "Plan de estudios, malla curricular y ficha técnica del Bachillerato en Ingeniería en Sistemas: software, arquitectura cloud, ciberseguridad y bases de datos.",
  },
  "/pps": {
    title: "Práctica Profesional Supervisada (PPS)",
    description:
      "Requisitos normativos, cronogramas y descarga del Formulario Oficial de Aprobación (F-01) para estudiantes de término.",
  },
  "/oferta-academica/diplomado": {
    title: "Diplomado en Sistemas de Información",
    description:
      "Certificación universitaria intermedia otorgada al aprobar los primeros dos años (I al IV ciclo) del plan de estudios de la carrera.",
  },
  "/oferta-academica/licenciatura": {
    title: "Licenciatura en Ingeniería en Sistemas de Información",
    description:
      "Programa de profundización en alta dirección tecnológica, arquitectura empresarial, gestión estratégica de TI y Trabajo Final de Graduación.",
  },
  "/oferta-academica/posgrados": {
    title: "Posgrados y Maestrías en Tecnologías de Información",
    description:
      "Maestrías profesionales PROGESTIC orientadas a la especialización técnica, dirección estratégica e innovación en la era digital.",
  },
  "/la-escuela/historia": {
    title: "Acerca de la Escuela e Historia",
    description:
      "Reseña institucional de la Escuela de Informática: formación de profesionales en sistemas de información con excelencia y vocación social.",
  },
  "/la-escuela/directorio": {
    title: "Directorio de Académicos y Administrativos",
    description:
      "Contacto con autoridades, coordinación de cátedras y personal administrativo de la Escuela de Informática.",
  },
  "/la-escuela/acreditacion": {
    title: "Acreditación Oficial SINAES",
    description:
      "Acreditación de calidad del Bachillerato y Licenciatura en Sistemas otorgada por el Sistema Nacional de Acreditación de la Educación Superior.",
  },
  "/la-escuela/autoevaluacion": {
    title: "Informes de Autoevaluación",
    description:
      "Proceso de evaluación continua, planes de mejora y métricas institucionales de la Escuela de Informática.",
  },
  "/la-escuela/normativas": {
    title: "Normativas y Reglamentos Oficiales",
    description:
      "Reglamentos, políticas de evaluación, derechos y deberes que rigen la vida académica en la Escuela de Informática.",
  },
  "/la-escuela/actas": {
    title: "Actas de Consejo de Unidad",
    description:
      "Registro público y acuerdos del Consejo de Unidad Académica de la Escuela de Informática de la UNA.",
  },
  "/investigacion/actividades": {
    title: "Actividades y Divulgación Científica",
    description:
      "Congresos, seminarios técnicos, hackathones y foros que conectan a la comunidad académica con el ecosistema tecnológico.",
  },
  "/investigacion/lineas": {
    title: "Líneas de Investigación",
    description:
      "Ejes estratégicos de investigación científica e innovación aplicada de la Escuela de Informática de la UNA.",
  },
  "/investigacion/proyectos": {
    title: "Proyectos de Investigación Vigentes",
    description:
      "Iniciativas científicas y de desarrollo tecnológico financiadas por el FIDA y organismos cooperantes.",
  },
  "/investigacion/laboratorios/bases-datos": {
    title: "Laboratorio de Bases de Datos",
    description:
      "Investigación aplicada con motores relacionales, NoSQL, data warehouses y procesamiento masivo de datos.",
  },
  "/investigacion/laboratorios/imagenes": {
    title: "Laboratorio de Procesamiento de Imágenes",
    description:
      "Investigación en análisis visual automatizado, reconocimiento de patrones, realidad aumentada y visión por computadora.",
  },
  "/investigacion/cursos-actualizacion": {
    title: "Cursos de Actualización Profesional",
    description:
      "Capacitación técnica y especialización para profesionales, egresados y público general con certificación de la UNA.",
  },
  "/investigacion/icai": {
    title: "ICAI - Capacitación y Actualización en Informática",
    description:
      "Programa de extensión dedicado a la alfabetización digital, formación técnica y actualización tecnológica para la sociedad.",
  },
  "/investigacion/cisco": {
    title: "Academia CISCO Networking Academy",
    description:
      "Formación autorizada por Cisco en redes, switching, routing y ciberseguridad con instructores certificados.",
  },
  "/comunidad/becas": {
    title: "Becas y Bienestar Estudiantil",
    description:
      "Beneficios socioeconómicos, exoneración de matrícula, residencias universitarias y becas por excelencia académica y cultural.",
  },
  "/comunidad/bolsa-empleo": {
    title: "Bolsa de Empleo y Pasantías TIC",
    description:
      "Vinculación entre estudiantes y graduados de la Escuela de Informática y empresas del sector tecnológico en Costa Rica.",
  },
  "/comunidad/carne-estudiantil": {
    title: "Carné Estudiantil",
    description:
      "Identificación para acceso a laboratorios, préstamo bibliotecario en SIBEUNA, servicios de salud y beneficios estudiantiles.",
  },
  "/comunidad/empleo-docente": {
    title: "Empleo y Concursos Docentes",
    description:
      "Concursos de antecedentes, plazas interinas y convocatorias para contratación de profesorado en ciencias de la computación.",
  },
  "/comunidad/normas-apa": {
    title: "Guías de Formato y Normas APA",
    description:
      "Manuales de citación APA (7.ª edición) y plantillas en LaTeX y Word para reportes técnicos, artículos y TFG.",
  },
  "/comunidad/plantillas-docentes": {
    title: "Plantillas de Cátedra e Instrumentos de Evaluación",
    description:
      "Formatos estandarizados para programas de estudio, rúbricas de evaluación y reportes de cátedra.",
  },
  "/comunidad/sobrepasos": {
    title: "Sobrepasos y Matrícula Extraordinaria",
    description:
      "Procedimiento para solicitar inclusión de cupo en asignaturas durante la matrícula ordinaria y extraordinaria.",
  },
  "/comunidad/tfg": {
    title: "Trabajo Final de Graduación (TFG)",
    description:
      "Guía normativa, cronograma de anteproyecto y proceso de defensa oral para la Licenciatura en Informática.",
  },
  "/comunidad/tramites-docentes": {
    title: "Trámites y Gestiones Docentes",
    description:
      "Solicitudes de permisos, actas de notas, asignación de laboratorios y gestiones de cátedra para el cuerpo docente.",
  },
};

/** Título, descripción, canonical, Open Graph y Twitter de una página. Con path null no hay canonical ni og:url. */
function pageMetadata({ title, description }: PageSeo, path: string | null): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...OPEN_GRAPH_BASE,
      title: socialTitle,
      description,
      url: path ?? undefined,
    },
    twitter: {
      ...TWITTER_BASE,
      title: socialTitle,
      description,
    },
  };
}

/** Construye la metadata de una ruta a partir de PAGE_SEO (título, descripción, canonical y Open Graph). */
export function buildPageMetadata(path: string): Metadata {
  const seo = PAGE_SEO[path];
  // Sin entrada, la ruta heredaría en silencio el canonical y el og:url de la portada (layout raíz)
  if (!seo) throw new Error(`Falta la entrada "${path}" en PAGE_SEO (src/data/seo.ts).`);
  return pageMetadata(seo, path);
}

// Página 404: sin canonical ni og:url, para que no herede los de la portada
export const NOT_FOUND_METADATA = pageMetadata(
  {
    title: "Página no encontrada",
    description:
      "La página solicitada no existe en este prototipo académico de la Escuela de Informática.",
  },
  null
);
