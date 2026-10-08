"use client";

import { Factory } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "../section-header";
import { ParallaxMedia } from "../parallax-media";
import { FadeIn } from "../anim-heading";
import { Marquee } from "../marquee";

const attachment = experience[0];

/**
 * Industrial attachment — where theory met operating equipment. Full-bleed
 * control-room imagery, honest exposure list and an equipment ticker.
 */
export function Experience() {
  return (
    <section id="experience" aria-label="Industrial experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="05"
          eyebrow="Industrial attachment"
          title={"Where theory met\noperating equipment."}
          note={
            <>
              12 weeks · electrical
              <br />
              maintenance department
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="min-w-0">
            <FadeIn>
              <ParallaxMedia
                src="/images/control-panel.jpg"
                alt="Industrial electrical control panel with contactors and protection devices"
                className="aspect-[3/2]"
                sizes="(min-width: 1024px) 58vw, 100vw"
                parallax={12}
              />
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
                Fig. 02 — Industrial control panel, maintenance exposure · illustrative
              </p>

              <div className="mt-8 overflow-hidden border-y border-border py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <Marquee
                  items={attachment.equipment ?? []}
                  duration={30}
                  aria-label="Equipment encountered during attachment"
                />
              </div>
            </FadeIn>
          </div>

          <div className="min-w-0 flex flex-col justify-center">
            <FadeIn>
              <p className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-signal-green">
                  <Factory className="h-3.5 w-3.5" />
                  {attachment.role}
                </span>
                <span aria-hidden="true">/</span>
                <span>
                  {attachment.startDate} — {attachment.endDate}
                </span>
              </p>
              <h3 className="mb-5 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {attachment.organization}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80 sm:text-base">
                {attachment.summary}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
                Supervised exposure
              </p>
              <ul className="space-y-2.5">
                {attachment.responsibilities.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-border/60 pb-2.5 text-[13px] leading-relaxed text-foreground/80"
                  >
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-green/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.12} className="mt-8 border-l-2 border-signal-amber pl-5">
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                {attachment.learning}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
