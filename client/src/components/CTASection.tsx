import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,184,0.1),transparent_70%)]" />
      </div>
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto surface-elite p-8 sm:p-12 lg:p-24 text-center rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-[2rem] sm:rounded-tl-[3rem]" />
          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 border-b-2 border-r-2 border-primary/30 rounded-br-[2rem] sm:rounded-br-[3rem]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-none">
              READY FOR <br />
              <span className="text-gradient-elite inline-block pr-2 sm:pr-3">A PRIVATE BRIEF?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-slate-400 mb-10 sm:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              This site is a live demonstration of our craft. We accept a limited number of engagements per week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button size="lg" className="h-14 sm:h-20 px-10 sm:px-16 text-base sm:text-xl rounded-2xl bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_24px_60px_rgba(0,210,184,0.35)] transition-all hover:scale-105 active:scale-95 group">
                REQUEST WHITE-GLOVE CALL <ArrowUpRight className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 sm:gap-4 text-slate-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 LIVE AVAILABILITY: 2 SLOTS LEFT
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-slate-500 font-bold">
              {["NDA SIGNED", "GLOBAL DELIVERY", "EXECUTIVE SLA"].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
