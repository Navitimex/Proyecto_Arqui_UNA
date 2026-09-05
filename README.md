# Prototipo de Arquitectura de Información - Escuela de Informática (UNA)

Prototipo interactivo de alta fidelidad desarrollado para visualizar la nueva **Arquitectura de Información (IA)** del portal de la Escuela de Informática de la Universidad Nacional de Costa Rica (UNA).

Construido con **HTML5 semántico**, **CSS3 puro** (diseño modular y responsivo) y **JavaScript nativo (Vanilla JS)**, sin dependencias ni frameworks pesados.

---

## 📁 Estructura del Proyecto

```plaintext
c:/Code Projects/UNA/
│
├── index.html              # Página Principal (Home) con carrusel institucional y accesos
├── pps.html                # Página de Trámite: Práctica Profesional Supervisada (PPS)
├── README.md               # Documentación y guía del proyecto
│
├── css/                    # Hojas de estilo modulares
│   ├── global.css          # Variables de diseño, tipografía Inter, Header, Dropdowns y Footer
│   ├── home.css            # Estilos específicos de la Home (Carrusel, Rejilla de Novedades)
│   └── pps.css             # Estilos de PPS (Tabs, Acordeón FAQ, Breadcrumbs, Metadatos)
│
├── js/                     # Lógica interactiva en Vanilla JS
│   ├── main.js             # Controlador del carrusel y transiciones del Home
│   └── pps.js              # Controlador de pestañas (Tabs), acordeón (FAQs) y descargas
│
├── docs/                   # Documentación oficial del proyecto
│   ├── Entregable 1  .docx # Especificación de arquitectura, arquetipos y sitemap
│   └── Instrucciones del proyecto.pdf
│
└── legacy/                 # Archivos históricos de referencia
    └── Propuesta HTML.html # Prototipo inicial previo a la refactorización semántica
```

---

## 🚀 Cómo Visualizar el Prototipo

### Opción 1: Apertura Directa en el Navegador
Puedes abrir directamente el archivo `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari) haciendo doble clic sobre el archivo.

### Opción 2: Servidor Local (Recomendado)
Para emular una experiencia de despliegue web real:

```bash
# Con Python 3
python -m http.server 8000 --bind 127.0.0.1

# Abrir en el navegador:
http://127.0.0.1:8000/index.html
```

---

## 🌟 Características Implementadas

1. **Refactorización Semántica HTML5:**
   - Sustitución de `<div>` genéricos por `<header role="banner">`, `<main role="main">`, `<section>`, `<article>`, `<time>` y `<footer role="contentinfo">`.
   - Cumplimiento de directrices de accesibilidad web (ARIA labels, estados `aria-expanded` y `aria-selected`).

2. **Navegación Local Bidireccional:**
   - Menús desplegables multinivel accesibles al pasar el cursor.
   - Conexión directa entre el Home e información de trámites (`pps.html`).
   - Botón flotante institucional de atención al estudiante vía **WhatsApp** en ambas vistas.

3. **Página de Trámite de PPS:**
   - Migas de pan de navegación (*Breadcrumbs*).
   - Metadatos clave del trámite: código curricular, créditos exigidos (≥ 80%), dedicación (320 horas) y ciclo activo.
   - Sistema interactivo de 4 pestañas: *Requisitos y Modalidades*, *Cronograma CTFG 2026*, *Proceso de Postulación (Paso a Paso)* y *Documentación y Formatos*.
   - Acordeón expansible de preguntas frecuentes con animación fluida y botón "Expandir / Contraer Todas".
   - Descarga interactiva de plantillas oficiales con notificación *Toast*.

4. **Diseño Responsivo:**
   - Adaptabilidad fluida para pantallas de escritorio, tabletas y teléfonos inteligentes (probado en 390x844).
