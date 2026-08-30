import React from 'react';
import { Smartphone, Cloud, TrendingUp } from 'lucide-react';
import type { ServiceItem } from '../../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'web',
      titleLine1: 'DESARROLLO',
      titleLine2: 'A MEDIDA',
      description: 'Sistemas y aplicaciones web adaptadas a los procesos de tu negocio.',
      iconName: 'Code'
    },
    {
      id: 'mobile',
      titleLine1: 'APLICACIONES',
      titleLine2: 'MÓVILES',
      description: 'Apps nativas o híbridas pensadas para brindar la mejor experiencia.',
      iconName: 'Smartphone'
    },
    {
      id: 'cloud',
      titleLine1: 'SOLUCIONES',
      titleLine2: 'EN LA NUBE',
      description: 'Infraestructura moderna, escalable y segura en la nube.',
      iconName: 'Cloud'
    },
    {
      id: 'automation',
      titleLine1: 'AUTOMATIZACIÓN',
      titleLine2: 'E INTEGRACIONES',
      description: 'Optimizamos procesos e integramos tus herramientas.',
      iconName: 'TrendingUp'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return (
          <div className="w-11 h-8 rounded-lg border-2 border-turquesa flex items-center justify-center font-mono font-bold text-turquesa text-xs tracking-tighter shadow-sm shadow-turquesa/10">
            {'</>'}
          </div>
        );
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-turquesa stroke-[1.75]" />;
      case 'Cloud':
        return <Cloud className="w-9 h-9 text-turquesa stroke-[1.75]" />;
      case 'TrendingUp':
        return (
          <div className="relative flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-turquesa stroke-[1.75]" />
          </div>
        );
      default:
        return <Smartphone className="w-8 h-8 text-turquesa" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-[#001133] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-turquesa/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight section-underline">
            ¿QUÉ HACEMOS?
          </h2>
          <p className="mt-6 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Diseñamos y construimos soluciones digitales que resuelven problemas reales y generan valor para tu negocio.
          </p>
        </div>

        {/* Services Grid — Slate Gray High-Contrast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#e2e8f0] rounded-3xl p-6 sm:p-7 text-center border border-slate-300/80 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(2,194,181,0.2)] hover:border-turquesa hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md shadow-slate-300/60 border border-slate-200/80 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:border-turquesa transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Title — Two Lines */}
                <h3 className="text-xs sm:text-sm font-extrabold leading-tight tracking-wide">
                  <span className="block text-navy mb-0.5">{service.titleLine1}</span>
                  <span className="block text-turquesa">{service.titleLine2}</span>
                </h3>

                {/* Short Turquesa Accent Bar under Title */}
                <div className="w-8 h-0.5 bg-turquesa mx-auto mt-2.5 mb-3.5 rounded-full group-hover:w-12 transition-all duration-300" />

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed max-w-[210px] mx-auto font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
