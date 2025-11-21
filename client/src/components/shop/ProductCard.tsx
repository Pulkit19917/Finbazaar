import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export default function ProductCard({ title, description, price, image, rating, reviews, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-muted transition-all hover:border-primary/50 hover:shadow-lg flex flex-col h-full">
      <div className="relative aspect-square w-full overflow-hidden bg-muted p-8">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-white text-foreground hover:bg-white shadow-sm border">
            {category}
        </Badge>
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                    key={i} 
                    className={`h-3.5 w-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} 
                />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
        </div>
        <h3 className="font-display text-lg font-bold leading-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between mt-auto">
        <span className="font-display text-xl font-bold text-primary">{price}</span>
        <Button size="sm" className="gap-1">
          Buy Now <ExternalLink className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}
