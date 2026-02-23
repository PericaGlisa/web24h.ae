import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu, X, Zap, Fingerprint } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 relative ${
        scrolled
          ? "bg-slate-950 border-b border-white/5 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          : "bg-slate-950 py-8"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-70" />
        <div className="absolute -top-28 left-1/2 h-48 w-[560px] -translate-x-1/2 bg-white/10 blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 sm:h-14 lg:h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-500">
            <img
              src="/images/website24h-logo.png"
              alt="Website 24h"
              className="h-full w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-[230px] object-contain brightness-110 contrast-110 drop-shadow-[0_6px_20px_rgba(255,255,255,0.25)]"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Features", href: "/features" },
            { label: "Process", href: "/process" },
            { label: "Pricing", href: "/pricing" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors relative group px-3 py-2 rounded-full hover:bg-white/10"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/private-intake"
            className="inline-flex items-center bg-primary hover:bg-cyan-400 text-slate-950 font-black rounded-2xl px-8 h-12 shadow-[0_18px_50px_rgba(0,210,184,0.45)] ring-1 ring-primary/40 transition-all hover:scale-105 active:scale-95"
          >
            PRIVATE INTAKE <Fingerprint className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-2xl border border-white/20 bg-white/5"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-slate-950 border-white/5 text-white p-0 [&>button]:hidden overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="px-6 pt-6 pb-6 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
                  <SheetHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center gap-3"
                      >
                        <div className="h-11 flex items-center">
                          <img
                            src="/images/website24h-logo.png"
                            alt="Website 24h"
                            className="h-full w-auto max-w-[170px] object-contain brightness-125 contrast-125 drop-shadow-[0_10px_28px_rgba(255,255,255,0.35)]"
                          />
                        </div>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="h-10 w-10 inline-flex items-center justify-center rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div>
                      <SheetTitle className="text-left text-white font-black text-2xl">COMMAND CENTER</SheetTitle>
                      <SheetDescription className="text-left text-slate-500">
                        Navigate the private studio.
                      </SheetDescription>
                    </div>
                  </SheetHeader>
                </div>

                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="grid gap-4">
                    {[
                      { label: "FEATURES", href: "/features", detail: "Signature capabilities" },
                      { label: "PROCESS", href: "/process", detail: "How we deliver in 24h" },
                      { label: "PRICING", href: "/pricing", detail: "Launch tiers" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-primary/40 hover:bg-white/10"
                      >
                        <div>
                          <div className="text-lg font-black tracking-[0.2em] text-white">{item.label}</div>
                          <div className="text-xs text-slate-500 mt-1">{item.detail}</div>
                        </div>
                        <span className="text-primary text-xl font-black">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-6 border-t border-white/10 bg-slate-950/80">
                  <div className="grid gap-3">
                    <Link
                      href="/private-intake"
                      onClick={() => setMobileOpen(false)}
                      className="w-full h-14 text-base font-black bg-primary text-slate-950 inline-flex items-center justify-center rounded-2xl hover:bg-cyan-400 transition-colors"
                    >
                      PRIVATE INTAKE
                    </Link>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold text-center">
                      NDA-ready • Senior-led • 24h delivery
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
