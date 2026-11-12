import { useEffect, useRef } from 'react';

const TEAL = [0x02 / 255, 0xc2 / 255, 0xb5 / 255];
const BLUE = [0x02 / 255, 0x6b / 255, 0xf3 / 255];

/**
 * La «&» de la marca hecha con partículas en 3D: se arma al cargar y se aparta del mouse.
 * Three.js se carga aparte para no frenar la primera pantalla; sin WebGL no se muestra nada.
 */
export function AmpersandField({ className = '' }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    const hasWebGL = (() => {
      try {
        const c = document.createElement('canvas');
        return !!(c.getContext('webgl2') || c.getContext('webgl'));
      } catch {
        return false;
      }
    })();
    if (!hasWebGL) return;

    Promise.all([import('../../lib/three-lite'), document.fonts?.ready ?? Promise.resolve()]).then(([THREE]) => {
      if (disposed) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const small = window.innerWidth < 768;

      // Muestrear la «&» dibujada en un canvas 2D: cada píxel lleno es una partícula.
      const S = 240;
      const cv = document.createElement('canvas');
      cv.width = cv.height = S;
      const g = cv.getContext('2d');
      if (!g) return;
      g.fillStyle = '#fff';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.font = `700 ${Math.round(S * 0.95)}px "Familjen Grotesk", Georgia, serif`;
      g.fillText('&', S / 2, S * 0.55);
      const px = g.getImageData(0, 0, S, S).data;
      const step = small ? 3 : 2;
      const xy: number[] = [];
      for (let y = 0; y < S; y += step)
        for (let x = 0; x < S; x += step) if (px[(y * S + x) * 4 + 3] > 128) xy.push(x, y);
      const n = xy.length / 2;

      const home = new Float32Array(n * 3);
      const pos = new Float32Array(n * 3);
      const col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const hx = ((xy[i * 2] - S / 2) / S) * 4.4;
        const hy = (-(xy[i * 2 + 1] - S / 2) / S) * 4.4;
        const hz = (Math.random() - 0.5) * 0.45;
        home.set([hx, hy, hz], i * 3);
        // Arranca disperso y se arma: la única animación de entrada del sitio.
        const r = 3 + Math.random() * 3;
        const a = Math.random() * Math.PI * 2;
        const b = Math.acos(2 * Math.random() - 1);
        pos.set(
          reduce ? [hx, hy, hz] : [r * Math.sin(b) * Math.cos(a), r * Math.sin(b) * Math.sin(a), r * Math.cos(b)],
          i * 3,
        );
        const t = Math.min(1, Math.max(0, (hx + 2.2) / 4.4));
        col.set([TEAL[0] + (BLUE[0] - TEAL[0]) * t, TEAL[1] + (BLUE[1] - TEAL[1]) * t, TEAL[2] + (BLUE[2] - TEAL[2]) * t], i * 3);
      }

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      el.appendChild(renderer.domElement);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';

      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      cam.position.set(0, 0, 8.2);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: small ? 0.06 : 0.042,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const size = () => {
        const w = el.clientWidth || 600;
        const h = el.clientHeight || 400;
        renderer.setSize(w, h, false);
        cam.aspect = w / h;
        cam.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(el);

      // El mouse, llevado al plano z = 0 de la escena.
      const mouse = new THREE.Vector3(99, 99, 0);
      let tx = 0;
      let ty = 0;
      let sx = 0;
      let sy = 0;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const ny = -((e.clientY - r.top) / r.height) * 2 + 1;
        tx = nx;
        ty = ny;
        const v = new THREE.Vector3(nx, ny, 0.5).unproject(cam).sub(cam.position).normalize();
        mouse.copy(cam.position).add(v.multiplyScalar(-cam.position.z / v.z));
      };
      const onLeave = () => mouse.set(99, 99, 0);
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);

      let raf = 0;
      let running = true;
      const t0 = performance.now();
      const frame = (now: number) => {
        const s = (now - t0) / 1000;
        sx += (tx - sx) * 0.05;
        sy += (ty - sy) * 0.05;
        const R = 0.9;
        for (let i = 0; i < n; i++) {
          const k = i * 3;
          let gx = home[k];
          let gy = home[k + 1];
          const dx = pos[k] - mouse.x;
          const dy = pos[k + 1] - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < R && d > 0.0001) {
            const f = ((R - d) / R) * 0.7;
            gx += (dx / d) * f;
            gy += (dy / d) * f;
          }
          pos[k] += (gx - pos[k]) * 0.07;
          pos[k + 1] += (gy - pos[k + 1]) * 0.07;
          pos[k + 2] += (home[k + 2] - pos[k + 2]) * 0.07;
        }
        geo.attributes.position.needsUpdate = true;
        points.rotation.y = Math.sin(s * 0.35) * 0.22 + sx * 0.25;
        points.rotation.x = sy * -0.12;
        renderer.render(scene, cam);
      };
      const loop = (now: number) => {
        if (!running || disposed) return;
        frame(now);
        raf = requestAnimationFrame(loop);
      };

      let io: IntersectionObserver | null = null;
      if (reduce) {
        frame(performance.now());
      } else {
        io = new IntersectionObserver(([entry]) => {
          const was = running;
          running = entry.isIntersecting;
          if (running && !was) raf = requestAnimationFrame(loop);
        });
        io.observe(el);
        raf = requestAnimationFrame(loop);
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        io?.disconnect();
        ro.disconnect();
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className={className} aria-hidden="true" />;
}
