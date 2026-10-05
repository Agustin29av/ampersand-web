import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Clock, Copy, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Reveal } from '../../components/ui/Reveal';
import { Accent, Eyebrow } from '../../components/ui/SectionHeading';
import { contact } from '../../data/site';
import { easeOut } from '../../lib/motion';

const serviceOptions = ['Desarrollo web', 'App móvil', 'Cloud', 'Automatización', 'Otro'];

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] font-normal text-navy placeholder-slate-400 transition-colors outline-none focus:border-turquesa focus:ring-2 focus:ring-turquesa/20';
const labelClass = 'block text-sm font-semibold text-navy';

export function Contact() {
  const [services, setServices] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sin backend: arma el mail con la consulta y abre el cliente de correo del visitante.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const lines = [
      `Nombre: ${name}`,
      `Email: ${data.get('email')}`,
      data.get('company') ? `Empresa: ${data.get('company')}` : null,
      services.length ? `Servicios: ${services.join(', ')}` : null,
      '',
      String(data.get('message') ?? ''),
    ].filter((line) => line !== null);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Nuevo proyecto - ${name}`,
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-[#f5f7fa] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-navy sm:text-5xl">
            ¿Tenés una idea? <Accent>Hablemos.</Accent>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-[17px]">
            Contanos qué necesitás y te respondemos con una propuesta clara, sin compromiso. Llevemos tu idea al
            siguiente nivel.
          </p>

          <div className="mt-10 space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <a href={`mailto:${contact.email}`} className="flex min-w-0 items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-turquesa/10 text-turquesa">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">Escribinos</span>
                  <span className="block truncate font-semibold text-navy">{contact.email}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-3.5 text-xs font-medium text-slate-600 transition-colors hover:border-turquesa hover:text-turquesa"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Ampersand, tengo una consulta sobre un proyecto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-turquesa/40 hover:shadow-[0_16px_32px_-20px_rgba(0,23,72,0.3)]"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Respuesta rápida</span>
                  <span className="block font-semibold text-navy">Escribinos por WhatsApp</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:text-turquesa" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-turquesa" /> Respuesta en menos de 24 hs hábiles
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-turquesa" /> {contact.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_32px_64px_-32px_rgba(0,23,72,0.25)] sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="flex min-h-[480px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-turquesa text-white"
                  >
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </motion.span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-navy">¡Gracias por escribirnos!</h3>
                  <p className="mt-3 max-w-sm text-slate-600">
                    Abrimos tu correo con la consulta lista para enviar. Si no se abrió, escribinos a{' '}
                    <a href={`mailto:${contact.email}`} className="font-semibold text-navy underline underline-offset-4">
                      {contact.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-sm font-semibold text-turquesa underline-offset-4 hover:underline"
                  >
                    Volver al formulario
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className={labelClass}>
                      Nombre
                      <input name="name" required autoComplete="name" placeholder="Tu nombre" className={inputClass} />
                    </label>
                    <label className={labelClass}>
                      Email
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="tu@empresa.com"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className={labelClass}>
                    Empresa <span className="font-normal text-slate-400">(opcional)</span>
                    <input name="company" autoComplete="organization" placeholder="Nombre de tu empresa" className={inputClass} />
                  </label>

                  <fieldset>
                    <legend className={labelClass}>¿Qué necesitás?</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {serviceOptions.map((s) => {
                        const selected = services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleService(s)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                              selected
                                ? 'border-turquesa bg-turquesa text-white'
                                : 'border-slate-200 text-slate-600 hover:border-turquesa/60 hover:text-navy'
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <label className={labelClass}>
                    Contanos sobre tu proyecto
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Objetivos, plazos estimados, herramientas que ya usás…"
                      className={`${inputClass} resize-none`}
                    />
                  </label>

                  <button
                    type="submit"
                    className="group flex h-13 w-full items-center justify-center gap-2 rounded-full bg-navy text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg"
                  >
                    Enviar consulta
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-sm text-slate-500">Sin compromiso. Te respondemos en menos de 24 hs hábiles.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
