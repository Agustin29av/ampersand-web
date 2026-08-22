import React from 'react';
import { Search, Pencil, CodeXml, Rocket, ArrowRight } from 'lucide-react';
import type { ProcessStep } from '../../types';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'ENTENDEMOS',
      description: 'Escuchamos tu idea y analizamos tus necesidades.',
      iconName: 'Search'
    },
    {
      number: '02',
      title: 'DISEÑAMOS',
      description: 'Planificamos la solución a medida con foco en usabilidad y calidad.',
      iconName: 'Pencil'
    },
    {
      number: '03',
      title: 'DESARROLLAMOS',
      description: 'Construimos con buenas prácticas, tecnología y comunicación constante.',
      iconName: 'CodeXml'
    },
    {
      number: '04',
      title: 'ENTREGAMOS',
      description: 'Lanzamos, acompañamos y mejoramos de forma continua.',
      iconName: 'Rocket'
    }
  ];

  const getStepIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-turquesa stroke-[1.75]";
    switch (iconName) {
      case 'Search': return <Search className={cls} />;
      case 'Pencil': return <Pencil className={cls} />;
      case 'CodeXml': return <CodeXml className={cls} />;
      case 'Rocket': return <Rocket className={cls} />;
      default: return <Search className={cls} />;
    }
  };

  return (
    <section id="proceso" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container with delicate light mint/turquesa background */}
        <div className="bg-[#edf8f6] rounded-[2.5rem] px-6 sm:px-12 py-14 border border-turquesa/10">

          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight section-underline">
              NUESTRO PROCESO
            </h2>
          </div>

          {/* Steps Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative text-center">

                {/* White Elevated Circle */}
                <div className="w-16 h-16 rounded-full bg-white shadow-md shadow-slate-200/70 flex items-center justify-center mx-auto mb-4 border border-white">
                  {getStepIcon(step.iconName)}
                </div>

                {/* Dashed Arrow Connector — between steps on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+45px)] w-[calc(100%-90px)]">
                    <div className="flex items-center w-full">
                      <div className="flex-1 border-t-2 border-dashed border-turquesa/40" />
                      <ArrowRight className="w-4 h-4 text-turquesa/60 -ml-1" />
                    </div>
                  </div>
                )}

                {/* Number */}
                <div className="text-turquesa font-extrabold text-xs sm:text-sm mb-1 tracking-wide">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-extrabold text-navy mb-2 tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-[185px] mx-auto font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
