import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";
import { ArrowRight } from "lucide-react";

export function Process() {
  const t = useT();

  return (
    <section id="process" className="relative py-24 md:py-32 tint-process overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A832]/30 bg-[#00A832]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A832]">
            <span>{t.process.label}</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl tracking-tight">{t.process.heading}</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.process.subheading}
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="relative">
            {/* Animated Connecting Glowing Line */}
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-10 right-10 top-10 hidden h-0.5 bg-gradient-to-r from-[#0033A0] via-[#00A832] to-[#0033A0] md:block"
            />
            <ol className="grid gap-6 md:grid-cols-4">
              {t.process.steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A832]/50 hover:bg-[#001B70]/30">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00A832]/50 bg-[#00A832]/20 font-display text-sm font-bold text-[#00A832] shadow-[0_0_20px_rgba(0,168,50,0.35)] transition-transform duration-300 group-hover:scale-110">
                          {s.n}
                        </div>
                        {i < t.process.steps.length - 1 && (
                          <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground opacity-40 group-hover:text-[#00A832] group-hover:opacity-100 transition-colors" />
                        )}
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

