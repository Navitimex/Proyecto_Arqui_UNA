# Portal Web Institucional - Escuela de Informática (UNA)

Prototipo interactivo de alta fidelidad desarrollado para visualizar y validar la nueva **Arquitectura de Información (IA)** del portal de la Escuela de Informática de la Universidad Nacional de Costa Rica (UNA), fundamentada en el patrón internacional **"4 Pilares + 1 Botón de Acción Funcional"**.

Construido con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** y componentes accesibles e interactivos.

---

## 📁 Estructura del Proyecto

```plaintext
c:/Code Projects/UNA/
│
├── src/
│   ├── app/                    # Rutas y páginas del App Router
│   │   ├── layout.tsx          # Layout raíz institucional con fuentes Inter y Roboto
│   │   ├── client-layout.tsx   # Orquestador cliente de navegación, drawer y toast
│   │   ├── globals.css         # Estilos globales y directivas de Tailwind CSS
│   │   ├── page.tsx            # Portada Principal (Hero, Métricas, Accesos Rápidos, Noticias)
│   │   ├── bachillerato/       # Tarea 1 Card Sorting: Malla Curricular y Ficha Técnica
│   │   ├── pps/                # Tarea 2 Card Sorting: Formulario F-01 y Trámites de PPS
│   │   └── servicios-tic/      # Tarea 3 Card Sorting: Centro de Servicios TIC y Mesa de Ayuda
│   │
│   ├── components/             # Componentes UI modulares y reutilizables
│   │   ├── Header.tsx          # Cabecera institucional con megamenú accesible y Portal TIC
│   │   ├── EducationalBanner.tsx # Franja superior de advertencia de proyecto académico
│   │   ├── PageTemplate.tsx    # Plantilla institucional unificada para páginas de contenido
│   │   ├── MobileDrawer.tsx    # Menú lateral off-canvas responsivo con acordeones
│   │   ├── Footer.tsx          # Pie de página institucional limpio de 2 filas
│   │   ├── Toast.tsx           # Notificaciones emergentes universales (descargas y acciones)
│   │   └── WhatsAppFloat.tsx   # Botón flotante accesible de soporte vía WhatsApp
│   │
│   └── data/
│       └── navigation.ts       # Fuente única de verdad del árbol de navegación y servicios TIC
│
├── public/
│   └── images/                 # Fotografías institucionales, logotipo heráldico y activos locales
│
├── docs/                       # Especificaciones académicas del curso EIF-511
│   ├── GUIA_ARQUITECTURA_Y_PAGINAS.md # Guía completa de arquitectura, Card Sorting y plantillas
│   ├── Entregable 1  .pdf      # Especificación de arquitectura, arquetipos y OptimalSort
│   └── Instrucciones del proyecto.pdf
│
├── package.json                # Dependencias (Next.js, React, Tailwind CSS, Lucide React)
├── tailwind.config.ts          # Configuración de diseño institucional UNA (colores, sombras, fuentes)
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos
- Node.js 18.x o superior
- npm 9.x o superior

### Instalación e Inicio
```bash
# 1. Instalar dependencias (si no están instaladas)
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador:
http://localhost:3000/
```

### Build para Producción
```bash
npm run build
npm run start
```

---

## 🎯 Validación de Tareas de Card Sorting

El prototipo cuenta con la totalidad de páginas evaluadas en el **Card Sorting Cerrado (OptimalSort)** del proyecto:

1. **Tarea 1 — Plan de Estudios del Bachillerato en Sistemas (`/bachillerato`):**
   - **Ruta validada:** `Inicio > Oferta Académica > Bachillerato en Ingeniería en Sistemas`.
   - **Métricas:** 100% de éxito, 9.2s tiempo medio, 95% ruta directa.
   - **Funcionalidades:** Malla curricular interactiva con filtros por año (Ciclos I al VIII), prerrequisitos, créditos y descarga simulada del plan oficial en PDF.

2. **Tarea 2 — Formulario de Aprobación de la PPS (`/pps`):**
   - **Ruta validada:** `Inicio > Comunidad > Estudiantes y Egresados > PPS`.
   - **Métricas:** 90% de éxito, 13.5s tiempo medio, 85% ruta directa.
   - **Funcionalidades:** Acceso directo en el Hero al **Formulario F-01 (F-PPS-01)**, pestañas de requisitos, cronograma CTFG y acordeón interactivo de FAQs.

3. **Tarea 3 — Soporte Técnico y Cambio de Contraseña de Correo (`/servicios-tic`):**
   - **Ruta validada:** Botón destacado `[ Portal TIC ▾ ] > Servicios TIC`.
   - **Métricas:** 85% de éxito por ruta directa en Portal de Sistemas.
   - **Funcionalidades:** Módulo interactivo de autoservicio para cambio de clave institucional y generador dinámico de tickets de soporte (`TIC-2026-XXXX`).

---

## 🏛️ Sistema de Diseño Institucional

- **4 Pilares + 1 Botón de Acción Funcional:** Arquitectura depurada inspirada en referentes mundiales (MIT, Stanford, Harvard, UNA/UCR).
- **Header con Hover Forgiving (Debounced):** Dropdowns con puente de interacción continuo, zona de tolerancia y apertura fluida sin cierres accidentales.
- **Tipografías Oficiales:** Inter (lectura y UI) y Roboto (cuerpo y datos técnicos).
- **Paleta de Color UNA:** Rojo UNA (`#C30011`), Azul Marino Institucional (`#283044`) y acentos en ámbar y esmeralda.
