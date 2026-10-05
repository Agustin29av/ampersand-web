import type { Pillar, ProcessStep, Project, Service } from '../types';

// Datos de contacto: editá acá y se actualiza en todo el sitio.
export const contact = {
  email: 'hola@ampersand.dev',
  phoneDisplay: '+54 9 11 1234 5678',
  whatsapp: '5491112345678',
  location: 'Buenos Aires, Argentina',
};

export const services: Service[] = [
  {
    id: 'web',
    title: 'Desarrollo a medida',
    description:
      'Sistemas y aplicaciones web adaptados a los procesos reales de tu negocio. Sin plantillas, sin atajos.',
    tags: ['Web apps', 'Sistemas de gestión', 'APIs'],
  },
  {
    id: 'mobile',
    title: 'Aplicaciones móviles',
    description: 'Apps nativas o híbridas para iOS y Android, pensadas para brindar la mejor experiencia.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    id: 'cloud',
    title: 'Soluciones en la nube',
    description: 'Infraestructura moderna, escalable y segura, lista para crecer con tu operación.',
    tags: ['Arquitectura', 'DevOps', 'Seguridad'],
  },
  {
    id: 'automation',
    title: 'Automatización e integraciones',
    description: 'Optimizamos procesos repetitivos y conectamos las herramientas que ya usás.',
    tags: ['Workflows', 'Integraciones', 'Bots'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendemos',
    description: 'Escuchamos tu idea, analizamos tus necesidades y definimos juntos qué problema vamos a resolver.',
    deliverables: ['Reunión inicial', 'Relevamiento', 'Alcance'],
  },
  {
    number: '02',
    title: 'Diseñamos',
    description: 'Planificamos la solución a medida con foco en la usabilidad, la calidad y la arquitectura.',
    deliverables: ['UX / UI', 'Prototipo', 'Arquitectura'],
  },
  {
    number: '03',
    title: 'Desarrollamos',
    description: 'Construimos con buenas prácticas, tecnología moderna y comunicación constante en cada etapa.',
    deliverables: ['Sprints', 'Demos', 'Control de calidad'],
  },
  {
    number: '04',
    title: 'Entregamos',
    description: 'Lanzamos, acompañamos y mejoramos el producto de forma continua.',
    deliverables: ['Puesta en marcha', 'Soporte', 'Mejora continua'],
  },
];

export const projects: Project[] = [
  {
    id: 'gestion',
    title: 'Plataforma de gestión',
    category: 'Plataforma web',
    description:
      'Sistema integral para la gestión de usuarios, ventas y reportes en tiempo real, centralizado en un solo lugar.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'logistica',
    title: 'App de logística',
    category: 'Aplicación móvil',
    description: 'Seguimiento en tiempo real, notificaciones push y geolocalización avanzada.',
    tags: ['React Native', 'Mapas', 'Notificaciones'],
  },
  {
    id: 'dashboard',
    title: 'Dashboard analítico',
    category: 'Dashboard web',
    description: 'Visualización de datos en tiempo real para la toma de decisiones estratégicas.',
    tags: ['Datos', 'APIs', 'Cloud'],
  },
];

export const pillars: Pillar[] = [
  {
    title: 'Trato directo',
    description: 'Hablás siempre con quien construye tu proyecto. Sin intermediarios ni respuestas automáticas.',
    icon: 'users',
  },
  {
    title: 'Transparencia total',
    description: 'Avances visibles, demos periódicas y comunicación clara en cada etapa del desarrollo.',
    icon: 'eye',
  },
  {
    title: 'En tiempo y forma',
    description: 'Planificamos con realismo y cumplimos lo acordado. Tu negocio no puede esperar.',
    icon: 'calendar',
  },
  {
    title: 'Acompañamiento real',
    description: 'No desaparecemos después del lanzamiento: damos soporte y seguimos mejorando el producto.',
    icon: 'handshake',
  },
];
