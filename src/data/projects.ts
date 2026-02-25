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
    title: "Iontek Private System",
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
    tags: ["Next.js", "React", "Chakra UI", "Zustand", "Vitest", "Nest.js", "Express", "PostgreSQL", "AWS"],
  },
  {
    id: "04",
    title: "Kiwo",
    category: "Full Stack",
    year: "2025",
    image: "/images/projects/project-04.gif",
    tags: ["Next.js", "Tailwind CSS", "React Query", "Zustand", "Nest.js", "PostgreSQL", "Redis", "iCal", "Twilio", "Resend"],
  },
];
