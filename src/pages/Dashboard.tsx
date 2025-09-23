import { useState } from "react";
import AlertsFeed from "@/components/dashboard/AlertsFeed";
import AlertDetailsPanel from "@/components/dashboard/AlertDetailsPanel";
import TransactionGraph from "@/components/dashboard/TransactionGraph";

type Alert = {
  id: string;
  txHash: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  riskScore: number;
  timestamp: Date;
  pattern?: string;
  explanation?: string;
};

export default function Dashboard() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor real-time DeFi fraud detection and transaction analysis
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Alerts Feed */}
        <div className="xl:col-span-1">
          <AlertsFeed 
            onSelectAlert={setSelectedAlert}
            selectedAlertId={selectedAlert?.id}
          />
        </div>

        {/* Middle Column - Alert Details */}
        <div className="xl:col-span-1">
          <AlertDetailsPanel 
            alert={selectedAlert}
            onClose={() => setSelectedAlert(null)}
          />
        </div>

        {/* Right Column - Transaction Graph */}
        <div className="xl:col-span-1">
          <TransactionGraph />
        </div>
      </div>
    </div>
  );
}