import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import { PlaceholderTag } from "@/components/engineering/technical-labels";
import { profile, philosophy, philosophyExpanded, leadership, references, interests } from "@/data";
import { GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ian Kamau — Electrical & Electronics Engineering graduate from Moi University. How I approach engineering problems, work in teams, and where I am heading.",
};

const aboutSections = [
  {
    title: "Who I am",
    paragraphs: [profile.about[0], profile.about[1]],
  },
  {
    title: "How I work",
    paragraphs: [profile.about[2]],
  },
  {
    title: "Where I am heading",
    paragraphs: [profile.about[3]],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A graduate engineer who works from evidence"
        intro="Beyond the CV — who I am, how I approach engineering problems, and the kind of engineering environment I am looking for."
      />

      <section aria-labelledby="about-story" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              {aboutSections.map((section) => (
                <div key={section.title} className="mb-8 last:mb-0">
                  <h2
                    id="about-story"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <aside className="space-y-4">
              <Reveal>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Profile
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Name</dt>
                      <dd className="text-right text-foreground">
                        {profile.fullName}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Role</dt>
                      <dd className="text-right text-foreground">
                        {profile.professionalTitle}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                        Degree
                      </dt>
                      <dd className="text-right text-foreground">
                        B.Eng. EEE
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        Location
                      </dt>
                      <dd className="text-right text-foreground">
                        {profile.location}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-sm border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] text-foreground/70"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Engineering philosophy
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                    {philosophy}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {philosophyExpanded}
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="teamwork-heading" className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="teamwork-heading"
            eyebrow="Evidence"
            title="Leadership & teamwork"
            description="Specific situations rather than generic claims."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {leadership.map((item, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <blockquote className="h-full rounded-lg border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="references-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="references-heading"
            eyebrow="References"
            title="References & testimonials"
            description="No fabricated testimonials are published. References are available on request once contact details are confirmed."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {references.map((ref, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="h-full rounded-lg border border-dashed border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {ref.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {ref.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {ref.organization}
                      </p>
                    </div>
                    <PlaceholderTag />
                  </div>
                  <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                    “{ref.quote}”
                  </p>
                  {ref.contactAvailableOnRequest && (
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      Contact available on request
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
