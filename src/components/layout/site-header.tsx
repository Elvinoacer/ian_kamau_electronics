"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileQuickBar } from "@/components/layout/mobile-quick-bar";
import { profile } from "@/data/profile";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#fyp", label: "Project" },
  { href: "/#labs", label: "Labs" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

/**
 * Fixed glass header that retreats on scroll-down and returns on scroll-up,
 * keeping the cinematic page clear while remaining one gesture away.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 140);
          lastY = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "header-transition fixed top-0 z-[80] w-full border-b border-border bg-background/75 backdrop-blur-md print-hidden",
        hidden && !open && "header-hidden"
      )}
    >
      <div
        aria-hidden="true"
        className="h-px w-full bg-grid-fine opacity-60"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Ian Kamau — home"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border font-display text-sm font-semibold tracking-tight text-signal-green transition-colors group-hover:border-signal-green/60"
          >
            IK
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              {profile.fullName}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              Electrical &amp; Electronics Engineer
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isHash = item.href.includes("#");
              const active = isHash
                ? false
                : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                      active
                        ? "text-signal-green"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cvUrl}
            download="Ian-Kamau-CV.pdf"
            className="hidden h-9 items-center gap-2 rounded-full border border-border px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-signal-green/60 hover:text-signal-green md:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-baseline gap-4 rounded-md px-3 py-3 font-display text-lg font-medium tracking-tight text-foreground/90 hover:text-signal-green"
                >
                  <span className="font-mono text-[10px] text-signal-green/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.cvUrl}
                download="Ian-Kamau-CV.pdf"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
      <MobileQuickBar />
    </header>
  );
}
