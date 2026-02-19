import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Process from "@/pages/Process";
import PricingPage from "@/pages/PricingPage";
import PrivateIntake from "@/pages/PrivateIntake";
import Capabilities from "@/pages/Capabilities";
import Method from "@/pages/Method";
import Investment from "@/pages/Investment";
import CaseNotes from "@/pages/CaseNotes";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
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
      <Route path="/case-notes" component={CaseNotes} />
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/legal" component={Legal} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
