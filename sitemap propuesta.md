# Propuesta de Arquitectura de Información y Sitemap Web
## Escuela de Informática - Universidad Nacional (UNA)
**Fuente:** [Octopus.do - Visual Sitemap Tool (c0q1xtx7gwe)](https://octopus.do/c0q1xtx7gwe)  
**Versión de Proyecto:** Sitemap ver.1  
**Fecha de extracción:** Septiembre 2026  
**Curso:** EIF-511 Arquitectura de Información

---

## 1. Resumen Ejecutivo del Sitemap

La propuesta modelada en Octopus.do define la arquitectura web oficial para el portal de la Escuela de Informática de la UNA. Está concebida para estructurar la navegación en torno a la misión universitaria: docencia (oferta académica), investigación y extensión social, gestión y transparencia institucional, y vida comunitaria (estudiantes, egresados y plataformas).

### Métricas Generales del Tablero
* **Total de Páginas / Nodos Principales:** 35 nodos estructurados
* **Estructura en Secciones:** 2 secciones raíz (**Main** y **Footer**) + **Portal TIC** (Hub transaccional externo en Header)
* **Componentes de Wireframes:** Secciones modulares por página (Header, Introducción/Texto, Grillas dobles y triples, Formularios, Artículos y Footers).
* **Políticas de Enlaces Externos:** Fusión completa de plataformas institucionales y herramientas TIC en el menú desplegable funcional de cabecera (**Portal TIC**). Todos son enlaces directos externos oficiales (`isExternal: true`) hacia los sistemas universitarios sin crear páginas intermediarias o redundantes.
* **Comunidad Optimizada:** La sección *Comunidad* queda organizada en 3 columnas limpias: *Estudiantil*, *Egresados y Empleabilidad*, y *Sistemas Académicos*.

---

## 2. Árbol Jerárquico Completo del Sitio

### Sección 1: Main (Navegación Principal) & Header

```text
[Tab] Sitemap ver.1
├── [Acceso Funcional Header] Portal TIC & Plataformas Institucionales (Dropdown Externo Directo)
│   ├── [Enlace Externo] Restablecer Contraseña (recuperacion.una.ac.cr)
│   ├── [Enlace Externo] Mesa de Ayuda Técnica (dtic.una.ac.cr)
│   ├── [Enlace Externo] Aula Virtual UNA (aulavirtual.una.ac.cr)
│   ├── [Enlace Externo] Red Eduroam WiFi (dtic.una.ac.cr)
│   ├── [Enlace Externo] SIGESA (erp.una.ac.cr)
│   ├── [Enlace Externo] SIBEUNA (sibeuna.una.ac.cr)
│   ├── [Enlace Externo] AGDe (agd.una.ac.cr)
│   ├── [Enlace Externo] Secretarial (secretariageneral.una.ac.cr)
│   ├── [Enlace Externo] Teletrabajo (teletrabajo.una.ac.cr)
│   ├── [Enlace Externo] Declaración de Horario (mihorario.una.ac.cr)
│   ├── [Enlace Externo] Junta de Becas (sibeuna.una.ac.cr)
│   ├── [Enlace Externo] Procesos de Acreditación (sinaes.ac.cr)
│   └── [Enlace Externo] Informe Final (transparencia.una.ac.cr)
│
└── [Section] Main
    └── [Página] Inicio (URL: /)
        ├── [Página] Escuela (URL: /la-escuela)
        │   ├── [Grupo] Enlaces principales
        │   │   ├── [Página] Acerca de la Escuela e Historia
        │   │   └── [Página] Directorio de Académicos y Administrativos
        │   ├── [Grupo] Calidad y trasparencia
        │   │   ├── [Página] Acreditación Oficial SINAES
        │   │   ├── [Página] Informes de Autoevaluación
        │   │   ├── [Página] Normativas y Reglamentos Oficiales
        │   │   └── [Página] Actas de Consejo de Unidad
        │   └── [Página] Sedes (URL: /la-escuela/sedes)
        │       ├── [Bloque] Regional Occidente
        │       ├── [Bloque] Sarapiquí
        │       ├── [Bloque] Liberia
        │       ├── [Bloque] Nicoya
        │       ├── [Bloque] Pérez Zeledón
        │       └── [Bloque] Coto
        │
        ├── [Página] Oferta académica (URL: /oferta-academica)
        │   ├── [Página] Diplomado (URL: /oferta-academica/diplomado)
        │   ├── [Página] Bachillerato (URL: /oferta-academica/diplomado o /bachillerato)
        │   ├── [Página] Licenciatura (URL: /oferta-academica/diplomado o /oferta-academica/licenciatura)
        │   └── [Página] Postgrados (URL: /oferta-academica/postgrados)
        │       ├── [Bloque/Enlace] MATI (Maestría en Aplicaciones TI)
        │       ├── [Bloque/Enlace] MATIE (Tecnología e Innovación Educativa)
        │       └── [Bloque/Enlace] MAGIT (Gestión de Innovación Tecnológica)
        │
        ├── [Página] Investigación y extensión (URL: /investigacion-y-extension)
        │   ├── [Grupo] Enlaces principales
        │   │   ├── [Página] Actividades y Divulgación Científica (URL: /investigacion-y-extension/proyectos-y-actividades)
        │   │   └── [Página] Líneas de investigación (URL: /investigacion-y-extension/lineas-de-investigacion)
        │   ├── [Grupo] Laboratorios y proyectos
        │   │   ├── [Página] Consulta proyectos Vigentes (URL: /investigacion-y-extension/laboratorios)
        │   │   ├── [Página] Laboratorio Base de Datos (URL: /investigacion-y-extension/laboratorios)
        │   │   └── [Página] Laboratorio Procesamiento de Imágenes (URL: /investigacion-y-extension/laboratorios)
        │   └── [Página] Educación continua y extensión (URL: /investigacion-y-extension/educacion-continua-y-certificaciones)
        │       ├── [Bloque] Educación continua
        │       ├── [Bloque] ICAI
        │       ├── [Bloque] CISCO
        │       └── [Bloque/Enlace] La UNA te prepara
        │
        └── [Página] Comunidad (URL: /comunidad)
            ├── [Grupo] Estudiantil
            │   ├── [Bloque/Enlace] Carné Estudiantil
            │   ├── [Bloque/Enlace] Bienestar estudiantil (Becas)
            │   ├── [Bloque] Expo empresas
            │   ├── [Bloque] Tu Creativ@
            │   ├── [Página] ASEINF (Asociación de Estudiantes)
            │   │   ├── [Bloque/Enlace] Facebook ASEINF
            │   │   └── [Bloque/Enlace] Instagram ASEINF
            │   ├── [Bloque] Tu aprendizaje
            │   ├── [Página] Herramientas y Software
            │   │   ├── [Bloque] Mathematica
            │   │   ├── [Bloque] Discretas
            │   │   ├── [Bloque] CDF
            │   │   └── [Bloque] Unos y Ceros
            │   └── [Bloque] PPS (Práctica Profesional Supervisada)
            ├── [Grupo] Egresados y empleabilidad
            │   ├── [Bloque] Actualizar datos
            │   ├── [Bloque] Bolsa de empleo
            │   ├── [Bloque] Publicar empleo
            │   └── [Bloque] Trabaje con nosotros
            └── [Grupo] Sistemas académicos
                ├── [Bloque/Enlace] Banner de matrícula (SSB)
                ├── [Bloque/Enlace] Sobrepasos
                ├── [Bloque/Enlace] Aula Virtual Institucional
                ├── [Bloque/Enlace] SIDUNA
                ├── [Bloque/Enlace] Eduroam (WiFi)
                └── [Bloque/Enlace] Correo institucional
```

---

### Sección 2: Footer (Pie de Página Institucional)

```text
└── [Section] Footer
    └── [Página] Footer (URL: /footer)
        ├── [Página] Redes Sociales (URL: /footer/contactos)
        │   ├── Facebook Oficial Escuela
        │   ├── YouTube Oficial Escuela
        │   ├── Instagram Oficial Escuela
        │   ├── WhatsApp Canal Oficial Escuela
        │   ├── Telegram Canal Oficial Escuela
        │   └── LinkedIn Oficial Escuela
        └── [Página] Contacto
            ├── Ubicación física
            ├── Correo electrónico
            └── Central telefónica
```

---

## 3. Desglose Detallado de Páginas y Wireframes

| Página / Nodo | Ruta Prevista | Wireframes / Bloques Internos | Metadatos y Notas SEO |
| :--- | :--- | :--- | :--- |
| **Inicio** | `/` | Header, Introduction (`text`), Services (`double`), Latest News (`text_triple`), Footer | Portada institucional |
| **Acerca de la Escuela e Historia** | `/la-escuela/historia` | Header, Nuestra historia (`text`), Nuestra Visión (`text_double`), Hitos históricos (`text_triple`), Enlaces relacionados, Footer | SEO H1: *"Acerca de la escuela"* |
| **Directorio de Académicos y Administrativos** | `/la-escuela/directorio` | Header, Autoridades (`text_triple`), Académicos (`text_triple`), Administrativos (`text_double`), Enlaces relacionados, Footer | SEO H1: *"Acerca de la escuela"* |
| **Acreditación Oficial SINAES** | `/la-escuela/acreditacion` | Header, Beneficios para la Persona Graduada (`text_triple`), Enlaces relacionados, Footer | Acreditación y excelencia académica |
| **Informes de Autoevaluación** | `/la-escuela/autoevaluacion` | Header, Repositorio de Informes Oficiales (`text`), Enlaces relacionados, Footer | Transparencia universitaria |
| **Normativas y Reglamentos Oficiales** | `/la-escuela/normativas` | Header, Reglamentos Vigentes de Consulta Pública (`text`), Enlaces relacionados, Footer | Marco jurídico institucional |
| **Actas de Consejo de Unidad** | `/la-escuela/actas` | Header, Sesiones Recientes del Consejo de Unidad (`text`), Enlaces relacionados, Footer | Sesiones y acuerdos de unidad |
| **Sedes Regionales** | `/la-escuela/sedes` | Bloques directos a sedes: Occidente, Sarapiquí, Liberia, Nicoya, Pérez Zeledón y Coto | Enlaces directos a campus |
| **Diplomado en Sistemas** | `/oferta-academica/diplomado` | Header, Malla curricular (`text`), Perfil y competencias (`text_double`), Campo laboral y empleabilidad (`form`), Preguntas frecuentes (`text_quarter`), Admisión y requisitos (`articles`), Footer | Carrera oficial |
| **Bachillerato en Ingeniería en Sistemas** | `/bachillerato` | Header, Malla curricular (`text`), Perfil y competencias (`text_double`), Campo laboral y empleabilidad (`form`), Preguntas frecuentes (`text_quarter`), Admisión y requisitos (`articles`), Footer | Plan 2026 acreditado |
| **Licenciatura en Ingeniería en Sistemas** | `/oferta-academica/licenciatura` | Header, Ejes formativos (`text_double`), Malla curricular (`text`), Perfil y competencias (`text_double`), Campo laboral y empleabilidad (`form`), Preguntas frecuentes (`text_quarter`), Admisión y requisitos (`articles`), Footer | Grado terminal de licenciatura |
| **Postgrados (PROGESTIC)** | `/oferta-academica/posgrados` | Header, MATI, MATIE, MAGIT, Enlaces relacionados, Footer | Maestrías especializadas |
| **Actividades y Divulgación Científica** | `/investigacion/actividades` | Header, Eventos Académicos del Año, Enlaces relacionados, Footer | Divulgación científica |
| **Líneas de investigación** | `/investigacion/lineas` | Header, Áreas Temáticas Prioritarias (`text`), Enlaces relacionados, Footer | 5 líneas prioritarias |
| **Consulta proyectos Vigentes** | `/investigacion/proyectos` | Header, Proyectos Activos Registrados ante Vicerrectoría (`text`), Enlaces relacionados, Footer | Registro de proyectos activos |
| **Laboratorio Base de Datos** | `/investigacion/laboratorios/bases-datos` | Header, Laboratorio de Bases de Datos y Gestión del Conocimiento (`text`), Laboratorio, Enlaces relacionados, Footer | Laboratorio de investigación |
| **Laboratorio Procesamiento de Imágenes** | `/investigacion/laboratorios/imagenes` | Header, Laboratorio de Procesamiento de Imágenes y Visión por Computadora (`text`), Laboratorio, Enlaces relacionados, Footer | Laboratorio de investigación |
| **Educación continua y extensión** | `/investigacion/cursos-actualizacion` | Educación continua, ICAI, CISCO, La UNA te prepara | Certificaciones y cursos |
| **ASEINF (Asociación)** | `/comunidad/aseinf` | Header, Asociación de estudiantes (`text`), Facebook, Instagram, Enlaces relacionados, Footer | Representación estudiantil |
| **Herramientas y Software** | `/comunidad/herramientas` | Header, Descripción (`text`), Mathematica, Discretas, CDF, Unos y Ceros, Enlaces relacionados, Footer | Recursos académicos |
| **Egresados y empleabilidad** | `/comunidad/bolsa-empleo` | Actualizar datos, Bolsa de empleo, Publicar empleo, Trabaje con nosotros | Vinculación laboral |

---

## 4. Catálogo de Enlaces Oficiales y Destinos Externos

Para optimizar la experiencia de usuario y evitar páginas puente innecesarias, las siguientes opciones navegan directamente a sus URLs oficiales:

### Redes Sociales Oficiales (Footer)
| Red Social | URL Oficial Verificada |
| :--- | :--- |
| **Facebook** | `https://www.facebook.com/EscueladeInformaticaUNA/?locale=es_LA` |
| **YouTube** | `https://www.youtube.com/@EscinfUNA/featured` |
| **Instagram** | `https://www.instagram.com/escinf.una/?hl=es` |
| **WhatsApp (Canal Oficial)** | `https://whatsapp.com/channel/0029VaK1Joe6GcG89OliSR3T` |
| **Telegram (Comunidad)** | `https://t.me/joinchat/RgHKYP6U-etfFW8V` |
| **LinkedIn (Página Institucional)** | `https://cr.linkedin.com/company/escinf` |

### Postgrados y Maestrías (PROGESTIC UNA)
| Programa | URL Oficial Verificada |
| :--- | :--- |
| **MATI** (Maestría en Aplicaciones de Tecnologías de Información) | `https://www.progestic.una.ac.cr/index.php/mati` |
| **MATIE** (Tecnología e Innovación Educativa) | `https://www.progestic.una.ac.cr/index.php/matie` |
| **MAGIT** (Gestión de la Innovación Tecnológica) | `https://www.progestic.una.ac.cr/magit` |

### Sistemas Universitarios y Trámites Estudiantiles (Comunidad)
| Servicio / Trámite | URL Oficial Verificada |
| :--- | :--- |
| **Sistema de Sobrepasos de Matrícula** | `https://www.escinf.una.ac.cr/sobrepasos` |
| **Banner de Matrícula (SSB)** | `https://studentssb.una.ac.cr/StudentRegistrationSsb/ssb/registration` |
| **Carné Estudiantil Digital (Registro UNA)** | `https://www.registro.una.ac.cr/index.php/oficina-de-carne-estudiantil` |
| **Bienestar Estudiantil y Vida Universitaria** | `https://www.vidaestudiantil.una.ac.cr/bienestar-contactos` |
| **SIDUNA (Sistema Documental UNA)** | `https://www.siduna.una.ac.cr/` |
| **Correo Institucional UNA** | `https://correo.una.ac.cr/` |
| **La UNA te prepara** | `https://launateprepara.una.ac.cr/` |
| **ASEINF Facebook** | `https://www.facebook.com/aseinf.una/?locale=cs_CZ` |
| **ASEINF Instagram** | `https://www.instagram.com/aseinf.una/` |

### Plataformas Institucionales y Servicios Digitales UNA (Portal TIC Header)
Todos los ítems del menú desplegable funcional *Portal TIC* son enlaces directos externos oficiales:
| Plataforma / Servicio | URL Oficial Verificada | Propósito Institucional |
| :--- | :--- | :--- |
| **Restablecer Contraseña** | `https://recuperacion.una.ac.cr/` | Autoservicio oficial de credenciales institucionales |
| **Mesa de Ayuda Técnica** | `https://www.dtic.una.ac.cr/` | Soporte e incidencias técnicas DTIC UNA |
| **Aula Virtual UNA** | `https://aulavirtual.una.ac.cr/` | Entorno virtual de aprendizaje Moodle oficial |
| **Red Eduroam (WiFi)** | `https://www.dtic.una.ac.cr/` | Conectividad inalámbrica segura para la comunidad |
| **SIGESA** | `https://erp.una.ac.cr/sigesa-webapp-1.0.0-SNAPSHOT/security/login.xhtml` | Sistema de Gestión Académica y Calificaciones |
| **SIBEUNA** | `https://sibeuna.una.ac.cr/sibeuna-web/becas.jsf` | Sistema Integrado de Bibliotecas y Recursos |
| **AGDe** | `https://agd.una.ac.cr/share/page/` | Archivo y Gestión de Documentos Electrónicos |
| **Secretarial** | `https://secretariageneral.una.ac.cr/` | Gestión administrativa de oficios y actas |
| **Teletrabajo** | `https://teletrabajo.una.ac.cr/` | Portal institucional de teletrabajo UNA |
| **Declaración de Horario** | `https://www.mihorario.una.ac.cr/horario/security/login.xhtml` | Registro de jornada laboral y docente (Mi Horario) |
| **Junta de Becas** | `https://sibeuna.una.ac.cr/sibeuna-web/becas.jsf` | Trámites y subsidios socioeconómicos estudiantiles |
| **Procesos de Acreditación** | `https://www.sinaes.ac.cr/` | Acreditación oficial y estándares de calidad SINAES |
| **Informe Final** | `https://www.transparencia.una.ac.cr/` | Portal de Transparencia y Rendición de Cuentas UNA |
| **Dirección DTIC UNA** | `https://www.dtic.una.ac.cr` | Dirección de Tecnologías de Información y Comunicación |

---

## 5. Recomendaciones de Implementación Web

1. **Estructura de Navegación (4 Pilares + Portal TIC):** Conservar los 4 pilares institucionales (*La Escuela*, *Oferta Académica*, *Investigación*, *Comunidad*). La sección *Comunidad* se mantiene limpia y equilibrada en 3 columnas (*Estudiantil*, *Egresados y Empleabilidad*, *Sistemas Académicos*), tras trasladar las plataformas institucionales a *Portal TIC*.
2. **Fusión en Portal TIC:** El botón *Portal TIC* en el header opera como un hub desplegable directo en cuadrícula doble que unifica las herramientas TIC y las plataformas institucionales universitarias (13 enlaces).
3. **Enlaces Externos Directos:** Todo el conjunto de plataformas del *Portal TIC* y sistemas universitarios navega directamente a sus URLs oficiales externas con atributos `target="_blank"` y `rel="noopener noreferrer"`, acompañados del indicador visual `<ExternalLink />`, sin generar páginas internas o puentes innecesarios.
4. **Preservación del Diseño:** Mantener la identidad visual establecida (colores `una-red`, `una-blue`, tipografías institucionales, diseño limpio, accesible y sin sobrecarga visual).
