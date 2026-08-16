import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";
import { ShieldCheck, TrendingUp, Sparkles, Zap } from "lucide-react";

export function Benefits() {
  const t = useT();
  const icons = [TrendingUp, ShieldCheck, Zap, Sparkles];

  return (
    <section id="benefits" className="relative py-24 md:py-32 tint-benefits overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0033A0]/40 bg-[#0033A0]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            <span>{t.benefits.label}</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl tracking-tight">
            {t.benefits.heading}
          </h2>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          {t.benefits.items.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            const isHeroBento = i === 0;
            const colSpan = isHeroBento ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-7";

            return (
              <Reveal key={benefit.title} delay={i * 0.08} className={colSpan}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                    isHeroBento
                      ? "border-[#00A832]/50 bg-gradient-to-br from-[#001B70] via-surface to-[#0033A0]/40 shadow-xl"
                      : "border-white/10 bg-surface/80 hover:border-[#00A832]/40 hover:bg-surface"
                  }`}
                >
                  {/* Subtle hover gradient wash */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00A832]/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00A832]/20 border border-[#00A832]/30 text-[#00A832]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                        <span className="bg-gradient-to-r from-white via-white to-[#00A832] bg-clip-text text-transparent">
                          {benefit.headline}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>

                  {isHeroBento && (
                    <div className="mt-8 flex items-center gap-2 rounded-xl bg-[#00A832]/15 px-4 py-2.5 text-xs font-semibold text-[#00A832] border border-[#00A832]/30">
                      <Sparkles className="h-4 w-4" />
                      <span>Guaranteed measurable ROI metrics within 30 days of deployment</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

