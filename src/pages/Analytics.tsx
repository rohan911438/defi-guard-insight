import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveFeed from "@/components/dashboard/LiveFeed";
import ThreatIntelligence from "@/components/dashboard/ThreatIntelligence";
import WalletAnalytics from "@/components/dashboard/WalletAnalytics";
import { 
  BarChart3,
  TrendingUp,
  Activity,
  Shield,
  Users,
  DollarSign,
  AlertTriangle,
  Eye
} from "lucide-react";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");

  const analyticsStats = [
    {
      title: "Total Alerts",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "Threats Blocked", 
      value: "856",
      change: "+8%",
      trend: "up",
      icon: Shield,
      color: "text-green-600",
    },
    {
      title: "Wallets Monitored",
      value: "15,847",
      change: "+5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Value Protected",
      value: "$45.2M",
      change: "+22%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of threats, wallets, and network security
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Threat Intel</TabsTrigger>
          <TabsTrigger value="wallets">Wallet Analytics</TabsTrigger>
          <TabsTrigger value="live">Live Feed</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Threats Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                  Recent Threat Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-red-800">Flash Loan Attacks</div>
                      <div className="text-sm text-red-600">Last 24 hours</div>
                    </div>
                    <div className="text-2xl font-bold text-red-600">12</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="font-medium text-orange-800">Sandwich Attacks</div>
                      <div className="text-sm text-orange-600">Last 24 hours</div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">8</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium text-yellow-800">Suspicious Patterns</div>
                      <div className="text-sm text-yellow-600">Last 24 hours</div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">24</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Network Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-green-500" />
                  Network Health Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Detection Accuracy</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">94.2%</Badge>
                      <span className="text-sm text-gray-500">Excellent</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">System Uptime</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">99.9%</Badge>
                      <span className="text-sm text-gray-500">30 days</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Response Time</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">1.2s</Badge>
                      <span className="text-sm text-gray-500">Average</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">False Positives</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">2.1%</Badge>
                      <span className="text-sm text-gray-500">Low</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Charts Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
                Performance Analytics (Last 30 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">15,847</div>
                  <div className="text-sm text-blue-800">Transactions Analyzed</div>
                  <div className="text-xs text-green-500 mt-1">↑ 18% vs last month</div>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">856</div>
                  <div className="text-sm text-green-800">Threats Prevented</div>
                  <div className="text-xs text-green-500 mt-1">↑ 12% vs last month</div>
                </div>
                
                <div className="p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">$45.2M</div>
                  <div className="text-sm text-purple-800">Value Protected</div>
                  <div className="text-xs text-green-500 mt-1">↑ 25% vs last month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="threats">
          <ThreatIntelligence />
        </TabsContent>

        <TabsContent value="wallets">
          <WalletAnalytics />
        </TabsContent>

        <TabsContent value="live">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LiveFeed />
            
            {/* Live Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5" />
                  Real-time Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                    <div className="text-2xl font-bold">Active Monitoring</div>
                    <div className="text-sm opacity-90">All systems operational</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">2,341</div>
                      <div className="text-xs text-gray-600">Active Wallets</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-green-600">98.5%</div>
                      <div className="text-xs text-gray-600">Network Health</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Alerts Today</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Threats Blocked</span>
                      <span className="font-semibold text-green-600">156</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Detection Rate</span>
                      <span className="font-semibold text-blue-600">94.2%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}