import { Reveal } from "@/components/engineering/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/**
 * Shared header block for inner pages — measurement-style eyebrow,
 * strong title, optional supporting copy.
 */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="relative border-b border-border">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-schematic opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            <span aria-hidden="true" className="inline-block h-2 w-2 border border-primary" />
            {eyebrow}
            <span aria-hidden="true" className="hidden h-px flex-1 bg-border sm:inline-block" />
          </p>
          <h1 className="mt-4 text-balance font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
