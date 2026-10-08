import { Marquee } from "../marquee";

const TOOLS = [
  "ESP32",
  "Arduino",
  "Embedded C/C++",
  "MQTT",
  "MATLAB",
  "Simulink",
  "Proteus",
  "LTspice",
  "KiCad",
  "Python",
  "AutoCAD Electrical",
  "TIA Portal",
  "ETAP",
  "Git",
];

/**
 * Thin tools ticker bridging the snapshot and the work showcase — the
 * engineering toolbox at a glance.
 */
export function ToolsTicker() {
  return (
    <div
      aria-label="Engineering tools"
      className="overflow-hidden border-b border-border bg-surface py-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
    >
      <Marquee
        items={TOOLS}
        duration={38}
        pauseOnHover
        aria-label="Engineering tools and technologies"
      />
    </div>
  );
}
