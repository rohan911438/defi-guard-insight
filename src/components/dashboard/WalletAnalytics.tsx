import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  Zap,
  BarChart3,
  PieChart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletRiskProfile {
  address: string;
  riskScore: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  totalTransactions: number;
  totalVolume: string;
  firstSeen: Date;
  lastActivity: Date;
  flags: string[];
  connections: number;
  reputation: number;
}

const mockWallets: WalletRiskProfile[] = [
  {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    riskScore: 94,
    riskLevel: "critical",
    totalTransactions: 1247,
    totalVolume: "$2.4M",
    firstSeen: new Date(Date.now() - 86400000 * 30),
    lastActivity: new Date(Date.now() - 3600000),
    flags: ["Flash Loan Attacker", "High Frequency", "MEV Bot"],
    connections: 156,
    reputation: 12,
  },
  {
    address: "0xabcdef1234567890abcdef1234567890abcdef12",
    riskScore: 76,
    riskLevel: "high",
    totalTransactions: 892,
    totalVolume: "$890K",
    firstSeen: new Date(Date.now() - 86400000 * 15),
    lastActivity: new Date(Date.now() - 7200000),
    flags: ["Sandwich Attacks", "Frontrunning"],
    connections: 89,
    reputation: 34,
  },
  {
    address: "0x9876543210fedcba9876543210fedcba98765432",
    riskScore: 45,
    riskLevel: "medium",
    totalTransactions: 234,
    totalVolume: "$125K",
    firstSeen: new Date(Date.now() - 86400000 * 7),
    lastActivity: new Date(Date.now() - 14400000),
    flags: ["Unusual Patterns"],
    connections: 23,
    reputation: 67,
  },
];

interface NetworkMetrics {
  totalWallets: number;
  activeWallets: number;
  suspiciousWallets: number;
  totalVolume: string;
  avgRiskScore: number;
  threatLevel: "low" | "medium" | "high" | "critical";
}

const networkMetrics: NetworkMetrics = {
  totalWallets: 15847,
  activeWallets: 2341,
  suspiciousWallets: 187,
  totalVolume: "$45.2M",
  avgRiskScore: 23.7,
  threatLevel: "medium",
};

const riskColors = {
  low: "bg-green-100 text-green-800 border-green-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  critical: "bg-red-100 text-red-800 border-red-200",
};

export default function WalletAnalytics() {
  const [wallets, setWallets] = useState<WalletRiskProfile[]>(mockWallets);
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"riskScore" | "volume" | "activity">("riskScore");

  const filteredWallets = wallets
    .filter(wallet => selectedRiskLevel === "all" || wallet.riskLevel === selectedRiskLevel)
    .sort((a, b) => {
      if (sortBy === "riskScore") return b.riskScore - a.riskScore;
      if (sortBy === "volume") return parseFloat(b.totalVolume.replace(/[$,MK]/g, "")) - parseFloat(a.totalVolume.replace(/[$,MK]/g, ""));
      if (sortBy === "activity") return b.lastActivity.getTime() - a.lastActivity.getTime();
      return 0;
    });

  return (
    <div className="space-y-6">
      {/* Network Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Wallets</p>
                <p className="text-2xl font-bold text-blue-600">{networkMetrics.totalWallets.toLocaleString()}</p>
                <p className="text-xs text-blue-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  ↑ 5.2% today
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Wallets</p>
                <p className="text-2xl font-bold text-green-600">{networkMetrics.activeWallets.toLocaleString()}</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <Activity className="w-3 h-3 mr-1" />
                  Online now
                </p>
              </div>
              <Activity className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Suspicious</p>
                <p className="text-2xl font-bold text-red-600">{networkMetrics.suspiciousWallets}</p>
                <p className="text-xs text-red-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  ↑ 12% today
                </p>
              </div>
              <Zap className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Volume</p>
                <p className="text-2xl font-bold text-purple-600">{networkMetrics.totalVolume}</p>
                <p className="text-xs text-purple-500 flex items-center mt-1">
                  <DollarSign className="w-3 h-3 mr-1" />
                  24h volume
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Threat Level Indicator */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Network Threat Level</h3>
              <p className="text-sm text-gray-600">Current security status based on wallet analytics</p>
            </div>
            <div className="text-right">
              <Badge className={cn("text-lg px-4 py-2", riskColors[networkMetrics.threatLevel])}>
                {networkMetrics.threatLevel.toUpperCase()}
              </Badge>
              <div className="text-sm text-gray-500 mt-2">
                Avg Risk Score: {networkMetrics.avgRiskScore}%
              </div>
              <Progress value={networkMetrics.avgRiskScore} className="w-32 h-3 mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Risk Profiles */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              High-Risk Wallet Profiles
            </CardTitle>
            <div className="flex items-center space-x-2">
              <select 
                value={selectedRiskLevel}
                onChange={(e) => setSelectedRiskLevel(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Risk Levels</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="riskScore">Risk Score</option>
                <option value="volume">Volume</option>
                <option value="activity">Last Activity</option>
              </select>
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.address}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-mono text-sm text-gray-900">
                        {wallet.address}
                      </h3>
                      <Badge className={cn("text-xs", riskColors[wallet.riskLevel])}>
                        {wallet.riskLevel}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {wallet.flags.map((flag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {flag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">
                      {wallet.riskScore}%
                    </div>
                    <div className="text-sm text-gray-500">Risk Score</div>
                    <Progress value={wallet.riskScore} className="w-20 h-2 mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Transactions:</span>
                    <div className="font-semibold">{wallet.totalTransactions.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Volume:</span>
                    <div className="font-semibold text-green-600">{wallet.totalVolume}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Connections:</span>
                    <div className="font-semibold">{wallet.connections}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Reputation:</span>
                    <div className="font-semibold">{wallet.reputation}%</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                      First seen: {wallet.firstSeen.toLocaleDateString()} • 
                      Last active: {wallet.lastActivity.toLocaleDateString()}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        Block Wallet
                      </Button>
                    </div>
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