# Guía de Arquitectura de Información, Páginas del Card Sorting y Sistema de Plantillas

Documentación técnica y operativa del prototipo web de la **Escuela de Informática de la Universidad Nacional de Costa Rica (UNA)**.

---

## 1. Contexto Metodológico: Validación mediante Card Sorting Cerrado (OptimalSort)

El **Card Sorting** (evaluado mediante la herramienta *OptimalSort*) fue el método empírico de **investigación de usuarios (UX Research)** implementado en la fase analítica del proyecto (*Entregable 1*) para diseñar y validar la Arquitectura de Información del nuevo portal. 

> [!IMPORTANT]
> **Distinción Crítica de Diseño: Metodología de Trastienda vs. Interfaz de Producción**  
> El Card Sorting es una técnica de investigación previa para probar la encontrabilidad de las categorías del sitemap en la mente del usuario antes del diseño visual. **Los rótulos de "Tareas evaluadas", las métricas de éxito (100%, 90%, 85%) y los nombres de las pruebas pertenecen con exclusividad a este documento metodológico y al informe de investigación**.  
> En la **interfaz pública final**, ningún elemento visual debe exhibir términos como *"Card Sorting"* o *"Tarea N"*, ya que representaría una grave falla de diseño consistente en exponer herramientas y diagnósticos internos en la experiencia del usuario final.

Durante dicha fase, se evaluaron tres tareas críticas con usuarios representativos (estudiantes, docentes y postulantes) para medir la efectividad del árbol jerárquico puro:

