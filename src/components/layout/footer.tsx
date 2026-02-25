import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm uppercase tracking-wider text-white/50 mb-8">
          Get in touch
        </p>

        <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-[1.1] tracking-tight mb-12">
          Have a project
          <br />
          in mind?
        </h2>

        <a
          href="#contact"
          className="inline-block bg-accent text-white px-10 py-4 font-mono text-sm uppercase tracking-wider font-medium shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
        >
          Let&apos;s Work Together
        </a>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-white/10 pt-8">
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                <span className="text-accent" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
