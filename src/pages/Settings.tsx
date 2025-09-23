import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Settings,
  Shield,
  Bell,
  Database,
  Network,
  Brain,
  Save,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Info,
  Zap
} from "lucide-react";

interface DetectorSettings {
  enabled: boolean;
  sensitivity: number;
  threshold: number;
}

interface ConfigState {
  detectors: {
    flashLoan: DetectorSettings;
    sandwich: DetectorSettings;
    anomaly: DetectorSettings;
    mlModel: DetectorSettings;
  };
  alerts: {
    email: boolean;
    webhook: boolean;
    dashboard: boolean;
    criticalOnly: boolean;
    webhookUrl: string;
  };
  network: {
    rpcUrl: string;
    blockConfirmations: number;
    maxGasPrice: number;
    mempoolMonitoring: boolean;
  };
  ai: {
    modelVersion: string;
    confidenceThreshold: number;
    retrainingEnabled: boolean;
    falsePositiveWeight: number;
  };
}

const defaultConfig: ConfigState = {
  detectors: {
    flashLoan: { enabled: true, sensitivity: 85, threshold: 90 },
    sandwich: { enabled: true, sensitivity: 75, threshold: 80 },
    anomaly: { enabled: true, sensitivity: 60, threshold: 70 },
    mlModel: { enabled: true, sensitivity: 90, threshold: 85 },
  },
  alerts: {
    email: true,
    webhook: false,
    dashboard: true,
    criticalOnly: false,
    webhookUrl: "",
  },
  network: {
    rpcUrl: "https://rpc-nebulas-testnet.uniultra.xyz",
    blockConfirmations: 3,
    maxGasPrice: 100,
    mempoolMonitoring: true,
  },
  ai: {
    modelVersion: "v2.1.0",
    confidenceThreshold: 85,
    retrainingEnabled: true,
    falsePositiveWeight: 0.3,
  },
};

