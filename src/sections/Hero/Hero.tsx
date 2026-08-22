import React from 'react';
import { ArrowRight, Code2, Target, Sliders, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-12 lg:pt-18 lg:pb-16 overflow-hidden bg-white">
      {/* 2-column flex container: Left side aligned with container, Right side 100% full-bleed to screen edge */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">

        {/* Left Column: Aligned with page container padding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-[48%] xl:w-[45%] pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-4 lg:pr-6 space-y-6 text-left shrink-0 z-20 py-4 lg:py-6"
        >
          {/* Headline — 3 Clean Balanced Lines */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-extrabold text-navy tracking-tight leading-[1.18]">
            <span className="block sm:whitespace-nowrap">Transformamos ideas en</span>
            <span className="block sm:whitespace-nowrap">soluciones tecnológicas</span>
            <span className="block">
              que <span className="text-turquesa">impulsan tu negocio.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Desarrollamos productos digitales robustos, escalables y fáciles de usar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a href="#contacto">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Hablemos de tu proyecto
              </Button>
            </a>
            <a href="#proyectos">
              <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Ver proyectos
              </Button>
            </a>
          </div>

          {/* Mini Features Row */}
          <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-turquesa-light text-turquesa flex items-center justify-center shrink-0 mt-0.5 border border-turquesa/20">
                <Sliders className="w-4 h-4 text-turquesa" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-navy">A medida</div>
                <div className="text-[11px] text-gray-500 leading-tight">Soluciones 100% personalizadas</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-turquesa-light text-turquesa flex items-center justify-center shrink-0 mt-0.5 border border-turquesa/20">
                <CheckCircle className="w-4 h-4 text-turquesa" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-navy">Escalables</div>
                <div className="text-[11px] text-gray-500 leading-tight">Pensadas para crecer contigo</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-turquesa-light text-turquesa flex items-center justify-center shrink-0 mt-0.5 border border-turquesa/20">
                <Shield className="w-4 h-4 text-turquesa" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-navy">Confiables</div>
                <div className="text-[11px] text-gray-500 leading-tight">Tecnologías modernas y seguras</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 100% Full-Bleed & Attached Higher to Header */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="w-full lg:w-[52%] xl:w-[55%] relative select-none flex items-center justify-end -mt-10 lg:-mt-16 xl:-mt-22 pr-0"
        >
          <div className="relative w-full flex justify-end items-center">

            {/* Full-bleed Composition Image touching the right screen border */}
            <img
              src="/hero-composition.jpg"
              alt="Ampersand Development Workstation"
              className="w-full h-auto object-contain object-right pointer-events-none select-none"
            />

            {/* Floating Card 1 — Top Left of the Graphic ("Código limpio") */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[5%] sm:top-[7%] left-[12%] sm:left-[18%] lg:left-[22%] bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-3.5 z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-turquesa-light flex items-center justify-center shrink-0 border border-turquesa/20">
                <Code2 className="w-5 h-5 text-turquesa" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-navy leading-tight">Código limpio</div>
                <div className="text-[10px] text-gray-500 font-medium">Buenas prácticas en cada línea</div>
              </div>
            </motion.div>

            {/* Floating Card 2 — Bottom Right ("Enfoque en resultado") */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute bottom-[2%] sm:bottom-[4%] right-2 sm:right-6 lg:right-8 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-3.5 z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-turquesa-light flex items-center justify-center shrink-0 border border-turquesa/20">
                <Target className="w-5 h-5 text-turquesa" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-navy leading-tight">Enfoque en resultado</div>
                <div className="text-[11px] text-gray-500 font-medium">Tu objetivo, nuestro compromiso</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
