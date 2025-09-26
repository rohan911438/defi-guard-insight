import {
  Shield,
  Zap,
  Target,
  Users,
  Github,
  ExternalLink,
  Network,
  Cpu,
  Brain,
  Lock,
  Radar,
  Activity,
  GitBranch,
  Layers,
  Bell,
  Rocket,
  BookOpen,
  Code2,
  Workflow,
  Timer,
  CheckCircle,
  FlaskConical,
  Globe2,
  LifeBuoy,
  Fingerprint,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// NOTE: This page is intentionally descriptive for hackathon / investor / contributor context.

export default function About() {
  return (
    <div className="space-y-8 pb-10">
      {/* Intro */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About GuardianAI</span>
          <Badge variant="secondary" className="bg-purple-500/15 text-purple-300">v0.1 Beta</Badge>
        </h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          GuardianAI is a real-time, AI-augmented security intelligence platform for decentralized finance. We combine deterministic heuristics, probabilistic anomaly modeling, graph intelligence and on-chain transparency to surface high-signal security alerts before damage compounds.
        </p>
      </div>

      {/* Mission & Vision */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Mission & Vision</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2 text-foreground"><Rocket className="h-4 w-4 text-primary" /> Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Provide credible, low-latency, explainable risk intelligence to DeFi users and protocol operators—reducing capital loss from exploits, manipulative trading, and fraud vectors while preserving user sovereignty.</p>
            <Separator className="my-2" />
            <h3 className="font-semibold flex items-center gap-2 text-foreground"><Globe2 className="h-4 w-4 text-primary" /> Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">An open, resilient Web3 security layer where threat knowledge is shared, alerts are composable primitives, and safety rails are integrated into every transaction workflow.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Zap, label: 'Sub‑Second Processing', value: '< 500ms' },
              { icon: Radar, label: 'Attack Pattern Library', value: '45+' },
              { icon: GitBranch, label: 'Graph Entities', value: '50M+' },
              { icon: Activity, label: 'Daily Events Scanned', value: '2.5M+' },
            ].map(stat => (
              <div key={stat.label} className="p-3 rounded-xl bg-accent/40 border border-border/50 flex flex-col items-start">
                <stat.icon className="h-5 w-5 text-primary mb-2" />
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</span>
                <span className="text-lg font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Problem & Solution */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Problem & Solution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2"><AlertCircle className="h-4 w-4 text-red-500" /> Core Challenges</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Fast-moving exploits (flash loans, oracle manipulations) execute in a single block.</li>
                <li>Noise-heavy dashboards overwhelm analysts with low-signal alerts and false positives.</li>
                <li>Attack attribution and fund flow tracing across chains is labor-intensive.</li>
                <li>Lack of standardized, immutable alert provenance.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" /> Our Approach</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Hybrid detection stack: heuristic filters + ML anomaly scoring + graph correlation.</li>
                <li>Explainable evidence bundles: each alert ships with rationale & context.</li>
                <li>On-chain AlertRegistry for transparent auditability.</li>
                <li>Composable API / WebSocket streams for protocol integration.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detection Pipeline */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Workflow className="h-5 w-5 text-primary" /> Detection Pipeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">Events flow through a multi-stage pipeline designed to progressively enrich, filter, and score activity. Each phase emits telemetry for observability and post‑incident forensics.</p>
          <div className="grid lg:grid-cols-5 gap-4">
            {[
              { icon: Network, title: 'Ingestion', desc: 'RPC + mempool + protocol adapters normalize raw events.' },
              { icon: Layers, title: 'Enrichment', desc: 'Token metadata, ABI decoding, price oracles, risk tags.' },
              { icon: Brain, title: 'ML Scoring', desc: 'Feature vectors & anomaly models produce risk scores.' },
              { icon: GitBranch, title: 'Graph Intel', desc: 'Entity clustering & fund flow traversal refine context.' },
              { icon: Bell, title: 'Alerting', desc: 'Confidence thresholds trigger signed, on-chain alerts.' },
            ].map(step => (
              <div key={step.title} className="relative p-4 rounded-xl bg-accent/40 border border-border/50">
                <step.icon className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold mb-1 text-sm">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Features (expanded) */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle>Key Capabilities</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              { badge: 'ML', title: 'Adaptive Machine Learning', desc: 'Model ensembles (tree + embedding + statistical baselines) retrained with incremental learning loops.' },
              { badge: 'GRAPH', title: 'Graph Intelligence', desc: 'Temporal multi-hop traversal for layering, laundering & coordination detection.' },
              { badge: 'EVIDENCE', title: 'Explainability Layer', desc: 'Each alert carries a structured JSON evidence object for analyst reproducibility.' },
              { badge: 'SDK', title: 'Developer Toolkit', desc: 'REST, WebSocket & (planned) on-chain subscription bridging for protocol automation.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1 text-[10px] tracking-wide">{item.badge}</Badge>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {[
              { badge: 'ON-CHAIN', title: 'Immutable Registry', desc: 'Signed alert proofs anchored to U2U chain for audit trails & trust minimization.' },
              { badge: 'UI', title: 'Operational Dashboard', desc: 'Incident triage, wallet analytics & transaction graph overlays in one surface.' },
              { badge: 'SCORING', title: 'Risk Stratification', desc: 'Multi-dimensional scoring (behavioral, temporal, relational) surfaced as composite severity.' },
              { badge: 'PERF', title: 'Low Latency', desc: 'Optimized feature extraction path & caching keeps median processing < 500ms.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1 text-[10px] tracking-wide">{item.badge}</Badge>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architecture Overview */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5 text-primary" /> System Architecture</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">GuardianAI is modular. Each subsystem can evolve independently, enabling protocol-specific tuning while preserving a unified alert model.</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Frontend', lines: ['React + TypeScript UI', 'Real-time streams', 'Graph visualization'] },
              { icon: Brain, title: 'Detection Engine', lines: ['Heuristics layer', 'ML scoring services', 'Feature pipelines'] },
              { icon: GitBranch, title: 'Graph Layer', lines: ['Entity clustering', 'Temporal flows', 'Risk propagation'] },
              { icon: Lock, title: 'Trust Layer', lines: ['On-chain anchoring', 'Signature verification', 'Audit evidence'] },
            ].map(box => (
              <div key={box.title} className="p-4 rounded-xl bg-accent/40 border border-border/50">
                <box.icon className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">{box.title}</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  {box.lines.map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security & Privacy Principles */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Fingerprint className="h-5 w-5 text-primary" /> Security & Privacy Principles</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-5 space-y-2 text-xs text-muted-foreground">
            <li>Minimal data retention: derived analytics only, no raw private wallet metadata.</li>
            <li>Deterministic alert hashing for reproducible investigative trails.</li>
            <li>Isolation boundaries between enrichment and inference services.</li>
            <li>Progressive disclosure—only relevant context is surfaced to analysts.</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2 text-xs text-muted-foreground">
            <li>Configurable thresholding per protocol risk appetite.</li>
            <li>Model version tagging & rollback paths.</li>
            <li>Immutable alert payload signing & chain anchoring roadmap.</li>
            <li>Future: zero-knowledge attestations for privacy-preserving scoring.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Timer className="h-5 w-5 text-primary" /> Roadmap (Indicative)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { phase: 'Phase 1', label: 'MVP Detection Core', status: 'Complete', color: 'text-emerald-400', items: ['Heuristics & basic ML', 'Wallet connect UX', 'Alert feed & graph'] },
              { phase: 'Phase 2', label: 'Expanded Intelligence', status: 'In Progress', color: 'text-amber-400', items: ['Advanced clustering', 'Confidence calibration', 'On-chain anchoring prototype'] },
              { phase: 'Phase 3', label: 'Ecosystem Integration', status: 'Planned', color: 'text-slate-400', items: ['SDK packages', 'Partner protocol adapters', 'ZK risk attestations'] },
            ].map(col => (
              <div key={col.phase} className="p-4 rounded-xl bg-accent/40 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-xs uppercase tracking-wide">{col.phase}</span>
                  <span className={`text-[11px] ${col.color}`}>{col.status}</span>
                </div>
                <p className="text-xs mb-2 text-muted-foreground font-medium">{col.label}</p>
                <ul className="text-[11px] space-y-1 text-muted-foreground">
                  {col.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><Code2 className="h-5 w-5 text-primary" /> Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {['React','TypeScript','TailwindCSS','Vite','U2U Network','FastAPI','Python','Scikit-learn','PostgreSQL','WebSockets','Graph Analytics','Docker'].map(t => (
              <div key={t} className="p-3 rounded-lg bg-muted/40 text-center border border-border/40 font-medium">{t}</div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contribution & Community */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Contributing & Community</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground leading-relaxed">GuardianAI embraces open collaboration. We welcome pull requests for new detection modules, feature extraction improvements, visualization enhancements, and dataset curation contributions.</p>
            <ul className="list-disc pl-5 text-xs space-y-1 text-muted-foreground">
              <li>Submit PRs with unit + regression tests where applicable.</li>
              <li>Open issues with clear reproduction steps & impact narrative.</li>
              <li>Security-sensitive disclosures: use private channel (planned security@ alias).</li>
              <li>Model fairness & bias: include evaluation metrics when proposing new classifiers.</li>
            </ul>
        </CardContent>
      </Card>

      {/* Links and Actions */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2"><LifeBuoy className="h-5 w-5 text-primary" /> Resources & Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> API (Coming Soon)
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> Alert Registry
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> U2U Explorer
            </Button>
            <Button size="sm">
              <Shield className="mr-2 h-4 w-4" /> Launch Demo
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-[11px] text-muted-foreground text-center pt-4">
        Disclaimer: All risk scores are probabilistic assessments. Always perform independent due diligence before executing high-value transactions.
      </p>
    </div>
  );
}