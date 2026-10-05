import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: 'light' | 'dark';
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-turquesa uppercase">
      <span className="h-px w-6 bg-turquesa" />
      {children}
    </span>
  );
}

/** Frase destacada del título: turquesa e itálica, igual que en el hero. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-turquesa italic">{children}</span>;
}

export function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <Reveal className="lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className={`mt-5 text-3xl leading-[1.15] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
            dark ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <p className={`text-base leading-relaxed sm:text-[17px] ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
