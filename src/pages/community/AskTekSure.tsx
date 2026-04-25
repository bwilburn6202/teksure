import { useMemo, useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  MessageCircleQuestion,
  Search,
  ShieldAlert,
  Smartphone,
  Wifi,
  KeyRound,
  PlaySquare,
  HelpCircle,
  ThumbsUp,
  Loader2,
  Clock,
  Users,
  Lock,
  Sparkles,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type CommunityQuestion = {
  id: string;
  name: string | null;
  email: string | null;
  category: string;
  question: string;
  context: string | null;
  answer: string | null;
  answered_by: string | null;
  answered_at: string | null;
  status: 'pending' | 'answered' | 'hidden' | string;
  helpful_count: number;
  created_at: string;
};

// Category meta — icon + label used by filter + submission dialog.
const CATEGORIES = [
  { value: 'Safety',    label: 'Safety',    icon: ShieldAlert },
  { value: 'Devices',   label: 'Devices',   icon: Smartphone },
  { value: 'Internet',  label: 'Internet',  icon: Wifi },
  { value: 'Accounts',  label: 'Accounts',  icon: KeyRound },
  { value: 'Streaming', label: 'Streaming', icon: PlaySquare },
  { value: 'Other',     label: 'Other',     icon: HelpCircle },
] as const;

type CategoryValue = typeof CATEGORIES[number]['value'] | 'All';

const CATEGORY_STYLES: Record<string, string> = {
  Safety:    'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200',
  Devices:   'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
  Internet:  'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200',
  Accounts:  'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  Streaming: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
  Other:     'bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200',
};

// ─────────────────────────────────────────────────────────────────────────────
// Anonymous vote fingerprint — kept in localStorage so a single browser
// can only upvote a given question once. This isn't a real anti-abuse
// measure; it's a soft guard against accidental double-clicks.
// ─────────────────────────────────────────────────────────────────────────────

const FINGERPRINT_KEY = 'teksure-community-fingerprint';
const VOTED_KEY = 'teksure-community-voted';

function getFingerprint(): string {
  if (typeof window === 'undefined') return 'ssr';
  try {
    const existing = localStorage.getItem(FINGERPRINT_KEY);
    if (existing) return existing;
    const fresh =
      (typeof crypto !== 'undefined' && 'randomUUID' in crypto)
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(FINGERPRINT_KEY, fresh);
    return fresh;
  } catch {
    return 'unavailable';
  }
}

function getVotedSet(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(VOTED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed) : new Set();
  } catch {
    return new Set();
  }
}

