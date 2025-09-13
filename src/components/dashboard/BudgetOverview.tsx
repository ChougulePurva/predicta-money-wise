import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetCategory {
  name: string;
  spent: number;
  budget: number;
  color: string;
}

const budgetData: BudgetCategory[] = [
  { name: "Food & Dining", spent: 320, budget: 400, color: "bg-blue-500" },
  { name: "Transportation", spent: 150, budget: 200, color: "bg-green-500" },
  { name: "Entertainment", spent: 180, budget: 150, color: "bg-red-500" },
  { name: "Shopping", spent: 90, budget: 200, color: "bg-purple-500" },
  { name: "Education", spent: 450, budget: 500, color: "bg-orange-500" },
];

export const BudgetOverview = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Budget Overview</h3>
      </div>
      
      <div className="space-y-4">
        {budgetData.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  <span className="text-sm font-medium text-foreground">{category.name}</span>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-semibold ${isOverBudget ? 'text-destructive' : 'text-foreground'}`}>
                    ${category.spent}
                  </span>
                  <span className="text-xs text-muted-foreground"> / ${category.budget}</span>
                </div>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
              />
              {isOverBudget && (
                <p className="text-xs text-destructive">Over budget by ${category.spent - category.budget}</p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};