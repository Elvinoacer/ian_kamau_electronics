interface MarqueeProps {
  items: string[];
  className?: string;
  duration?: number;
  separator?: string;
  "aria-label"?: string;
  pauseOnHover?: boolean;
}

/**
 * Infinite CSS marquee ticker. Content is duplicated once and the track
 * translates -50% for a seamless loop. The root always clips the w-max
 * track so it can never inflate a grid/flex item's min-content width.
 */
export function Marquee({
  items,
  className,
  duration = 42,
  separator = "·",
  "aria-label": ariaLabel = "Ticker",
  pauseOnHover = false,
}: MarqueeProps) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
    >
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-6 sm:gap-10">
          <span className="whitespace-nowrap">{item}</span>
          <span aria-hidden="true" className="text-signal-green/70">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      role="marquee"
      aria-label={ariaLabel}
      className={[
        "overflow-hidden",
        pauseOnHover ? "marquee-paused" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div
        className="marquee-track flex w-max will-change-transform"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
