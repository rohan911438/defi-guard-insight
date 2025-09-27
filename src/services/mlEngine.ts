import { v4 as uuid } from 'uuid';
import type {
  ModelInfo,
  ModelStatus,
  DetectionRequest,
  DetectionResult,
  ModelContribution,
  RiskLabel,
  FeedbackSubmission,
  ModelStatusSummary,
  TransactionDetectionRequest,
  WalletDetectionRequest,
  FeatureVector
} from '@/types/ml';

// Lightweight in-memory simulated ML engine for front-end dev & demos
class MLEngineService {
  private models: ModelInfo[] = [];
  private feedback: FeedbackSubmission[] = [];

  constructor() {
    this.bootstrap();
  }

  private bootstrap() {
    const now = new Date().toISOString();
    this.models = [
      {
        id: 'xgboost_v1',
        name: 'XGBoost Transaction Classifier',
        version: '1.0.0',
        kind: 'classification',
        description: 'Gradient boosted tree model for transaction level fraud patterns',
        status: 'ready',
        performance: { precision: 0.93, recall: 0.89, fpr: 0.04, lastUpdated: now },
        tags: ['transaction', 'ml', 'supervised'],
        enabled: true,
      },
      {
        id: 'gnn_wallet_v1',
        name: 'Graph Wallet Risk GNN',
        version: '1.1.0',
        kind: 'graph',
        description: 'Graph neural network embedding + classifier for wallet behavioral risk',
        status: 'ready',
        performance: { precision: 0.9, recall: 0.92, fpr: 0.06, lastUpdated: now },
        tags: ['wallet', 'graph', 'embedding'],
        enabled: true,
      },
      {
        id: 'anomaly_iso_v1',
        name: 'IsoForest Anomaly Detector',
        version: '0.9.2',
        kind: 'anomaly',
        description: 'Isolation Forest for zero-day / outlier patterns',
        status: 'ready',
        performance: { precision: 0.65, recall: 0.81, fpr: 0.15, lastUpdated: now },
        tags: ['unsupervised', 'anomaly'],
        enabled: true,
      },
    ];
  }

  listModels(): ModelInfo[] {
    return this.models;
  }

  getModel(id: string): ModelInfo | undefined {
    return this.models.find(m => m.id === id);
  }

  toggleModel(id: string, enabled: boolean) {
    const m = this.getModel(id);
    if (m) m.enabled = enabled;
  }

  async retrainModel(id: string): Promise<ModelInfo> {
    const model = this.getModel(id);
    if (!model) throw new Error('Model not found');
    model.status = 'training';
    // simulate training
    await new Promise(res => setTimeout(res, 1200));
    model.status = 'ready';
    // Slight random performance drift
    model.performance = {
      ...model.performance,
      precision: this.clamp(model.performance.precision + (Math.random() - 0.5) * 0.01, 0, 1),
      recall: this.clamp(model.performance.recall + (Math.random() - 0.5) * 0.01, 0, 1),
      lastUpdated: new Date().toISOString(),
    };
    return model;
  }

  getStatusSummary(): ModelStatusSummary {
    return {
      total: this.models.length,
      ready: this.models.filter(m => m.status === 'ready').length,
      training: this.models.filter(m => m.status === 'training').length,
      disabled: this.models.filter(m => !m.enabled).length,
      lastUpdated: new Date().toISOString(),
    };
  }

  async detect(request: DetectionRequest): Promise<DetectionResult> {
    // Simulate network / inference latency
    await new Promise(res => setTimeout(res, 300 + Math.random() * 250));

    const activeModels = this.models.filter(m => m.enabled && m.status === 'ready' && (request.modelId ? m.id === request.modelId : true));
    if (activeModels.length === 0) throw new Error('No active models');

    const contributions: ModelContribution[] = activeModels.map(m => {
      const baseScore = this.deriveBaseScore(request, m.id);
      const noise = (Math.random() - 0.5) * 10; // +/-5
      const riskScore = this.clamp(baseScore + noise, 0, 100);
      const label = this.scoreToLabel(riskScore);
      return {
        modelId: m.id,
        riskScore,
        label,
        confidence: this.estimateConfidence(m, label),
        featureWeights: this.sampleFeatureWeights(request),
      };
    });

    const aggregatedScore = contributions.reduce((a, c) => a + c.riskScore, 0) / contributions.length;
    const topSignals = this.deriveSignals(request, aggregatedScore);
    return {
      id: uuid(),
      request,
      aggregatedScore: Number(aggregatedScore.toFixed(2)),
      label: this.scoreToLabel(aggregatedScore),
      confidence: Number((contributions.reduce((a, c) => a + c.confidence, 0) / contributions.length).toFixed(3)),
      createdAt: new Date().toISOString(),
      models: contributions,
      topSignals,
      meta: { modelCount: contributions.length },
    };
  }

