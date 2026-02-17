import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-primary/10 to-blue-600/10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready to launch in 24 hours?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Stop waiting weeks for a website. Get a premium, production-ready site by this time tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-slate-950 font-bold shadow-lg shadow-primary/25">
            Start Your Project Now
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Limited slots available for next-day delivery.
        </p>
      </div>
    </section>
  );
}