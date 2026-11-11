import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../../components/ui/InstagramIcon';
import { contact, whatsappUrl } from '../../data/site';

const needs = ['Una página', 'Un sistema', 'Mantener lo que ya tengo', 'No sé todavía'];

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-navy placeholder-slate-400 transition-colors outline-none focus:border-turquesa focus:ring-2 focus:ring-turquesa/20';
const labelClass = 'block text-sm font-semibold text-navy';

/** Sin backend: arma el mensaje y lo abre en WhatsApp, que es donde atendemos. */
export function Contact() {
  const [name, setName] = useState('');
  const [need, setNeed] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const text = [
    `Hola Ampersand, soy ${name.trim() || '[tu nombre]'}.`,
    need ? `Necesito: ${need.toLowerCase()}.` : null,
    message.trim() || null,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <section id="contacto" className="bg-[#f5f7fa] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="text-4xl leading-[1.05] font-bold tracking-tight text-navy text-balance sm:text-5xl">
            Contanos qué te está haciendo perder tiempo.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-[17px]">
            Te respondemos por WhatsApp con una idea concreta y, si tiene sentido, con una prueba para que la veas en tu
            celular. Sin compromiso.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={whatsappUrl(contact.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-[border-color,box-shadow] duration-300 hover:border-turquesa/40 hover:shadow-[0_16px_32px_-20px_rgba(0,23,72,0.3)]"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Lo más rápido</span>
                  <span className="block font-semibold text-navy">Escribinos por WhatsApp</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-turquesa" />
            </a>

            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-[border-color,box-shadow] duration-300 hover:border-turquesa/40 hover:shadow-[0_16px_32px_-20px_rgba(0,23,72,0.3)]"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-turquesa-light text-turquesa-dark">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Lo que vamos haciendo</span>
                  <span className="block font-semibold text-navy">@{contact.instagram}</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-turquesa" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-turquesa" /> Respondemos en menos de 24 hs hábiles
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-turquesa" /> {contact.location}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappUrl(text), '_blank', 'noopener');
            }}
            className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_32px_64px_-32px_rgba(0,23,72,0.25)] sm:p-10"
          >
            <label className={labelClass}>
              Tu nombre
              <input
                name="name"
                autoComplete="name"
                placeholder="Por ejemplo, Marcela"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </label>

            <fieldset>
              <legend className={labelClass}>Qué necesitás</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {needs.map((option) => {
                  const selected = need === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setNeed(selected ? null : option)}
                      className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-[background-color,border-color,color] duration-200 ${
                        selected
                          ? 'border-navy bg-navy text-white'
                          : 'border-slate-200 text-slate-600 hover:border-navy/40 hover:text-navy'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className={labelClass}>
              Contanos de tu negocio
              <textarea
                name="message"
                rows={4}
                placeholder="Qué vendés, cómo te llegan hoy los pedidos o las consultas, y qué te gustaría que cambie…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </label>

            <div className="rounded-xl bg-[#ece5dd] p-4 text-sm leading-relaxed text-slate-800">
              <p className="mb-1 text-xs font-semibold text-slate-500">Así va a salir el mensaje</p>
              <p className="whitespace-pre-wrap">{text}</p>
            </div>

            <button
              type="submit"
              className="group flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-navy text-base font-semibold text-white shadow-md transition-[background-color,box-shadow,scale] duration-200 hover:bg-navy-light hover:shadow-lg active:scale-[0.98]"
            >
              Abrir en WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-center text-sm text-slate-500">
              El mensaje se arma en tu teléfono. No guardamos nada de lo que escribís acá.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
