import { Shield, Zap, Target, Users, Play, Github, ExternalLink, Database, Brain, Network, ArrowRight, CheckCircle, Globe, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-primary text-primary-foreground rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            GuardianAI
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Real-time AI Fraud Detection for DeFi
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-3xl mx-auto">
            Protecting Web3 finance from flash loans, sandwich attacks, and rug pulls with AI + U2U DAG speed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Play className="mr-2 h-5 w-5" />
              View Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <ExternalLink className="mr-2 h-5 w-5" />
              Read Docs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Shield className="mr-2 h-5 w-5" />
              Explore Alerts
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Problem</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              DeFi hacks cause <span className="text-danger font-semibold">billions in losses</span> every year due to flash loans, 
              oracle manipulation, rug pulls, and MEV attacks.
            </p>
            <p className="text-lg text-muted-foreground">
              Attacks happen within <span className="text-warning font-semibold">seconds</span>, making prevention and detection 
              extremely difficult with traditional blockchains and monitoring systems.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="text-danger text-3xl font-bold mb-2">$3.8B</div>
              <p className="text-sm text-muted-foreground">Lost to DeFi hacks in 2023</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="text-warning text-3xl font-bold mb-2">&lt;60s</div>
              <p className="text-sm text-muted-foreground">Average attack duration</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="text-success text-3xl font-bold mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Could be prevented with real-time detection</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="bg-accent/30 py-16 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Solution</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GuardianAI combines advanced AI models with blockchain-native detection to protect DeFi protocols in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Real-time Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor mempool and on-chain events with millisecond latency
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Hybrid AI Models</h3>
                <p className="text-sm text-muted-foreground">
                  ML algorithms + heuristics for 95%+ accuracy
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Graph Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive analysis of suspicious wallet flows
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Immutable Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  AlertRegistry smart contract on U2U blockchain
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Easy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  REST API for protocols and monitoring systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Cross-Protocol</h3>
                <p className="text-sm text-muted-foreground">
                  Works with any EVM-compatible DeFi protocol
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three-step process from detection to alert publication
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Ingestion</h3>
            <p className="text-muted-foreground">
              Real-time monitoring of mempool transactions and on-chain events across DeFi protocols
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <ArrowRight className="h-8 w-8 text-primary hidden md:block" />
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
            <p className="text-muted-foreground">
              Machine learning models detect flash loans, sandwich attacks, rug pulls, and MEV exploits
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <ArrowRight className="h-8 w-8 text-primary hidden md:block" />
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Alert Publication</h3>
            <p className="text-muted-foreground">
              Alerts published immutably on U2U AlertRegistry and displayed in real-time dashboard
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-muted/30 py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">See GuardianAI in Action</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch GuardianAI catch a simulated flash-loan exploit in real time
          </p>
          
          <div className="bg-background rounded-2xl p-8 shadow-lg mb-8">
            <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <div className="text-center">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Demo Video Placeholder</p>
                <p className="text-sm text-muted-foreground/70">Flash Loan Attack Detection</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Shield className="mr-2 h-5 w-5" />
            Access Live Dashboard
          </Button>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Technical Architecture</h2>
          <p className="text-lg text-muted-foreground">
            Built with modern technologies for maximum performance and reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5 text-primary" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary">Python</Badge>
                <Badge className="bg-primary/10 text-primary">FastAPI</Badge>
                <Badge className="bg-primary/10 text-primary">web3.py</Badge>
                <Badge className="bg-primary/10 text-primary">XGBoost</Badge>
                <Badge className="bg-primary/10 text-primary">PostgreSQL</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-primary" />
                On-Chain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary">Solidity</Badge>
                <Badge className="bg-primary/10 text-primary">U2U Network</Badge>
                <Badge className="bg-primary/10 text-primary">AlertRegistry</Badge>
                <Badge className="bg-primary/10 text-primary">EVM Compatible</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary">React</Badge>
                <Badge className="bg-primary/10 text-primary">TypeScript</Badge>
                <Badge className="bg-primary/10 text-primary">TailwindCSS</Badge>
                <Badge className="bg-primary/10 text-primary">Lovable</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits of U2U */}
      <section className="bg-gradient-primary text-primary-foreground py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why U2U Network?</h2>
            <p className="text-lg opacity-90">
              U2U's DAG-based architecture provides the perfect foundation for real-time fraud detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 opacity-90" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Near-Instant Finality</h3>
              <p className="opacity-80">
                DAG-based architecture enables sub-second transaction finality, critical for fraud prevention
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 opacity-90" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High TPS & Low Latency</h3>
              <p className="opacity-80">
                Superior throughput and minimal latency ideal for real-time monitoring and alerts
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 opacity-90" />
              </div>
              <h3 className="text-xl font-semibold mb-3">EVM Compatible</h3>
              <p className="opacity-80">
                Seamless integration with existing DeFi protocols and smart contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Mentorship */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Team & Mentorship</h2>
          <p className="text-lg text-muted-foreground">
            Built by passionate developers with guidance from industry experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Lead Developer</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack engineer specializing in DeFi security and machine learning
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">AI Specialist</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning engineer with expertise in fraud detection algorithms
              </p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl shadow-md text-center">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Blockchain Developer</h3>
              <p className="text-sm text-muted-foreground">
                Smart contract developer with deep knowledge of DeFi protocols
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Mentorship & Support</h3>
            <p className="text-muted-foreground mb-6">
              Grateful for guidance from VietBUIDL mentors and the vibrant Vietnamese blockchain community
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm">VietBUIDL</div>
              <div className="text-sm">•</div>
              <div className="text-sm">U2U Network</div>
              <div className="text-sm">•</div>
              <div className="text-sm">Vietnam Blockchain Community</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">GuardianAI</h3>
            <p className="text-muted-foreground mb-6">
              Built for VietBUIDL Hackathon with ❤️ by the GuardianAI Team
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Whitepaper
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 GuardianAI. Protecting DeFi with AI-powered fraud detection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}