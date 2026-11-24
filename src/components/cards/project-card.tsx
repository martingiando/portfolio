"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function CardShell({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const base = "group block border border-foreground shadow-brutalist bg-card";
  const pressable = `${base} transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none`;

  if (project.caseStudy) {
    return (
      <Link href={`/work/${project.caseStudy.slug}`} className={pressable}>
        {children}
      </Link>
    );
  }
  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={pressable}
      >
        {children}
      </a>
    );
  }
  return <div className={base}>{children}</div>;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;
  const isLink = !!(project.caseStudy || project.href);

  function setPlaying(card: HTMLElement, playing: boolean) {
    const video = card.querySelector("video");
    if (!video) return;
    if (!playing) return video.pause();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // play() rejects when the pointer leaves before the file loads
    video.play().catch(() => {});
  }

  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`motion-reduce:transform-none! ${isEven ? "md:mt-24" : ""}`}
      onMouseEnter={(e) => setPlaying(e.currentTarget, true)}
      onMouseLeave={(e) => setPlaying(e.currentTarget, false)}
    >
      <CardShell project={project}>
        {/* Image container */}
        <div className="relative aspect-4/3 overflow-hidden bg-muted">
          {/* Fallback when no image: painted behind it */}
          <div
            className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-muted-foreground/20"
            aria-hidden="true"
          >
            {project.id}
          </div>
          <Image
            src={project.image}
            alt={project.alt ?? `${project.title} — ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-transform duration-500 ${isLink ? "group-hover:scale-105" : ""}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {project.video && (
            <video
              src={project.video}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 motion-safe:group-hover:opacity-100"
            />
          )}
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-2 md:gap-4 border-t border-foreground px-5 py-4">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </p>
            {project.caseStudy && (
              <p className="mt-2 leading-relaxed">
                {project.caseStudy.summary}
              </p>
            )}
            {project.tags && project.tags.length > 0 && (
              <p className="font-mono text-xs text-muted-foreground mt-2">
                {project.tags.join(" · ")}
              </p>
            )}
            {isLink && (
              <p className="mt-3 text-accent underline underline-offset-4">
                {project.caseStudy ? "Read the case study" : "Visit the site"}
              </p>
            )}
          </div>
          <span className="font-mono text-xs md:text-sm text-muted-foreground whitespace-nowrap">
            {project.year}
          </span>
        </div>
      </CardShell>
    </motion.div>
  );
}
