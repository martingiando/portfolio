export interface StackCategory {
  id: string;
  name: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    id: "01",
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    id: "02",
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "SCSS", "Angular", "Vue", "Astro"],
  },
  {
    id: "03",
    name: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django"],
  },
  {
    id: "04",
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    id: "05",
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "Terraform", "CI/CD"],
  },
  {
    id: "06",
    name: "Tools",
    items: ["Git", "VS Code", "Figma", "Claude Code"],
  },
];
