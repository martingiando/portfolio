"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import { NAV_LINKS } from "@/lib/constants";
import { Arrow } from "@/components/shared/icons";

const MENU = [...NAV_LINKS, { label: "Contact", href: "/#contact" }];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [mobileOpen, lenis]);

  // While the menu covers the page, keep keyboard and screen readers out of it
  useEffect(() => {
    if (!mobileOpen) return;
    const covered = document.querySelectorAll<HTMLElement>("main, footer");
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => setMobileOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      close();
      toggleRef.current?.focus();
    };
    covered.forEach((el) => (el.inert = true));
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", close);
    return () => {
      covered.forEach((el) => (el.inert = false));
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", close);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-(--ink) text-(--snow)">
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-5 md:px-10"
        >
          <Link href="/" className="mg-display py-2.5 text-xl" aria-label="Martín Giando, home">
            MG<span className="text-(--sky)">.</span>
          </Link>

          <ul className="hidden gap-8 text-[0.8rem] font-semibold tracking-[0.14em] uppercase md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="py-3 transition-colors hover:text-(--sky)">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="mg-pill bg-(--blue) px-5 py-3 text-[0.72rem] text-(--snow) max-[359px]:hidden"
            >
              Get in touch <Arrow />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mg-pill px-4 py-3 text-[0.72rem] ring-2 ring-(--snow)/40 ring-inset md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
        <motion.div
          aria-hidden="true"
          className="h-[3px] origin-left bg-(--sky) motion-reduce:hidden"
          style={{ scaleX: progress }}
        />
      </header>

      {/* Outside the header, so the overlay is positioned against the viewport */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-center bg-(--ink) px-5 md:hidden"
          >
            <ul>
              {MENU.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="mg-display block py-2 text-[clamp(2.2rem,11vw,4.5rem)] transition-colors hover:text-(--sky)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
