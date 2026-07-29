import { Search, Globe, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

const services = [
  {
    title: "Local SEO",
    outcome: "Show up when customers search for you.",
    desc: "We get you into the Google Map Pack and local rankings so when someone searches \"near me,\" your business is the first call they make.",
    points: ["Google Business Profile optimization", "Local keyword & content roadmap", "Reviews & citation building"],
    Icon: Search,
    visualType: "seo",
  },
  {
    title: "Conversion Websites",
    outcome: "A site that turns clicks into phone calls.",
    desc: "Fast, mobile first websites designed for one thing: getting visitors to call, book, or request. Built in weeks, not months.",
    points: ["Click to call & instant booking", "Subsecond load on mobile", "You own it no lock in"],
    Icon: Globe,
    visualType: "web",
  },
  {
    title: "AI Chatbots",
    outcome: "Capture every lead, even at 2am.",
    desc: "A custom AI assistant trained on your services that answers questions, books appointments 24/7.",
    points: ["Trained on your services & pricing", "Books appointments directly", "Hands off to you for repetitive task"],
    Icon: MessageSquare,
    visualType: "bot",
  },
];

const samplePrompts = [
  { q: "Are you open at 2am?", a: "Yes! Our team responds 24/7. How can we help you tonight?" },
  { q: "Book an appointment", a: "I can schedule that right now! What day works best for you?" },
];

export function Services() {
  const [activePrompt, setActivePrompt] = useState(0);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Our solution</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            One partner. Unlimited Growth.
          </h2>
          <p className="mt-4 text-muted-foreground">
          One connected system that helps people find you, trust you, and contact you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-8 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-primary)" }}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary-glow">
                      Visual Preview
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-primary-glow font-medium">{s.outcome}</p>
                  <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>

                  {/* Interactive Visual Element per Service */}
                  {s.visualType === "seo" && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-surface/90 shadow-inner group/img">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07FisSLtmYoriVcbenmrqyu1MZkQW2T9zoshDRCxP"
                          alt="SEO Demo"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                            Rank #1 Map Pack
                          </span>
                          <span className="text-[11px] font-mono text-muted-foreground">Google Live</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {s.visualType === "web" && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-surface/90 shadow-inner group/img">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07FisRNJRTYFyXqM6huZeGJ9jf3KFxlBbY2NdCHAD"
                          alt="Website Service Demo"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      </div>
                    </div>
                  )}

                  {s.visualType === "bot" && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary/30 bg-surface/90 shadow-inner group/img">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07Fisv8lPbhVOYbLXyFMdDIha2uolgpVP15jrBwxs"
                          alt="Chatbot Demo"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        <div className="absolute top-2 left-2 flex gap-1">
                          {samplePrompts.map((p, idx) => (
                            <button
                              key={p.q}
                              type="button"
                              onClick={() => setActivePrompt(idx)}
                              className={`rounded-md px-2 py-0.5 text-[10px] font-medium backdrop-blur-md transition-all ${
                                activePrompt === idx
                                  ? "bg-primary text-primary-foreground shadow"
                                  : "bg-background/80 text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {p.q}
                            </button>
                          ))}
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-background/90 p-2 text-[11px] text-foreground backdrop-blur-md border border-white/10 shadow">
                          <span className="text-primary-glow font-bold">AI Bot:</span> {samplePrompts[activePrompt].a}
                        </div>
                      </div>
                    </div>
                  )}
                </div>


                <ul className="relative mt-6 space-y-2 border-t border-border/60 pt-6 text-sm">
                  {s.points.map((pt, idx) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow transition-transform duration-300 group-hover:scale-110" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

