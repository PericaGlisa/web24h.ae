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
    <section id="pricing" className="py-24 sm:py-28 lg:py-36 2xl:py-44 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-12 sm:mb-20 lg:mb-24 2xl:mb-28">
          <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Executive Investment</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-black text-white mb-6">
            COMMAND THE <br /><span className="text-gradient">MARKET.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light">
            This website is the proof. Every tier delivers brand-grade quality with measured performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-1 rounded-[2rem] sm:rounded-[2.75rem] group min-w-0 ${plan.highlight ? "bg-linear-to-b from-primary/60 via-primary/15 to-transparent shadow-[0_40px_140px_rgba(0,210,184,0.2)]" : "bg-white/5"}`}
            >
              <div className="h-full bg-slate-950 rounded-[1.9rem] sm:rounded-[2.6rem] p-5 sm:p-8 lg:p-10 2xl:p-12 flex flex-col relative overflow-hidden">
                {plan.highlight && (
                   <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 bg-primary text-slate-950 text-[10px] font-black rounded-full uppercase tracking-tighter">
                     Founders Choice
                   </div>
                )}
                
                <div className="mb-7 sm:mb-10">
                  <h3 className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-500 font-bold">AED</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">{plan.description}</p>
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

                <Link href={`/private-intake?package=${plan.name.toLowerCase()}`}>
                  <Button 
                    onClick={() => window.sessionStorage.setItem("selectedPackage", plan.name)}
                    className={`w-full h-12 sm:h-16 rounded-2xl font-black text-sm sm:text-lg transition-all duration-500 ${
                      plan.highlight 
                      ? "bg-primary hover:bg-cyan-400 text-slate-950 shadow-[0_18px_40px_rgba(0,210,184,0.3)]" 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    BEGIN ENGAGEMENT
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto surface-elite p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-2">Included in every tier</div>
              <div className="text-xl sm:text-2xl font-black text-white">Executive-grade delivery, always.</div>
              <div className="mt-2 text-sm text-slate-400">Transparent scope, milestone sign-off, and post-launch QA.</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["NDA", "Founder Brief", "Global CDN", "Post-Launch QA"].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 lg:mt-32 pt-12 sm:pt-16 border-t border-white/5 flex flex-wrap justify-center gap-3 sm:gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {["Resend", "Cal.com", "WhatsApp", "Google"].map((brand) => (
            <span
              key={brand}
              className="px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white font-bold tracking-tight text-sm sm:text-base"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Private FAQ</div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">Decisions, answered.</h3>
          </div>
          <div className="surface-elite p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold">
                  How fast can we start?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Most projects begin within 24 hours of brief approval. We align on scope, then execute immediately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold">
                  What makes this premium?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  High-end visual systems, conversion-grade UX, and performance engineering are baked into every build.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold">
                  Can we integrate our stack?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Yes. We connect CRMs, analytics, booking, and custom APIs with clean handover.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold">
                  Do you support ongoing optimization?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  We offer ongoing performance tuning, A/B testing, and conversion refinement on request.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-white/10">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold">
                  Can we speak to references?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
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
