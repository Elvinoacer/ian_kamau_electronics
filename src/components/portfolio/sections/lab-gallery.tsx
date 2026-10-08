"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { labs } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

const LAB_CARDS = [
  {
    src: "/images/machines-lab.jpg",
    alt: "Electrical machines laboratory test bench with motors",
    lab: labs[0],
    caption: "Induction motors, DC machines and transformers under load test.",
  },
  {
    src: "/images/oscilloscope.jpg",
    alt: "Oscilloscope displaying circuit waveforms",
    lab: labs[1],
    caption: "Op-amp, filter and oscillator behaviour captured on the scope.",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Electronics workbench with prototyping tools",
    lab: labs[4],
    caption: "Microcontroller programming — GPIO, ADC, timers, UART, I2C, SPI.",
  },
  {
    src: "/images/hero-alt.jpg",
    alt: "High voltage transmission infrastructure",
    lab: labs[5],
    caption: "Three-phase systems, fault analysis and protection fundamentals.",
  },
  {
    src: "/images/grid-night.jpg",
    alt: "Power grid monitoring screens at night",
    lab: labs[3],
    caption: "Sensor calibration, measurement error and data acquisition.",
  },
];

/**
 * Laboratory & practical exposure — a pinned horizontal film-strip on
 * desktop, a native swipeable rail on touch/small screens. Imagery carries
 * the laboratory narrative with technical captions.
 */
export function LabGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (reduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "x" });
      };
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="labs"
      aria-label="Laboratory and practical exposure"
      className="relative overflow-hidden border-t border-border bg-surface/40 py-16 lg:py-0"
    >
      <div className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto mb-10 flex w-full max-w-6xl items-end justify-between gap-6 px-4 sm:px-6">
          <div>
            <p className="mb-4 flex items-center gap-4 border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              <span className="text-signal-green">06</span>
              <span>Laboratory &amp; practical exposure</span>
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-5xl">
              Five years inside
              <br />
              <span className="text-outline">engineering labs.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground lg:block">
            Machines, electronics, control, instrumentation and embedded systems —
            the practical foundation behind every project.
          </p>
        </div>

        {/* Horizontal track */}
        <div className="overflow-x-auto scrollbar-technical lg:overflow-visible" data-lenis-prevent>
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-5 px-4 pb-4 sm:px-6 lg:gap-8 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pb-8"
          >
            {LAB_CARDS.map((card, index) => (
              <figure
                key={card.src}
                className="group relative w-[78vw] shrink-0 snap-center sm:w-[420px] lg:w-[460px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary sm:aspect-[4/4.4]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 460px, 78vw"
                    quality={78}
                    className="img-editorial img-editorial-hover object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/90 backdrop-blur-sm">
                    Lab {String(index + 1).padStart(2, "0")}
                  </span>
                  <figcaption className="absolute inset-x-4 bottom-4">
                    <p className="mb-1.5 font-display text-lg font-medium tracking-tight text-foreground">
                      {card.lab.title}
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/75">{card.caption}</p>
                  </figcaption>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {card.lab.work.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </figure>
            ))}
          </div>
        </div>

        {/* Progress rule */}
        <div className="mx-auto mt-8 hidden w-full max-w-6xl px-6 lg:block">
          <div className="h-px w-full bg-border">
            <div
              ref={progressRef}
              className="h-px w-full origin-left scale-x-0 bg-signal-green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
