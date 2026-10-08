"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SectionHeader } from "../section-header";

gsap.registerPlugin(ScrollTrigger);

/**
 * Career trajectory 2021 → 2026. A progress rail fills as the visitor
 * scrolls, activating each year like a timeline scrubber.
 */
export function Trajectory() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rail,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      section.querySelectorAll<HTMLElement>("[data-timeline-item]").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 82%", once: true },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="trajectory"
      aria-label="Career trajectory"
      className="relative border-t border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="07"
          eyebrow="Trajectory"
          title={"Foundation to\nfinal-year."}
          note={
            <>
              Moi University · B.Eng
              <br />
              2021 — 2026
            </>
          }
        />

        <div className="relative ml-2 sm:ml-6">
          {/* Rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-0 top-2 w-px bg-border sm:left-4"
          >
            <div
              ref={railRef}
              className="h-full w-px origin-top scale-y-0 bg-signal-green will-change-transform"
            />
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                data-timeline-item
                className="relative pl-8 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full border border-signal-green bg-background sm:left-4"
                />
                <div className="grid gap-2 lg:grid-cols-[120px_1fr] lg:gap-8">
                  <p className="font-display text-3xl font-medium tracking-tight text-foreground/30 transition-colors sm:text-4xl">
                    {entry.year}
                  </p>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
                      {entry.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/75">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
