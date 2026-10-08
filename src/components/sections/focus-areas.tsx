import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { focusAreas } from "@/data";
import { Cpu, Zap, Gauge, Radio } from "lucide-react";

const icons = [Cpu, Zap, Gauge, Radio];

/**
 * Engineering capabilities (spec section 14) — four focus cards.
 */
export function FocusAreaSection() {
  return (
    <section aria-labelledby="focus-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="focus-heading"
          eyebrow="Capabilities"
          title="Engineering focus areas"
          description="Four disciplines where my training, laboratory work and project experience overlap."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={area.title} delay={0.05 * i}>
                <article className="group h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {area.interests.map((interest) => (
                      <li
                        key={interest}
                        className="rounded-sm border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] tracking-[0.02em] text-foreground/70"
                      >
                        {interest}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
