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
    const cls = "w-6 h-6 text-turquesa stroke-[1.75]";
    switch (iconName) {
      case 'Users': return <Users className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      case 'Heart': return <Heart className={cls} />;
      default: return <Users className={cls} />;
    }
  };

  return (
    <section id="nosotros" className="py-24 bg-[#001133] relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquesa/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight section-underline">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center px-5 py-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-turquesa/20 transition-all duration-300 group"
            >
              {/* Icon Container — consistent glass circle */}
              <div className="w-14 h-14 rounded-2xl bg-turquesa/10 border border-turquesa/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 group-hover:bg-turquesa/15 transition-all duration-300">
                {renderIcon(pillar.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-[13px] font-extrabold text-white tracking-wide mb-3 uppercase">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed max-w-[210px] mx-auto font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
