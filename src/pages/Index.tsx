import { DashboardStats } from "@/components/DashboardStats";
import { LeadsTable } from "@/components/LeadsTable";
import { IntegrationsCard } from "@/components/IntegrationsCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Search, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10 shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ProspectAI</h1>
                <p className="text-xs text-muted-foreground">B2B Automation Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Find Leads
              </Button>
              <Button className="gradient-primary text-white">
                <Zap className="h-4 w-4 mr-2" />
                Start Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="gradient-primary rounded-2xl p-8 text-white shadow-strong">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">
              Automate Your B2B Prospecting
            </h2>
            <p className="text-white/90 mb-6">
              Find, classify, and contact coworking spaces and cafés automatically.
              Reduce prospecting time by 80% with AI-powered workflows.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg">
                View Tutorial
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Documentation
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Leads Table */}
        <LeadsTable />

        {/* Integrations */}
        <IntegrationsCard />
      </main>
    </div>
  );
};

export default Index;
