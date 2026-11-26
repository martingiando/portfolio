"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useSyncExternalStore } from "react";

export type Chip = { label: string; category: string; tone: string };

const finePointer = "(hover: hover) and (pointer: fine)";
const subscribe = (cb: () => void) => {
  const mq = matchMedia(finePointer);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// Deterministic tilt per chip so server and client agree
const tilt = (i: number) => ((i * 37) % 17) - 8;

/** The stack as a pile of chips: they drop in, a mouse can throw them, a tap makes one hop. */
export function StackPile({ chips }: { chips: Chip[] }) {
  const box = useRef<HTMLUListElement>(null);
  const controls = useAnimationControls();
  const inView = useInView(box, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const fine = useSyncExternalStore(subscribe, () => matchMedia(finePointer).matches, () => false);

  useEffect(() => {
    if (!reduce) controls.set({ y: -900 });
  }, [controls, reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    controls.start((i: number) => ({
      y: 0,
      transition: { type: "spring", stiffness: 210, damping: 15, delay: 0.1 + i * 0.045 },
    }));
  }, [inView, reduce, controls]);

  return (
    <ul
      ref={box}
      aria-label="Technologies I work with"
      className="relative flex min-h-[26rem] flex-wrap-reverse content-start items-end justify-center gap-x-1.5 gap-y-2 overflow-hidden rounded-[2rem] border-2 border-(--snow)/30 px-3 pt-28 pb-5 md:min-h-[32rem] md:px-8"
    >
      {chips.map((chip, i) => (
        <motion.li
          key={chip.label}
          custom={i}
          animate={controls}
          initial={{ rotate: tilt(i) }}
          drag={fine}
          dragConstraints={box}
          dragElastic={0.25}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 14 }}
          whileDrag={{ scale: 1.12, rotate: 0, zIndex: 20 }}
          whileHover={fine ? { scale: 1.06 } : undefined}
          whileTap={fine ? undefined : { y: -36, rotate: 0 }}
          data-cursor={fine ? "Throw" : undefined}
          className={`mg-chip tone-${chip.tone}`}
        >
          <span className="sr-only">{chip.category}: </span>
          {chip.label}
        </motion.li>
      ))}
    </ul>
  );
}
