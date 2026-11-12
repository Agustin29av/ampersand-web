import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: ReactNode;
  description?: ReactNode;
  tone?: 'light' | 'dark';
}

/** Título de sección con una bajada opcional a la derecha. */
export function SectionHeading({ title, description, tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <h2
          className={`text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
            dark ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <div className="lg:col-span-4 lg:col-start-9">
          <p className={`text-base leading-relaxed sm:text-[17px] ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
