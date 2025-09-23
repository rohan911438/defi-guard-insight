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
  RefreshCw,
  Server,
  Globe,
  Lock,
  Cpu,
  Database,
  Wifi,
  CheckCircle,
  XCircle,
  ArrowUp,
  ArrowDown,
  Settings,
  Bell,
  Filter,
  Search,
  Download,
  Info,
  Star,
  Layers,
  Target,
  Radar,
  Timer,
  Gauge
} from "lucide-react";

export default function Dashboard() {
  const [alerts, setAlerts] = useState(24);
  const [threatsBlocked, setThreatsBlocked] = useState(156);
  const [networkActivity, setNetworkActivity] = useState(98.5);
  const [detectionRate, setDetectionRate] = useState(94.2);
  const [systemUptime, setSystemUptime] = useState(99.8);
  const [totalTransactions, setTotalTransactions] = useState(1234567);
  const [riskScore, setRiskScore] = useState(2.3);
  const [activeWallets, setActiveWallets] = useState(5678);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Mock real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prev => prev + Math.floor(Math.random() * 3));
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5));
      setNetworkActivity(prev => Math.min(100, prev + (Math.random() - 0.5) * 2));
      setDetectionRate(prev => Math.min(100, prev + (Math.random() - 0.5) * 1));
      setSystemUptime(prev => Math.min(100, Math.max(95, prev + (Math.random() - 0.5) * 0.1)));
      setTotalTransactions(prev => prev + Math.floor(Math.random() * 50));
      setRiskScore(prev => Math.max(1, Math.min(10, prev + (Math.random() - 0.5) * 0.2)));
      setActiveWallets(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 5000);
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
      {/* Enhanced Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  GuardianAI Defense Center
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Next-Generation DeFi Security • Powered by Advanced AI • U2U Network
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-gray-500">
                    {currentTime.toLocaleTimeString()} UTC
                  </span>
                  <Badge variant="outline" className="text-xs">
                    <Timer className="w-3 h-3 mr-1" />
                    Uptime: {systemUptime.toFixed(1)}%
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-3">
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                All Systems Operational
              </Badge>
              <Button variant="outline" size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                <RefreshCw className="w-4 h-4" />
                Refresh Data
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Powered By Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative">
            <div className="flex items-center justify-center space-x-6">
              <span className="text-gray-600 font-semibold text-lg">Powered by Advanced Technology Stack</span>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-4">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-blue-700 block">U2U Network</span>
                  <span className="text-xs text-gray-500">Blockchain Layer</span>
                </div>
              </div>
              
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-purple-700 block">GuardianAI</span>
                  <span className="text-xs text-gray-500">ML Engine</span>
                </div>
              </div>
              
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Radar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-green-700 block">Real-time Monitor</span>
                  <span className="text-xs text-gray-500">24/7 Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Critical Alert Banner */}
      <div className="mb-6">
        <Card className="border-red-200 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
                  <AlertTriangle className="relative h-8 w-8 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <Badge className="bg-red-100 text-red-800 font-bold px-3 py-1">🚨 CRITICAL ALERT</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      2 min ago
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg text-red-800">Flash Loan Attack Vector Detected</h3>
                  <p className="text-red-600 text-sm">Transaction: 0x1234...5678 • Estimated Loss: $2.3M • Risk Level: EXTREME</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs text-red-500">Confidence: 98.7%</span>
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    <span className="text-xs text-red-500">AI Certainty: HIGH</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Button variant="destructive" size="sm" className="shadow-lg hover:shadow-xl">
                  <Shield className="w-4 h-4 mr-2" />
                  Take Action
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Active Threats</p>
                  <Badge variant="destructive" className="text-xs px-2 py-0.5">LIVE</Badge>
                </div>
                <p className="text-4xl font-black text-red-600 mb-1">{alerts}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-red-500 text-sm font-medium">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    12% vs yesterday
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Critical: 3</span>
                <span className="text-gray-500">High: 8</span>
                <span className="text-gray-500">Medium: 13</span>
              </div>
              <Progress value={(alerts / 50) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Threats Blocked</p>
                  <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0.5">SUCCESS</Badge>
                </div>
                <p className="text-4xl font-black text-green-600 mb-1">{threatsBlocked}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-green-500 text-sm font-medium">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    8% vs yesterday
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Auto-blocked: 142</span>
                <span>Manual: 14</span>
              </div>
              <Progress value={(threatsBlocked / 200) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Network Health</p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5">OPTIMAL</Badge>
                </div>
                <p className="text-4xl font-black text-blue-600 mb-1">{networkActivity.toFixed(1)}%</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-blue-500 text-sm font-medium">
                    <Activity className="w-4 h-4 mr-1" />
                    All systems operational
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Gauge className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Latency: 2.3ms</span>
                <span>TPS: 2,456</span>
              </div>
              <Progress value={networkActivity} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600"></div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">AI Accuracy</p>
                  <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5">AI</Badge>
                </div>
                <p className="text-4xl font-black text-purple-600 mb-1">{detectionRate.toFixed(1)}%</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-purple-500 text-sm font-medium">
                    <Brain className="w-4 h-4 mr-1" />
                    Model v2.4.1
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Precision: 96.8%</span>
                <span>Recall: 91.5%</span>
              </div>
              <Progress value={detectionRate} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status Overview */}
      <div className="mb-8">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl font-bold">
              <Server className="mr-3 h-6 w-6 text-blue-500" />
              System Status Overview
              <Badge className="ml-4 bg-green-100 text-green-800">All Systems Operational</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700">2.8ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
                <Progress value={85} className="w-full h-2 mt-2" />
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
                <Progress value={99.9} className="w-full h-2 mt-2" />
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Wifi className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700">847 MB/s</div>
                <div className="text-sm text-gray-600">Throughput</div>
                <Progress value={92} className="w-full h-2 mt-2" />
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700">15</div>
                <div className="text-sm text-gray-600">Global Nodes</div>
                <Progress value={100} className="w-full h-2 mt-2" />
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                <Lock className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-pink-700">256-bit</div>
                <div className="text-sm text-gray-600">Security</div>
                <Progress value={100} className="w-full h-2 mt-2" />
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                <Layers className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-indigo-700">7</div>
                <div className="text-sm text-gray-600">Active Services</div>
                <Progress value={100} className="w-full h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced AI Detectors Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-bold">
              <Brain className="mr-3 h-6 w-6 text-purple-500" />
              AI Detection Engines
              <Badge className="ml-auto bg-purple-100 text-purple-800">4 Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="group p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-800">Deep Learning Engine</h3>
                      <p className="text-sm text-purple-600">Neural Network Analysis</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">ACTIVE</Badge>
                    <div className="text-sm font-semibold text-purple-700">Accuracy: 96.8%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={96.8} className="w-full h-3" />
                  <div className="flex justify-between text-xs text-purple-600">
                    <span>Processed: 45.2K transactions</span>
                    <span>Last update: 30s ago</span>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800">Heuristic Analyzer</h3>
                      <p className="text-sm text-blue-600">Rule-Based Detection</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">ACTIVE</Badge>
                    <div className="text-sm font-semibold text-blue-700">Accuracy: 89.3%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={89.3} className="w-full h-3" />
                  <div className="flex justify-between text-xs text-blue-600">
                    <span>Rules: 1,247 active</span>
                    <span>Last update: 15s ago</span>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-800">Anomaly Detector</h3>
                      <p className="text-sm text-yellow-600">Pattern Recognition AI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">ACTIVE</Badge>
                    <div className="text-sm font-semibold text-yellow-700">Accuracy: 93.1%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={93.1} className="w-full h-3" />
                  <div className="flex justify-between text-xs text-yellow-600">
                    <span>Patterns: 2,845 learned</span>
                    <span>Last update: 45s ago</span>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                      <Radar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800">Behavioral Monitor</h3>
                      <p className="text-sm text-green-600">Real-time Behavior Analysis</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">ACTIVE</Badge>
                    <div className="text-sm font-semibold text-green-700">Accuracy: 91.7%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={91.7} className="w-full h-3" />
                  <div className="flex justify-between text-xs text-green-600">
                    <span>Monitoring: 15.7K wallets</span>
                    <span>Last update: 10s ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Recent Threats */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center text-xl font-bold">
                <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
                Threat Intelligence Feed
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge className="bg-red-100 text-red-800">3 Critical</Badge>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="group p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-500 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-red-800">Flash Loan Attack Vector</div>
                      <div className="text-sm text-red-600">Transaction: 0x1234...5678</div>
                      <div className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        2 minutes ago • Confidence: 98.7%
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-red-100 text-red-800 font-bold">CRITICAL</Badge>
                    <div className="text-sm font-semibold text-red-700">$2.3M at risk</div>
                  </div>
                </div>
                <div className="bg-red-200/50 rounded-lg p-3">
                  <div className="text-sm text-red-700">
                    <strong>Details:</strong> Suspicious borrowing pattern detected with potential manipulation vector targeting liquidity pools.
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-orange-800">MEV Sandwich Attack</div>
                      <div className="text-sm text-orange-600">Bot: 0xabcd...efgh</div>
                      <div className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        5 minutes ago • Confidence: 94.2%
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-orange-100 text-orange-800 font-bold">HIGH</Badge>
                    <div className="text-sm font-semibold text-orange-700">$145K affected</div>
                  </div>
                </div>
                <div className="bg-orange-200/50 rounded-lg p-3">
                  <div className="text-sm text-orange-700">
                    <strong>Details:</strong> Front-running detected with coordinated buy-sell pattern affecting multiple users.
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-500 rounded-lg">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-yellow-800">Suspicious Token Contract</div>
                      <div className="text-sm text-yellow-600">Contract: 0x9876...4321</div>
                      <div className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        8 minutes ago • Confidence: 87.5%
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-yellow-100 text-yellow-800 font-bold">MEDIUM</Badge>
                    <div className="text-sm font-semibold text-yellow-700">Monitoring</div>
                  </div>
                </div>
                <div className="bg-yellow-200/50 rounded-lg p-3">
                  <div className="text-sm text-yellow-700">
                    <strong>Details:</strong> Unusual minting patterns and ownership concentration detected in new token contract.
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-blue-800">Coordinated Wash Trading</div>
                      <div className="text-sm text-blue-600">Network: 15 wallets</div>
                      <div className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        12 minutes ago • Confidence: 91.8%
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-blue-100 text-blue-800 font-bold">MEDIUM</Badge>
                    <div className="text-sm font-semibold text-blue-700">Analyzing</div>
                  </div>
                </div>
                <div className="bg-blue-200/50 rounded-lg p-3">
                  <div className="text-sm text-blue-700">
                    <strong>Details:</strong> Circular trading pattern identified among connected wallets to artificially inflate volume.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing latest 4 of 24 total threats
                </div>
                <Button variant="outline" size="sm">
                  View All Threats
                  <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Network Statistics */}
      <Card className="bg-white shadow-xl mb-8 border-0">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-2xl font-bold">
            <div className="flex items-center">
              <BarChart3 className="mr-3 h-6 w-6 text-blue-500" />
              U2U Network Analytics
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-100 text-blue-800">Real-time</Badge>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 group-hover:from-blue-500/10 group-hover:to-blue-600/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-blue-700 mb-2">{totalTransactions.toLocaleString()}</div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Total Transactions</div>
                <div className="flex items-center justify-center space-x-2">
                  <ArrowUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">↑ 15.2% today</span>
                </div>
                <Progress value={78} className="w-full h-2 mt-3" />
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 group-hover:from-green-500/10 group-hover:to-green-600/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-green-700 mb-2">$45.2M</div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Value Protected</div>
                <div className="flex items-center justify-center space-x-2">
                  <ArrowUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">↑ 22.7% today</span>
                </div>
                <Progress value={85} className="w-full h-2 mt-3" />
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 group-hover:from-purple-500/10 group-hover:to-purple-600/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-purple-700 mb-2">{activeWallets.toLocaleString()}</div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Active Wallets</div>
                <div className="flex items-center justify-center space-x-2">
                  <ArrowUp className="w-3 h-3 text-purple-500" />
                  <span className="text-xs text-purple-500 font-medium">↑ 8.4% today</span>
                </div>
                <Progress value={92} className="w-full h-2 mt-3" />
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 group-hover:from-orange-500/10 group-hover:to-orange-600/20 transition-all"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-orange-700 mb-2">2.3s</div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Avg Block Time</div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">Optimal</span>
                </div>
                <Progress value={100} className="w-full h-2 mt-3" />
              </div>
            </div>
          </div>
          
          {/* Additional Network Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Network className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-indigo-800">Network Health</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Excellent</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">TPS Current</span>
                  <span className="font-semibold text-indigo-700">2,456</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">TPS Peak</span>
                  <span className="font-semibold text-indigo-700">8,924</span>
                </div>
                <Progress value={27} className="w-full h-2" />
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-teal-800">Global Reach</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800">15 Regions</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Nodes Active</span>
                  <span className="font-semibold text-teal-700">847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Validators</span>
                  <span className="font-semibold text-teal-700">156</span>
                </div>
                <Progress value={94} className="w-full h-2" />
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span className="font-semibold text-pink-800">Risk Assessment</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Risk Score</span>
                  <span className="font-semibold text-pink-700">{riskScore.toFixed(1)}/10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Threat Level</span>
                  <span className="font-semibold text-green-600">Minimal</span>
                </div>
                <Progress value={23} className="w-full h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Live Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Enhanced Live Activity Feed */}
        <div className="lg:col-span-2">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-xl font-bold">
                  <Activity className="mr-3 h-6 w-6 text-blue-500" />
                  Live Security Feed
                  <Badge className="ml-3 bg-blue-100 text-blue-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </Badge>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 p-2 bg-red-500 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-red-800">Flash Loan Attack Detected</div>
                      <div className="text-xs text-gray-500">30s ago</div>
                    </div>
                    <div className="text-sm text-red-700 mb-2">
                      High-risk transaction pattern identified with potential $2.3M exposure
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full font-medium">
                        TX: 0x1234...5678
                      </span>
                      <Badge className="bg-red-100 text-red-800 text-xs">CRITICAL</Badge>
                      <span className="text-xs text-gray-500">AI Confidence: 98.7%</span>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 p-2 bg-green-500 rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-green-800">Threat Successfully Blocked</div>
                      <div className="text-xs text-gray-500">2m ago</div>
                    </div>
                    <div className="text-sm text-green-700 mb-2">
                      Malicious contract interaction prevented, protecting user funds
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">
                        Contract: 0xabcd...efgh
                      </span>
                      <Badge className="bg-green-100 text-green-800 text-xs">BLOCKED</Badge>
                      <span className="text-xs text-gray-500">Saved: $145K</span>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 p-2 bg-blue-500 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-blue-800">Large Volume Transaction</div>
                      <div className="text-xs text-gray-500">5m ago</div>
                    </div>
                    <div className="text-sm text-blue-700 mb-2">
                      Significant value transfer detected, monitoring for anomalies
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">
                        Value: $2.5M U2U
                      </span>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">MONITORING</Badge>
                      <span className="text-xs text-gray-500">Normal Pattern</span>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 p-2 bg-yellow-500 rounded-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-yellow-800">Anomaly Pattern Alert</div>
                      <div className="text-xs text-gray-500">8m ago</div>
                    </div>
                    <div className="text-sm text-yellow-700 mb-2">
                      Unusual trading behavior detected, analyzing for potential threats
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full font-medium">
                        Wallet: 0x9876...4321
                      </span>
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">INVESTIGATING</Badge>
                      <span className="text-xs text-gray-500">Risk: Medium</span>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 p-2 bg-purple-500 rounded-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-purple-800">AI Model Update</div>
                      <div className="text-xs text-gray-500">15m ago</div>
                    </div>
                    <div className="text-sm text-purple-700 mb-2">
                      Detection algorithms updated with latest threat patterns
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-medium">
                        Model v2.4.1
                      </span>
                      <Badge className="bg-purple-100 text-purple-800 text-xs">UPGRADED</Badge>
                      <span className="text-xs text-gray-500">Accuracy +2.1%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Real-time feed • Updates every 5 seconds
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Full Feed
                    <ArrowUp className="w-3 h-3 ml-2 rotate-45" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Quick Actions */}
        <Card className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white shadow-2xl border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-pink-600/90"></div>
          <div className="absolute inset-0 bg-black/5"></div>
          <CardHeader className="relative">
            <CardTitle className="text-white text-xl font-bold">Command Center</CardTitle>
            <p className="text-white/80 text-sm">Quick access to critical functions</p>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <div className="space-y-3">
              <Button variant="secondary" className="w-full bg-white/95 text-blue-700 hover:bg-white justify-start font-semibold shadow-lg hover:shadow-xl transition-all">
                <AlertTriangle className="w-5 h-5 mr-3" />
                View All Alerts
                <Badge className="ml-auto bg-red-100 text-red-700 text-xs">{alerts}</Badge>
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/95 text-purple-700 hover:bg-white justify-start font-semibold shadow-lg hover:shadow-xl transition-all">
                <BarChart3 className="w-5 h-5 mr-3" />
                Analytics Dashboard
                <Badge className="ml-auto bg-purple-100 text-purple-700 text-xs">NEW</Badge>
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/95 text-green-700 hover:bg-white justify-start font-semibold shadow-lg hover:shadow-xl transition-all">
                <Network className="w-5 h-5 mr-3" />
                Network Monitor
                <Badge className="ml-auto bg-green-100 text-green-700 text-xs">LIVE</Badge>
              </Button>
              
              <Button variant="secondary" className="w-full bg-white/95 text-orange-700 hover:bg-white justify-start font-semibold shadow-lg hover:shadow-xl transition-all">
                <Shield className="w-5 h-5 mr-3" />
                Security Reports
                <Badge className="ml-auto bg-orange-100 text-orange-700 text-xs">24</Badge>
              </Button>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 space-y-4">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">{detectionRate.toFixed(1)}%</div>
                <div className="text-sm text-white/90 mb-3">System Accuracy</div>
                <Progress value={detectionRate} className="w-full h-3 bg-white/20" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/10 rounded-xl">
                  <div className="text-lg font-bold text-white">{systemUptime.toFixed(1)}%</div>
                  <div className="text-xs text-white/80">Uptime</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl">
                  <div className="text-lg font-bold text-white">2.8ms</div>
                  <div className="text-xs text-white/80">Latency</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 justify-center">
                <Settings className="w-4 h-4 mr-2" />
                Advanced Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
