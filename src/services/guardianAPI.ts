import axios from 'axios';
import io from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { Alert, Transaction, AlertStats, NetworkStats, DetectorStatus, U2UNetworkData, RealTimeData, APIResponse } from '@/types';

class GuardianAIService {
  private baseURL: string;
  private socket: any = null;
  private subscribers: Map<string, Function[]> = new Map();

  constructor() {
    // In production, this would be your actual backend URL
    this.baseURL = process.env.VITE_API_URL || 'http://localhost:8000/api';
  }

  // Initialize real-time connection
  initializeRealTime() {
    this.socket = io(this.baseURL.replace('/api', ''));
    
    this.socket.on('connect', () => {
      console.log('Connected to GuardianAI real-time feed');
    });

    this.socket.on('new_alert', (alert: Alert) => {
      this.notifySubscribers('alerts', alert);
    });

    this.socket.on('new_transaction', (transaction: Transaction) => {
      this.notifySubscribers('transactions', transaction);
    });

    this.socket.on('network_update', (stats: NetworkStats) => {
      this.notifySubscribers('network', stats);
    });

    this.socket.on('detector_status', (status: DetectorStatus[]) => {
      this.notifySubscribers('detectors', status);
    });

    return this.socket;
  }

  // Subscribe to real-time updates
  subscribe(event: string, callback: Function) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)?.push(callback);

    // Return unsubscribe function
    return () => {
      const callbacks = this.subscribers.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  private notifySubscribers(event: string, data: any) {
    const callbacks = this.subscribers.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  // API Methods
  async getAlerts(page = 1, limit = 20, severity?: string): Promise<APIResponse<Alert[]>> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(severity && { severity })
      });

      const response = await axios.get(`${this.baseURL}/alerts?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching alerts:', error);
      return this.generateMockAlerts(); // Fallback to mock data
    }
  }

  async getAlert(id: string): Promise<APIResponse<Alert>> {
    try {
      const response = await axios.get(`${this.baseURL}/alerts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching alert:', error);
      return this.generateMockAlert(id);
    }
  }

  async getAlertStats(): Promise<APIResponse<AlertStats>> {
    try {
      const response = await axios.get(`${this.baseURL}/alerts/stats`);
      return response.data;
    } catch (error) {
      console.error('Error fetching alert stats:', error);
      return this.generateMockAlertStats();
    }
  }

  async getNetworkStats(): Promise<APIResponse<NetworkStats>> {
    try {
      const response = await axios.get(`${this.baseURL}/network/stats`);
      return response.data;
    } catch (error) {
      console.error('Error fetching network stats:', error);
      return this.generateMockNetworkStats();
    }
  }

  async getU2UNetworkData(): Promise<APIResponse<U2UNetworkData>> {
    try {
      const response = await axios.get(`${this.baseURL}/network/u2u`);
      return response.data;
    } catch (error) {
      console.error('Error fetching U2U network data:', error);
      return this.generateMockU2UData();
    }
  }

  async getDetectorStatus(): Promise<APIResponse<DetectorStatus[]>> {
    try {
      const response = await axios.get(`${this.baseURL}/detectors/status`);
      return response.data;
    } catch (error) {
      console.error('Error fetching detector status:', error);
      return this.generateMockDetectorStatus();
    }
  }

  async getTransactions(page = 1, limit = 20): Promise<APIResponse<Transaction[]>> {
    try {
      const response = await axios.get(`${this.baseURL}/transactions?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return this.generateMockTransactions();
    }
  }

  async submitFeedback(alertId: string, feedback: 'true_positive' | 'false_positive', comment?: string): Promise<APIResponse<boolean>> {
    try {
      const response = await axios.post(`${this.baseURL}/alerts/${alertId}/feedback`, {
        feedback,
        comment
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      return {
        success: false,
        error: 'Failed to submit feedback',
        timestamp: new Date()
      };
    }
  }

  // Mock data generators for development
  private generateMockAlerts(): APIResponse<Alert[]> {
    const mockAlerts: Alert[] = [
      {
        id: '1',
        txHash: '0x1234...abcd',
        blockNumber: 12345678,
        severity: 'Critical',
        riskScore: 95,
        timestamp: new Date(Date.now() - 300000),
        pattern: 'Flash Loan Exploit',
        explanation: 'Detected flash loan attack draining liquidity pool with suspicious price manipulation',
        detectorType: 'ML',
        exploitType: 'Flash Loan',
        evidence: [
          {
            id: 'e1',
            type: 'Transaction',
            description: 'Large flash loan followed by immediate liquidation',
            confidence: 0.92,
            data: { amount: '1000000 USDC', duration: '1 block' }
          }
        ],
        affectedWallets: ['0xabcd...1234', '0xefgh...5678'],
        affectedTokens: ['0x1234...abcd'],
        gasUsed: 500000,
        valueAtRisk: '2.5M USD',
        status: 'Active'
      },
      {
        id: '2',
        txHash: '0x5678...efgh',
        blockNumber: 12345677,
        severity: 'High',
        riskScore: 82,
        timestamp: new Date(Date.now() - 600000),
        pattern: 'Suspicious Token Launch',
        explanation: 'New token with hidden mint function and suspicious ownership transfer',
        detectorType: 'Heuristic',
        exploitType: 'Rug Pull',
        evidence: [],
        affectedWallets: ['0x9999...0000'],
        affectedTokens: ['0x5678...efgh'],
        gasUsed: 200000,
        valueAtRisk: '500K USD',
        status: 'Active'
      }
    ];

    return {
      success: true,
      data: mockAlerts,
      timestamp: new Date()
    };
  }

  private generateMockAlert(id: string): APIResponse<Alert> {
    return {
      success: true,
      data: {
        id,
        txHash: '0x1234...abcd',
        blockNumber: 12345678,
        severity: 'Critical',
        riskScore: 95,
        timestamp: new Date(),
        pattern: 'Flash Loan Exploit',
        explanation: 'Detailed explanation of the detected exploit...',
        detectorType: 'ML',
        exploitType: 'Flash Loan',
        evidence: [],
        affectedWallets: [],
        affectedTokens: [],
        gasUsed: 500000,
        valueAtRisk: '2.5M USD',
        status: 'Active'
      },
      timestamp: new Date()
    };
  }

  private generateMockAlertStats(): APIResponse<AlertStats> {
    return {
      success: true,
      data: {
        total: 1247,
        critical: 23,
        high: 89,
        medium: 234,
        low: 901,
        resolved: 1124,
        falsePositives: 45,
        activeThreats: 78
      },
      timestamp: new Date()
    };
  }

  private generateMockNetworkStats(): APIResponse<NetworkStats> {
    return {
      success: true,
      data: {
        totalTransactions: 1234567,
        suspiciousTransactions: 1247,
        blockedTransactions: 234,
        averageBlockTime: 3.2,
        networkHealth: 'Healthy',
        memPoolSize: 1543,
        gasPrice: '20 Gwei'
      },
      timestamp: new Date()
    };
  }

  private generateMockU2UData(): APIResponse<U2UNetworkData> {
    return {
      success: true,
      data: {
        chainId: 39,
        networkName: 'U2U Network',
        blockHeight: 12345678,
        totalTransactions: 9876543,
        averageBlockTime: 2.1,
        networkHashRate: '1.2 TH/s',
        activeNodes: 156,
        memPoolTransactions: 2341
      },
      timestamp: new Date()
    };
  }

  private generateMockDetectorStatus(): APIResponse<DetectorStatus[]> {
    return {
      success: true,
      data: [
        {
          id: 'flash-loan-detector',
          name: 'Flash Loan Detector',
          type: 'Heuristic',
          status: 'Active',
          accuracy: 94.2,
          lastUpdated: new Date(),
          alertsGenerated: 234,
          falsePositiveRate: 5.8
        },
        {
          id: 'ml-anomaly-detector',
          name: 'ML Anomaly Detector',
          type: 'ML',
          status: 'Active',
          accuracy: 89.7,
          lastUpdated: new Date(),
          alertsGenerated: 567,
          falsePositiveRate: 10.3
        }
      ],
      timestamp: new Date()
    };
  }

  private generateMockTransactions(): APIResponse<Transaction[]> {
    return {
      success: true,
      data: [
        {
          hash: '0x1234...abcd',
          from: '0xabcd...1234',
          to: '0xefgh...5678',
          value: '1000000000000000000',
          gasUsed: 21000,
          gasPrice: '20000000000',
          timestamp: new Date(),
          blockNumber: 12345678,
          status: 'Success',
          riskScore: 25,
          labels: ['Normal Transfer']
        }
      ],
      timestamp: new Date()
    };
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.subscribers.clear();
  }
}

export const guardianAPI = new GuardianAIService();
export default guardianAPI;