"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

function ListBlock({
  label,
  items,
  accent,
}: {
  label: string;
  items?: string[];
  accent?: boolean;
}) {
  if (!items?.length) return null;
  return (
    <div className="border-t border-border pt-5">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
        {label}
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
          >
            <span
              aria-hidden="true"
              className={accent ? "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-amber" : "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-green/70"}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Banner image with a graceful gradient fallback, keyed per project. */
function ModalBannerImage({ project }: { project: Project }) {
  return (
    <>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="100vw"
          quality={80}
          className="img-editorial object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-surface to-background" />
      )}
    </>
  );
}

/** Full-screen engineering case study overlay with staged content reveals. */
export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    scrollRef.current?.scrollTo({ top: 0 });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key="case-study"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — case study`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[150] bg-background/95 backdrop-blur-md"
        >
          {/* Banner image */}
          <div className="relative h-[34vh] min-h-[240px] overflow-hidden">
            {project ? <ModalBannerImage project={project} /> : null}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-signal-green hover:text-signal-green focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute bottom-5 left-4 right-4 sm:left-8 sm:right-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                {project.year} · {project.status}
              </p>
              <h2 className="max-w-4xl font-display text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Scrollable case study body */}
          <div
            ref={scrollRef}
            data-lenis-prevent
            className="h-[calc(100%-34vh)] min-h-0 overflow-y-auto scrollbar-technical"
          >
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
              {/* Meta grid */}
              <motion.dl
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-12 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4"
              >
                {[
                  ["Role", project.role],
                  ["Duration", project.duration],
                  ["Team", project.teamSize ? `${project.teamSize} member${project.teamSize > 1 ? "s" : ""}` : "Solo"],
                  ["Domains", project.categories.join(" · ")],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm leading-snug text-foreground/90">{value}</dd>
                  </div>
                ))}
              </motion.dl>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="space-y-5"
              >
                <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  {project.subtitle}
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  <p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                      Problem —{" "}
                    </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                      Objective —{" "}
                    </span>
                    {project.objective}
                  </p>
                  <p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                      Solution —{" "}
                    </span>
                    {project.solution}
                  </p>
                </div>
              </motion.div>

              {/* Metrics */}
              {project.metrics?.length ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 lg:grid-cols-5"
                >
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-surface p-4">
                      <p className="font-display text-xl font-medium tracking-tight text-signal-green sm:text-2xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-signal-amber/80">
                        {metric.verified ? "Verified" : "Placeholder metric"}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {/* Detail blocks */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-12 space-y-8"
              >
                <ListBlock label="Engineering requirements" items={project.requirements} />
                <ListBlock label="Constraints" items={project.constraints} accent />
                <ListBlock label="Hardware" items={project.hardware} />
                <ListBlock label="Software & tools" items={project.software} />
                <ListBlock label="Engineering concepts" items={project.engineeringConcepts} />
                <ListBlock label="My contribution" items={project.contribution} />
                <ListBlock label="Testing programme" items={project.testing} />
                <ListBlock label="Results" items={project.results} />
                <ListBlock label="Challenges encountered" items={project.challenges} accent />
                <ListBlock label="Lessons learned" items={project.lessons} />
                <ListBlock label="Future improvements" items={project.futureImprovements} />
              </motion.div>

              <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-signal-green hover:text-signal-green"
                >
                  <ArrowUpRight className="h-4 w-4 rotate-90" />
                  Back to overview
                </button>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  Case study content follows placeholder policy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
