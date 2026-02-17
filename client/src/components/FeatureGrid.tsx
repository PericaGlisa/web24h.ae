import { motion } from "framer-motion";
import { Zap, Layout, Code2, Database, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "From concept to live URL in 24 hours. We optimize for speed without cutting corners on quality.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: Layout,
    title: "Premium Design",
    description: "No generic templates. We use modern, conversion-focused design principles tailored to your brand.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Built on modern stacks (React, Tailwind). Scalable, maintainable, and SEO-friendly out of the box.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Database,
    title: "CMS Integrated",
    description: "Manage your content easily. We set up lightweight CMS solutions so you're in control.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Rocket,
    title: "Growth Ready",
    description: "Integrated with analytics, forms, and marketing tools. Built to convert traffic into leads.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Secure & Stable",
    description: "HTTPS by default, automated backups, and edge-network hosting for global reliability.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Not Just Fast. <span className="text-primary">Better.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We bridge the gap between "cheap & fast" and "premium & slow". 
            Get the best of both worlds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}