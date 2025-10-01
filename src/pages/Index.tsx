import { Dumbbell, Shirt, ShoppingBag, Trophy } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sports.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productBasketball from "@/assets/product-basketball.jpg";
import productWeights from "@/assets/product-weights.jpg";
import productYoga from "@/assets/product-yoga.jpg";

const Index = () => {
  const categories = [
    { icon: Shirt, title: "Apparel", itemCount: "120+ items" },
    { icon: Dumbbell, title: "Equipment", itemCount: "85+ items" },
    { icon: Trophy, title: "Accessories", itemCount: "200+ items" },
    { icon: ShoppingBag, title: "Gear", itemCount: "150+ items" },
  ];

  const featuredProducts = [
    {
      image: productShoes,
      title: "Pro Running Shoes",
      price: "$129.99",
      category: "Footwear",
    },
    {
      image: productBasketball,
      title: "Official Basketball",
      price: "$49.99",
      category: "Equipment",
    },
    {
      image: productWeights,
      title: "Adjustable Dumbbells",
      price: "$89.99",
      category: "Equipment",
    },
    {
      image: productYoga,
      title: "Premium Yoga Mat",
      price: "$39.99",
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img
          src={heroImage}
          alt="Sports equipment"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up">
            Your Sports, Our Passion
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-6 animate-fade-in">
            Premium gear for athletes of all levels
          </p>
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 animate-scale-in">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-8 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
