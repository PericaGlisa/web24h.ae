import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Gauge, Globe, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Conversion Architecture",
    description: "We structure the narrative so every section moves a decision forward.",
    points: ["Offer clarity", "CTA sequencing", "Lead capture flow"],
    icon: Gauge,
  },
  {
    title: "Premium Visual System",
    description: "High-end design that communicates authority and premium positioning.",
    points: ["Typography hierarchy", "Surface depth", "Cinematic pacing"],
    icon: Sparkles,
  },
  {
    title: "Performance Delivery",
    description: "Fast load, tight interactions, and globally optimized delivery.",
    points: ["Core Web Vitals", "Asset optimization", "Global CDN"],
    icon: Zap,
  },
  {
    title: "Systems Integration",
    description: "Clean connectivity with your stack so the site converts in real time.",
    points: ["Analytics events", "CRM handoff", "Automation"],
    icon: Layers,
  },
];

const signals = [
  { label: "Launch speed", value: "24H", icon: ShieldCheck },
  { label: "Response SLA", value: "15 MIN", icon: Gauge },
  { label: "Delivery", value: "GLOBAL", icon: Globe },
];

export default function Capabilities() {
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
                Capabilities
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                PREMIUM <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">EXECUTION STACK.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                Everything we ship is purpose-built for speed, clarity, and conversion. These capabilities are why we can deliver premium work in 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
              <div>
                <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Capability stack</div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  Precision, from strategy to launch.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                  We compress strategy, design, and engineering into a single coordinated sprint, without losing quality or intent.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {signals.map((signal) => (
                  <div key={signal.label} className="surface-elite px-5 py-4 flex items-center gap-3">
                    <signal.icon className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-black text-white">{signal.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">{signal.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="surface-elite p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">{capability.title}</div>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-5">
                    {capability.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {capability.points.map((point) => (
                      <span
                        key={point}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Outcome",
                  title: "Executive-grade presence",
                  description: "A site that immediately signals authority, clarity, and premium positioning.",
                },
                {
                  label: "Delivery",
                  title: "24-hour sprint",
                  description: "A single decisive window with milestone sign-off and no scope drift.",
                },
                {
                  label: "Ownership",
                  title: "Clean handover",
                  description: "Structured delivery so your team can run the asset without friction.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">{item.label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-3">{item.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Next step</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Align scope and secure your 24h slot.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Private intake keeps the project precise. We confirm availability and lock the plan in one call.
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
