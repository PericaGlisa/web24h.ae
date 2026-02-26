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
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.38 0 .02 5.36 0 11.99c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63a11.93 11.93 0 0 0 5.81 1.48h.01c6.63 0 11.99-5.36 11.99-11.99a11.9 11.9 0 0 0-3.49-8.38zm-8.51 18.5h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-3.68.97.98-3.58-.24-.37A10 10 0 1 1 22 12c0 5.52-4.48 9.99-9.99 9.99zm5.46-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.49-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
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
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.38 0 .02 5.36 0 11.99c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63a11.93 11.93 0 0 0 5.81 1.48h.01c6.63 0 11.99-5.36 11.99-11.99a11.9 11.9 0 0 0-3.49-8.38zm-8.51 18.5h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-3.68.97.98-3.58-.24-.37A10 10 0 1 1 22 12c0 5.52-4.48 9.99-9.99 9.99zm5.46-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.49-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
            </button>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
