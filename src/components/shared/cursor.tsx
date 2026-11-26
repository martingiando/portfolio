"use client";

import { useEffect, useRef } from "react";

const TARGETS = "[data-cursor], a, button";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const label = el.firstElementChild as HTMLElement;
    const follow = matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.2;
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      cx += (x - cx) * follow;
      cy += (y - cy) * follow;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      // Hit-test every frame so the state stays right while the page scrolls under a still mouse
      const target = document.elementFromPoint(x, y)?.closest(TARGETS);
      const text = target?.getAttribute("data-cursor") ?? "";
      if (label.textContent !== text) label.textContent = text;
      el.dataset.mode = text ? "label" : target ? "hover" : "";
      // Blinks like an editor caret once the mouse rests
      el.toggleAttribute("data-idle", !target && performance.now() - moved > 700);
      raf = requestAnimationFrame(tick);
    };

    let moved = 0;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      moved = performance.now();
      if (!raf) {
        cx = x;
        cy = y;
        el.removeAttribute("data-hidden");
        document.documentElement.setAttribute("data-own-cursor", "");
        raf = requestAnimationFrame(tick);
      }
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      el.setAttribute("data-hidden", "");
      document.documentElement.removeAttribute("data-own-cursor");
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      leave();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className="mg-cursor" data-hidden="" aria-hidden="true">
      <span />
    </div>
  );
}
