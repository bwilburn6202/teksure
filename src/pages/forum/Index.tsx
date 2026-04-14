import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, Plus, Clock, ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { formatDistanceToNow } from 'date-fns';

export type ForumCategory = 'general' | 'wifi' | 'passwords' | 'devices' | 'software';

export const CATEGORIES: { value: ForumCategory | 'all'; label: string; emoji: string; description: string }[] = [
  { value: 'all',       label: 'All Topics',            emoji: '💬', description: 'Browse everything' },
  { value: 'general',   label: 'General',               emoji: '🙋', description: 'Introductions & general chat' },
  { value: 'wifi',      label: 'WiFi & Connectivity',   emoji: '📶', description: 'Internet and network help' },
  { value: 'passwords', label: 'Passwords & Security',  emoji: '🔒', description: 'Stay safe online' },
  { value: 'devices',   label: 'Devices',               emoji: '💻', description: 'Phones, tablets, computers' },
  { value: 'software',  label: 'Apps & Software',       emoji: '📱', description: 'Apps, programs, updates' },
];

export const CATEGORY_COLORS: Record<ForumCategory, string> = {
  general:   'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  wifi:      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  passwords: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  devices:   'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  software:  'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
};

interface ForumThread {
  id: string;
  title: string;
  body: string;
  author_name: string;
  category: ForumCategory;
  reply_count: number;
  created_at: string;
  updated_at: string;
}

function calcReadTime(text: string): string {
  const words = text?.split(/\s+/).length ?? 0;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default function ForumIndex() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ForumCategory | 'all'>('all');

  const { data: threads = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['forum-threads', activeCategory],
    queryFn: async () => {
      let query = supabase
        .from('forum_threads' as any)
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(50);

      if (activeCategory !== 'all') {
        query = query.eq('category', activeCategory);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as unknown as ForumThread[];
    },
  });

  const handleNewThread = () => {
    if (!user) {
      navigate('/login', { state: { from: '/forum/new' } });
    } else {
      navigate('/forum/new');
    }
  };

  return (
    <>
      <SEOHead
        title="Community Forum — Ask Tech Questions | TekSure"
        description="Ask questions, share tips, and get help from the TekSure community. No question is too basic — everyone was a beginner once."
        path="/forum"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'DiscussionForumPosting',
          name: 'TekSure Community Forum',
          description: 'Peer-to-peer tech support community for everyday people.',
          url: 'https://teksure.com/forum',
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto pt-4 px-4">
          <PageBreadcrumb segments={[{ label: 'Forum' }]} />
        </div>
        {/* Header */}
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Community Forum</h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Ask questions, share tips, and help each other out. No question is too simple!
              </p>
              <Button size="lg" onClick={handleNewThread} className="rounded-xl gap-2">
                <Plus className="h-5 w-5" />
                Start a New Discussion
              </Button>
              {!user && (
                <p className="text-sm text-muted-foreground mt-4">
                  <Link to="/login" className="text-primary hover:underline">Sign in</Link> to post — reading is always free.
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-16">
          {/* Category Filter */}
          <div
            className="flex flex-wrap gap-2 mb-8"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border bg-background hover:border-primary/30 hover:bg-card'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Thread List */}
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : isError ? (
            <Card className="rounded-2xl border border-border bg-card text-center py-12">
              <CardContent>
                <p className="text-4xl mb-4 select-none">😕</p>
                <p className="text-lg font-semibold mb-2">We couldn't load the discussions</p>
                <p className="text-muted-foreground mb-6 max-w-xs mx-auto text-sm leading-relaxed">
                  There was a problem connecting to our servers. Check your internet
                  connection and try again — your posts are safe!
                </p>
                <Button onClick={() => refetch()} variant="outline" className="rounded-xl gap-2">
                  <span>Try again</span>
                </Button>
              </CardContent>
            </Card>
          ) : threads.length === 0 ? (
            <Card className="rounded-2xl border border-border bg-card text-center py-12">
              <CardContent>
                <p className="text-4xl mb-4 select-none">💬</p>
                <p className="text-lg font-semibold mb-1">No discussions here yet</p>
                <p className="text-muted-foreground mb-5 text-sm max-w-xs mx-auto">
                  Be the first to ask a question or share a tip in this topic — no question is too simple!
                </p>
                <Button onClick={handleNewThread} variant="outline" className="rounded-xl">Start a Discussion</Button>
              </CardContent>
            </Card>
          ) : (
            <div
              className="space-y-3"
            >
              {threads.map((thread, i) => (
                <div
                  key={thread.id}
                >
                  <Link to={`/forum/${thread.id}`} className="block group">
                    <Card className="rounded-2xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-sm">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${CATEGORY_COLORS[thread.category]}`}>
                                {CATEGORIES.find(c => c.value === thread.category)?.emoji}{' '}
                                {CATEGORIES.find(c => c.value === thread.category)?.label}
                              </span>
                            </div>
                            <h2 className="font-semibold text-base leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                              {thread.title}
                            </h2>
                            <p className="text-sm text-muted-foreground line-clamp-1 mb-3">{thread.body}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="font-medium text-foreground/70">{thread.author_name}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {formatDistanceToNow(new Date(thread.updated_at), { addSuffix: true })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {calcReadTime(thread.body)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex flex-col items-center text-center">
                              <span className="flex items-center gap-1 text-sm font-semibold">
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                {thread.reply_count}
                              </span>
                              <span className="text-[10px] text-muted-foreground">replies</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
