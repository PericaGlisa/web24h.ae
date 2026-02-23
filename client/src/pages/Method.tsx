import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Clock, Layers, ShieldCheck, Target } from "lucide-react";

const phases = [
  {
    time: "H00–H03",
    title: "Alignment Window",
    description: "We lock the offer, narrative, and conversion flow before anything moves.",
    deliverables: ["Scope map", "Offer framing", "Asset checklist"],
  },
  {
    time: "H03–H11",
    title: "Design Sprint",
    description: "We craft the visual system and key sections with decisive approvals.",
    deliverables: ["Hero + CTA", "Section architecture", "Light brand kit"],
  },
  {
    time: "H11–H20",
    title: "Build & Integrate",
    description: "We implement the site, connect your stack, and optimize performance.",
    deliverables: ["Responsive build", "Tracking events", "Integrations"],
  },
  {
    time: "H20–H24",
    title: "QA & Launch",
    description: "We validate flows, resolve edge cases, and deploy globally.",
    deliverables: ["QA pass", "Global deploy", "Handover notes"],
  },
];

export default function Method() {
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
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,210,184,0.12)]">
                <Clock className="w-3.5 h-3.5" />
                Method
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8 drop-shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
                DECISIVE <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">24H METHOD.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
                The method is designed for momentum. We compress the work into a single sprint with clear gates and zero ambiguity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {phases.map((phase) => (
                <div key={phase.title} className="surface-elite p-6 sm:p-7 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">{phase.time}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-3">{phase.title}</div>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-300 uppercase"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Decision Gates",
                  description: "Every phase is approved before we move to the next.",
                },
                {
                  icon: Target,
                  title: "Single Focus",
                  description: "No parallel projects. Your sprint gets full focus.",
                },
                {
                  icon: Layers,
                  title: "Systems First",
                  description: "Design, build, and integrations move in coordinated steps.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-elite p-6 sm:p-8 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</div>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="surface-elite p-6 sm:p-8 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">What we need</div>
                <div className="space-y-4">
                  {[
                    "Core offer and positioning",
                    "Primary conversion goal",
                    "Existing brand assets or references",
                    "Required integrations and tracking",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-elite p-6 sm:p-8 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">What you receive</div>
                <div className="space-y-4">
                  {[
                    "Live site deployed globally",
                    "Performance and QA pass",
                    "Handover checklist and next steps",
                    "Optional optimization roadmap",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3 h-3 text-primary" />
                      </div>
                      <div className="text-sm sm:text-base text-slate-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 surface-elite p-8 sm:p-12 lg:p-16 text-center border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Start the sprint</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Approve the brief. Launch in 24 hours.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Private intake aligns scope and availability. We confirm the timeline before we begin.
              </p>
              <Link href="/private-intake">
                <Button size="lg" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.04] rounded-2xl">
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
