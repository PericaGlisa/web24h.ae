import { motion } from "framer-motion";
import { FileText, Palette, Code, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "EXECUTIVE BRIEF",
    description: "We compress your goals, assets, and offer into a decisive blueprint. A 15-minute intake locks scope and success metrics.",
    icon: FileText,
    time: "02H",
    tag: "Brief",
    durationHours: 2,
    deliverables: ["Scope + success metrics", "Offer + page map", "Brand/assets checklist (logo, copy, references)"],
    gate: "Brief locked"
  },
  {
    id: "02",
    title: "VISUAL DIRECTION",
    description: "We establish the brand system, hero story, and conversion path. You approve the direction before we build.",
    icon: Palette,
    time: "06H",
    tag: "Design",
    durationHours: 6,
    deliverables: ["Hero + section wire", "Light brand kit (color, type, components)", "CTA + funnel path"],
    gate: "Direction approved"
  },
  {
    id: "03",
    title: "BUILD & INTEGRATE",
    description: "We ship the site, wire analytics, and integrate your stack. Performance and responsiveness are enforced by default.",
    icon: Code,
    time: "10H",
    tag: "Build",
    durationHours: 10,
    deliverables: ["Pages + components built", "Analytics + events wired", "Forms/CRM/booking integrated"],
    gate: "QA pass"
  },
  {
    id: "04",
    title: "LAUNCH & VERIFY",
    description: "We deploy globally, run QA, and validate key flows. You get a ready-to-scale site in 24 hours.",
    icon: Rocket,
    time: "06H",
    tag: "Launch",
    durationHours: 6,
    deliverables: ["Global deploy + SSL", "Mobile + 4K checks", "Handover + next steps"],
    gate: "Launch confirmed"
  }
];

export function ProcessSteps() {
  const timeline = steps.reduce(
    (acc, step) => {
      const start = acc.cursor;
      const end = acc.cursor + step.durationHours;
      acc.items.push({ ...step, start, end });
      acc.cursor = end;
      return acc;
    },
    { items: [] as Array<(typeof steps)[number] & { start: number; end: number }>, cursor: 0 }
  ).items;

  return (
    <section id="process" className="py-24 sm:py-28 lg:py-36 relative bg-slate-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12 sm:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            White-Glove Delivery
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8">
            THE 24-HOUR <br />
            <span className="text-gradient-elite">VELOCITY SPRINT.</span>
          </h2>
          <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base max-w-3xl">
            A schematic 24-hour build: clear milestones, timed blocks, and approval gates. You always know what happens next—and what you get at each stage. If you already have a logo/brandbook, we implement it; if not, we create a light brand kit for the site (not a full brandbook).
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="surface-elite p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">24H MAP</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">H00 → H24</div>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-primary/15 via-cyan-500/10 to-blue-600/10 opacity-70" />
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                {timeline.map((step) => (
                  <div key={step.id} className="p-4 sm:p-5 bg-slate-950/60">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-primary shrink-0">
                          <step.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-white font-black tracking-tight truncate">{step.tag}</div>
                          <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">
                            H{String(step.start).padStart(2, "0")}–H{String(step.end).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                        {step.time}
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] text-slate-400 font-medium">
                      Gate: <span className="text-slate-200">{step.gate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              <span>Brief</span>
              <ChevronRight className="w-4 h-4 text-primary/50" />
              <span>Direction</span>
              <ChevronRight className="w-4 h-4 text-primary/50" />
              <span>Build</span>
              <ChevronRight className="w-4 h-4 text-primary/50" />
              <span>Launch</span>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-3 sm:gap-4">
            {[
              { label: "SLA", value: "15 MIN" },
              { label: "NDA", value: "STANDARD" },
              { label: "TEAM", value: "SENIOR-LED" }
            ].map((item) => (
              <div key={item.label} className="surface-elite px-4 sm:px-5 py-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">{item.label}</div>
                <div className="text-sm font-black text-white mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
          {timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-6 sm:p-8 lg:p-10 bg-slate-950 transition-colors flex flex-col min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] hover:bg-white/[0.03]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-start mb-10 sm:mb-12">
                <span className="text-3xl sm:text-4xl font-black text-white/10 group-hover:text-primary/20 transition-colors duration-500">
                  {step.id}
                </span>
                <div className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                  {step.time}
                </div>
              </div>

              <div className="mt-auto">
                <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-primary">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span>{step.tag}</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">
                  H{String(step.start).padStart(2, "0")}–H{String(step.end).padStart(2, "0")} • {step.gate}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="mt-5 space-y-2">
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
