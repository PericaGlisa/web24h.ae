import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No hidden fees. No long-term contracts. Just premium delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">Landing Page</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for campaigns and new products.</p>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              $999 <span className="text-base font-normal text-slate-500">one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Single Scroll Page",
                "Mobile Responsive",
                "Lead Capture Form",
                "Basic SEO Setup",
                "24h Delivery Guarantee"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Pro (Featured) */}
          <div className="p-8 rounded-2xl border-2 border-primary bg-slate-50 dark:bg-slate-900 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-primary/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">Multi-Page Site</h3>
            <p className="text-slate-500 text-sm mb-6">For established businesses.</p>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              $2,499 <span className="text-base font-normal text-slate-500">one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Up to 5 Pages",
                "CMS Integration",
                "Analytics Dashboard",
                "Booking/Scheduling Tool",
                "Email Automation Setup",
                "Advanced SEO",
                "24h Delivery Guarantee"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold">Get Started</Button>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">Custom Sprint</h3>
            <p className="text-slate-500 text-sm mb-6">For complex requirements.</p>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Custom <span className="text-base font-normal text-slate-500">pricing</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Custom Functionality",
                "3rd Party API Integrations",
                "Membership Systems",
                "E-commerce (Lite)",
                "Priority Support",
                "Expedited Delivery"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}