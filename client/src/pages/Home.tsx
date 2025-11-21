import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import BlogCard from "@/components/blog/BlogCard";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Assets
import project1 from "@assets/generated_images/data_dashboard_visualization_on_laptop.png";
import project2 from "@assets/generated_images/stock_market_trend_analysis_graph.png";
import project3 from "@assets/generated_images/business_analytics_infographic.png";
import productBook from "@assets/generated_images/data_analysis_book_mockup.png";
import productCourse from "@assets/generated_images/data_science_course_bundle_mockup.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                A selection of my recent work in data analysis, visualization, and financial modeling.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="group">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Finbazaar Loan Disposable Data"
              description="A comprehensive dashboard tracking market volatility and predicting trends using historical data analysis."
              image={project1}
              tags={["Tableau", "Python", "Financial Modeling"]}
              date="Oct 2023"
              link="/case-studies/finbazaar-loan-data"
            />
            <ProjectCard
              title="Customer Churn Prediction Model"
              description="Machine learning model developed to identify at-risk customers and suggest retention strategies."
              image={project2}
              tags={["Machine Learning", "R", "Predictive Analytics"]}
              date="Aug 2023"
              link="/case-studies/customer-churn-model"
            />
            <ProjectCard
              title="Retail Sales Performance Report"
              description="Interactive quarterly report visualizing sales performance across multiple regions and product categories."
              image={project3}
              tags={["Power BI", "SQL", "Business Intelligence"]}
              date="July 2023"
              link="/case-studies/retail-sales-report"
            />
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Latest Insights</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Thoughts, tutorials, and reports on the state of data analytics in finance.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="ghost" className="group">
                Read More Articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard 
                title="The Future of AI in Fintech"
                excerpt="How artificial intelligence is reshaping the landscape of financial services and what it means for analysts."
                category="Industry Trends"
                author="Data Analyst"
                readTime="5 min read"
                date="Nov 15, 2023"
                link="/insights/ai-in-fintech"
            />
            <BlogCard 
                title="Understanding Market Volatility"
                excerpt="A deep dive into the metrics that matter when analyzing unstable market conditions."
                category="Analysis"
                author="Data Analyst"
                readTime="8 min read"
                date="Oct 28, 2023"
                link="/insights/market-volatility"
            />
            <BlogCard 
                title="Python vs R for Financial Analysis"
                excerpt="Comparing the two giants of data science specifically for financial modeling use cases."
                category="Tools & Tech"
                author="Data Analyst"
                readTime="6 min read"
                date="Oct 10, 2023"
                link="/insights/python-vs-r"
            />
          </div>
        </div>
      </section>

      {/* Affiliate / Resources Section */}
      <section className="py-20 bg-background border-t">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Curated Resources</h2>
            <p className="mt-4 text-muted-foreground">
              Hand-picked tools, books, and courses that I recommend for aspiring data analysts.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard 
                title="Data Analysis for Finance"
                description="The definitive guide to mastering financial analytics."
                price="$49.99"
                image={productBook}
                rating={5}
                reviews={128}
                category="Book"
            />
            <ProductCard 
                title="Complete Data Science Bootcamp"
                description="Zero to hero in Python, SQL, and Tableau."
                price="$199.00"
                image={productCourse}
                rating={4}
                reviews={850}
                category="Course"
            />
             <ProductCard 
                title="Advanced Excel Masterclass"
                description="Unlock the full potential of Excel for complex modeling."
                price="$29.99"
                image={productCourse}
                rating={5}
                reviews={342}
                category="Course"
            />
             <ProductCard 
                title="Visual Analytics Guide"
                description="Learn the art of storytelling with data."
                price="$34.50"
                image={productBook}
                rating={4}
                reviews={92}
                category="Book"
            />
          </div>
           <div className="mt-12 text-center">
             <Link href="/shop">
              <Button size="lg" variant="outline">View All Resources</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to transform your data?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
                Let's collaborate on your next analytics project. I'm currently open for freelance opportunities and consulting.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-bold">
                  Get In Touch
              </Button>
            </Link>
        </div>
      </section>

    </div>
  );
}
