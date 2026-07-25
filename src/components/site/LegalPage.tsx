import type { ReactNode } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  currentPage: "privacy" | "terms";
  japanContent: ReactNode;
  philippinesContent: ReactNode;
};

export function LegalPage({
  title,
  lastUpdated,
  currentPage,
  japanContent,
  philippinesContent,
}: LegalPageProps) {
  const otherPage = currentPage === "privacy" ? "terms" : "privacy";
  const otherLabel = currentPage === "privacy" ? "Terms of Service" : "Privacy Policy";

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Nav />
      <main className="px-6 pb-24 pt-32 md:pt-40">
        <article className="mx-auto max-w-3xl">
          <header className="border-b border-border/60 pb-8">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This document is provided for general informational purposes and does not constitute
              legal advice. Please consult a qualified attorney for advice specific to your situation.
            </p>
          </header>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-primary-glow">Japan（日本）</h2>
            <div className="legal-prose mt-6 space-y-6 text-sm leading-relaxed text-foreground/90">
              {japanContent}
            </div>
          </section>

          <section className="mt-16 border-t border-border/60 pt-12">
            <h2 className="text-2xl font-semibold text-primary-glow">Philippines</h2>
            <div className="legal-prose mt-6 space-y-6 text-sm leading-relaxed text-foreground/90">
              {philippinesContent}
            </div>
          </section>

          <nav
            aria-label="Legal pages"
            className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/60 pt-8 text-sm text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">
              ← Back to home
            </a>
            <span aria-hidden>·</span>
            <a href={`/${otherPage}`} className="transition-colors hover:text-foreground">
              {otherLabel}
            </a>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
