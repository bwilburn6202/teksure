/**
 * /admin/content — Content Pipeline Dashboard
 *
 * Shows the full content processing pipeline:
 *   pending → scraped (categorized) → simplified → published
 *
 * Admins can manually approve (scraped → simplified) or reject any article.
 * Access: ProtectedRoute allowedRoles={['admin']}
 */

import { useEffect, useState, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {
  Clock, CheckCircle, XCircle, BarChart2, RefreshCw, Zap,
  FileText, AlertTriangle, Star,
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// ─── Types ────────────────────────────────────────────────────────────────────

type ScrapeStatus = 'pending' | 'scraped' | 'simplified' | 'published' | 'rejected';

interface Article {
  id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  category: string | null;
  tags: string[] | null;
  scrape_status: ScrapeStatus;
  quality_score: number | null;
  scraped_at: string;
  source: { name: string; domain: string } | null;
}

interface PipelineCounts {
  pending: number;
  scraped: number;
  simplified: number;
  published: number;
  rejected: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<ScrapeStatus, { label: string; color: string; dot: string }> = {
  pending:    { label: 'Pending',    color: 'bg-amber-100 text-amber-700 border-amber-200',  dot: 'bg-amber-500' },
  scraped:    { label: 'Categorized', color: 'bg-blue-100 text-blue-700 border-blue-200',   dot: 'bg-blue-500' },
  simplified: { label: 'Simplified', color: 'bg-purple-100 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
  published:  { label: 'Published',  color: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500' },
  rejected:   { label: 'Rejected',   color: 'bg-red-100 text-red-500 border-red-200',       dot: 'bg-red-400' },
};

function QualityBar({ score }: { score: number | null }) {
  if (score === null) return <span className="text-muted-foreground text-xs">—</span>;
  const pct = Math.round(score * 100);
  const color =
    pct >= 70 ? 'bg-green-500' :
    pct >= 40 ? 'bg-amber-500' :
                'bg-red-400';
  return (
    <div className="flex items-center gap-2 min-w-[80px]">
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-muted-foreground tabular-nums">{pct}%</span>
    </div>
  );
}

function StatusBadge({ status }: { status: ScrapeStatus }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

function truncate(str: string, max: number) {
  return str.length > max ? str.slice(0, max) + '…' : str;
}

// ─── Pipeline stat card ───────────────────────────────────────────────────────

function StatCard({
  label, value, icon: Icon, color,
}: {
  label: string; value: number; icon: typeof Clock; color: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-5">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-2xl font-bold tabular-nums">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ContentPipeline() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [counts, setCounts] = useState<PipelineCounts>({
    pending: 0, scraped: 0, simplified: 0, published: 0, rejected: 0,
  });
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ScrapeStatus | 'all'>('all');

  // ── Fetch data ──────────────────────────────────────────────────────────────

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await (supabase as any)
        .from('scraped_articles')
        .select(`
          id, original_url, original_title, original_content,
          category, tags, scrape_status, quality_score, scraped_at,
          source:source_id ( name, domain )
        `)
        .order('scraped_at', { ascending: false })
        .limit(200);

      if (error) throw error;

      const rows = (data ?? []) as Article[];
      setArticles(rows);

      const c: PipelineCounts = { pending: 0, scraped: 0, simplified: 0, published: 0, rejected: 0 };
      rows.forEach(a => { if (a.scrape_status in c) c[a.scrape_status as ScrapeStatus]++; });
      setCounts(c);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load articles');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  // ── Update status ───────────────────────────────────────────────────────────

  const updateStatus = async (id: string, status: ScrapeStatus) => {
    setUpdatingId(id);
    const { error } = await (supabase as any)
      .from('scraped_articles')
      .update({ scrape_status: status })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update status');
    } else {
      setArticles(prev =>
        prev.map(a => a.id === id ? { ...a, scrape_status: status } : a),
      );
      // Recompute counts locally
      setCounts(prev => {
        const original = articles.find(a => a.id === id)?.scrape_status as ScrapeStatus;
        if (!original) return prev;
        return {
          ...prev,
          [original]: Math.max(0, prev[original] - 1),
          [status]: prev[status] + 1,
        };
      });
      toast.success(`Marked as ${STATUS_CONFIG[status].label}`);
    }
    setUpdatingId(null);
  };

  // ── Trigger edge function ───────────────────────────────────────────────────

  const runPipeline = async () => {
    setRunning(true);
    try {
      const { error } = await supabase.functions.invoke('categorize-and-dedup');
      if (error) throw error;
      toast.success('Pipeline run complete — refreshing…');
      await fetchArticles();
    } catch (err) {
      console.error(err);
      toast.error('Pipeline run failed — check edge function logs');
    } finally {
      setRunning(false);
    }
  };

  // ── Filtered articles ───────────────────────────────────────────────────────

  const filtered = activeTab === 'all'
    ? articles
    : articles.filter(a => a.scrape_status === activeTab);

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main id="main-content" className="flex-1 container mx-auto px-4 py-8 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Content Pipeline</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage scraped articles from auto-categorization through to publication.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchArticles} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm" onClick={runPipeline} disabled={running}>
              <Zap className="h-4 w-4 mr-1.5" />
              {running ? 'Running…' : 'Run Pipeline'}
            </Button>
          </div>
        </div>

        {/* Pipeline overview */}
        <section aria-label="Pipeline overview" className="mb-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Pipeline Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <StatCard label="Pending"    value={counts.pending}    icon={Clock}       color="bg-amber-100 text-amber-600" />
            <StatCard label="Categorized" value={counts.scraped}   icon={BarChart2}   color="bg-blue-100 text-blue-600" />
            <StatCard label="Simplified" value={counts.simplified} icon={FileText}    color="bg-purple-100 text-purple-600" />
            <StatCard label="Published"  value={counts.published}  icon={CheckCircle} color="bg-green-100 text-green-600" />
            <StatCard label="Rejected"   value={counts.rejected}   icon={XCircle}     color="bg-red-100 text-red-500" />
          </div>
        </section>

        {/* Articles table */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-base">Recent Articles</CardTitle>
          </CardHeader>

          <CardContent className="pt-4">
            <Tabs value={activeTab} onValueChange={v => setActiveTab(v as ScrapeStatus | 'all')}>
              <TabsList className="mb-4 flex-wrap h-auto gap-1">
                <TabsTrigger value="all">All ({articles.length})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
                <TabsTrigger value="scraped">Categorized ({counts.scraped})</TabsTrigger>
                <TabsTrigger value="simplified">Simplified ({counts.simplified})</TabsTrigger>
                <TabsTrigger value="published">Published ({counts.published})</TabsTrigger>
                <TabsTrigger value="rejected">Rejected ({counts.rejected})</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                {loading ? (
                  <div className="flex items-center justify-center py-16 text-muted-foreground">
                    <RefreshCw className="h-5 w-5 animate-spin mr-2" />
                    Loading articles…
                  </div>
                ) : filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground gap-2">
                    <AlertTriangle className="h-8 w-8 opacity-30" />
                    <p className="text-sm">No articles in this stage yet.</p>
                    {activeTab === 'pending' && (
                      <p className="text-xs">Articles appear here after the scraper runs.</p>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/40">
                          <TableHead className="min-w-[260px]">Title</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" /> Quality
                            </span>
                          </TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map(article => (
                          <TableRow key={article.id} className="group">
                            {/* Title */}
                            <TableCell className="align-top py-3">
                              <a
                                href={article.original_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-sm hover:text-primary hover:underline line-clamp-2 leading-snug"
                                title={article.original_title}
                              >
                                {truncate(article.original_title, 90)}
                              </a>
                              {article.tags && article.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {article.tags.slice(0, 4).map(tag => (
                                    <Badge
                                      key={tag}
                                      variant="secondary"
                                      className="text-[10px] px-1.5 py-0 h-4"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </TableCell>

                            {/* Source */}
                            <TableCell className="align-top py-3 text-sm text-muted-foreground whitespace-nowrap">
                              {article.source?.name ?? '—'}
                            </TableCell>

                            {/* Category */}
                            <TableCell className="align-top py-3 text-sm whitespace-nowrap">
                              {article.category ?? <span className="text-muted-foreground">—</span>}
                            </TableCell>

                            {/* Quality */}
                            <TableCell className="align-top py-3">
                              <QualityBar score={article.quality_score} />
                            </TableCell>

                            {/* Status */}
                            <TableCell className="align-top py-3">
                              <StatusBadge status={article.scrape_status} />
                            </TableCell>

                            {/* Date */}
                            <TableCell className="align-top py-3 text-xs text-muted-foreground whitespace-nowrap">
                              {formatDate(article.scraped_at)}
                            </TableCell>

                            {/* Actions */}
                            <TableCell className="align-top py-3 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {article.scrape_status !== 'published' &&
                                 article.scrape_status !== 'rejected' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs text-green-600 border-green-200 hover:bg-green-50"
                                    disabled={updatingId === article.id}
                                    onClick={() => updateStatus(
                                      article.id,
                                      article.scrape_status === 'scraped' ? 'simplified' : 'published',
                                    )}
                                  >
                                    <CheckCircle className="h-3.5 w-3.5 mr-1" />
                                    {article.scrape_status === 'scraped'    ? 'Approve'  :
                                     article.scrape_status === 'simplified' ? 'Publish'  : 'Approve'}
                                  </Button>
                                )}
                                {article.scrape_status !== 'rejected' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs text-red-500 border-red-200 hover:bg-red-50"
                                    disabled={updatingId === article.id}
                                    onClick={() => updateStatus(article.id, 'rejected')}
                                  >
                                    <XCircle className="h-3.5 w-3.5 mr-1" />
                                    Reject
                                  </Button>
                                )}
                                {article.scrape_status === 'rejected' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs"
                                    disabled={updatingId === article.id}
                                    onClick={() => updateStatus(article.id, 'scraped')}
                                  >
                                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                                    Restore
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

      </main>

      <Footer />
    </div>
  );
}
