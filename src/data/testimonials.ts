export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "01",
    quote:
      "I had the pleasure of working with Martin at The Flock, where he consistently demonstrated exceptional skills as a Full Stack Developer. His expertise in React, Next.js, TypeScript, and Node.js was invaluable to the team. Beyond his technical proficiency, Martin is a responsible, dedicated, and highly collaborative team player. His proactive approach and commitment to best practices make him an asset to any development team.",
    name: "Yunier Hernández González",
    role: "Senior Backend & Platform Engineer",
    company: "The Flock",
  },
  {
    id: "02",
    quote:
      "We were close colleagues for about a year. I could see firsthand his quality as a developer — following and teaching me to follow best practices in software creation, software scaling, and efficient ways of working with typed languages. He's one of the few seniors I've met who, besides being knowledgeable, was happy to share that knowledge with others. Fully committed to his work, Tincho works by objectives and doesn't stop until they're done. His tasks usually passed without bounces from the testing area, thanks to the exhaustive testing he'd already done.",
    name: "Leandro Ayala",
    role: "Node Developer",
    company: "The Flock",
  },
  {
    id: "03",
    quote:
      "I was lucky to work with Martín at The Flock on the Tower Travel project, and he truly is a great colleague and professional. As a programmer, he's always one step ahead — he has a great eye for detail, writes clean code, and is very committed to what he does. He's always willing to help, share what he knows, and bring positive energy to the team. Highly recommended for any development team.",
    name: "Sebastián Laserna",
    role: "Full-Stack Developer",
    company: "The Flock",
  },
  {
    id: "04",
    quote:
      "Martín is a very capable professional, with strong innovation skills and business understanding. Super proactive and with many technical qualities. It was a pleasure working together!",
    name: "Heber Ariel Bustamante Varela",
    role: "Technical Lead",
    company: "The Flock",
  },
  {
    id: "05",
    quote:
      "Martín is a very detail-oriented person who always seeks to transform every challenge into an opportunity to generate a positive impact on the team. He has a high capacity to respond to unforeseen challenges and always strives to be one step ahead.",
    name: "Chiara Fernandez Querol",
    role: "Bubble Developer",
    company: "Sidetool",
  },
];
