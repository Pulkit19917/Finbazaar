import { useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const posts = [
    {
        title: "The Future of AI in Fintech",
        excerpt: "How artificial intelligence is reshaping the landscape of financial services and what it means for analysts.",
        category: "Industry Trends",
        author: "Data Analyst",
        readTime: "5 min read",
        date: "Nov 15, 2023"
    },
    {
        title: "Understanding Market Volatility",
        excerpt: "A deep dive into the metrics that matter when analyzing unstable market conditions.",
        category: "Analysis",
        author: "Data Analyst",
        readTime: "8 min read",
        date: "Oct 28, 2023"
    },
    {
        title: "Python vs R for Financial Analysis",
        excerpt: "Comparing the two giants of data science specifically for financial modeling use cases.",
        category: "Tools & Tech",
        author: "Data Analyst",
        readTime: "6 min read",
        date: "Oct 10, 2023"
    },
    {
        title: "Visualizing Complex Datasets",
        excerpt: "Best practices for creating clean, understandable dashboards for non-technical stakeholders.",
        category: "Tutorial",
        author: "Data Analyst",
        readTime: "7 min read",
        date: "Sep 22, 2023"
    },
    {
        title: "SQL Optimization Techniques",
        excerpt: "Advanced SQL queries and optimization tips for handling large financial datasets.",
        category: "Tutorial",
        author: "Data Analyst",
        readTime: "10 min read",
        date: "Sep 05, 2023"
    },
    {
        title: "The Rise of DeFi Analytics",
        excerpt: "Exploring the emerging field of decentralized finance analytics and on-chain data.",
        category: "Industry Trends",
        author: "Data Analyst",
        readTime: "6 min read",
        date: "Aug 18, 2023"
    }
  ];

  return (
    <div className="py-20 container">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-display mb-4">Insights & Reports</h1>
        <p className="text-muted-foreground">
          Deep dives into data analysis, industry trends, and technical tutorials.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-10">
            <TabsList>
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="trends">Industry Trends</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => {
                    const links = [
                        "/insights/ai-in-fintech",
                        "/insights/market-volatility",
                        "/insights/python-vs-r",
                        "/insights/visualizing-datasets",
                        "/insights/sql-optimization",
                        "/insights/defi-analytics"
                    ];
                    return <BlogCard key={i} {...post} link={links[i]} />;
                })}
            </div>
        </TabsContent>
        <TabsContent value="trends" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.filter(p => p.category === "Industry Trends").map((post, i) => {
                    const trendLinks = ["/insights/ai-in-fintech", "/insights/defi-analytics"];
                    return <BlogCard key={i} {...post} link={trendLinks[i]} />;
                })}
            </div>
        </TabsContent>
        {/* Other tabs would filter similarly */}
      </Tabs>
    </div>
  );
}
