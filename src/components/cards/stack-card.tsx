"use client";

import { motion } from "framer-motion";
import type { StackCategory } from "@/data/stack";

interface StackCardProps {
  category: StackCategory;
  index: number;
}

export function StackCard({ category, index }: StackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-foreground shadow-brutalist bg-card"
    >
      {/* Category name */}
      <div className="px-5 py-4">
        <h3 className="font-display text-base font-bold uppercase tracking-tight">
          {category.name}
        </h3>
      </div>

      {/* Separator */}
      <div className="border-t border-foreground" />

      {/* Tech items */}
      <div className="px-5 py-5">
        <p className="font-mono text-sm leading-relaxed text-muted-foreground">
          {category.items.join(" · ")}
        </p>
      </div>
    </motion.div>
  );
}
