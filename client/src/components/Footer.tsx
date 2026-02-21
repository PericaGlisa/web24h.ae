import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-80" />
        <div className="absolute -top-32 right-0 w-72 h-72 bg-primary/10 blur-[140px]" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-cyan-500/10 blur-[160px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-14">
          <div className="col-span-1 md:col-span-1 rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="h-14 sm:h-16 lg:h-[72px] flex items-center justify-center">
                <img
                  src="/images/website24h-logo.png"
                  alt="Website 24h"
                  className="h-full w-auto max-w-[210px] sm:max-w-[240px] lg:max-w-[260px] object-contain"
                />
              </Link>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              A private digital studio delivering premium websites in 24 hours with speed, clarity, and precision.
            </p>
            <div className="mt-4 text-xs text-slate-500">References and case notes available under NDA.</div>
          </div>
          
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-7">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-5">Studio</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/capabilities" className="hover:text-primary transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/method" className="hover:text-primary transition-colors">
                  Method
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-primary transition-colors">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="/case-notes" className="hover:text-primary transition-colors">
                  Case Notes
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-7">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-7">
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-bold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> hello@website24h.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +1 (555) 000-0000</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} Website 24h. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-primary hover:border-primary/40 hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-primary hover:border-primary/40 hover:bg-white/10 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-primary hover:border-primary/40 hover:bg-white/10 transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
