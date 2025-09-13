import { Card } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const categoryData = [
  { name: "Food & Dining", value: 320, color: "#3b82f6" },
  { name: "Transportation", value: 150, color: "#10b981" },
  { name: "Entertainment", value: 180, color: "#ef4444" },
  { name: "Shopping", value: 90, color: "#8b5cf6" },
  { name: "Education", value: 450, color: "#f59e0b" },
];

const weeklyData = [
  { name: "Mon", spending: 45 },
  { name: "Tue", spending: 78 },
  { name: "Wed", spending: 23 },
  { name: "Thu", spending: 120 },
  { name: "Fri", spending: 89 },
  { name: "Sat", spending: 156 },
  { name: "Sun", spending: 67 },
];

export const SpendingChart = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Spending Analytics</h3>
        <p className="text-sm text-muted-foreground mt-1">This week's spending breakdown</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Pie Chart */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">By Category</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Bar Chart */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Daily Spending</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Spending"]}
                labelStyle={{ color: '#1f2937' }}
              />
              <Bar 
                dataKey="spending" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};