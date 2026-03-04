import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const plan = {
  name: "SIGNATURE 24H",
  price: "1999",
  description: "One standout package with the strongest features from every tier, delivered in 24 hours.",
  audience: "Best for brands that want a premium launch without complexity",
  features: [
    "Up to 5 pages (or equivalent conversion sections)",
    "Premium visual direction + clear conversion flow",
    "Event tracking setup for key actions",
    "Up to 2 integrations (booking, email, CRM, or lead tools)",
    "Performance pass with Core Web Vitals focus",
    "Full QA on mobile and desktop",
    "Secure global hosting + SSL",
    "Clear handover with next-step roadmap",
  ],
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950 to-slate-900/90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[860px] lg:h-[860px] bg-primary/10 blur-[160px] opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-12 sm:mb-20 lg:mb-24 2xl:mb-28">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/15 text-white/80 text-[10px] font-bold tracking-[0.35em] uppercase mb-6">
            Simple Pricing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            ONE PREMIUM <br /><span className="text-gradient">PACKAGE.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            No confusing tiers. One elite offer built to launch fast and convert.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">24-hour launch</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Expert team</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Confidential by default</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-1 rounded-[2rem] sm:rounded-[2.75rem] bg-linear-to-b from-primary/80 via-primary/25 to-transparent shadow-[0_60px_180px_rgba(0,210,184,0.35)]">
            <div className="h-full bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-[1.9rem] sm:rounded-[2.6rem] p-6 sm:p-10 lg:p-12 flex flex-col relative overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 px-3 py-1 bg-primary text-slate-950 text-[10px] font-black rounded-full uppercase tracking-tighter shadow-[0_14px_40px_rgba(0,210,184,0.35)]">
                Only Offer
              </div>

              <div className="mb-8 sm:mb-10">
                <h3 className="text-xs sm:text-sm font-black tracking-[0.35em] text-primary uppercase mb-4 drop-shadow-[0_0_24px_rgba(0,210,184,0.35)]">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-500 font-bold">AED</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">{plan.price}</span>
                </div>
                <p className="mt-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">{plan.description}</p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.35em] text-slate-500 font-bold">{plan.audience}</div>
              </div>

              <div className="hairline mb-8 sm:mb-10" />

              <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-sm font-medium text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full h-14 sm:h-16 font-black text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 shadow-[0_28px_70px_rgba(0,210,184,0.45)] transition-all duration-500 hover:scale-[1.02]"
              >
                <Link
                  href="/private-intake?package=launch"
                  onClick={() => window.sessionStorage.setItem("selectedPackage", "Launch")}
                >
                  SECURE THIS PACKAGE
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 sm:mt-24 lg:mt-32 pt-12 sm:pt-16 border-t border-white/5 flex flex-wrap justify-center gap-3 sm:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
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
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Quick Answers</div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">Common questions, clear answers.</h3>
              <p className="text-sm sm:text-base text-slate-400 font-light">Simple scope, clear timing, no surprises.</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  How soon can we start?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Most projects start within 24 hours of the brief. We confirm the plan, then begin right away.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  What makes this feel high-quality?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Clear writing, strong visuals, and a smooth experience on every device are built in.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Can you connect our tools?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Yes. We can connect booking, email, and contact list tools so leads flow smoothly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Do you help after launch?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Yes. We can keep improving speed, messaging, and results when you need it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-white/10 rounded-2xl bg-white/5 px-4 sm:px-6 transition-colors hover:bg-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold py-5">
                  Can we see past work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  Yes. We can share examples and arrange calls when appropriate, with confidentiality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
