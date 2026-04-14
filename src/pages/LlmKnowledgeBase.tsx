import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, BrainCircuit, BookOpenCheck, Search, Sparkles, ArrowRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const pipeline = [
  {
    icon: Database,
    title: 'Ingest & normalize sources',
    summary: 'Capture papers, websites, repos, datasets, and images into a structured raw/ folder with metadata and source links.',
  },
  {
    icon: BrainCircuit,
    title: 'Compile a wiki with an LLM',
    summary: 'Generate canonical markdown articles, backlinks, concept pages, and index files so the knowledge base stays navigable as it grows.',
  },
  {
    icon: Search,
    title: 'Query + synthesis engine',
    summary: 'Answer complex research questions by reading the right subset of docs and writing outputs as markdown, slides, or charts.',
  },
  {
    icon: BookOpenCheck,
    title: 'Continuous health checks',
    summary: 'Run lint passes to spot stale facts, missing citations, weak links, and opportunities for new articles.',
  },
];

const phases = [
  {
    phase: 'Phase 1 (2–3 weeks)',
    deliverables: [
      'Workspace scaffolding: raw/, wiki/, outputs/, and index manifests',
      'Source ingest adapters (URL, PDF, markdown, GitHub repo snapshots)',
      'First-pass wiki compiler with backlink + taxonomy generation',
    ],
  },
  {
    phase: 'Phase 2 (2–4 weeks)',
    deliverables: [
      'Agent tools for Q&A, report generation, and slide exports (Marp)',
      'Automated integrity checks: duplicate claims, missing fields, stale pages',
      'Search CLI + lightweight web endpoint for structured retrieval',
    ],
  },
  {
    phase: 'Phase 3 (ongoing)',
    deliverables: [
      'Editorial workflows: approve/reject model edits and keep changelogs',
      'Synthetic-data experiments for niche domain finetuning',
      'Analytics for source coverage, trust score, and knowledge drift',
    ],
  },
];

export default function LlmKnowledgeBase() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="LLM Knowledge Base Platform | TekSure"
        description="Turn raw research data into a living markdown knowledge base with AI-driven compilation, QA, and continuous health checks."
        path="/llm-knowledge-base"
      />
      <Navbar />

      <main className="flex-1">
        <section className="container py-14 md:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">New: Research OS Blueprint</Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Build your LLM Knowledge Base directly in TekSure
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              A productized version of your workflow: ingest raw documents, compile a connected markdown wiki,
              run agentic Q&A, and continuously improve data quality — all while keeping the outputs Obsidian-friendly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/book">Plan My Implementation <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/roadmap">View Product Roadmap</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container pb-14">
          <div className="grid md:grid-cols-2 gap-4">
            {pipeline.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="rounded-2xl border-border/70">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-primary">
                      <Icon className="h-5 w-5" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.summary}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="container pb-16">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Wrench className="h-5 w-5" /> Implementation phases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {phases.map((phase) => (
                <div key={phase.phase}>
                  <h2 className="font-semibold text-foreground mb-2">{phase.phase}</h2>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {phase.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="container pb-20">
          <Card className="rounded-2xl bg-primary text-primary-foreground border-primary/40">
            <CardContent className="py-10 md:py-12 text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">From script pile to real product</h2>
              <p className="max-w-2xl mx-auto text-primary-foreground/90 mb-6">
                TekSure can ship this as a cohesive platform: unified ingest, structured wiki compilation,
                agent tooling, and trustworthy governance for long-term research knowledge.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/get-help">Start with a technical scoping session</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
