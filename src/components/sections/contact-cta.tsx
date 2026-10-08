import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/engineering/reveal";
import { profile } from "@/data/profile";
import { opportunityTypes } from "@/data";
import { Mail, ArrowRight, FileText } from "lucide-react";

/**
 * Contact / hire-me section (spec section 30) — homepage closer.
 */
export function ContactCta() {
  const email = profile.links.find((l) => l.platform === "email");

  return (
    <section aria-labelledby="contact-cta-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-schematic opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <h2
              id="contact-cta-heading"
              className="mt-4 text-balance font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              I am open to graduate engineering roles, trainee programs,
              internships, research opportunities and technical collaborations
              involving electrical systems, embedded technology, automation or
              energy.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {opportunityTypes.map((type) => (
                <li
                  key={type}
                  className="rounded-sm border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] tracking-[0.02em] text-foreground/70"
                >
                  {type}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {email && (
                <Button asChild size="lg" className="font-mono text-sm">
                  <a href={email.url}>
                    <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                    Email Ian
                  </a>
                </Button>
              )}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-mono text-sm"
              >
                <Link href="/contact">
                  All contact options
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="font-mono text-sm"
              >
                <a href={profile.cvUrl} download="Ian-Kamau-CV.pdf">
                  <FileText className="mr-1 h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
