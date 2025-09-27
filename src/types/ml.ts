// Machine Learning related domain types for GuardianAI front-end simulation layer
// These mirror what a real backend inference / model registry API would expose.

export type ModelKind = 'classification' | 'anomaly' | 'graph' | 'ensemble';
export type ModelStatus = 'loading' | 'ready' | 'training' | 'error' | 'disabled';

export interface ModelPerformance {
  precision: number; // 0-1
  recall: number; // 0-1
  fpr: number; // false positive rate 0-1
  lastUpdated: string; // ISO date
}

export interface ModelInfo {
  id: string;
  name: string;
  version: string;
  kind: ModelKind;
  description: string;
  status: ModelStatus;
  performance: ModelPerformance;
  tags: string[];
  enabled: boolean;
}

export interface FeatureVector {
  // Key -> numeric value (model agnostic simple representation)
  [key: string]: number;
}

export interface DetectionRequestBase {
  modelId?: string; // optional specific model
  ensemble?: boolean; // if true aggregate across enabled models
  context?: Record<string, any>;
}

export interface TransactionDetectionRequest extends DetectionRequestBase {
  type: 'transaction';
  txHash: string;
  value?: string; // raw value string (wei / units)
  gasUsed?: number;
  gasPrice?: string;
  from?: string;
  to?: string;
  timestamp?: number; // unix ms
}

export interface WalletDetectionRequest extends DetectionRequestBase {
  type: 'wallet';
  address: string;
  recentTxCount?: number;
  ageDays?: number;
  volumeUSD?: number;
  connections?: number;
}

export type DetectionRequest = TransactionDetectionRequest | WalletDetectionRequest;

export interface ModelContribution {
  modelId: string;
  riskScore: number; // 0-100
  label: RiskLabel;
  confidence: number; // 0-1
  featureWeights?: Array<{ feature: string; weight: number; importance: number }>;
}

export type RiskLabel = 'low' | 'medium' | 'high' | 'critical';

export interface DetectionResult {
  id: string; // uuid
  request: DetectionRequest;
  aggregatedScore: number; // 0-100
  label: RiskLabel;
  confidence: number; // ensemble confidence 0-1
  createdAt: string; // iso
  models: ModelContribution[];
  topSignals: Array<{ name: string; value: string | number; impact: 'Low' | 'Medium' | 'High' | 'Critical' }>;
  meta?: Record<string, any>;
}

export interface FeedbackSubmission {
  detectionId: string;
  isTruePositive: boolean;
  comment?: string;
  submittedAt: string;
}

export interface ModelStatusSummary {
  total: number;
  ready: number;
  training: number;
  disabled: number;
  lastUpdated: string;
}
