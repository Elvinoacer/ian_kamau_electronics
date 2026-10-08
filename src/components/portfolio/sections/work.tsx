"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeader } from "../section-header";
import { ParallaxMedia } from "../parallax-media";
import { FadeIn } from "../anim-heading";
import { CaseStudyModal } from "./case-study-modal";
import { cn } from "@/lib/utils";

/**
 * Selected engineering work — alternating large editorial media cards that
 * open full-screen case studies. Images carry the narrative; each card states
 * problem, domain and contribution up front.
 */
export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" aria-label="Selected engineering work" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title={"Engineering\nthat had to work."}
          note={
            <>
              5 builds · prototype →
              <br />
              tested → documented
            </>
          }
        />

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <FadeIn key={project.slug} className="group">
                <article
                  className={cn(
                    "grid items-center gap-8 lg:gap-14",
                    reversed ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className={cn(
                      "relative block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-ring",
                      reversed && "lg:order-2"
                    )}
                    aria-label={`Open case study — ${project.title}`}
                  >
                    <ParallaxMedia
                      src={project.image ?? "/images/pcb-macro.jpg"}
                      alt={project.imageAlt ?? project.title}
                      className="aspect-[16/10]"
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      grayscaleHover
                      parallax={12}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
                      <span className="text-signal-green">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {project.status}
                    </span>
                    <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </button>

                  <div className={cn(reversed && "lg:order-1")}>
                    <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="text-signal-green">{project.year}</span>
                      <span aria-hidden="true">/</span>
                      <span>{project.categories.join(" · ")}</span>
                    </p>
                    <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-signal-green sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mb-6 max-w-md text-sm leading-relaxed text-foreground/75 sm:text-base">
                      {project.problem}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span>
                        <span className="text-foreground/60">Role — </span>
                        {project.role}
                      </span>
                      <span>
                        <span className="text-foreground/60">Team — </span>
                        {project.teamSize}
                      </span>
                      <span>
                        <span className="text-foreground/60">Duration — </span>
                        {project.duration}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground underline decoration-signal-green/50 decoration-1 underline-offset-8 transition-colors hover:text-signal-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      View engineering case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
