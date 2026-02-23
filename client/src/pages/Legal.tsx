import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";

const sections = [
  {
    title: "Service terms",
    content:
      "All engagements are scoped and confirmed in writing before kickoff. Delivery timelines are aligned during private intake and begin once assets and approvals are confirmed.",
  },
  {
    title: "Payments",
    content:
      "Projects are billed on a fixed-fee basis with payment due before the sprint begins. Additional requests outside the locked scope are handled as a separate engagement.",
  },
  {
    title: "Intellectual property",
    content:
      "Final deliverables and source files are transferred to the client upon full payment. We reserve the right to showcase non-confidential work unless NDA terms apply.",
  },
  {
    title: "Confidentiality",
    content:
      "We treat all project information as confidential and can sign NDAs before sharing any internal materials or case notes.",
  },
  {
    title: "Limitations",
    content:
      "We do not provide legal, financial, or compliance advice. Clients are responsible for reviewing final content for regulatory requirements.",
  },
  {
    title: "Contact",
    content: (
      <>
        For legal inquiries or formal notices, email{" "}
        <a className="text-primary hover:text-cyan-400 transition-colors" href="mailto:hello@web24h.ae">
          hello@web24h.ae
        </a>
        .
      </>
    ),
  },
];

export default function Legal() {
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
                <Sparkles className="w-3.5 h-3.5" />
                Legal
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8 drop-shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
                TERMS <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">AND CONDITIONS.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
                A concise overview of our engagement terms. Full terms are provided during private intake.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {sections.map((section) => (
                <div key={section.title} className="surface-elite p-6 sm:p-8 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <div className="text-lg sm:text-xl font-black text-white mb-3">{section.title}</div>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
