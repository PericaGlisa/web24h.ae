import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

export default function PrivateIntake() {
  const normalizePackage = (value: string) => {
    const normalized = value.trim().toLowerCase();
    if (normalized.startsWith("launch")) return "Launch";
    if (normalized.startsWith("growth")) return "Growth";
    if (normalized.startsWith("scale")) return "Scale";
    return "";
  };

  const resolveInitialPackage = () => {
    if (typeof window === "undefined") {
      return "";
    }
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("package") ?? params.get("tier") ?? "";
    const fromStorage = window.sessionStorage.getItem("selectedPackage") ?? "";
    return normalizePackage(fromQuery || fromStorage);
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [packageTier, setPackageTier] = useState(resolveInitialPackage);
  const [launchWindow, setLaunchWindow] = useState("");
  const [preferredStartPreset, setPreferredStartPreset] = useState("");
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = "Private Intake Request";
    const lines = [
      ["Name", fullName],
      ["Email", email],
      ["Company", company],
      ["Phone", phone],
      ["Website", website],
      ["Package", packageTier],
      ["Launch window", launchWindow],
      ["Preferred start date", preferredStartPreset],
      ["Goal", goal],
      ["Notes", notes],
    ]
      .map(([label, value]) => [label, String(value).trim()] as const)
      .filter(([, value]) => value.length > 0)
      .map(([label, value]) => `${label}: ${value}`);

    const body =
      lines.length > 0
        ? lines.join("\n")
        : "Hello, I would like to request a Private Intake slot.";

    return `mailto:hello@website24h.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [
    company,
    email,
    fullName,
    goal,
    launchWindow,
    notes,
    packageTier,
    phone,
    preferredStartPreset,
    website,
  ]);

  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28">
          <div className="glow-mesh" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="absolute inset-x-0 -top-24 h-64 bg-linear-to-b from-primary/20 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-10 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5" />
                Private Intake
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8">
                SECURE A <br />
                <span className="text-gradient-elite italic inline-block pr-3 sm:pr-2">PRIVATE SLOT.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-slate-400 mb-10 sm:mb-12 max-w-3xl font-light leading-relaxed">
                The intake keeps our delivery fast and the outcome premium. Share the essentials and we respond with availability, scope alignment, and next steps.
              </p>

              <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                <div className="lg:col-span-2 surface-elite p-6 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">
                    Response standards
                  </div>
                  <div className="space-y-4 text-sm sm:text-base text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Fast confirmation</div>
                        <div className="text-slate-400 font-light">We confirm availability and the delivery window quickly.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Scope lock</div>
                        <div className="text-slate-400 font-light">We define what ships in the 24h sprint, no drift.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Private workflow</div>
                        <div className="text-slate-400 font-light">NDA first, then a focused brief and decision path.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Decision cadence</div>
                        <div className="text-slate-400 font-light">We set approval checkpoints to keep velocity high.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Asset readiness</div>
                        <div className="text-slate-400 font-light">We validate logos, copy, and links before kickoff.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-3">Response window</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-lg font-black text-white">15 MIN</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">SLA</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-white">24H</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Delivery</div>
                      </div>
                    </div>
                  </div>

                  <div className="hairline my-6" />

                  <div className="text-xs text-slate-500 leading-relaxed">
                    Prefer email? Write to{" "}
                    <a className="text-primary hover:text-cyan-400 transition-colors" href="mailto:hello@website24h.com">
                      hello@website24h.com
                    </a>
                    .
                  </div>
                </div>

                <div className="lg:col-span-3 surface-elite p-6 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-4">
                    Intake briefing
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.location.href = mailtoHref;
                    }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Full name</div>
                        <Input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Email</div>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          type="email"
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Company</div>
                        <Input
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company or project"
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Phone</div>
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 555 000 0000"
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Website</div>
                        <Input
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://"
                          className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Selected package</div>
                        <Select value={packageTier} onValueChange={setPackageTier}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-11">
                            <SelectValue placeholder="Choose package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Launch">Launch</SelectItem>
                            <SelectItem value="Growth">Growth</SelectItem>
                            <SelectItem value="Scale">Scale</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Launch window</div>
                        <Select value={launchWindow} onValueChange={setLaunchWindow}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-11">
                            <SelectValue placeholder="Select timing" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Next 24h">Next 24h</SelectItem>
                            <SelectItem value="Next 48h">Next 48h</SelectItem>
                            <SelectItem value="This week">This week</SelectItem>
                            <SelectItem value="Flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Preferred start date</div>
                        <div className="grid grid-cols-3 gap-2">
                          {["ASAP", "Next week", "Next month"].map((preset) => (
                            <Button
                              key={preset}
                              type="button"
                              variant="outline"
                              onClick={() => setPreferredStartPreset((current) => (current === preset ? "" : preset))}
                              className={`h-10 rounded-xl text-xs font-bold tracking-wide border ${
                                preferredStartPreset === preset
                                  ? "bg-primary text-slate-950 border-primary"
                                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                              }`}
                            >
                              {preset}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Primary goal</div>
                      <Input
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Launch, conversion, repositioning, lead capture"
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Notes</div>
                      <Textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Anything that helps us move fast: pages, integrations, assets, constraints"
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 min-h-[140px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 sm:h-16 text-base sm:text-lg font-black bg-primary hover:bg-cyan-400 text-slate-950 rounded-2xl shadow-[0_24px_60px_rgba(0,210,184,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      SUBMIT PRIVATE INTAKE <ArrowUpRight className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform" />
                    </Button>

                    <div className="text-xs text-slate-500 leading-relaxed">
                      Submitting opens your email client with a prefilled message. We do not store form data on this website.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
