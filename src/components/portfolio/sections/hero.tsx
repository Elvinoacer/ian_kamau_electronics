"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { usePortfolioStore } from "@/store/portfolio-store";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Magnetic } from "../magnetic";
import { profile } from "@/data/profile";

/**
 * Full-viewport cinematic hero: dusk transmission imagery, giant split-line
 * name reveal, live status readout and magnetic CTAs. Parallax fades the
 * content as the user scrolls away.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const loaded = usePortfolioStore((s) => s.loaded);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!root || !bg || !content) return;

    if (reduced) {
      gsap.set([bg, content], { clearProps: "all" });
      return;
    }
    if (!loaded) return;

    const ctx = gsap.context(() => {
      // Entrance choreography
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        bg,
        { scale: 1.18, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" },
        0
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          0.25
        )
        .fromTo(
          "[data-hero-line]",
          { yPercent: 118 },
          { yPercent: 0, duration: 1.25, stagger: 0.14 },
          0.35
        )
        .fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.85
        );

      // Scroll parallax — background drifts, content lifts + fades
      gsap.to(bg, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(content, {
        yPercent: -14,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "78% top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, [loaded, reduced]);

  return (
    <section
      ref={rootRef}
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Cinematic backdrop */}
      <div ref={bgRef} className="absolute inset-[-10%] will-change-transform">
        <Image
          src="/images/hero-grid.jpg"
          alt="High-voltage electricity transmission towers at dusk"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/45 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </div>

      {/* Technical side annotations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50 lg:block"
      >
        Grid ref 0.5160° N · 35.2768° E — Eldoret, Kenya
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50 lg:block"
      >
        50 Hz · Three-phase · 11 kV / 415 V
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-28 sm:px-6"
      >
        <p
          data-hero-eyebrow
          className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-green sm:text-xs"
        >
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-signal-green" />
            Open to graduate opportunities
          </span>
          <span className="text-muted-foreground/60">/</span>
          <span className="text-foreground/80">
            Moi University · B.Eng. Electrical &amp; Electronics
          </span>
        </p>

        <h1 className="font-display font-medium leading-[0.86] tracking-[-0.02em] text-foreground">
          <span className="block overflow-hidden pb-[0.05em] text-[19vw] sm:text-[17vw] lg:text-[11.5rem]">
            <span data-hero-line className="block will-change-transform">
              IAN
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.05em] text-[19vw] sm:text-[17vw] lg:text-[11.5rem]">
            <span data-hero-line className="block will-change-transform text-outline">
              KAMAU
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <p
            data-hero-fade
            className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg"
          >
            Electrical &amp; Electronics Engineering graduate focused on{" "}
            <span className="text-signal-green">embedded systems</span>,{" "}
            <span className="text-signal-green">power systems</span> and{" "}
            <span className="text-signal-green">industrial automation</span> — building,
            testing and analyzing systems where electronics, software and the physical
            world meet.
          </p>

          <div data-hero-fade className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="#work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-primary px-7 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Explore engineering work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic strength={6}>
              <a
                href={profile.cvUrl}
                download="Ian-Kamau-CV.pdf"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-border bg-background/60 px-7 font-mono text-xs uppercase tracking-[0.14em] text-foreground backdrop-blur-sm transition-colors hover:border-signal-green/60 hover:text-signal-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
            </Magnetic>
          </div>
        </div>

        <div
          data-hero-fade
          className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border/70 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 sm:text-[11px] lg:mt-16"
        >
          <span>Embedded · Power · Automation · IoT</span>
          <span className="flex items-center gap-2">
            <ArrowUpRight className="h-3.5 w-3.5 text-signal-green/80" />
            Kenya · Available worldwide
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60"
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-foreground/10">
          <span className="scroll-cue-line block h-full w-px bg-signal-green" />
        </span>
      </div>
    </section>
  );
}
