import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, CheckCircle2, AlertCircle } from "lucide-react";

interface Integration {
  name: string;
  description: string;
  status: "connected" | "disconnected";
  icon: string;
}

const integrations: Integration[] = [
  {
    name: "OpenAI",
    description: "AI-powered lead classification",
    status: "disconnected",
    icon: "🤖",
  },
  {
    name: "HubSpot",
    description: "CRM synchronization",
    status: "disconnected",
    icon: "🎯",
  },
  {
    name: "Callbell",
    description: "WhatsApp automation",
    status: "disconnected",
    icon: "💬",
  },
  {
    name: "n8n",
    description: "Workflow automation",
    status: "disconnected",
    icon: "🔄",
  },
];

export const IntegrationsCard = () => {
  return (
    <Card className="p-6 gradient-card shadow-medium animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Integrations</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Connect external services to automate workflows
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Manage
        </Button>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{integration.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{integration.name}</h3>
                  {integration.status === "connected" ? (
                    <Badge className="bg-green-500/10 text-green-700 border-green-200">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-gray-500/10 text-gray-700">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Not connected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            </div>
            <Button
              variant={integration.status === "connected" ? "outline" : "default"}
              size="sm"
              className={integration.status === "disconnected" ? "gradient-primary text-white" : ""}
            >
              {integration.status === "connected" ? "Configure" : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
