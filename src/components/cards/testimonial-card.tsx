import type { Testimonial } from "@/data/testimonials";

/** A review with its key phrase marked like text selected in an editor. Takes its colours from the surface it sits on. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, highlight } = testimonial;
  const at = highlight ? quote.indexOf(highlight) : -1;

  return (
    <figure className="flex h-full flex-col gap-5 border-t-2 border-current/20 pt-6">
      <blockquote className="text-lg leading-relaxed">
        <p>
          {at < 0 || !highlight ? (
            quote
          ) : (
            <>
              {quote.slice(0, at)}
              <mark className="mg-select">{highlight}</mark>
              {quote.slice(at + highlight.length)}
            </>
          )}
        </p>
      </blockquote>
      <figcaption className="mt-auto">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="mt-0.5 text-sm opacity-75">
          {testimonial.role}, {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
