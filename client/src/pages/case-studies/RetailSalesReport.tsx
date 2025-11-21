import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import projectImage from "@assets/generated_images/business_analytics_infographic.png";

export default function RetailSalesReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Image */}
      <div className="h-[40vh] w-full overflow-hidden relative bg-muted">
        <img 
          src={projectImage} 
          alt="Retail Sales Performance Report" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container absolute bottom-10 left-0 right-0">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground hover:text-foreground gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Retail Sales Performance Report</h1>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="text-sm py-1 px-3">Power BI</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">SQL</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Business Intelligence</Badge>
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An interactive quarterly sales performance report built for executive leadership to monitor retail operations across multiple regions. 
              The dashboard provides both high-level KPI summaries and detailed drill-down capabilities for regional and product-level analysis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
              <li>Multi-region sales performance tracking across 15+ store locations.</li>
              <li>Product category analysis with year-over-year comparisons.</li>
              <li>Customer segmentation and purchasing pattern analysis.</li>
              <li>Automated data refresh from SQL data warehouse.</li>
              <li>Executive summary with key metrics and trend indicators.</li>
              <li>Interactive filters for deep dive analysis by region, product, and time period.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Report Dashboard</h2>
            <div className="border-2 border-dashed border-muted rounded-xl p-12 text-center bg-muted/10 min-h-[400px] flex flex-col items-center justify-center">
              <p className="text-xl font-medium text-muted-foreground mb-2">Interactive Power BI Report</p>
              <p className="text-sm text-muted-foreground/70 max-w-md">
                The Power BI dashboard with sales metrics and visualizations will be embedded here.
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
                <span className="font-medium">Retail Chain Inc</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">July 2023</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">BI Analyst</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Tools</span>
                <span className="font-medium">Power BI, SQL, Excel</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full gap-2">
              <Download className="h-4 w-4" /> Download Report
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
