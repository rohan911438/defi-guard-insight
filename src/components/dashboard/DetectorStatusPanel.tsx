import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain } from "lucide-react";

interface DetectorStatusPanelProps {
  detectors: any[];
}

export default function DetectorStatusPanel({ detectors }: DetectorStatusPanelProps) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5" />
          AI Detector Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl bg-background">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">ML Detector</h3>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
          
          <div className="p-4 border rounded-xl bg-background">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Heuristic Detector</h3>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
          </div>
          
          <div className="p-4 border rounded-xl bg-background">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Anomaly Detector</h3>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-medium">91%</span>
              </div>
              <Progress value={91} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}