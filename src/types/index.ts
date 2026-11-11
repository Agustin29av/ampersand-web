export interface Service {
  id: 'web' | 'sistemas' | 'mantenimiento';
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Project {
  id: 'tuautogestion' | 'gimnasio' | 'inmobiliaria';
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: 'users' | 'eye' | 'calendar' | 'handshake';
}
