import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export function FAQ() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 tint-faq overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0033A0]/15 via-[#00A832]/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A832]/30 bg-[#00A832]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A832]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{t.faq.label}</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl tracking-tight">
            {t.faq.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 space-y-4">
          {t.faq.items.map((f, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={f.q}
                className={`group card-surface overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00A832]/60 bg-[#001B70]/40 shadow-xl shadow-[#0033A0]/20"
                    : "border-white/10 bg-surface/70 hover:border-[#00A832]/30 hover:bg-surface"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display transition-colors duration-200 ${
                      isOpen ? "text-[#00A832] font-semibold" : "text-foreground group-hover:text-white"
                    }`}
                  >
                    {f.q}
                  </span>
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#00A832]/50 bg-[#00A832]/20 text-[#00A832] rotate-180 shadow-[0_0_15px_rgba(0,168,50,0.3)]"
                        : "border-white/10 bg-background/50 text-muted-foreground group-hover:border-[#0033A0]/40 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-4 text-[15px] leading-relaxed text-muted-foreground/90">
                        <div className="flex gap-3">
                          <Sparkles className="h-5 w-5 shrink-0 text-[#00A832] opacity-80 mt-0.5" />
                          <div>{f.a}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

