import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const linkClass =
  "inline-block py-3 font-mono text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-[1.1] tracking-tight mb-12 text-balance">
          Hiring, or have a project in mind?
        </h2>

        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="inline-block bg-accent text-white px-6 md:px-10 py-4 font-mono text-sm font-medium shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
        >
          {SITE_CONFIG.email}
        </a>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8">
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
                  <a
                    href={link.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-mono text-xs text-white/60">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
