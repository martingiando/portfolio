"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/cards/testimonial-card";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="testimonials-heading"
          title="What People Say"
          count={`0${testimonials.length}`}
        />
        {/* Splide keeps the list hidden until it mounts */}
        <noscript>
          <style>{`.splide{visibility:visible!important}.splide__list{flex-direction:column;gap:1.5rem}`}</style>
        </noscript>
        <Splide
          options={{
            perPage: 3,
            gap: "1.5rem",
            pagination: true,
            arrows: false,
            breakpoints: {
              1024: { perPage: 2, gap: "1.25rem" },
              768: { perPage: 1, gap: "1rem" },
            },
          }}
          aria-label="Testimonials"
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
