import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const roles = [
  {
    title: "Senior Product Designer",
    location: "Remote",
    focus: "Lead visual systems and conversion-first layouts.",
  },
  {
    title: "Front-End Engineer",
    location: "Remote",
    focus: "Ship high-performance interfaces with precision.",
  },
  {
    title: "Client Operations Lead",
    location: "Remote",
    focus: "Run intake, approvals, and delivery cadence.",
  },
];

export default function Careers() {
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
                Careers
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                BUILD WITH <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">INTENT.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                We are a senior-led studio that values speed, clarity, and premium execution. Join us to ship work that matters.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">{role.location}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-2">{role.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{role.focus}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-6">
              {[
                "Senior-led environment with clear ownership.",
                "Focused projects, no endless revisions.",
                "Remote-first with high standards.",
              ].map((item) => (
                <div key={item} className="surface-elite p-6 sm:p-8 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="surface-elite p-8 sm:p-12 lg:p-16 text-center">
              <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Apply</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                Send your portfolio or LinkedIn.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Email hello@website24h.com with a short note on the role you want and how you operate.
              </p>
              <Link href="/private-intake">
                <Button size="lg" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.04]">
                  START A CONVERSATION <ArrowRight className="ml-2 w-5 h-5" />
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
