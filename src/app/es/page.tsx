import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
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
  title: "Desarrollador Full Stack Senior en Argentina",
  description:
    "Martín Giando, desarrollador full stack senior en Buenos Aires. React, Next.js, TypeScript y Node.js. Abierto a trabajo fijo y proyectos freelance.",
  alternates: {
    canonical: "/es",
    languages: { en: "/about", es: "/es" },
  },
};

const stackLabels: Record<string, string> = {
  Languages: "Programación",
  Databases: "Bases de datos",
  "Cloud & DevOps": "Cloud y DevOps",
  Tools: "Herramientas",
};

const months: Record<string, string> = {
  Jan: "ene",
  Apr: "abr",
  Aug: "ago",
  Dec: "dic",
  Present: "actualidad",
};

function toSpanish(period: string) {
  return period
    .replace(/[A-Z][a-z]+/g, (word) => months[word] ?? word.toLowerCase())
    .replace("—", "a");
}

export default function SpanishPage() {
  return (
    <PageShell
      lang="es"
      title="Desarrollador Full Stack Senior"
      lead="Soy Martín Giando, desarrollador full stack senior con más de 5 años creando aplicaciones web con React, Next.js, TypeScript y Node.js. Trabajo en remoto desde Buenos Aires, Argentina, y estoy abierto a trabajo fijo y a proyectos freelance."
    >
      <JsonLd
        data={{
          "@type": "ProfilePage",
          url: `${SITE_URL}/es`,
          inLanguage: "es",
          mainEntity: person,
        }}
      />

      <PageSection title="En resumen">
        <FactList
          facts={[
            ["Ubicación", "Buenos Aires, Argentina (UTC−3), en remoto"],
            ["Busco", "Trabajo fijo y proyectos freelance"],
            ["Idiomas", "Español (nativo) e inglés (C2, EF SET 71/100)"],
            [
              "Contacto",
              <span key="contacto" className="flex flex-wrap gap-x-6 gap-y-2">
                <a href={`mailto:${SITE_CONFIG.email}`} className={textLink}>
                  {SITE_CONFIG.email}
                </a>
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} rel="me" className={textLink}>
                    {link.label}
                  </a>
                ))}
                <a href={SITE_CONFIG.cv} download className={textLink}>
                  CV en inglés (PDF)
                </a>
              </span>,
            ],
          ]}
        />
      </PageSection>

      <PageSection title="Qué hago">
        <div className="max-w-[58ch] flex flex-col gap-4 text-lg leading-relaxed">
          <p>
            Mi fuerte es el frontend y también me encargo del backend. En The
            Flock trabajé casi cuatro años en la búsqueda, las reservas y el
            checkout de una empresa líder de viajes: estuve desde el primer día,
            mientras el equipo crecía a 15 personas, y guié a 3 compañeros.
          </p>
          <p>
            Desde 2025 también trabajo de forma independiente y hoy estoy en un
            proyecto freelance.
          </p>
        </div>
      </PageSection>

      <PageSection title="Experiencia">
        <FactList
          facts={experiences.map(({ company, title, period }) => [
            toSpanish(period),
            <span key={company}>
              <strong>{company}</strong>: <span lang="en">{title}</span>
            </span>,
          ])}
        />
      </PageSection>

      <PageSection title="Tecnologías">
        <FactList
          facts={stack.map(({ name, items }) => [
            stackLabels[name] ?? name,
            items.join(", "),
          ])}
        />
      </PageSection>

      <p>
        <Link
          href="/"
          hrefLang="en"
          className={`${textLink} inline-block py-2.5`}
        >
          Ver el portfolio completo, en inglés
        </Link>
      </p>
    </PageShell>
  );
}
