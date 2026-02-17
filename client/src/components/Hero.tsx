import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting New Projects for Tomorrow
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
            Premium Websites. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
              Delivered in 24h.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            We build high-performance, automation-ready websites for startups and brands who move fast. No templates, just premium code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-slate-950 font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800">
              View Our Work
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Fully Custom</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="mx-auto w-1/2 h-6 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-xs flex items-center justify-center text-slate-400 font-mono">
                website24h.com
              </div>
            </div>
            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-950 relative overflow-hidden group">
               {/* Generative UI Mockup */}
               <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-primary to-blue-600 mb-6 shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-full mb-3" />
                  <div className="h-8 w-64 bg-slate-900 dark:bg-slate-700 rounded-full mb-6" />
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="h-24 rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700" />
                    <div className="h-24 rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700" />
                  </div>
               </div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-1/4 -right-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                     <Zap className="w-5 h-5 fill-current" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-medium">Performance</p>
                     <p className="text-lg font-bold text-slate-900 dark:text-white">99/100</p>
                   </div>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-1/4 -left-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                     <CheckCircle2 className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-medium">Status</p>
                     <p className="text-lg font-bold text-slate-900 dark:text-white">Deployed</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
          
          {/* Decorative background blob for image */}
          <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 rounded-2xl blur-2xl -z-10 transform translate-y-4 scale-95" />
        </motion.div>
      </div>
    </section>
  );
}