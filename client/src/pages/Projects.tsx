import { useEffect } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import project1 from "@assets/generated_images/data_dashboard_visualization_on_laptop.png";
import project2 from "@assets/generated_images/stock_market_trend_analysis_graph.png";
import project3 from "@assets/generated_images/business_analytics_infographic.png";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      title: "Finbazaar Loan Disposable Data",
      description: "A comprehensive dashboard tracking market volatility and predicting trends using historical data analysis.",
      image: project1,
      tags: ["Tableau", "Python", "Financial Modeling"],
      date: "Oct 2023",
      downloadLink: "/downloads/market-trends.zip",
      link: "/case-studies/finbazaar-loan-data"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model developed to identify at-risk customers and suggest retention strategies.",
      image: project2,
      tags: ["Machine Learning", "R", "Predictive Analytics"],
      date: "Aug 2023",
      downloadLink: "/downloads/churn-model.zip",
      link: "/case-studies/customer-churn-model"
    },
    {
      title: "Retail Sales Performance Report",
      description: "Interactive quarterly report visualizing sales performance across multiple regions and product categories.",
      image: project3,
      tags: ["Power BI", "SQL", "Business Intelligence"],
      date: "July 2023",
      downloadLink: "/downloads/sales-report.pdf",
      link: "/case-studies/retail-sales-report"
    },
    {
      title: "Investment Portfolio Tracker",
      description: "Personal finance tool for tracking diverse investment portfolios with real-time API integration.",
      image: project1,
      tags: ["React", "Node.js", "Fintech"],
      date: "June 2023",
      downloadLink: "/downloads/portfolio-tracker.zip"
    },
    {
      title: "Supply Chain Optimization",
      description: "Analysis of supply chain bottlenecks and recommendations for process improvements.",
      image: project3,
      tags: ["Python", "Supply Chain", "Optimization"],
      date: "May 2023",
      downloadLink: "/downloads/supply-chain.ipynb"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "NLP project analyzing customer sentiment towards financial brands on Twitter.",
      image: project2,
      tags: ["NLP", "Python", "Social Media"],
      date: "April 2023",
      downloadLink: "/downloads/sentiment-analysis.zip"
    }
  ];

  return (
    <div className="py-20 container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold font-display mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            A complete archive of my data analysis projects, case studies, and experiments.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
