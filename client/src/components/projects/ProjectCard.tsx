import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Calendar, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link?: string;
  downloadLink?: string;
}

export default function ProjectCard({ title, description, image, tags, date, link = "#", downloadLink }: ProjectCardProps) {
  const { toast } = useToast();

  const handleDownload = () => {
    if (!downloadLink) return;
    
    toast({
      title: "Download Started",
      description: `Downloading assets for ${title}...`,
      duration: 3000,
    });
    
    // In a real app, this would trigger the actual file download
    // window.open(downloadLink, '_blank');
  };

  return (
    <Card className="group overflow-hidden border-muted transition-all hover:border-primary/50 hover:shadow-lg flex flex-col h-full hover:cursor-pointer">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <Link href={link}>
          <a className="block h-full w-full cursor-pointer">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </Link>
      </div>
      <CardHeader className="p-6 pb-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={link}>
          <a className="block hover:underline decoration-primary underline-offset-4">
            <h3 className="font-display text-xl font-bold leading-tight cursor-pointer">{title}</h3>
          </a>
        </Link>
      </CardHeader>
      <CardContent className="p-6 py-2 flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-4 flex items-center justify-between mt-auto border-t bg-muted/10">
        <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
        </div>
        <div className="flex gap-2">
            {downloadLink && (
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1 h-8 px-2"
                    onClick={handleDownload}
                    title="Download Project Files"
                >
                    <Download className="h-3.5 w-3.5" />
                </Button>
            )}
            <Link href={link}>
              <Button variant="ghost" size="sm" className="gap-1 h-8 px-2 text-primary hover:text-primary hover:bg-primary/5">
              Case Study <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
