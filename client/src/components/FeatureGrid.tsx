export function FeatureGrid() {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900/80" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] bg-primary/10 blur-[160px] opacity-35 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <div className="mx-auto h-px w-full max-w-4xl bg-linear-to-r from-transparent via-white/15 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">Operator Notes</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Signals from founders who move fast.
              </h2>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Selected citations</div>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8">
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent opacity-70" />
              <div className="absolute -top-12 -left-10 text-[160px] sm:text-[200px] font-black text-white/5">“</div>
              <div className="relative">
                <div className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
                  “Speed matters in business – plus a high-velocity decision making environment is more fun too.”
                </div>
                <div className="mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                  Jeff Bezos, Amazon (2016)
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { quote: "We have a saying: 'Move fast and break things.' The idea is that if you never break anything, you're probably not moving fast enough.", role: "Mark Zuckerberg, Facebook (2012)" },
                { quote: "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.", role: "Jack Welch, GE" }
              ].map((item) => (
                <div
                  key={item.role}
                  className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <div className="absolute -top-10 -left-8 text-[120px] sm:text-[150px] font-black text-white/5">“</div>
                  <div className="relative">
                    <div className="text-white text-base sm:text-lg font-semibold leading-relaxed">“{item.quote}”</div>
                    <div className="mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-slate-500 font-bold">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
