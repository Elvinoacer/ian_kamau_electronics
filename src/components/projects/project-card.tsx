import Link from "next/link";
import type { Project } from "@/data/types";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToolBadge, TechnicalLabel } from "@/components/engineering/technical-labels";

const typeLabels: Record<string, string> = {
  "final-year-project": "Final-Year Project",
  academic: "Academic Project",
  personal: "Personal Project",
  team: "Team Project",
  research: "Research",
};

interface ProjectCardProps {
  project: Project;
  className?: string;
  /** Flagship card gets a larger layout with accent rail. */
  featured?: boolean;
}

/**
 * Project card (spec section 32) — prioritises problem, engineering
 * domain, candidate contribution and project depth over decoration.
 */
export function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Open case study: ${project.title}`}
      className={cn(
        "group relative flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_0_0_1px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-6",
        featured && "sm:p-7",
        className
      )}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[3px] rounded-l-lg bg-primary"
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        <TechnicalLabel tone={featured ? "green" : "default"}>
          {project.year} · {typeLabels[project.type]}
        </TechnicalLabel>
      </div>

      <h3
        className={cn(
          "mt-4 font-sans font-semibold tracking-tight text-foreground group-hover:text-primary",
          featured ? "text-xl sm:text-2xl" : "text-lg"
        )}
      >
        {project.title}
      </h3>

      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {project.categories.join(" · ")}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {(project.software ?? []).slice(0, featured ? 6 : 4).map((tool) => (
          <ToolBadge key={tool}>{tool}</ToolBadge>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.problem.length > 160
          ? `${project.problem.slice(0, 157)}…`
          : project.problem}
      </p>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
        <div>
          <dt className="text-foreground/50">Role</dt>
          <dd className="mt-1 text-foreground/80 normal-case tracking-normal text-[11px]">
            {project.role?.split(",")[0] ?? "—"}
          </dd>
        </div>
        <div>
          <dt className="text-foreground/50">Team</dt>
          <dd className="mt-1 text-foreground/80">
            {project.teamSize ? `${project.teamSize} ${project.teamSize === 1 ? "member" : "members"}` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-foreground/50">Duration</dt>
          <dd className="mt-1 text-foreground/80">{project.duration ?? "—"}</dd>
        </div>
      </dl>

      <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary group-hover:underline">
        Explore engineering case study
        <ArrowRight
          className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </p>
    </Link>
  );
}
