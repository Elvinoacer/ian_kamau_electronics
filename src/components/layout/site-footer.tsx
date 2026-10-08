import Link from "next/link";
import { profile } from "@/data/profile";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const footerNav = [
  { href: "/#work", label: "Selected Work" },
  { href: "/#fyp", label: "Final-Year Project" },
  { href: "/#experience", label: "Experience" },
  { href: "/#labs", label: "Laboratories" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "linkedin":
      return <Linkedin className="h-4 w-4" aria-hidden="true" />;
    case "github":
      return <Github className="h-4 w-4" aria-hidden="true" />;
    case "email":
      return <Mail className="h-4 w-4" aria-hidden="true" />;
    default:
      return null;
  }
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background print-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-4xl font-medium leading-none tracking-tight text-foreground sm:text-5xl">
              {profile.fullName}
              <span className="text-signal-green">.</span>
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {profile.professionalTitle} · Moi University · {profile.location}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {profile.availability}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-signal-green/60 hover:text-signal-green"
                  aria-label={`${link.label}${link.placeholder ? " (placeholder link)" : ""}`}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Index
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} {profile.fullName} · Eldoret, Kenya · 0.5160° N, 35.2768° E
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Placeholder profile — replace content before publishing
          </p>
        </div>
      </div>
      {/* Spacer so mobile quick bar never overlaps footer content */}
      <div aria-hidden="true" className="h-16 lg:hidden" />
    </footer>
  );
}
