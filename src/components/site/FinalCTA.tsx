import { useState } from "react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useT } from "@/lib/useLocale";

// Webhook URLs per language — update these to point to the correct endpoints
const WEBHOOK_URLS: Record<string, string> = {
  en: "https://autivex.up.railway.app/webhook-test/290e2994-f914-4872-8068-425394479554",
  ja: "https://autivex.up.railway.app/webhook-test/290e2994-f914-4872-8068-425394479554",
};

export function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [industry, setIndustry] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const locale = useLocale();
  const t = useT();
  const f = t.cta.fields;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;

    // Use industryOther if 'other' was selected
    if (data.industry === "other") {
      data.industry = data.industryOther;
    }
    delete data.industryOther;

    // ✅ Attach language info to the webhook payload
    data.language = locale;
    data.locale = locale === "ja" ? "Japanese" : "English";

    setStatus("loading");
    setSubmittedEmail(data.email);

    try {
      const webhookUrl = WEBHOOK_URLS[locale] ?? WEBHOOK_URLS["en"];
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="audit" className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-primary/30 px-8 py-20 text-center md:px-16 md:py-24 animate-pan-bg min-h-[500px] flex flex-col justify-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            {/* Background elements (twinkle) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 animate-twinkle"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0.5px, transparent 1px), radial-gradient(circle at 80% 60%, white 0.5px, transparent 1px)",
                backgroundSize: "48px 48px, 72px 72px",
              }}
            />

            <div className="relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-10"
                  >
                    {/* Checkmark Animation Stage */}
                    <div className="relative flex h-24 w-24 items-center justify-center">
                      {/* Ripple */}
                      <motion.div
                        initial={{ opacity: 1, scale: 0.8 }}
                        animate={{ opacity: 0, scale: 2 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-green-400/40"
                      />

                      {/* Circle */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                      >
                        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>

                      {/* Confetti particles */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.cos((i * 45 * Math.PI) / 180) * 80,
                            y: Math.sin((i * 45 * Math.PI) / 180) * 80,
                          }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.02, ease: "easeOut" }}
                          className="absolute h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: ["#FBBF24", "#34D399", "#60A5FA", "#F472B6"][i % 4],
                          }}
                        />
                      ))}
                    </div>

                    {/* Message Reveal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-8 max-w-md text-center"
                    >
                      <h3 className="text-3xl font-bold text-white mb-3">{t.cta.successHeading}</h3>
                      <p className="text-white/80 leading-relaxed">
                        {t.cta.successBody} <span className="font-semibold text-white">{submittedEmail}</span> {t.cta.successBodyEnd}
                      </p>

                      <button
                        onClick={() => {
                          setStatus("idle");
                          setIndustry("");
                        }}
                        className="mt-8 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {t.cta.submitAnother}
                      </button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold text-white md:text-5xl">
                      {t.cta.heading}
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-white/85">
                      {t.cta.subheading}
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="mx-auto mt-10 w-full max-w-xl relative"
                    >
                      {/* 2×2 field grid */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {/* Company Name */}
                        <div className="flex flex-col gap-1 text-left">
                          <label htmlFor="companyName" className="pl-1 text-xs font-medium text-white/70">
                            {f.companyName} <span className="text-white/50">*</span>
                          </label>
                          <input
                            id="companyName"
                            name="companyName"
                            type="text"
                            required
                            disabled={status === "loading"}
                            placeholder={f.companyPlaceholder}
                            className="h-12 rounded-xl border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md transition-colors focus:border-white/60 focus:bg-white/15 disabled:opacity-50"
                          />
                        </div>

                        {/* Company Industry */}
                        <div className="flex flex-col gap-1 text-left">
                          <label htmlFor="industry" className="pl-1 text-xs font-medium text-white/70">
                            {f.industry} <span className="text-white/50">*</span>
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            required
                            disabled={status === "loading"}
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="h-12 rounded-xl border border-white/25 bg-white/10 px-4 text-sm text-white outline-none backdrop-blur-md transition-colors focus:border-white/60 focus:bg-white/15 disabled:opacity-50 [&>option]:bg-[#081230] [&>option]:text-white"
                          >
                            <option value="" disabled>{f.industryPlaceholder}</option>
                            {t.cta.industries.map((ind) => (
                              <option key={ind.value} value={ind.value}>{ind.label}</option>
                            ))}
                          </select>
                          {industry === "other" && (
                            <input
                              id="industryOther"
                              name="industryOther"
                              type="text"
                              required
                              disabled={status === "loading"}
                              autoFocus
                              placeholder={f.otherPlaceholder}
                              className="mt-2 h-12 rounded-xl border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md transition-colors focus:border-white/60 focus:bg-white/15 disabled:opacity-50"
                            />
                          )}
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col gap-1 text-left">
                          <label htmlFor="phone" className="pl-1 text-xs font-medium text-white/70">
                            {f.phone} <span className="text-white/50">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            disabled={status === "loading"}
                            placeholder={f.phonePlaceholder}
                            className="h-12 rounded-xl border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md transition-colors focus:border-white/60 focus:bg-white/15 disabled:opacity-50"
                          />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-1 text-left">
                          <label htmlFor="email" className="pl-1 text-xs font-medium text-white/70">
                            {f.email} <span className="text-white/50">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={status === "loading"}
                            placeholder={f.emailPlaceholder}
                            className="h-12 rounded-xl border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md transition-colors focus:border-white/60 focus:bg-white/15 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* Submit button — full width below the grid */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="mt-4 inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#0033A0] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] disabled:opacity-80 disabled:hover:scale-100 disabled:hover:shadow-none"
                      >
                        {status === "loading" ? (
                          <>
                            <svg className="h-5 w-5 animate-spin text-[#0033A0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {f.sending}
                          </>
                        ) : (
                          f.submit
                        )}
                      </button>

                      {status === "error" && (
                        <p className="mt-3 text-sm text-red-300 font-medium">
                          {f.error}
                        </p>
                      )}

                      <p className="mt-3 text-xs text-white/50">
                        {f.fine}
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
