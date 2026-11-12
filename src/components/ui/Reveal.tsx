import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Se conserva por compatibilidad; ya no hay animación al scrollear. */
  delay?: number;
}

/** Contenedor simple. Antes animaba al entrar en pantalla; se quitó para que la página no "aparezca" por partes. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
