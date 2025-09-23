import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  Shield, 
  Activity, 
  TrendingUp, 
  Eye,
  Brain,
  Zap,
  Network,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  RefreshCw
} from "lucide-react";

export default function Dashboard() {
  const [alerts, setAlerts] = useState(24);
  const [threatsBlocked, setThreatsBlocked] = useState(156);
  const [networkActivity, setNetworkActivity] = useState(98.5);
  const [detectionRate, setDetectionRate] = useState(94.2);
  
  // Mock real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prev => prev + Math.floor(Math.random() * 3));
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5));
      setNetworkActivity(prev => Math.min(100, prev + (Math.random() - 0.5) * 2));
      setDetectionRate(prev => Math.min(100, prev + (Math.random() - 0.5) * 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              🛡️ GuardianAI Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Real-time DeFi fraud detection powered by AI on U2U Network
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              System Online
            </Badge>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-500 font-medium">Powered by</span>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-600">U2U Network</span>
              </div>
              <span className="text-gray-400">+</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-purple-600">GuardianAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Alert Banner */}
      <div className="mb-6">
        <Card className="border-red-200 bg-red-50 border-l-4 border-l-red-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 animate-pulse" />
                <div>
                  <Badge className="bg-red-100 text-red-800 mr-2">CRITICAL ALERT</Badge>
                  <span className="font-medium">Flash Loan Attack Detected - 0x1234...5678</span>
                </div>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Active Alerts</p>
                <p className="text-3xl font-bold text-red-600">{alerts}</p>
                <p className="text-xs text-red-400 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  ↑ 12% from yesterday
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Threats Blocked</p>
                <p className="text-3xl font-bold text-green-600">{threatsBlocked}</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Shield className="w-3 h-3 mr-1" />
                  ↑ 8% from yesterday
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Network Activity</p>
                <p className="text-3xl font-bold text-blue-600">{networkActivity.toFixed(1)}%</p>
                <p className="text-xs text-blue-400 flex items-center mt-1">
                  <Activity className="w-3 h-3 mr-1" />
                  Optimal performance
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Activity className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Detection Rate</p>
                <p className="text-3xl font-bold text-purple-600">{detectionRate.toFixed(1)}%</p>
                <p className="text-xs text-purple-400 flex items-center mt-1">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Model Accuracy
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Detectors Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-purple-500" />
              AI Detector Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <div>
                    <h3 className="font-semibold">ML Detector</h3>
                    <p className="text-sm text-gray-500">Machine Learning Model</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                  <div className="text-sm text-gray-500 mt-1">Accuracy: 94%</div>
                  <Progress value={94} className="w-20 h-2 mt-1" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Heuristic Detector</h3>
                    <p className="text-sm text-gray-500">Rule-based Analysis</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                  <div className="text-sm text-gray-500 mt-1">Accuracy: 87%</div>
                  <Progress value={87} className="w-20 h-2 mt-1" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Anomaly Detector</h3>
                    <p className="text-sm text-gray-500">Pattern Recognition</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                  <div className="text-sm text-gray-500 mt-1">Accuracy: 91%</div>
                  <Progress value={91} className="w-20 h-2 mt-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Threats */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
              Recent Threats Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                <div>
                  <div className="font-medium text-red-800">Flash Loan Attack</div>
                  <div className="text-sm text-red-600">0x1234...5678</div>
                  <div className="text-xs text-gray-500">2 minutes ago</div>
                </div>
                <Badge className="bg-red-100 text-red-800">Critical</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div>
                  <div className="font-medium text-orange-800">Sandwich Attack</div>
                  <div className="text-sm text-orange-600">0xabcd...efgh</div>
                  <div className="text-xs text-gray-500">5 minutes ago</div>
                </div>
                <Badge className="bg-orange-100 text-orange-800">High</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div>
                  <div className="font-medium text-yellow-800">Suspicious Token</div>
                  <div className="text-sm text-yellow-600">0x9876...4321</div>
                  <div className="text-xs text-gray-500">8 minutes ago</div>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Network Statistics */}
      <Card className="bg-white shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
            U2U Network Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1,234,567</div>
              <div className="text-sm text-gray-500">Total Transactions</div>
              <div className="text-xs text-green-500">↑ 15% today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$45.2M</div>
              <div className="text-sm text-gray-500">Value Protected</div>
              <div className="text-xs text-green-500">↑ 22% today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">5,678</div>
              <div className="text-sm text-gray-500">Active Wallets</div>
              <div className="text-xs text-blue-500">↑ 8% today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">2.3s</div>
              <div className="text-sm text-gray-500">Avg Block Time</div>
              <div className="text-xs text-green-500">Optimal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Live Activity Feed */}
        <div className="lg:col-span-2">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-blue-500" />
                Live Activity Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <div className="flex-1">
                    <div className="font-medium text-red-800">Critical Alert: Flash Loan Attack</div>
                    <div className="text-sm text-red-600">TX: 0x1234...5678 • 30 seconds ago</div>
                  </div>
                  <Badge className="bg-red-100 text-red-800">CRITICAL</Badge>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div className="flex-1">
                    <div className="font-medium text-green-800">Threat Blocked: Malicious Contract</div>
                    <div className="text-sm text-green-600">Contract: 0xabcd...efgh • 2 minutes ago</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">BLOCKED</Badge>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <div className="flex-1">
                    <div className="font-medium text-blue-800">High Volume Transaction</div>
                    <div className="text-sm text-blue-600">Value: $2.5M U2U • 5 minutes ago</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">MONITORED</Badge>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <Eye className="w-5 h-5 text-yellow-500" />
                  <div className="flex-1">
                    <div className="font-medium text-yellow-800">Suspicious Pattern Detected</div>
                    <div className="text-sm text-yellow-600">Wallet: 0x9876...4321 • 8 minutes ago</div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">WATCHING</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100 justify-start">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View All Alerts
              </Button>
              <Button variant="secondary" className="w-full bg-white text-purple-600 hover:bg-gray-100 justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics Dashboard
              </Button>
              <Button variant="secondary" className="w-full bg-white text-green-600 hover:bg-gray-100 justify-start">
                <Network className="w-4 h-4 mr-2" />
                Network Monitor
              </Button>
              <Button variant="secondary" className="w-full bg-white text-orange-600 hover:bg-gray-100 justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Security Reports
              </Button>

              <div className="pt-4 mt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">94.2%</div>
                  <div className="text-sm text-white/80">System Accuracy</div>
                  <Progress value={94.2} className="w-full h-2 mt-2 bg-white/20" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
