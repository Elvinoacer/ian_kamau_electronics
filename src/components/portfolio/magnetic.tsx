"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Maximum displacement strength in pixels. */
  strength?: number;
}

/**
 * Magnetic hover — the wrapped element drifts toward the cursor and springs
 * back on leave. Automatically disabled on touch-only devices.
 */
export function Magnetic({ children, className, strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const xTo = gsap.quickTo(element, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      xTo(relX * strength * 2);
      yTo(relY * strength * 2);
    };

    const onLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced, strength]);

  return (
    <div ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
