import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { Band } from "@/components/shared/marquee";

const linkClass = "inline-block py-3 font-semibold transition-colors hover:text-(--sky)";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-(--ink) pt-6 pb-10 text-(--snow)">
      <Band
        reverse
        className="bg-(--mint) text-(--ink)"
        words={[["Martín Giando"], ["full stack", "senior"], ["Buenos Aires"], ["Let's talk"]]}
      />
      <div className="mx-auto mt-12 flex w-full max-w-[90rem] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 text-sm">
            <li>
              <Link href="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link href="/hire" className={linkClass}>
                Hire me
              </Link>
            </li>
            <li>
              <Link href="/es" hrefLang="es" lang="es" className={linkClass}>
                Español
              </Link>
            </li>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="me noopener noreferrer" className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SITE_CONFIG.email}`} className={`${linkClass} mg-mono font-medium`}>
                {SITE_CONFIG.email}
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-(--ink-soft)">
          © {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>
      </div>
    </footer>
  );
}
