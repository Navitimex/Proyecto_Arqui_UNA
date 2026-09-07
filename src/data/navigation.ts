/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES
 * Curso: EIF-511 Arquitectura de Información - UNA
 * Fuente única de verdad del árbol de navegación para prototipo de evaluación.
 * 
 * Estructurado estrictamente conforme a sitemap propuesta.md:
 * - Oferta Académica: Diplomado, Bachillerato, Licenciatura y Postgrados (PROGESTIC).
 * - Comunidad: Estudiantil (con PPS), Egresados y Empleabilidad, y Sistemas Académicos.
 * - Portal TIC: Plataformas Institucionales y Servicios Digitales UNA (enlaces directos externos).
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

// 4 Pilares Principales de Contenido Académico e Institucional (sitemap propuesta.md)
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
      { title: "Diplomado en Sistemas de Información", href: "/oferta-academica/diplomado" },
      { title: "Bachillerato en Ingeniería en Sistemas", href: "/bachillerato" },
      { title: "Licenciatura en Ingeniería en Sistemas", href: "/oferta-academica/licenciatura" },
    ],
    subcategories: [
      {
        title: "Postgrados (PROGESTIC)",
        items: [
          { title: "MATI - Maestría en Aplicaciones TI", href: "https://www.progestic.una.ac.cr/index.php/mati", isExternal: true },
          { title: "MATIE - Tecnología e Innovación Educativa", href: "https://www.progestic.una.ac.cr/index.php/matie", isExternal: true },
          { title: "MAGIT - Gestión de Innovación Tecnológica", href: "https://www.progestic.una.ac.cr/magit", isExternal: true },
        ],
      },
    ],
  },
  {
    id: "investigacion",
    title: "Investigación y Extensión",
    href: "/investigacion/lineas",
    directItems: [
      { title: "Actividades y Divulgación Científica", href: "/investigacion/actividades" },
      { title: "Líneas de Investigación", href: "/investigacion/lineas" },
    ],
    subcategories: [
      {
        title: "Laboratorios y Proyectos",
        items: [
          { title: "Consulta Proyectos Vigentes", href: "/investigacion/proyectos" },
          { title: "Laboratorio Base de Datos", href: "/investigacion/laboratorios/bases-datos" },
          { title: "Laboratorio Procesamiento de Imágenes", href: "/investigacion/laboratorios/imagenes" },
        ],
      },
      {
        title: "Educación Continua y Extensión",
        items: [
          { title: "Educación Continua (Cursos)", href: "/investigacion/cursos-actualizacion" },
          { title: "ICAI", href: "/investigacion/icai" },
          { title: "CISCO", href: "/investigacion/cisco" },
          { title: "La UNA te prepara", href: "https://launateprepara.una.ac.cr/", isExternal: true },
        ],
      },
    ],
  },
  {
    id: "comunidad",
    title: "Comunidad",
    href: "/pps",
    subcategories: [
      {
        title: "Estudiantil",
        items: [
          { title: "Carné Estudiantil", href: "https://www.registro.una.ac.cr/index.php/oficina-de-carne-estudiantil", isExternal: true },
          { title: "Bienestar Estudiantil (Becas)", href: "https://www.vidaestudiantil.una.ac.cr/bienestar-contactos", isExternal: true },
          { title: "Expo Empresas", href: "/comunidad/bolsa-empleo#expo-empresas" },
          { title: "Tu Creativ@", href: "/comunidad#tu-creativa" },
          { title: "Asociación de Estudiantes (ASEINF)", href: "https://www.facebook.com/aseinf.una/?locale=cs_CZ", isExternal: true },
          { title: "Tu Aprendizaje", href: "/comunidad#tu-aprendizaje" },
          { title: "Herramientas y Software", href: "/comunidad/herramientas" },
          { title: "Práctica Profesional Supervisada (PPS)", href: "/pps" },
        ],
      },
      {
        title: "Egresados y Empleabilidad",
        items: [
          { title: "Actualizar Datos", href: "/comunidad/bolsa-empleo#actualizar" },
          { title: "Bolsa de Empleo", href: "/comunidad/bolsa-empleo" },
          { title: "Publicar Empleo", href: "/comunidad/bolsa-empleo#publicar" },
          { title: "Trabaje con Nosotros", href: "/comunidad/empleo-docente" },
        ],
      },
      {
        title: "Sistemas Académicos",
        items: [
          { title: "Banner de Matrícula (SSB)", href: "https://studentssb.una.ac.cr/StudentRegistrationSsb/ssb/registration", isExternal: true },
          { title: "Sobrepasos", href: "https://www.escinf.una.ac.cr/sobrepasos", isExternal: true },
          { title: "Aula Virtual Institucional", href: "https://aulavirtual.una.ac.cr/", isExternal: true },
          { title: "SIDUNA", href: "https://www.siduna.una.ac.cr/", isExternal: true },
          { title: "Eduroam (WiFi)", href: "https://www.dtic.una.ac.cr/", isExternal: true },
          { title: "Correo Institucional", href: "https://correo.una.ac.cr/", isExternal: true },
        ],
      },
    ],
  },
];