| Tarea de Investigación Evaluada | Ruta Jerárquica Validada | Ruta en Prototipo Next.js | Métrica de Encontrabilidad |
|---|---|---|---|
| **Tarea 1**: *"Encontrar el plan de estudios del Bachillerato en Sistemas"* | `Inicio > Oferta Académica > Bachillerato en Ingeniería en Sistemas` | [`/bachillerato`](file:///c:/Code%20Projects/UNA/src/app/bachillerato/page.tsx) | **100% éxito**, tiempo medio 9.2s, 95% ruta directa. |
| **Tarea 2**: *"Descargar el formulario de aprobación de la PPS"* | `Inicio > Comunidad > Estudiantes y Egresados > Práctica Profesional (PPS)` (y acceso directo en `Oferta Académica`) | [`/pps`](file:///c:/Code%20Projects/UNA/src/app/pps/page.tsx) | **90% éxito**, tiempo medio 13.5s, 85% ruta directa. |
| **Tarea 3**: *"Solicitar soporte técnico o cambio de contraseña de correo institucional"* | `Inicio > Portal TIC > Restablecer Contraseña / Mesa de Ayuda` | [`/servicios-tic`](file:///c:/Code%20Projects/UNA/src/app/servicios-tic/page.tsx) | **85% éxito**, completada por ruta directa en Portal TIC. |

Para garantizar que el prototipo interactivo demuestre con total fidelidad la arquitectura evaluada, **las páginas asociadas a estos recorridos se encuentran 100% implementadas y funcionales** en Next.js con diseño institucional limpio.

---

## 2. Los 5 Bloques Estándar de Toda Página

Cualquier página del portal sigue estrictamente la siguiente jerarquía estructural:

```plaintext
┌─────────────────────────────────────────────────────────────┐
│ 1. HEADER (Top Bar + Brand Header + Mega Menú + Drawer)     │
├─────────────────────────────────────────────────────────────┤
│ 2. BREADCRUMBS (Barra de Migas de Pan accesible)            │
├─────────────────────────────────────────────────────────────┤
│ 3. CONTENIDO DE LA PÁGINA (Page Header Hero + Content Body) │
├─────────────────────────────────────────────────────────────┤
│ 4. FOOTER (Fat Footer Institucional de 4 columnas)          │
├─────────────────────────────────────────────────────────────┤
│ 5. BOTÓN FLOTANTE DE WHATSAPP (Soporte en Vivo)             │
└─────────────────────────────────────────────────────────────┘
```

### 1. Header Institucional (Patrón "4 Pilares + 1 Botón de Acción Funcional")
Inspirado en los portales universitarios de mayor prestigio internacional (**MIT, Stanford, Harvard**) y en los lineamientos depurados de la **UNA y la UCR**, la barra de navegación sustituye la saturación horizontal previa por una estructura nítida, jerárquica y con respiración visual:

```plaintext
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO EMBLEMA]   La Escuela ▾   Oferta Académica ▾   Investigación ▾   Comunidad ▾   [💻 Portal TIC ▾] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Emblema Oficial Exclusivo**: Logo heráldico con red de nodos y leyenda interna *"Escuela de Informática"*, eliminando rótulos tipográficos redundantes para maximizar el área libre.
- **Los 4 Pilares Académicos e Institucionales**:
  1. **La Escuela**: Historia, Dirección, Acreditación SINAES, Informes de Autoevaluación, Normativas Oficiales y Sedes Regionales.
  2. **Oferta Académica**: Diplomado, Bachillerato en Sistemas (Malla Curricular destacada), Licenciatura y Maestrías de Posgrado (MATI, MATIE, MAGIT).
  3. **Investigación**: Líneas oficiales, Laboratorios (BD, Procesamiento de Imágenes), Proyectos vigentes y Programas de Educación Continua (CISCO, ICAI).
  4. **Comunidad**: Portal unificado de vida universitaria que acoge a:
     - *Estudiantes y Egresados*: Práctica Profesional Supervisada (PPS, Formulario F-01), Sobrepasos, TFG y Bolsa de Empleo TIC.
     - *Docentes y Administrativos*: Gestiones internas, enlaces directos a SIGESA/SIBEUNA y plantillas de cátedra.
- **1 Botón de Acción Funcional (Call-to-Action Transaccional)**:
  - **[ 💻 Portal TIC ▾ ]**: Botón elevado en azul institucional oscuro (`#283044`) o rojo UNA (`#C30011`) con menú de autoservicio en tiempo real:
    - *Restablecer Contraseña* (Cuentas @una.cr y aula virtual).
    - *Mesa de Ayuda Técnica* (Generador de tickets de soporte y laboratorios).
    - *Aula Virtual UNA* (Moodle).
    - *Red Eduroam (WiFi)*.
    - *SIGESA* y *SIBEUNA*.
- **Menú Móvil (Off-canvas Drawer)**: Panel lateral deslizable con tarjeta de acción destacada para el Portal TIC y acordeones por cada uno de los 4 pilares.

### 2. Breadcrumbs (Migas de Pan)
- Ubicadas inmediatamente debajo de la cabecera en un contenedor neutro (`.breadcrumbs-bar`).
- Código semántico HTML5 `<nav aria-label="Migas de pan" class="breadcrumbs">` con separadores SVG accesibles (`aria-hidden="true"`) y etiqueta `aria-current="page"` en el nodo activo.

### 3. Contenido de la Página (`<main>`)
- **Cabecera Hero (`.page-header`)**: Degradado institucional azul oscuro con *hero kicker* (píldora temática), título `<h1>` de alta jerarquía, párrafo conductor `.lead` y grupo de botones de acción `.header-actions`.
- **Contenedor Principal (`.content-container`)**: Margen superior negativo (`-40px`) que eleva las tarjetas sobre el degradado del hero creando profundidad visual moderna.
- **Ficha Técnica (`.specs-overview-card`)**: Resumen ejecutivo de 4 métricas o metadatos clave en formato de cuadrícula.

### 4. Footer Institucional (`footer[role="contentinfo"]`)
- *Fat Footer* de 4 columnas que agrupa:
  - Identidad, dirección física y contacto telefónico/correo.
  - Accesos rápidos a Oferta Académica.
  - Trámites y Servicios frecuentes.
  - Enlaces oficiales de la Universidad Nacional y sellos de acreditación.
- Barra inferior con copyright oficial y declaración de calidad SINAES.

### 5. Botón Flotante de WhatsApp (`.whatsapp-float`)
- Fijado en la esquina inferior derecha con degradado oficial verde `#25D366`, icono SVG nítido, punto pulsante de disponibilidad en vivo y *tooltip* interactivo accesible.

---

## 3. Organización y Reutilización de Hojas de Estilo (CSS)

La arquitectura de estilos está organizada de forma modular para evitar duplicación de código y garantizar consistencia absoluta:

```plaintext
css/
├── global.css        # Core Institucional: Variables, Reset, Header, Breadcrumbs, Page Template, Footer, WhatsApp
├── kit.css           # UI Kit de Componentes Maestros (Alertas, Trámites, Fichas de Descarga, Contacto)
├── home.css          # Estilos de la Portada Principal (Showcase Slider, Métricas, Quick Access, Noticias)
├── pps.css           # Estilos de PPS (Cronograma CTFG, Tabs de requisitos, Acordeón de FAQs)
├── carreras.css      # Estilos de Oferta Académica (Filtros interactivos de ciclos, Malla curricular, Perfiles)
└── servicios-tic.css # Estilos de Servicios TIC (Formulario de cambio de contraseña, Generador de tickets de soporte)
```

### Clases Transversales Centralizadas en `css/global.css`:

| Módulo | Selector CSS Principal | Propósito |
|---|---|---|
| **Cabecera** | `.top-bar`, `header[role="banner"]`, `.brand-logo`, `.dropdown`, `.dropdown-menu` | Barra superior, logotipo institucional y menú desplegable multinivel. |
| **Menú Móvil** | `.hamburger-btn`, `.drawer-backdrop`, `.mobile-drawer`, `.mobile-accordion-btn` | Menú lateral deslizable para dispositivos móviles y tabletas. |
| **Breadcrumbs** | `.breadcrumbs-bar`, `.breadcrumbs-container`, `.breadcrumbs`, `.breadcrumb-sep`, `.current` | Barra de ruta de navegación consistente en todas las páginas internas. |
| **Hero de Página** | `.page-header`, `.page-header-container`, `.hero-kicker`, `.page-header h1`, `.page-header p.lead` | Cabecera destacada para páginas de trámites, carreras y servicios. |
| **Contenedor** | `.content-container` | Contenedor centrado a 1300px con elevación visual sobre el hero. |
| **Ficha Técnica** | `.specs-overview-card`, `.spec-item`, `.spec-icon-box`, `.spec-label`, `.spec-value` | Cuadrícula de 4 estadísticas o datos clave de la página. |
| **Botones** | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline-white` | Botones accesibles con estados hover, elevación y soporte de iconos SVG. |
| **Notificación** | `.toast-notification`, `.toast-notification.show` | Alerta emergente inferior para descargas y confirmaciones en tiempo real. |
| **Footer** | `footer[role="contentinfo"]`, `.footer-container`, `.footer-col`, `.footer-bottom` | Pie de página institucional de 4 columnas. |
| **WhatsApp** | `.whatsapp-float`, `.whatsapp-status-dot`, `.whatsapp-tooltip` | Botón flotante interactivo con tooltip en hover. |

---

## 4. Plantilla Boilerplate para Nuevas Páginas

Para crear una nueva página en el prototipo manteniendo el 100% de coherencia visual e interactiva, basta con utilizar la siguiente plantilla base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página | Escuela de Informática - UNA</title>
    
    <!-- Tipografías Oficiales -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- CSS Institucional Obligatorio -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/kit.css">
    <!-- Opcional: hoja específica de la página -->
    <!-- <link rel="stylesheet" href="css/mi-pagina.css"> -->
</head>
<body>

    <!-- 1. TOP BAR (Copiar de index.html / bachillerato.html) -->
    <div class="top-bar">...</div>

    <!-- 2. HEADER Y MENÚ (Copiar de index.html / bachillerato.html) -->
    <header role="banner">...</header>
    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <aside class="mobile-drawer" id="mobileDrawer">...</aside>

    <!-- 3. BREADCRUMBS -->
    <div class="breadcrumbs-bar">
        <div class="breadcrumbs-container">
            <nav aria-label="Migas de pan" class="breadcrumbs">
                <a href="index.html">Inicio</a>
                <span class="breadcrumb-sep" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
                <a href="#">Categoría Padre</a>
                <span class="breadcrumb-sep" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
                <span class="current" aria-current="page">Nombre de la Página Actual</span>
            </nav>
        </div>
    </div>

    <!-- 4. CONTENIDO PRINCIPAL -->
    <main role="main">
        <section class="page-header">
            <div class="page-header-container">
                <div class="hero-kicker">KICKER TEMÁTICO</div>
                <h1>Título Principal de la Página</h1>
                <p class="lead">Descripción introductoria clara y orientadora para el usuario.</p>
                <div class="header-actions">
                    <button class="btn btn-primary download-trigger" data-file="Documento_Oficial.pdf">
                        Descargar Recurso
                    </button>
                </div>
            </div>
        </section>

        <div class="content-container">
            <!-- Ficha Técnica -->
            <section class="specs-overview-card">
                <div class="spec-item">
                    <div class="spec-icon-box red-tint">...</div>
                    <div class="spec-info">
                        <span class="spec-label">Dato 1</span>
                        <span class="spec-value">Valor 1</span>
                        <span class="spec-sub">Subtítulo 1</span>
                    </div>
                </div>
                <!-- Repetir hasta 4 items -->
            </section>

            <!-- Secciones específicas con componentes de kit.css -->
        </div>
    </main>

    <!-- 5. FOOTER INSTITUCIONAL -->
    <footer role="contentinfo">...</footer>

    <!-- 6. WHATSAPP FLOTANTE -->
    <a href="https://wa.me/50688888888" class="whatsapp-float" target="_blank" rel="noopener noreferrer">...</a>

    <!-- 7. TOAST DE NOTIFICACIÓN -->
    <div class="toast-notification" id="universalToast" role="alert" aria-live="assertive">
        <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span id="toastMessage">Operación realizada con éxito</span>
    </div>

    <!-- 8. JAVASCRIPT GLOBAL -->
    <script src="js/main.js"></script>
</body>
</html>
```

---

## 5. Guía de Prueba y Verificación de las 3 Tareas de Card Sorting

Para validar los recorridos de evaluación en el prototipo interactivo (con el servidor local en `http://127.0.0.1:8000/`):

### Tarea 1: Encontrar el plan de estudios del Bachillerato en Sistemas
1. Desde `index.html`, posicione el cursor sobre el menú **Oferta Académica**.
2. Haga clic en **Bachillerato en Ingeniería en Sistemas**.
3. Se cargará [`bachillerato.html`](file:///c:/Code%20Projects/UNA/bachillerato.html).
4. Verifique la barra de migas de pan: `Inicio > Oferta Académica > Bachillerato en Ingeniería en Sistemas`.
5. Interactúe con los botones de filtro por año (Año 1 a Año 4) para explorar la malla curricular.
6. Haga clic en el botón principal **"Descargar Plan de Estudios Oficial (PDF)"** y constate la notificación emergente (*Toast*).

### Tarea 2: Descargar el formulario de aprobación de la PPS
1. Desde el Home o menú superior, navegue a **Estudiantes y Egresados > Práctica Profesional (PPS)** o ingrese a [`pps.html`](file:///c:/Code%20Projects/UNA/pps.html).
2. Verifique la presencia inmediata en el Hero del botón **"Descargar Formulario de Aprobación de la PPS (.docx)"**.
3. Haga clic en el botón para activar la descarga inmediata simulada con notificación Toast.
4. En la pestaña *Documentación y Formatos*, compruebe que la ficha del **Formulario F-01 (F-PPS-01)** se encuentra visualmente destacada con borde carmesí y distintivo de *Trámite Principal*.

### Tarea 3: Solicitar soporte técnico o cambio de contraseña de correo institucional
1. En el menú superior, navegue a **Portal de Sistemas > Servicios TIC** o ingrese a [`servicios-tic.html`](file:///c:/Code%20Projects/UNA/servicios-tic.html).
2. Verifique las migas de pan: `Inicio > Portal de Sistemas > Servicios TIC`.
3. En el **Módulo de Cambio de Contraseña**, complete el formulario y presione *"Restablecer y Actualizar Contraseña"*; verifique la aparición de la tarjeta verde de confirmación con el código institucional generado.
4. En el **Módulo de Mesa de Ayuda Técnica**, complete la incidencia y presione *"Enviar Solicitud a la Mesa de Ayuda"*; verifique la generación automática del número de ticket (`TIC-2026-XXXX`) y la notificación toast.

---

## 6. Arquitectura Modular en Next.js + Tailwind CSS

Para eliminar la duplicación de código y el mantenimiento manual de archivos CSS dispersos, el cascarón interactivo también cuenta con una implementación limpia en **Next.js + Tailwind CSS**:

### Estructura de Componentes
- `src/data/navigation.ts`: Archivo único con la definición del árbol de 7 categorías del Sitemap TO-BE.
- `src/components/Header.tsx`: Cabecera institucional de dos niveles (Identidad + Menú con dropdowns accesibles).
- `src/components/MobileDrawer.tsx`: Menú lateral off-canvas con acordeones interactivos y sin errores de doble activación.
- `src/components/Footer.tsx`: Fat footer institucional unificado.
- `src/components/TopBar.tsx`: Barra superior con accesos a Aula Virtual, Correo y Directorio.

### Rutas del App Router
- `/` (`src/app/page.tsx`): Home principal y vitrina de arquitectura.
- `/bachillerato` (`src/app/bachillerato/page.tsx`): Malla curricular interactiva (Tarea 1).
- `/pps` (`src/app/pps/page.tsx`): Formulario F-01 y trámites de PPS (Tarea 2).
- `/servicios-tic` (`src/app/servicios-tic/page.tsx`): Restablecimiento de contraseña y Mesa TIC (Tarea 3).

### Comandos de Ejecución
```bash
# Iniciar servidor de desarrollo en puerto 3000
npm run dev

# Generar build estático optimizado
npm run build
```

---

## 7. Justificación Académica del Patrón "4 Pilares + 1 Botón de Acción Funcional" (Curso EIF-511)

### 7.1. Diagnóstico del Sitio Actual (AS-IS)
El portal histórico de la Escuela presentaba una doble barra fragmentada:
- Un menú superior con 4 categorías confusas que mezclaba posgrados con trámites administrativos en *"Quiénes Somos"*.
- Una barra lateral flotante vertical que agrupaba accesos por rol (*Estudiantes*, *Académicos*, *PPS*) desconectada de la jerarquía principal.
- **Resultado en pruebas de usuario**: Desorientación espacial, abandono masivo en la búsqueda de formularios (como el F-01 de PPS) y escasa visibilidad de servicios TIC.

### 7.2. Evaluación de la Propuesta Preliminar TO-BE v1 (7 Categorías Horizontales)
En la fase preliminar se propuso ordenar todo en una única fila de 7 categorías:
`La Escuela` | `Oferta Académica` | `Investigación y Extensión` | `Estudiantes y Egresados` | `Docentes y Admin` | `Documentos y Transparencia` | `Portal de Sistemas`.

**Problemas detectados en UI y UX**:
1. **Sobrecarga y Asfixia Horizontal**: En resoluciones de escritorio estándar (1280px a 1440px), 7 rótulos extensos (muchos con conjunciones "X y Y") ocupaban más de 1,100px solo en texto, dejando apenas márgenes mínimos y colapsando contra el logotipo.
2. **Inconsistencia Taxonómica**: Se mezclaban simultáneamente 4 criterios taxonómicos en el mismo nivel jerárquico:
   - *Por Tema*: La Escuela, Oferta Académica, Investigación.
   - *Por Audiencia/Rol*: Estudiantes y Egresados, Docentes y Admin.
   - *Por Formato*: Documentos y Transparencia.
   - *Por Función/Herramienta*: Portal de Sistemas.
3. **Elevada Densidad Léxica**: 4 conjunciones ("y") generaban 11 chunks cognitivos distintos a nivel perceptual.

### 7.3. La Solución Definitiva: "4 Pilares + 1 Botón de Acción Funcional" (TO-BE v2)
Adoptada por los referentes mundiales de educación superior (**MIT, Stanford, Harvard, Oxford**) y las universidades públicas líderes en Costa Rica (**UNA y UCR**):

| Dimensión | Enfoque | Elementos |
|---|---|---|
| **Pilares de Contenido (Exploración Cognitiva)** | 4 Bloques Temáticos Puros | **1. La Escuela** • **2. Oferta Académica** • **3. Investigación** • **4. Comunidad** |
| **Acción Transaccional (Autoservicio Funcional)** | 1 Call-to-Action Destacado | **[ 💻 Portal TIC ▾ ]** (Contraseña, Soporte Técnico, Moodle, WiFi, SIGESA, SIBEUNA) |

#### Fundamentación Teórica:
1. **Ley de Miller (7 ± 2 Chunks de Información)**: 
   Al reducir de 7 a 4 pilares, la cabecera se ubica muy por debajo del límite de saturación de la memoria de trabajo humana. El usuario identifica su objetivo en menos de 200 ms mediante un barrido visual natural.
2. **Separación de Intenciones (Browse vs. Task)**:
   - El 80% del tiempo los usuarios que exploran información institucional o planes de estudio usan los 4 Pilares.
   - Los usuarios que buscan realizar una tarea transaccional urgente (recuperar clave institucional o abrir un ticket de soporte) se dirigen de forma refleja al botón destacado **Portal TIC**, sin tener que adivinar dentro de un menú académico.
3. **Preservación Total del Card Sorting Evaluado**:
   - **Tarea 1 (Bachillerato)**: Acceso directo en `Oferta Académica > Bachillerato en Ingeniería en Sistemas` (100% de éxito).
   - **Tarea 2 (Formulario PPS F-01)**: Acceso directo en `Comunidad > Estudiantes y Egresados > PPS` y enlace al Formulario F-01 (90% de éxito).
   - **Tarea 3 (Servicios TIC / Clave / Soporte)**: Acceso inmediato mediante el botón `Portal TIC > Restablecer Contraseña / Mesa de Ayuda Técnica` (85% de éxito).


