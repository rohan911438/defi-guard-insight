import { X, Copy, ExternalLink, AlertTriangle, Clock, Hash, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

type Alert = {
  id: string;
  txHash: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  riskScore: number;
  timestamp: Date;
  pattern?: string;
  explanation?: string;
};

const severityConfig = {
  Critical: { color: "bg-destructive text-destructive-foreground", bgClass: "bg-destructive/10" },
  High: { color: "bg-danger text-danger-foreground", bgClass: "bg-danger/10" },
  Medium: { color: "bg-warning text-warning-foreground", bgClass: "bg-warning/10" },
  Low: { color: "bg-success text-success-foreground", bgClass: "bg-success/10" },
};

const mockFeatures = [
  { name: "Transaction Amount", value: "1,250.5 U2U", impact: "High" },
  { name: "Gas Usage Pattern", value: "Unusual", impact: "Medium" },
  { name: "Contract Age", value: "2 days", impact: "High" },
  { name: "Liquidity Ratio", value: "0.23", impact: "Critical" },
  { name: "Time Between Txs", value: "< 1 block", impact: "High" },
];

interface AlertDetailsPanelProps {
  alert: Alert | null;
  onClose: () => void;
}

export default function AlertDetailsPanel({ alert, onClose }: AlertDetailsPanelProps) {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Transaction hash copied",
    });
  };

  if (!alert) {
    return (
      <Card className="rounded-2xl shadow-md h-fit">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No Alert Selected</h3>
          <p className="text-muted-foreground">
            Select an alert from the feed to view detailed information
          </p>
        </CardContent>
      </Card>
    );
  }

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString();
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Alert Details</span>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Alert Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge className={severityConfig[alert.severity].color}>
              {alert.severity} Risk
            </Badge>
            <div className="text-right">
              <div className="text-2xl font-bold">{alert.riskScore}</div>
              <div className="text-sm text-muted-foreground">Risk Score</div>
            </div>
          </div>
          
          <Progress value={alert.riskScore} className="h-3" />
        </div>

        {/* Transaction Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Hash className="mr-2 h-4 w-4" />
            Transaction Details
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Transaction Hash</label>
              <div className="flex items-center space-x-2 mt-1">
                <code className="flex-1 text-sm bg-muted p-2 rounded font-mono break-all">
                  {alert.txHash}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(alert.txHash)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://u2uscan.xyz/tx/${alert.txHash}`, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Detected Pattern</label>
              <div className="mt-1">
                <Badge variant="outline" className="text-sm">
                  {alert.pattern || "Unknown Pattern"}
                </Badge>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Timestamp
              </label>
              <div className="mt-1 text-sm">
                {formatTimestamp(alert.timestamp)}
              </div>
            </div>
          </div>
        </div>

        {/* ML Model Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Key Risk Factors
          </h3>
          
          <div className="space-y-3">
            {mockFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                <div>
                  <div className="font-medium text-sm">{feature.name}</div>
                  <div className="text-sm text-muted-foreground">{feature.value}</div>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    feature.impact === "Critical" ? "border-destructive text-destructive" :
                    feature.impact === "High" ? "border-danger text-danger" :
                    feature.impact === "Medium" ? "border-warning text-warning" :
                    "border-success text-success"
                  }
                >
                  {feature.impact}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {alert.explanation && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Analysis</h3>
            <div className="p-4 bg-accent/50 rounded-xl">
              <p className="text-sm leading-relaxed">{alert.explanation}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2">
          <Button 
            className="w-full" 
            onClick={() => window.open(`https://u2uscan.xyz/tx/${alert.txHash}`, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View on U2U Explorer
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open('#', '_blank')}
          >
            View AlertRegistry Entry
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}