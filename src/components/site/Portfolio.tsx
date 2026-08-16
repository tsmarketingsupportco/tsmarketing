import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

export function Portfolio() {
  const t = useT();

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#00A832]">{t.portfolio.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {t.portfolio.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.portfolio.subheading}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.portfolio.cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="font-display text-4xl font-extrabold text-white drop-shadow-xl tracking-tight">{c.metric}</div>
                    <div className="mt-1 text-sm font-medium text-white/90 drop-shadow">{c.label}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="text-xs uppercase tracking-widest text-[#00A832] font-semibold">{c.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    <span className="story-link">{c.title}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