// 1 Menú Desplegable Funcional: Portal TIC & Plataformas Institucionales UNA
// Fusión de servicios TIC y plataformas universitarias en enlaces externos directos (sin páginas intermedias)
export const PORTAL_TIC_ITEMS: SubItem[] = [
  {
    title: "Restablecer Contraseña",
    description: "Autoservicio para cuentas institucionales @una.cr",
    href: "https://recuperacion.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "Mesa de Ayuda Técnica",
    description: "Soporte e incidencias tecnológicas DTIC",
    href: "https://www.dtic.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "Aula Virtual UNA",
    description: "Plataforma Moodle oficial para cursos",
    href: "https://aulavirtual.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "Red Eduroam (WiFi)",
    description: "Conectividad inalámbrica segura en el campus",
    href: "https://www.dtic.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "SIGESA",
    description: "Sistema de Gestión Académica y Calificaciones",
    href: "https://erp.una.ac.cr/sigesa-webapp-1.0.0-SNAPSHOT/security/login.xhtml",
    isExternal: true,
  },
  {
    title: "SIBEUNA",
    description: "Sistema Integrado de Bibliotecas y Recursos",
    href: "https://sibeuna.una.ac.cr/sibeuna-web/becas.jsf",
    isExternal: true,
  },
  {
    title: "AGDe",
    description: "Archivo y Gestión de Documentos Electrónicos",
    href: "https://agd.una.ac.cr/share/page/",
    isExternal: true,
  },
  {
    title: "Secretarial",
    description: "Gestión administrativa institucional de actas y oficios",
    href: "https://secretariageneral.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "Teletrabajo",
    description: "Sistema institucional de teletrabajo UNA",
    href: "https://teletrabajo.una.ac.cr/",
    isExternal: true,
  },
  {
    title: "Declaración de Horario",
    description: "Portal Mi Horario para reporte laboral y académico",
    href: "https://www.mihorario.una.ac.cr/horario/security/login.xhtml",
    isExternal: true,
  },
  {
    title: "Junta de Becas",
    description: "Gestión de becas y beneficios socioeconómicos",
    href: "https://sibeuna.una.ac.cr/sibeuna-web/becas.jsf",
    isExternal: true,
  },
  {
    title: "Procesos de Acreditación",
    description: "Acreditación oficial SINAES y estándares de calidad",
    href: "https://www.sinaes.ac.cr/",
    isExternal: true,
  },
  {
    title: "Informe Final",
    description: "Transparencia, rendición de cuentas y memorias",
    href: "https://www.transparencia.una.ac.cr/",
    isExternal: true,
  },
];
