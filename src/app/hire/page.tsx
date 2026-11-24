import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { PageSection, PageShell, textLink } from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "Hire a Senior Full Stack Engineer",
  description:
    "Hire Martín Giando, a Senior Full Stack Engineer in Argentina (UTC−3) for React, Next.js, TypeScript and Node.js. Open to full-time and freelance, remote.",
  alternates: { canonical: "/hire" },
};

const answer = "max-w-[58ch] text-lg leading-relaxed";

export default function HirePage() {
  return (
    <PageShell
      title="Work with me"
      lead="I'm Martín Giando, a Senior Full Stack Engineer working remotely from Buenos Aires, Argentina. I'm open to full-time roles and freelance projects."
    >
      <PageSection title="What I build">
        <p className={answer}>
          Web applications with React, Next.js, TypeScript and Node.js. I&apos;m
          deepest in frontend and comfortable owning the backend too, with
          NestJS, Express and PostgreSQL.
        </p>
      </PageSection>

      <PageSection title="Location and languages">
        <p className={answer}>
          I&apos;m in Buenos Aires, Argentina (UTC−3), and I work remotely. I
          speak Spanish (native) and English (C2, EF SET 71/100).
        </p>
      </PageSection>

      <PageSection title="Previous work">
        <ul className={answer}>
          {caseStudies.map(({ title, caseStudy }) => (
            <li key={caseStudy.slug} className="py-2">
              <Link href={`/work/${caseStudy.slug}`} className={textLink}>
                {title}
              </Link>
              : {caseStudy.summary}
            </li>
          ))}
          <li className="py-2">
            <Link href="/about" className={textLink}>
              My full background
            </Link>{" "}
            and my{" "}
            <a href={SITE_CONFIG.cv} download className={textLink}>
              CV (PDF)
            </a>
          </li>
        </ul>
      </PageSection>

      <PageSection title="What colleagues say">
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials
            .filter(({ id }) => id === "01" || id === "04")
            .map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
      </PageSection>

      <PageSection title="Contact">
        <p className={answer}>
          Write to{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className={textLink}>
            {SITE_CONFIG.email}
          </a>
          , use the{" "}
          <Link href="/#contact" className={textLink}>
            contact form
          </Link>
          , or find me on{" "}
          {SOCIAL_LINKS.map((link, i) => (
            <span key={link.label}>
              {i > 0 && " and "}
              <a href={link.href} rel="me" className={textLink}>
                {link.label}
              </a>
            </span>
          ))}
          . I usually reply within 24 hours.
        </p>
      </PageSection>
    </PageShell>
  );
}
