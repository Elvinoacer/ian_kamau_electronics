import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { PlaceholderTag } from "@/components/engineering/technical-labels";
import { education, certifications, timeline } from "@/data";
import { GraduationCap, MapPin, CalendarRange } from "lucide-react";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Ian Kamau's education — B.Eng. Electrical & Electronics Engineering at Moi University: coursework across power, electronics, control, communications and engineering foundations.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic foundation"
        intro="The coursework and training behind the engineering work — organized by discipline, exactly as the degree covered it."
      />

      <section aria-labelledby="degree-heading" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2
                        id="degree-heading"
                        className="text-lg font-semibold tracking-tight text-foreground"
                      >
                        {education.institution}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {education.school}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base font-medium text-foreground">
                    {education.degree}
                  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {education.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                      {education.startYear} – {education.endYear}
                    </span>
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Graduation year
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2 text-sm text-foreground">
                    {education.graduationYear}
                    <PlaceholderTag />
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Classification
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2 text-sm text-foreground">
                    {education.classification}
                    <PlaceholderTag />
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Programme
                  </dt>
                  <dd className="mt-1.5 text-sm text-foreground">
                    Bachelor of Engineering — 5 years
                  </dd>
                </div>
              </dl>

              {education.highlights && (
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {education.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="coursework-heading"
        className="border-b border-border bg-surface/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="coursework-heading"
            eyebrow="Curriculum"
            title="Academic focus & coursework"
            description="Modules grouped by discipline — the breadth of the Moi University Electrical & Electronics Engineering programme."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(education.coursework ?? []).map((cat, i) => (
              <Reveal key={cat.category} delay={0.04 * i}>
                <article className="h-full rounded-lg border border-border bg-card p-5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    {cat.category}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {cat.modules.map((module) => (
                      <li
                        key={module}
                        className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                        />
                        {module}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="certs-heading" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="certs-heading"
            eyebrow="Credentials"
            title="Certifications"
            description="Only verified credentials are ever published. This section renders credential cards automatically once real certifications are confirmed."
          />
          {certifications.length === 0 ? (
            <Reveal className="mt-8">
              <div className="rounded-lg border border-dashed border-border bg-card p-8 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  No verified certifications yet
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Credential cards will appear here as certifications are
                  earned and verified. Planned categories include occupational
                  safety, solar PV, PLC programming, MATLAB and embedded
                  systems.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="edu-timeline-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="edu-timeline-heading"
            eyebrow="Progression"
            title="Year by year"
            description="How the training built from foundations toward applied engineering work."
          />
          <ol className="mt-10 space-y-0 border-l border-border pl-6">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={0.04 * i}>
                <li className="relative pb-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1 inline-block h-2.5 w-2.5 rounded-full border border-primary bg-background"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {entry.year}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
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
