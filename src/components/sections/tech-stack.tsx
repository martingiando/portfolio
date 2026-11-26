import { stack } from "@/data/stack";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";
import { StackPile, type Chip } from "@/components/shared/stack-pile";

const TONES: Record<string, string> = {
  Languages: "ink",
  Frontend: "mint",
  Backend: "sky",
  Databases: "snow",
  "Cloud & DevOps": "navy",
  Tools: "outline",
};

// Round-robin across categories so the pile comes out mixed
const byCategory = stack.map((c) =>
  c.items.map((label): Chip => ({ label, category: c.name, tone: TONES[c.name] }))
);
const chips = Array.from({ length: Math.max(...byCategory.map((c) => c.length)) }, (_, i) =>
  byCategory.map((c) => c[i])
)
  .flat()
  .filter(Boolean);

export function TechStack() {
  return (
    <section id="stack" className={`mg-grow on-blue bg-(--blue) text-(--snow) ${section}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end`}>
        <div>
          <Reveal
            className="mg-display text-[clamp(2.6rem,6vw,6rem)]"
            lines={[
              "My stack,",
              <span key="pile" className="mg-serif text-(--sky)">
                in a pile.
              </span>,
            ]}
          />
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed">
            Frontend is where I go deepest, and I own the backend too. Go on, throw the pieces around.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium" aria-label="Colour key">
            {stack.map((c) => (
              <li key={c.id} className="flex items-center gap-2">
                <span className={`size-3.5 rounded-full tone-${TONES[c.name]}`} aria-hidden="true" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
        <StackPile chips={chips} />
      </div>
    </section>
  );
}
