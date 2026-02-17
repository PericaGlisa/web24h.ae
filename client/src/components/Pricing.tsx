import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "STRATEGIC ASSET",
    price: "4.5k",
    description: "High-frequency landing page architecture.",
    features: [
      "Elite Component Library",
      "Sub-20ms Global Latency",
      "Advanced Lead Intelligence",
      "Custom Motion System",
      "24h Surgical Delivery"
    ],
    highlight: false
  },
  {
    name: "MARKET DOMINANCE",
    price: "12.5k",
    description: "Complete ecosystem transformation.",
    features: [
      "Multi-Vector Experience",
      "Deep AI Integration",
      "Autonomous CMS Control",
      "Global Edge Distribution",
      "Priority 24h Pipeline",
      "Behavioral Analytics",
      "Elite Security Shield"
    ],
    highlight: true
  },
  {
    name: "ELITE CUSTOM",
    price: "POA",
    description: "Bespoke digital weapons for enterprise.",
    features: [
      "Custom Engine Architecture",
      "Full API Orchestration",
      "Zero-Day Scaling",
      "Dedicated Dev Ops",
      "White-Glove Handover"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Investment Tiers</div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6">
            COMMAND THE <br /><span className="text-gradient">MARKET.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            We don't sell 'sites'. We deliver high-yield digital capital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-1 rounded-[2.5rem] group ${plan.highlight ? 'bg-linear-to-b from-primary/50 via-primary/10 to-transparent shadow-[0_30px_100px_rgba(0,210,184,0.15)]' : 'bg-white/5'}`}
            >
              <div className="h-full bg-slate-950 rounded-[2.4rem] p-10 flex flex-col relative overflow-hidden">
                {plan.highlight && (
                   <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-slate-950 text-[10px] font-black rounded-full uppercase tracking-tighter">
                     Primary Choice
                   </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">
                      {plan.price !== "POA" && "$"}
                      {plan.price}
                    </span>
                    {plan.price !== "POA" && <span className="text-slate-500 font-bold">USD</span>}
                  </div>
                  <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">{plan.description}</p>
                </div>

                <div className="h-px bg-white/5 mb-10" />

                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm font-medium text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full h-16 rounded-2xl font-black text-lg transition-all duration-500 ${
                    plan.highlight 
                    ? 'bg-primary hover:bg-cyan-400 text-slate-950 shadow-[0_15px_30px_rgba(0,210,184,0.2)]' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  ACQUIRE NOW
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Bar */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl"><Shield className="w-5 h-5" /> FORTRESS</div>
           <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl"><Zap className="w-5 h-5" /> VELOCITY</div>
           <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl"><Globe className="w-5 h-5" /> ORBIT</div>
        </div>
      </div>
    </section>
  );
}