import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";

export default function AIinFintech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-3xl">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Button>
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary">Industry Trends</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold">The Future of AI in Fintech</h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Data Analyst
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Nov 15, 2023
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min read
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              How artificial intelligence is reshaping the landscape of financial services and what it means for analysts.
            </p>

            <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg my-8">
              <p className="text-muted-foreground">
                <strong>Coming Soon:</strong> Full article content will be added here. This page is ready to display your detailed insights and analysis about AI in fintech.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Article Outline</h2>
              <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                <li>Introduction to AI adoption in financial services</li>
                <li>Machine learning applications in risk management</li>
                <li>Automated trading and portfolio management</li>
                <li>Data analyst roles in an AI-driven future</li>
                <li>Challenges and opportunities</li>
              </ul>
            </section>
          </div>

          <div className="border-t pt-8">
            <Link href="/blog">
              <Button variant="outline">← Back to All Insights</Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
