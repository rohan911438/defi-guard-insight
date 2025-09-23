import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreatIntelligence {
  id: string;
  type: "malicious_address" | "suspicious_contract" | "phishing_site" | "exploit_signature";
  indicator: string;
  confidence: number;
  severity: "critical" | "high" | "medium" | "low";
  description: string;
  firstSeen: Date;
  lastSeen: Date;
  tags: string[];
  source: string;
}

const mockThreats: ThreatIntelligence[] = [
  {
    id: "1",
    type: "malicious_address",
    indicator: "0x1234567890abcdef1234567890abcdef12345678",
    confidence: 95,
    severity: "critical",
    description: "Known flash loan attacker wallet",
    firstSeen: new Date(Date.now() - 86400000),
    lastSeen: new Date(Date.now() - 3600000),
    tags: ["flash-loan", "defi-exploit", "high-volume"],
    source: "GuardianAI ML Model",
  },
  {
    id: "2", 
    type: "suspicious_contract",
    indicator: "0xabcdef1234567890abcdef1234567890abcdef12",
    confidence: 87,
    severity: "high",
    description: "Contract with obfuscated code patterns",
    firstSeen: new Date(Date.now() - 172800000),
    lastSeen: new Date(Date.now() - 7200000),
    tags: ["obfuscation", "proxy-pattern", "unverified"],
    source: "Heuristic Analysis",
  },
  {
    id: "3",
    type: "exploit_signature",
    indicator: "reentrancy_attack_v2",
    confidence: 78,
    severity: "medium",
    description: "Reentrancy attack pattern in transaction flow",
    firstSeen: new Date(Date.now() - 259200000),
    lastSeen: new Date(Date.now() - 10800000),
    tags: ["reentrancy", "smart-contract", "vulnerability"],
    source: "Pattern Recognition",
  },
];

const threatIcons = {
  malicious_address: AlertTriangle,
  suspicious_contract: Shield,
  phishing_site: Zap,
  exploit_signature: Activity,
};

const severityColors = {
  critical: "bg-red-100 text-red-800 border-red-200",
  high: "bg-orange-100 text-orange-800 border-orange-200", 
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-blue-100 text-blue-800 border-blue-200",
};

export default function ThreatIntelligence() {
  const [threats, setThreats] = useState<ThreatIntelligence[]>(mockThreats);
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredThreats = threats.filter(threat => 
    selectedType === "all" || threat.type === selectedType
  );

  const threatStats = {
    total: threats.length,
    critical: threats.filter(t => t.severity === "critical").length,
    high: threats.filter(t => t.severity === "high").length,
    medium: threats.filter(t => t.severity === "medium").length,
    low: threats.filter(t => t.severity === "low").length,
  };

  return (
    <div className="space-y-6">
      {/* Threat Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white shadow-sm border-l-4 border-l-red-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Critical Threats</p>
                <p className="text-2xl font-bold text-red-600">{threatStats.critical}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border-l-4 border-l-orange-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">High Risk</p>
                <p className="text-2xl font-bold text-orange-600">{threatStats.high}</p>
              </div>
              <Shield className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Medium Risk</p>
                <p className="text-2xl font-bold text-yellow-600">{threatStats.medium}</p>
              </div>
              <Activity className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Tracked</p>
                <p className="text-2xl font-bold text-green-600">{threatStats.total}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Threat Intelligence Feed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Threat Intelligence Feed
            </CardTitle>
            <div className="flex items-center space-x-2">
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Types</option>
                <option value="malicious_address">Malicious Addresses</option>
                <option value="suspicious_contract">Suspicious Contracts</option>
                <option value="exploit_signature">Exploit Signatures</option>
                <option value="phishing_site">Phishing Sites</option>
              </select>
              <Button variant="outline" size="sm">
                Export IOCs
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredThreats.map((threat) => {
              const IconComponent = threatIcons[threat.type];
              return (
                <div
                  key={threat.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full",
                        threat.severity === "critical" ? "bg-red-100 text-red-600" :
                        threat.severity === "high" ? "bg-orange-100 text-orange-600" :
                        threat.severity === "medium" ? "bg-yellow-100 text-yellow-600" :
                        "bg-blue-100 text-blue-600"
                      )}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 capitalize">
                          {threat.type.replace("_", " ")}
                        </h3>
                        <p className="text-sm text-gray-600 font-mono">
                          {threat.indicator}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge className={cn("text-xs", severityColors[threat.severity])}>
                        {threat.severity}
                      </Badge>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-700">
                          {threat.confidence}% Confidence
                        </div>
                        <Progress value={threat.confidence} className="w-20 h-2 mt-1" />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">
                    {threat.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {threat.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Last seen: {threat.lastSeen.toLocaleDateString()}
                      </span>
                      <span>Source: {threat.source}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        First detected: {threat.firstSeen.toLocaleDateString()} • 
                        Active for {Math.floor((threat.lastSeen.getTime() - threat.firstSeen.getTime()) / (1000 * 60 * 60 * 24))} days
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}