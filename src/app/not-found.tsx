import Link from "next/link";
import { Arrow } from "@/components/shared/icons";
import { StretchType } from "@/components/shared/stretch-type";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col justify-center px-5 pt-28 pb-20 md:px-10">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="mg-display text-[clamp(3rem,11vw,10rem)]">
          <StretchType text="Page not found" />
          <span className="mg-caret" aria-hidden="true" />
        </h1>
        <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-(--ink-soft)">
          Error 404. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="mg-pill mt-10 bg-(--blue) text-(--snow)">
          Back to home <Arrow />
        </Link>
      </div>
    </section>
  );
}
