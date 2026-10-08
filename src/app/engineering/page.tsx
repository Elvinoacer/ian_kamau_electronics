import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/engineering/section-heading";
import { Reveal } from "@/components/engineering/reveal";
import {
  ProficiencyTag,
  PlaceholderTag,
} from "@/components/engineering/technical-labels";
import { proficiencyLabels } from "@/data/skills";
import { skillGroups, labs, currentlyLearning } from "@/data";
import { Wrench, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Ian Kamau's technical skill matrix — electrical engineering, electronics, embedded systems, control and automation, engineering software and programming — with honest proficiency levels.",
};

const proficiencyLegend: { key: string; label: string }[] = [
  { key: "strong", label: proficiencyLabels.strong },
  { key: "working-knowledge", label: proficiencyLabels["working-knowledge"] },
  { key: "academic-exposure", label: proficiencyLabels["academic-exposure"] },
  { key: "currently-learning", label: proficiencyLabels["currently-learning"] },
];

export default function EngineeringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="Skills, tools & practical depth"
        intro="No percentage bars — every skill carries an honest proficiency label grounded in coursework, laboratory work or project use."
      />

      {/* Proficiency legend */}
      <section aria-label="Proficiency legend" className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Legend
            </span>
            {proficiencyLegend.map((item) => (
              <span key={item.key} className="flex items-center gap-2">
                <ProficiencyTag proficiency={item.key} label={item.label} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skill matrix */}
      <section aria-labelledby="skills-heading" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="skills-heading"
            eyebrow="Capability matrix"
            title="Technical skill groups"
            description="Skill levels reflect real usage: what university training covered, what laboratory work exercised, and what projects required."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={0.04 * i}>
                <article className="h-full rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                      <Wrench className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  {group.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  )}
                  <ul className="mt-5 divide-y divide-border">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 py-2.5"
                      >
                        <span className="text-sm text-foreground/90">
                          {skill.name}
                        </span>
                        <ProficiencyTag
                          proficiency={skill.proficiency}
                          label={proficiencyLabels[skill.proficiency]}
                        />
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory exposure */}
      <section
        aria-labelledby="labs-heading"
        className="border-b border-border bg-surface/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="labs-heading"
            eyebrow="Practical depth"
            title="Laboratory & practical exposure"
            description="University laboratory work that grounds the theory — machines, electronics, control, instrumentation, embedded and power systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {labs.map((lab, i) => (
              <Reveal key={lab.id} delay={0.04 * i}>
                <article className="h-full rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-2.5">
                    <FlaskConical
                      className="h-4 w-4 shrink-0 text-signal-blue"
                      aria-hidden="true"
                    />
                    <h3 className="text-sm font-semibold text-foreground">
                      {lab.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {lab.work.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-signal-blue/60"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Currently learning */}
      <section aria-labelledby="learning-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            id="learning-heading"
            eyebrow="Development"
            title="Currently learning"
            description="Deliberate development aligned with target graduate roles in automation, energy and embedded systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {currentlyLearning.map((item, i) => (
              <Reveal key={item.topic} delay={0.04 * i}>
                <article className="h-full rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.topic}
                    </h3>
                    <span className="shrink-0 rounded-sm border border-signal-amber/40 bg-signal-amber/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-signal-amber">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <PlaceholderTag />
            Proficiency claims on this page reflect university-level training and prototype-scale project work, not professional industrial experience.
          </p>
        </div>
      </section>
    </>
  );
}
