import type { ReactNode } from 'react';
import { Reveal } from '../../components/ui/Reveal';
import { Accent, SectionHeading } from '../../components/ui/SectionHeading';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { services } from '../../data/site';
import type { Service } from '../../types';
import { CloudVisual, CodeVisual, FlowVisual, PhoneVisual } from './ServiceVisuals';

const visuals: Record<Service['id'], ReactNode> = {
  web: <CodeVisual />,
  mobile: <PhoneVisual />,
  cloud: <CloudVisual />,
  automation: <FlowVisual />,
};

// Ubicación de cada tarjeta en la grilla bento (escritorio).
const placement: Record<Service['id'], string> = {
  web: 'lg:col-span-2',
  mobile: 'lg:row-span-2',
  cloud: '',
  automation: '',
};

function ServiceText({ service, index }: { service: Service; index: number }) {
  return (
    <div>
      <span className="text-xs font-bold text-turquesa">0{index + 1}</span>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-navy sm:text-2xl">{service.title}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">{service.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  if (service.id === 'web') {
    return (
      <div className="flex h-full flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-center">
        <div className="md:w-[44%]">
          <ServiceText service={service} index={index} />
        </div>
        <div className="h-64 md:flex-1">{visuals.web}</div>
      </div>
    );
  }
  if (service.id === 'mobile') {
    return (
      <div className="flex h-full flex-col gap-6 p-6 pb-0 sm:p-8 sm:pb-0">
        <ServiceText service={service} index={index} />
        <div className="mt-auto h-72 lg:h-[24rem]">{visuals.mobile}</div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
      <div className="h-36">{visuals[service.id]}</div>
      <ServiceText service={service} index={index} />
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="¿Qué hacemos?"
          title={
            <>
              Todo lo que tu negocio necesita, <Accent>en un solo equipo.</Accent>
            </>
          }
          description="Diseño, desarrollo, infraestructura y automatización con un mismo equipo responsable de punta a punta."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08} className={placement[service.id]}>
              <SpotlightCard>
                <ServiceCard service={service} index={i} />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
