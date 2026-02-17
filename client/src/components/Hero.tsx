import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Cpu } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
      <div className="glow-mesh" />
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Shield className="w-3.5 h-3.5" />
            Elite Digital Architecture
          </motion.div>
          
          <motion.h1 
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-8"
          >
            THE FUTURE OF <br />
            <span className="text-gradient italic">WEBSITE DELIVERY</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don't just build websites. We engineer high-frequency digital assets that redefine market standards. 24 hours from zero to market leader.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_40px_rgba(0,210,184,0.3)] transition-all hover:scale-105 group">
              INITIATE BUILD <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold transition-all">
              EXPLORE DOSSIER
            </Button>
          </motion.div>

          {/* Luxury Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Uptime", value: "99.99%", icon: Globe },
              { label: "Response", value: "< 18ms", icon: Zap },
              { label: "Core Score", value: "100/100", icon: Cpu },
              { label: "Delivery", value: "24 Hours", icon: RocketIcon }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1) }}
                className="glass-card premium-border p-6 text-center group hover:bg-white/10 transition-colors"
              >
                <metric.icon className="w-5 h-5 text-primary mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative side elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block">
        <div className="h-64 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block">
        <div className="h-64 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.56.45-2.13.45-2.13s-1.57-.26-2.13.45Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
  );
}