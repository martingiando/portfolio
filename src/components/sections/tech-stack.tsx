import { stack } from "@/data/stack";
import { SectionHeading } from "@/components/shared/section-heading";
import { StackCard } from "@/components/cards/stack-card";

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-24" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="stack-heading" title="Tech Stack" count={`0${stack.length}`} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((category, i) => (
            <StackCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
