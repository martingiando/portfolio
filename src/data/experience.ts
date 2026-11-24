import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "01",
    company: "Freelance",
    title: "Independent Full Stack Developer",
    period: "2025 — Present",
    description:
      "Currently working on a freelance project. Also built Kiwo, a rental management dashboard, full stack.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    current: true,
  },
  {
    id: "02",
    company: "The Flock",
    title: "Software Development Engineer (Sr)",
    period: "Aug 2022 — Mar 2026",
    description:
      "Worked on a leading travel company's web product from day one as the team grew to 15 people, and guided 3 teammates. Architected and built high-traffic features including search, booking, checkout and CRUD management with Next.js, TypeScript and Node.js. Developed Express backend services that handle complex data processing. Tested features with Jest and React Testing Library in an Agile/Scrum team.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "Nest.js", "TailwindCSS", "SCSS", "Chakra-ui", "React Query", "Zustand", "React-hook-form"],
    current: false,
  },
  {
    id: "03",
    company: "Hack Academy",
    title: "Frontend Mentor (evening classes)",
    period: "Mar 2022 — Mar 2023",
    description:
      "Mentored developers in modern technical standards, specifically focusing on Clean Code, Eslint/Prettier configurations, and Semantic HTML.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    current: false,
  },
  {
    id: "04",
    company: "Mudafy Argentina",
    title: "Software Engineer",
    period: "Dec 2021 — Mar 2022",
    description:
      "Worked as a Software Engineer contributing to the development of an administrative web platform. Collaboration with the engineering team to build internal tools.",
    technologies: ["Angular", "TypeScript", "Python", "Django", "SCSS"],
    current: false,
  },
  {
    id: "05",
    company: "Globant Argentina",
    title: "Web UI Developer",
    period: "May 2021 — Jan 2022",
    description:
      "Focused on frontend development with React, implementing complex routing with React Router and managing global state for financial service platforms.",
    technologies: ["React", "JavaScript", "SCSS", "Microfrontends"],
    current: false,
  },
  {
    id: "06",
    company: "SkillTech Group",
    title: "Frontend Developer (Freelance)",
    period: "Feb 2021 — Feb 2022",
    description:
      "Built web interfaces and reusable React and Redux components for multiple client projects.",
    technologies: ["React", "Redux", "JavaScript", "HTML", "SCSS"],
    current: false,
  },
];
