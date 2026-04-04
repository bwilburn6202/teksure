/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Database, FileText, Pencil, RefreshCw, Sparkles, Trash2, TriangleAlert } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { extractDocumentFile } from '@/lib/documentExtraction';

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
  manualSources: number;
}

interface OutputRow {
  id: string;
  title: string;
  output_type: 'answer' | 'deck' | 'report';
  markdown: string;
  source_document_ids?: string[];
  created_at: string;
}

interface ManualSourceRow {
  id: string;
  title: string;
  source_type: 'manual' | 'upload';
  original_filename: string | null;
  source_url: string | null;
  content: string;
  created_at: string;
}

interface DocumentRow {
  id: string;
  title: string;
  source_url: string;
  summary: string;
  keywords: string[];
  markdown: string;
  updated_at: string;
}

interface ConceptRow {
  id: string;
  title: string;
  summary: string;
  markdown: string;
  source_document_ids: string[];
  updated_at: string;
}

export default function KnowledgeBase() {
  const [health, setHealth] = useState<HealthState | null>(null);
  const [counts, setCounts] = useState<CountsState>({ documents: 0, concepts: 0, outputs: 0, manualSources: 0 });
  const [recentOutputs, setRecentOutputs] = useState<OutputRow[]>([]);
  const [manualSources, setManualSources] = useState<ManualSourceRow[]>([]);
  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [concepts, setConcepts] = useState<ConceptRow[]>([]);
  const [question, setQuestion] = useState('What themes are emerging across the latest sources?');
  const [runningCompile, setRunningCompile] = useState(false);
  const [runningAnswer, setRunningAnswer] = useState(false);
  const [runningDeck, setRunningDeck] = useState(false);
  const [latestAnswer, setLatestAnswer] = useState('');
  const [latestDeck, setLatestDeck] = useState('');
  const [compileLimit, setCompileLimit] = useState('8');
  const [manualTitle, setManualTitle] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  const [manualContent, setManualContent] = useState('');
  const [uploading, setUploading] = useState(false);
  const [editingSourceId, setEditingSourceId] = useState<string | null>(null);
  const [deletingSourceId, setDeletingSourceId] = useState<string | null>(null);
  const [documentQuery, setDocumentQuery] = useState('');
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);
  const [selectedOutputId, setSelectedOutputId] = useState<string | null>(null);

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
    const [{ count: documents }, { count: concepts }, { count: outputs }, { count: manualSources }, { data: outputRows }, { data: manualRows }, { data: documentRows }, { data: conceptRows }] = await Promise.all([
      supabase.from('knowledge_documents' as any).select('*', { head: true, count: 'exact' }),
      supabase.from('knowledge_concepts' as any).select('*', { head: true, count: 'exact' }),
      supabase.from('knowledge_outputs' as any).select('id', { head: true, count: 'exact' }),
      supabase.from('knowledge_manual_sources' as any).select('*', { head: true, count: 'exact' }),
      supabase
        .from('knowledge_outputs' as any)
        .select('id, title, output_type, markdown, source_document_ids, created_at')
        .order('created_at', { ascending: false })
        .limit(6),
      supabase
        .from('knowledge_manual_sources' as any)
        .select('id, title, source_type, original_filename, source_url, content, created_at')
        .order('created_at', { ascending: false })
        .limit(8),
      supabase
        .from('knowledge_documents' as any)
        .select('id, title, source_url, summary, keywords, markdown, updated_at')
        .order('updated_at', { ascending: false })
        .limit(24),
      supabase
        .from('knowledge_concepts' as any)
        .select('id, title, summary, markdown, source_document_ids, updated_at')
        .order('updated_at', { ascending: false })
        .limit(24),
    ]);

    setCounts({
      documents: documents ?? 0,
      concepts: concepts ?? 0,
      outputs: outputs ?? 0,
      manualSources: manualSources ?? 0,
    });
    setRecentOutputs((outputRows ?? []) as OutputRow[]);
    setManualSources((manualRows ?? []) as ManualSourceRow[]);
    setDocuments((documentRows ?? []) as DocumentRow[]);
    setConcepts((conceptRows ?? []) as ConceptRow[]);
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

  const saveManualSource = async (payload: {
    title: string;
    content: string;
    sourceUrl?: string;
    sourceType: 'manual' | 'upload';
    originalFilename?: string;
  }) => {
    const { data: authData } = await supabase.auth.getUser();
    const operation = editingSourceId
      ? supabase
          .from('knowledge_manual_sources' as any)
          .update({
            title: payload.title,
            source_type: payload.sourceType,
            original_filename: payload.originalFilename ?? null,
            source_url: payload.sourceUrl || null,
            content: payload.content,
          })
          .eq('id', editingSourceId)
      : supabase.from('knowledge_manual_sources' as any).insert({
          title: payload.title,
          source_type: payload.sourceType,
          original_filename: payload.originalFilename ?? null,
          source_url: payload.sourceUrl || null,
          content: payload.content,
          created_by: authData.user?.id ?? null,
        });

    const { error } = await operation;

    if (error) {
      throw error;
    }
  };

  const submitManualSource = async () => {
    if (!manualTitle.trim() || !manualContent.trim()) {
      toast.error('Title and content are required.');
      return;
    }

    setUploading(true);
    try {
      await saveManualSource({
        title: manualTitle.trim(),
        content: manualContent.trim(),
        sourceUrl: manualUrl.trim() || undefined,
        sourceType: 'manual',
      });
      setEditingSourceId(null);
      setManualTitle('');
      setManualUrl('');
      setManualContent('');
      toast.success(editingSourceId ? 'Manual source updated.' : 'Manual source saved.');
      await loadData();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save manual source.');
    } finally {
      setUploading(false);
    }
  };

  const startEditSource = (source: ManualSourceRow) => {
    setEditingSourceId(source.id);
    setManualTitle(source.title);
    setManualUrl(source.source_url ?? '');
    setManualContent(source.content);
  };

  const deleteSource = async (sourceId: string) => {
    setDeletingSourceId(sourceId);
    const { error } = await supabase.from('knowledge_manual_sources' as any).delete().eq('id', sourceId);
    setDeletingSourceId(null);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (editingSourceId === sourceId) {
      setEditingSourceId(null);
      setManualTitle('');
      setManualUrl('');
      setManualContent('');
    }
    toast.success('Manual source deleted.');
    await loadData();
  };

  const cancelEdit = () => {
    setEditingSourceId(null);
    setManualTitle('');
    setManualUrl('');
    setManualContent('');
  };

  const runDeck = async () => {
    if (!question.trim()) {
      toast.error('Enter a deck topic first.');
      return;
    }

    setRunningDeck(true);
    const { data, error } = await supabase.functions.invoke('knowledge-base-compile', {
      body: { mode: 'deck', question: question.trim() },
    });
    setRunningDeck(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setLatestDeck(data.output?.markdown ?? '');
    toast.success('Deck generated.');
    await loadData();
  };

  const filteredDocuments = documents.filter((document) => {
    const q = documentQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      document.title.toLowerCase().includes(q) ||
      document.summary.toLowerCase().includes(q) ||
      (document.keywords ?? []).some((keyword) => keyword.toLowerCase().includes(q))
    );
  });

  const selectedDocument = documents.find((document) => document.id === selectedDocumentId) ?? filteredDocuments[0] ?? null;
  const selectedConcept = concepts.find((concept) => concept.id === selectedConceptId) ?? concepts[0] ?? null;
  const selectedOutput = recentOutputs.find((output) => output.id === selectedOutputId) ?? recentOutputs[0] ?? null;

  const sourceDocumentMap = new Map(documents.map((document) => [document.id, document]));

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const extracted = await extractDocumentFile(file);
      if (!extracted.content.trim()) {
        throw new Error('No readable text was found in the uploaded file.');
      }
      await saveManualSource({
        title: extracted.title,
        content: extracted.content,
        sourceType: extracted.sourceType,
        originalFilename: extracted.originalFilename,
      });
      toast.success(`Imported ${file.name}.`);
      await loadData();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to import file.');
    } finally {
      setUploading(false);
      event.target.value = '';
    }
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

        <section className="grid gap-4 md:grid-cols-4">
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
          <Card className="rounded-2xl border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{counts.manualSources}</p>
                  <p className="text-sm text-muted-foreground">Manual sources</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Add Manual Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Import `.md`, `.txt`, `.pdf`, or `.docx`</label>
                <Input
                  type="file"
                  accept=".md,.txt,.pdf,.docx,text/markdown,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </div>
              <div className="grid gap-3">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input value={manualTitle} onChange={(event) => setManualTitle(event.target.value)} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Source URL</label>
                  <Input value={manualUrl} onChange={(event) => setManualUrl(event.target.value)} className="mt-1" placeholder="Optional" />
                </div>
                <div>
                  <label className="text-sm font-medium">Content</label>
                  <Textarea
                    value={manualContent}
                    onChange={(event) => setManualContent(event.target.value)}
                    rows={8}
                    className="mt-1"
                    placeholder="Paste markdown, notes, article text, or research excerpts."
                  />
                </div>
                <Button onClick={submitManualSource} disabled={uploading}>
                  {uploading ? 'Saving...' : editingSourceId ? 'Update Manual Source' : 'Save Manual Source'}
                </Button>
                {editingSourceId && (
                  <Button variant="outline" onClick={cancelEdit} disabled={uploading}>
                    Cancel Edit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Compile From Scraped Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Builds source summaries and concept pages from the latest accepted scraped articles and manual sources.
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
                placeholder="Ask a synthesis question or enter a deck topic across the compiled source set."
              />
              <div className="flex flex-wrap gap-3">
                <Button disabled={!health?.available || runningAnswer} onClick={runAnswer}>
                  {runningAnswer ? 'Generating...' : 'Generate Answer'}
                </Button>
                <Button variant="outline" disabled={!health?.available || runningDeck} onClick={runDeck}>
                  {runningDeck ? 'Building Deck...' : 'Generate Deck'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Manual Source Library</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {manualSources.length === 0 ? (
                <p className="text-sm text-muted-foreground">No manual sources yet.</p>
              ) : manualSources.map((source) => (
                <div key={source.id} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{source.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {source.source_type === 'upload' ? 'Upload' : 'Manual'} · {new Date(source.created_at).toLocaleString()}
                      </p>
                      {source.original_filename && (
                        <p className="text-xs text-muted-foreground mt-1">File: {source.original_filename}</p>
                      )}
                      {source.source_url && (
                        <a href={source.source_url} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">
                          {source.source_url}
                        </a>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => startEditSource(source)}>
                        <Pencil className="h-4 w-4 mr-1.5" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => void deleteSource(source.id)}
                        disabled={deletingSourceId === source.id}
                      >
                        <Trash2 className="h-4 w-4 mr-1.5" />
                        {deletingSourceId === source.id ? 'Deleting...' : 'Delete'}
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-4">{source.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>

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
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Compiled Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={documentQuery}
                onChange={(event) => setDocumentQuery(event.target.value)}
                placeholder="Search compiled documents"
              />
              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {filteredDocuments.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No compiled documents match the current filter.</p>
                ) : filteredDocuments.map((document) => (
                  <button
                    key={document.id}
                    onClick={() => setSelectedDocumentId(document.id)}
                    className={`w-full text-left rounded-xl border p-4 transition-colors ${
                      selectedDocument?.id === document.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/40'
                    }`}
                  >
                    <p className="font-medium">{document.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{new Date(document.updated_at).toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{document.summary}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Document Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDocument ? (
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-lg">{selectedDocument.title}</p>
                    <a href={selectedDocument.source_url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline break-all">
                      {selectedDocument.source_url}
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(selectedDocument.keywords ?? []).map((keyword) => (
                      <Badge key={keyword} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                  <pre className="whitespace-pre-wrap text-sm leading-6 rounded-xl bg-muted/40 border p-4 overflow-x-auto max-h-[520px] overflow-y-auto">
                    {selectedDocument.markdown}
                  </pre>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Compile the knowledge base to view document previews.</p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Concept Pages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {concepts.length === 0 ? (
                <p className="text-sm text-muted-foreground">No concept pages yet.</p>
              ) : concepts.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConceptId(concept.id)}
                  className={`w-full text-left rounded-xl border p-4 transition-colors ${
                    selectedConcept?.id === concept.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/40'
                  }`}
                >
                  <p className="font-medium">{concept.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{new Date(concept.updated_at).toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{concept.summary}</p>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Concept Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedConcept ? (
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-lg">{selectedConcept.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{selectedConcept.summary}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Linked source documents</p>
                    {selectedConcept.source_document_ids?.length ? selectedConcept.source_document_ids.map((sourceId) => {
                      const document = sourceDocumentMap.get(sourceId);
                      return (
                        <button
                          key={sourceId}
                          onClick={() => setSelectedDocumentId(sourceId)}
                          className="block text-left text-sm text-primary hover:underline"
                        >
                          {document?.title ?? sourceId}
                        </button>
                      );
                    }) : (
                      <p className="text-sm text-muted-foreground">No linked source documents.</p>
                    )}
                  </div>
                  <pre className="whitespace-pre-wrap text-sm leading-6 rounded-xl bg-muted/40 border p-4 overflow-x-auto max-h-[520px] overflow-y-auto">
                    {selectedConcept.markdown}
                  </pre>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No concept preview available yet.</p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Latest Generated Deck</CardTitle>
            </CardHeader>
            <CardContent>
              {latestDeck ? (
                <pre className="whitespace-pre-wrap text-sm leading-6 rounded-xl bg-muted/40 border p-4 overflow-x-auto">
                  {latestDeck}
                </pre>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No deck generated in this session yet.
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
                <button
                  key={output.id}
                  onClick={() => setSelectedOutputId(output.id)}
                  className={`w-full text-left rounded-xl border p-4 transition-colors ${
                    selectedOutput?.id === output.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{output.title}</p>
                    <Badge variant="secondary">{output.output_type}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(output.created_at).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-4">
                    {output.markdown}
                  </p>
                </button>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-2xl border border-border">
            <CardHeader>
              <CardTitle>Selected Output</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedOutput ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-lg">{selectedOutput.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{new Date(selectedOutput.created_at).toLocaleString()}</p>
                    </div>
                    <Badge variant="secondary">{selectedOutput.output_type}</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Source documents used</p>
                    {selectedOutput.source_document_ids?.length ? selectedOutput.source_document_ids.map((sourceId) => {
                      const document = sourceDocumentMap.get(sourceId);
                      return (
                        <button
                          key={sourceId}
                          onClick={() => setSelectedDocumentId(sourceId)}
                          className="block text-left text-sm text-primary hover:underline"
                        >
                          {document?.title ?? sourceId}
                        </button>
                      );
                    }) : (
                      <p className="text-sm text-muted-foreground">No source-document links were recorded.</p>
                    )}
                  </div>
                  <pre className="whitespace-pre-wrap text-sm leading-6 rounded-xl bg-muted/40 border p-4 overflow-x-auto max-h-[560px] overflow-y-auto">
                    {selectedOutput.markdown}
                  </pre>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Generate or select an output to inspect it in full.</p>
              )}
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
