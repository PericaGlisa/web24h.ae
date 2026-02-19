import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-14">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <a className="h-14 sm:h-16 lg:h-[72px] flex items-center justify-center">
                  <img
                    src="/images/website24h-logo.png"
                    alt="Website 24h"
                    className="h-full w-auto max-w-[210px] sm:max-w-[240px] lg:max-w-[260px] object-contain"
                  />
                </a>
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A private digital studio delivering premium websites in 24 hours with speed, clarity, and precision.
            </p>
            <div className="mt-4 text-xs text-slate-500">References and case notes available under NDA.</div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Studio</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/capabilities">
                  <a className="hover:text-primary transition-colors">Capabilities</a>
                </Link>
              </li>
              <li>
                <Link href="/method">
                  <a className="hover:text-primary transition-colors">Method</a>
                </Link>
              </li>
              <li>
                <Link href="/investment">
                  <a className="hover:text-primary transition-colors">Investment</a>
                </Link>
              </li>
              <li>
                <Link href="/case-notes">
                  <a className="hover:text-primary transition-colors">Case Notes</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="hover:text-primary transition-colors">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  <a className="hover:text-primary transition-colors">Legal</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="hover:text-primary transition-colors">Privacy</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> hello@website24h.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +1 (555) 000-0000</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} Website 24h. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
