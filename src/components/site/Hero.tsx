import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useT } from "@/lib/useLocale";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const t = useT();

  const mx = useMotionValue(50);
  const my = useMotionValue(20);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.4 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  const wordAnim = (i: number) => ({
    initial: { opacity: 0, y: 14, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Mesh gradient */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className={`absolute inset-0 ${reduce ? "" : "animate-aurora"}`}
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, rgba(0, 51, 160, 0.45), transparent 60%), radial-gradient(50% 45% at 75% 30%, rgba(0, 168, 50, 0.35), transparent 65%), radial-gradient(55% 50% at 50% 80%, rgba(0, 27, 112, 0.50), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Cursor spotlight */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          style={{
            background: useTransform(
              [sx, sy],
              ([x, y]) =>
                `radial-gradient(480px circle at ${x}% ${y}%, rgba(0, 168, 50, 0.20), transparent 60%)`,
            ),
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Asymmetrical Typography & CTAs */}
          <div className="text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00A832]/30 bg-[#00A832]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A832]"
            >
              <span className="h-2 w-2 rounded-full bg-[#00A832] animate-pulse" />
              <span>TS Marketing Stack</span>
            </motion.div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                <span className="block text-white">
                  {t.hero.line1.map((w, i) => (
                    <motion.span key={w + i} className="inline-block" {...wordAnim(i)}>
                      {w}
                      {i < t.hero.line1.length - 1 && "\u00A0"}
                    </motion.span>
                  ))}
                </span>
                  <span className="block mt-1 text-white">
                    {t.hero.line2.map((w, i) => (
                      <motion.span
                        key={w + i}
                        className="inline-block"
                        {...wordAnim(t.hero.line1.length + i)}
                      >
                        {w}
                        {i < t.hero.line2.length - 1 && "\u00A0"}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed"
                >
                  {t.hero.subtitle}
                  <span className="font-semibold text-white"> {t.hero.subtitleHighlight}</span>
                  {t.hero.subtitleEnd}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href="#audit"
                    className="group relative inline-flex h-13 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 text-base font-bold text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)] transition-all hover:scale-[1.02] hover:bg-zinc-100 hover:shadow-[0_15px_35px_rgba(255,255,255,0.35)]"
                  >
                    <span className="relative">{t.hero.ctaPrimary}</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="relative transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                  </a>
                  <a
                    href="#work"
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </motion.div>

                {/* Asymmetrical Stats Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
                >
                  {t.hero.stats.map((s) => (
                    <div key={s.l} className="space-y-1">
                      <div className="font-display text-2xl font-bold text-[#00A832] md:text-3xl">
                        {s.v}
                      </div>
                      <div className="text-xs text-white/70 md:text-sm font-medium">{s.l}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: Visual Interactive Feature Card Showcase */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mx-auto max-w-lg lg:max-w-none"
                >
                  {/* Decorative radial brand glow */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0033A0]/40 via-[#00A832]/30 to-transparent blur-2xl animate-pulse-glow" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#001B70]/50 p-4 shadow-2xl backdrop-blur-xl md:p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <span className="h-3 w-3 rounded-full bg-[#00A832]" />
                        <span className="ml-2 text-xs font-mono text-white/70">ts-marketing.com</span>
                      </div>
                      <span className="rounded-full bg-[#00A832]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#00A832]">
                        Live Stack
                      </span>
                    </div>

                    <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 aspect-[4/3] w-full group/heroimg">
                      <img
                        src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07FisRNJRTYFyXqM6huZeGJ9jf3KFxlBbY2NdCHAD"
                        alt="Website Service Demo"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover/heroimg:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001B70] via-transparent to-transparent opacity-80" />

                      {/* Floating Micro Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-background/80 p-3 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A832]/20 text-[#00A832]">
                              ✓
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white">AI Lead Conversion</div>
                              <div className="text-[11px] text-white/70">
                                24/7 Automated Booking active
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#00A832]">+340%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
          </div>

          <motion.a
            href="#problem"
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mx-auto mt-16 flex h-8 w-8 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className={reduce ? "" : "animate-bob"}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </motion.a>
        </div>
    </section>
  );
}
