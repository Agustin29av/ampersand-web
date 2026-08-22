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
          <div className="w-11 h-8 rounded-lg border-2 border-turquesa flex items-center justify-center font-mono font-bold text-turquesa text-xs tracking-tighter">
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
    <section id="servicios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight section-underline">
            ¿QUÉ HACEMOS?
          </h2>
        </div>

        {/* Services Grid — 4 columns desktop with tighter gap and soft card shadows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(2,194,181,0.12)] border border-slate-100/90 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Title — Two Lines */}
                <h3 className="text-xs sm:text-sm font-extrabold leading-tight tracking-wide">
                  <span className="block text-navy">{service.titleLine1}</span>
                  <span className="block text-turquesa">{service.titleLine2}</span>
                </h3>

                {/* Short Turquesa Accent Bar under Title */}
                <div className="w-7 h-0.5 bg-turquesa mx-auto mt-2 mb-3 rounded-full" />

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto font-normal">
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
