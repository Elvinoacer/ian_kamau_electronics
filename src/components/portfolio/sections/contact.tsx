"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePortfolioStore } from "@/store/portfolio-store";
import { Magnetic } from "../magnetic";
import { FadeIn } from "../anim-heading";

/**
 * Closing CTA — full-bleed night-grid imagery, oversized display heading and
 * a magnetic contact button. The final beat of the scroll narrative.
 */
export function Contact() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const loaded = usePortfolioStore((s) => s.loaded);

  useEffect(() => {
    const root = rootRef.current;
    const bg = bgRef.current;
    if (!root || !bg || reduced || !loaded) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [reduced, loaded]);

  const links = profile.links.map((link, index) => ({
    ...link,
    icon: index === 0 ? Linkedin : index === 1 ? Github : Mail,
  }));

  return (
    <section
      ref={rootRef}
      id="contact"
      aria-label="Contact"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden border-t border-border"
    >
      {/* Night grid backdrop */}
      <div ref={bgRef} className="absolute inset-[-10%] will-change-transform">
        <Image
          src="/images/grid-night.jpg"
          alt="Power grid monitoring screens glowing at night"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background/90" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <FadeIn>
          <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-green sm:text-xs">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-signal-green" />
            09 / Contact — open to graduate opportunities
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="font-display text-[11vw] font-medium leading-[0.92] tracking-[-0.02em] text-foreground sm:text-7xl lg:text-8xl">
            LET&apos;S BUILD
            <br />
            <span className="text-outline">SOMETHING</span>
            <br />
            USEFUL.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <FadeIn delay={0.16}>
            <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {profile.availability} If your team works on electrical systems,
              embedded technology, automation or energy — I would like to hear
              about it.
            </p>
            <div className="mt-8">
              <Magnetic>
                <a
                  href={`mailto:${profile.links.find((l) => l.platform === "email")?.url.replace("mailto:", "") ?? "ian.kamau@example.com"}`}
                  className="group inline-flex h-14 items-center gap-4 rounded-full bg-primary px-8 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Start a conversation
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="divide-y divide-border border-y border-border">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target={link.platform === "email" ? undefined : "_blank"}
                      rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center justify-between py-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-foreground/80 transition-colors group-hover:text-signal-green">
                        <Icon className="h-4 w-4" />
                        {link.label}
                        {link.placeholder ? (
                          <span className="rounded-sm border border-signal-amber/40 px-1.5 py-0.5 text-[8px] text-signal-amber/90">
                            Placeholder
                          </span>
                        ) : null}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-green" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Kenya · Available worldwide · {new Date().getFullYear()}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
