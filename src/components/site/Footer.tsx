import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { useLocale, useT } from "@/lib/useLocale";

function Column({ title, links }: { title: string; links: ReadonlyArray<{ readonly label: string; readonly href: string }> }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-foreground/80 transition-colors duration-150 hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useT();
  const locale = useLocale();

  const privacyHref = locale === "ja" ? "/ja/privacy" : "/privacy";
  const termsHref = locale === "ja" ? "/ja/terms" : "/terms";

  return (
    <footer className="relative overflow-hidden bg-surface/40">
      {/* Gradient hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.22 275 / 0.55), transparent)",
        }}
      />
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand block */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:tsmarketingsupport@gmail.com"
                  className="group inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  tsmarketingsupport@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+817090653941"
                  className="group inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  +81 70 9065 3941
                </a>
              </li>
            </ul>
          </div>

          <Column title={t.footer.services} links={t.footer.serviceLinks} />
          <Column title={t.footer.company} links={t.footer.companyLinks} />
        </div>
      </div>

      <div className="relative border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
            <a href={privacyHref} className="transition-colors hover:text-foreground">{t.footer.privacyLabel}</a>
            <a href={termsHref} className="transition-colors hover:text-foreground">{t.footer.termsLabel}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
