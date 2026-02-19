import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu, Zap, Fingerprint } from "lucide-react";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_10px_60px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative h-12 sm:h-14 lg:h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-500">
              <img
                src="/images/website24h-logo.png"
                alt="Website 24h"
                className="h-full w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-[230px] object-contain"
              />
            </div>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {[
            { label: "Features", href: "/features" },
            { label: "Process", href: "/process" },
            { label: "Pricing", href: "/pricing" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-primary transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </Link>
          ))}
          <Link href="/private-intake">
            <a className="inline-flex items-center bg-white hover:bg-primary text-slate-950 font-black rounded-xl px-8 h-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all hover:scale-105 active:scale-95">
              PRIVATE INTAKE <Fingerprint className="w-4 h-4 ml-2" />
            </a>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-white/5 text-white">
              <SheetHeader>
                <SheetTitle className="text-left text-white font-black text-2xl">COMMAND CENTER</SheetTitle>
                <SheetDescription className="text-left text-slate-500">
                  Select your destination.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 sm:gap-8 mt-12 sm:mt-16">
                {[
                  { label: "FEATURES", href: "/features" },
                  { label: "PROCESS", href: "/process" },
                  { label: "PRICING", href: "/pricing" },
                ].map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl sm:text-3xl font-black hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Link href="/private-intake">
                  <a
                    onClick={() => setMobileOpen(false)}
                    className="w-full h-14 sm:h-16 text-base sm:text-xl font-black bg-primary text-slate-950 mt-auto inline-flex items-center justify-center rounded-md hover:bg-cyan-400 transition-colors"
                  >
                    PRIVATE INTAKE
                  </a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
