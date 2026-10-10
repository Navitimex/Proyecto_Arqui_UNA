/**
 * PROYECTO ACADÉMICO / FINES ESTUDIANTILES (EIF-511 Arquitectura de Información)
 * Orquestador cliente de layout: Banner educativo, Header, Drawer, Buscador, Contenido y Footer.
 * Aviso: Prototipo no oficial de la Universidad Nacional de Costa Rica.
 */

"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { MobileDrawer } from "@/components/MobileDrawer";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ToastProvider } from "@/components/Toast";
import { EducationalBanner } from "@/components/EducationalBanner";
import { SearchDialog } from "@/components/SearchDialog";

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Atajo global Ctrl+K / ⌘+K para abrir el buscador
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setIsSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ToastProvider>
      <EducationalBanner />
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </ToastProvider>
  );
};
