import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Linkedin, Briefcase, GraduationCap, Award, Code2, Globe, Phone } from "lucide-react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-20 bg-muted/10 min-h-screen">
      <div className="container max-w-4xl mx-auto">
        
        {/* Header / Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">My Resume</h1>
            <p className="text-muted-foreground">Last updated: November 2025</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </div>

        {/* Resume Paper */}
        <div className="bg-card rounded-xl shadow-sm border p-8 md:p-12">
          
          {/* Resume Header */}
          <div className="border-b pb-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h1 className="font-display text-4xl font-bold text-primary mb-2">PULKIT SRIVASTAVA</h1>
                <p className="text-xl text-muted-foreground mb-4">Research Analyst | Algo Trading Operations Analyst</p>
                <p className="max-w-xl text-muted-foreground leading-relaxed">
                  Finance professional with hands-on experience in algorithmic trade execution, market monitoring, and P&L reporting. Comfortable in fast-paced environments with a focus on accuracy, communication, and execution discipline. Strong Excel reporting skills and basic Python scripting.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground min-w-fit">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  srivastavapulkit015@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  +91 7014259072
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  linkedin.com/in/pulkit-srivastava
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Jaipur | Open to Remote
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Left Column: Experience & Education */}
            <div className="md:col-span-2 flex flex-col gap-10">
              
              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-bold">Work Experience</h2>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Job 1 */}
                  <div className="relative pl-8 border-l-2 border-muted pb-2">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-card"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="font-bold text-lg">Algo & Equity Trading Desk</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">Feb 2024 – Present</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Finesee Stock Broking</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                      <li>Executed intraday trades using automated & manual orders ensuring smooth execution.</li>
                      <li>Monitored OMS/RMS terminals and coordinated execution flow during live markets.</li>
                      <li>Prepared daily P&L, M2M exposure, and brokerage summaries for multiple accounts.</li>
                      <li>Identified execution mismatches and handled manual interventions when necessary.</li>
                      <li>Used basic Python scripts to reduce repetitive data formatting and reporting tasks.</li>
                      <li>Coordinated with risk & settlement teams for day-end reconciliation.</li>
                    </ul>
                  </div>

                   {/* Personal Experience */}
                   <div className="relative pl-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-muted border-4 border-card"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="font-bold text-lg">Personal Trading Experience</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">5 Years</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Independent Trader</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                      <li>Equity (Stocks Intraday & Swing)</li>
                      <li>Index Derivatives (F&O)</li>
                      <li>Commodities (Crude oil & Natural Gas)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-bold">Education</h2>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">Bachelor of Commerce (B.Com)</h3>
                      <span className="text-sm text-muted-foreground">2018 - 2022</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Rajasthan University</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">Senior Secondary</h3>
                      <span className="text-sm text-muted-foreground">2018</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Tagore International School</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">Secondary</h3>
                      <span className="text-sm text-muted-foreground">2016</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Tagore International School</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Skills & Certs */}
            <div className="flex flex-col gap-10">
              
              {/* Technical Skills */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-bold">Skills</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-3">Trading & Operations</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Algo Trade Execution</Badge>
                      <Badge variant="secondary">OMS/RMS Handling</Badge>
                      <Badge variant="secondary">P&L Reporting</Badge>
                      <Badge variant="secondary">Risk Monitoring</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-3">Technical Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Excel (Advanced)</Badge>
                      <Badge variant="secondary">Python (Beginner)</Badge>
                      <Badge variant="secondary">SQL (Beginner)</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">English</Badge>
                      <Badge variant="outline">Hindi</Badge>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-bold">Certifications</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-bold text-sm">NISM Series VIII</h4>
                    <p className="text-xs text-muted-foreground mt-1">Equity Derivatives</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-bold text-sm">Financial Modeling & Valuation</h4>
                    <p className="text-xs text-muted-foreground mt-1">Udemy</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-bold text-sm">Microsoft Excel</h4>
                    <p className="text-xs text-muted-foreground mt-1">Advanced Functions & Financial Modeling</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
