import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface GraphNode {
  id: string;
  label: string;
  type: "wallet" | "contract" | "exchange";
  risk: "low" | "medium" | "high";
  x?: number;
  y?: number;
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
  type: "normal" | "suspicious";
}

interface TransactionGraphProps {
  selectedAlert?: any;
}

const mockNodes: GraphNode[] = [
  { id: "wallet1", label: "Wallet A", type: "wallet", risk: "low" },
  { id: "contract1", label: "DEX Contract", type: "contract", risk: "medium" },
  { id: "wallet2", label: "Wallet B", type: "wallet", risk: "high" },
];

const mockLinks: GraphLink[] = [
  { source: "wallet1", target: "contract1", value: 1000, type: "normal" },
  { source: "contract1", target: "wallet2", value: 950, type: "suspicious" },
];

export default function TransactionGraph({ selectedAlert }: TransactionGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const getNodeColor = (node: GraphNode) => {
    if (node.risk === "high") return "#ef4444";
    if (node.risk === "medium") return "#f97316";
    return "#22c55e";
  };

  const getLinkColor = (link: GraphLink) => {
    return link.type === "suspicious" ? "#ef4444" : "#6b7280";
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Network className="w-5 h-5 mr-2" />
            Transaction Graph
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-96 bg-background border rounded">
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            className="absolute inset-0"
          >
            {mockLinks.map((link, i) => (
              <line
                key={i}
                x1={100 + i * 150}
                y1={150}
                x2={250 + i * 150}
                y2={150}
                stroke={getLinkColor(link)}
                strokeWidth="2"
              />
            ))}
            {mockNodes.map((node, i) => (
              <g key={node.id}>
                <circle
                  cx={100 + i * 150}
                  cy={150}
                  r="20"
                  fill={getNodeColor(node)}
                />
                <text
                  x={100 + i * 150}
                  y={180}
                  textAnchor="middle"
                  fontSize="12"
                  fill="currentColor"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">Low Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm">Medium Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">High Risk</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}