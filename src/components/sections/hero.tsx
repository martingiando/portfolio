import { Fragment } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Arrow } from "@/components/shared/icons";
import { LocalTime } from "@/components/shared/local-time";
import { Band } from "@/components/shared/marquee";
import { wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";
import { StretchType } from "@/components/shared/stretch-type";

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative flex min-h-svh flex-col overflow-x-clip pt-16">
      <div
        className={`${wrap} grid flex-1 items-center gap-x-14 gap-y-8 px-5 pt-10 pb-14 sm:gap-y-10 sm:pt-16 sm:pb-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,23rem)]`}
      >
        {/* Sized to its column so the name stays on one line from sm up */}
        <div className="@container">
          <Reveal
            as="h1"
            className="mg-display mg-intro text-[17cqi] sm:text-[clamp(2.75rem,11cqi,9rem)]"
            lines={[
              <span key="name" className="sm:whitespace-nowrap">
                <StretchType text="Martín Giando" />
              </span>,
              <Fragment key="l1">
                <span className="mg-serif text-[0.6em] text-(--sky)">builds the web,</span> front
              </Fragment>,
              <span key="mark" className="mg-select">
                <StretchType text="to back." />
                <span className="mg-caret" aria-hidden="true" />
              </span>,
            ]}
          />
        </div>
        <div className="flex flex-col">
          <ul
            aria-label="Availability"
            className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-(--ink-soft) sm:mb-7"
          >
            <li className="flex items-center gap-2.5 font-semibold text-(--snow)">
              <span className="mg-live" aria-hidden="true" />
              Open to work
            </li>
            <li>
              <span className="text-(--snow)">
                <LocalTime />
              </span>{" "}
              in Buenos Aires
            </li>
            <li>Replies within 24h</li>
          </ul>
          <p className="text-[clamp(1.3rem,1.9vw,1.65rem)] leading-snug font-medium text-balance">
            {SITE_CONFIG.role}.{" "}
            <span className="mg-serif text-(--sky)">Deepest in frontend, and the backend is mine too.</span>
          </p>
          {/* On phones the CTAs come before the tagline so both fit the first screen */}
          <p className="order-last mt-6 max-w-[42ch] leading-relaxed text-(--ink-soft) sm:order-none sm:mt-5">
            {SITE_CONFIG.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a href="#work" className="mg-pill bg-(--blue) text-(--snow)">
              See the work <Arrow />
            </a>
            <a
              href={SITE_CONFIG.cv}
              download
              className="mg-pill text-(--snow) ring-2 ring-(--snow)/40 ring-inset hover:bg-(--snow) hover:text-(--ink)"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <Band
        className="bg-(--blue) text-(--snow)"
        words={[
          ["Open to full-time"],
          ["freelance", "and"],
          ["React"],
          ["Next.js"],
          ["TypeScript"],
          ["Node.js"],
          ["Buenos Aires", "remote from"],
        ]}
      />
    </section>
  );
}
