import { Search, Globe, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";
import { useT } from "@/lib/useLocale";
import { motion, AnimatePresence } from "framer-motion";

const ServiceIcons = [Search, Globe, MessageSquare];

export function Services() {
  const [activeTab, setActiveTab] = useState(1); // Default to Web (center)
  const [activePrompt, setActivePrompt] = useState(0);
  const t = useT();
  const { items: services, samplePrompts } = t.services;

  const currentService = services[activeTab];
  const Icon = ServiceIcons[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden tint-services">
      {/* Glow aura */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#0033A0]/20 via-[#00A832]/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#00A832]">{t.services.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.services.subheading}
          </p>
        </Reveal>

        {/* Interactive Tab Bar */}
        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="inline-flex rounded-2xl border border-white/10 bg-[#001B70]/40 p-1.5 backdrop-blur-xl shadow-xl">
            {services.map((s, idx) => {
              const TabIcon = ServiceIcons[idx];
              const isActive = activeTab === idx;

              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                      ? "text-white shadow-lg shadow-[#0033A0]/30"
                      : "text-muted-foreground hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0033A0] to-[#00A832]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <TabIcon className="relative h-4 w-4" />
                  <span className="relative font-display">{s.title.split(" ")[0]} Stack</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tabbed Content Showcase Panel */}
        <Reveal delay={0.2} className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-[#00A832]/40 bg-surface/90 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center"
            >
              {/* Left Column: Detailed Service Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A832]/20 border border-[#00A832]/40 text-[#00A832]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="rounded-full bg-[#00A832]/20 px-3 py-1 text-xs font-semibold text-[#00A832] border border-[#00A832]/30">
                      {currentService.outcome}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                  {currentService.title}
                </h3>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {currentService.desc}
                </p>

                <ul className="space-y-3 pt-2">
                  {currentService.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A832]/20 text-[#00A832]">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href="#audit"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0033A0] to-[#00A832] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    <span>Get Free Audit For {currentService.title.split(" ")[0]}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Live Media / Demo */}
              <div className="mt-8 lg:mt-0 lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-background/80 p-2 shadow-2xl">
                  {activeTab === 0 && (
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07FisSLtmYoriVcbenmrqyu1MZkQW2T9zoshDRCxP"
                          alt="SEO Service Demo"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001B70]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between rounded-xl bg-background/90 p-3 backdrop-blur-md border border-white/10">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-[#00A832]" />
                            <span className="text-xs font-semibold text-white">Targeted Keyword #1 Ranking</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#00A832]">+480% Organic</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07FisRNJRTYFyXqM6huZeGJ9jf3KFxlBbY2NdCHAD"
                          alt="Website Design Demo"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001B70]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 rounded-xl bg-background/90 p-3 backdrop-blur-md border border-white/10 flex justify-between items-center text-xs">
                          <span className="font-semibold text-white">Sub-second Speed & High Conversion</span>
                          <span className="font-bold text-[#00A832]">100/100 Speed</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-3 p-2">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07Fisv8lPbhVOYbLXyFMdDIha2uolgpVP15jrBwxs"
                          alt="Chatbot Demo"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001B70] via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          {samplePrompts.map((p, idx) => (
                            <button
                              key={p.q}
                              type="button"
                              onClick={() => setActivePrompt(idx)}
                              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md transition-all ${activePrompt === idx
                                  ? "bg-[#00A832] text-white shadow-md"
                                  : "bg-background/80 text-muted-foreground hover:text-white"
                                }`}
                            >
                              {p.q}
                            </button>
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/95 p-3 text-xs text-foreground backdrop-blur-md border border-white/10 shadow-lg">
                          <span className="text-[#00A832] font-bold">AI Assistant:</span> {samplePrompts[activePrompt].a}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

