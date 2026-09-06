/**
 * ============================================================================
 * PROYECTO ACADÉMICO / ESTUDIANTIL - ESCUELA DE INFORMÁTICA (UNA)
 * ============================================================================
 * Curso: EIF-511 Arquitectura de Información
 * Institución: Universidad Nacional de Costa Rica (UNA)
 * Finalidad: Prototipo desarrollado con fines estrictamente didácticos y
 *            evaluativos de experiencia de usuario (UX/UI) y arquitectura
 *            de información.
 * AVISO LEGAL: Este sitio web NO es un portal oficial de la Universidad Nacional.
 * ============================================================================
 */

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Escuela de Informática UNA (Proyecto Académico) | EIF-511",
  description:
    "Prototipo de Arquitectura de Información desarrollado exclusivamente con fines académicos y estudiantiles para el curso EIF-511 de la Universidad Nacional de Costa Rica (UNA). Este sitio no representa un canal institucional oficial.",
  keywords: [
    "Proyecto Académico",
    "Fines Estudiantiles",
    "EIF-511 Arquitectura de Información",
    "Universidad Nacional de Costa Rica",
    "Escuela de Informática UNA",
    "Prototipo Educativo",
  ],
  authors: [{ name: "Estudiantes del curso EIF-511 Arquitectura de Información" }],
  // Evitar que motores de búsqueda indexen este prototipo como si fuera el sitio oficial de la UNA
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Escuela de Informática UNA (Proyecto Académico)",
    description:
      "Prototipo desarrollado exclusivamente con fines académicos para el curso EIF-511 Arquitectura de Información - UNA.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8FF] font-sans antialiased text-slate-800">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
