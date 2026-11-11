import type { Pillar, ProcessStep, Project, Service } from '../types';

// Datos de contacto: editá acá y se actualiza en todo el sitio.
// whatsapp: código de país + número, sin + ni espacios (549 + código de área + número).
export const contact = {
  whatsapp: '549XXXXXXXXXX',
  whatsappGreeting: 'Hola Ampersand, quiero consultar por una página o un sistema para mi negocio.',
  instagram: 'ampersand.development',
  instagramUrl: 'https://www.instagram.com/ampersand.development/',
  location: 'Concepción del Uruguay, Entre Ríos',
  team: 'Oscar, Agus y Eric',
};

export const whatsappUrl = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const services: Service[] = [
  {
    id: 'web',
    title: 'Páginas que venden',
    description:
      'Una página para tu negocio, pensada para el celular: la carta con pedidos, los turnos, el catálogo o las reservas. El cliente elige y a vos te llega el mensaje armado por WhatsApp.',
    tags: ['Carta y pedidos', 'Turnos', 'Catálogo'],
  },
  {
    id: 'sistemas',
    title: 'Sistemas de gestión a medida',
    description:
      'Un panel para lo de todos los días: clientes, consultas, stock, ventas, cobros y cuotas. Lo que hoy vive en planillas, cuadernos y chats de WhatsApp.',
    tags: ['Clientes y consultas', 'Stock y ventas', 'Cobros y cuotas'],
  },
  {
    id: 'mantenimiento',
    title: 'Y lo del lunes',
    description:
      'Hacer la página es la parte fácil. Que el dominio no venza, que no se caiga, que los cambios se hagan y que alguien responda cuando algo falla: de eso nos hacemos cargo.',
    tags: ['Dominio y hosting', 'Cambios', 'Soporte'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Nos juntamos',
    description: 'Por llamada o en tu local. Vemos cómo trabajás hoy y qué te hace perder tiempo o clientes.',
    deliverables: ['Charla de 30 minutos', 'Sin compromiso'],
  },
  {
    number: '2',
    title: 'Te mostramos una prueba',
    description:
      'Antes de cerrar nada armamos una versión de prueba con tus fotos y tus datos, para que la veas en tu celular.',
    deliverables: ['Prueba real', 'Precio cerrado'],
  },
  {
    number: '3',
    title: 'Lo construimos',
    description: 'Avanzamos por partes y las vas viendo. Hablás siempre con la misma persona.',
    deliverables: ['Avances visibles', 'Una sola persona de contacto'],
  },
  {
    number: '4',
    title: 'Queda andando',
    description: 'Lo publicamos en un dominio tuyo, con los accesos a tu nombre, y lo seguimos cuidando.',
    deliverables: ['Dominio tuyo', 'Accesos tuyos', 'Soporte'],
  },
];

export const projects: Project[] = [
  {
    id: 'tuautogestion',
    title: 'TuAutoGestión',
    category: 'Producto propio, en producción',
    description:
      'Sistema para agencias de autos: cargás el auto una vez y aparece en tu vitrina online con botón de WhatsApp. Las consultas quedan registradas, y las ventas, las cuotas, los recibos y las comisiones también.',
    tags: ['Agencias de autos', 'Vitrina online', 'Cuotas y recibos'],
    href: 'https://tuautogestion.com/',
    image: '/proyectos/tuautogestion.jpg',
    imageAlt: 'Página de TuAutoGestión con el panel de gerencia y la vitrina en un celular',
  },
  {
    id: 'gimnasio',
    title: 'Panel para gimnasios',
    category: 'Demo para probar',
    description:
      'Socios activos, ingresos del día, cuotas vencidas, clases con cupos, profesores y fichas médicas. Y una terminal en la entrada donde el socio pone el DNI y el sistema le dice si entra y cuántas clases le quedan.',
    tags: ['Socios y cuotas', 'Clases y cupos', 'Terminal con DNI'],
    href: 'https://sistema-de-gestion-gimnasio-rose.vercel.app/',
    image: '/proyectos/gimnasio.jpg',
    imageAlt: 'Panel del gimnasio con socios activos, ingresos de hoy y cuotas vencidas',
  },
  {
    id: 'inmobiliaria',
    title: 'Panel inmobiliario',
    category: 'Demo para probar',
    description:
      'Para el que busca, el catálogo con mapa y buscador. Para la inmobiliaria, el panel: cada consulta con su seguimiento, las visitas, el embudo de ventas y los alquileres con cobros, depósitos y honorarios.',
    tags: ['Catálogo con mapa', 'Consultas y visitas', 'Alquileres y cobros'],
    href: 'https://dashboard-inmobiliario-hazel.vercel.app/',
    image: '/proyectos/inmobiliaria.jpg',
    imageAlt: 'Panel inmobiliario con el resumen del mes y el inmueble destacado',
  },
];

export const pillars: Pillar[] = [
  {
    title: 'Hablás con quien lo hace',
    description: 'Somos tres. El que te escucha es el mismo que programa y el mismo que te atiende después.',
    icon: 'users',
  },
  {
    title: 'Lo ves antes de pagar',
    description: 'Armamos una prueba con tus datos y te la mandamos al celular. Decidís viendo, no imaginando.',
    icon: 'eye',
  },
  {
    title: 'Es tuyo',
    description: 'El dominio, los accesos y el código quedan a tu nombre. Si un día querés cambiar de proveedor, podés.',
    icon: 'handshake',
  },
  {
    title: 'Somos de acá',
    description: 'Estamos en Concepción del Uruguay. Si hace falta, pasamos por tu local.',
    icon: 'calendar',
  },
];
