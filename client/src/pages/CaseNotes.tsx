import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Lock, Sparkles } from "lucide-react";

const notes = [
  {
    title: "B2B SaaS Relaunch",
    sector: "Enterprise SaaS",
    outcome: "Conversion lift",
    metric: "+38%",
    summary: "Narrative reset, new hero system, and tighter CTA sequencing.",
  },
  {
    title: "Luxury Real Estate Launch",
    sector: "Real Estate",
    outcome: "Lead velocity",
    metric: "2.4x",
    summary: "Cinematic layout, localized messaging, and streamlined inquiry flow.",
  },
  {
    title: "Founder-Led Advisory",
    sector: "Professional Services",
    outcome: "Qualified leads",
    metric: "+52%",
    summary: "Positioning clarity and premium surface system that signals trust.",
  },
  {
    title: "Fintech Product Sprint",
    sector: "Fintech",
    outcome: "Demo bookings",
    metric: "+29%",
    summary: "Story-driven flow with stronger proof points and streamlined booking.",
  },
];

export default function CaseNotes() {
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
                Case Notes
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                NDA-ONLY <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">RESULTS LOG.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                Confidential outcomes, conversion lifts, and launch accelerations. Full case notes are shared under NDA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {notes.map((note) => (
                <div key={note.title} className="surface-elite p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">{note.sector}</div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                      <Lock className="w-3 h-3 text-primary" />
                      Confidential
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-2">{note.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-5">{note.summary}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      {note.outcome}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] sm:text-[11px] font-bold tracking-widest text-primary uppercase">
                      {note.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Under NDA only",
                  description: "We protect sensitive data, metrics, and positioning details.",
                },
                {
                  title: "Verified outcomes",
                  description: "Every case note includes performance deltas and launch results.",
                },
                {
                  title: "Actionable insights",
                  description: "Notes include what moved the needle, not just visuals.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">NDA Access</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Request the full case archive.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                We share full case notes after a private intake to protect sensitive details and positioning.
              </p>
              <Link href="/private-intake">
                <Button size="lg" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg rounded-full bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.04]">
                  REQUEST ACCESS <ArrowRight className="ml-2 w-5 h-5" />
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
