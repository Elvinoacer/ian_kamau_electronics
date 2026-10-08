"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { philosophy, philosophyExpanded } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Engineering philosophy — a manifesto that illuminates word by word as the
 * visitor scrolls through it, closing the narrative before the contact CTA.
 */
export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const words = section.querySelectorAll<HTMLElement>("[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const words = philosophy.split(" ");

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-label="Engineering philosophy"
      className="relative overflow-hidden border-t border-border py-24 sm:py-36"
    >
      {/* Ambient PCB texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-schematic opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.24em] text-signal-green sm:text-xs">
          08 / Engineering philosophy
        </p>

        <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span data-word className="inline-block will-change-[opacity]">
                {word}
              </span>
              {index < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {philosophyExpanded}
        </p>
      </div>
    </section>
  );
}
