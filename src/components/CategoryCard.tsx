import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  itemCount: string;
}

const CategoryCard = ({ icon: Icon, title, itemCount }: CategoryCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{itemCount}</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
