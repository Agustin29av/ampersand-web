import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, CodeXml, PenTool, Rocket, Search, type LucideIcon } from 'lucide-react';
import { Reveal } from '../../components/ui/Reveal';
import { Accent, Eyebrow } from '../../components/ui/SectionHeading';
import { processSteps } from '../../data/site';
import type { ProcessStep } from '../../types';

const icons: LucideIcon[] = [Search, PenTool, CodeXml, Rocket];

function Step({ step, index, progress }: { step: ProcessStep; index: number; progress: MotionValue<number> }) {
  const Icon = icons[index];
  // Cada paso se "enciende" cuando la línea de progreso lo alcanza.
  const start = index / processSteps.length;
  const active = useTransform(progress, [start, start + 0.08], [0, 1]);
  const borderColor = useTransform(active, [0, 1], ['rgba(255,255,255,0.12)', 'rgba(2,194,181,0.7)']);
  const color = useTransform(active, [0, 1], ['#64748b', '#02C2B5']);
  const backgroundColor = useTransform(active, [0, 1], ['rgba(0,17,51,1)', 'rgba(2,62,86,1)']);

  return (
    <Reveal className="relative pb-14 pl-20 last:pb-0 sm:pl-24">
      <motion.span
        style={{ borderColor, color, backgroundColor }}
        className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border sm:h-14 sm:w-14"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </motion.span>
      <span className="text-xs font-bold tracking-widest text-turquesa">PASO {step.number}</span>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{step.title}</h3>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">{step.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {step.deliverables.map((d) => (
          <li key={d} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {d}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Process() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="proceso" className="relative overflow-clip bg-[#001133] py-24 sm:py-32">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>Nuestro proceso</Eyebrow>
            <h2 className="mt-5 text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Un proceso claro, <Accent>sin sorpresas.</Accent>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 sm:text-[17px]">
              Trabajamos por etapas cortas y visibles. Sabés en todo momento qué estamos haciendo, por qué y cuándo lo
              vas a ver funcionando.
            </p>
            <a
              href="#contacto"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-turquesa px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-turquesa-dark hover:shadow-lg hover:shadow-turquesa/25"
            >
              Empecemos por el paso 01
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div ref={stepsRef} className="relative">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-white/10 sm:left-7" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute top-2 bottom-2 left-6 w-px origin-top bg-turquesa sm:left-7"
          />
          {processSteps.map((step, i) => (
            <Step key={step.number} step={step} index={i} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
