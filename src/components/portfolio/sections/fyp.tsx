"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "../section-header";
import { ParallaxMedia } from "../parallax-media";
import { FadeIn, AnimHeading } from "../anim-heading";
import { Counter } from "../counter";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const fyp = projects[0];

const METRIC_COUNTERS = [
  { label: "Packet delivery in test", value: 97, suffix: "%" },
  { label: "Telemetry interval", value: 5, suffix: " s" },
  { label: "Alert latency", value: 10, prefix: "<", suffix: " s" },
];

/** System architecture diagram with staged draw-in animation. */
function ArchitectureDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const nodes = svg.querySelectorAll<SVGElement>("[data-node]");
    const links = svg.querySelectorAll<SVGLineElement>("[data-link]");
    const signals = svg.querySelectorAll<SVGElement>("[data-signal]");

    if (reduced) {
      gsap.set(nodes, { opacity: 1 });
      gsap.set(links, { strokeDashoffset: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "top 80%", once: true },
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(nodes, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.14 });

      links.forEach((link) => {
        const length = link.getTotalLength();
        gsap.set(link, { strokeDasharray: length, strokeDashoffset: length });
      });
      tl.to(
        links,
        { strokeDashoffset: 0, duration: 0.45, stagger: 0.12, ease: "power1.inOut" },
        0.25
      );

      // Travelling pulse on the telemetry path
      tl.fromTo(
        signals,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, stagger: 0.5 },
        1.2
      );
    }, svg);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div className="rounded-lg border border-border bg-surface/60 p-4 sm:p-6">
      <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
        <Cpu className="h-3.5 w-3.5" />
        Proposed system architecture
      </p>
      <svg
        ref={ref}
        viewBox="0 0 340 580"
        className="h-auto w-full"
        role="img"
        aria-label="Block diagram: sensors feed an ESP32 which transmits over MQTT to a server and monitoring dashboard"
      >
        {/* Connectors */}
        {[
          { x1: 170, y1: 44, x2: 58, y2: 78 },
          { x1: 170, y1: 44, x2: 170, y2: 78 },
          { x1: 170, y1: 44, x2: 282, y2: 78 },
          { x1: 58, y1: 114, x2: 170, y2: 156 },
          { x1: 170, y1: 114, x2: 170, y2: 156 },
          { x1: 282, y1: 114, x2: 170, y2: 156 },
          { x1: 170, y1: 200, x2: 170, y2: 232 },
          { x1: 170, y1: 264, x2: 170, y2: 296 },
          { x1: 170, y1: 328, x2: 170, y2: 360 },
          { x1: 170, y1: 392, x2: 170, y2: 424 },
          { x1: 170, y1: 456, x2: 170, y2: 488 },
        ].map((l, i) => (
          <line
            key={i}
            data-link
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="currentColor"
            className="text-muted-foreground/50"
            strokeWidth="1.2"
          />
        ))}

        {/* Nodes */}
        <g data-node>
          <rect x="95" y="8" width="150" height="36" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="31" textAnchor="middle" className="fill-foreground font-mono text-[10px]">
            TRANSFORMER / RIG
          </text>
        </g>
        <g data-node>
          <rect x="8" y="78" width="100" height="36" rx="3" className="fill-elevated stroke-border" />
          <text x="58" y="101" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            CURRENT SENSOR
          </text>
        </g>
        <g data-node>
          <rect x="120" y="78" width="100" height="36" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="101" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            VOLTAGE CIRCUIT
          </text>
        </g>
        <g data-node>
          <rect x="232" y="78" width="100" height="36" rx="3" className="fill-elevated stroke-border" />
          <text x="282" y="101" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            TEMP SENSOR
          </text>
        </g>
        <g data-node>
          <rect
            x="95"
            y="156"
            width="150"
            height="44"
            rx="3"
            className="fill-[#13241a] stroke-[#4ade80]"
            strokeWidth="1.5"
          />
          <text x="170" y="184" textAnchor="middle" className="fill-[#4ade80] font-mono text-[11px]">
            ESP32 MCU
          </text>
        </g>
        <g data-node>
          <rect x="85" y="232" width="170" height="32" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="253" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            SIGNAL PROCESSING
          </text>
        </g>
        <g data-node>
          <rect x="85" y="296" width="170" height="32" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="317" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            WI-FI / MQTT
          </text>
        </g>
        <g data-node>
          <rect x="85" y="360" width="170" height="32" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="381" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            LOCAL / CLOUD SERVER
          </text>
        </g>
        <g data-node>
          <rect x="85" y="424" width="170" height="32" rx="3" className="fill-elevated stroke-border" />
          <text x="170" y="445" textAnchor="middle" className="fill-foreground/80 font-mono text-[9px]">
            MONITORING DASHBOARD
          </text>
        </g>
        <g data-node>
          <rect
            x="95"
            y="488"
            width="150"
            height="36"
            rx="3"
            className="fill-[#2a2113] stroke-[#fbbf24]"
            strokeWidth="1.2"
          />
          <text x="170" y="511" textAnchor="middle" className="fill-[#fbbf24] font-mono text-[10px]">
            ALERTS / HISTORY
          </text>
        </g>

        {/* Signal pulses */}
        <circle data-signal r="3" cx="170" cy="228" className="fill-[#4ade80]" />
        <circle data-signal r="3" cx="170" cy="358" className="fill-[#4ade80]" opacity="0" />
        <circle data-signal r="3" cx="170" cy="480" className="fill-[#fbbf24]" opacity="0" />
      </svg>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
        Illustrative block diagram — low-cost prototype scope
      </p>
    </div>
  );
}

