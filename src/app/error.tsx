"use client";

import { StretchType } from "@/components/shared/stretch-type";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-svh flex-col justify-center px-5 pt-28 pb-20 md:px-10">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="mg-display text-[clamp(3rem,11vw,10rem)]">
          <StretchType text="Something broke" />
          <span className="mg-caret" aria-hidden="true" />
        </h1>
        <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-(--ink-soft)">
          An unexpected error stopped this page from loading. Trying again usually fixes it.
        </p>
        <button type="button" onClick={reset} className="mg-pill mt-10 bg-(--blue) text-(--snow)">
          Try again
        </button>
      </div>
    </section>
  );
}
