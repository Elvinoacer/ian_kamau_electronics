import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { PlaceholderTag, ToolBadge } from "@/components/engineering/technical-labels";
import { experience, timeline } from "@/data";
import { Building2, CalendarClock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Ian Kamau's industrial attachment experience — supervised exposure to electrical maintenance, distribution equipment and control panels in an operating engineering environment.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Industrial & practical experience"
        intro="An honest, graduate-level record of supervised industrial exposure — what I observed, assisted with, measured and learned."
      />

      {experience.map((job) => (
        <section
          key={job.id}
          aria-labelledby={`job-${job.id}`}
          className="border-b border-border"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Reveal>
              <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2
                      id={`job-${job.id}`}
                      className="text-xl font-semibold tracking-tight text-foreground"
                    >
                      {job.role}
                    </h2>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.organization}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.startDate} – {job.endDate} · {job.durationWeeks}{" "}
                        weeks
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                    {job.organizationPlaceholder && (
                      <PlaceholderTag className="mt-2" />
                    )}
                  </div>
                  <span className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                    Industrial Attachment
                  </span>
                </div>

                <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Exposure & responsibilities
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {job.responsibilities.map((r) => (
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

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Equipment encountered
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {(job.equipment ?? []).map((eq) => (
                          <ToolBadge key={eq}>{eq}</ToolBadge>
                        ))}
                        <PlaceholderTag className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Instruments used
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {(job.tools ?? []).map((tool) => (
                          <ToolBadge key={tool}>{tool}</ToolBadge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {job.learning && (
                  <blockquote className="mt-8 border-l-2 border-primary/60 pl-4 text-base italic leading-relaxed text-foreground/80">
                    “{job.learning}”
                  </blockquote>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section aria-labelledby="trajectory-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="trajectory-heading"
            eyebrow="Trajectory"
            title="Engineering experience timeline"
            description="From engineering foundations to the final-year project. All years remain placeholders until verified."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={0.04 * i}>
                <li className="h-full rounded-lg border border-border bg-card p-5">
                  <p className="font-mono text-2xl font-semibold tracking-tight text-primary/90">
                    {entry.year}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
