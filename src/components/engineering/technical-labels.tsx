import { cn } from "@/lib/utils";

type LabelTone = "default" | "green" | "amber" | "blue" | "outline";

const toneClasses: Record<LabelTone, string> = {
  default: "border-border bg-secondary text-muted-foreground",
  green: "border-primary/40 bg-primary/10 text-primary",
  amber: "border-signal-amber/40 bg-signal-amber/10 text-signal-amber",
  blue: "border-signal-blue/40 bg-signal-blue/10 text-signal-blue",
  outline: "border-border bg-transparent text-muted-foreground",
};

interface TechnicalLabelProps {
  children: React.ReactNode;
  tone?: LabelTone;
  className?: string;
}

/**
 * Mono uppercase technical label — component IDs, voltages,
 * tool names, project metadata, schematic annotations.
 */
export function TechnicalLabel({
  children,
  tone = "default",
  className,
}: TechnicalLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

interface ToolBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/** Compact chip for a tool or technology name. */
export function ToolBadge({ children, className }: ToolBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.02em] text-foreground/80",
        className
      )}
    >
      {children}
    </span>
  );
}

const proficiencyTone: Record<string, LabelTone> = {
  strong: "green",
  "working-knowledge": "blue",
  "academic-exposure": "outline",
  "currently-learning": "amber",
  "currently-developing": "amber",
};

interface ProficiencyTagProps {
  proficiency: string;
  label: string;
  className?: string;
}

/** Proficiency label chip (never percentage bars — spec section 15). */
export function ProficiencyTag({
  proficiency,
  label,
  className,
}: ProficiencyTagProps) {
  return (
    <TechnicalLabel
      tone={proficiencyTone[proficiency] ?? "outline"}
      className={className}
    >
      {label}
    </TechnicalLabel>
  );
}

interface PlaceholderTagProps {
  className?: string;
}

/** Content-integrity marker for unverified data (spec section 2). */
export function PlaceholderTag({ className }: PlaceholderTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-dashed border-signal-amber/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-signal-amber",
        className
      )}
      title="Placeholder — replace with verified content before publishing"
    >
      Placeholder
    </span>
  );
}
