import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const plans = [
  {
    name: "LAUNCH",
    price: "1999",
    description: "A premium one-page site shipped fast, with clean handover.",
    audience: "Best for first-time launches",
    features: [
      "Single-page layout (hero + key sections)",
      "Light brand kit (or implement yours)",
      "Contact form + lead capture",
      "GA4 + tracking pixel setup",
      "Global deploy + SSL"
    ],
    highlight: false
  },
  {
    name: "GROWTH",
    price: "2999",
    description: "More pages, more tracking, and one core integration.",
    audience: "Best for conversion-driven teams",
    features: [
      "Up to 3 pages (or equivalent sections)",
      "CTA strategy + conversion layout",
      "Event tracking for key actions",
      "1 integration (CRM/booking/email)",
      "24h delivery window"
    ],
    highlight: true
  },
  {
    name: "SCALE",
    price: "3999",
    description: "A fuller build with advanced integrations and performance pass.",
    audience: "Best for multi-page expansions",
    features: [
      "Up to 5 pages (or equivalent sections)",
      "2 integrations (CRM + booking/automation)",
      "Performance pass (Core Web Vitals focus)",
      "QA across mobile + desktop",
      "Handover checklist + next steps"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950 to-slate-900/90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[860px] lg:h-[860px] bg-primary/10 blur-[160px] opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-12 sm:mb-20 lg:mb-24 2xl:mb-28">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Executive Investment
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            COMMAND THE <br /><span className="text-gradient">MARKET.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            This website is the proof. Every tier delivers brand-grade quality with measured performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">24h delivery</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Senior-led team</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">NDA-first</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-1 rounded-[2rem] sm:rounded-[2.75rem] group min-w-0 ${plan.highlight ? "bg-linear-to-b from-primary/70 via-primary/20 to-transparent shadow-[0_50px_160px_rgba(0,210,184,0.28)] lg:-translate-y-3" : "bg-white/5"}`}
            >
              <div className="h-full bg-slate-950/70 backdrop-blur-xl border border-white/10 rounded-[1.9rem] sm:rounded-[2.6rem] p-5 sm:p-8 lg:p-10 2xl:p-12 flex flex-col relative overflow-hidden">
                {plan.highlight && (
                   <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 bg-primary text-slate-950 text-[10px] font-black rounded-full uppercase tracking-tighter shadow-[0_12px_40px_rgba(0,210,184,0.35)]">
                     Most Chosen
                   </div>
                )}
                
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-500 font-bold">AED</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">{plan.description}</p>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.35em] text-slate-500 font-bold">{plan.audience}</div>
                </div>

                <div className="hairline mb-7 sm:mb-10" />

                <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-12 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm font-medium text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full h-12 sm:h-16 font-black text-sm sm:text-lg transition-all duration-500 ${
                    plan.highlight
                    ? "bg-primary hover:bg-cyan-400 text-slate-950 shadow-[0_22px_50px_rgba(0,210,184,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  <Link
                    href={`/private-intake?package=${plan.name.toLowerCase()}`}
                    onClick={() => window.sessionStorage.setItem("selectedPackage", plan.name)}
                  >
                    BEGIN ENGAGEMENT
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-32 pt-12 sm:pt-16 border-t border-white/5 flex flex-wrap justify-center gap-3 sm:gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {["Resend", "Cal.com", "WhatsApp", "Google", "Notion", "Cloudflare"].map((brand) => (
            <span
              key={brand}
              className="px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white font-bold tracking-tight text-sm sm:text-base"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 max-w-4xl mx-auto">
          <div className="relative surface-elite p-6 sm:p-10 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="absolute -top-24 right-0 w-64 h-64 bg-primary/10 blur-[140px] pointer-events-none" />
            <div className="relative text-center mb-8 sm:mb-10">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Private FAQ</div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">Decisions, answered.</h3>
              <p className="text-sm sm:text-base text-slate-400 font-light">Clear scope, clear delivery, zero ambiguity.</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  How fast can we start?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Most projects begin within 24 hours of brief approval. We align on scope, then execute immediately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  What makes this premium?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  High-end visual systems, conversion-grade UX, and performance engineering are baked into every build.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Can we integrate our stack?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Yes. We connect CRMs, analytics, booking, and custom APIs with clean handover.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Do you support ongoing optimization?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  We offer ongoing performance tuning, A/B testing, and conversion refinement on request.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Can we speak to references?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Yes. Reference calls are available for qualified leads under NDA.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
