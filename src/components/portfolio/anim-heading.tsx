"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePortfolioStore } from "@/store/portfolio-store";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimHeadingProps {
  children: string;
  as?: ElementType;
  className?: string;
  /** Play immediately once the page preloader finishes (hero usage). */
  playOnLoad?: boolean;
  delay?: number;
  stagger?: number;
  id?: string;
}

/**
 * Split-line heading: every line is wrapped in an overflow mask and slides up
 * with a stagger when it enters the viewport.
 */
export function AnimHeading({
  children,
  as: Tag = "h2",
  className,
  playOnLoad = false,
  delay = 0,
  stagger = 0.08,
  id,
}: AnimHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const loaded = usePortfolioStore((s) => s.loaded);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const lines = element.querySelectorAll<HTMLElement>("[data-line-inner]");
    if (!lines.length) return;

    if (reduced) {
      gsap.set(lines, { yPercent: 0 });
      return;
    }

    if (playOnLoad && !loaded) return; // wait for preloader

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.1,
          delay: playOnLoad ? delay : delay,
          stagger,
          ease: "power4.out",
          scrollTrigger: playOnLoad
            ? undefined
            : {
                trigger: element,
                start: "top 88%",
                once: true,
              },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [loaded, reduced, playOnLoad, delay, stagger]);

  const lines = children.split("\n");

  return (
    <div ref={ref}>
      <Tag id={id} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span data-line-inner className="block will-change-transform">
              {line || "\u00A0"}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}

/** Simple fade + rise on scroll into view. */
export function FadeIn({ children, className, delay = 0, y = 28, as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [reduced, delay, y]);

  return (
    <div ref={ref}>
      <Tag className={cn(className)}>{children}</Tag>
    </div>
  );
}
