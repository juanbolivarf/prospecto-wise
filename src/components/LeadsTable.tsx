import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, Coffee, Mail, MessageSquare, ExternalLink } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  type: "cowork" | "cafe";
  email?: string;
  phone?: string;
  status: "new" | "contacted" | "responded" | "converted";
  source: string;
  date: string;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "WeWork Soho",
    type: "cowork",
    email: "contact@wework.com",
    phone: "+1234567890",
    status: "contacted",
    source: "Google Maps",
    date: "2025-10-02",
  },
  {
    id: "2",
    name: "Café Noir",
    type: "cafe",
    phone: "+1234567891",
    status: "new",
    source: "Instagram",
    date: "2025-10-02",
  },
  {
    id: "3",
    name: "Impact Hub",
    type: "cowork",
    email: "hello@impacthub.com",
    status: "responded",
    source: "Directory",
    date: "2025-10-01",
  },
  {
    id: "4",
    name: "The Coffee Lab",
    type: "cafe",
    phone: "+1234567892",
    status: "contacted",
    source: "Google Maps",
    date: "2025-10-01",
  },
];

const statusColors = {
  new: "bg-blue-500/10 text-blue-700 border-blue-200",
  contacted: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
  responded: "bg-purple-500/10 text-purple-700 border-purple-200",
  converted: "bg-green-500/10 text-green-700 border-green-200",
};

export const LeadsTable = () => {
  return (
    <Card className="p-6 gradient-card shadow-medium animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Recent Leads</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage your prospecting pipeline
          </p>
        </div>
        <Button className="gradient-primary text-white">
          Add Lead
        </Button>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLeads.map((lead) => (
              <TableRow key={lead.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1">
                    {lead.type === "cowork" ? (
                      <>
                        <Building2 className="h-3 w-3" />
                        Cowork
                      </>
                    ) : (
                      <>
                        <Coffee className="h-3 w-3" />
                        Café
                      </>
                    )}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {lead.email && (
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    )}
                    {lead.phone && (
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[lead.status]}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{lead.source}</TableCell>
                <TableCell className="text-muted-foreground">{lead.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
