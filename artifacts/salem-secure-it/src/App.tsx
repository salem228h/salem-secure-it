import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground dark">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
