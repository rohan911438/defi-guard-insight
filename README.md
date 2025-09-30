# GuardianAI - Real-time DeFi Fraud Detection System

<div align="center">

**🛡️ AI-Powered Real-time DeFi Security Platform Built on U2U Network 🛡️**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-teal.svg)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

**GuardianAI** is an advanced AI-powered fraud detection system designed to protect decentralized finance (DeFi) ecosystems from real-time exploits and malicious activities. Built specifically for the U2U Network, it leverages DAG-based architecture for near-instant finality and high throughput, making it possible to detect and alert about attacks within seconds.

This comprehensive security platform combines artificial intelligence, heuristic rules, and immutable on-chain alerts to create a robust defense system for Web3 finance, protecting billions of dollars in digital assets from sophisticated attack vectors.

## 🎯 Problem Statement

The DeFi ecosystem has revolutionized finance by providing open, permissionless access to financial services. However, this innovation has also exposed users and protocols to sophisticated attacks that have resulted in billions of dollars in losses:

### 💥 Critical Security Challenges

- **Flash Loan Attacks**: Manipulation of price oracles and liquidity pools
- **Oracle Attacks**: Price feed manipulation leading to unfair liquidations  
- **Rug Pulls**: Malicious token launches and liquidity theft
- **Sandwich Attacks (MEV)**: Front-running and back-running transactions
- **Wash Trading**: Artificial volume inflation and market manipulation
- **Smart Contract Exploits**: Reentrancy attacks and logic vulnerabilities

### ⚡ Current Limitations

- **Speed**: Attacks happen in seconds, current systems are too slow
- **Integration**: Poor integration with existing DeFi protocols
- **Accuracy**: High false positive rates reduce trust
- **Scalability**: Cannot handle high-throughput networks

## 🚀 Solution Architecture

GuardianAI provides a real-time fraud detection and alerting system powered by cutting-edge AI technology:

### 🧠 Hybrid Detection Stack

1. **Heuristic Detectors**: Fast, rule-based detection for known attack patterns
2. **Machine Learning Models**: XGBoost, neural networks, and graph models for pattern recognition
3. **Anomaly Detection**: Advanced algorithms to identify zero-day exploits
4. **Graph Analysis**: Transaction flow analysis to detect suspicious wallet networks

### 🔗 On-Chain Integration

- **AlertRegistry Smart Contract**: Immutable alert publishing on U2U Network
- **Real-time Mempool Monitoring**: Pre-transaction analysis and prevention
- **Cross-Protocol Integration**: Compatible with major DeFi protocols

## ✨ Key Features

### 🛡️ Core Security Features

- **Real-time Monitoring**: Continuous mempool and on-chain transaction analysis
- **AI-Powered Classification**: Advanced machine learning for suspicious pattern detection
- **Graph Visualization**: Interactive network analysis of token flows and wallet relationships
- **Risk Scoring**: Comprehensive threat assessment with detailed evidence
- **Alert Management**: Configurable alert thresholds and notification systems

### 📊 Analytics & Intelligence

- **Threat Intelligence Dashboard**: Real-time security metrics and trends
- **Wallet Analytics**: Comprehensive risk profiling and behavioral analysis  
- **Transaction Graph**: Interactive visualization of suspicious transaction flows
- **Performance Metrics**: System health monitoring and accuracy tracking
- **Historical Analysis**: Long-term trend analysis and pattern recognition

### 🔧 Developer Tools

- **REST API**: Complete API for integration with DeFi protocols
- **WebSocket Integration**: Real-time data streaming
- **Custom Webhooks**: Automated alert delivery to external systems
- **SDK Support**: Easy integration libraries for popular frameworks

### ⚙️ Configuration & Management

- **Detector Configuration**: Fine-tune sensitivity and threshold settings
- **Alert Customization**: Flexible notification preferences
- **Network Settings**: Configurable RPC endpoints and monitoring parameters
- **AI Model Management**: Model versioning and retraining capabilities

## 🏗️ Technical Architecture

### Frontend Stack
- **React 18** with TypeScript for robust UI development
- **Vite** for lightning-fast development and building
- **TailwindCSS** for modern, responsive styling
- **Shadcn/ui** for consistent, accessible components
- **React Query** for efficient data fetching and caching
- **Framer Motion** for smooth animations and transitions

### State Management
- **React Hooks** for local component state
- **Context API** for global state management
- **Real-time Updates** via WebSocket connections

### Data Visualization
- **Custom Charts** for analytics dashboards
- **Interactive Graphs** for transaction flow analysis
- **Real-time Metrics** with live updating displays

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Modern browser** with JavaScript enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/rohan911438/defi-guard-insight.git

