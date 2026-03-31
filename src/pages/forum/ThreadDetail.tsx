import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MessageSquare, Clock, Send, AlertCircle } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { formatDistanceToNow } from 'date-fns';
import { CATEGORIES, CATEGORY_COLORS, type ForumCategory } from './Index';
import { useToast } from '@/hooks/use-toast';

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

interface ForumReply {
  id: string;
  body: string;
  author_name: string;
  created_at: string;
}

export default function ThreadDetail() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [replyText, setReplyText] = useState('');

  const { data: thread, isLoading: threadLoading } = useQuery({
    queryKey: ['forum-thread', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_threads' as any)
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data as unknown as ForumThread;
    },
    enabled: !!id,
  });

  const { data: replies = [], isLoading: repliesLoading } = useQuery({
    queryKey: ['forum-replies', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_replies' as any)
        .select('*')
        .eq('thread_id', id)
        .order('created_at', { ascending: true });
      if (error) throw error;
      return data as unknown as ForumReply[];
    },
    enabled: !!id,
  });

  const postReply = useMutation({
    mutationFn: async (body: string) => {
      if (!user) throw new Error('Not logged in');
      const { error } = await supabase.from('forum_replies' as any).insert({
        thread_id: id,
        body,
        user_id: user.id,
        author_name: user.fullName || user.email,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setReplyText('');
      queryClient.invalidateQueries({ queryKey: ['forum-replies', id] });
      queryClient.invalidateQueries({ queryKey: ['forum-thread', id] });
      queryClient.invalidateQueries({ queryKey: ['forum-threads'] });
      toast({ title: 'Reply posted!', description: 'Your reply has been added to the discussion.' });
    },
    onError: () => {
      toast({ title: 'Something went wrong', description: 'Could not post your reply. Please try again.', variant: 'destructive' });
    },
  });

  const handleSubmitReply = () => {
    if (!replyText.trim()) return;
    if (!user) {
      navigate('/login', { state: { from: `/forum/${id}` } });
      return;
    }
    postReply.mutate(replyText.trim());
  };

  if (threadLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background container max-w-3xl mx-auto px-4 py-8">
          <div className="space-y-4">
            <div className="h-8 w-32 bg-muted animate-pulse rounded" />
            <div className="h-40 bg-muted animate-pulse rounded-xl" />
            <div className="h-24 bg-muted animate-pulse rounded-xl" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!thread) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background container max-w-3xl mx-auto px-4 py-8 text-center">
          <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <h1 className="text-xl font-semibold mb-2">Thread not found</h1>
          <p className="text-muted-foreground mb-4">This discussion may have been removed.</p>
          <Button asChild variant="outline"><Link to="/forum">Back to Forum</Link></Button>
        </main>
        <Footer />
      </>
    );
  }

  const categoryInfo = CATEGORIES.find(c => c.value === thread.category);

  return (
    <>
      <SEOHead title={`${thread.title} — TekSure Forum`} description={thread.body.slice(0, 150)} path={`/forum/${thread.id}`} />
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <Link
            to="/forum"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Forum
          </Link>

          {/* Original Post */}
          <Card className="rounded-2xl border border-border bg-card mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {categoryInfo && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[thread.category]}`}>
                    {categoryInfo.emoji} {categoryInfo.label}
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold mb-4 leading-snug">{thread.title}</h1>
              <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-wrap mb-4">{thread.body}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground pt-3 border-t border-border">
                <span className="font-medium text-foreground/70">{thread.author_name}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {formatDistanceToNow(new Date(thread.created_at), { addSuffix: true })}
                </span>
                <span className="flex items-center gap-1 ml-auto">
                  <MessageSquare className="h-3.5 w-3.5" />
                  {thread.reply_count} {thread.reply_count === 1 ? 'reply' : 'replies'}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Replies */}
          {repliesLoading ? (
            <div className="space-y-3 mb-6">
              {[1, 2].map(i => (
                <div key={i} className="h-20 bg-muted animate-pulse rounded-xl" />
              ))}
            </div>
          ) : replies.length > 0 ? (
            <div className="space-y-3 mb-6">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
              </h2>
              {replies.map((reply, idx) => (
                <Card key={reply.id} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {reply.author_name?.[0]?.toUpperCase() ?? '?'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold">{reply.author_name}</span>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(reply.created_at), { addSuffix: true })}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">{reply.body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm mb-6 text-center py-4">
              No replies yet — be the first to help out!
            </p>
          )}

          {/* Reply Box */}
          <Card className="rounded-2xl border border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">
                {user ? 'Write a Reply' : 'Sign in to Reply'}
              </h3>
              {user ? (
                <>
                  <Textarea
                    placeholder="Share your thoughts, tips, or experience..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={4}
                    className="mb-3 resize-none"
                    disabled={postReply.isPending}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Posting as <span className="font-medium">{user.fullName || user.email}</span>
                    </p>
                    <Button
                      onClick={handleSubmitReply}
                      disabled={!replyText.trim() || postReply.isPending}
                      className="gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {postReply.isPending ? 'Posting...' : 'Post Reply'}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Join the conversation — it's free!
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/login" state={{ from: `/forum/${id}` }}>Sign In</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/signup">Create Account</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