export default function Settings() {
  const [config, setConfig] = useState<ConfigState>(defaultConfig);
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);

  const updateConfig = (path: string[], value: any) => {
    setConfig(prev => {
      const newConfig = { ...prev };
      let current = newConfig as any;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newConfig;
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setHasChanges(false);
    // Show success message
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setHasChanges(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure GuardianAI detection parameters and system preferences
        </p>
      </div>

      {/* Save Banner */}
      {hasChanges && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-blue-500" />
                <span className="text-blue-800">You have unsaved changes</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleReset} size="sm">
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button onClick={handleSave} disabled={saving} size="sm">
                  <Save className="w-4 h-4 mr-1" />
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="detectors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="detectors">Detectors</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="ai">AI Models</TabsTrigger>
        </TabsList>

        {/* Detector Settings */}
        <TabsContent value="detectors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Detection Modules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flash Loan Detector */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Flash Loan Detector</h3>
                    <p className="text-sm text-gray-500">Detects flash loan attack patterns</p>
                  </div>
                  <Switch
                    checked={config.detectors.flashLoan.enabled}
                    onCheckedChange={(checked) => updateConfig(["detectors", "flashLoan", "enabled"], checked)}
                  />
                </div>
                
                {config.detectors.flashLoan.enabled && (
                  <div className="space-y-4">
                    <div>
                      <Label>Sensitivity: {config.detectors.flashLoan.sensitivity}%</Label>
                      <Slider
                        value={[config.detectors.flashLoan.sensitivity]}
                        onValueChange={([value]) => updateConfig(["detectors", "flashLoan", "sensitivity"], value)}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Alert Threshold: {config.detectors.flashLoan.threshold}%</Label>
                      <Slider
                        value={[config.detectors.flashLoan.threshold]}
                        onValueChange={([value]) => updateConfig(["detectors", "flashLoan", "threshold"], value)}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Sandwich Attack Detector */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Sandwich Attack Detector</h3>
                    <p className="text-sm text-gray-500">Identifies MEV sandwich attacks</p>
                  </div>
                  <Switch
                    checked={config.detectors.sandwich.enabled}
                    onCheckedChange={(checked) => updateConfig(["detectors", "sandwich", "enabled"], checked)}
                  />
                </div>
                
                {config.detectors.sandwich.enabled && (
                  <div className="space-y-4">
                    <div>
                      <Label>Sensitivity: {config.detectors.sandwich.sensitivity}%</Label>
                      <Slider
                        value={[config.detectors.sandwich.sensitivity]}
                        onValueChange={([value]) => updateConfig(["detectors", "sandwich", "sensitivity"], value)}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Alert Threshold: {config.detectors.sandwich.threshold}%</Label>
                      <Slider
                        value={[config.detectors.sandwich.threshold]}
                        onValueChange={([value]) => updateConfig(["detectors", "sandwich", "threshold"], value)}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Anomaly Detector */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Anomaly Detector</h3>
                    <p className="text-sm text-gray-500">Identifies unusual transaction patterns</p>
                  </div>
                  <Switch
                    checked={config.detectors.anomaly.enabled}
                    onCheckedChange={(checked) => updateConfig(["detectors", "anomaly", "enabled"], checked)}
                  />
                </div>
                
                {config.detectors.anomaly.enabled && (
                  <div className="space-y-4">
                    <div>
                      <Label>Sensitivity: {config.detectors.anomaly.sensitivity}%</Label>
                      <Slider
                        value={[config.detectors.anomaly.sensitivity]}
                        onValueChange={([value]) => updateConfig(["detectors", "anomaly", "sensitivity"], value)}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alert Settings */}
        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Alert Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive alerts via email</p>
                    </div>
                    <Switch
                      checked={config.alerts.email}
                      onCheckedChange={(checked) => updateConfig(["alerts", "email"], checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Dashboard Alerts</Label>
                      <p className="text-sm text-gray-500">Show alerts in dashboard</p>
                    </div>
                    <Switch
                      checked={config.alerts.dashboard}
                      onCheckedChange={(checked) => updateConfig(["alerts", "dashboard"], checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Critical Only</Label>
                      <p className="text-sm text-gray-500">Only show critical severity alerts</p>
                    </div>
                    <Switch
                      checked={config.alerts.criticalOnly}
                      onCheckedChange={(checked) => updateConfig(["alerts", "criticalOnly"], checked)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Webhook Notifications</Label>
                      <p className="text-sm text-gray-500">Send alerts to external webhook</p>
                    </div>
                    <Switch
                      checked={config.alerts.webhook}
                      onCheckedChange={(checked) => updateConfig(["alerts", "webhook"], checked)}
                    />
                  </div>
                  
                  {config.alerts.webhook && (
                    <div>
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        value={config.alerts.webhookUrl}
                        onChange={(e) => updateConfig(["alerts", "webhookUrl"], e.target.value)}
                        placeholder="https://your-webhook-endpoint.com/alerts"
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Network Settings */}
        <TabsContent value="network" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Network className="mr-2 h-5 w-5" />
                Network Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="rpc-url">U2U RPC Endpoint</Label>
                  <Input
                    id="rpc-url"
                    value={config.network.rpcUrl}
                    onChange={(e) => updateConfig(["network", "rpcUrl"], e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">RPC endpoint for U2U network connection</p>
                </div>
                
                <div>
                  <Label>Block Confirmations: {config.network.blockConfirmations}</Label>
                  <Slider
                    value={[config.network.blockConfirmations]}
                    onValueChange={([value]) => updateConfig(["network", "blockConfirmations"], value)}
                    min={1}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Number of confirmations required</p>
                </div>
                
                <div>
                  <Label>Max Gas Price: {config.network.maxGasPrice} gwei</Label>
                  <Slider
                    value={[config.network.maxGasPrice]}
                    onValueChange={([value]) => updateConfig(["network", "maxGasPrice"], value)}
                    min={10}
                    max={500}
                    step={10}
                    className="mt-2"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Mempool Monitoring</Label>
                    <p className="text-sm text-gray-500">Monitor pending transactions</p>
                  </div>
                  <Switch
                    checked={config.network.mempoolMonitoring}
                    onCheckedChange={(checked) => updateConfig(["network", "mempoolMonitoring"], checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Model Settings */}
        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                AI Model Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Model Version</Label>
                  <div className="mt-2">
                    <Badge className="bg-green-100 text-green-800">
                      {config.ai.modelVersion} (Latest)
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <Label>Confidence Threshold: {config.ai.confidenceThreshold}%</Label>
                  <Slider
                    value={[config.ai.confidenceThreshold]}
                    onValueChange={([value]) => updateConfig(["ai", "confidenceThreshold"], value)}
                    min={50}
                    max={99}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum confidence level for ML predictions</p>
                </div>
                
                <div>
                  <Label>False Positive Weight: {config.ai.falsePositiveWeight}</Label>
                  <Slider
                    value={[config.ai.falsePositiveWeight]}
                    onValueChange={([value]) => updateConfig(["ai", "falsePositiveWeight"], value)}
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Weight given to false positive reduction</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Automatic Retraining</Label>
                    <p className="text-sm text-gray-500">Enable continuous model improvement</p>
                  </div>
                  <Switch
                    checked={config.ai.retrainingEnabled}
                    onCheckedChange={(checked) => updateConfig(["ai", "retrainingEnabled"], checked)}
                  />
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Model Performance</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Current accuracy: 94.2% • Last updated: 2 hours ago • Training data: 1.2M samples
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}