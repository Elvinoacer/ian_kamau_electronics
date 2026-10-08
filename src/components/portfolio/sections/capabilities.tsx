"use client";

import { Cpu, Zap, Gauge, Waves, BookOpen } from "lucide-react";
import { focusAreas, currentlyLearning } from "@/data/profile";
import { SectionHeader } from "../section-header";
import { FadeIn } from "../anim-heading";

const ICONS = [Cpu, Zap, Gauge, Waves];

/**
 * Engineering focus areas + the current learning frontier. Hover states make
 * the four disciplines feel like live subsystems rather than static cards.
 */
export function Capabilities() {
  return (
    <section id="capabilities" aria-label="Engineering focus areas" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="04"
          eyebrow="Capabilities"
          title={"Four disciplines,\none systems mindset."}
          note={
            <>
              Embedded · Power
              <br />
              Automation · Instrumentation
            </>
          }
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {focusAreas.map((area, index) => {
            const Icon = ICONS[index] ?? Cpu;
            return (
              <FadeIn key={area.title} delay={index * 0.06}>
                <article className="group relative h-full bg-background p-6 transition-colors duration-500 hover:bg-surface sm:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-signal-green transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-signal-green transition-colors duration-500 group-hover:border-signal-green/50">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-foreground/75">
                    {area.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {area.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="rounded-sm border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:border-signal-green/30 group-hover:text-foreground/80"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Currently learning */}
        <FadeIn className="mt-16">
          <div className="rounded-lg border border-border bg-surface/60 p-6 sm:p-8">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-amber">
              <BookOpen className="h-4 w-4" />
              Currently on the bench — learning trajectory
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentlyLearning.map((item) => (
                <div key={item.topic} className="border-l border-border pl-4">
                  <p className="mb-1.5 text-sm font-medium text-foreground">{item.topic}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-signal-green/80">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
