import { Shield, Zap, Target, Users, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">About GuardianAI</h1>
        <p className="text-muted-foreground">
          Advanced AI-powered fraud detection for the DeFi ecosystem
        </p>
      </div>

      {/* Project Overview */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle>GuardianAI</CardTitle>
              <p className="text-sm text-muted-foreground">Real-time DeFi Fraud Detection System</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground leading-relaxed">
            GuardianAI is an advanced AI-powered fraud detection system designed specifically for the DeFi ecosystem. 
            Built for the U2U hackathon, it leverages machine learning algorithms to identify suspicious transaction 
            patterns, flash loan attacks, sandwich attacks, and other fraudulent activities in real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-accent/50 rounded-xl text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Real-time Detection</h3>
              <p className="text-sm text-muted-foreground">Instant fraud pattern recognition</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-xl text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">High Accuracy</h3>
              <p className="text-sm text-muted-foreground">95%+ fraud detection accuracy</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-xl text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Open source and transparent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Badge className="bg-success text-success-foreground mt-1">ML</Badge>
                <div>
                  <h3 className="font-semibold">Advanced Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Proprietary algorithms trained on historical DeFi attack patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-primary-foreground mt-1">API</Badge>
                <div>
                  <h3 className="font-semibold">REST API Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Easy integration with existing DeFi protocols and monitoring systems
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-warning text-warning-foreground mt-1">Graph</Badge>
                <div>
                  <h3 className="font-semibold">Transaction Graph Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Visual analysis of transaction flows and wallet connections
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Badge className="bg-danger text-danger-foreground mt-1">Alert</Badge>
                <div>
                  <h3 className="font-semibold">Real-time Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant notifications for suspicious activities and high-risk transactions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-muted text-muted-foreground mt-1">On-Chain</Badge>
                <div>
                  <h3 className="font-semibold">On-chain Registry</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent alert registry stored on U2U blockchain
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-accent text-accent-foreground mt-1">UI</Badge>
                <div>
                  <h3 className="font-semibold">Professional Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, modern interface for security teams and DeFi protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React", "TypeScript", "TailwindCSS", "U2U Blockchain",
              "Python", "Scikit-learn", "FastAPI", "PostgreSQL"
            ].map((tech) => (
              <div key={tech} className="p-3 bg-muted/50 rounded-lg text-center">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Links and Actions */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Links & Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              API Documentation
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              U2U Explorer
            </Button>
            <Button>
              <Shield className="mr-2 h-4 w-4" />
              Try Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}