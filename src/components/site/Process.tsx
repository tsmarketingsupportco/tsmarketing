import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

export function Process() {
  const t = useT();

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{t.process.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t.process.heading}</h2>
          <p className="mt-4 text-muted-foreground">
            {t.process.subheading}
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="relative">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block"
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
                  <div className="card-surface group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-glow/40 bg-primary/10 font-display text-sm font-bold text-primary-glow shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-110">
                        {s.n}
                      </div>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
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
