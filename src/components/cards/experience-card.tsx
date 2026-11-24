import type { Experience } from "@/types";
import { AnimatedSection } from "@/components/shared/animated-section";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <AnimatedSection className="relative pl-7 md:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 flex items-center justify-center">
        <span
          className={`block h-4 w-4 border-2 border-accent ${
            experience.current ? "bg-accent" : "bg-background"
          }`}
        />
      </div>

      {/* Card */}
      <div className="border border-foreground shadow-brutalist bg-card p-4 md:p-8 lg:grid lg:grid-cols-[19rem_1fr] lg:gap-12">
        <div className="mb-3 lg:mb-0">
          <div className="flex items-center gap-3 mb-1">
            <div
              className="h-8 w-8 shrink-0 border border-foreground bg-muted flex items-center justify-center font-display text-xs font-bold"
              aria-hidden="true"
            >
              {experience.company.charAt(0)}
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight">
              {experience.company}
            </h3>
          </div>
          <p className="text-base text-foreground/80">{experience.title}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {experience.period}
          </p>
        </div>

        <div>
          <p className="max-w-[58ch] text-muted-foreground leading-relaxed mb-3 md:mb-5">
            {experience.description}
          </p>

          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            {experience.technologies.join(" · ")}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
