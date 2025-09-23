import { useState, useEffect } from "react";
import { GitBranch, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Node {
  id: string;
  label: string;
  type: "wallet" | "contract" | "suspicious";
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
  amount: string;
  token: string;
}

const mockNodes: Node[] = [
  { id: "1", label: "0x1234...5678", type: "wallet", x: 100, y: 150 },
  { id: "2", label: "0xabcd...ef12", type: "suspicious", x: 300, y: 100 },
  { id: "3", label: "UniswapV3", type: "contract", x: 500, y: 150 },
  { id: "4", label: "0x9876...5432", type: "wallet", x: 300, y: 200 },
  { id: "5", label: "AAVE Pool", type: "contract", x: 100, y: 250 },
];

const mockEdges: Edge[] = [
  { from: "1", to: "2", amount: "1000", token: "U2U" },
  { from: "2", to: "3", amount: "1000", token: "U2U" },
  { from: "3", to: "2", amount: "950", token: "USDT" },
  { from: "2", to: "4", amount: "950", token: "USDT" },
  { from: "5", to: "1", amount: "10000", token: "U2U" },
];

export default function TransactionGraph() {
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const getNodeColor = (type: string) => {
    switch (type) {
      case "suspicious": return "fill-destructive stroke-destructive";
      case "contract": return "fill-primary stroke-primary";
      case "wallet": return "fill-muted stroke-border";
      default: return "fill-muted stroke-border";
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case "suspicious": return "⚠️";
      case "contract": return "📄";
      case "wallet": return "👤";
      default: return "?";
    }
  };

  if (loading) {
    return (
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Transaction Graph</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-muted/50 rounded-xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              <p className="text-muted-foreground">Loading transaction graph...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Transaction Graph</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setZoom(Math.min(2, zoom + 0.1))}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setZoom(1)}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex items-center space-x-6 p-3 bg-muted/50 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-destructive"></div>
              <span className="text-sm">Suspicious Wallet</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <span className="text-sm">Contract</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-muted border-2 border-border"></div>
              <span className="text-sm">Regular Wallet</span>
            </div>
          </div>

          {/* Graph Visualization */}
          <div className="relative h-96 bg-card border border-border rounded-xl overflow-hidden">
            <svg 
              className="w-full h-full"
              style={{ transform: `scale(${zoom})` }}
              viewBox="0 0 600 400"
            >
              {/* Edges */}
              {mockEdges.map((edge, index) => {
                const fromNode = mockNodes.find(n => n.id === edge.from);
                const toNode = mockNodes.find(n => n.id === edge.to);
                
                if (!fromNode || !toNode) return null;
                
                return (
                  <g key={index}>
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <text
                      x={(fromNode.x + toNode.x) / 2}
                      y={(fromNode.y + toNode.y) / 2 - 5}
                      textAnchor="middle"
                      className="text-xs fill-muted-foreground"
                      fontSize="10"
                    >
                      {edge.amount} {edge.token}
                    </text>
                  </g>
                );
              })}
              
              {/* Nodes */}
              {mockNodes.map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="20"
                    className={getNodeColor(node.type)}
                    strokeWidth="2"
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    className="text-xs font-medium fill-current"
                    fontSize="12"
                  >
                    {getNodeIcon(node.type)}
                  </text>
                  <text
                    x={node.x}
                    y={node.y + 35}
                    textAnchor="middle"
                    className="text-xs fill-muted-foreground"
                    fontSize="10"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
              
              {/* Arrow marker definition */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="hsl(var(--border))"
                  />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Transaction Flow Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-accent/50 rounded-xl">
              <div className="text-sm font-medium">Total Transactions</div>
              <div className="text-2xl font-bold text-primary">5</div>
            </div>
            <div className="p-4 bg-warning/10 rounded-xl">
              <div className="text-sm font-medium">Suspicious Paths</div>
              <div className="text-2xl font-bold text-warning">2</div>
            </div>
            <div className="p-4 bg-destructive/10 rounded-xl">
              <div className="text-sm font-medium">Risk Level</div>
              <Badge className="bg-destructive text-destructive-foreground">High</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}