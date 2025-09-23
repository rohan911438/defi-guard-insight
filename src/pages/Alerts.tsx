import { useState } from "react";
import { AlertTriangle, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

const mockAlerts = [
  {
    id: "1",
    txHash: "0x1234567890abcdef1234567890abcdef12345678",
    severity: "Critical" as const,
    riskScore: 95,
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    pattern: "Flash Loan Attack",
    blockNumber: 12345678,
    gasUsed: "250,000",
  },
  {
    id: "2", 
    txHash: "0xabcdef1234567890abcdef1234567890abcdef12",
    severity: "High" as const,
    riskScore: 87,
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    pattern: "Sandwich Attack",
    blockNumber: 12345677,
    gasUsed: "180,000",
  },
  {
    id: "3",
    txHash: "0x9876543210fedcba9876543210fedcba98765432",
    severity: "Medium" as const, 
    riskScore: 64,
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    pattern: "Unusual Volume",
    blockNumber: 12345676,
    gasUsed: "95,000",
  },
];

const severityConfig = {
  Critical: { color: "bg-destructive text-destructive-foreground" },
  High: { color: "bg-danger text-danger-foreground" },
  Medium: { color: "bg-warning text-warning-foreground" },
  Low: { color: "bg-success text-success-foreground" },
};

export default function Alerts() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlerts = mockAlerts.filter(alert => 
    alert.txHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.severity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.pattern.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Alert Management</h1>
        <p className="text-muted-foreground">
          Comprehensive view of all fraud detection alerts and suspicious activities
        </p>
      </div>

      {/* Controls */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search alerts by hash, severity, or pattern..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts Table */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>All Alerts</span>
            <Badge variant="secondary">{filteredAlerts.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAlerts.map((alert) => (
              <div key={alert.id} className="p-4 border border-border rounded-xl hover:bg-accent/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-3">
                    <div className="space-y-1">
                      <Badge className={severityConfig[alert.severity].color}>
                        {alert.severity}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {alert.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4">
                    <div className="space-y-1">
                      <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                        {alert.txHash.slice(0, 10)}...{alert.txHash.slice(-8)}
                      </code>
                      <div className="text-sm text-muted-foreground">
                        Block #{alert.blockNumber.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">{alert.pattern}</div>
                      <div className="text-xs text-muted-foreground">
                        Gas: {alert.gasUsed}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Risk Score</span>
                        <span className="font-semibold">{alert.riskScore}/100</span>
                      </div>
                      <Progress value={alert.riskScore} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <Button variant="outline" size="sm" className="w-full">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}