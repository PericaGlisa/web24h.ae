import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Cpu, Gauge, Globe, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";

const pillars = [
  {
    title: "Conversion Architecture",
    description: "Every section is engineered to move a decision forward without friction.",
    points: ["Message hierarchy", "CTA sequencing", "Lead capture clarity"],
    icon: Gauge,
  },
  {
    title: "Premium Visual System",
    description: "Brand-grade aesthetics with a custom visual language that signals authority.",
    points: ["Typography scale", "Surface layering", "Cinematic spacing"],
    icon: Sparkles,
  },
  {
    title: "Performance Engineering",
    description: "Fast load, tight interactions, and a clean technical handover.",
    points: ["Core Web Vitals pass", "Optimized assets", "Global delivery"],
    icon: Zap,
  },
  {
    title: "Systems Integration",
    description: "Your stack connected cleanly so the site works as a revenue engine.",
    points: ["Analytics events", "CRM and email", "Booking and routing"],
    icon: Layers,
  },
];

const signals = [
  { label: "Median launch", value: "24H", icon: Cpu },
  { label: "Response window", value: "15 MIN", icon: ShieldCheck },
  { label: "Global delivery", value: "CDN", icon: Globe },
];

export default function Features() {
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
                Premium Features
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                BUILT TO <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">CONVERT FAST.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                A flagship website is a system, not a template. We combine strategic messaging, premium design, and performance engineering to deliver a site that sells.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
              <div>
                <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Capability pillars</div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  The system behind the speed.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                  Each build is tuned for clarity, pace, and trust. These pillars are what allow us to ship quickly without sacrificing polish.
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
              {pillars.map((pillar) => (
                <div key={pillar.title} className="surface-elite p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">{pillar.title}</div>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.points.map((point) => (
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
                  title: "Investor-grade presence",
                  description: "A site that signals credibility and scales with your narrative.",
                },
                {
                  label: "Execution",
                  title: "One decisive sprint",
                  description: "Focused, milestone-driven delivery with clear sign-offs.",
                },
                {
                  label: "Handover",
                  title: "Clean ownership",
                  description: "Structured delivery so your team can run it without friction.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">{item.label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-3">{item.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 surface-elite p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-2">Stack</div>
                <div className="text-xl sm:text-2xl font-black text-white">Modern, fast, and conversion-ready.</div>
                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mt-2 max-w-2xl">
                  We build with React, TypeScript, and high-performance tooling to ensure speed and long-term flexibility.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-500">
                {["React", "TypeScript", "Tailwind", "Vite", "Node", "Analytics"].map((tool) => (
                  <span key={tool} className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Ready to launch</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Move from brief to live in 24 hours.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                If you need a premium site that looks exceptional and ships fast, request a private intake slot.
              </p>
              <Link href="/private-intake">
                <Button size="lg" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg rounded-full bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.04]">
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
