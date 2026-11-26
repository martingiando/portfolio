"use client";

import { useEffect, useRef } from "react";

const REST = 96; // matches .mg-stretch
const NARROW = 80;
const WIDE = 150;

/**
 * Letters widen and gain weight as the pointer gets close, and the rest
 * narrow so the line keeps roughly its width. Touch: tap to make a bump.
 */
export function StretchType({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = [...root.querySelectorAll<HTMLElement>("[data-l]")];
    const now = letters.map(() => ({ w: REST, g: 900 }));
    let px = -1e5;
    let py = -1e5;
    let raf = 0;

    // Letter centres at rest, relative to the start of the line. Distances are taken from
    // these, never from the live letters: stretching moves the letters, and measuring them
    // live fed back into the stretch and made the line flicker.
    // shortcut: re-measured on resize only, so a resize mid-stretch keeps slightly off centres until the next resize.
    let centres: { x: number; y: number }[] = [];
    const measure = () => {
      centres = letters.map((el) => ({
        x: el.offsetLeft + el.offsetWidth / 2 - root.offsetLeft,
        y: el.offsetTop + el.offsetHeight / 2 - root.offsetTop,
      }));
    };
    measure();
    document.fonts.ready.then(measure);

    const frame = () => {
      const box = root.getBoundingClientRect(); // its left and top edges don't move while letters stretch
      const reach = parseFloat(getComputedStyle(root).fontSize) * 2.4;
      const fs = centres.map((c) => {
        const t = Math.max(0, 1 - Math.hypot(px - box.left - c.x, py - box.top - c.y) / reach);
        return t * t * (3 - 2 * t);
      });
      // Fades the whole effect in and out with distance instead of switching at an edge
      const pull = Math.max(0, ...fs);
      let moving = false;

      letters.forEach((el, i) => {
        const f = fs[i] ?? 0;
        const tw = REST + pull * (NARROW + (WIDE - NARROW) * f - REST);
        const tg = 900 + pull * (640 + 260 * f - 900);
        now[i].w += (tw - now[i].w) * 0.16;
        now[i].g += (tg - now[i].g) * 0.16;
        if (Math.abs(tw - now[i].w) > 0.2) moving = true;
        el.style.fontVariationSettings = `"wdth" ${now[i].w.toFixed(1)}, "wght" ${now[i].g.toFixed(0)}`;
      });
      raf = moving ? requestAnimationFrame(frame) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX;
      py = e.clientY;
      kick();
    };
    let release = 0;
    const tap = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      px = e.clientX;
      py = e.clientY;
      kick();
      clearTimeout(release);
      release = window.setTimeout(() => {
        px = py = -1e5;
        kick();
      }, 700);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", measure);
    root.addEventListener("pointerdown", tap);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(release);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", measure);
      root.removeEventListener("pointerdown", tap);
    };
  }, []);

  return (
    <span ref={ref} className="mg-stretch">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, w) => (
          <span key={w}>
            {w > 0 && " "}
            <span className="inline-block whitespace-nowrap">
              {[...word].map((ch, i) => (
                <span key={i} data-l="" className="inline-block">
                  {ch}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
