import { Card } from "@/components/ui/card";
import { Users, Mail, MessageSquare, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  trend?: "up" | "down";
}

const StatCard = ({ title, value, change, icon, trend }: StatCardProps) => (
  <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        {change && (
          <p className={`text-sm font-medium flex items-center gap-1 ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}>
            <TrendingUp className={`h-4 w-4 ${trend === "down" && "rotate-180"}`} />
            {change}
          </p>
        )}
      </div>
      <div className="rounded-lg bg-primary/10 p-3">
        {icon}
      </div>
    </div>
  </Card>
);

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Leads",
      value: 247,
      change: "+12% this week",
      icon: <Users className="h-6 w-6 text-primary" />,
      trend: "up" as const,
    },
    {
      title: "Contacted",
      value: 189,
      change: "+8% this week",
      icon: <Mail className="h-6 w-6 text-primary" />,
      trend: "up" as const,
    },
    {
      title: "WhatsApp Sent",
      value: 143,
      change: "+15% this week",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      trend: "up" as const,
    },
    {
      title: "Conversion Rate",
      value: "23.4%",
      change: "+3.2% vs last week",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      trend: "up" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};
