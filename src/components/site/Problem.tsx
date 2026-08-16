import { PhoneOff, EyeOff, Clock, XCircle, CheckCircle2, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

const Icons = [EyeOff, PhoneOff, Clock];

export function Problem() {
  const t = useT();

  return (
    <section id="problem" className="relative py-24 md:py-32 tint-problem overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400">
            <span>{t.problem.label}</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl tracking-tight">
            {t.problem.heading}
          </h2>
        </Reveal>

        {/* Side-by-side Comparison split layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Traditional Way (Pains) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1} className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-[#160b0c]/80 p-8 shadow-xl backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
                      <XCircle className="h-4 w-4" /> Traditional Agencies & DIY
                    </span>
                    <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[11px] font-medium text-red-300">High Leakage</span>
                  </div>

                  <div className="mt-6 space-y-6">
                    {t.problem.pains.map((p, i) => {
                      const Icon = Icons[i];
                      return (
                        <div key={p.k} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white">{p.t}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-xs text-red-300">
                  ⚠️ Result: Over 70% of potential website leads bounce off to competitors before contacting you.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: TS Marketing Growth Stack */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2} className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#00A832]/50 bg-gradient-to-b from-[#001B70]/80 via-surface to-[#001B70]/90 p-8 shadow-2xl shadow-[#0033A0]/30 backdrop-blur-xl">
                {/* Glow accent */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00A832]/20 blur-3xl" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A832]">
                      <Zap className="h-4 w-4 fill-[#00A832]" /> TS Marketing Solution
                    </span>
                    <span className="rounded-full bg-[#00A832]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#00A832]">Automated ROI</span>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A832]/20 text-[#00A832] border border-[#00A832]/40">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">Dominant Google Search Visibility</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Technical & content SEO structured to capture high-intent local buyers first.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A832]/20 text-[#00A832] border border-[#00A832]/40">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">24/7 AI Chatbot Instant Qualification</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Engage visitors instantly day or night, answer FAQs, and book meetings directly into your calendar.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A832]/20 text-[#00A832] border border-[#00A832]/40">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">High-Speed Conversion Optimized Design</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Sub-second load times with mobile-first UI engineered specifically to drive sales inquiries.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between rounded-xl border border-[#00A832]/40 bg-[#00A832]/15 p-4">
                  <div className="text-xs font-semibold text-white">Turn Google Traffic into Paying Clients</div>
                  <a href="#audit" className="rounded-lg bg-gradient-to-r from-[#0033A0] to-[#00A832] px-4 py-2 text-xs font-bold text-white shadow hover:opacity-90">
                    Get Free Audit
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

