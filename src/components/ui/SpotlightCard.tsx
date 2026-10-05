import type { MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

function trackPointer(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
}

/** Tarjeta clara que se eleva al pasar el mouse, con un leve resplandor que sigue al cursor. */
export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  return (
    <div
      onMouseMove={trackPointer}
      className={`spotlight group h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 transition-all duration-500 hover:-translate-y-1 hover:border-turquesa/40 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,23,72,0.22)] ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
