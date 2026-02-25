"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;
  const isGif = project.image.endsWith(".gif");
  const [hovered, setHovered] = useState(false);
  const [stillFrame, setStillFrame] = useState<string | null>(null);

  useEffect(() => {
    if (!isGif) return;
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      setStillFrame(canvas.toDataURL("image/png"));
    };
    img.src = project.image;
  }, [isGif, project.image]);

  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  const imageSrc = isGif
    ? hovered ? project.image : (stillFrame ?? project.image)
    : project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isEven ? "md:mt-24" : ""}
    >
      <Wrapper
        {...wrapperProps}
        className="group block border border-foreground shadow-brutalist bg-card transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent cursor-pointer"
        onMouseEnter={() => isGif && setHovered(true)}
        onMouseLeave={() => isGif && setHovered(false)}
      >
        {/* Image container */}
        <div className="relative aspect-4/3 overflow-hidden bg-muted">
          {isGif ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={`${project.title} — ${project.category}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
            />
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}
          {/* Fallback when no image */}
          <div className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-muted-foreground/20">
            {project.id}
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start justify-between border-t border-foreground px-5 py-4">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </p>
            {project.tags && project.tags.length > 0 && (
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {project.tags.join(" · ")}
              </p>
            )}
          </div>
          <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
            {project.year}
          </span>
        </div>
      </Wrapper>
    </motion.div>
  );
}
