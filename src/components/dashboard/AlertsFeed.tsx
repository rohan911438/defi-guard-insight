import { useState, useEffect } from "react";
import { Search, RefreshCw, ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Alert = {
  id: string;
  txHash: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  riskScore: number;
  timestamp: Date;
  pattern?: string;
  explanation?: string;
};

const mockAlerts: Alert[] = [
  {
    id: "1",
    txHash: "0x1234567890abcdef1234567890abcdef12345678",
    severity: "Critical",
    riskScore: 95,
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    pattern: "Flash Loan Attack",
    explanation: "Suspicious flash loan patterns detected with immediate liquidation",
  },
  {
    id: "2", 
    txHash: "0xabcdef1234567890abcdef1234567890abcdef12",
    severity: "High",
    riskScore: 87,
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    pattern: "Sandwich Attack",
    explanation: "MEV bot detected manipulating transaction ordering",
  },
  {
    id: "3",
    txHash: "0x9876543210fedcba9876543210fedcba98765432",
    severity: "Medium", 
    riskScore: 64,
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    pattern: "Unusual Volume",
    explanation: "Transaction volume significantly above normal patterns",
  },
  {
    id: "4",
    txHash: "0xfedcba9876543210fedcba9876543210fedcba98",
    severity: "Low",
    riskScore: 23,
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    pattern: "New Contract Interaction",
    explanation: "First-time interaction with recently deployed contract",
  },
];

const severityConfig = {
  Critical: { color: "bg-destructive text-destructive-foreground", bgClass: "bg-destructive/10" },
  High: { color: "bg-danger text-danger-foreground", bgClass: "bg-danger/10" },
  Medium: { color: "bg-warning text-warning-foreground", bgClass: "bg-warning/10" },
  Low: { color: "bg-success text-success-foreground", bgClass: "bg-success/10" },
};

interface AlertsFeedProps {
  onSelectAlert: (alert: Alert) => void;
  selectedAlertId?: string;
}

export default function AlertsFeed({ onSelectAlert, selectedAlertId }: AlertsFeedProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    const loadAlerts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAlerts(mockAlerts);
      setLoading(false);
    };
    
    loadAlerts();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setAlerts([...mockAlerts]);
    setLoading(false);
    toast({
      title: "Alerts refreshed",
      description: "Latest alerts loaded successfully",
    });
  };

  const filteredAlerts = alerts.filter(alert => 
    alert.txHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.severity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.pattern?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Transaction hash copied",
    });
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <span>Alerts Feed</span>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-16 bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <span>Alerts Feed</span>
            <Badge variant="secondary">{filteredAlerts.length}</Badge>
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by hash, severity, or pattern..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl border cursor-pointer transition-all hover:shadow-md",
                selectedAlertId === alert.id 
                  ? "ring-2 ring-primary bg-accent" 
                  : "bg-card hover:bg-accent/50"
              )}
              onClick={() => onSelectAlert(alert)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Badge className={severityConfig[alert.severity].color}>
                      {alert.severity}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(alert.timestamp)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                      {alert.txHash.slice(0, 10)}...{alert.txHash.slice(-8)}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(alert.txHash);
                      }}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://u2uscan.xyz/tx/${alert.txHash}`, '_blank');
                      }}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Risk Score</span>
                      <span className="text-sm font-semibold">{alert.riskScore}/100</span>
                    </div>
                    <Progress value={alert.riskScore} className="h-2" />
                  </div>
                  
                  {alert.pattern && (
                    <div className="text-sm text-muted-foreground">
                      Pattern: <span className="font-medium">{alert.pattern}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {filteredAlerts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No alerts found matching your search.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}