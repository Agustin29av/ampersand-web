import React from 'react';
import { Users, ShieldCheck, Zap, Heart } from 'lucide-react';
import type { PillarItem } from '../../types';

export const About: React.FC = () => {
  const pillars: PillarItem[] = [
    {
      title: 'ATENCIÓN PERSONALIZADA',
      description: 'Nos involucramos en tu proyecto como si fuera nuestro.',
      iconName: 'Users'
    },
    {
      title: 'SOLUCIONES ESCALABLES',
      description: 'Desarrollamos pensando en el crecimiento de tu negocio.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'TECNOLOGÍAS MODERNAS',
      description: 'Usamos las mejores herramientas del mercado.',
      iconName: 'Zap'
    },
    {
      title: 'COMPROMISO Y CUMPLIMIENTO',
      description: 'Entregamos resultados de calidad en tiempo y forma.',
      iconName: 'Heart'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-10 h-10 text-turquesa stroke-[1.6]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-10 h-10 text-turquesa stroke-[1.6]" />;
      case 'Zap':
        return (
          <div className="w-10 h-10 rounded-full border-2 border-turquesa flex items-center justify-center text-turquesa">
            <Zap className="w-5 h-5 fill-none stroke-[2]" />
          </div>
        );
      case 'Heart':
        return <Heart className="w-10 h-10 text-turquesa stroke-[1.6]" />;
      default:
        return <Users className="w-10 h-10 text-turquesa" />;
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight section-underline">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
        </div>

        {/* 4 Columns with delicate vertical divider lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center px-4 sm:px-6 py-2 lg:border-r border-gray-200/90 lg:last:border-r-0 flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="h-12 flex items-center justify-center mb-5">
                {renderIcon(pillar.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-[13px] font-extrabold text-navy tracking-wide mb-2.5 uppercase">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-[210px] mx-auto font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