/**
 * Final-year project deep dive — sticky visual column against scrolling
 * engineering narrative, draw-in architecture diagram and live counters.
 */
export function FinalYearProject() {
  return (
    <section
      id="fyp"
      aria-label="Final-year project"
      className="relative border-t border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          eyebrow="Final-year project"
          title={"The flagship\nbuild."}
          note={
            <>
              IoT transformer health
              <br />
              monitoring system
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Sticky visual column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ParallaxMedia
              src="/images/transformer.jpg"
              alt="Distribution transformer installed in a substation"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 42vw, 100vw"
              reveal
            />
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
              Fig. 01 — Distribution transformer, monitoring target · illustrative
            </p>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
              {METRIC_COUNTERS.map((metric) => (
                <div key={metric.label} className="bg-background p-4">
                  <p className="font-display text-2xl font-medium tracking-tight text-signal-green sm:text-3xl">
                    <Counter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </p>
                  <p className="mt-2 text-[10px] leading-snug text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-signal-amber/80">
              Placeholder metrics — pending final test data
            </p>
          </div>

          {/* Narrative column */}
          <div className="space-y-12">
            <AnimHeading
              as="h3"
              className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              {fyp.title}
            </AnimHeading>

            <FadeIn className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              <p>{fyp.problem}</p>
              <p>{fyp.objective}</p>
            </FadeIn>

            <FadeIn>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                Engineering objectives
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {fyp.requirements?.slice(0, 8).map((requirement, index) => (
                  <li
                    key={requirement}
                    className="flex items-start gap-3 rounded-md border border-border bg-background/60 px-4 py-3 text-[13px] leading-relaxed text-foreground/80"
                  >
                    <span className="font-mono text-[10px] text-signal-green/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {requirement}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <ArchitectureDiagram />
            </FadeIn>

            <FadeIn className="border-l-2 border-signal-green pl-5">
              <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
                “{fyp.lessons?.[0]}”
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Key lesson — final-year project
              </p>
            </FadeIn>

            <FadeIn className="rounded-md border border-border bg-background/60 p-5 sm:p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-amber">
                Iteration log
              </p>
              <ol className="space-y-2.5">
                {fyp.iterations?.map((iteration) => (
                  <li
                    key={iteration}
                    className="flex items-baseline gap-3 text-[13px] leading-relaxed text-foreground/80"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {iteration}
                    </span>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
