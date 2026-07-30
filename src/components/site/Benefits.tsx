import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

export function Benefits() {
  const t = useT();

  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{t.benefits.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t.benefits.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.items.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.06}>
              <div className="group h-full bg-elevated p-8 transition-colors duration-300 hover:bg-surface">
                <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  <span className="bg-gradient-to-br from-white to-primary-glow bg-clip-text text-transparent">
                    {benefit.headline}
                  </span>
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">{benefit.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
