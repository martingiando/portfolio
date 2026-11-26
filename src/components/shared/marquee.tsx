"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

/** Endless band; scrolling speeds it up and scrolling up turns it around. */
export function Marquee({
  children,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const velocity = useRef(0);
  useLenis((lenis) => {
    velocity.current = lenis.velocity;
  });

  useEffect(() => {
    const el = track.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const flip = reverse ? -1 : 1;
    let x = 0;
    let dir = -flip;
    let last = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const v = velocity.current;
      if (Math.abs(v) > 0.3) dir = (v > 0 ? -1 : 1) * flip;
      x += dir * (70 + Math.min(Math.abs(v) * 40, 900)) * dt;
      const half = el.scrollWidth / 2;
      x %= half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [reverse]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/** A tilted marquee of display words, each optionally led by a word in the italic voice. */
export function Band({
  words,
  className,
  reverse,
}: {
  words: [display: string, serif?: string][];
  className: string;
  reverse?: boolean;
}) {
  return (
    <Marquee reverse={reverse} className={`mg-band py-3.5 md:py-4 ${className}`}>
      {words.map(([display, serif], i) => (
        <span
          key={i}
          className="flex items-center gap-[0.45em] px-[0.45em] text-[clamp(1.4rem,3vw,2.6rem)] whitespace-nowrap"
        >
          {serif && <span className="mg-serif">{serif}</span>}
          <span className="mg-display">{display}</span>
          <span className="mg-display ml-[0.3em] opacity-35" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </Marquee>
  );
}
