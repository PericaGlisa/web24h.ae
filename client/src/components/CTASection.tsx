import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-40 bg-slate-950 relative overflow-hidden">
      {/* Background kinetic effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,184,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-card premium-border p-16 md:p-24 text-center rounded-[3rem] relative overflow-hidden">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-[3rem]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30 rounded-br-[3rem]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              READY TO <br />
              <span className="text-gradient">DOMINATE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              We are only accepting 3 new builds this week. Secure your position in the digital elite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-20 px-16 text-xl rounded-2xl bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_20px_50px_rgba(0,210,184,0.3)] transition-all hover:scale-105 active:scale-95 group">
                INITIATE TAKEOVER <ArrowUpRight className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 text-slate-500 font-bold tracking-widest text-xs uppercase">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 LIVE AVAILABILITY: 1 SLOT LEFT
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}