import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

const brands = ["TSMC", "APEX HVAC", "BRIGHTSMILE DENTAL", "MERIDIAN LAW", "FORGE ELECTRIC", "KESTREL ROOFING"];

export function TrustBar() {
  const t = useT();
  const loop = [...brands, ...brands];
  return (
    <section aria-label="Trusted by" className="border-y border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.trustBar.label}
          </p>
        </Reveal>
        <div
          className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="animate-marquee pause-on-hover flex w-max items-center gap-16 whitespace-nowrap">
            {loop.map((b, i) => (
              <div
                key={b + i}
                className="group/item flex items-center gap-2.5 rounded-full border border-white/5 bg-elevated/40 px-4 py-2 text-xs font-semibold tracking-widest text-muted-foreground/80 transition-all duration-300 hover:border-primary-glow/40 hover:bg-elevated hover:text-foreground hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <span className="h-2 w-2 rounded-full bg-primary-glow/60 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:bg-primary-glow" />
                <span className="font-display">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
