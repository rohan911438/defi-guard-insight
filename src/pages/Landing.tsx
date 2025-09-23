import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  Eye, 
  AlertTriangle, 
  Activity, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin,
  Brain,
  Network,
  BarChart3,
  Wallet,
  Globe,
  Timer,
  Award,
  Target,
  Layers,
  Search,
  Bell,
  Smartphone,
  Monitor,
  ChevronRight,
  Play,
  Download,
  MessageSquare,
  Mail,
  Code,
  Database,
  Cpu,
  CloudLightning,
  Radar,
  RefreshCw,
  TrendingDown,
  DollarSign,
  PieChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState('dashboard');

  const handleSignUp = () => {
    navigate("/dashboard");
  };

  const coreFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection Engine",
      description: "Our advanced neural networks analyze over 2.5 million transactions daily, identifying patterns and anomalies that indicate potential threats, scams, or malicious activities.",
      details: [
        "Machine learning models trained on 500M+ historical transactions",
        "Real-time pattern recognition for rug pulls and exit scams",
        "Behavioral analysis to detect bot activities and market manipulation",
        "Predictive modeling to anticipate emerging threat vectors",
        "Integration with global threat intelligence feeds"
      ],
      stats: { accuracy: "99.7%", falsePositives: "<0.1%", responseTime: "45ms" }
    },
    {
      icon: Network,
      title: "Multi-Chain Transaction Graph Analytics",
      description: "Visualize complex transaction flows across 15+ blockchain networks with our interactive graph visualization engine, powered by advanced graph algorithms.",
      details: [
        "Cross-chain transaction tracking and correlation",
        "Advanced wallet clustering using machine learning",
        "Fund flow analysis with temporal visualization",
        "Address reputation scoring based on transaction history",
        "Automated money laundering detection algorithms"
      ],
      stats: { chains: "15+", addresses: "50M+", connections: "2B+" }
    },
    {
      icon: BarChart3,
      title: "Advanced Portfolio Intelligence Suite",
      description: "Comprehensive AI-driven portfolio analysis with predictive insights, risk assessment, and performance optimization powered by quantitative models.",
      details: [
        "Risk-adjusted return calculations (Sharpe, Sortino, Calmar ratios)",
        "Dynamic correlation analysis across DeFi assets",
        "Yield farming strategy optimization with MEV analysis",
        "Impermanent loss tracking with predictive modeling",
        "Automated rebalancing recommendations based on market conditions"
      ],
      stats: { protocols: "200+", assets: "$2.8B+", accuracy: "94%" }
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Real-Time Alert System",
      description: "Multi-layered alert system with customizable triggers, severity classification, and machine learning-based noise reduction to ensure critical alerts reach you instantly.",
      details: [
        "Smart contract vulnerability detection with severity scoring",
        "Price volatility alerts with dynamic threshold adjustment",
        "Liquidity pool health monitoring and drain warnings",
        "Governance proposal tracking with voting power analysis",
        "Flash loan attack detection with real-time mitigation suggestions"
      ],
      stats: { alertTypes: "50+", avgResponse: "23s", accuracy: "98.5%" }
    },
    {
      icon: Shield,
      title: "Smart Contract Security Analyzer",
      description: "Automated smart contract auditing using static analysis, formal verification, and machine learning to identify vulnerabilities before you interact.",
      details: [
        "Automated vulnerability scanning for common exploits",
        "Gas optimization analysis and recommendations",
        "Formal verification of critical contract functions",
        "Historical exploit pattern matching",
        "Real-time contract upgrade monitoring"
      ],
      stats: { contracts: "100K+", vulnerabilities: "25K+", saved: "$180M+" }
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security Infrastructure",
      description: "Military-grade security with zero-knowledge architecture, end-to-end encryption, and privacy-preserving analytics to protect your sensitive data.",
      details: [
        "Zero-knowledge proof systems for privacy preservation",
        "Hardware security modules (HSM) for key management",
        "Multi-party computation for sensitive calculations",
        "GDPR and SOC 2 Type II compliance",
        "Regular penetration testing by leading security firms"
      ],
      stats: { uptime: "99.99%", encryption: "AES-256", audits: "Quarterly" }
    }
  ];

  const protocolSupport = [
    { 
      name: "Ethereum", 
      supported: true, 
      features: ["DeFi", "NFTs", "DAOs", "L2s"],
      tvl: "$60B+",
      protocols: 500
    },
    { 
      name: "Binance Smart Chain", 
      supported: true, 
      features: ["DeFi", "Gaming", "NFTs"],
      tvl: "$8B+",
      protocols: 200
    },
    { 
      name: "Polygon", 
      supported: true, 
      features: ["DeFi", "Gaming", "Enterprise"],
      tvl: "$1.2B+",
      protocols: 150
    },
    { 
      name: "Arbitrum", 
      supported: true, 
      features: ["DeFi", "L2", "Gaming"],
      tvl: "$2.8B+",
      protocols: 120
    },
    { 
      name: "Optimism", 
      supported: true, 
      features: ["DeFi", "L2", "Social"],
      tvl: "$1.5B+",
      protocols: 80
    },
    { 
      name: "Avalanche", 
      supported: true, 
      features: ["DeFi", "Enterprise", "Gaming"],
      tvl: "$1B+",
      protocols: 100
    },
    { 
      name: "Solana", 
      supported: true, 
      features: ["DeFi", "NFTs", "Web3"],
      tvl: "$1.8B+",
      protocols: 90
    },
    { 
      name: "Fantom", 
      supported: true, 
      features: ["DeFi", "Enterprise"],
      tvl: "$500M+",
      protocols: 60
    },
    { 
      name: "Cosmos Hub", 
      supported: false, 
      features: ["Coming Q2 2025"],
      tvl: "TBA",
      protocols: 0
    },
    { 
      name: "Polkadot", 
      supported: false, 
      features: ["Coming Q3 2025"],
      tvl: "TBA",
      protocols: 0
    }
  ];

  const platformStats = [
    { value: "2.5M+", label: "Transactions Monitored Daily", icon: Activity, color: "text-blue-400" },
    { value: "75K+", label: "Active Users Worldwide", icon: Users, color: "text-green-400" },
    { value: "99.99%", label: "Platform Uptime SLA", icon: Timer, color: "text-purple-400" },
    { value: "200+", label: "DeFi Protocols Supported", icon: Network, color: "text-orange-400" },
    { value: "$2.8B+", label: "Assets Under Monitoring", icon: TrendingUp, color: "text-emerald-400" },
    { value: "23s", label: "Average Alert Response", icon: Zap, color: "text-yellow-400" },
    { value: "$180M+", label: "Prevented Losses", icon: Shield, color: "text-red-400" },
    { value: "15+", label: "Blockchain Networks", icon: Globe, color: "text-indigo-400" }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "Free",
      description: "Perfect for getting started with DeFi security monitoring",
      features: [
        "Up to 5 wallet addresses",
        "Basic transaction monitoring",
        "Email alerts for critical threats",
        "Community support",
        "7-day transaction history",
        "Basic portfolio overview"
      ],
      cta: "Start Free",
      popular: false,
      limits: "5 wallets, 100 alerts/month"
    },
    {
      name: "Guardian Pro",
      price: "$49",
      period: "/month",
      originalPrice: "$79",
      description: "Advanced protection for serious DeFi traders and investors",
      features: [
        "Unlimited wallet addresses",
        "Real-time AI threat detection",
        "Advanced portfolio analytics",
        "SMS + Email + Discord alerts",
        "90-day transaction history",
        "Smart contract analysis",
        "Custom alert rules",
        "Priority support",
        "API access (10K calls/day)"
      ],
      cta: "Start 14-Day Free Trial",
      popular: true,
      limits: "Unlimited wallets, 10K alerts/month"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for institutions, funds, and large-scale operations",
      features: [
        "Everything in Guardian Pro",
        "Dedicated account manager",
        "Custom integrations & webhooks",
        "White-label dashboard",
        "SLA guarantees (99.99% uptime)",
        "Advanced compliance reporting",
        "Multi-user team management",
        "Custom ML model training",
        "Unlimited API access",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false,
      limits: "Custom limits based on needs"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "Senior DeFi Trader",
      company: "Paradigm Capital",
      content: "GuardianAI's advanced threat detection saved our fund from a sophisticated flash loan attack. The platform detected the anomaly 23 seconds before execution, allowing us to exit our positions safely. This is genuinely the future of DeFi security.",
      rating: 5,
      avatar: "AC",
      portfolio: "$50M+",
      saved: "$2.3M"
    },
    {
      name: "Marcus Thompson",
      role: "Founder & Portfolio Manager",
      company: "DeFi Yield Strategies",
      content: "The multi-chain portfolio analytics are phenomenal. We track yield farming strategies across 12 different protocols simultaneously. The impermanent loss calculations and MEV analysis alone have improved our returns by 23% annually.",
      rating: 5,
      avatar: "MT",
      portfolio: "$25M+",
      saved: "$1.8M"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Digital Assets",
      company: "Goldman Sachs Digital Assets",
      content: "For institutional DeFi exposure, DeFi Guard provides enterprise-grade monitoring we require. The compliance reporting and risk assessment models are sophisticated and exceed our internal audit requirements.",
      rating: 5,
      avatar: "PS",
      portfolio: "$200M+",
      saved: "$8.5M"
    },
    {
      name: "James Rodriguez",
      role: "Crypto Fund Manager",
      company: "Decentralized Ventures",
      content: "Managing a $50M DeFi portfolio across 8 chains was impossible before DeFi Guard. The transaction graph visualization helps us track fund flows and identify optimal rebalancing opportunities instantly.",
      rating: 5,
      avatar: "JR",
      portfolio: "$50M+",
      saved: "$3.2M"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Zero-Knowledge Architecture",
      description: "Your private keys and sensitive data never leave your device. We use zero-knowledge proofs to analyze your portfolio without accessing your private information."
    },
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "All data transmission uses AES-256 encryption with perfect forward secrecy. Our infrastructure meets SOC 2 Type II and ISO 27001 standards."
    },
    {
      icon: Eye,
      title: "Privacy-First Analytics",
      description: "No KYC required for basic usage. We support pseudonymous operation and are fully GDPR compliant with data minimization principles."
    },
    {
      icon: Award,
      title: "Regular Security Audits",
      description: "Quarterly security audits by leading firms including Trail of Bits and ConsenSys Diligence. All smart contracts are formally verified."
    }
  ];

  const useCases = [
    {
      title: "Individual DeFi Traders",
      description: "Protect your personal DeFi investments",
      features: ["Portfolio tracking", "Threat alerts", "Performance analytics"],
      users: "45K+ users"
    },
    {
      title: "Investment Funds",
      description: "Manage large-scale DeFi portfolios",
      features: ["Multi-manager access", "Compliance reporting", "Risk management"],
      users: "200+ funds"
    },
    {
      title: "DeFi Protocols",
      description: "Monitor your protocol's security",
      features: ["Smart contract monitoring", "Liquidity analysis", "Governance insights"],
      users: "150+ protocols"
    },
    {
      title: "Enterprise Treasury",
      description: "Corporate DeFi treasury management",
      features: ["Multi-sig support", "Audit trails", "Risk dashboards"],
      users: "50+ enterprises"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="h-10 w-10 text-purple-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">GuardianAI</span>
                <div className="text-xs text-purple-300">AI-Powered Security</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors font-medium">Features</a>
              <a href="#security" className="text-slate-300 hover:text-white transition-colors font-medium">Security</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors font-medium">Pricing</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors font-medium">Reviews</a>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Sign In
              </Button>
              <Button onClick={handleSignUp} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-semibold">
                Get Started Free
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-500/30 px-4 py-2">
            🚀 New: Multi-Chain MEV Protection & Advanced Graph Analytics
          </Badge>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The Ultimate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              DeFi Security
            </span>{" "}
            Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Protect your DeFi investments with AI-powered threat detection, real-time portfolio analytics, 
            and comprehensive security monitoring across 15+ blockchain networks. Trusted by 75K+ users managing $2.8B+ in assets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={handleSignUp}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-10 py-4 font-semibold text-white shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-10 py-4 font-semibold"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {platformStats.slice(0, 4).map((stat, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-slate-400">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-slate-400">Audited by Trail of Bits</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-blue-400" />
              <span className="text-slate-400">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete DeFi Security Ecosystem
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to stay secure, informed, and profitable in the decentralized finance landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                      <feature.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/20 rounded-lg">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-slate-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Chain Support Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Chain DeFi Coverage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Monitor your DeFi activities across all major blockchain networks with unified analytics and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocolSupport.map((protocol, index) => (
              <Card key={index} className={`relative overflow-hidden ${protocol.supported ? 'bg-slate-800/40 border-slate-700/50' : 'bg-slate-800/20 border-slate-800/50'}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{protocol.name}</CardTitle>
                    <Badge variant={protocol.supported ? "default" : "secondary"} className={protocol.supported ? "bg-green-600" : "bg-slate-600"}>
                      {protocol.supported ? "Live" : "Coming Soon"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {protocol.supported ? (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">TVL Monitored:</span>
                        <span className="text-white font-semibold">{protocol.tvl}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Protocols:</span>
                        <span className="text-white font-semibold">{protocol.protocols}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {protocol.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs border-purple-400/30 text-purple-300">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <Timer className="h-6 w-6 text-slate-500 mx-auto mb-2" />
                      <p className="text-slate-500 text-sm">{protocol.features[0]}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Every DeFi Participant
            </h2>
            <p className="text-xl text-slate-300">
              From individual traders to enterprise treasuries, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                  <CardDescription className="text-slate-300">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                    <div className="mt-4 pt-3 border-t border-slate-700">
                      <Badge variant="outline" className="text-purple-300 border-purple-400/30">
                        {useCase.users}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section id="security" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your security and privacy are our top priorities. We use cutting-edge technology to protect your data and investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((security, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <security.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <CardTitle className="text-white text-xl">{security.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{security.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Certifications */}
          <div className="bg-slate-800/20 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Security Certifications & Audits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Award className="h-8 w-8 text-yellow-400 mx-auto" />
                <div className="text-white font-semibold">SOC 2 Type II</div>
                <div className="text-slate-400 text-sm">Certified 2024</div>
              </div>
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-green-400 mx-auto" />
                <div className="text-white font-semibold">ISO 27001</div>
                <div className="text-slate-400 text-sm">Certified 2024</div>
              </div>
              <div className="space-y-2">
                <Lock className="h-8 w-8 text-blue-400 mx-auto" />
                <div className="text-white font-semibold">GDPR Compliant</div>
                <div className="text-slate-400 text-sm">EU Compliant</div>
              </div>
              <div className="space-y-2">
                <Eye className="h-8 w-8 text-purple-400 mx-auto" />
                <div className="text-white font-semibold">Trail of Bits</div>
                <div className="text-slate-400 text-sm">Audited Q4 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by DeFi Leaders
            </h2>
            <p className="text-xl text-slate-300">
              See how GuardianAI is protecting portfolios and preventing losses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                          <p className="text-purple-300 text-sm">{testimonial.role}</p>
                          <p className="text-slate-400 text-sm">{testimonial.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-400">Portfolio</div>
                          <div className="text-white font-semibold">{testimonial.portfolio}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-4">"{testimonial.content}"</p>
                  <div className="bg-slate-700/30 p-3 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Prevented Losses:</span>
                      <span className="text-green-400 font-semibold">{testimonial.saved}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Flexible pricing for individuals, professionals, and enterprises
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center mb-8">
              <Badge className="bg-green-600 text-white px-4 py-2">
                💰 Save 20% with Annual Billing
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 bg-slate-800/60' : 'bg-slate-800/40'} border-slate-700/50 backdrop-blur-sm`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular Choice
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-12" : "pt-6"}>
                  <div className="text-center">
                    <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-slate-400 text-lg">{plan.period}</span>}
                      {plan.originalPrice && (
                        <div className="text-slate-400 line-through text-sm">Originally {plan.originalPrice}/month</div>
                      )}
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-slate-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-slate-700/20 p-3 rounded-lg">
                    <div className="text-xs text-slate-400 text-center">{plan.limits}</div>
                  </div>
                  
                  <Button 
                    onClick={handleSignUp}
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-slate-700 hover:bg-slate-600'} font-semibold`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Pricing Info */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-4">All plans include 99.99% uptime SLA and 24/7 threat monitoring</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                30-day money back
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Free migration support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-orange-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Start Protecting Your DeFi Future Today
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join 75,000+ users who trust GuardianAI to secure their investments. 
            Get started with our free plan or try Guardian Pro risk-free for 14 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              onClick={handleSignUp}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-12 py-4 font-semibold shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-4 font-semibold backdrop-blur-sm"
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">14 Days</div>
              <div className="text-slate-300">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">No Setup</div>
              <div className="text-slate-300">Ready in 2 Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-300">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-purple-400" />
                <div>
                  <span className="text-xl font-bold text-white">GuardianAI</span>
                  <div className="text-xs text-purple-300">AI-Powered Security</div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The most advanced DeFi security platform, protecting over $2.8B in assets across 15+ blockchain networks. 
                Trusted by 75,000+ users worldwide.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-6 w-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="h-6 w-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <MessageSquare className="h-6 w-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#security" className="text-slate-300 hover:text-white transition-colors">Security</a></li>
                <li><a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Community Discord</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">System Status</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Bug Bounty</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-slate-400">
                © 2025 GuardianAI. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">All systems operational</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}