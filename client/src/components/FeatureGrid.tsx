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
    <section id="features" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              PRECISION <br />
              <span className="text-gradient">ENGINEERING.</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              We've eliminated the traditional agency friction. Our process is a high-frequency sprint that delivers world-class digital experiences while others are still in meetings.
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
                className="glass-card premium-border p-8 flex gap-6 group hover:bg-white/10 transition-all cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cinematic Visual Divider */}
        <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden group">
          <div className="absolute inset-0 bg-slate-900">
             <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-slate-950 z-10" />
             <div className="glow-mesh opacity-30" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <div className="text-[12rem] font-black text-white/5 select-none leading-none">ELITE</div>
                </div>
             </div>
          </div>
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end md:items-center z-20">
             <div className="max-w-md">
                <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">Technical Superiority</div>
                <div className="text-2xl font-bold text-white">Zero Compromise Architecture</div>
             </div>
             <div className="h-px flex-1 bg-white/10 mx-12 hidden md:block" />
             <div className="text-right">
                <div className="text-4xl font-black text-white">99.9%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Performance Delta</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}