import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/projects";
import { stack } from "@/data/stack";
import { SITE_CONFIG, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { JsonLd, person } from "@/lib/json-ld";
import {
  FactList,
  PageSection,
  PageShell,
  textLink,
} from "@/components/shared/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Martín Giando is a Senior Full Stack Engineer in Buenos Aires, Argentina, working with React, Next.js, TypeScript and Node.js. Experience, stack and languages.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", es: "/es" },
  },
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Martín Giando"
      lead="Martín Giando is a Senior Full Stack Engineer based in Buenos Aires, Argentina, with 5+ years building web applications with React, Next.js, TypeScript and Node.js. Martín is open to full-time roles and freelance projects."
    >
      <JsonLd
        data={{
          "@type": "ProfilePage",
          url: `${SITE_URL}/about`,
          mainEntity: person,
        }}
      />

      <PageSection title="At a glance">
        <FactList
          facts={[
            ["Role", SITE_CONFIG.role],
            ["Location", "Buenos Aires, Argentina (UTC−3), working remotely"],
            ["Open to", "Full-time roles and freelance projects"],
            ["Languages", "Spanish (native) and English (C2, EF SET 71/100)"],
            [
              "Contact",
              <span key="contact" className="flex flex-wrap gap-x-6 gap-y-2">
                <a href={`mailto:${SITE_CONFIG.email}`} className={textLink}>
                  {SITE_CONFIG.email}
                </a>
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} rel="me" className={textLink}>
                    {link.label}
                  </a>
                ))}
                <a href={SITE_CONFIG.cv} download className={textLink}>
                  CV (PDF)
                </a>
              </span>,
            ],
          ]}
        />
      </PageSection>

      <PageSection title="Background">
        <div className="max-w-[58ch] flex flex-col gap-4 leading-relaxed">
          <p>
            Martín is deepest in frontend and comfortable owning the backend. At
            The Flock, Martín spent nearly four years building search, booking
            and checkout for a leading travel company, on the product from day
            one as the team grew to 15 people, while guiding 3 teammates.
          </p>
          <p>
            Since 2025 Martín has also worked as an independent full stack
            developer, and is currently on a freelance project. Earlier roles
            include Globant Argentina, Mudafy Argentina, freelance work with
            SkillTech Group, and mentoring frontend students at Hack Academy in
            evening classes.
          </p>
          <p>
            Martín is experienced with automated testing, Agile/Scrum and
            AI-assisted development with Claude Code and Cursor.
          </p>
        </div>
      </PageSection>

      <PageSection title="Stack">
        <FactList
          facts={stack.map((category) => [
            category.name,
            category.items.join(", "),
          ])}
        />
      </PageSection>

      <PageSection title="Case studies">
        <ul className="flex flex-col">
          {caseStudies.map(({ title, caseStudy }) => (
            <li key={caseStudy.slug} className="max-w-[58ch] py-2 leading-relaxed">
              <Link href={`/work/${caseStudy.slug}`} className={textLink}>
                {title}
              </Link>
              : {caseStudy.summary}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/hire" className={`${textLink} inline-block py-2.5`}>
            Work with Martín
          </Link>
        </p>
      </PageSection>
    </PageShell>
  );
}
