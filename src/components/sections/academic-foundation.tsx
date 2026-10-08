import Link from "next/link";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { education, labs, timeline } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Academic foundation (spec section 10.7) — coursework breadth,
 * laboratory exposure and the engineering career timeline in
 * compact homepage form.
 */
export function AcademicFoundation() {
  return (
    <section
      aria-labelledby="academic-heading"
      className="border-b border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="academic-heading"
          eyebrow="Academic foundation"
          title="University training, laboratories & trajectory"
          description={`${education.degree} — ${education.institution}, ${education.location}.`}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Coursework categories */}
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                Coursework breadth
              </h3>
              <ul className="mt-4 space-y-4">
                {(education.coursework ?? []).map((cat) => (
                  <li key={cat.category}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {cat.category}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                      {cat.modules.slice(0, 4).join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="mt-6 font-mono text-[11px] text-primary"
              >
                <Link href="/education">
                  Full academic record
                  <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Laboratory exposure */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-border bg-card p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                Laboratory exposure
              </h3>
              <ul className="mt-4 space-y-3">
                {labs.map((lab) => (
                  <li key={lab.id} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal-blue/70"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground/90">
                        {lab.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {lab.work.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Career timeline */}
          <Reveal delay={0.16}>
            <div className="h-full rounded-lg border border-border bg-card p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                Career timeline
              </h3>
              <ol className="mt-4 space-y-0">
                {timeline.map((entry, i) => (
                  <li key={entry.year} className="relative flex gap-4 pb-5 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute left-[5px] top-3 h-full w-px bg-border last:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="relative mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-primary bg-background"
                    />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {entry.year}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground/90">
                        {entry.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
