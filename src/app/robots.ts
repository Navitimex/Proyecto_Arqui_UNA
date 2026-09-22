import type { MetadataRoute } from "next";

// Prototipo académico: se bloquea el rastreo para no competir con el sitio oficial de la UNA
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
