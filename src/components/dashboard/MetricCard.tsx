import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    type: "increase" | "decrease";
  };
  icon?: React.ReactNode;
  className?: string;
}

export const MetricCard = ({ title, value, change, icon, className }: MetricCardProps) => {
  return (
    <Card className={cn("p-6 bg-gradient-card shadow-soft border-0", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        {change && (
          <div className={cn(
            "flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium",
            change.type === "increase" 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          )}>
            {change.type === "increase" ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{change.value}</span>
          </div>
        )}
      </div>
    </Card>
  );
};