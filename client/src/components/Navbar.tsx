import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu, Zap, Fingerprint } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-linear-to-br from-primary via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="relative font-display font-black text-slate-950 group-hover:text-white text-2xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter text-white leading-none">
                WEBSITE<span className="text-primary">24H</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-slate-500 font-bold mt-1 group-hover:text-primary transition-colors">Elite Digital Service</span>
            </div>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {["Features", "Process", "Pricing"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-white hover:bg-primary text-slate-950 font-black rounded-xl px-8 h-12 shadow-2xl transition-all hover:scale-105 active:scale-95">
            INITIATE PROJECT <Fingerprint className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
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
              <div className="flex flex-col gap-8 mt-16">
                {["Features", "Process", "Pricing"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-4xl font-black hover:text-primary transition-colors">
                    {item.toUpperCase()}
                  </a>
                ))}
                <Button className="w-full h-16 text-xl font-black bg-primary text-slate-950 mt-auto">START PROJECT</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}