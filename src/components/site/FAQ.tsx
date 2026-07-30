import * as Accordion from "@radix-ui/react-accordion";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useLocale";

export function FAQ() {
  const t = useT();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{t.faq.label}</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t.faq.heading}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion.Root type="single" collapsible className="divide-y divide-border/60 border-y border-border/60">
            {t.faq.items.map((f) => (
              <Accordion.Item key={f.q} value={f.q} className="group">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-primary-glow">
                    <span>{f.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-6 pr-10">{f.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
