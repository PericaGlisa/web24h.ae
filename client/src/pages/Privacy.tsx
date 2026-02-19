import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";

const sections = [
  {
    title: "Information we collect",
    content:
      "We collect contact details and project information you submit through private intake or email. We may also collect basic analytics data to understand site usage.",
  },
  {
    title: "How we use information",
    content:
      "We use your information to respond to inquiries, align project scope, and deliver services. Analytics data helps us improve performance and user experience.",
  },
  {
    title: "Sharing and disclosure",
    content:
      "We do not sell personal data. Information is shared only with trusted service providers required to operate the website or deliver services.",
  },
  {
    title: "Security",
    content:
      "We apply reasonable safeguards to protect data. However, no transmission method is 100% secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Data retention",
    content:
      "We retain data only as long as needed to fulfill the purposes outlined here or to comply with legal obligations.",
  },
  {
    title: "Your rights",
    content:
      "You may request access, correction, or deletion of your information by contacting us at hello@website24h.com.",
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32">
          <div className="glow-mesh" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="absolute inset-x-0 -top-24 h-64 bg-linear-to-b from-primary/20 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5" />
                Privacy
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                PRIVACY <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">OVERVIEW.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                A concise summary of how we collect, use, and protect information. Full details are available upon request.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {sections.map((section) => (
                <div key={section.title} className="surface-elite p-6 sm:p-8">
                  <div className="text-lg sm:text-xl font-black text-white mb-3">{section.title}</div>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
