import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { SelectedWorks } from "@/components/sections/selected-works";

const Experience = dynamic(
  () =>
    import("@/components/sections/experience").then((mod) => mod.Experience),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("@/components/sections/tech-stack").then((mod) => mod.TechStack),
  { ssr: true }
);

const About = dynamic(
  () => import("@/components/sections/about").then((mod) => mod.About),
  { ssr: true }
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then(
      (mod) => mod.Testimonials
    ),
  { ssr: true }
);

const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <Experience />
      <TechStack />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
