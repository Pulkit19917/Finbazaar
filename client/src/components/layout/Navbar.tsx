import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { BarChart3, ShoppingBag, FileText, Home, Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: BarChart3 },
    { name: "Code", path: "/code", icon: Code2 },
    { name: "Insights", path: "/blog", icon: FileText },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-primary">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-5 w-5" />
          </div>
          Finbazaar<span className="text-foreground">Analytics</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  location === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" className="hidden lg:flex">Contact Me</Button>
            </Link>
            <Link href="/resume">
                <Button>View Resume</Button>
            </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 text-lg font-medium transition-colors hover:text-primary",
                      location === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Contact Me</Button>
                </Link>
                <Link href="/resume" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">View Resume</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
