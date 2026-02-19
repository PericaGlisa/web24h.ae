import { motion } from "framer-motion";
import { Zap, Layout, Code2, Database, Rocket, ShieldCheck, Diamond, Star, Crown } from "lucide-react";

const features = [
  {
    icon: Diamond,
    title: "Bespoke Excellence",
    description: "Every pixel is handcrafted for market dominance. We don't follow trends; we set the gold standard in digital craft.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    icon: Crown,
    title: "Elite Performance",
    description: "Our proprietary architecture ensures sub-50ms response times globally. Speed is the ultimate luxury.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Star,
    title: "Deep Integration",
    description: "Full-stack automation that breathes life into your business. Connected, autonomous, and incredibly powerful.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 sm:py-28 lg:py-36 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold tracking-[0.35em] uppercase mb-6">
              Performance Prestige
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              PRECISION <br />
              <span className="text-gradient-elite">ENGINEERING.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              A premium system built for founders who demand velocity, clarity, and brand authority from day one.
            </p>
          </motion.div>
          
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="surface-elite p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6 group hover:bg-white/10 transition-all cursor-default"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="surface-elite p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">Signature Stack</div>
              <div className="flex flex-wrap gap-3">
                {["Motion Systems", "Conversion UX", "AI Automation", "Lead Capture", "Analytics", "Edge Delivery"].map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Visual Divider */}
        <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group border border-white/10">
          <div className="absolute inset-0 bg-slate-900">
             <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-slate-950 z-10" />
             <div className="glow-mesh opacity-40" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <div className="text-[5rem] sm:text-[7rem] lg:text-[12rem] font-black text-white/5 select-none leading-none">AURUM</div>
                </div>
             </div>
          </div>
          <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-6 sm:left-10 lg:left-12 right-6 sm:right-10 lg:right-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-20">
             <div className="max-w-md">
               <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">Precision Systems</div>
               <div className="text-lg sm:text-2xl font-bold text-white">Zero-Compromise Experience Layer</div>
             </div>
             <div className="h-px flex-1 bg-white/10 mx-12 hidden md:block" />
             <div className="md:text-right">
               <div className="text-2xl sm:text-4xl font-black text-white">99.99%</div>
               <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-bold">Reliability Index</div>
             </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 grid lg:grid-cols-3 gap-6">
          {[
            { title: "Conversion Lift", value: "+72%", note: "Luxury service firm launch" },
            { title: "Launch Time", value: "18h", note: "Series A startup rebrand" },
            { title: "Delivery Window", value: "24h", note: "From brief to launch" }
          ].map((item) => (
            <div key={item.title} className="surface-elite p-6 sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">Case Note</div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-3">{item.value}</div>
              <div className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</div>
              <div className="text-sm text-slate-400">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-6">Speed Notes</div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { quote: "Speed matters in business – plus a high-velocity decision making environment is more fun too.", role: "Jeff Bezos, Amazon (2016)" },
              { quote: "We have a saying: 'Move fast and break things.' The idea is that if you never break anything, you're probably not moving fast enough.", role: "Mark Zuckerberg, Facebook (2012)" },
              { quote: "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.", role: "Jack Welch, GE" }
            ].map((item) => (
              <div key={item.role} className="surface-elite p-6 sm:p-8">
                <div className="text-white text-base sm:text-lg font-semibold leading-relaxed">“{item.quote}”</div>
                <div className="mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-slate-500 font-bold">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
