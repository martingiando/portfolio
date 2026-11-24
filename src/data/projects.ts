import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Iontek Argentina",
    category: "Frontend",
    year: "2026",
    image: "/images/projects/project-01.png",
    href: "https://www.iontek.com.ar/",
    tags: ["React", "Vite", "Tailwind CSS", "Resend"],
  },
  {
    id: "02",
    title: "Purchasing & Stock System",
    category: "Full Stack",
    year: "2025 - 2026",
    image: "/images/projects/project-02.png",
    tags: ["Next.js", "Tailwind CSS", "React Query", "PostgreSQL", "Supabase", "Vitest"],
  },
  {
    id: "03",
    title: "Tower Travel",
    category: "Full Stack",
    year: "2022 - 2025",
    image: "/images/projects/project-03.avif",
    alt: "Tower Travel home page on a laptop and a phone",
    tags: ["Next.js", "React", "Chakra UI", "Zustand", "Jest", "Vitest", "Nest.js", "Express", "PostgreSQL", "AWS"],
    caseStudy: {
      slug: "tower-travel",
      summary: "A travel company's web product, built at The Flock: search, booking and checkout with Next.js, TypeScript and Node.js.",
      highlights: [
        "On the product from day one, as the team grew to 15 people. Guided 3 teammates.",
        "Architected and built high-traffic features, including search, booking, checkout and CRUD management.",
        "Developed Express backend services that handle complex data processing.",
      ],
      testimonialId: "03",
    },
  },
  {
    id: "04",
    title: "Kiwo",
    category: "Full Stack",
    year: "2025",
    image: "/images/projects/project-04.png",
    alt: "Kiwo dashboard with occupancy, arrivals, tasks and activity filters",
    video: "/images/projects/project-04.mp4",
    tags: ["Next.js", "Tailwind CSS", "React Query", "Zustand", "Nest.js", "PostgreSQL", "Redis", "iCal", "Twilio", "Resend"],
    caseStudy: {
      slug: "kiwo",
      summary: "A rental management dashboard, built full stack with Next.js, NestJS and PostgreSQL.",
      highlights: [
        "Built the whole product: Next.js frontend, NestJS backend and PostgreSQL database.",
        "Works with iCal calendars, with Redis on the backend.",
        "Brings occupancy, upcoming arrivals and cleaning tasks into one dashboard, with filters by property, event type and dates.",
      ],
    },
  },
];

export const caseStudies = projects.filter(
  (p): p is Project & { caseStudy: NonNullable<Project["caseStudy"]> } => !!p.caseStudy
);
