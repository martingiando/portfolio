import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="min-h-svh flex flex-col px-6 pt-28 pb-12"
      aria-label="Introduction"
    >
      {/* Transform only: the content is visible before (and without) JS */}
      <div className="mx-auto w-full max-w-7xl flex flex-col justify-between gap-10 flex-1 animate-in slide-in-from-bottom-6 duration-700 ease-out motion-reduce:animate-none">
        <h1 className="my-auto font-display font-bold">
          <span className="block text-[clamp(min(3rem,16vw),10vw,8rem)] uppercase tracking-[-0.02em] leading-[0.9]">
            Martín <br />
            Giando
          </span>{" "}
          <span className="block mt-6 text-[clamp(1.125rem,2.4vw,2rem)] leading-tight text-accent">
            {SITE_CONFIG.role}
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {SITE_CONFIG.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-block bg-accent text-white px-8 py-3 font-mono text-sm uppercase tracking-wider font-medium shadow-brutalist-sm transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              See my work
            </Link>
            <a
              href={SITE_CONFIG.cv}
              download
              className="inline-block border border-foreground bg-card px-8 py-3 font-mono text-sm uppercase tracking-wider font-medium shadow-brutalist-sm transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
