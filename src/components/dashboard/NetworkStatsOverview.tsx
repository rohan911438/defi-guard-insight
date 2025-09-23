import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { NetworkStats, U2UNetworkData } from "@/types";
import { Zap, Globe, Clock, Database, Activity, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface NetworkStatsOverviewProps {
  networkStats: NetworkStats | null;
  u2uData: U2UNetworkData | null;
}

export default function NetworkStatsOverview({ networkStats, u2uData }: NetworkStatsOverviewProps) {
  if (!networkStats && !u2uData) return null;

  const threatLevel = networkStats ? 
    (networkStats.suspiciousTransactions / networkStats.totalTransactions) * 100 : 0;

  const getThreatColor = (level: number) => {
    if (level < 0.1) return "text-green-600 border-green-200 bg-green-50";
    if (level < 0.5) return "text-yellow-600 border-yellow-200 bg-yellow-50";
    return "text-red-600 border-red-200 bg-red-50";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Globe className="w-5 h-5 mr-2" />
          Network Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* U2U Network Stats */}
          {u2uData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                U2U Network Status
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Block Height</span>
                    <span className="font-mono text-sm">{u2uData.blockHeight.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Active Nodes</span>
                    <Badge variant="outline">{u2uData.activeNodes}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      Block Time
                    </span>
                    <span className="text-sm font-medium">{u2uData.averageBlockTime}s</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Hash Rate</span>
                    <span className="text-sm font-medium">{u2uData.networkHashRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Database className="w-3 h-3 mr-1" />
                      Mempool
                    </span>
                    <span className="text-sm font-medium">{u2uData.memPoolTransactions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total TXs</span>
                    <span className="text-sm font-medium">{u2uData.totalTransactions.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Guardian AI Stats */}
          {networkStats && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Activity className="w-4 h-4 mr-2 text-purple-600" />
                GuardianAI Monitoring
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Threat Level</span>
                    <Badge className={getThreatColor(threatLevel)}>
                      {threatLevel.toFixed(3)}%
                    </Badge>
                  </div>
                  <Progress 
                    value={Math.min(threatLevel * 20, 100)} 
                    className="h-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Suspicious TXs</span>
                      <span className="text-sm font-medium text-orange-600">
                        {networkStats.suspiciousTransactions.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Blocked TXs</span>
                      <span className="text-sm font-medium text-red-600">
                        {networkStats.blockedTransactions.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Gas Price</span>
                      <span className="text-sm font-medium">{networkStats.gasPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Health</span>
                      <Badge variant={
                        networkStats.networkHealth === 'Healthy' ? 'default' :
                        networkStats.networkHealth === 'Warning' ? 'secondary' : 'destructive'
                      }>
                        {networkStats.networkHealth}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Real-time Performance Indicators */}
        {networkStats && u2uData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-6 pt-4 border-t"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center">
                <Cpu className="w-3 h-3 mr-1" />
                System Performance
              </span>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Detection Rate</div>
                  <div className="text-sm font-medium">99.2%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Latency</div>
                  <div className="text-sm font-medium">0.3s</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Uptime</div>
                  <div className="text-sm font-medium">99.9%</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}