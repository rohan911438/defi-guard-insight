import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

interface RealTimeAlertBannerProps {
  alerts: any[];
}

export default function RealTimeAlertBanner({ alerts }: RealTimeAlertBannerProps) {
  if (!alerts || alerts.length === 0) return null;

  const latestAlert = alerts[0];

  return (
    <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <div>
            <Badge className="bg-red-100 text-red-800 mr-2">
              CRITICAL ALERT
            </Badge>
            <span className="text-sm font-medium">
              {latestAlert.pattern || "Flash Loan Attack Detected"}
            </span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {latestAlert.timestamp ? new Date(latestAlert.timestamp).toLocaleTimeString() : "Just now"}
        </div>
      </CardContent>
    </Card>
  );
}