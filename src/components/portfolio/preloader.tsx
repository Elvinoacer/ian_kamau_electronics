"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePortfolioStore } from "@/store/portfolio-store";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const BOOT_LINES = [
  "ENGINEERING PORTFOLIO — v2.0",
  "LOADING SYSTEM ARCHITECTURE",
  "CALIBRATING SENSORS",
  "ESTABLISHING TELEMETRY LINK",
  "SYSTEM READY",
];

/**
 * Cinematic boot-sequence preloader: mono boot log, percentage counter and a
 * progress bar, then a curtain wipe that reveals the site. Runs ~2.2s,
 * collapses to a quick fade under prefers-reduced-motion.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const setLoaded = usePortfolioStore((s) => s.setLoaded);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Instant reveal for reduced-motion users.
    if (reduced) {
      const quick = window.setTimeout(() => {
        setLoaded(true);
        setVisible(false);
      }, 80);
      return () => window.clearTimeout(quick);
    }

    const counter = { value: 0 };
    const lines = root.querySelectorAll<HTMLElement>("[data-boot-line]");
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaded(true);
        setVisible(false);
      },
    });

    tl.set(lines, { opacity: 0, y: 12 });

    tl.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.32,
      ease: "power2.out",
    });

    tl.to(
      counter,
      {
        value: 100,
        duration: 2.1,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(counter.value)).padStart(3, "0");
          }
        },
      },
      0
    );

    tl.to(
      barRef.current,
      { scaleX: 1, duration: 2.1, ease: "power2.inOut" },
      0
    );

    // Curtain wipe up
    tl.to(root, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.25,
    });

    return () => {
      tl.kill();
    };
  }, [reduced, setLoaded]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-[#060809] px-5 py-8 sm:px-10 sm:py-12"
    >
      {/* Boot log */}
      <div className="space-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 sm:text-xs">
        {BOOT_LINES.map((line, index) => (
          <p key={line} data-boot-line className="flex items-baseline gap-3">
            <span className="text-signal-green/80">{String(index + 1).padStart(2, "0")}</span>
            <span>{line}</span>
          </p>
        ))}
      </div>

      {/* Counter + progress */}
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Moi University · B.Eng EEE
          </span>
          <span className="font-display text-7xl font-medium leading-none tracking-tighter text-foreground sm:text-9xl">
            <span ref={counterRef}>000</span>
            <span className="text-signal-green">%</span>
          </span>
        </div>
        <div className="h-px w-full bg-foreground/10">
          <div
            ref={barRef}
            className="h-px w-full origin-left scale-x-0 bg-signal-green"
          />
        </div>
      </div>
    </div>
  );
}
