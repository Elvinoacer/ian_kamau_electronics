"use client";

import Image from "next/image";
import { Counter } from "../counter";
import { FadeIn } from "../anim-heading";
import { profile } from "@/data/profile";

const METRICS = [
  {
    label: "Degree",
    value: "B.Eng. EEE",
    detail: "Moi University · Eldoret",
    counter: false,
  },
  {
    label: "Engineering projects",
    value: 5,
    suffix: "+",
    detail: "Prototype & academic builds",
    counter: true,
    placeholder: true,
  },
  {
    label: "Industrial attachment",
    value: 12,
    suffix: " wks",
    detail: "Electrical maintenance exposure",
    counter: true,
    placeholder: true,
  },
  {
    label: "Core focus",
    value: "Embedded",
    detail: "Power · Automation · IoT",
    counter: false,
  },
];

/**
 * Candidate snapshot — an editorial stat strip directly under the hero.
 * Honest placeholder markers follow the spec's content-integrity policy.
 */
export function Snapshot() {
  return (
    <section aria-label="Candidate snapshot" className="relative border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
        {METRICS.map((metric, index) => (
          <FadeIn
            key={metric.label}
            delay={index * 0.08}
            className="group border-b border-border p-5 last:border-b-0 sm:p-7 lg:border-b-0"
          >
            <p className="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="min-w-0">{metric.label}</span>
              {metric.placeholder ? (
                <span className="rounded-sm border border-signal-amber/40 px-1.5 py-0.5 text-[8px] text-signal-amber/90">
                  Placeholder
                </span>
              ) : null}
            </p>
            <p className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {metric.counter ? (
                <Counter value={metric.value as number} suffix={metric.suffix} />
              ) : (
                metric.value
              )}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{metric.detail}</p>
          </FadeIn>
        ))}
      </div>

      {/* Portrait strip */}
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <FadeIn className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/11]">
          <div className="group relative h-full w-full overflow-hidden">
            <Image
              src="/images/engineer.jpg"
              alt="Electrical engineer working on industrial control equipment"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              quality={80}
              className="img-editorial img-editorial-hover object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/80">
              Field engineering practice — illustrative imagery
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
            01 / Profile
          </p>
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {profile.summary} — with practical exposure to{" "}
            <span className="text-signal-green">circuit design</span>,{" "}
            <span className="text-signal-green">electrical machines</span>,{" "}
            <span className="text-signal-green">instrumentation</span> and{" "}
            <span className="text-signal-green">control systems</span> across five years of
            university training, laboratory work and industrial attachment.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
            {profile.availability}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
