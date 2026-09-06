/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - UNA
 * Fuente única de verdad del árbol de navegación para prototipo de evaluación.
 */

export interface SubItem {
  title: string;
  href: string;
  isExternal?: boolean;
  description?: string;
}

export interface SubCategory {
  title: string;
  description?: string;
  items: SubItem[];
}

export interface NavCategory {
  id: string;
  title: string;
  href?: string;
  description?: string;
  subcategories?: SubCategory[];
  directItems?: SubItem[];
}

// 4 Pilares Principales de Contenido Académico e Institucional
export const SITEMAP_NAVIGATION: NavCategory[] = [
  {
    id: "la-escuela",
    title: "La Escuela",
    href: "/la-escuela/historia",
    directItems: [
      { title: "Acerca de la Escuela e Historia", href: "/la-escuela/historia" },
      { title: "Directorio de Académicos y Administrativos", href: "/la-escuela/directorio" },
    ],
    subcategories: [
      {
        title: "Calidad y Transparencia",
        items: [
          { title: "Acreditación Oficial SINAES", href: "/la-escuela/acreditacion" },
          { title: "Informes de Autoevaluación", href: "/la-escuela/autoevaluacion" },
          { title: "Normativas y Reglamentos Oficiales", href: "/la-escuela/normativas" },
          { title: "Actas de Consejo de Unidad", href: "/la-escuela/actas" },
        ],
      },
      {
        title: "Sedes Regionales",
        items: [
          { title: "Sede Regional Occidente", href: "https://www.una.ac.cr", isExternal: true },
          { title: "Campus Sarapiquí", href: "https://www.una.ac.cr", isExternal: true },
          { title: "Campus Liberia", href: "https://www.una.ac.cr", isExternal: true },
          { title: "Campus Nicoya", href: "https://www.una.ac.cr", isExternal: true },
          { title: "Pérez Zeledón y Coto", href: "https://www.una.ac.cr", isExternal: true },
        ],
      },
    ],
  },
  {
    id: "oferta-academica",
    title: "Oferta Académica",
    href: "/bachillerato",
    directItems: [
      { title: "Bachillerato en Ingeniería en Sistemas (Malla 2026)", href: "/bachillerato" },
      { title: "Práctica Profesional Supervisada (PPS)", href: "/pps" },
      { title: "Licenciatura en Ingeniería en Sistemas", href: "/oferta-academica/licenciatura" },
      { title: "Diplomado en Sistemas de Información", href: "/oferta-academica/diplomado" },
    ],
    subcategories: [
      {
        title: "Posgrados y Maestrías",
        items: [
          { title: "Ver Catálogo Oficial de Maestrías", href: "/oferta-academica/posgrados" },
          { title: "MATI - Maestría en Aplicaciones TI", href: "/oferta-academica/posgrados" },
          { title: "MATIE - Tecnología e Innovación Educativa", href: "/oferta-academica/posgrados" },
          { title: "MAGIT - Gestión de Innovación Tecnológica", href: "/oferta-academica/posgrados" },
        ],
      },
    ],
  },
  {
    id: "investigacion",
    title: "Investigación",
    href: "/investigacion/lineas",
    directItems: [
      { title: "Líneas de Investigación Oficiales", href: "/investigacion/lineas" },
      { title: "Actividades y Divulgación Científica", href: "/investigacion/actividades" },
    ],
    subcategories: [
      {
        title: "Laboratorios y Proyectos",
        items: [
          { title: "Consultar Proyectos Vigentes", href: "/investigacion/proyectos" },
          { title: "Laboratorio de Bases de Datos", href: "/investigacion/laboratorios/bases-datos" },
          { title: "Laboratorio de Procesamiento de Imágenes", href: "/investigacion/laboratorios/imagenes" },
        ],
      },
      {
        title: "Educación Continua y Extensión",
        items: [
          { title: "Cursos de Actualización Profesional", href: "/investigacion/cursos-actualizacion" },
          { title: "Academia CISCO UNA", href: "/investigacion/cisco" },
          { title: "Academia ICAI", href: "/investigacion/icai" },
          { title: "Canal Multimedia y Divulgación TIC", href: "https://www.youtube.com", isExternal: true },
        ],
      },
    ],
  },
  {
    id: "comunidad",
    title: "Comunidad",
    href: "/pps",
    directItems: [
      { title: "Práctica Profesional Supervisada (PPS)", href: "/pps" },
      { title: "Descarga de Formulario Oficial F-01", href: "/pps#documentacion" },
      { title: "Sistema de Sobrepasos y Matrícula", href: "/comunidad/sobrepasos" },
    ],
    subcategories: [
      {
        title: "Estudiantes y Egresados",
        items: [
          { title: "Práctica Profesional Supervisada (PPS)", href: "/pps" },
          { title: "Sistema de Sobrepasos de Matrícula", href: "/comunidad/sobrepasos" },
          { title: "Carné Estudiantil Digital UNA", href: "/comunidad/carne-estudiantil" },
          { title: "Junta de Becas y Bienestar Estudiantil", href: "/comunidad/becas" },
          { title: "Trabajo Final de Graduación (TFG)", href: "/comunidad/tfg" },
          { title: "Guías de Formato y Normas APA", href: "/comunidad/normas-apa" },
          { title: "Bolsa de Empleo TIC UNA", href: "/comunidad/bolsa-empleo" },
        ],
      },
      {
        title: "Docentes y Administrativos",
        items: [
          { title: "Trámites y Gestiones Internas", href: "/comunidad/tramites-docentes" },
          { title: "Perfil Docente (SIBEUNA / SIGESA)", href: "https://sibeuna.una.ac.cr", isExternal: true },
          { title: "Plantillas de Cátedra e Instrumentos", href: "/comunidad/plantillas-docentes" },
          { title: "Oportunidades de Empleo Docente", href: "/comunidad/empleo-docente" },
        ],
      },
    ],
  },
];

// 1 Botón de Acción Funcional: Portal TIC (Servicios Transaccionales)
export const PORTAL_TIC_ITEMS: SubItem[] = [
  {
    title: "Restablecer Contraseña",
    description: "Autoservicio para cuentas @una.cr y aula virtual",
    href: "/servicios-tic#cambio-clave",
  },
  {
    title: "Mesa de Ayuda Técnica",
    description: "Reporte de incidentes y soporte de laboratorios",
    href: "/servicios-tic#soporte-tecnico",
  },
  {
    title: "Aula Virtual UNA",
    description: "Plataforma Moodle oficial",
    href: "https://aulavirtual.una.ac.cr",
    isExternal: true,
  },
  {
    title: "Red Eduroam (WiFi)",
    description: "Acceso seguro en campus universitario",
    href: "/servicios-tic#wifi-eduroam",
  },
  {
    title: "SIGESA",
    description: "Sistema de Gestión Académica",
    href: "https://sigesa.una.ac.cr",
    isExternal: true,
  },
  {
    title: "SIBEUNA",
    description: "Sistema Integrado de Bibliotecas",
    href: "https://sibeuna.una.ac.cr",
    isExternal: true,
  },
];
