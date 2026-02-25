import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExperienceCard } from "@/components/cards/experience-card";

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="experience-heading" title="Experience" count={`0${experiences.length}`} />

        {/* Timeline container */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-0.5 bg-accent/30"
            aria-hidden="true"
          />

          {/* Experience items */}
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
