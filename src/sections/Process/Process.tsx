import { ArrowRight } from 'lucide-react';
import { contact, processSteps, whatsappUrl } from '../../data/site';
import type { ProcessStep } from '../../types';

function Step({ step }: { step: ProcessStep }) {
  return (
    <li className="relative pb-12 pl-16 last:pb-0 sm:pl-20">
      <span className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full border border-turquesa/60 bg-[#001133] text-lg font-bold text-turquesa tabular-nums sm:h-12 sm:w-12">
        {step.number}
      </span>
      <h3 className="text-2xl font-bold tracking-tight text-white">{step.title}</h3>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">{step.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {step.deliverables.map((d) => (
          <li key={d} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {d}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Process() {
  return (
    <section id="proceso" className="relative overflow-clip bg-[#001133] py-24 sm:py-32">
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-3xl leading-[1.1] font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
            Cómo trabajamos, en cuatro pasos.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 sm:text-[17px]">
            Nada de presupuestos a ciegas. Primero lo ves funcionando con tus datos; después hablamos de plata.
          </p>
          <a
            href={whatsappUrl(contact.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-turquesa px-6 text-sm font-semibold text-[#001133] transition-[background-color,box-shadow] duration-200 hover:bg-[#2fd6ca] hover:shadow-lg hover:shadow-turquesa/25"
          >
            Empezar por el paso 1
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <ol className="relative">
          <div className="absolute top-2 bottom-2 left-[22px] w-px bg-white/10 sm:left-6" aria-hidden="true" />
          {processSteps.map((step) => (
            <Step key={step.number} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
