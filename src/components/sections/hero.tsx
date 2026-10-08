import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/diagrams/waveform";
import { TransformerMonitorDiagram } from "@/components/diagrams/transformer-monitor-diagram";
import { profile } from "@/data/profile";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Reveal } from "@/components/engineering/reveal";

/**
 * Hero (spec section 11) — human first, technical second.
 * Portrait placeholder + technical system schematic composition.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-schematic" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-border"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy column */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-primary"
                />
                Moi University · B.Eng. Electrical &amp; Electronics Engineering
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-heading"
                className="mt-6 text-balance font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Ian Kamau
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-pretty font-sans text-lg font-medium leading-snug text-foreground/90 sm:text-xl">
                Electrical &amp; Electronics Engineering Graduate focused on
                Embedded Systems, Power Systems &amp; Industrial Automation
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                I build, test and analyze electrical and electronic systems with
                a growing focus on embedded technology, energy systems and
                industrial control. My engineering work combines university
                training, practical laboratory experience, project development
                and industrial exposure.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="font-mono text-sm">
                  <Link href="/projects">
                    Explore Engineering Work
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm"
                >
                  <a href={profile.cvUrl} download="Ian-Kamau-CV.pdf">
                    <FileText className="mr-1 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="font-mono text-sm"
                >
                  <Link href="/contact">
                    <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                    Contact Ian
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-8 border-l-2 border-primary/60 pl-4 text-sm font-medium leading-relaxed text-foreground/80">
                {profile.availability}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {profile.links.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target={link.platform === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                    >
                      {link.label}
                      {link.placeholder && (
                        <span className="ml-1 text-[9px] text-signal-amber">
                          [PLACEHOLDER]
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual column — portrait placeholder + schematic composition */}
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative rounded-lg border border-border bg-surface p-6 shadow-sm">
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div
                    className="flex aspect-[4/5] w-36 shrink-0 flex-col items-center justify-center rounded-md border border-dashed border-border bg-elevated/60 p-3 text-center"
                    aria-label="Portrait placeholder — real photograph to be supplied"
                  >
                    <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
                      Portrait
                      <br />
                      [Placeholder]
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                    <div className="rounded-md border border-border bg-elevated/60 p-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        Latest telemetry
                      </p>
                      <dl className="mt-2 space-y-1.5 font-mono text-[11px]">
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">TEMP</dt>
                          <dd className="text-foreground">48.2 °C</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">I_LOAD</dt>
                          <dd className="text-foreground">6.4 A</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">STATUS</dt>
                          <dd className="text-primary">NOMINAL</dd>
                        </div>
                      </dl>
                    </div>
                    <Waveform className="h-16 w-full rounded-md border border-border bg-elevated/60 p-1 text-foreground" />
                  </div>
                </div>
                <TransformerMonitorDiagram className="w-full rounded-md border border-border bg-elevated/40 p-2 text-foreground" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
