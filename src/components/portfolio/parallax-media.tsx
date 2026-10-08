"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePortfolioStore } from "@/store/portfolio-store";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxMediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Vertical parallax range in percent (default 10). */
  parallax?: number;
  /** Clip + scale reveal when scrolled into view. */
  reveal?: boolean;
  playOnLoad?: boolean;
  /** Grayscale-to-color on parent group hover. */
  grayscaleHover?: boolean;
  objectPosition?: string;
  quality?: number;
}

/**
 * Editorial image container: clip-path reveal, settle-scale and a scrubbed
 * vertical parallax on the inner image. The image is always slightly larger
 * than its frame so the parallax never exposes empty edges.
 */
export function ParallaxMedia({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  parallax = 10,
  reveal = true,
  playOnLoad = false,
  grayscaleHover = false,
  objectPosition = "center",
  quality = 82,
}: ParallaxMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const loaded = usePortfolioStore((s) => s.loaded);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = imgRef.current;
    if (!frame || !inner) return;

    if (reduced) {
      gsap.set(frame, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(inner, { scale: 1 });
      return;
    }

    if (playOnLoad && !loaded) return;

    const ctx = gsap.context(() => {
      if (reveal) {
        gsap.fromTo(
          frame,
          { clipPath: "inset(14% 8% 14% 8%)", opacity: 0.4 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.4,
            ease: "power3.inOut",
            delay: playOnLoad ? 0.15 : 0,
            scrollTrigger: playOnLoad
              ? undefined
              : { trigger: frame, start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          inner,
          { scale: 1.22 },
          {
            scale: 1.06,
            duration: 1.8,
            ease: "power3.out",
            delay: playOnLoad ? 0.15 : 0,
            scrollTrigger: playOnLoad
              ? undefined
              : { trigger: frame, start: "top 92%", once: true },
          }
        );
      }

      // Scrubbed parallax drift
      gsap.fromTo(
        inner,
        { yPercent: -parallax / 2 },
        {
          yPercent: parallax / 2,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, frame);

    return () => ctx.revert();
  }, [loaded, reduced, parallax, reveal, playOnLoad]);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative overflow-hidden bg-secondary will-change-[clip-path]",
        grayscaleHover && "group",
        className
      )}
      style={{ clipPath: reveal ? "inset(14% 8% 14% 8%)" : undefined }}
    >
      <div ref={imgRef} className="absolute inset-[-12%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          style={{ objectPosition }}
          className={cn("img-editorial object-cover", grayscaleHover && "img-editorial-hover")}
        />
      </div>
    </div>
  );
}
