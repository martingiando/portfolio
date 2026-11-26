import Link from "next/link";
import { Fragment } from "react";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { ProjectTile } from "@/components/cards/project-tile";
import { Arrow } from "@/components/shared/icons";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";

const TILES: Record<string, { className: string; contain?: boolean }> = {
  "03": { className: "bg-(--ink) text-(--snow) lg:col-span-7", contain: true },
  "04": { className: "bg-(--blue) text-(--snow) lg:col-span-5" },
  "01": { className: "bg-(--sky) text-(--ink) lg:col-span-5" },
  "02": { className: "bg-(--ink) text-(--snow) lg:col-span-4" },
};
const tileOrder = ["03", "04", "01", "02"];

export function SelectedWorks() {
  return (
    <section id="work" className={`mg-grow on-light bg-(--snow) text-(--ink) ${section}`}>
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <Reveal
            className="mg-display text-[clamp(2.6rem,6.4vw,6.5rem)]"
            lines={[
              "Things I've",
              <Fragment key="l2">
                <span className="mg-serif text-(--blue)">actually</span> built.
              </Fragment>,
            ]}
          />
          <p className="max-w-[38ch] text-lg leading-relaxed text-(--snow-soft)">
            Four products, from a travel company&apos;s booking flow to a rental dashboard I built end to end.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:gap-5 lg:grid-cols-12 lg:[grid-auto-rows:minmax(30rem,auto)]">
          {tileOrder.map((id) => {
            const project = projects.find((p) => p.id === id);
            return project && <ProjectTile key={id} project={project} {...TILES[id]} />;
          })}
          <Link
            href="/about"
            data-cursor="Read"
            className="group mg-tile flex min-h-[16rem] flex-col justify-between gap-8 rounded-[2rem] bg-(--navy) p-6 text-(--snow) lg:col-span-3"
          >
            <p className="mg-serif text-[clamp(2.6rem,4vw,4rem)] leading-[0.95] text-(--sky)">The rest of the story</p>
            <div>
              <p className="mg-mono text-xs tracking-wider uppercase">
                {experiences.length} roles · {testimonials.length} colleague reviews
              </p>
              <span className="mt-3 inline-flex items-center gap-2 font-semibold underline decoration-(--sky) decoration-2 underline-offset-4">
                About me <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
