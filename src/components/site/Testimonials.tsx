import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const t = useT();

  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 md:py-32 relative overflow-hidden tint-testimonials">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#00A832]">{t.testimonials.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t.testimonials.heading}
          </h2>
        </Reveal>

        {/* Asymmetric Showcase Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          {t.testimonials.quotes.map((q, i) => {
            const isFeatured = i === 0;

            return (
              <div key={q.a} className={isFeatured ? "lg:col-span-7" : "lg:col-span-5"}>
                <Reveal delay={i * 0.1}>
                  <figure
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                      isFeatured
                        ? "border-[#00A832]/50 bg-gradient-to-br from-[#001B70] via-surface to-[#0033A0]/30 shadow-2xl p-10"
                        : "border-white/10 bg-surface/80 hover:border-[#0033A0]/50 hover:bg-surface p-8"
                    }`}
                  >
                    {/* Floating Quote Icon */}
                    <Quote className="absolute right-6 top-6 h-12 w-12 text-[#00A832]/15 transition-transform group-hover:scale-110" />

                    <div>
                      {/* 5-Star Rating */}
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>

                      <blockquote className="mt-6 text-lg leading-relaxed text-white font-medium md:text-xl">
                        "{q.q}"
                      </blockquote>
                    </div>

                    <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <div>
                        <div className="font-display font-semibold text-white text-base">{q.a}</div>
                        <div className="text-sm text-muted-foreground">{q.r}</div>
                      </div>
                      <span className="rounded-full bg-[#00A832]/20 px-3 py-1 text-xs font-semibold text-[#00A832] border border-[#00A832]/30">
                        Verified Client
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

