import { motion } from "framer-motion";
import { FileText, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Intake",
    description: "Fill out our smart brief. We collect your assets, content, and goals in under 30 minutes.",
    icon: FileText,
    time: "0-2h"
  },
  {
    id: "02",
    title: "Design",
    description: "We create a premium visual system tailored to your brand identity and conversion goals.",
    icon: Palette,
    time: "2-8h"
  },
  {
    id: "03",
    title: "Build",
    description: "Our engineers develop your site using modern frameworks, setting up automation and integrations.",
    icon: Code,
    time: "8-18h"
  },
  {
    id: "04",
    title: "Launch",
    description: "Final QA, performance optimization, and live deployment to a global edge network.",
    icon: Rocket,
    time: "18-24h"
  }
];

export function ProcessSteps() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The <span className="text-primary">24-Hour</span> Sprint
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our streamlined workflow eliminates bloat. We focus purely on what matters to get you live.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center mb-8 mx-auto md:mx-0 relative z-10 group hover:border-primary transition-colors">
                  <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-full border border-white">
                    {step.time}
                  </div>
                  <step.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="text-center md:text-left">
                  <span className="block text-6xl font-display font-bold text-slate-100 dark:text-slate-800 absolute -top-10 -left-4 -z-10 select-none">
                    {step.id}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}