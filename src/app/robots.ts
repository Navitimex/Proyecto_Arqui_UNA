/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * robots.txt del prototipo.
 *
 * El sitio queda fuera de los buscadores por el noindex (meta robots en layout.tsx y cabecera
 * X-Robots-Tag en next.config.mjs), no por este archivo. Los buscadores tienen que poder rastrear
 * las páginas para leer ese noindex: si robots.txt las bloquea, nunca lo ven y la URL puede
 * aparecer igual en los resultados cuando otro sitio la enlaza. Permitir el rastreo también deja
 * que X/Twitter, LinkedIn y otros armen la vista previa al compartir un enlace.
 */

import type { MetadataRoute } from "next";

// Rastreadores que recolectan contenido para modelos de IA. Siguen bloqueados para que el
// contenido simulado del prototipo no se mezcle con la información oficial de la UNA.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "PerplexityBot",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_CRAWLERS, disallow: "/" },
      // /api/ no tiene contenido que rastrear y cada consulta del buscador llama a Azure
      { userAgent: "*", allow: "/", disallow: "/api/" },
    ],
  };
}
