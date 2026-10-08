import { cn } from "@/lib/utils";
import { PlaceholderTag } from "@/components/engineering/technical-labels";

interface MetricProps {
  label: string;
  value: string;
  sub?: string;
  placeholder?: boolean;
  className?: string;
}

/**
 * Snapshot metric card — measured, restrained counters
 * (spec section 12: avoid inflated numbers).
 */
export function Metric({ label, value, sub, placeholder, className }: MetricProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-border bg-card p-4",
        className
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
        {value}
      </p>
      {sub && (
        <p className="mt-1 font-mono text-[10px] text-muted-foreground">{sub}</p>
      )}
      {placeholder && <PlaceholderTag className="mt-2 self-start" />}
    </div>
  );
}
