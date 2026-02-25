import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="border border-foreground shadow-brutalist bg-card flex flex-col h-full">
      {/* Quote */}
      <div className="px-6 py-6 md:px-8 md:py-8 flex-1">
        <span
          className="block font-display text-4xl text-accent leading-none mb-4 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="text-foreground leading-relaxed">{testimonial.quote}</p>
      </div>

      {/* Separator */}
      <div className="border-t border-foreground" />

      {/* Attribution */}
      <div className="px-6 py-4 md:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-tight">
          {testimonial.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </blockquote>
  );
}
