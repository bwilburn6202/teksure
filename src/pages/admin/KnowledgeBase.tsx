/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Database, FileText, RefreshCw, Sparkles, TriangleAlert } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface HealthState {
  available: boolean;
  model: string;
  message: string;
  baseUrl: string;
}

interface CountsState {
  documents: number;
  concepts: number;
  outputs: number;
}

interface OutputRow {
  id: string;
  title: string;
  markdown: string;
  created_at: string;
}

export default function KnowledgeBase() {
  const [health, setHealth] = useState<HealthState | null>(null);
  const [counts, setCounts] = useState<CountsState>({ documents: 0, concepts: 0, outputs: 0 });
  const [recentOutputs, setRecentOutputs] = useState<OutputRow[]>([]);
  const [question, setQuestion] = useState('What themes are emerging across the latest sources?');
  const [runningCompile, setRunningCompile] = useState(false);
  const [runningAnswer, setRunningAnswer] = useState(false);
  const [latestAnswer, setLatestAnswer] = useState('');
  const [compileLimit, setCompileLimit] = useState('8');

  const loadHealth = useCallback(async () => {
    const { data, error } = await supabase.functions.invoke('ollama-health');
    if (error) {
      setHealth({
        available: false,
        model: 'unknown',
        message: error.message,
        baseUrl: 'unknown',
      });
      return;
    }
    setHealth(data as HealthState);
  }, []);

  const loadData = useCallback(async () => {
    const [{ count: documents }, { count: concepts }, { count: outputs }, { data: outputRows }] = await Promise.all([
      supabase.from('knowledge_documents' as any).select('*', { head: true, count: 'exact' }),
      supabase.from('knowledge_concepts' as any).select('*', { head: true, count: 'exact' }),
      supabase.from('knowledge_outputs' as any).select('id', { head: true, count: 'exact' }),
      supabase
        .from('knowledge_outputs' as any)
        .select('id, title, markdown, created_at')
        .order('created_at', { ascending: false })
        .limit(5),
    ]);

    setCounts({
      documents: documents ?? 0,
      concepts: concepts ?? 0,
      outputs: outputs ?? 0,
    });
    setRecentOutputs((outputRows ?? []) as OutputRow[]);
  }, []);

  useEffect(() => {
    void loadHealth();
    void loadData();
  }, [loadData, loadHealth]);

  const runCompile = async () => {
    setRunningCompile(true);
    const limit = Number(compileLimit) || 8;
    const { data, error } = await supabase.functions.invoke('knowledge-base-compile', {
      body: { mode: 'compile', limit },
    });
    setRunningCompile(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(`Compiled ${data.compiledDocuments} documents and ${data.compiledConcepts} concepts.`);
    await loadData();
    await loadHealth();
  };

  const runAnswer = async () => {
    if (!question.trim()) {
      toast.error('Enter a question first.');
      return;
    }

    setRunningAnswer(true);
    const { data, error } = await supabase.functions.invoke('knowledge-base-compile', {
      body: { mode: 'answer', question: question.trim() },
    });
    setRunningAnswer(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setLatestAnswer(data.output?.markdown ?? '');
    toast.success('Answer generated.');
    await loadData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main id="main-content" className="flex-1 container mx-auto px-4 py-8 max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Knowledge Base</h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              Admin-only workspace for compiling scraped content into markdown knowledge pages and answer artifacts using a local Ollama runtime.
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/admin">Admin Console</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/admin/content">Content Pipeline</Link>
            </Button>
          </div>
        </div>

        <Card className="rounded-2xl border border-border">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Ollama Runtime
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Production stays visible even when generation is unavailable.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => void loadHealth()}>
              <RefreshCw className="h-4 w-4 mr-1.5" />
              Refresh
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant={health?.available ? 'default' : 'secondary'}>
                  {health?.available ? 'Available' : 'Unavailable'}
                </Badge>
                <span className="text-sm text-muted-foreground">{health?.model ?? 'unknown model'}</span>
              </div>
              <p className="text-sm text-muted-foreground">{health?.message ?? 'Checking local runtime...'}</p>
              <p className="text-xs text-muted-foreground">Endpoint: {health?.baseUrl ?? 'unknown'}</p>
            </div>
            {!health?.available && (
              <div className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-muted-foreground max-w-md">
                <TriangleAlert className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                Generation is disabled until the configured Ollama model is reachable.
              </div>
            )}
          </CardContent>
        </Card>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{counts.documents}</p>
                  <p className="text-sm text-muted-foreground">Compiled documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{counts.concepts}</p>
                  <p className="text-sm text-muted-foreground">Concept pages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{counts.outputs}</p>
                  <p className="text-sm text-muted-foreground">Answer artifacts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Compile From Scraped Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Builds source summaries and concept pages from the latest accepted scraped articles.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="w-full sm:max-w-[180px]">
                  <label className="text-sm font-medium">Article batch size</label>
                  <Input
                    type="number"
                    min="1"
                    max="20"
                    value={compileLimit}
                    onChange={(event) => setCompileLimit(event.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button disabled={!health?.available || runningCompile} onClick={runCompile}>
                  {runningCompile ? 'Compiling...' : 'Compile Knowledge Base'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Ask the Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                rows={4}
                placeholder="Ask a synthesis question across the compiled source set."
              />
              <Button disabled={!health?.available || runningAnswer} onClick={runAnswer}>
                {runningAnswer ? 'Generating...' : 'Generate Answer'}
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Latest Generated Answer</CardTitle>
            </CardHeader>
            <CardContent>
              {latestAnswer ? (
                <pre className="whitespace-pre-wrap text-sm leading-6 rounded-xl bg-muted/40 border p-4 overflow-x-auto">
                  {latestAnswer}
                </pre>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No answer generated in this session yet.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Recent Outputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentOutputs.length === 0 ? (
                <p className="text-sm text-muted-foreground">No outputs yet.</p>
              ) : recentOutputs.map((output) => (
                <div key={output.id} className="rounded-xl border p-4">
                  <p className="font-medium">{output.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(output.created_at).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-4">
                    {output.markdown}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
