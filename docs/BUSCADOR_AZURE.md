# Motor de búsqueda con Azure AI Search

Guía para el equipo del proyecto EIF-511: qué hace el buscador, cómo está armado y cómo conectarlo a Azure.

---

## 1. Qué es y cómo funciona

**Azure AI Search** es un servicio de Microsoft que guarda el contenido del sitio en un **índice**, una estructura optimizada para buscar texto. Cuando alguien busca, Azure no recorre las páginas una por una: consulta el índice y devuelve los resultados ordenados por relevancia, con las palabras encontradas resaltadas.

```
                        (una vez, desde la compu de un integrante)
  seo.ts + navigation.ts ──► npm run search:index ──► Índice "una-contenido" en Azure
                                                              ▲
  Navegador                    Servidor Next.js (Vercel)      │
  ─────────                    ─────────────────────────      │
  Lupa / Ctrl+K / /buscar ──►  GET /api/search?q=...  ────────┘  (con la query key)
                               │
                               └─► si Azure no está configurado o falla:
                                   buscador local con el mismo contenido
```

- **Qué se indexa:** las 26 páginas internas (título y descripción de `PAGE_SEO` en `src/data/seo.ts`), los enlaces del megamenú y las plataformas del Portal TIC (`src/data/navigation.ts`), más sinónimos definidos en `src/data/search-documents.ts` (p. ej. "clave" → Restablecer Contraseña).
- **Español:** el índice usa un analizador que reconoce raíces de palabras ("becas" ≈ "beca") e ignora tildes ("matricula" = "matrícula"). Además, la consulta tolera un error de tipeo por palabra ("matricla") y acepta prefijos mientras se escribe ("matri").
- **Relevancia:** coincidir en el título pesa 5 veces más que en la descripción; las palabras clave pesan 3.
- **Seguridad:** la clave de Azure solo vive en el servidor; el navegador nunca la ve.
- **Respaldo:** sin variables de Azure (por ejemplo, al correr `npm run dev` sin configurar nada) el buscador sigue funcionando con la búsqueda local. La página `/buscar` indica qué motor respondió ("Resultados por Azure AI Search" o "Búsqueda local").

### Archivos relevantes

| Archivo | Para qué sirve |
| --- | --- |
| `src/data/search-documents.ts` | Arma la lista de documentos a indexar y los sinónimos |
| `src/lib/search/azure.ts` | Consulta a Azure AI Search |
| `src/lib/search/local.ts` | Buscador local de respaldo |
| `src/app/api/search/route.ts` | API `GET /api/search?q=...&mode=suggest\|full` |
| `src/components/SearchDialog.tsx` | Buscador rápido (lupa del header y Ctrl+K) |
| `src/app/buscar/page.tsx` | Página de resultados agrupados por pilar |
| `scripts/index-search.ts` | Crea el índice en Azure y sube el contenido |

---

## 2. Crear el servicio en Azure (una sola vez)

1. **Cuenta:** activar **Azure for Students** en <https://azure.microsoft.com/free/students> con el correo institucional. Da crédito gratuito y no pide tarjeta.
2. Entrar a <https://portal.azure.com> → **Crear un recurso** → buscar **AI Search** → **Crear**.
3. Completar:
   - **Suscripción:** Azure for Students.
   - **Grupo de recursos:** crear uno nuevo, p. ej. `rg-eif511`.
   - **Nombre del servicio:** p. ej. `eif511-buscador` (debe ser único en todo Azure; será parte de la URL).
   - **Ubicación:** una región **permitida por la suscripción**. Azure for Students trae una política que limita las regiones (cambia según la cuenta), y si se elige otra el portal falla al crear con `RequestDisallowedByAzure ... This policy maintains a set of best available regions`. Para ver las permitidas: buscar **Directiva (Policy)** en el portal → **Asignaciones** → abrir *Allowed resource deployment regions* → **Parámetros**. Elegir una de esa lista (si además no deja el plan Free en esa región, probar con otra de la lista).
   - **Plan de tarifa:** **Free** (50 MB y 3 índices; de sobra para este sitio, que ocupa unos pocos KB).
4. **Revisar y crear** y esperar a que termine (1–2 minutos).
5. En el recurso creado:
   - **Información general (Overview)** → copiar la **Url**, p. ej. `https://eif511-buscador.search.windows.net`.
   - **Configuración → Claves (Keys)** → copiar la **clave de administración principal** (*primary admin key*).
   - En la misma pantalla → **Administrar claves de consulta** → **Agregar** → nombre `vercel` → copiar la clave generada (*query key*, solo lectura).

> La **admin key** permite borrar y modificar el índice: no se sube a git, no se pega en el chat del grupo y no se pone en Vercel. Si se filtra, en *Keys* se puede **regenerar**.

---

## 3. Cargar el contenido en el índice

1. Copiar `.env.example` a `.env.local` (si no existe) y completar:

   ```env
   AZURE_SEARCH_ENDPOINT=https://eif511-buscador.search.windows.net
   AZURE_SEARCH_INDEX=una-contenido
   AZURE_SEARCH_QUERY_KEY=<query key>
   AZURE_SEARCH_ADMIN_KEY=<admin key>
   ```

2. Ejecutar:

   ```bash
   npm run search:index
   ```

   Debe terminar con algo como `Listo: 61 documentos indexados, 0 obsoletos eliminados.`

3. Probar en local: `npm run dev`, abrir <http://localhost:3000/buscar?q=becas> y verificar que diga **"Resultados por Azure AI Search"**.

En el portal de Azure, dentro del recurso → **Índices** → `una-contenido` → **Explorador de búsqueda**, también se pueden hacer consultas directamente.

### ¿Cuándo volver a correr el script?

- Al agregar o cambiar páginas en `PAGE_SEO`, enlaces en `navigation.ts` o sinónimos en `search-documents.ts`: `npm run search:index`.
- Al cambiar la **estructura** del índice (campos o analizador en `scripts/index-search.ts`): `npm run search:index -- --recreate` (borra el índice y lo crea de cero).

---

## 4. Publicar en Vercel

1. Vercel → proyecto → **Settings → Environment Variables** → agregar (para *Production* y *Preview*):
   - `AZURE_SEARCH_ENDPOINT`
   - `AZURE_SEARCH_INDEX` = `una-contenido`
   - `AZURE_SEARCH_QUERY_KEY` (la query key, **no** la admin key)
2. **Deployments → Redeploy** para que tome las variables.
3. Verificar en `https://<sitio>/buscar?q=becas` que diga "Resultados por Azure AI Search".

Si algo falla en Azure (clave incorrecta, servicio pausado, etc.), el sitio no se cae: responde con la búsqueda local y deja el error en los logs de Vercel (`[search] Azure AI Search no respondió...`).

---

## 5. Uso y medición

- **Abrir el buscador:** lupa del header o **Ctrl+K** (⌘+K en Mac). Flechas ↑/↓ para moverse, Enter para abrir, Esc para cerrar. Enter sin seleccionar nada lleva a `/buscar`.
- **Móvil:** lupa junto al botón "Menú", o el campo "Buscar en el sitio" dentro del menú.
- **Microsoft Clarity:** se registran los eventos personalizados `busqueda` (se mostró una página de resultados) y `busqueda_seleccion` (se abrió un resultado), útiles para la evaluación UX en el panel de Clarity.
