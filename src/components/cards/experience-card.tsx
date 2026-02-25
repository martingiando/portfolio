import type { Experience } from "@/types";
import { Pill } from "@/components/shared/pill";
import { AnimatedSection } from "@/components/shared/animated-section";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} className="relative pl-8 md:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 flex items-center justify-center">
        <span
          className={`block h-4 w-4 border-2 border-accent ${
            experience.current ? "bg-accent" : "bg-background"
          }`}
        />
      </div>

      {/* Card */}
      <div className="border border-foreground shadow-brutalist bg-card p-6 md:p-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            {/* Company placeholder + name */}
            <div className="flex items-center gap-3 mb-1">
              <div className="h-8 w-8 border border-foreground bg-muted flex items-center justify-center font-display text-xs font-bold">
                {experience.company.charAt(0)}
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight">
                {experience.company}
              </h3>
            </div>
            <p className="text-base text-foreground/80">{experience.title}</p>
          </div>

          {/* Date */}
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Pill key={tech} className="text-[10px] px-3 py-1">
              {tech}
            </Pill>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
