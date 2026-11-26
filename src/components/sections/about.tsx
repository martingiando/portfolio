import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ABOUT, SITE_CONFIG } from "@/lib/constants";
import { Arrow } from "@/components/shared/icons";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";

export function About() {
  return (
    <section id="about" className={`mg-grow on-light bg-(--snow) text-(--ink) ${section}`}>
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[minmax(16rem,24rem)_minmax(0,1fr)] lg:gap-20`}>
        <div className="lg:order-last">
          <Reveal
            className="mg-display text-[clamp(2.6rem,6vw,6rem)]"
            lines={[
              "The human",
              <Fragment key="l2">
                <span className="mg-serif text-(--blue)">behind</span> it.
              </Fragment>,
            ]}
          />
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed">{ABOUT.bio}</p>
          <h3 className="mt-10 text-sm font-semibold text-(--snow-soft)">When I&apos;m not coding</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ABOUT.interests.map((interest) => (
              <li key={interest} className="rounded-full px-4 py-2 text-sm font-medium ring-2 ring-(--ink)/15 ring-inset">
                {interest}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about" className="mg-pill bg-(--ink) text-(--snow)">
              More about me <Arrow />
            </Link>
            <Link
              href="/hire"
              className="mg-pill ring-2 ring-(--ink)/30 ring-inset hover:bg-(--ink) hover:text-(--snow)"
            >
              Working with me <Arrow />
            </Link>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[22rem] rotate-3 rounded-[2rem] bg-(--blue) p-3 transition-transform duration-700 ease-(--ease-out) motion-safe:hover:-rotate-2 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
            <Image
              src={ABOUT.photo}
              alt={`Photo of ${SITE_CONFIG.name}`}
              fill
              sizes="(max-width: 1024px) 22rem, 24rem"
              className="object-cover object-[64%_center]"
            />
          </div>
          <figcaption className="px-2 pt-3 pb-1 text-sm font-semibold text-(--snow)">
            Martín · {SITE_CONFIG.location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
