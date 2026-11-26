import { Fragment } from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className={`mg-grow on-light bg-(--sky) text-(--ink) ${section}`}>
      <div className={wrap}>
        <Reveal
          className="mg-display text-[clamp(2.6rem,6.4vw,6.5rem)]"
          lines={[
            "Don't take",
            <Fragment key="l2">
              <span className="mg-serif text-(--navy)">my word</span> for it.
            </Fragment>,
          ]}
        />
        {/* Columns, not a carousel: every review is readable without clicking through */}
        <ul className="mt-14 gap-x-14 md:columns-2">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="mb-12 break-inside-avoid">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
