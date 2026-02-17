import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-linear-to-br from-primary to-blue-600 rounded-lg shadow-lg group-hover:shadow-cyan-500/25 transition-all">
              <span className="font-display font-bold text-white text-xl">W</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-slate-900 dark:text-white">
              Website<span className="text-primary">24h</span>
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Process
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Pricing
          </a>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 transition-all transform hover:-translate-y-0.5">
            Start Project <Zap className="w-4 h-4 ml-2 text-primary" />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
                <SheetDescription className="text-left">
                  Navigate through our website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-10">
                <a href="#features" className="text-lg font-medium">
                  Features
                </a>
                <a href="#process" className="text-lg font-medium">
                  Process
                </a>
                <a href="#pricing" className="text-lg font-medium">
                  Pricing
                </a>
                <Button className="w-full">Start Project</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}