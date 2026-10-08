"use client";

import type { ReactNode } from "react";
import { AnimHeading } from "./anim-heading";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  note?: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Editorial section header: mono index + eyebrow rule, display heading with
 * split-line reveal, and an optional right-aligned technical note.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  note,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 sm:mb-16", className)}>
      <div className="mb-6 flex items-center justify-between gap-6 border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        <span className="flex items-center gap-4">
          <span className="text-signal-green">{index}</span>
          <span>{eyebrow}</span>
        </span>
        {note ? <span className="hidden text-right sm:block">{note}</span> : null}
      </div>
      <AnimHeading
        id={id}
        as="h2"
        className="font-display text-4xl font-medium leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        {title}
      </AnimHeading>
    </div>
  );
}
