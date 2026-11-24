export interface CaseStudy {
  /** Page at /work/[slug] */
  slug: string;
  summary: string;
  highlights: string[];
  testimonialId?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  /** Describes the image; falls back to the title */
  alt?: string;
  /** Plays over the image on hover */
  video?: string;
  href?: string;
  tags?: string[];
  caseStudy?: CaseStudy;
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
