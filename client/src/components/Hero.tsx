import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Cpu, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen min-h-[100dvh] flex items-center pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 sm:hidden bg-[url('/images/hero-bg.png')] bg-cover bg-[position:64%_center] scale-125 opacity-50" />
        <div className="absolute inset-0 hidden sm:block bg-[url('/images/hero-bg.png')] bg-cover bg-[position:center_28%] lg:bg-[position:center_34%] 2xl:bg-[position:center_38%] opacity-38" />
        <div className="absolute inset-0 sm:hidden bg-linear-to-b from-slate-950/80 via-slate-950/86 to-slate-950/97" />
        <div className="absolute inset-0 hidden sm:block bg-linear-to-b from-slate-950/58 via-slate-950/74 to-slate-950/92" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/78 via-slate-950/35 to-slate-950/68" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(34,230,214,0.18),transparent_42%),radial-gradient(ellipse_at_22%_75%,rgba(13,27,45,0.58),transparent_55%)]" />
        <div className="glow-mesh" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
        <div className="absolute inset-x-0 -top-24 h-64 bg-linear-to-b from-primary/20 via-transparent to-transparent" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-primary/10 blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,210,184,0.12)]"
            >
              <Shield className="w-3.5 h-3.5" />
              Small Expert Team • 24-Hour Launch
            </motion.div>
            <motion.h1
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black leading-[0.95] tracking-tighter text-white mb-6 sm:mb-8 drop-shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
            >
              YOUR BUSINESS <br />
              WEBSITE. <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">LIVE IN 24 HOURS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 sm:mb-12 max-w-2xl font-light leading-relaxed"
            >
              We handle the words, the look, the build, and the launch in one focused day, so you can start getting customers fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12"
            >
              <Button
                asChild
                size="lg"
                className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.06] group rounded-2xl"
              >
                <Link href="/private-intake">
                  START MY WEBSITE <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold transition-all rounded-2xl"
              >
                <Link href="/pricing">SEE PLANS</Link>
              </Button>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-slate-400 font-bold">
              {["CONFIDENTIAL BY DEFAULT", "EXPERT TEAM", "FAST REPLIES"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="relative"
          >
            <div className="absolute -top-10 right-6 w-40 h-40 bg-primary/20 blur-[100px]" />
            <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">Project window</div>
                <div className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">Live</div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Website ready", value: "24 hours", icon: RocketIcon },
                  { label: "Fast replies", value: "15 minutes", icon: Zap },
                  { label: "Always online", value: "Reliable hosting", icon: Globe },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-primary">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">{item.label}</div>
                        <div className="text-sm font-semibold text-white">{item.value}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Clarity", value: "Simple message", icon: Cpu },
                  { label: "Insights", value: "Know what works", icon: Shield },
                  { label: "Ownership", value: "You own everything", icon: CheckCircle2 },
                  { label: "Slots", value: "Limited weekly", icon: ArrowRight },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-center">
                    <metric.icon className="w-4 h-4 text-primary mx-auto mb-2" />
                    <div className="text-sm font-black text-white">{metric.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-14 flex flex-col items-center gap-5 sm:gap-6">
          <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-slate-500 font-bold text-center">Built to win trust fast</div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] text-slate-400">
            {["Clear message", "Strong visuals", "Fast loading", "Mobile-ready", "Secure hosting", "Easy to share", "Simple updates", "Lead capture"].map((tool) => (
              <span key={tool} className="px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                {tool}
              </span>
            ))}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium text-center">Work samples available on request. Confidential by default.</div>
        </div>
      </div>
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
