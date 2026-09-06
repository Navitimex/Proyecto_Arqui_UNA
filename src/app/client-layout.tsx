"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { MobileDrawer } from "@/components/MobileDrawer";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ToastProvider } from "@/components/Toast";
import { EducationalBanner } from "@/components/EducationalBanner";

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ToastProvider>
      <EducationalBanner />
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </ToastProvider>
  );
};
