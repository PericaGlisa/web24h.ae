import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Process from "@/pages/Process";
import PricingPage from "@/pages/PricingPage";
import PrivateIntake from "@/pages/PrivateIntake";
import Capabilities from "@/pages/Capabilities";
import Method from "@/pages/Method";
import Investment from "@/pages/Investment";
import About from "@/pages/About";
import Legal from "@/pages/Legal";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/process" component={Process} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/private-intake" component={PrivateIntake} />
      <Route path="/capabilities" component={Capabilities} />
      <Route path="/method" component={Method} />
      <Route path="/investment" component={Investment} />
      <Route path="/about" component={About} />
      <Route path="/legal" component={Legal} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(true);

  const whatsappNumber = "971589577819";
  const whatsappMessage = encodeURIComponent("Hi! I’m interested in a 24h website. Can you help?");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50">
          {isChatOpen ? (
            <div className="w-[280px] sm:w-[320px] rounded-[22px] border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-[0_12px_30px_rgba(0,210,184,0.3)]">
                    <svg viewBox="0 0 32 32" className="w-5 h-5 text-primary" fill="currentColor" aria-hidden="true">
                      <path d="M19.11 17.27c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49-.17-.01-.37-.02-.56-.02-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.19 1.97 3 4.77 4.21.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
                      <path d="M26.02 5.98C23.4 3.36 19.93 1.92 16.2 1.92c-7.74 0-14.03 6.29-14.03 14.02 0 2.47.65 4.88 1.88 7.01L2 30l7.25-1.9c2.05 1.12 4.35 1.7 6.95 1.7h.01c7.73 0 14.02-6.29 14.02-14.02 0-3.75-1.46-7.25-4.01-9.8zm-9.82 21.5h-.01c-2.21 0-4.38-.59-6.27-1.71l-.45-.27-4.29 1.12 1.15-4.18-.29-.47a11.73 11.73 0 0 1-1.8-6.23c0-6.45 5.25-11.7 11.71-11.7 3.13 0 6.07 1.22 8.29 3.44a11.64 11.64 0 0 1 3.42 8.28c0 6.45-5.25 11.7-11.7 11.7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">WhatsApp</div>
                    <div className="text-sm font-semibold text-white">Premium concierge</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="h-8 w-8 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-primary/40 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="px-4 py-4 text-sm text-slate-300">
                Launch in 24 hours. Ask anything and get a fast response.
              </div>
              <div className="px-4 pb-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-2xl bg-primary hover:bg-cyan-400 text-slate-950 font-black text-sm transition-all shadow-[0_18px_50px_rgba(0,210,184,0.35)]"
                >
                  START WHATSAPP CHAT
                </a>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="h-14 w-14 rounded-2xl bg-primary text-slate-950 shadow-[0_18px_50px_rgba(0,210,184,0.4)] hover:bg-cyan-400 transition-colors flex items-center justify-center"
            >
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M19.11 17.27c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49-.17-.01-.37-.02-.56-.02-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.19 1.97 3 4.77 4.21.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
                <path d="M26.02 5.98C23.4 3.36 19.93 1.92 16.2 1.92c-7.74 0-14.03 6.29-14.03 14.02 0 2.47.65 4.88 1.88 7.01L2 30l7.25-1.9c2.05 1.12 4.35 1.7 6.95 1.7h.01c7.73 0 14.02-6.29 14.02-14.02 0-3.75-1.46-7.25-4.01-9.8zm-9.82 21.5h-.01c-2.21 0-4.38-.59-6.27-1.71l-.45-.27-4.29 1.12 1.15-4.18-.29-.47a11.73 11.73 0 0 1-1.8-6.23c0-6.45 5.25-11.7 11.71-11.7 3.13 0 6.07 1.22 8.29 3.44a11.64 11.64 0 0 1 3.42 8.28c0 6.45-5.25 11.7-11.7 11.7z" />
              </svg>
            </button>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
