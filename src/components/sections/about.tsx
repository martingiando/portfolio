import Image from "next/image";
import { ABOUT, SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export function About() {
  return (
    <section id="about" className="px-6 py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="about-heading" title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Photo card */}
          <AnimatedSection>
            <div className="border border-foreground shadow-brutalist overflow-hidden h-full relative min-h-[400px]">
              <Image
                src={ABOUT.photo}
                alt={`Photo of ${SITE_CONFIG.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover relative z-10"
              />
              {/* Fallback initials when no photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <span className="font-display text-[8rem] font-bold text-muted-foreground/10 select-none">
                  {SITE_CONFIG.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio card */}
          <AnimatedSection delay={0.15}>
            <div className="border border-foreground shadow-brutalist bg-card h-full flex flex-col">
              {/* About Me */}
              <div className="px-6 py-6 md:px-8 md:py-8 flex-1">
                <h3 className="font-display text-base font-bold uppercase tracking-tight mb-1">
                  About Me
                </h3>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {SITE_CONFIG.location}
                </span>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {ABOUT.bio}
                </p>
              </div>

              {/* Separator */}
              <div className="border-t border-foreground" />

              {/* Interests */}
              <div className="px-6 py-6 md:px-8 md:py-6">
                <h3 className="font-display text-base font-bold uppercase tracking-tight mb-4">
                  When I&apos;m Not Coding
                </h3>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  {ABOUT.interests.join(" · ")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
