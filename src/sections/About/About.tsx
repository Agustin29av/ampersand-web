import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { CalendarCheck, Eye, Handshake, Users, type LucideIcon } from 'lucide-react';
import { Reveal } from '../../components/ui/Reveal';
import { Eyebrow } from '../../components/ui/SectionHeading';
import { pillars } from '../../data/site';
import type { Pillar } from '../../types';

const statement =
  'Nos involucramos en cada proyecto como si fuera nuestro. Escuchamos, diseñamos y construimos software que resuelve problemas reales, y lo acompañamos mientras tu negocio crece.';
const accentWords = new Set(['nuestro.', 'problemas', 'reales,']);

const icons: Record<Pillar['icon'], LucideIcon> = {
  users: Users,
  eye: Eye,
  calendar: CalendarCheck,
  handshake: Handshake,
};

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className={accentWords.has(word) ? 'text-turquesa italic' : undefined}>
      {word}{' '}
    </motion.span>
  );
}

export function About() {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: statementRef, offset: ['start 85%', 'end 50%'] });
  const words = statement.split(' ');

  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>¿Por qué elegirnos?</Eyebrow>
        </Reveal>

        <p
          ref={statementRef}
          className="mt-8 max-w-5xl text-3xl leading-[1.25] font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl lg:leading-[1.2]"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              range={[i / words.length, (i + 1) / words.length]}
              progress={scrollYProgress}
            />
          ))}
        </p>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-turquesa/40 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,23,72,0.22)]">
                  <span className="absolute top-0 left-0 h-[3px] w-0 bg-turquesa transition-all duration-500 group-hover:w-full" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turquesa/10 text-turquesa transition-colors duration-500 group-hover:bg-turquesa group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
