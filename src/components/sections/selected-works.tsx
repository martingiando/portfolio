import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/cards/project-card";

export function SelectedWorks() {
  return (
    <section id="work" className="px-6 py-24" aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="work-heading" title="Selected Works" count={`0${projects.length}`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
