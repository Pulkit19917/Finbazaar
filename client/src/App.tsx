import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Shop from "@/pages/Shop";
import Code from "@/pages/Code";
import FinbazaarLoanData from "@/pages/case-studies/FinbazaarLoanData";
import CustomerChurnModel from "@/pages/case-studies/CustomerChurnModel";
import RetailSalesReport from "@/pages/case-studies/RetailSalesReport";
import AIinFintech from "@/pages/insights/AIinFintech";
import MarketVolatility from "@/pages/insights/MarketVolatility";
import PythonVsR from "@/pages/insights/PythonVsR";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/code" component={Code} />
      <Route path="/case-studies/finbazaar-loan-data" component={FinbazaarLoanData} />
      <Route path="/case-studies/customer-churn-model" component={CustomerChurnModel} />
      <Route path="/case-studies/retail-sales-report" component={RetailSalesReport} />
      <Route path="/insights/ai-in-fintech" component={AIinFintech} />
      <Route path="/insights/market-volatility" component={MarketVolatility} />
      <Route path="/insights/python-vs-r" component={PythonVsR} />
      <Route path="/blog" component={Blog} />
      <Route path="/shop" component={Shop} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />
        <Router />
        <footer className="py-8 border-t bg-muted/20">
            <div className="container text-center text-sm text-muted-foreground">
                <p>&copy; 2025 Finbazaar Analytics. All rights reserved.</p>
            </div>
        </footer>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
