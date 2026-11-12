# Sitio de Ampersand

Página de Ampersand, estudio de software de Concepción del Uruguay (Entre Ríos) que trabaja con negocios de cualquier lugar. Una sola página con lo que hacemos, los proyectos reales y el contacto por WhatsApp.

## Correr en local

```bash
npm install
npm run dev
```

`npm run build` genera `dist/` (TypeScript + Vite). `npm run lint` corre ESLint.

## Dónde se edita cada cosa

- **Textos, servicios, proceso, proyectos y contacto:** `src/data/site.ts`. El número de WhatsApp va en `contact.whatsapp` con código de país, sin `+` ni espacios (por ejemplo `5493442XXXXXX`).
- **Capturas de los proyectos:** `public/proyectos/`. Son capturas reales de cada producto o demo; si cambia el producto, reemplazá la imagen.
- **Secciones:** `src/sections/`. Cada una es un componente; el orden está en `src/App.tsx`.
- **Colores y tipografía:** `src/index.css` (`@theme`). La fuente se carga en `index.html`.

## Decisiones

- No hay formulario con backend: el contacto arma un mensaje y lo abre en WhatsApp, que es donde atendemos.
- No hay animaciones al scrollear ni scroll suave: la página aparece entera y se lee de corrido. La única animación es la entrada de la portada.
- Los proyectos son links reales a cosas que se pueden usar. No se muestran clientes sin su permiso.
