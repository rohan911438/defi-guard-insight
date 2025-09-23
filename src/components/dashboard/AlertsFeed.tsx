import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { Alert } from "@/types";

interface AlertsFeedProps {
  onSelectAlert: (alert: Alert | null) => void;
  selectedAlertId?: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    txHash: "0x1234567890abcdef1234567890abcdef12345678",
    blockNumber: 12345678,
    severity: "Critical",
    riskScore: 95,
    timestamp: new Date(),
    pattern: "Flash Loan Attack",
    explanation: "Suspicious flash loan patterns detected with immediate liquidation",
    detectorType: "ML",
    exploitType: "Flash Loan",
    evidence: [],
    affectedWallets: ["0xabcd..."],
    affectedTokens: ["USDT", "WETH"],
    gasUsed: 500000,
    valueAtRisk: "1000000",
    status: "Active"
  }
];

export default function AlertsFeed({ onSelectAlert, selectedAlertId }: AlertsFeedProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Alert Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="p-3 border rounded cursor-pointer">
              <Badge>{alert.severity}</Badge>
              <p className="text-sm mt-1">{alert.explanation}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}