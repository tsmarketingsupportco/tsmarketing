import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLocale, useT } from "@/lib/useLocale";

interface NavProps {
  /** Override the language switcher link. Defaults to toggle between /en and /ja */
  langSwitchHref?: string;
}

export function Nav({ langSwitchHref }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchHref = langSwitchHref ?? (locale === "en" ? "/ja" : "/");
  const switchLabel = locale === "en" ? "日本語" : "English";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {[
            { h: "#services", l: t.nav.services },
            { h: "#process", l: t.nav.process },
            { h: "#work", l: t.nav.work },
            { h: "#faq", l: t.nav.faq },
          ].map((i) => (
            <a key={i.h} href={i.h} className="story-link transition-colors hover:text-foreground">
              {i.l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <a
            href={switchHref}
            className="hidden md:inline-flex h-9 items-center rounded-full border border-white/10 bg-surface/50 px-3.5 text-xs font-semibold text-muted-foreground transition-all hover:border-[#00A832]/40 hover:text-[#00A832]"
          >
            {switchLabel}
          </a>
          <a
            href="#audit"
            className="group relative inline-flex h-9 items-center overflow-hidden rounded-full bg-gradient-to-r from-[#0033A0] to-[#00A832] px-5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,168,50,0.3)] transition-transform hover:scale-[1.04]"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
