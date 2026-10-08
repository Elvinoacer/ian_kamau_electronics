import Link from "next/link";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { TransformerMonitorDiagram } from "@/components/diagrams/transformer-monitor-diagram";
import { PlaceholderTag, ToolBadge } from "@/components/engineering/technical-labels";
import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Final-year project spotlight (spec sections 10.4 & 17) —
 * the portfolio's flagship case study, shown with architecture
 * and headline metrics on the homepage.
 */
export function FinalYearProject() {
  const fyp = projects.find((p) => p.type === "final-year-project");
  if (!fyp) return null;

  return (
    <section
      aria-labelledby="fyp-heading"
      className="border-b border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="fyp-heading"
          eyebrow="Flagship case study"
          title="Final-year engineering project"
          description="IoT-based distribution transformer health monitoring — a low-cost prototype measuring transformer operating parameters and streaming them to a remote dashboard."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <TransformerMonitorDiagram className="w-full text-foreground" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    {fyp.categories.join(" · ")}
                  </p>
                  <PlaceholderTag />
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {fyp.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {fyp.objective}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(fyp.software ?? []).slice(0, 6).map((tool) => (
                  <ToolBadge key={tool}>{tool}</ToolBadge>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-4 border-t border-border pt-5 sm:grid-cols-4">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Role
                  </dt>
                  <dd className="mt-1 text-xs text-foreground/90">
                    {fyp.role}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Team
                  </dt>
                  <dd className="mt-1 text-xs text-foreground/90">
                    {fyp.teamSize} students
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Duration
                  </dt>
                  <dd className="mt-1 text-xs text-foreground/90">
                    {fyp.duration}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Year
                  </dt>
                  <dd className="mt-1 text-xs text-foreground/90">{fyp.year}</dd>
                </div>
              </dl>

              <blockquote className="border-l-2 border-primary/60 pl-4 text-sm italic leading-relaxed text-foreground/80">
                “{fyp.lessons?.[0]}”
              </blockquote>

              <Button asChild className="w-fit font-mono text-xs">
                <Link href={`/projects/${fyp.slug}`}>
                  Read the full case study
                  <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
