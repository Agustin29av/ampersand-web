import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { contact, projects, whatsappUrl } from '../../data/site';
import { easeOut } from '../../lib/motion';

const featured = projects[0];

/** Portada: una frase sobre lo que hacemos y el producto real al lado. Única animación de entrada del sitio. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfd] pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="lg:col-span-6"
        >
          <p className="text-base font-medium text-turquesa-dark">Software para negocios de Entre Ríos</p>
          <h1 className="mt-4 max-w-[13ch] text-4xl leading-[1.05] font-bold tracking-tight text-navy text-balance sm:text-5xl lg:text-[3.6rem]">
            Hacemos la página y el sistema que tu negocio usa todos los días.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Somos {contact.team}. Estamos en {contact.location}, y el que te escucha es el mismo que lo construye.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={whatsappUrl(contact.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-navy px-7 text-base font-semibold text-white shadow-md transition-[background-color,box-shadow,scale] duration-200 hover:bg-navy-light hover:shadow-lg active:scale-[0.98]"
            >
              Escribinos por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#proyectos" className="group inline-flex items-center gap-2 text-base font-semibold text-navy">
              <span className="relative">
                Ver lo que hicimos
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-turquesa" strokeWidth={2.5} />
              Respondemos en menos de 24 hs hábiles
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-turquesa" strokeWidth={2.5} />
              Primero lo ves, después decidís
            </li>
          </ul>
        </motion.div>

        <motion.a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.12 }}
          className="group relative block lg:col-span-6"
          aria-label={`Ver ${featured.title}`}
        >
          {/* Marco de navegador con una captura real del producto, no una ilustración. */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_32px_64px_-32px_rgba(0,23,72,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="ml-3 truncate rounded-md bg-white px-2.5 py-0.5 text-xs text-slate-500 ring-1 ring-slate-200">
                tuautogestion.com
              </span>
            </div>
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width={1440}
              height={900}
              fetchPriority="high"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            <span className="font-semibold text-navy">{featured.title}</span>, nuestro producto para agencias de autos.
            Hoy en producción.
          </p>
        </motion.a>
      </div>
    </section>
  );
}
