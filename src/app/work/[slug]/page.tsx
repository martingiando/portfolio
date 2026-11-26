import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import {
  FactList,
  PageSection,
  PageShell,
  textLink,
} from "@/components/shared/page-shell";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ caseStudy }) => ({ slug: caseStudy.slug }));
}

async function getProject({ params }: Props) {
  const { slug } = await params;
  return (
    caseStudies.find(({ caseStudy }) => caseStudy.slug === slug) ?? notFound()
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { title, caseStudy } = await getProject(props);
  return {
    title: `${title} case study`,
    description: caseStudy.summary,
    alternates: { canonical: `/work/${caseStudy.slug}` },
  };
}

export default async function CaseStudyPage(props: Props) {
  const { title, alt, category, year, image, tags, caseStudy } =
    await getProject(props);
  const testimonial = testimonials.find(
    ({ id }) => id === caseStudy.testimonialId
  );

  return (
    <PageShell title={title} lead={caseStudy.summary}>
      <div className="grid gap-12 lg:grid-cols-[30rem_1fr]">
        {/* 30rem: the source images are only 600-800px wide */}
        <div className="relative aspect-4/3 max-w-[30rem] overflow-hidden rounded-[2rem] bg-(--ink)/5">
          <Image
            src={image}
            alt={alt ?? title}
            fill
            preload
            sizes="(max-width: 528px) 100vw, 480px"
            className="object-cover"
          />
        </div>

        <PageSection title="What I built">
          <ul className="flex max-w-[58ch] list-disc flex-col gap-3 pl-5 text-lg leading-relaxed marker:text-(--blue)">
            {caseStudy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </PageSection>
      </div>

      <PageSection title="Details">
        <FactList
          facts={[
            ["Work", category],
            ["Year", year],
            ["Stack", tags?.join(", ")],
          ]}
        />
      </PageSection>

      {testimonial && (
        <PageSection title="From the team">
          <div className="max-w-3xl">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </PageSection>
      )}

      <p>
        <Link href="/#work" className={`${textLink} inline-block py-2.5`}>
          See all work
        </Link>
      </p>
    </PageShell>
  );
}
