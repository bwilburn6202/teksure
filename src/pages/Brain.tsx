import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { guides, categoryLabels } from '@/data/guides';
import { supabase } from '@/integrations/supabase/client';
import { Brain, Search, Sparkles, BookOpen, Clock, ChevronRight, Loader2, CheckCircle } from 'lucide-react';

// Stop words to ignore when scoring
const STOP_WORDS = new Set(['how', 'to', 'a', 'the', 'is', 'my', 'can', 'i', 'do', 'what', 'why', 'when', 'where', 'who', 'which', 'are', 'was', 'be', 'been', 'have', 'has', 'had', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'not', 'no', 'on', 'in', 'at', 'by', 'for', 'with', 'about', 'from', 'up', 'down', 'out', 'off', 'over', 'under', 'if', 'then', 'that', 'this', 'it', 'its', 'of', 'or', 'and', 'but', 'so', 'yet', 'nor', 'get', 'set', 'use', 'using', 'make', 'need', 'want', 'help', 'me', 'you', 'your', 'my', 'our', 'their', 'an']);

// Synonym expansions for common queries
const SYNONYMS: Record<string, string[]> = {
  'slow': ['performance', 'speed', 'lag', 'fast', 'sluggish', 'freeze', 'freezing'],
  'wifi': ['internet', 'wireless', 'network', 'connection', 'connect', 'router'],
  'password': ['login', 'signin', 'credentials', 'forgot', 'reset', 'locked'],
  'scam': ['fraud', 'phishing', 'suspicious', 'fake', 'trick', 'stolen'],
  'photo': ['picture', 'image', 'camera', 'screenshot', 'gallery'],
  'phone': ['iphone', 'android', 'mobile', 'smartphone', 'device', 'samsung', 'galaxy'],
  'email': ['gmail', 'outlook', 'mail', 'inbox', 'message'],
  'update': ['upgrade', 'install', 'download', 'version', 'latest'],
  'backup': ['save', 'copy', 'restore', 'cloud', 'storage', 'icloud', 'google'],
  'print': ['printer', 'printing', 'paper', 'document'],
  'virus': ['malware', 'hack', 'security', 'infected', 'safe'],
  'youtube': ['video', 'watch', 'stream', 'netflix', 'hulu'],
  'medicare': ['medicaid', 'insurance', 'health', 'benefits', 'social security'],
  'bank': ['banking', 'account', 'money', 'payment', 'zelle', 'venmo', 'cash'],
};

function extractKeywords(query: string): string[] {
  const words = query.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));

  const expanded = new Set(words);
  for (const word of words) {
    const syns = SYNONYMS[word] || [];
    syns.forEach(s => expanded.add(s));
    // Also add partial matches
    Object.entries(SYNONYMS).forEach(([key, vals]) => {
      if (vals.includes(word)) expanded.add(key);
    });
  }
  return Array.from(expanded);
}

function scoreGuide(guide: typeof guides[0], keywords: string[]): number {
  if (keywords.length === 0) return 0;
  let score = 0;
  const title = guide.title.toLowerCase();
  const excerpt = guide.excerpt.toLowerCase();
  const tags = guide.tags.map(t => t.toLowerCase()).join(' ');
  const body = (guide.body || '').toLowerCase().slice(0, 500);
  const category = (categoryLabels[guide.category] || '').toLowerCase();

  for (const kw of keywords) {
    if (title.includes(kw)) score += 4;
    if (tags.includes(kw)) score += 3;
    if (category.includes(kw)) score += 2;
    if (excerpt.includes(kw)) score += 1.5;
    if (body.includes(kw)) score += 0.5;
  }
  // Bonus for multiple keyword hits
  const hitCount = keywords.filter(kw => title.includes(kw) || tags.includes(kw) || excerpt.includes(kw)).length;
  if (hitCount >= 2) score *= 1.3;
  if (hitCount >= 3) score *= 1.5;
  return score;
}

function findRelevantGuides(query: string, count = 5) {
  const keywords = extractKeywords(query);
  if (keywords.length === 0) return [];

  return guides
    .map(g => ({ guide: g, score: scoreGuide(g, keywords) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ guide }) => guide);
}

async function queryBrainAPI(question: string): Promise<{
  answer: string | null;
  sources: Array<{ title: string; url: string; summary: string }>;
  modelUsed: 'ollama' | 'claude' | 'none';
  kbHits: number;
} | null> {
  try {
    const { data, error } = await supabase.functions.invoke('brain-query', {
      body: { question },
    });
    if (error || !data) return null;
    return {
      answer:    data.answer ?? null,
      sources:   Array.isArray(data.sources) ? data.sources : [],
      modelUsed: data.model_used ?? 'none',
      kbHits:    data.kb_hits ?? 0,
    };
  } catch {
    return null;
  }
}

const SUGGESTED_QUESTIONS = [
  'How do I connect to WiFi?',
  'My computer is running slow',
  'How do I spot a scam email?',
  'How do I set up two-factor authentication?',
  'How do I back up my phone?',
  'How do I check Medicare online?',
  'How do I use Zoom for video calls?',
  'How do I freeze my credit?',
];

interface BrainSource {
  title: string;
  url: string;
  summary: string;
}

interface SearchResult {
  query: string;
  guides: typeof guides;
  aiAnswer: string | null;
  aiSources: BrainSource[];
  modelUsed: 'ollama' | 'claude' | 'none';
  kbHits: number;
  ollamaAvailable: boolean;
}

