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
  title: "Escuela de Informática | Universidad Nacional de Costa Rica",
  description:
    "Portal oficial de la Escuela de Informática de la Universidad Nacional de Costa Rica (UNA). Formación de excelencia en Ingeniería en Sistemas de Información, investigación y servicios tecnológicos.",
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
