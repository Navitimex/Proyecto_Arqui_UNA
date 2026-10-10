# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Contexto del proyecto: es un proyecto estudiantil

Prototipo académico del curso EIF-511 Arquitectura de Información (UNA Costa Rica) que reproduce el portal de la Escuela de Informática con fines didácticos y de evaluación UX. **No es un sitio oficial de la UNA ni lo representa.** Cualquier cambio debe mantener esa condición visible:

- Todo el sitio es `noindex` para no competir con el sitio oficial: meta robots en [src/app/layout.tsx](src/app/layout.tsx) y cabecera `X-Robots-Tag` en [next.config.mjs](next.config.mjs), que cubre también imágenes y la API. [src/app/robots.ts](src/app/robots.ts) **permite** el rastreo a propósito, porque si lo bloqueara los buscadores nunca leerían el `noindex` y la URL podría aparecer igual si alguien la enlaza. Solo bloquea `/api/` y los rastreadores de IA. No hay `sitemap.xml`, y no debe agregarse.
- La imagen para redes ([src/app/opengraph-image.tsx](src/app/opengraph-image.tsx), 1200×630) repite el aviso de sitio no oficial. Usa runtime edge porque la versión Node de `next/og` falla en Windows. Todas las rutas la referencian por `OG_IMAGE` en `seo.ts`.
- `EducationalBanner` y los textos de SEO (`SITE_NAME`, `SITE_DESCRIPTION`) aclaran que es un proyecto académico. No hay que quitarlos.
- Los formularios, descargas, tickets y cambios de contraseña son simulaciones (toasts) y no deben conectarse a sistemas reales de la UNA.
- Cada archivo empieza con una cabecera de comentario "PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 ...)". Los archivos nuevos también deben llevarla.

El contenido, los comentarios y los textos de la UI están en español, y el código nuevo debe seguir igual.

La arquitectura de información sigue el patrón "4 Pilares + 1 Botón de Acción" (La Escuela, Oferta Académica, Investigación y Extensión, Comunidad, más el botón Portal TIC). Las especificaciones están en [docs/GUIA_ARQUITECTURA_Y_PAGINAS.md](docs/GUIA_ARQUITECTURA_Y_PAGINAS.md) y en [sitemap propuesta.md](sitemap%20propuesta.md).

## Comandos

```bash
npm run dev            # servidor de desarrollo en http://localhost:3000
npm run build          # build de producción (también hace el chequeo de tipos)
npm run start          # sirve el build en el puerto 3000
npx tsc --noEmit       # solo chequeo de tipos
npm run search:index                 # crea/actualiza el índice de Azure AI Search y sincroniza documentos
npm run search:index -- --recreate   # borra y recrea el índice (si cambian campos o analizadores)
```

No hay linter ni tests configurados. Despliegue en Vercel.

## Arquitectura

Next.js 14 App Router, TypeScript estricto, Tailwind. El alias `@/*` apunta a `src/*`.

### Layout

`layout.tsx` (servidor) define fuentes, metadata global y Microsoft Clarity, y envuelve todo en `client-layout.tsx`. Ese componente cliente monta el banner educativo, el `Header`, el `MobileDrawer`, el `SearchDialog` (con atajo global Ctrl/⌘+K), el `Footer`, el botón de WhatsApp y el `ToastProvider` (`useToast` para descargas o acciones simuladas).

### Fuentes de verdad en `src/data/`

- **`navigation.ts`**: `SITEMAP_NAVIGATION` (los 4 pilares, con `directItems` y `subcategories`) y `PORTAL_TIC_ITEMS`. El megamenú del `Header`, el `MobileDrawer` y el buscador leen de aquí.
- **`seo.ts`**: `PAGE_SEO` asocia cada ruta a un título y una descripción. `buildPageMetadata(path)` arma la metadata completa: canonical, Open Graph y Twitter. Lanza un error si la ruta no está en `PAGE_SEO`, porque si no la página heredaría en silencio el canonical de la portada. Next reemplaza `openGraph` y `twitter` en las rutas hijas en vez de fusionarlos, así que esos campos se repiten por ruta. `NOT_FOUND_METADATA` es la de [src/app/not-found.tsx](src/app/not-found.tsx), sin canonical.
- **`search-documents.ts`**: genera los documentos del buscador a partir de `PAGE_SEO` y `navigation.ts`, más sinónimos en `EXTRA_KEYWORDS`. No duplica textos.

