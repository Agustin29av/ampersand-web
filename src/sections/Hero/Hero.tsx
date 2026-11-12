import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { AmpersandField } from '../../components/ui/AmpersandField';
import { contact, siteCheck, whatsappUrl } from '../../data/site';
import { easeOut } from '../../lib/motion';

/** Portada: el gancho, una revisión gratis de la página como primer paso y la «&» en 3D. */
export function Hero() {
  const [url, setUrl] = useState('');

  const ask = url.trim()
    ? `Hola Ampersand, ¿me revisan esta página? ${url.trim()}`
    : 'Hola Ampersand, ¿me revisan la página de mi negocio?';

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-dark pt-28 pb-16 text-white sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative z-10 lg:col-span-6"
        >
          <h1 className="text-[2.6rem] leading-[1.02] font-bold text-balance sm:text-6xl lg:text-[4.2rem]">
            Tu negocio anda. ¿Tu página también?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Revisamos {siteCheck.reviewed} páginas de negocios de Entre Ríos y {siteCheck.broken} directamente no abren.
            Hacemos páginas y sistemas que venden, y nos hacemos cargo de que sigan andando.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappUrl(ask), '_blank', 'noopener');
            }}
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="hero-url">
              Link de tu página
            </label>
            <input
              id="hero-url"
              type="url"
              inputMode="url"
              autoComplete="url"
              spellCheck={false}
              placeholder="Pegá el link de tu página…"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="min-h-13 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-base text-white placeholder-slate-400 outline-none transition-colors focus:border-turquesa focus:bg-white/10"
            />
            <button
              type="submit"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-turquesa px-6 text-base font-semibold text-navy-dark transition-[background-color,scale] duration-200 hover:bg-[#2fd6ca] active:scale-[0.98]"
            >
              Revisala gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <a
            href={whatsappUrl('Hola Ampersand, no tengo página y quiero una para mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
          >
            ¿No tenés página? Escribinos igual
            <ArrowRight className="h-4 w-4" />
          </a>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-turquesa" strokeWidth={2.5} />
              Te respondemos por WhatsApp en menos de 24 hs hábiles
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-turquesa" strokeWidth={2.5} />
              Somos de {contact.location.split(',')[0]}
            </li>
          </ul>
        </motion.div>

        {/* En el celular la «&» queda de fondo, detrás del texto; en escritorio ocupa su columna. */}
        <AmpersandField className="pointer-events-none absolute inset-x-0 top-20 h-[420px] opacity-25 lg:pointer-events-auto lg:relative lg:inset-auto lg:top-auto lg:col-span-6 lg:h-[540px] lg:cursor-crosshair lg:opacity-100" />
      </div>
    </section>
  );
}
