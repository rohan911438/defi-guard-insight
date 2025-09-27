import { useState } from 'react';
import { useDetection } from '@/hooks/useDetection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RefreshCcw, Activity, Brain, PlayCircle } from 'lucide-react';

export default function MLConsole() {
  const { models, summary, runDetection, lastResult, loading, toggleModel, retrainModel, submitFeedback, feedbackSubmitting } = useDetection();
  const [txHash, setTxHash] = useState('0x1234567890abcdef');
  const [wallet, setWallet] = useState('0xabcDEF1234567890abcdEf1234567890ABCDef12');
  const [activeTab, setActiveTab] = useState('transaction');

  const runTx = () => runDetection({ type: 'transaction', txHash, gasUsed: 250000, timestamp: Date.now() });
  const runWallet = () => runDetection({ type: 'wallet', address: wallet, recentTxCount: 42, ageDays: 2, connections: 87 });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">ML Console</h1>
          <p className="text-muted-foreground">Model registry, inference playground & feedback loop</p>
        </div>
        <Button variant="outline" onClick={() => window.location.reload()}><RefreshCcw className="w-4 h-4 mr-2"/>Reload</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Models ({summary?.ready}/{summary?.total} ready)</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {models.map(m => (
              <div key={m.id} className="p-3 border rounded-md space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium flex items-center"><Brain className="w-4 h-4 mr-2"/>{m.name}</div>
                  <Badge variant={m.enabled ? 'default' : 'secondary'}>{m.version}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{m.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-green-600">P:{Math.round(m.performance.precision*100)} R:{Math.round(m.performance.recall*100)} FPR:{Math.round(m.performance.fpr*100)}</span>
                  <div className="flex items-center space-x-2">
                    <Switch checked={m.enabled} onCheckedChange={(v) => toggleModel(m.id, v)} />
                    <Button size="sm" variant="outline" disabled={loading} onClick={() => retrainModel(m.id)}>Retrain</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Inference Playground</CardTitle></CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="transaction">Transaction</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
                <TabsTrigger value="result">Last Result</TabsTrigger>
              </TabsList>
              <TabsContent value="transaction" className="space-y-4 mt-4">
                <div className="flex space-x-2">
                  <Input value={txHash} onChange={e => setTxHash(e.target.value)} placeholder="Tx hash" />
                  <Button disabled={loading} onClick={runTx}><PlayCircle className="w-4 h-4 mr-1"/>Detect</Button>
                </div>
              </TabsContent>
              <TabsContent value="wallet" className="space-y-4 mt-4">
                <div className="flex space-x-2">
                  <Input value={wallet} onChange={e => setWallet(e.target.value)} placeholder="Wallet address" />
                  <Button disabled={loading} onClick={runWallet}><PlayCircle className="w-4 h-4 mr-1"/>Detect</Button>
                </div>
              </TabsContent>
              <TabsContent value="result" className="space-y-4 mt-4">
                {!lastResult && <p className="text-sm text-muted-foreground">No result yet.</p>}
                {lastResult && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center"><Activity className="w-4 h-4 mr-2"/>Risk: {lastResult.aggregatedScore} ({lastResult.label})</div>
                      <Badge>Conf {Math.round(lastResult.confidence*100)}%</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {lastResult.models.map(m => (
                        <div key={m.modelId} className="border rounded p-2 text-xs space-y-1">
                          <div className="flex items-center justify-between"><span className="font-semibold">{m.modelId}</span><span>{m.riskScore.toFixed(1)}</span></div>
                          <div className="text-muted-foreground">{m.label} • conf {Math.round(m.confidence*100)}%</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Top Signals</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-xs">
                        {lastResult.topSignals.map(s => (
                          <div key={s.name} className="border rounded p-2">
                            <div className="font-medium">{s.name}</div>
                            <div className="text-muted-foreground">{s.value}</div>
                            <Badge variant="secondary" className="mt-1">{s.impact}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" disabled={feedbackSubmitting} onClick={() => submitFeedback(true)}>True Positive</Button>
                      <Button size="sm" variant="outline" disabled={feedbackSubmitting} onClick={() => submitFeedback(false)}>False Positive</Button>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
