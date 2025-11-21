import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import projectImage from "@assets/generated_images/stock_market_trend_analysis_graph.png";

export default function CustomerChurnModel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Image */}
      <div className="h-[40vh] w-full overflow-hidden relative bg-muted">
        <img 
          src={projectImage} 
          alt="Customer Churn Prediction Model" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container absolute bottom-10 left-0 right-0">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground hover:text-foreground gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Customer Churn Prediction Model</h1>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="text-sm py-1 px-3">Machine Learning</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">R Studio</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Predictive Analytics</Badge>
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project involved developing a machine learning model to predict customer churn using historical transaction and behavioral data. 
              By identifying at-risk customers early, the business could implement targeted retention strategies and reduce revenue loss from customer attrition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
              <li>Random Forest classifier achieving 89% accuracy on test data.</li>
              <li>Feature engineering from 50,000+ customer records.</li>
              <li>Identification of key churn indicators and risk factors.</li>
              <li>Automated weekly reporting system for stakeholders.</li>
              <li>Integration with CRM systems for actionable insights.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Model Performance</h2>
            <div className="border-2 border-dashed border-muted rounded-xl p-12 text-center bg-muted/10 min-h-[400px] flex flex-col items-center justify-center">
              <p className="text-xl font-medium text-muted-foreground mb-2">Model Performance Dashboard</p>
              <p className="text-sm text-muted-foreground/70 max-w-md">
                Interactive visualizations and model metrics will be displayed here. Coming soon.
              </p>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-4 text-lg">Project Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Client</span>
                <span className="font-medium">Finance Corp</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">Aug 2023</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">Lead Data Scientist</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Tools</span>
                <span className="font-medium">R, Python, Tableau</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full gap-2">
              <Download className="h-4 w-4" /> Download Model
            </Button>
            <Button variant="outline" size="lg" className="w-full gap-2">
              View Live Demo <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
