export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}