function addToVotedSet(id: string) {
  if (typeof window === 'undefined') return;
  try {
    const set = getVotedSet();
    set.add(id);
    localStorage.setItem(VOTED_KEY, JSON.stringify(Array.from(set)));
  } catch {
    /* ignore */
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

function truncateTitle(q: string, n = 110): string {
  const cleaned = q.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= n) return cleaned;
  return cleaned.slice(0, n - 1) + '…';
}

const QUESTION_MAX = 500;

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function AskTekSure() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryValue>('All');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [votedSet, setVotedSet] = useState<Set<string>>(() => getVotedSet());

  // Fetch every visible question (DB filters out hidden).
  const { data: questions, isLoading, isError } = useQuery<CommunityQuestion[]>({
    queryKey: ['community-questions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('community_questions')
        .select('*')
        .neq('status', 'hidden')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []) as CommunityQuestion[];
    },
  });

  const answered = useMemo(
    () => (questions ?? []).filter((q) => q.status === 'answered' && q.answer),
    [questions],
  );
  const unanswered = useMemo(
    () => (questions ?? []).filter((q) => q.status !== 'answered' || !q.answer),
    [questions],
  );

  // Filter by search + category.
  const filter = (list: CommunityQuestion[]) => {
    const q = search.trim().toLowerCase();
    return list.filter((item) => {
      if (category !== 'All' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        (item.answer ?? '').toLowerCase().includes(q) ||
        (item.context ?? '').toLowerCase().includes(q) ||
        (item.category ?? '').toLowerCase().includes(q)
      );
    });
  };

  const filteredAnswered = useMemo(() => filter(answered), [answered, search, category]);
  const filteredUnanswered = useMemo(() => filter(unanswered), [unanswered, search, category]);

  // Popular-this-week = highest helpful_count among answered asked in last 7 days.
  const popularThisWeek = useMemo(() => {
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return [...answered]
      .filter((q) => new Date(q.created_at).getTime() >= weekAgo)
      .sort((a, b) => b.helpful_count - a.helpful_count)
      .slice(0, 5);
  }, [answered]);

  // Upvote mutation — calls the SECURITY DEFINER RPC added in the migration.
  const voteMutation = useMutation({
    mutationFn: async (questionId: string) => {
      const fingerprint = getFingerprint();
      const { data, error } = await supabase.rpc('community_question_upvote', {
        p_question_id: questionId,
        p_fingerprint: fingerprint,
      });
      if (error) throw error;
      return data as number;
    },
    onSuccess: (_newCount, questionId) => {
      addToVotedSet(questionId);
      setVotedSet(new Set(getVotedSet()));
      queryClient.invalidateQueries({ queryKey: ['community-questions'] });
    },
    onError: () => {
      toast({
        title: 'Could not save your vote',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Ask TekSure — Community Q&A"
        description="Got a tech question? A real person will answer, and everyone can learn from the thread. Browse answered questions or ask your own."
        path="/community/ask"
      />

      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 dark:from-teal-950/50 dark:via-cyan-950/40 dark:to-sky-950/40">
        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="absolute top-6 right-6">
            <BookmarkButton
              type="tool"
              slug="community-ask-teksure"
              title="Ask TekSure — Community Q&A"
              url="/community/ask"
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-teal-600 text-white shadow-md">
                <MessageCircleQuestion className="h-7 w-7" aria-hidden="true" />
              </div>
              <Badge className="bg-white/80 text-teal-900 hover:bg-white text-base px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                Community Q&amp;A
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
              Ask TekSure
              <span className="block text-teal-700 dark:text-teal-300 mt-2">
                Real answers, no jargon.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
              Got a tech question? A real person will answer, and everyone can
              learn from the thread.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 md:py-14" id="main-content">
        {/* ─── Top bar ──────────────────────────────────────────────────── */}
        <section className="mb-10" aria-label="Search and filter questions">
          <Card className="border-2 border-teal-200 dark:border-teal-900 bg-white dark:bg-slate-900 shadow-sm">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <AskQuestionDialog
                  open={dialogOpen}
                  onOpenChange={setDialogOpen}
                />

                <div className="flex-1 flex flex-col sm:flex-row gap-3">
                  <label className="relative flex-1 min-w-0">
                    <span className="sr-only">Search questions</span>
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
                      aria-hidden="true"
                    />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search answered questions…"
                      className="h-14 min-h-14 pl-11 text-base md:text-lg"
                    />
                  </label>

                  <div className="sm:w-56">
                    <label className="sr-only" htmlFor="category-filter">
                      Filter by category
                    </label>
                    <Select
                      value={category}
                      onValueChange={(v) => setCategory(v as CategoryValue)}
                    >
                      <SelectTrigger
                        id="category-filter"
                        className="h-14 min-h-14 text-base"
                      >
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All categories</SelectItem>
                        {CATEGORIES.map((c) => (
                          <SelectItem key={c.value} value={c.value}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          {/* ─── Main column ─────────────────────────────────────────── */}
          <div>
            <Tabs defaultValue="answered" className="mb-6">
              <TabsList className="grid w-full grid-cols-2 h-auto">
                <TabsTrigger
                  value="answered"
                  className="min-h-14 text-base font-semibold"
                >
                  Answered ({filteredAnswered.length})
                </TabsTrigger>
                <TabsTrigger
                  value="unanswered"
                  className="min-h-14 text-base font-semibold"
                >
                  Awaiting answer ({filteredUnanswered.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="answered" className="mt-6 space-y-4">
                {isLoading && <LoadingState label="Loading questions…" />}
                {isError && <ErrorState />}
                {!isLoading && !isError && filteredAnswered.length === 0 && (
                  <EmptyState
                    title="No answered questions match your filters"
                    body="Try clearing the search or picking a different category. Or be the first to ask a question in this space!"
                  />
                )}
                {filteredAnswered.map((q) => (
                  <AnsweredQuestionCard
                    key={q.id}
                    item={q}
                    hasVoted={votedSet.has(q.id)}
                    onVote={() => voteMutation.mutate(q.id)}
                    voting={voteMutation.isPending && voteMutation.variables === q.id}
                  />
                ))}
              </TabsContent>

              <TabsContent value="unanswered" className="mt-6 space-y-4">
                {isLoading && <LoadingState label="Loading open questions…" />}
                {isError && <ErrorState />}
                {!isLoading && !isError && filteredUnanswered.length === 0 && (
                  <EmptyState
                    title="Nothing waiting right now"
                    body="Every question has an answer. If yours isn't here, go ahead and ask."
                  />
                )}
                {filteredUnanswered.map((q) => (
                  <UnansweredQuestionCard key={q.id} item={q} />
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* ─── Sidebar ─────────────────────────────────────────────── */}
          <aside className="space-y-6" aria-label="Community sidebar">
            <Card className="border-teal-200 dark:border-teal-900">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <h2 className="text-lg font-bold">Popular this week</h2>
                </div>
                {popularThisWeek.length === 0 ? (
                  <p className="text-base text-muted-foreground">
                    New questions will show up here once the community starts
                    voting.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {popularThisWeek.map((q) => (
                      <li key={q.id} className="flex items-start gap-3">
                        <ThumbsUp
                          className="h-4 w-4 mt-1 text-teal-600 dark:text-teal-400 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className="text-base font-medium leading-snug">
                            {truncateTitle(q.question, 85)}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {q.helpful_count} found this helpful
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            <Card className="border-rose-200 dark:border-rose-900 bg-rose-50/60 dark:bg-rose-950/30">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                  <h2 className="text-lg font-bold">Community guidelines</h2>
                </div>
                <ul className="space-y-2.5 text-base">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Be kind. Everyone starts somewhere.</span>
                  </li>
                  <li className="flex gap-2">
                    <Lock className="h-5 w-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>No account numbers, passwords, or other personal info.</span>
                  </li>
                  <li className="flex gap-2">
                    <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Keep it on-topic: real questions about tech.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section className="mt-16 max-w-3xl mx-auto" aria-label="Frequently asked questions">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            About this Q&amp;A space, in plain English.
          </p>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <Card key={item.q} className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 flex items-start gap-2">
                    <HelpCircle
                      className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    {item.q}
                  </h3>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed pl-7">
                    {item.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function LoadingState({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center gap-3 py-12 text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
      <span className="text-base">{label}</span>
    </div>
  );
}

function ErrorState() {
  return (
    <Card className="border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-900">
      <CardContent className="p-6 text-center">
        <ShieldAlert className="h-8 w-8 mx-auto mb-3 text-rose-600 dark:text-rose-400" />
        <p className="text-lg font-semibold">We couldn't load questions right now.</p>
        <p className="text-base text-muted-foreground mt-1">
          Please refresh the page in a moment.
        </p>
      </CardContent>
    </Card>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <Card className="border-dashed border-2 border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40">
      <CardContent className="p-8 text-center">
        <MessageSquare className="h-10 w-10 mx-auto mb-3 text-slate-400" aria-hidden="true" />
        <p className="text-lg font-semibold mb-1">{title}</p>
        <p className="text-base text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Other;
  const meta = CATEGORIES.find((c) => c.value === category);
  const Icon = meta?.icon ?? HelpCircle;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${style}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {category}
    </span>
  );
}

function AnsweredQuestionCard({
  item,
  hasVoted,
  onVote,
  voting,
}: {
  item: CommunityQuestion;
  hasVoted: boolean;
  onVote: () => void;
  voting: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const askedBy = item.name?.trim() ? item.name : 'Anonymous';
  const answeredBy = item.answered_by?.trim() || 'TekSure Team';

  return (
    <Card className="border-slate-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-700 transition-colors">
      <CardContent className="p-5 md:p-6">
        <div className="flex items-start gap-3 mb-3">
          <CategoryBadge category={item.category} />
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground ml-auto">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Asked {formatDate(item.created_at)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`answer-${item.id}`}
          className="block w-full text-left min-h-14 py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded"
        >
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300">
            {item.question}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Asked by {askedBy}
            {' · '}
            <span className="underline">{expanded ? 'Hide answer' : 'Show answer'}</span>
          </p>
        </button>

        {expanded && (
          <div
            id={`answer-${item.id}`}
            className="mt-4 border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/60 dark:bg-teal-950/30 rounded-r"
          >
            {item.context && (
              <div className="mb-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  What they tried
                </p>
                <p className="text-base text-slate-700 dark:text-slate-200 mt-1 whitespace-pre-wrap">
                  {item.context}
                </p>
              </div>
            )}
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
              Answer
            </p>
            <p className="text-base md:text-lg text-slate-800 dark:text-slate-100 mt-1 leading-relaxed whitespace-pre-wrap">
              {item.answer}
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Answered by <span className="font-semibold">{answeredBy}</span>
              {item.answered_at ? ` · ${formatDate(item.answered_at)}` : ''}
            </p>
          </div>
        )}

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <Button
            type="button"
            variant={hasVoted ? 'default' : 'outline'}
            size="sm"
            onClick={onVote}
            disabled={hasVoted || voting}
            aria-pressed={hasVoted}
            className={`min-h-14 px-4 text-base ${
              hasVoted
                ? 'bg-teal-600 hover:bg-teal-700 text-white'
                : 'border-teal-400 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950'
            }`}
          >
            {voting ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
            ) : (
              <ThumbsUp className="h-4 w-4 mr-2" aria-hidden="true" />
            )}
            {hasVoted ? 'Thanks!' : 'This helped me'}
            <span className="ml-2 font-bold">({item.helpful_count})</span>
          </Button>
          <span className="text-sm text-muted-foreground">
            Comments coming soon
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function UnansweredQuestionCard({ item }: { item: CommunityQuestion }) {
  const askedBy = item.name?.trim() ? item.name : 'Anonymous';
  return (
    <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/40 dark:bg-amber-950/20">
      <CardContent className="p-5 md:p-6">
        <div className="flex items-start gap-3 mb-3 flex-wrap">
          <CategoryBadge category={item.category} />
          <Badge className="bg-amber-200 text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">
            <Clock className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            No answer yet
          </Badge>
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground ml-auto">
            Asked {formatDate(item.created_at)}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">
          {item.question}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">Asked by {askedBy}</p>
        {item.context && (
          <p className="mt-3 text-base text-slate-700 dark:text-slate-200 whitespace-pre-wrap">
            <span className="font-semibold">What they tried: </span>
            {item.context}
          </p>
        )}
        <p className="mt-4 text-sm text-muted-foreground italic">
          Community replies are coming soon. Know the answer? Email us and
          we'll credit you on the thread.
        </p>
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Submission Dialog
// ─────────────────────────────────────────────────────────────────────────────

function AskQuestionDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<string>('');
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setCategory('');
    setQuestion('');
    setContext('');
  };

  const submit = useMutation({
    mutationFn: async () => {
      const payload = {
        name: name.trim() || null,
        email: email.trim() || null,
        category,
        question: question.trim(),
        context: context.trim() || null,
        status: 'pending',
      };
      const { error } = await supabase.from('community_questions').insert(payload);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: 'Question received',
        description:
          'Thanks for asking. Most questions are answered within 48 hours.',
      });
      queryClient.invalidateQueries({ queryKey: ['community-questions'] });
      resetForm();
      onOpenChange(false);
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    },
  });

  const canSubmit =
    question.trim().length >= 10 &&
    question.trim().length <= QUESTION_MAX &&
    category.length > 0 &&
    !submit.isPending;

  const remaining = QUESTION_MAX - question.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="min-h-14 text-base md:text-lg font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20"
        >
          <MessageCircleQuestion className="h-5 w-5 mr-2" aria-hidden="true" />
          Ask a Question
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Ask the community</DialogTitle>
          <DialogDescription className="text-base">
            Our team (and vetted volunteers) will answer within 48 hours. Please
            don't include passwords, account numbers, or other personal details.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-5 mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (canSubmit) submit.mutate();
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-name" className="text-base font-semibold block mb-1">
                Your name <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <Input
                id="q-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Leave blank to post as Anonymous"
                className="h-12 min-h-14 text-base"
                maxLength={60}
              />
            </div>
            <div>
              <label htmlFor="q-email" className="text-base font-semibold block mb-1">
                Email <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <Input
                id="q-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="So we can email you the answer"
                className="h-12 min-h-14 text-base"
                maxLength={120}
              />
            </div>
          </div>

          <div>
            <label htmlFor="q-category" className="text-base font-semibold block mb-1">
              Category <span className="text-rose-600">*</span>
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="q-category" className="h-12 min-h-14 text-base">
                <SelectValue placeholder="Pick the closest match" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-1">
              <label htmlFor="q-question" className="text-base font-semibold">
                Your question <span className="text-rose-600">*</span>
              </label>
              <span
                className={`text-sm ${
                  remaining < 0 ? 'text-rose-600 font-semibold' : 'text-muted-foreground'
                }`}
                aria-live="polite"
              >
                {remaining} characters left
              </span>
            </div>
            <Textarea
              id="q-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value.slice(0, QUESTION_MAX))}
              placeholder="Ask in plain language. Example: My email suddenly stopped downloading on my iPhone — any ideas?"
              className="text-base md:text-lg min-h-[120px]"
              required
              aria-describedby="q-question-help"
            />
            <p id="q-question-help" className="text-sm text-muted-foreground mt-1">
              Up to {QUESTION_MAX} characters. The more specific, the better.
            </p>
          </div>

          <div>
            <label htmlFor="q-context" className="text-base font-semibold block mb-1">
              What have you tried? <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <Textarea
              id="q-context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Example: I tried restarting my phone and toggling airplane mode."
              className="text-base min-h-[80px]"
              maxLength={500}
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-2 flex-col sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="min-h-14 text-base w-full sm:w-auto"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!canSubmit}
              className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
            >
              {submit.isPending && (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
              )}
              Submit question
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ content
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'How long does it take to get an answer?',
    a: 'Most questions are answered within 48 hours. More complex ones may take a little longer — we would rather take a day and give you a clear, correct answer than fire off a quick guess.',
  },
  {
    q: 'Who actually writes the answers?',
    a: 'The TekSure team answers most questions. For some topics we also have vetted community volunteers — experienced helpers we have worked with before.',
  },
  {
    q: 'Is my question public?',
    a: 'Your question text is public so everyone can learn from it. Your email is private and only used to notify you when the answer is posted. Never include passwords, account numbers, Social Security numbers, or other personal details.',
  },
  {
    q: 'Can I edit or delete my question later?',
    a: 'Email us and we will update or remove it for you. We are working on a self-service edit tool next.',
  },
  {
    q: 'Why would a question be hidden?',
    a: 'We hide anything that shares personal information, violates the community guidelines, or looks like spam. If that happens to yours, we will reach out if you provided an email.',
  },
  {
    q: 'Can I answer other people\u2019s questions?',
    a: 'Soon, yes. For now, community comments are coming shortly. If you already know the answer to an open question, email us and we will credit you on the thread.',
  },
];
