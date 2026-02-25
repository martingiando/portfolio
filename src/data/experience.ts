import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "01",
    company: "The Flock",
    title: "Software Engineer (Sr)",
    period: "Jul 2022 — Present",
    description:
      "Architected and implemented high-traffic features using Next.JS, TypeScript, and Node.js, ensuring seamless global state management and UI consistency. Optimized Express-based backend services to handle complex data processing, significantly improving system throughput and performance. Collaborated on the transition to modular frontend architectures, focusing on reusable components and TailwindCSS for styling.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "Nest.js", "TailwindCSS", "SCSS", "Chakra-ui", "React Query", "Zustand", "React-hook-form"],
    current: true,
  },
  {
    id: "02",
    company: "Hack Academy",
    title: "Frontend Mentor",
    period: "Mar 2022 — Mar 2023",
    description:
      "Mentored developers in modern technical standards, specifically focusing on Clean Code, Eslint/Prettier configurations, and Semantic HTML.",
    technologies: ["React", "Vue", "JavaScript", "HTML", "CSS"],
    current: false,
  },
  {
    id: "03",
    company: "Hey! B Tech",
    title: "Founder & Software Engineer",
    period: "Mar 2022 — Sep 2022",
    description:
      "Managed the full development lifecycle, prioritizing robust backend logic and efficient data handling. Led projects centered on A/B testing and performance optimization, helping brands improve user experiences and unlock new growth opportunities through data-driven decisions.",
    technologies: ["React", "Node.js", "A/B Testing", "Google Analytics", "Google Tag Manager"],
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
    title: "Frontend Developer",
    period: "Feb 2021 — Feb 2022",
    description:
      "Worked as a Frontend Developer, building web interfaces and reusable components using React for multiple client projects.",
    technologies: ["React", "JavaScript", "HTML", "SCSS"],
    current: false,
  },
];
