import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScroll } from "@/components/portfolio/smooth-scroll";
import { Preloader } from "@/components/portfolio/preloader";
import { profile } from "@/data/profile";
import { education } from "@/data/education";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iankamau.dev"),
  title: {
    default: "Ian Kamau | Electrical & Electronics Engineer",
    template: "%s | Ian Kamau",
  },
  description:
    "Ian Kamau is a Moi University Electrical & Electronics Engineering graduate focused on embedded systems, power systems and industrial automation. Explore engineering projects, technical experience and graduate opportunities.",
  keywords: [
    "Ian Kamau Electrical Engineer",
    "Moi University Electrical Engineering Graduate",
    "Graduate Electrical Engineer Kenya",
    "Embedded Systems Graduate Kenya",
    "Electrical Electronics Engineer Kenya",
  ],
  authors: [{ name: "Ian Kamau" }],
  creator: "Ian Kamau",
  openGraph: {
    title: "Ian Kamau | Electrical & Electronics Engineer",
    description:
      "Moi University Electrical & Electronics Engineering graduate focused on embedded systems, power systems and industrial automation.",
    siteName: "Ian Kamau — Engineering Portfolio",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Ian Kamau | Electrical & Electronics Engineer",
    description:
      "Graduate Electrical & Electronics Engineer — embedded systems, power systems and industrial automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D0F" },
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
  ],
};

function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.professionalTitle,
    description: profile.summary,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
    },
    knowsAbout: [
      "Electrical Engineering",
      "Embedded Systems",
      "Power Systems",
      "Industrial Automation",
      "Electronics",
      "Instrumentation",
    ],
    knowsLanguage: "en",
    nationality: {
      "@type": "Country",
      name: "Kenya",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${plexMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <Preloader />
          <div
            aria-hidden="true"
            className="grain-overlay"
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1 print-plain">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Toaster />
        <StructuredData />
      </body>
    </html>
  );
}
