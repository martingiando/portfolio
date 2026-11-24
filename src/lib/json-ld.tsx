import { ABOUT, SITE_CONFIG, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { stack } from "@/data/stack";

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_CONFIG.name,
  alternateName: "Martin Giando",
  jobTitle: SITE_CONFIG.role,
  description: SITE_CONFIG.tagline,
  url: SITE_URL,
  image: `${SITE_URL}${ABOUT.photo}`,
  sameAs: SOCIAL_LINKS.map((link) => link.href),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  knowsLanguage: ["es", "en"],
  knowsAbout: stack
    .filter((category) => category.name !== "Tools")
    .flatMap((category) => category.items),
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...data,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
