import { Fragment } from "react";
import { experiences } from "@/data/experience";
import { SITE_CONFIG } from "@/lib/constants";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";
import { StretchType } from "@/components/shared/stretch-type";

export function Experience() {
  return (
    <section id="experience" className={`bg-(--ink) ${section}`}>
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <Reveal
            className="mg-display text-[clamp(2.6rem,6.4vw,6.5rem)]"
            lines={[
              "Where I've",
              <Fragment key="l2">
                <span className="mg-serif text-(--sky)">been</span> building.
              </Fragment>,
            ]}
          />
          <p className="max-w-[38ch] text-lg leading-relaxed text-(--ink-soft)">
            Consultancies, a startup, a classroom and my own clients, since 2021. The long version is{" "}
            <a
              href={SITE_CONFIG.cv}
              download
              className="font-medium text-(--snow) underline decoration-(--sky) decoration-2 underline-offset-4"
            >
              in my CV
            </a>
            .
          </p>
        </div>

        <ol className="mt-14 border-t border-(--snow)/15">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="grid gap-x-12 gap-y-5 border-b border-(--snow)/15 py-9 md:py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
            >
              <div>
                <h3 className="mg-display text-[clamp(2rem,3.8vw,3.6rem)]">
                  <StretchType text={exp.company} />
                </h3>
                <p className="mg-serif mt-2 text-[clamp(1.25rem,1.8vw,1.6rem)] text-(--sky)">{exp.title}</p>
                <p className="mg-mono mt-3 flex items-center gap-2.5 text-sm text-(--ink-soft)">
                  {exp.current && <span className="mg-live" aria-hidden="true" />}
                  {exp.period}
                </p>
              </div>
              <div className="lg:pt-2">
                <p className="max-w-[62ch] leading-relaxed text-(--snow)/85">{exp.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-(--ink-soft)">{exp.technologies.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
