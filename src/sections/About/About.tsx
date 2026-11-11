import { CalendarCheck, Eye, Handshake, Users, type LucideIcon } from 'lucide-react';
import { contact, pillars } from '../../data/site';
import type { Pillar } from '../../types';

const icons: Record<Pillar['icon'], LucideIcon> = {
  users: Users,
  eye: Eye,
  calendar: CalendarCheck,
  handshake: Handshake,
};

export function About() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="max-w-4xl text-3xl leading-[1.2] font-bold tracking-tight text-navy text-balance sm:text-4xl lg:text-5xl">
          Somos {contact.team}, tres de {contact.location.split(',')[0]}. Hacemos software para negocios de la zona,
          y el que te lo vende es el que lo programa.
        </p>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <div key={pillar.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-turquesa-light text-turquesa-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{pillar.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
