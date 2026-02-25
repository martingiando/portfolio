"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SITE_CONFIG, SKILLS } from "@/lib/constants";
import { Pill } from "@/components/shared/pill";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  };

  const item: Variants = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between px-6 pt-28 pb-12"
      aria-label="Hero"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl flex flex-col justify-between flex-1"
      >
        {/* Top label */}
        <motion.div variants={item} className="flex items-center gap-4">
          <span className="h-px w-12 bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Based in {SITE_CONFIG.location}
          </span>
        </motion.div>

        {/* Center name */}
        <motion.div variants={item} className="my-auto py-12">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold uppercase tracking-[-0.02em] font-display leading-[0.9]">
            Martín
            <br />
            Giando
          </h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="max-w-sm text-lg text-muted-foreground leading-relaxed">
            {SITE_CONFIG.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
