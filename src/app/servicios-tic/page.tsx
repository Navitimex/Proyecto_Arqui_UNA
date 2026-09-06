"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Key,
  Wifi,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Send,
  Lock,
} from "lucide-react";
import { useToast } from "@/components/Toast";

export default function ServiciosTICPage() {
  const { showToast } = useToast();

  // Estado de formulario de contraseña
  const [identificacion, setIdentificacion] = useState("");
  const [correo, setCorreo] = useState("");
  const [pwdCode, setPwdCode] = useState<string | null>(null);

  // Estado de ticket de soporte
  const [ticketNombre, setTicketNombre] = useState("");
  const [ticketAsunto, setTicketAsunto] = useState("correo");
  const [ticketDetalle, setTicketDetalle] = useState("");
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identificacion || !correo) return;
    const generatedCode = "UNA-PWD-" + Math.floor(100000 + Math.random() * 900000);
    setPwdCode(generatedCode);
    showToast(`Código de restablecimiento generado: ${generatedCode}`);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketNombre || !ticketDetalle) return;
    const generatedTicket = "TIC-2026-" + Math.floor(1000 + Math.random() * 9000);
    setTicketNumber(generatedTicket);
    showToast(`Ticket generado con éxito: ${generatedTicket}`);
    setTicketNombre("");
    setTicketDetalle("");
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Institucional */}
      <section className="bg-una-blue text-white py-12 px-4 sm:px-6 border-b-4 border-una-red">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav className="text-xs text-slate-400 flex items-center gap-1.5" aria-label="Miga de pan">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>›</span>
            <span>Portal de Sistemas</span>
            <span>›</span>
            <span className="text-white font-semibold">Servicios TIC y Soporte</span>
          </nav>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-una-red/20 border border-una-red/40 text-red-200 text-xs font-bold uppercase tracking-wider">
              <span>Autoservicio Institucional • Campus Conectado</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
              Portal de Sistemas y Servicios TIC
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Autoservicio centralizado para la comunidad universitaria: cambio de contraseña,
              mesa de ayuda técnica, red Eduroam y plataformas institucionales.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUMNA IZQUIERDA: FORMULARIOS (8 COLS) */}
        <div className="lg:col-span-8 space-y-8">
          {/* SECCIÓN 1: RESTABLECER CONTRASEÑA */}
          <section id="cambio-clave" className="bg-white rounded-2xl border-2 border-una-red/30 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4 border-b border-slate-200 pb-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-una-red uppercase tracking-wider">
                  Autoservicio Clave
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-una-blue">
                  Restablecer Contraseña Institucional
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Válido para el Correo UNA (@una.cr / @est.una.ac.cr), Aula Virtual y Red Eduroam.
                </p>
              </div>
            </div>

            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Número de Cédula o Pasaporte
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 118450123"
                    value={identificacion}
                    onChange={(e) => setIdentificacion(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-una-red focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico Alternativo
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="micorreo@gmail.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-una-red focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">
                  Se enviará un código temporal de validación de 6 dígitos.
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-xs shadow transition-colors flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Generar Código de Recuperación</span>
                </button>
              </div>
            </form>

            {pwdCode && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-xs">
                    Código de verificación emitido con éxito:
                  </span>
                  <div className="font-mono text-base font-black text-emerald-700 tracking-wider">
                    {pwdCode}
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Ingresa con este código provisional para definir tu nueva contraseña segura.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* SECCIÓN 2: MESA DE AYUDA Y SOPORTE TIC */}
          <section id="soporte-tecnico" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4 border-b border-slate-200 pb-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Mesa TIC UNA
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-una-blue">
                  Solicitud de Soporte Técnico
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Apertura de tickets para incidentes en laboratorios, red inalámbrica o licencias.
                </p>
              </div>
            </div>

            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre Completo del Solicitante
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Vargas Méndez"
                    value={ticketNombre}
                    onChange={(e) => setTicketNombre(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-una-red focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tipo de Incidencia
                  </label>
                  <select
                    value={ticketAsunto}
                    onChange={(e) => setTicketAsunto(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-una-red focus:bg-white"
                  >
                    <option value="correo">Acceso a Correo / Contraseña</option>
                    <option value="aula">Aula Virtual y Cursos</option>
                    <option value="red">Conectividad Eduroam / WiFi</option>
                    <option value="lab">Laboratorios de Informática</option>
                    <option value="software">Licenciamiento de Software</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Descripción Detallada del Problema
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe el inconveniente, código de error o equipo afectado..."
                  value={ticketDetalle}
                  onChange={(e) => setTicketDetalle(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-una-red focus:bg-white"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-una-blue hover:bg-slate-800 text-white font-heading font-bold text-xs shadow transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitud de Soporte</span>
                </button>
              </div>
            </form>

            {ticketNumber && (
              <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-xs">
                    Ticket registrado en la Mesa de Ayuda TIC:
                  </span>
                  <div className="font-mono text-base font-black text-blue-700 tracking-wider">
                    {ticketNumber}
                  </div>
                  <p className="text-[11px] text-blue-800">
                    Un técnico de soporte de la Escuela de Informática atenderá su caso en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* COLUMNA DERECHA: CONECTIVIDAD Y SISTEMAS (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tarjeta Red Eduroam */}
          <div id="wifi-eduroam" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-una-blue text-base">
              Red Inalámbrica Eduroam
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conectividad segura global en campus universitarios nacionales e internacionales.
            </p>
            <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 text-slate-700">
              <div><strong>SSID:</strong> eduroam</div>
              <div><strong>Usuario:</strong> tu_usuario@una.cr</div>
              <div><strong>Seguridad:</strong> WPA2/WPA3 Enterprise</div>
            </div>
          </div>

          {/* Directorio de Plataformas */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-heading font-black text-una-blue text-base">
              Plataformas Institucionales
            </h3>
            <div className="space-y-2 text-xs">
              <a
                href="https://aulavirtual.una.ac.cr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-100 hover:border-slate-300 bg-slate-50 flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="font-bold text-slate-900 block group-hover:text-una-red">
                    Aula Virtual UNA
                  </span>
                  <span className="text-[11px] text-slate-500">Moodle institucional</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-una-red" />
              </a>

              <a
                href="https://sibeuna.una.ac.cr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-100 hover:border-slate-300 bg-slate-50 flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="font-bold text-slate-900 block group-hover:text-una-red">
                    SIBEUNA
                  </span>
                  <span className="text-[11px] text-slate-500">Sistema de Bibliotecas</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-una-red" />
              </a>

              <a
                href="https://sigesa.una.ac.cr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-100 hover:border-slate-300 bg-slate-50 flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="font-bold text-slate-900 block group-hover:text-una-red">
                    SIGESA
                  </span>
                  <span className="text-[11px] text-slate-500">Gestión de Calificaciones</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-una-red" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
