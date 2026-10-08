"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { FileText, Mail } from "lucide-react";
import { Linkedin } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Mobile sticky action bar (spec section 35):
 * CV · LinkedIn · Email — visible only on small screens.
 */
export function MobileQuickBar() {
  const pathname = usePathname();
  const hidden =
    pathname.startsWith("/cv") || pathname.startsWith("/recruiter");

  if (hidden) return null;

  const emailLink = profile.links.find((l) => l.platform === "email");
  const linkedinLink = profile.links.find((l) => l.platform === "linkedin");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden print:hidden",
        "[pb:env(safe-area-inset-bottom)]"
      )}
    >
      <nav
        aria-label="Quick actions"
        className="mx-auto grid max-w-md grid-cols-3"
      >
        <Link
          href="/cv"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <FileText className="h-5 w-5" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-widest">
            CV
          </span>
        </Link>
        {linkedinLink && (
          <a
            href={linkedinLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest">
              LinkedIn
            </span>
          </a>
        )}
        {emailLink && (
          <a
            href={emailLink.url}
            className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Email
            </span>
          </a>
        )}
      </nav>
    </div>
  );
}
