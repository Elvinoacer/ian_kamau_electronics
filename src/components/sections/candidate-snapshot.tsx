import { Metric } from "@/components/engineering/metric";
import { Reveal } from "@/components/engineering/reveal";
import { education, experience, projects } from "@/data";
import { profile } from "@/data/profile";

/**
 * Candidate snapshot (spec section 12) — compact, honest metric cards
 * directly below the hero.
 */
export function CandidateSnapshot() {
  const attachmentWeeks =
    experience.find((e) => e.type === "industrial-attachment")?.durationWeeks;

  const snapshot: {
    label: string;
    value: string;
    sub?: string;
    placeholder?: boolean;
  }[] = [
    {
      label: "Degree",
      value: "B.Eng. Electrical & Electronics Engineering",
    },
    {
      label: "University",
      value: education.institution,
      sub: education.location,
    },
    {
      label: "Graduation",
      value: String(profile.graduationYear),
      placeholder: profile.graduationYearPlaceholder,
    },
    {
      label: "Core Focus",
      value: "Embedded · Power · Automation",
    },
    {
      label: "Engineering Projects",
      value: `${projects.length} documented case studies`,
      sub: "University & personal prototypes",
      placeholder: true,
    },
    {
      label: "Industrial Attachment",
      value: attachmentWeeks ? `${attachmentWeeks} weeks supervised` : "—",
      placeholder: true,
    },
    {
      label: "Location",
      value: profile.location,
    },
    {
      label: "Availability",
      value: "Open to graduate opportunities",
    },
  ];

  return (
    <section aria-labelledby="snapshot-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2
          id="snapshot-heading"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          Candidate snapshot
        </h2>
        <Reveal className="mt-6">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map((item) => (
              <Metric
                key={item.label}
                label={item.label}
                value={item.value}
                sub={item.sub}
                placeholder={item.placeholder}
              />
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