### Patrón de página

Cada ruta tiene un `layout.tsx` de servidor que solo exporta `metadata = buildPageMetadata("/ruta")`. Esto permite que las páginas sean componentes cliente sin perder la metadata. La mayoría de las páginas de contenido usan `PageTemplate` (hero con miga de pan, pilar, badge y quick links). `/`, `/bachillerato`, `/pps` y `/buscar` son páginas cliente con interactividad propia. Cada página tiene un solo `h1`, y los encabezados no saltan niveles. `PageTemplate` pone el `h1`, así que el contenido de esas páginas empieza en `h2`. El tamaño visual lo dan las clases, no la etiqueta.

**Para agregar una página:** crear `page.tsx` y `layout.tsx` en la ruta, agregar la entrada en `PAGE_SEO`, enlazarla en `navigation.ts` si va en el menú, opcionalmente agregar sinónimos en `EXTRA_KEYWORDS` (y un pilar en `PILLAR_BY_PREFIX` si la ruta no está en el menú), y volver a correr `npm run search:index` para que Azure la indexe.

### Buscador (`src/lib/search/`)

`GET /api/search?q=...&mode=suggest|full` ([src/app/api/search/route.ts](src/app/api/search/route.ts)) llama a `search()` en `index.ts`. Si están `AZURE_SEARCH_ENDPOINT` y `AZURE_SEARCH_QUERY_KEY`, consulta Azure AI Search (`azure.ts`, Lucene con prefijo y fuzzy `~1`, timeout de 4 s). Si no están configuradas o Azure falla, usa el buscador local en memoria (`local.ts`) sobre los mismos documentos. Con la configuración por defecto, `npm run dev` funciona sin Azure.

- `local.ts` imita el comportamiento de Azure: ignora tildes, acepta prefijos y tolera un error de tipeo. Usa los mismos pesos por campo que el scoring profile definido en [scripts/index-search.ts](scripts/index-search.ts). Si se cambia uno, hay que cambiar el otro.
- Los resaltados usan los caracteres de control `HIGHLIGHT_PRE`/`HIGHLIGHT_POST` (`\u0002`/`\u0003`) en lugar de HTML. `SearchHighlight.tsx` los convierte en `<mark>` sin usar `dangerouslySetInnerHTML`.
- `types.ts` no importa nada del servidor y es seguro usarlo en el cliente. `azure.ts` es solo de servidor.
- `client.ts` registra eventos de Clarity (`busqueda`, `busqueda_seleccion`) para la evaluación UX.
- La guía completa (crear el servicio, claves y Vercel) está en [docs/BUSCADOR_AZURE.md](docs/BUSCADOR_AZURE.md).

### Microsoft Clarity (analítica UX)

Clarity registra mapas de calor y grabaciones de sesión, que sirven como evidencia de la evaluación UX del curso. [src/components/MicrosoftClarity.tsx](src/components/MicrosoftClarity.tsx) se monta en el layout raíz y **solo se carga en builds de producción y cuando `NEXT_PUBLIC_CLARITY_PROJECT_ID` está definido**, así que en `npm run dev` no aparece. Para registrar eventos personalizados se usa `window.clarity?.("event", nombre)`, tipado en [src/lib/search/client.ts](src/lib/search/client.ts). Hoy el buscador emite `busqueda` y `busqueda_seleccion`. Para medir una interacción nueva hay que seguir el mismo patrón: llamada opcional con `?.` para que no falle si Clarity no está cargado, y nombres de evento en español.

### Variables de entorno

Ver [.env.example](.env.example) y copiarlo a `.env.local`. `AZURE_SEARCH_ADMIN_KEY` solo va en `.env.local` para el script de indexación y nunca se sube a Vercel. En Vercel va únicamente la query key.

## Estilos

Los colores institucionales están en [tailwind.config.ts](tailwind.config.ts) (`una-red`, `una-blue`, `una-gold`, `una-cream`, etc.) junto con las sombras `shadow-dropdown`, `shadow-drawer` y `shadow-card`. Usar esos tokens en lugar de hex sueltos. El README cita otros valores hex, pero manda el config. Fuentes: Inter (`font-sans`) y Roboto (`font-heading`). Íconos con `lucide-react`.
