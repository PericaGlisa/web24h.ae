import { motion } from "framer-motion";
import { FileText, Palette, Code, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "INTELLIGENT INTAKE",
    description: "Our AI-driven brief captures your brand DNA in minutes. No fluff, just high-fidelity data points.",
    icon: FileText,
    time: "02H",
    tag: "Discovery"
  },
  {
    id: "02",
    title: "VISUAL ARCHITECTURE",
    description: "We don't 'design'—we engineer a visual system that commands attention and forces conversion.",
    icon: Palette,
    time: "06H",
    tag: "Design"
  },
  {
    id: "03",
    title: "CORE DEVELOPMENT",
    description: "Deployment of a hardened, scalable React architecture with sub-10ms response targets.",
    icon: Code,
    time: "10H",
    tag: "Build"
  },
  {
    id: "04",
    title: "GLOBAL DEPLOYMENT",
    description: "Instant propagation across our elite edge network. Your brand is now live and dominant.",
    icon: Rocket,
    time: "06H",
    tag: "Launch"
  }
];

export function ProcessSteps() {
  return (
    <section id="process" className="py-32 relative bg-slate-950 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            Surgical Execution
          </motion.div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-8">
            THE 24-HOUR <br />
            <span className="text-gradient">VELOCITY SPRINT.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-px bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-10 bg-slate-950 hover:bg-white/[0.02] transition-colors flex flex-col min-h-[400px]"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-black text-white/10 group-hover:text-primary/20 transition-colors duration-500">
                  {step.id}
                </span>
                <div className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                  {step.time}
                </div>
              </div>

              <div className="mt-auto">
                <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   {step.tag}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}