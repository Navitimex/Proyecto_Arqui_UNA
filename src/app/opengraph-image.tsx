/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Imagen para compartir en redes (Open Graph / Twitter), 1200×630. Repite el aviso de sitio no
 * oficial para que también se vea en las vistas previas de WhatsApp, Teams, LinkedIn, etc.
 * Todas las rutas la usan a través de OG_IMAGE (src/data/seo.ts).
 */

import { ImageResponse } from "next/og";
import tailwindConfig from "../../tailwind.config";
import { OG_IMAGE } from "@/data/seo";

// La versión Node de next/og falla en Windows al cargar sus fuentes (arma rutas file:// con
// path.join), lo que rompe `npm run build` en local. La versión edge no tiene ese problema.
export const runtime = "edge";

export const alt = OG_IMAGE.alt;
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height };
export const contentType = "image/png";

// Colores institucionales de tailwind.config.ts. El ámbar y el gris son los de la franja de
// EducationalBanner (amber-300 / amber-950) y los textos secundarios del sitio (slate-300).
const { una } = tailwindConfig.theme?.extend?.colors as { una: Record<string, string> };
const AMBER_300 = "#FCD34D";
const AMBER_950 = "#451A03";
const SLATE_300 = "#CBD5E1";

/** Logo de la Escuela como data URL (en edge no hay fs; el bundler empaqueta el archivo). */
async function loadLogo(): Promise<string> {
  const response = await fetch(new URL("../../public/images/logo-escuela-informatica.png", import.meta.url));
  const bytes = new Uint8Array(await response.arrayBuffer());
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return `data:image/png;base64,${btoa(binary)}`;
}

export default async function OpenGraphImage() {
  const logo = await loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: una.blue,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 80px",
            borderBottom: `8px solid ${una.red}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 330,
              height: 330,
              marginRight: 64,
              borderRadius: 32,
              backgroundColor: "white",
            }}
          >
            <img src={logo} width={280} height={225} alt="" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 26, letterSpacing: 3, color: AMBER_300 }}>
              PROYECTO ACADÉMICO · EIF-511
            </div>
            <div style={{ fontSize: 72, lineHeight: 1.1, color: "white", marginTop: 18 }}>
              Escuela de Informática UNA
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.35, color: SLATE_300, marginTop: 24 }}>
              Prototipo de arquitectura de información con fines didácticos y de evaluación UX
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "26px 80px",
            fontSize: 28,
            color: AMBER_950,
            backgroundColor: AMBER_300,
          }}
        >
          Aviso: no es una página oficial de la Universidad Nacional de Costa Rica.
        </div>
      </div>
    ),
    size
  );
}
