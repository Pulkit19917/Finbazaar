import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Star, GitBranch } from "lucide-react";
import { Link } from "wouter";

export default function Code() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const repositories = [
    {
      name: "Financial-Dashboard",
      description: "Interactive financial dashboard built with React and Recharts. Real-time market data visualization with portfolio tracking.",
      language: "TypeScript/React",
      stars: 128,
      forks: 34,
      url: "#",
      tags: ["React", "Recharts", "Financial Data"]
    },
    {
      name: "Churn-Prediction-ML",
      description: "Machine learning model for customer churn prediction. Includes data preprocessing, feature engineering, and model evaluation.",
      language: "Python",
      stars: 95,
      forks: 22,
      url: "#",
      tags: ["Python", "Scikit-learn", "Machine Learning"]
    },
    {
      name: "SQL-Analytics-Suite",
      description: "Collection of SQL queries and optimization techniques for financial data analysis. Includes window functions and CTEs.",
      language: "SQL",
      stars: 76,
      forks: 18,
      url: "#",
      tags: ["SQL", "PostgreSQL", "Analytics"]
    },
    {
      name: "Python-Trading-Bot",
      description: "Algorithmic trading bot with market monitoring and P&L reporting. Built for backtesting and live trading scenarios.",
      language: "Python",
      stars: 112,
      forks: 41,
      url: "#",
      tags: ["Python", "Trading", "Automation"]
    },
    {
      name: "Data-Visualization-Toolkit",
      description: "Reusable components and utilities for creating professional data visualizations in Tableau and Power BI.",
      language: "JavaScript",
      stars: 89,
      forks: 25,
      url: "#",
      tags: ["Tableau", "Power BI", "Visualization"]
    },
    {
      name: "Excel-VBA-Macros",
      description: "Collection of VBA macros and automated Excel solutions for complex financial modeling and reporting.",
      language: "VBA",
      stars: 64,
      forks: 16,
      url: "#",
      tags: ["Excel", "VBA", "Automation"]
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "R", "SQL", "JavaScript", "TypeScript", "VBA"] },
    { category: "Data Visualization", items: ["Tableau", "Power BI", "Recharts", "Matplotlib", "ggplot2"] },
    { category: "Tools & Platforms", items: ["Jupyter", "Git", "AWS", "PostgreSQL", "Apache Spark"] },
    { category: "Libraries & Frameworks", items: ["Pandas", "NumPy", "Scikit-learn", "React", "Express.js"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Code & Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Explore my open-source repositories, code samples, and technical implementations. From financial dashboards to machine learning models, each project demonstrates my approach to solving complex data problems.
          </p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <Github className="h-5 w-5" /> Visit GitHub Profile
            </Button>
          </a>
        </div>
      </div>

      {/* Featured Repositories */}
      <section className="container py-12">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-3">Featured Repositories</h2>
          <p className="text-muted-foreground">A selection of my most impactful and active projects</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo, i) => (
            <Card key={i} className="flex flex-col border-muted hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    {repo.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm">{repo.language}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {repo.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag, j) => (
                    <Badge key={j} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-4 w-4" />
                    {repo.forks}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full gap-2 mt-auto">
                  View Repository <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="container py-16 border-t">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-3">Technical Stack</h2>
          <p className="text-muted-foreground">Languages, tools, and frameworks I work with</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, j) => (
                  <Badge key={j} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 border-t">
        <div className="bg-card border rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Interested in Collaborating?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm open to discussing new projects, collaborations, or opportunities to contribute to meaningful data-driven solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
