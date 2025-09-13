import { MetricCard } from "@/components/dashboard/MetricCard";
import { BudgetOverview } from "@/components/dashboard/BudgetOverview";
import { GoalsTracker } from "@/components/dashboard/GoalsTracker";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { Wallet, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Finance Manager</h1>
              <p className="text-primary-foreground/80 mt-1">Smart budgeting for students</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-primary-foreground/80">Welcome back,</p>
                <p className="font-semibold">Alex Chen</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Balance"
            value="$2,485"
            change={{ value: "+12.5%", type: "increase" }}
            icon={<Wallet className="h-5 w-5" />}
          />
          <MetricCard
            title="This Month's Spending"
            value="$1,190"
            change={{ value: "-8.2%", type: "decrease" }}
            icon={<CreditCard className="h-5 w-5" />}
          />
          <MetricCard
            title="Savings Rate"
            value="28%"
            change={{ value: "+3.1%", type: "increase" }}
            icon={<PiggyBank className="h-5 w-5" />}
          />
          <MetricCard
            title="Goals Progress"
            value="65%"
            change={{ value: "+15%", type: "increase" }}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SpendingChart />
          </div>
          <div>
            <BudgetOverview />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GoalsTracker />
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default Index;