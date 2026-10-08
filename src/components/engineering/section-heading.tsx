import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Standard section header: mono eyebrow label (measurement style),
 * strong title, optional supporting copy.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
        {align === "left" && (
          <span aria-hidden="true" className="inline-block h-2 w-2 border border-primary" />
        )}
        {eyebrow}
        {align === "left" && (
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-border sm:inline-block"
          />
        )}
      </p>
      <h2
        id={id}
        className="mt-4 text-balance font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
