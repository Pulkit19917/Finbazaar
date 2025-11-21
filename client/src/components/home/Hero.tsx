import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Database, TrendingUp, PieChart } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_data_visualization_background_in_white_and_purple.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b bg-background pt-10 pb-20 lg:pt-20 lg:pb-28">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Available for freelance projects
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Turning Complex Data into <span className="text-primary">Actionable Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I help businesses like Finbazaar make data-driven decisions through advanced analytics, 
              visualization, and predictive modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects">
                <Button size="lg" className="gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline">
                  Explore Resources
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative aspect-square w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl border bg-muted/50 shadow-2xl">
                <img 
                    src={heroBg} 
                    alt="Data Visualization" 
                    className="h-full w-full object-cover"
                />
                
                {/* Floating Cards */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -left-4 top-12 rounded-xl border bg-card p-4 shadow-xl hidden sm:block"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Database className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Data Processed</p>
                            <p className="font-bold">1.2 TB+</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute -right-4 bottom-24 rounded-xl border bg-card p-4 shadow-xl hidden sm:block"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent rounded-lg text-primary">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">ROI Increase</p>
                            <p className="font-bold">+145%</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
