import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { currentlyLearning, philosophy, philosophyExpanded } from "@/data";

/**
 * Currently learning (spec section 24) + engineering philosophy
 * (spec section 23) — trajectory and working principles.
 */
export function TrajectorySection() {
  return (
    <section aria-labelledby="learning-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="learning-heading"
              eyebrow="Trajectory"
              title="Currently learning"
              description="Deliberate skill development aligned with the graduate roles I am targeting."
            />
            <ul className="mt-8 space-y-3">
              {currentlyLearning.map((item, i) => (
                <Reveal key={item.topic} delay={0.04 * i}>
                  <li className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">
                        {item.topic}
                      </p>
                      <span className="shrink-0 rounded-sm border border-signal-amber/40 bg-signal-amber/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-signal-amber">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Method"
              title="How I approach engineering"
            />
            <Reveal delay={0.1}>
              <div className="relative mt-8 overflow-hidden rounded-lg border border-border bg-card p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-grid-fine opacity-50"
                />
                <blockquote className="relative">
                  <p className="text-balance font-sans text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                    “{philosophy}”
                  </p>
                  <footer className="mt-6 border-t border-border pt-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {philosophyExpanded}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
