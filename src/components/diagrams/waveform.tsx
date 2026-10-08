"use client";

import { useReducedMotion, motion } from "framer-motion";

/**
 * Oscilloscope-style waveform trace used in the hero composition.
 * Static SVG pattern + subtle continuous sweep when motion allowed.
 */
export function Waveform({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const path =
    "M0 40 C 20 40, 30 8, 50 8 S 80 72, 100 72 S 130 40, 150 40 S 180 12, 200 12 S 230 68, 250 68 S 280 40, 300 40 S 330 16, 350 16 S 380 64, 400 64 S 430 40, 450 40 S 480 10, 500 10 S 530 70, 560 40 L 560 0 L 0 0 Z";

  return (
    <div className={className}>
      <svg
        viewBox="0 0 560 80"
        role="img"
        aria-label="Oscilloscope trace of a stable alternating waveform"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* graticule */}
        {Array.from({ length: 14 }, (_, i) => (
          <line
            key={i}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="80"
            stroke="currentColor"
            strokeOpacity="0.08"
          />
        ))}
        {Array.from({ length: 3 }, (_, i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 20}
            x2="560"
            y2={20 + i * 20}
            stroke="currentColor"
            strokeOpacity="0.08"
          />
        ))}

        {/* filled trace */}
        <path d={path} className="fill-primary" fillOpacity="0.08" />

        {/* stroked trace */}
        <motion.path
          d="M0 40 C 20 40, 30 8, 50 8 S 80 72, 100 72 S 130 40, 150 40 S 180 12, 200 12 S 230 68, 250 68 S 280 40, 300 40 S 330 16, 350 16 S 380 64, 400 64 S 430 40, 450 40 S 480 10, 500 10 S 530 70, 560 40"
          className="stroke-primary"
          strokeWidth="2"
          initial={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: 1200 }}
          animate={
            reduce
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: [1200, 0, 0, 1200] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 6,
                  times: [0, 0.4, 0.6, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          strokeDasharray="1200"
        />

        {/* measurement ticks */}
        <g className="fill-muted-foreground font-mono" fontSize="7">
          <text x="4" y="76">CH1 · 50 ms/div</text>
          <text x="490" y="76">2 V/div</text>
        </g>
      </svg>
    </div>
  );
}
