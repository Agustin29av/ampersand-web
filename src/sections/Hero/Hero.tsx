import React from 'react';
import { ArrowRight, Sliders, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-1px)] lg:min-h-screen flex flex-col justify-between pt-20 lg:pt-22 bg-white overflow-hidden">
      {/* 2-column flex container: Centered Vertically */}
      <div className="w-full flex-grow flex flex-col lg:flex-row items-center justify-between my-auto py-4 lg:py-6">

        {/* Left Column: Aligned with page container padding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-[48%] xl:w-[45%] pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-4 lg:pr-6 space-y-6 text-left shrink-0 z-20 py-2 lg:py-4"
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
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
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
              className="w-[110%] max-w-none h-auto object-cover object-right pointer-events-none select-none -mr-[2%] -ml-[5%]"
            />

          </div>
        </motion.div>

      </div>

      {/* Full-width Features Divider Strip Pinned Flush to Bottom Viewport Edge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="w-full bg-[#000e2e] border-t border-white/10 border-b border-white/[0.08] relative z-20 mt-auto"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-center">

            <div className="flex items-center justify-start sm:justify-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-turquesa/10 text-turquesa flex items-center justify-center shrink-0 border border-turquesa/20 shadow-sm shadow-turquesa/10">
                <Sliders className="w-4.5 h-4.5 text-turquesa" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white leading-tight">A medida</div>
                <div className="text-xs text-slate-400 leading-tight mt-0.5">Soluciones 100% personalizadas</div>
              </div>
            </div>

            <div className="flex items-center justify-start sm:justify-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-turquesa/10 text-turquesa flex items-center justify-center shrink-0 border border-turquesa/20 shadow-sm shadow-turquesa/10">
                <CheckCircle className="w-4.5 h-4.5 text-turquesa" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white leading-tight">Escalables</div>
                <div className="text-xs text-slate-400 leading-tight mt-0.5">Pensadas para crecer contigo</div>
              </div>
            </div>

            <div className="flex items-center justify-start sm:justify-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-turquesa/10 text-turquesa flex items-center justify-center shrink-0 border border-turquesa/20 shadow-sm shadow-turquesa/10">
                <Shield className="w-4.5 h-4.5 text-turquesa" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white leading-tight">Confiables</div>
                <div className="text-xs text-slate-400 leading-tight mt-0.5">Tecnologías modernas y seguras</div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
