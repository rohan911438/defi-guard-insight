import { X, Copy, ExternalLink, AlertTriangle, Clock, Hash, TrendingUp, Shield, Brain, Zap, Search, FileText, Users, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Alert } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

const severityConfig = {
  Low: { color: "bg-blue-100 text-blue-800 border-blue-200" },
  Medium: { color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  High: { color: "bg-orange-100 text-orange-800 border-orange-200" },
  Critical: { color: "bg-red-100 text-red-800 border-red-200" }
};

const mockFeatures = [
  { name: "Transaction Velocity", value: "95th percentile", impact: "High" },
  { name: "Gas Price Anomaly", value: "300% above average", impact: "Medium" },
  { name: "Wallet Age", value: "< 24 hours", impact: "High" },
  { name: "Contract Similarity", value: "89% match to known exploits", impact: "Critical" }
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