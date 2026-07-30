import { PhoneOff, EyeOff, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const pains = [
  {
    k: "01",
    t: "You're invisible on Google",
    d: "When someone searches \"emergency plumber near me\" or \"best dentist in town,\" your competitor shows up.",
    Icon: EyeOff,
  },
  {
    k: "02",
    t: "Your website doesn't close",
    d: "Traffic comes, looks around, and leaves. No call, no form, no booking.",
    Icon: PhoneOff,
  },
  {
    k: "03",
    t: "Leads slip through at night",
    d: "A homeowner has a burst pipe at 11pm. They message three companies. The first one to respond wins.",
    Icon: Clock,
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">The problem</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Every Day You Wait, Competitors Win More Guests.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div className="card-surface group relative h-full overflow-hidden rounded-2xl p-8 hover:-translate-y-1 hover:border-red-500/30 transition-all duration-300">
                {/* Subtle visual red warning aura on hover */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 transition-transform duration-300 group-hover:scale-110">
                      <p.Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xs font-semibold uppercase tracking-wider text-red-400/80">Pain {p.k}</div>
                  </div>

                </div>
                
                <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