# Navigate to project directory
cd defi-guard-insight

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
VITE_U2U_RPC_URL=https://rpc-nebulas-testnet.uniultra.xyz
VITE_WS_URL=ws://localhost:8000
```

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📱 Application Features

### 🏠 Landing Page
- **Hero Section**: Clear value proposition and key features
- **Feature Showcase**: Interactive demos of core capabilities
- **Statistics**: Real-time threat detection metrics
- **Call-to-Action**: Easy onboarding flow

### 📊 Dashboard
- **Real-time Metrics**: Live security statistics and network health
- **Alert Feed**: Latest security alerts with severity indicators
- **System Status**: AI detector performance and uptime monitoring
- **Quick Actions**: Fast access to critical security functions

### 🚨 Alert Management
- **Alert Feed**: Chronological list of security incidents
- **Detailed Analysis**: Comprehensive alert information with evidence
- **Risk Assessment**: AI-generated risk scores and explanations  
- **Response Actions**: Quick response tools for confirmed threats

### 📈 Analytics Dashboard
- **Threat Intelligence**: Advanced analysis of attack patterns
- **Wallet Analytics**: Behavioral analysis and risk profiling
- **Network Statistics**: Comprehensive network health metrics
- **Historical Trends**: Long-term security trend analysis

### 🌐 Transaction Graph
- **Interactive Visualization**: Dynamic network graphs of transactions
- **Risk-based Coloring**: Visual risk assessment of wallets and contracts
- **Flow Analysis**: Track suspicious fund movements
- **Zoom & Filter**: Detailed analysis capabilities

### ⚙️ Settings & Configuration
- **Detector Settings**: Configure AI model sensitivity and thresholds
- **Alert Preferences**: Customize notification delivery and filtering
- **Network Configuration**: RPC endpoints and blockchain settings
- **AI Management**: Model versioning and performance tuning

## 🎨 User Interface

### Design System
- **Modern Dark/Light Themes**: Adaptive UI based on user preference
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Accessibility**: WCAG 2.1 compliant interface design
- **Consistent Branding**: Professional security-focused aesthetic

### Component Library
- **Reusable Components**: Modular UI components with consistent styling
- **Interactive Elements**: Smooth animations and micro-interactions
- **Data Visualization**: Custom charts and graphs for complex data
- **Form Controls**: Advanced input validation and error handling

## 🔧 API Integration

### GuardianAI Service
```typescript
// Real-time alert subscription
guardianAPI.subscribe('new_alert', (alert) => {
  // Handle new security alert
});

// Fetch network statistics
const stats = await guardianAPI.getNetworkStats();

// Submit feedback for ML model improvement
await guardianAPI.submitFeedback(alertId, 'true_positive');
```

### Webhook Integration
```javascript
// Configure webhook endpoint
const webhookConfig = {
  url: 'https://your-protocol.com/api/alerts',
  events: ['critical_alert', 'threat_detected'],
  authentication: 'bearer_token'
};
```

## 🛠️ Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── layout/         # Layout components
│   └── ui/             # Base UI components
├── pages/              # Application pages/routes
├── hooks/              # Custom React hooks
├── services/           # API and external service integrations
├── types/              # TypeScript type definitions
└── lib/                # Utility functions and helpers
```

### Code Quality
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency enforcement
- **Prettier**: Automated code formatting
- **Husky**: Pre-commit hooks for quality assurance

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API integration and data flow testing
- **E2E Tests**: End-to-end user workflow testing
- **Performance Tests**: Load testing and optimization

## 🌐 Deployment

### Production Deployment
```bash
# Build for production
npm run build

# Deploy to your preferred hosting platform
# (Vercel, Netlify, AWS S3, etc.)
```

### Environment Configuration
- **Production API**: Configure production backend endpoints
- **Analytics**: Set up monitoring and analytics tracking
- **Error Reporting**: Configure error tracking services
- **Performance Monitoring**: Set up performance analytics

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development workflow
- Pull request process
- Issue reporting
- Feature requests

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

**Copyright (c) 2025 Rohan Kumar ([@rohan911438](https://github.com/rohan911438))**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## 🙏 Acknowledgments

- **U2U Network** for providing the high-performance blockchain infrastructure
- **React Team** for the amazing frontend framework
- **TailwindCSS** for the utility-first CSS framework
- **Shadcn/ui** for the beautiful component library
- **Open Source Community** for the incredible ecosystem of tools

---

<div align="center">

**Built with ❤️ for the DeFi Community**

Created by [Rohan Kumar](https://github.com/rohan911438)

</div>
