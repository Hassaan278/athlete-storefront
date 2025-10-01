import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  category: string;
}

const ProductCard = ({ image, title, price, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{title}</h3>
        <p className="text-lg font-bold text-primary">{price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
