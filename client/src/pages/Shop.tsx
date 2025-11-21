import { useEffect } from "react";
import ProductCard from "@/components/shop/ProductCard";
import productBook from "@assets/generated_images/data_analysis_book_mockup.png";
import productCourse from "@assets/generated_images/data_science_course_bundle_mockup.png";

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    {
        title: "Data Analysis for Finance",
        description: "The definitive guide to mastering financial analytics. Covers everything from basic Excel to advanced Python modeling.",
        price: "$49.99",
        image: productBook,
        rating: 5,
        reviews: 128,
        category: "Book"
    },
    {
        title: "Complete Data Science Bootcamp",
        description: "Zero to hero in Python, SQL, and Tableau. Includes 50+ hours of video content and 10 real-world projects.",
        price: "$199.00",
        image: productCourse,
        rating: 4,
        reviews: 850,
        category: "Course"
    },
    {
        title: "Advanced Excel Masterclass",
        description: "Unlock the full potential of Excel for complex modeling, macros, and VBA automation.",
        price: "$29.99",
        image: productCourse,
        rating: 5,
        reviews: 342,
        category: "Course"
    },
    {
        title: "Visual Analytics Guide",
        description: "Learn the art of storytelling with data. A practical handbook for creating impactful dashboards.",
        price: "$34.50",
        image: productBook,
        rating: 4,
        reviews: 92,
        category: "Book"
    },
    {
        title: "Machine Learning for Trading",
        description: "Build algorithmic trading strategies using Python and ML libraries.",
        price: "$59.99",
        image: productBook,
        rating: 5,
        reviews: 76,
        category: "Book"
    },
    {
        title: "SQL for Data Analysis",
        description: "Master SQL queries for data extraction, transformation, and analysis.",
        price: "$24.99",
        image: productCourse,
        rating: 4,
        reviews: 210,
        category: "Course"
    }
  ];

  return (
    <div className="py-20 container">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-display mb-4">Curated Resources</h1>
        <p className="text-muted-foreground">
            Tools, books, and courses I personally recommend to help you advance your data career.
            <span className="block text-xs mt-2 text-muted-foreground/70">* Contains affiliate links</span>
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
}
