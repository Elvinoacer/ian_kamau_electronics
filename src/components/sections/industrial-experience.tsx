import Link from "next/link";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { PlaceholderTag, ToolBadge } from "@/components/engineering/technical-labels";
import { experience } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CalendarClock, MapPin } from "lucide-react";

/**
 * Industrial experience summary (spec section 20) — honest
 * graduate-level description of supervised attachment exposure.
 */
export function IndustrialExperience() {
  const job = experience.find((e) => e.type === "industrial-attachment");
  if (!job) return null;

  return (
    <section aria-labelledby="experience-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="experience-heading"
          eyebrow="Industrial exposure"
          title="Industrial attachment"
          description="Supervised exposure to operational engineering environments — connecting academic concepts to real equipment, safety practice and maintenance coordination."
        />

        <Reveal className="mt-10">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.organization}
                  </span>
                  {job.organizationPlaceholder && <PlaceholderTag />}
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.startDate} – {job.endDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {job.summary}
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Exposure highlights
                </h4>
                <ul className="mt-3 space-y-2">
                  {job.responsibilities.slice(0, 5).map((r) => (
                    <li
                      key={r}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Equipment encountered
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(job.equipment ?? []).map((eq) => (
                    <ToolBadge key={eq}>{eq}</ToolBadge>
                  ))}
                  <PlaceholderTag className="mt-1" />
                </div>
              </div>
            </div>

            {job.learning && (
              <blockquote className="mt-6 border-l-2 border-primary/60 pl-4 text-sm italic leading-relaxed text-foreground/80">
                “{job.learning}”
              </blockquote>
            )}

            <Button
              asChild
              variant="outline"
              className="mt-8 font-mono text-xs"
            >
              <Link href="/experience">
                Full attachment experience
                <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
