import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Pricing } from "@/components/Pricing";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <div className="-mt-16 sm:-mt-20 lg:-mt-24">
        <ProcessSteps />
      </div>
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}
