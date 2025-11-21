import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, User } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  link?: string;
}

export default function BlogCard({ title, excerpt, category, author, readTime, date, link }: BlogCardProps) {
  return (
    <Link href={link || `/blog/${title.toLowerCase().replace(/ /g, "-")}`}>
        <a className="block h-full">
            <Card className="h-full flex flex-col border-muted transition-all hover:border-primary/50 hover:shadow-md cursor-pointer">
            <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                    {category}
                </Badge>
                <span className="text-xs text-muted-foreground">{date}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {title}
                </h3>
            </CardHeader>
            <CardContent className="p-6 py-0 flex-grow">
                <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-4 mt-auto flex items-center justify-between border-t bg-muted/30">
                <div className="flex items-center text-xs text-muted-foreground font-medium">
                    <User className="mr-1 h-3 w-3" />
                    {author}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {readTime}
                </div>
            </CardFooter>
            </Card>
        </a>
    </Link>
  );
}
