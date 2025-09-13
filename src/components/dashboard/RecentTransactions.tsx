import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, ShoppingCart, Car, Utensils, GraduationCap, Coffee } from "lucide-react";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  icon: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    id: "1",
    title: "Grocery Shopping",
    amount: -45.30,
    type: "expense",
    category: "Food",
    date: "Today",
    icon: <ShoppingCart className="h-4 w-4" />
  },
  {
    id: "2",
    title: "Part-time Job",
    amount: 320.00,
    type: "income", 
    category: "Income",
    date: "Yesterday",
    icon: <ArrowUpRight className="h-4 w-4" />
  },
  {
    id: "3",
    title: "Coffee Shop",
    amount: -8.50,
    type: "expense",
    category: "Food",
    date: "Yesterday",
    icon: <Coffee className="h-4 w-4" />
  },
  {
    id: "4",
    title: "Bus Pass",
    amount: -25.00,
    type: "expense",
    category: "Transport",
    date: "2 days ago",
    icon: <Car className="h-4 w-4" />
  },
  {
    id: "5",
    title: "Textbook",
    amount: -89.99,
    type: "expense",
    category: "Education",
    date: "3 days ago",
    icon: <GraduationCap className="h-4 w-4" />
  }
];

export const RecentTransactions = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                transaction.type === "income" 
                  ? "bg-success/10 text-success" 
                  : "bg-muted/50 text-muted-foreground"
              }`}>
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium text-foreground">{transaction.title}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="text-xs">
                {transaction.category}
              </Badge>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === "income" ? "text-success" : "text-foreground"
                }`}>
                  {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};