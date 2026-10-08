import Link from "next/link";
import { SectionHeading } from "@/components/engineering/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/engineering/reveal";
import { projects } from "@/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Featured engineering work (spec section 10.3) — flagship final-year
 * project card plus supporting project cards.
 */
export function FeaturedProjects() {
  const fyp = projects.find((p) => p.type === "final-year-project");
  const others = projects.filter((p) => p.slug !== fyp?.slug).slice(0, 4);

  return (
    <section aria-labelledby="work-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Featured engineering work"
          description="Case studies documenting the engineering problem, the approach, the testing and the honest outcome of each project."
        />

        {fyp && (
          <Reveal className="mt-10">
            <ProjectCard project={fyp} featured />
          </Reveal>
        )}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * (i + 1)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Button asChild variant="outline" className="font-mono text-xs">
            <Link href="/projects">
              View all engineering projects
              <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
