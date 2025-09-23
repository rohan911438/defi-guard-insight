import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Activity, 
  Clock,
  ExternalLink,
  Filter,
  Pause,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LiveFeedItem {
  id: string;
  type: "alert" | "transaction" | "block";
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low" | "info";
  timestamp: Date;
  txHash?: string;
  blockNumber?: number;
  value?: string;
}

const mockFeedItems: LiveFeedItem[] = [
  {
    id: "1",
    type: "alert",
    title: "Flash Loan Attack Detected",
    description: "Suspicious flash loan pattern detected on DeFi protocol",
    severity: "critical",
    timestamp: new Date(),
    txHash: "0x1234...5678",
  },
  {
    id: "2",
    type: "transaction",
    title: "Large Transaction",
    description: "High-value transaction worth $2.5M U2U",
    severity: "medium",
    timestamp: new Date(Date.now() - 30000),
    txHash: "0xabcd...efgh",
    value: "$2.5M",
  },
  {
    id: "3",
    type: "block",
    title: "New Block Mined",
    description: "Block #12,345,679 confirmed with 150 transactions",
    severity: "info",
    timestamp: new Date(Date.now() - 60000),
    blockNumber: 12345679,
  },
  {
    id: "4",
    type: "alert",
    title: "Sandwich Attack",
    description: "MEV bot detected performing sandwich attack",
    severity: "high",
    timestamp: new Date(Date.now() - 120000),
    txHash: "0x9876...4321",
  },
];

const severityColors = {
  critical: "bg-red-100 text-red-800 border-red-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-blue-100 text-blue-800 border-blue-200",
  info: "bg-gray-100 text-gray-800 border-gray-200",
};

const typeIcons = {
  alert: AlertTriangle,
  transaction: Activity,
  block: Activity,
};

export default function LiveFeed() {
  const [feedItems, setFeedItems] = useState<LiveFeedItem[]>(mockFeedItems);
  const [isPaused, setIsPaused] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Simulate new feed items
      const newItem: LiveFeedItem = {
        id: Date.now().toString(),
        type: Math.random() > 0.7 ? "alert" : Math.random() > 0.5 ? "transaction" : "block",
        title: "New Activity",
        description: "Real-time activity detected",
        severity: Math.random() > 0.8 ? "critical" : Math.random() > 0.6 ? "high" : "medium",
        timestamp: new Date(),
        txHash: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
      };

      setFeedItems(prev => [newItem, ...prev.slice(0, 19)]); // Keep only 20 items
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const filteredItems = feedItems.filter(item => 
    filter === "all" || item.type === filter || item.severity === filter
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            Live Feed
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3" />
                  Pause
                </>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-3 h-3 mr-1" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-96 overflow-y-auto">
          <div className="space-y-2 p-4">
            {filteredItems.map((item, index) => {
              const IconComponent = typeIcons[item.type];
              return (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-start space-x-3 p-3 rounded-lg border transition-all duration-200",
                    index === 0 ? "bg-blue-50 border-blue-200 animate-pulse" : "bg-white border-gray-100 hover:bg-gray-50"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0",
                    item.severity === "critical" ? "bg-red-100 text-red-600" :
                    item.severity === "high" ? "bg-orange-100 text-orange-600" :
                    item.severity === "medium" ? "bg-yellow-100 text-yellow-600" :
                    "bg-blue-100 text-blue-600"
                  )}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Badge className={cn("text-xs", severityColors[item.severity])}>
                          {item.severity}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        {item.txHash && (
                          <span className="font-mono">TX: {item.txHash}</span>
                        )}
                        {item.blockNumber && (
                          <span>Block: {item.blockNumber.toLocaleString()}</span>
                        )}
                        {item.value && (
                          <span className="font-semibold text-green-600">{item.value}</span>
                        )}
                      </div>
                      
                      {item.txHash && (
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}