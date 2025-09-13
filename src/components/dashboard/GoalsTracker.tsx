import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Calendar } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: "emergency" | "vacation" | "gadget" | "education";
}

const goals: Goal[] = [
  {
    id: "1",
    title: "Emergency Fund",
    target: 2000,
    current: 850,
    deadline: "Dec 2024",
    category: "emergency"
  },
  {
    id: "2", 
    title: "Summer Vacation",
    target: 1500,
    current: 650,
    deadline: "Jun 2025",
    category: "vacation"
  },
  {
    id: "3",
    title: "New Laptop",
    target: 1200,
    current: 980,
    deadline: "Mar 2025",
    category: "gadget"
  }
];

const getCategoryColor = (category: Goal["category"]) => {
  switch (category) {
    case "emergency": return "text-red-600";
    case "vacation": return "text-blue-600";
    case "gadget": return "text-purple-600";
    case "education": return "text-green-600";
    default: return "text-gray-600";
  }
};

export const GoalsTracker = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Savings Goals</h3>
        <Target className="h-5 w-5 text-primary" />
      </div>
      
      <div className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="space-y-3 p-4 rounded-lg bg-muted/30">
              <div className="flex items-center justify-between">
                <h4 className={`font-medium ${getCategoryColor(goal.category)}`}>
                  {goal.title}
                </h4>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{goal.deadline}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-foreground">${goal.current.toLocaleString()}</span>
                  <span className="text-muted-foreground">${goal.target.toLocaleString()}</span>
                </div>
                <Progress value={percentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{percentage.toFixed(1)}% complete</span>
                  <span>${remaining.toLocaleString()} to go</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};