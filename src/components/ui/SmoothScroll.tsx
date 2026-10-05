import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { prefersReducedMotion } from '../../lib/motion';

/** Scroll suave en toda la página (desactivado si el usuario prefiere menos movimiento). */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -84 } });
    return () => lenis.destroy();
  }, []);

  return null;
}
