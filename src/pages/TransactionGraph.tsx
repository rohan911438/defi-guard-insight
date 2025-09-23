import { useState } from "react";
import { GitBranch, Network, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TransactionGraph from "@/components/dashboard/TransactionGraph";

export default function TransactionGraphPage() {
  const [searchAddress, setSearchAddress] = useState("");

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Transaction Graph</h1>
        <p className="text-muted-foreground">
          Visualize transaction flows and detect suspicious patterns in the network
        </p>
      </div>

      {/* Search and Controls */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter wallet address or transaction hash..."
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Layout
              </Button>
              <Button>
                <Network className="mr-2 h-4 w-4" />
                Analyze
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Graph Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div>
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">Nodes</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <div>
                <div className="text-2xl font-bold">38</div>
                <div className="text-sm text-muted-foreground">Edges</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Suspicious</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-muted-foreground">High Risk</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Graph */}
      <TransactionGraph />

      {/* Analysis Results */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Pattern Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/20">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Flash Loan Attack Detected</span>
                <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Suspicious pattern involving rapid borrowing and repayment with arbitrage opportunity exploitation.
              </p>
            </div>
            
            <div className="p-4 bg-warning/10 rounded-xl border border-warning/20">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Unusual Transaction Frequency</span>
                <Badge className="bg-warning text-warning-foreground">Medium</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Higher than normal transaction frequency detected between connected wallets.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}