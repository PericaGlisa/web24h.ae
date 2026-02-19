import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Globe, ShieldCheck, Sparkles } from "lucide-react";

const principles = [
  {
    title: "Speed with precision",
    description: "Fast delivery without sacrificing strategic clarity or quality.",
  },
  {
    title: "Premium by default",
    description: "Every surface, interaction, and message is crafted for authority.",
  },
  {
    title: "Transparent execution",
    description: "Clear milestones, visible progress, and decisive approvals.",
  },
];

export default function About() {
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
                About
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                A PRIVATE <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">DIGITAL STUDIO.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                We deliver premium websites in 24 hours for founders and teams who want decisive outcomes without long timelines.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
              <div>
                <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Our story</div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  Built for founders who move fast.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-6">
                  Website 24h is a senior-led studio designed for speed. We focus on strategic clarity, premium aesthetics,
                  and performance delivery so your launch looks and feels world-class.
                </p>
                <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
                  Our process removes the slow parts: unclear scope, fragmented decision-making, and endless revisions.
                  Instead, we deliver a decisive sprint with clear gates and exceptional output.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Average delivery", value: "24H" },
                  { label: "Response SLA", value: "15 MIN" },
                  { label: "Engagements per week", value: "Limited" },
                ].map((item) => (
                  <div key={item.label} className="surface-elite px-6 py-5 flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">{item.label}</div>
                    <div className="text-lg font-black text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {principles.map((principle) => (
                <div key={principle.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-lg sm:text-xl font-black text-white mb-2">{principle.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Senior-led delivery", text: "Strategy, design, and engineering are led by senior talent." },
                { icon: Globe, title: "Global-ready output", text: "Performance-first builds optimized for any market." },
                { icon: Sparkles, title: "Premium brand signal", text: "Every touchpoint is polished to high-end standards." },
              ].map((item) => (
                <div key={item.title} className="surface-elite p-6 sm:p-8">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Work with us</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Secure a private intake slot.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                We accept a limited number of engagements per week to keep execution sharp.
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