  submitFeedback(detectionId: string, isTruePositive: boolean, comment?: string): FeedbackSubmission {
    const fb: FeedbackSubmission = {
      detectionId,
      isTruePositive,
      comment,
      submittedAt: new Date().toISOString(),
    };
    this.feedback.push(fb);
    return fb;
  }

  listFeedback(): FeedbackSubmission[] {
    return this.feedback;
  }

  // --- Internal Helpers ---
  private deriveBaseScore(req: DetectionRequest, modelId: string): number {
    if (req.type === 'transaction') {
      return this.scoreFromHash(req.txHash, modelId, 60);
    } else {
      return this.scoreFromHash(req.address, modelId, 40) + (req.recentTxCount || 0) * 0.05;
    }
  }

  private scoreFromHash(seed: string, salt: string, base: number): number {
    let acc = 0;
    const combined = seed + salt;
    for (let i = 0; i < combined.length; i++) acc = (acc * 31 + combined.charCodeAt(i)) >>> 0;
    return (acc % 100) * 0.6 + base * 0.4; // mix hashed variability & base
  }

  private scoreToLabel(score: number): RiskLabel {
    if (score >= 85) return 'critical';
    if (score >= 65) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }

  private estimateConfidence(model: ModelInfo, label: RiskLabel): number {
    const base = (model.performance.precision + model.performance.recall) / 2;
    const multiplier = label === 'critical' ? 1 : label === 'high' ? 0.95 : label === 'medium' ? 0.9 : 0.85;
    return this.clamp(base * multiplier + (Math.random() - 0.5) * 0.05, 0, 1);
  }

  private sampleFeatureWeights(req: DetectionRequest): Array<{ feature: string; weight: number; importance: number }> {
    const features = this.extractFeatures(req);
    return Object.entries(features)
      .slice(0, 6)
      .map(([f, v]) => ({
        feature: f,
        weight: Number((v / 100).toFixed(3)),
        importance: Math.random(),
      }))
      .sort((a, b) => b.importance - a.importance)
      .map((f, idx) => ({ ...f, importance: Number((f.importance * (1 - idx * 0.07)).toFixed(3)) }));
  }

  private extractFeatures(req: DetectionRequest): FeatureVector {
    if (req.type === 'transaction') {
      const tx = req as TransactionDetectionRequest;
      return {
        gasUsed: (tx.gasUsed || 21000) % 500000,
        valueNorm: (parseInt(tx.value || '0') % 1e6) / 1e4,
        hour: new Date(tx.timestamp || Date.now()).getUTCHours(),
        hashEntropy: this.stringEntropy(tx.txHash),
        addrEntropy: this.stringEntropy((tx.from || '') + (tx.to || '')),
        ageBlocks: Math.floor(((Date.now() - (tx.timestamp || Date.now())) / 12000)),
      };
    } else {
      const w = req as WalletDetectionRequest;
      return {
        recentTx: w.recentTxCount || 0,
        ageDays: w.ageDays || 0,
        volume: (w.volumeUSD || 0) % 1_000_000,
        conn: w.connections || 0,
        addrEntropy: this.stringEntropy(w.address),
      };
    }
  }

  private stringEntropy(str: string): number {
    if (!str) return 0;
    const freq: Record<string, number> = {};
    for (const c of str) freq[c] = (freq[c] || 0) + 1;
    const len = str.length;
    let entropy = 0;
    Object.values(freq).forEach(count => {
      const p = count / len;
      entropy -= p * Math.log2(p);
    });
    return entropy * 10; // scale
  }

  private deriveSignals(req: DetectionRequest, score: number) {
    const signals: Array<{ name: string; value: string | number; impact: 'Low' | 'Medium' | 'High' | 'Critical' }> = [];
    if (req.type === 'transaction') {
      signals.push({ name: 'Gas Spike', value: (req.gasUsed || 21000), impact: score > 70 ? 'High' : 'Medium' });
      signals.push({ name: 'New Wallet Interaction', value: !req.from || !req.to ? 'unknown' : 'ok', impact: 'Medium' });
      signals.push({ name: 'Temporal Pattern', value: new Date(req.timestamp || Date.now()).getUTCHours(), impact: score > 80 ? 'High' : 'Low' });
    } else {
      signals.push({ name: 'Tx Velocity', value: req.recentTxCount || 0, impact: score > 65 ? 'High' : 'Medium' });
      signals.push({ name: 'Graph Connections', value: req.connections || 0, impact: score > 85 ? 'Critical' : 'Medium' });
      signals.push({ name: 'Account Age', value: (req.ageDays || 0) + 'd', impact: (req.ageDays || 0) < 3 ? 'High' : 'Low' });
    }
    return signals;
  }

  private clamp(v: number, min: number, max: number) { return Math.min(max, Math.max(min, v)); }
}

export const mlEngine = new MLEngineService();
export default mlEngine;
