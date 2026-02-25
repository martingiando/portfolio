export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  href?: string;
  tags?: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
