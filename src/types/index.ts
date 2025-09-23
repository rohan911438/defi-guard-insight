// GuardianAI Frontend Types

export interface Alert {
  id: string;
  txHash: string;
  blockNumber: number;
  severity: "Low" | "Medium" | "High" | "Critical";
  riskScore: number;
  timestamp: Date;
  pattern: string;
  explanation: string;
  detectorType: "Heuristic" | "ML" | "Anomaly";
  exploitType: "Flash Loan" | "Oracle Attack" | "Rug Pull" | "Sandwich Attack" | "Wash Trading" | "Suspicious Token Launch" | "Unknown";
  evidence: Evidence[];
  affectedWallets: string[];
  affectedTokens: string[];
  gasUsed: number;
  valueAtRisk: string;
  status: "Active" | "Confirmed" | "False Positive" | "Resolved";
}

export interface Evidence {
  id: string;
  type: "Transaction" | "Wallet Behavior" | "Token Metrics" | "Oracle Data" | "Graph Analysis";
  description: string;
  confidence: number;
  data: any;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: number;
  gasPrice: string;
  timestamp: Date;
  blockNumber: number;
  status: "Success" | "Failed";
  riskScore: number;
  labels: string[];
}

export interface Wallet {
  address: string;
  riskScore: number;
  labels: string[];
  firstSeen: Date;
  lastActivity: Date;
  transactionCount: number;
  totalValue: string;
  suspiciousActivities: string[];
  connectedWallets: string[];
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  totalSupply: string;
  riskScore: number;
  creationDate: Date;
  creator: string;
  holders: number;
  liquidityPool?: string;
  priceChange24h?: number;
  suspicious: boolean;
  flags: string[];
}

export interface GraphNode {
  id: string;
  type: "wallet" | "token" | "transaction" | "contract";
  label: string;
  riskScore: number;
  size: number;
  color: string;
  data: Wallet | Token | Transaction;
}

export interface GraphLink {
  source: string;
  target: string;
  value: number;
  type: "transfer" | "swap" | "approve" | "call";
  timestamp: Date;
  riskScore: number;
}

export interface AlertStats {
  total: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  resolved: number;
  falsePositives: number;
  activeThreats: number;
}

export interface NetworkStats {
  totalTransactions: number;
  suspiciousTransactions: number;
  blockedTransactions: number;
  averageBlockTime: number;
  networkHealth: "Healthy" | "Warning" | "Critical";
  memPoolSize: number;
  gasPrice: string;
}

export interface DetectorStatus {
  id: string;
  name: string;
  type: "Heuristic" | "ML" | "Anomaly";
  status: "Active" | "Inactive" | "Error";
  accuracy: number;
  lastUpdated: Date;
  alertsGenerated: number;
  falsePositiveRate: number;
}

export interface U2UNetworkData {
  chainId: number;
  networkName: string;
  blockHeight: number;
  totalTransactions: number;
  averageBlockTime: number;
  networkHashRate: string;
  activeNodes: number;
  memPoolTransactions: number;
}

export interface RealTimeData {
  alerts: Alert[];
  transactions: Transaction[];
  networkStats: NetworkStats;
  u2uNetwork: U2UNetworkData;
  detectorStatus: DetectorStatus[];
  timestamp: Date;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}