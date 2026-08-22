export interface ServiceItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageBg: string;
}

export interface PillarItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  budget?: string;
  message: string;
}
