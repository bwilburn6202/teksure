import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { checkRateLimit } from '@/lib/rateLimit';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Send, Lightbulb } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { CATEGORIES, CATEGORY_COLORS, type ForumCategory } from './Index';
import { useToast } from '@/hooks/use-toast';

export default function NewThread() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState<ForumCategory>('general');

  if (!user) {
    navigate('/login', { state: { from: '/forum/new' } });
    return null;
  }

  const createThread = useMutation({
    mutationFn: async () => {
      if (!checkRateLimit('forum-post', 5, 600_000)) {
        throw new Error('You\'ve posted several times recently. Please wait a few minutes.');
      }
      const { data, error } = await supabase
        .from('forum_threads' as any)
        .insert({
          title: title.trim(),
          body: body.trim(),
          category,
          user_id: user.id,
          author_name: user.fullName || user.email,
        })
        .select('id')
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: (data: any) => {
      toast({ title: 'Discussion started!', description: 'Your post is now live in the forum.' });
      navigate(`/forum/${(data as any).id}`);
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'Could not create your post. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    createThread.mutate();
  };

  const categoryChoices = CATEGORIES.filter(c => c.value !== 'all');
  const isValid = title.trim().length >= 5 && body.trim().length >= 10;

  return (
    <>
      <SEOHead title="Start a Discussion — TekSure Forum" description="Ask a question or share a tip with the TekSure community." path="/forum/new" />
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-2xl mx-auto px-4 py-8">
          <Link
            to="/forum"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Forum
          </Link>

          <div className="border-b border-border pb-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Start a Discussion</h1>
            <p className="text-muted-foreground">
              Ask a question, share a tip, or start a conversation. Our community is friendly and welcoming!
            </p>
          </div>

          <Card className="rounded-2xl border border-primary/20 bg-primary/5 mb-6">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">A few tips for a great post:</p>
                  <ul className="list-disc list-inside space-y-0.5 ml-1">
                    <li>Give your post a clear title — e.g. "Why does my Wi-Fi keep dropping?"</li>
                    <li>Include any details that might help — your device, what you've tried, etc.</li>
                    <li>Choose the right category so the right people can find and help you.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Category */}
            <div className="space-y-2">
              <Label className="text-base font-medium">Category</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categoryChoices.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategory(cat.value as ForumCategory)}
                    className={`flex flex-col items-start gap-0.5 p-3 rounded-xl border text-left transition-all text-sm ${
                      category === cat.value
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border hover:border-primary/40 hover:bg-muted'
                    }`}
                  >
                    <span className="text-lg">{cat.emoji}</span>
                    <span className="font-medium leading-tight">{cat.label}</span>
                    <span className="text-xs text-muted-foreground leading-tight">{cat.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base font-medium">
                Title <span className="text-muted-foreground font-normal">(keep it short and clear)</span>
              </Label>
              <Input
                id="title"
                placeholder="e.g. How do I stop getting so many spam emails?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
                className="text-base"
                disabled={createThread.isPending}
              />
              <p className="text-xs text-muted-foreground text-right">{title.length}/120</p>
            </div>

            {/* Body */}
            <div className="space-y-2">
              <Label htmlFor="body" className="text-base font-medium">
                Your message
              </Label>
              <Textarea
                id="body"
                placeholder="Describe your question or share your tip in as much detail as you like. Don't worry — there are no silly questions here!"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                className="resize-none text-base"
                disabled={createThread.isPending}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Posting as <span className="font-medium text-foreground">{user.fullName || user.email}</span>
            </p>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => navigate('/forum')} disabled={createThread.isPending}>
                Cancel
              </Button>
              <Button type="submit" disabled={!isValid || createThread.isPending} className="gap-2 flex-1 sm:flex-none">
                <Send className="h-4 w-4" />
                {createThread.isPending ? 'Posting...' : 'Post Discussion'}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
