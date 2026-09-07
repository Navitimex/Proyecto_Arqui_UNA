import React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Users, Mail, Phone, MapPin } from "lucide-react";

export default function DirectorioPage() {
  const staff = [
    { name: "Dr. Roberto Vargas Salas", role: "Director de Escuela", email: "direccion.informatica@una.cr", phone: "+506 2277-3850" },
    { name: "M.Sc. Laura Solís Brenes", role: "Subdirectora Académica", email: "subdireccion.informatica@una.cr", phone: "+506 2277-3851" },
    { name: "Ing. Carlos Méndez Rojas", role: "Coordinador de Práctica Profesional (PPS)", email: "pps.informatica@una.cr", phone: "+506 2277-3855" },
    { name: "Licda. Silvia Cordero Gómez", role: "Jefatura Administrativa", email: "informatica@una.cr", phone: "+506 2277-3000" },
  ];

  return (
    <PageTemplate
      pillar="La Escuela"
      pillarHref="/"
      title="Directorio de Académicos y Administrativos"
      badge="Personal Institucional"
      description="Canales oficiales de atención y contacto con las autoridades, coordinación de cátedras y personal administrativo de la Escuela de Informática."
      icon={<Users className="w-3.5 h-3.5" />}
      quickLinks={[
        { label: "Mesa de Ayuda (DTIC)", href: "https://www.dtic.una.ac.cr", external: true },
        { label: "Práctica Profesional (PPS)", href: "/pps" },
      ]}
    >
      <div className="space-y-6">
        <h3 className="font-heading font-black text-base text-una-blue">
          Autoridades y Coordinaciones Principales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {staff.map((person, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="font-heading font-bold text-sm text-slate-900">{person.name}</div>
              <div className="text-xs text-una-red font-semibold">{person.role}</div>
              <div className="text-xs text-slate-600 space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{person.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{person.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
