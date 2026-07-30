import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

export function Testimonials() {
  const t = useT();

  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{t.testimonials.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t.testimonials.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.testimonials.quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 0.08}>
              <figure className="card-surface group flex h-full flex-col rounded-2xl p-8 hover:-translate-y-1">
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium text-foreground">{q.a}</div>
                  <div className="text-muted-foreground">{q.r}</div>
                </figcaption>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground">
                  "{q.q}"
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
