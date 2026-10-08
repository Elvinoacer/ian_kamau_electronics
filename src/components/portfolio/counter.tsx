"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  /** Duration of the count-up in seconds. */
  duration?: number;
}

/** Animated number that counts up when it scrolls into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  duration = 1.6,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const format = (v: number) => v.toFixed(decimals);

    if (reduced) {
      element.textContent = `${prefix}${format(value)}${suffix}`;
      return;
    }

    const state = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        value,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          element.textContent = `${prefix}${format(state.value)}${suffix}`;
        },
        scrollTrigger: { trigger: element, start: "top 92%", once: true },
      });
    }, element);

    return () => ctx.revert();
  }, [value, prefix, suffix, decimals, duration, reduced]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {reduced ? value.toFixed(decimals) : (0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
