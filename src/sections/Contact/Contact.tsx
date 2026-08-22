import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Badge } from '../../components/Badge/Badge';
import type { ContactFormData } from '../../types';

export const Contact: React.FC = () => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    serviceType: 'Web',
    message: ''
  });

  const companyEmail = 'contacto@ampersand.dev';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyEmail);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: 'Web',
        message: ''
      });
    }, 500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="text-teal-400 border-teal-500/40 bg-teal-950/40">
            HABLEMOS DE TU PROYECTO
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ¿Tenés una idea? <span className="text-gradient-dark">Hablemos.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Escribinos por el formulario o contactanos directamente por email o WhatsApp. Estamos listos para comenzar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & Mail */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Email Banner Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Email Directo</div>
                  <div className="text-base font-bold text-white font-mono">{companyEmail}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${companyEmail}?subject=Consulta%20Proyecto%20Ampersand`}
                  className="flex-1"
                >
                  <Button size="sm" variant="primary" fullWidth icon={<Mail className="w-4 h-4" />}>
                    Enviar Mail
                  </Button>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white border border-slate-600 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copiar email"
                >
                  {copiedMail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Atención Inmediata</div>
                  <div className="text-sm font-bold text-white">Chat directo por WhatsApp</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ¿Preferís una respuesta rápida? Escribinos directamente al equipo.
              </p>
              <a
                href="https://wa.me/?text=Hola%20Ampersand,%20tengo%20una%20consulta%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-1"
              >
                <span>Abrir chat de WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Additional Info Cards */}
            <div className="space-y-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Respuesta garantizada en menos de 24 hs hábiles.</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Buenos Aires, Argentina — Proyectos globales.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-teal-500/20 text-teal-400 border border-teal-500/40 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Gracias por ponerte en contacto con Ampersand. Revisaremos los detalles de tu consulta y te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="inline-block text-xs font-semibold text-teal-400 hover:text-teal-300 pt-4 underline underline-offset-4 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email de contacto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tuemail@empresa.com"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Empresa / Startup (Opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Tipo de Servicio
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      >
                        <option value="Web">Desarrollo Web a Medida</option>
                        <option value="Mobile">App Móvil (iOS / Android)</option>
                        <option value="Cloud">Soluciones Cloud & DevOps</option>
                        <option value="Automation">Automatizaciones e Integraciones</option>
                        <option value="Otro">Otro / Consultoría General</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Contanos sobre tu proyecto *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Breve descripción del software que necesitas desarrollar, objetivos o plazos estimados..."
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-4 h-4" />}
                  >
                    Enviar Consulta
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
