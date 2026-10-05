export interface Service {
  id: 'web' | 'mobile' | 'cloud' | 'automation';
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
  id: 'gestion' | 'logistica' | 'dashboard';
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: 'users' | 'eye' | 'calendar' | 'handshake';
}
