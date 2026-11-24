import type { NavLink, SocialLink } from "@/types";

// Update this when you have a custom domain
export const SITE_URL = "https://martingiando.vercel.app";

export const SITE_CONFIG = {
  name: "Martín Giando",
  email: "martingiando@gmail.com",
  location: "Buenos Aires, AR",
  role: "Senior Full Stack Engineer",
  tagline:
    "5+ years building web applications with React, Next.js, TypeScript and Node.js. Open to full-time roles and freelance projects, remote from Buenos Aires.",
  cv: "/martin-giando-cv.pdf",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/martingiando" },
  { label: "LinkedIn", href: "https://linkedin.com/in/martin-giando" },
];

export const ABOUT = {
  bio: "Hey, I'm Martín. I'm a senior full stack engineer based in Buenos Aires who genuinely enjoys building things for the web. I got into coding out of curiosity and stayed because I love the craft — there's something deeply satisfying about turning a messy problem into a clean, working system. I care about writing code that other people can actually read and maintain, and I'm always looking for the next challenge that pushes me to grow.",
  interests: [
    "Music",
    "Coffee",
    "Gaming",
    "Traveling",
    "Open Source",
    "Skiing",
  ],
  photo: "/images/profile.png",
} as const;
