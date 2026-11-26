"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Arrow } from "@/components/shared/icons";

function setPlaying(tile: HTMLElement, playing: boolean) {
  const video = tile.querySelector("video");
  if (!video) return;
  if (!playing) return video.pause();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  video.play().catch(() => {}); // rejects when the pointer leaves before the file loads
}

export function ProjectTile({
  project,
  className,
  contain = false,
}: {
  project: Project;
  className: string;
  contain?: boolean;
}) {
  const { caseStudy, href, video, tags } = project;
  const body = (
    <>
      <div className="relative min-h-[15rem] flex-1 overflow-hidden rounded-[1.4rem] bg-black/25">
        <Image
          src={project.image}
          alt={project.alt ?? `${project.title}, ${project.category}`}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={contain ? "object-contain" : "object-cover"}
        />
        {video && (
          <video
            src={video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-2 pt-4 pb-1">
        <div className="min-w-0">
          <h3 className="mg-display text-[clamp(1.5rem,2.3vw,2.2rem)]">{project.title}</h3>
          <p className="mg-mono mt-2 text-xs uppercase tracking-wider opacity-80">
            {project.category} · {project.year}
          </p>
          {caseStudy ? (
            <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed opacity-90">
              {caseStudy.summary}
            </p>
          ) : (
            tags && (
              <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed opacity-90">{tags.join(" · ")}</p>
            )
          )}
        </div>
        {(caseStudy || href) && (
          <span className="mg-pill shrink-0 bg-current/10 px-4 py-2.5 text-[0.7rem]">
            {caseStudy ? "Case study" : "Live site"} <Arrow />
          </span>
        )}
      </div>
    </>
  );

  const cls = `group mg-tile flex flex-col rounded-[2rem] p-3 ${className}`;
  const hover = {
    onPointerEnter: (e: React.PointerEvent<HTMLElement>) => setPlaying(e.currentTarget, true),
    onPointerLeave: (e: React.PointerEvent<HTMLElement>) => setPlaying(e.currentTarget, false),
  };

  if (caseStudy) {
    return (
      <Link href={`/work/${caseStudy.slug}`} data-cursor="View" className={cls} {...hover}>
        {body}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="Visit" className={cls} {...hover}>
        {body}
      </a>
    );
  }
  return <div className={cls}>{body}</div>;
}