export default function BrainPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [ollamaStatus, setOllamaStatus] = useState<'unknown' | 'online' | 'offline'>('unknown');
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if the hosted Ollama server is reachable via edge function
  useEffect(() => {
    supabase.functions.invoke('ollama-health')
      .then(({ data }) => setOllamaStatus(data?.available ? 'online' : 'offline'))
      .catch(() => setOllamaStatus('offline'));
  }, []);

  async function handleSearch(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    setQuery(q);

    // Always ask the backend — it retrieves from the KB and falls back
    // between Ollama and Claude automatically.
    const [matchedGuides, brainRes] = await Promise.all([
      Promise.resolve(findRelevantGuides(q, 5)),
      queryBrainAPI(q),
    ]);

    setResult({
      query: q,
      guides: matchedGuides,
      aiAnswer:  brainRes?.answer ?? null,
      aiSources: brainRes?.sources ?? [],
      modelUsed: brainRes?.modelUsed ?? 'none',
      kbHits:    brainRes?.kbHits ?? 0,
      ollamaAvailable: brainRes?.modelUsed === 'ollama',
    });
    setLoading(false);
  }

  return (
    <>
      <SEOHead
        title="TekSure Brain — Ask Anything About Technology"
        description="Ask TekSure any tech question and instantly find the right guide. Powered by our library of 1,100+ guides. Works offline — no API needed."
        path="/brain"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border py-16 text-center">
          <div className="container max-w-2xl">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3">TekSure Brain</h1>
            <p className="text-muted-foreground text-lg mb-2">
              Ask any tech question. Get answers from our library of {guides.length.toLocaleString()}+ guides.
            </p>
            <p className="text-xs text-muted-foreground mb-8 flex items-center justify-center gap-1">
              {ollamaStatus === 'online' ? (
                <><CheckCircle className="h-3 w-3 text-green-500" /> Local AI connected — answering from our knowledge base</>
              ) : ollamaStatus === 'offline' ? (
                <><CheckCircle className="h-3 w-3 text-green-500" /> AI answers ready — backed by our verified knowledge base</>
              ) : (
                <><Loader2 className="h-3 w-3 animate-spin" /> Warming up AI...</>
              )}
            </p>

            {/* Search */}
            <form onSubmit={e => { e.preventDefault(); handleSearch(query); }} className="flex gap-2 max-w-xl mx-auto mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                <Input
                  ref={inputRef}
                  placeholder="Ask anything — e.g. 'how do I back up my phone?'"
                  className="pl-11 h-12 rounded-2xl text-sm"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading} className="h-12 px-6 rounded-2xl gap-2 shrink-0">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Brain className="h-4 w-4" /> Ask</>}
              </Button>
            </form>

            {/* Suggested questions */}
            {!result && (
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => { setQuery(q); handleSearch(q); }}
                    className="px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        <div className="container max-w-3xl py-12 px-4">
          {loading && (
            <div className="text-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
              <p className="text-muted-foreground">Searching {guides.length.toLocaleString()}+ guides…</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6">
              {/* AI Answer */}
              {result.aiAnswer && (
                <Card className="border-primary/20 bg-primary/[0.03]">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">AI Answer</span>
                      <Badge variant="outline" className="text-xs ml-auto">
                        {result.modelUsed === 'ollama'
                          ? 'Powered by Ollama'
                          : result.modelUsed === 'claude'
                            ? 'Powered by Claude'
                            : 'AI'}
                        {result.kbHits > 0 && ` · ${result.kbHits} source${result.kbHits === 1 ? '' : 's'}`}
                      </Badge>
                    </div>
                    <p className="text-sm leading-relaxed mb-4 whitespace-pre-line">{result.aiAnswer}</p>
                    {result.aiSources.length > 0 && (
                      <div className="pt-3 border-t border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Sources</p>
                        <ul className="space-y-1.5">
                          {result.aiSources.map((src) => (
                            <li key={src.url} className="text-xs">
                              <a
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {src.title}
                              </a>
                              {src.summary && <span className="text-muted-foreground"> — {src.summary}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Guide results */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  {result.guides.length > 0
                    ? `Found ${result.guides.length} relevant guide${result.guides.length !== 1 ? 's' : ''} for "${result.query}"`
                    : `No guides found for "${result.query}"`}
                </p>

                {result.guides.length === 0 ? (
                  <div className="text-center py-12 rounded-2xl border border-border bg-muted/30">
                    <p className="text-2xl mb-3">🤔</p>
                    <p className="font-medium mb-2">No exact matches found</p>
                    <p className="text-sm text-muted-foreground mb-4">Try different words or browse all guides.</p>
                    <Button asChild variant="outline" className="rounded-xl gap-2">
                      <Link to="/guides"><BookOpen className="h-4 w-4" /> Browse all guides</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {result.guides.map((guide) => (
                      <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group block">
                        <Card className="hover:border-primary/30 hover:shadow-sm transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl shrink-0 mt-0.5">{guide.thumbnailEmoji}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <Badge variant="secondary" className="text-xs">{categoryLabels[guide.category]}</Badge>
                                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" />{guide.readTime}
                                  </span>
                                </div>
                                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{guide.title}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Try another search */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 text-center">Try another question</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED_QUESTIONS.filter(q => q !== result.query).slice(0, 4).map(q => (
                    <button
                      key={q}
                      onClick={() => { setQuery(q); handleSearch(q); }}
                      className="px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Info section */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { emoji: '🔎', title: 'Verified knowledge', desc: 'AI answers draw only from our fact-checked knowledge base.' },
              { emoji: '⚡', title: 'Instant results', desc: `Searches all ${guides.length.toLocaleString()}+ guides in milliseconds.` },
              { emoji: '🦙', title: 'Private local AI', desc: 'When our hosted Ollama is online, answers stay on our server.' },
            ].map(item => (
              <div key={item.title} className="p-4 rounded-xl border border-border bg-muted/30">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
