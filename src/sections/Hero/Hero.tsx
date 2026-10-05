import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureStrip } from './FeatureStrip';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-between pt-20 lg:pt-22 bg-[#fafbfd] overflow-hidden">
      {/* 2-column flex container: Centered Vertically */}
      <div className="w-full flex-grow flex flex-col lg:flex-row items-center justify-between my-auto py-2 lg:py-3">

        {/* Left Column: Aligned with page container padding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-[48%] xl:w-[45%] pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-4 lg:pr-6 space-y-6 text-left shrink-0 z-20 py-2 lg:py-4"
        >
          {/* Headline — 3 Clean Balanced Lines */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-extrabold text-navy tracking-tight leading-[1.18]">
            <span className="sm:block sm:whitespace-nowrap">Transformamos ideas en</span>{' '}
            <span className="sm:block sm:whitespace-nowrap">soluciones tecnológicas</span>{' '}
            <span className="sm:block">
              que <span className="text-turquesa italic">impulsan tu negocio.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Desarrollamos productos digitales robustos, escalables y fáciles de usar.
          </p>

          {/* CTA: una acción principal y un link secundario discreto */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-1">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg"
            >
              Hablemos de tu proyecto
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#proyectos" className="group inline-flex items-center gap-2 text-base font-semibold text-navy">
              <span className="relative">
                Ver proyectos
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Línea de confianza */}
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-turquesa" strokeWidth={2.5} />
              Respuesta en menos de 24 hs
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-turquesa" strokeWidth={2.5} />
              Sin compromiso
            </li>
          </ul>
        </motion.div>

        {/* Right Column: Positioned comfortably below header */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="w-full lg:w-[52%] xl:w-[55%] relative select-none flex items-center justify-end mt-0 lg:-mt-3 xl:-mt-5 pr-0"
        >
          <div className="relative w-full flex justify-end items-center">

            {/* Full-bleed Composition Image touching the right screen border & header */}
            <img
              src="/hero-composition.jpg"
              alt="Ampersand Development Workstation"
              className="w-[110%] max-w-none h-auto object-cover object-right pointer-events-none select-none -mr-[2%] -ml-[5%] [mask-image:linear-gradient(to_bottom,#000_88%,transparent)]"
            />

          </div>
        </motion.div>

      </div>

      {/* Full-width Features Strip + tech marquee, pinned to the bottom of the viewport */}
      <FeatureStrip />
    </section>
  );
};
