import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "LAUNCH",
    price: "AED 1999",
    description: "One-page premium site with a fast conversion core.",
    features: [
      "Hero + key sections",
      "Light brand kit or implementation",
      "Lead capture form",
      "GA4 + tracking pixel",
      "Global deploy + SSL",
    ],
  },
  {
    name: "GROWTH",
    price: "AED 2999",
    description: "Multi-section layout with deeper conversion flow.",
    features: [
      "Up to 3 pages",
      "CTA strategy and layout",
      "Event tracking for key actions",
      "1 integration (CRM/booking/email)",
      "24h delivery window",
    ],
    highlight: true,
  },
  {
    name: "SCALE",
    price: "AED 3999",
    description: "Full build with performance pass and advanced tracking.",
    features: [
      "Up to 5 pages",
      "2 integrations (CRM + automation)",
      "Performance optimization pass",
      "QA across mobile and desktop",
      "Handover checklist",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32">
          <div className="glow-mesh" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="absolute inset-x-0 -top-24 h-64 bg-linear-to-b from-primary/20 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5" />
                Executive Investment
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                CLARITY <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">ON VALUE.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                Transparent, fixed pricing with premium delivery. Pick the engagement size that fits your launch scope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`surface-elite p-6 sm:p-8 flex flex-col ${
                    tier.highlight ? "border border-primary/40 shadow-[0_40px_140px_rgba(0,210,184,0.2)]" : ""
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">{tier.name}</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{tier.price}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">{tier.description}</p>
                  <div className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <div className="text-sm text-slate-300">{feature}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/private-intake?package=${tier.name.toLowerCase()}`}>
                    <Button
                      onClick={() => window.sessionStorage.setItem("selectedPackage", tier.name)}
                      className="h-12 sm:h-14 font-black text-sm sm:text-base transition-all duration-500 bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    >
                      BEGIN ENGAGEMENT <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6">
              <div className="surface-elite p-6 sm:p-8">
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">Included in every tier</div>
                <div className="space-y-3">
                  {["NDA-first workflow", "Executive SLA response", "Milestone sign-off", "Post-launch QA"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-primary" />
                      </div>
                      <div className="text-sm text-slate-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-elite p-6 sm:p-8">
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">Optional expansions</div>
                <div className="space-y-3">
                  {["Additional pages", "Copy refinement", "Automation flows", "Ongoing optimization"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <div className="text-sm text-slate-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Private intake</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Lock the scope. Secure the slot.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                We confirm your timeline, integrations, and goals before we start. That is how we ship premium work in 24 hours.
              </p>
              <Link href="/private-intake">
                <Button size="lg" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.04]">
                  REQUEST PRIVATE INTAKE <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
