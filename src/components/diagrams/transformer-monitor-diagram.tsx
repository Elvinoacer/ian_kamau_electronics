"use client";

import { useReducedMotion, motion } from "framer-motion";

/**
 * System block diagram for the IoT transformer health monitoring
 * architecture (spec section 17). Drawn as an SVG so it scales
 * cleanly on mobile; the data path draws in on view when motion
 * is allowed.
 */
export function TransformerMonitorDiagram({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-label="System block diagram: transformer test rig sensors feed an ESP32 microcontroller which transmits over Wi-Fi and MQTT to a server and monitoring dashboard with alerts and historical data."
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* measurement grid */}
      <g opacity="0.5">
        {Array.from({ length: 19 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 30}
            y1="0"
            x2={i * 30}
            y2="400"
            stroke="currentColor"
            strokeOpacity="0.06"
          />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 30}
            x2="560"
            y2={i * 30}
            stroke="currentColor"
            strokeOpacity="0.06"
          />
        ))}
      </g>

      {/* Transformer / test rig */}
      <g>
        <rect
          x="20"
          y="150"
          width="130"
          height="100"
          rx="4"
          className="fill-secondary stroke-[var(--signal-amber)]"
          strokeOpacity="0.5"
        />
        <text
          x="85"
          y="192"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="11"
        >
          TRANSFORMER
        </text>
        <text
          x="85"
          y="210"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="11"
        >
          / TEST RIG
        </text>
      </g>

      {/* Sensors */}
      <g>
        {[
          { y: 70, label: "CURRENT SENSOR" },
          { y: 200, label: "VOLTAGE SENSING" },
          { y: 330, label: "TEMPERATURE SENSOR" },
        ].map((s) => (
          <g key={s.label}>
            <rect
              x="210"
              y={s.y - 22}
              width="150"
              height="44"
              rx="4"
              className="fill-secondary stroke-primary"
              strokeOpacity="0.5"
            />
            <text
              x="285"
              y={s.y + 4}
              textAnchor="middle"
              className="fill-foreground font-mono"
              fontSize="9.5"
            >
              {s.label}
            </text>
          </g>
        ))}
      </g>

      {/* ESP32 */}
      <g>
        <rect
          x="210"
          y="258"
          width="0"
          height="0"
        />
        <rect
          x="430"
          y="160"
          width="110"
          height="80"
          rx="4"
          className="fill-primary/10 stroke-primary"
        />
        <text
          x="485"
          y="192"
          textAnchor="middle"
          className="fill-primary font-mono font-semibold"
          fontSize="13"
        >
          ESP32
        </text>
        <text
          x="485"
          y="210"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="9"
        >
          MCU · SIGNAL
        </text>
        <text
          x="485"
          y="224"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="9"
        >
          PROCESSING
        </text>
      </g>

      {/* Server */}
      <g>
        <rect
          x="20"
          y="20"
          width="150"
          height="56"
          rx="4"
          className="fill-secondary stroke-[var(--signal-blue)]"
          strokeOpacity="0.6"
        />
        <text
          x="95"
          y="42"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="10"
        >
          CLOUD / LOCAL
        </text>
        <text
          x="95"
          y="58"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="10"
        >
          SERVER
        </text>
      </g>

      {/* Dashboard */}
      <g>
        <rect
          x="20"
          y="320"
          width="150"
          height="56"
          rx="4"
          className="fill-secondary stroke-[var(--signal-blue)]"
          strokeOpacity="0.6"
        />
        <text
          x="95"
          y="342"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="10"
        >
          MONITORING
        </text>
        <text
          x="95"
          y="358"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="10"
        >
          DASHBOARD
        </text>
      </g>

      {/* Connection lines */}
      <g
        className="stroke-foreground"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      >
        <line x1="150" y1="200" x2="285" y2="200" />
        <line x1="150" y1="200" x2="285" y2="92" />
        <line x1="150" y1="200" x2="285" y2="308" />
        <line x1="360" y1="92" x2="470" y2="170" />
        <line x1="360" y1="200" x2="430" y2="200" />
        <line x1="360" y1="308" x2="470" y2="230" />
      </g>

      {/* Wi-Fi / MQTT path (draw-in) */}
      <motion.path
        d="M 430 165 L 400 120 L 170 48"
        className="stroke-primary"
        strokeWidth="2"
        strokeDasharray="640"
        initial={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: 640 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M 170 348 L 430 240"
        className="stroke-[var(--signal-blue)]"
        strokeWidth="2"
        strokeDasharray="640"
        initial={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: 640 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Wi-Fi / MQTT labels */}
      <g className="fill-primary font-mono" fontSize="9">
        <text x="392" y="86">WI-FI · MQTT</text>
      </g>
      <g className="fill-[var(--signal-blue)] font-mono" fontSize="9">
        <text x="240" y="300">ALERTS · HISTORY</text>
      </g>

      {/* measurement annotation */}
      <g className="fill-muted-foreground font-mono" fontSize="8">
        <text x="22" y="388">FIG. 01 — SYSTEM ARCHITECTURE · IOT TRANSFORMER MONITORING</text>
      </g>
    </svg>
  );
}
