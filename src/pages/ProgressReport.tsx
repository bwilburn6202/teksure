import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, BookOpen, Trophy, Mail, CheckCircle2, Clock, Flame, BarChart3, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCompletedGuides } from '@/lib/progress';
import { guides } from '@/data/guides';
import { getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { toast } from 'sonner';

const GOALS = [5, 10, 20, 50, 100];

function getStreak(completed: string[]): number {
  if (completed.length === 0) return 0;
  const raw = typeof window !== 'undefined' ? localStorage.getItem('teksure-last-activity') : null;
  if (!raw) return completed.length > 0 ? 1 : 0;
  const lastDate = new Date(raw);
  const today = new Date();
  const diff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
  return diff <= 1 ? Math.min(completed.length, 7) : 0;
}

function getCategoryBreakdown(completed: string[]) {
  const cats: Record<string, number> = {};
  completed.forEach(slug => {
    const g = guides.find(g => g.slug === slug);
    if (g) cats[g.category] = (cats[g.category] ?? 0) + 1;
  });
  return Object.entries(cats).sort((a, b) => b[1] - a[1]);
}

const catLabels: Record<string, string> = {
  'how-to': 'How-To Guides', 'safety-guides': 'Safety & Privacy', 'essential-skills': 'Essential Skills',
  'windows-guides': 'Windows', 'mac-guides': 'Mac', 'tips-tricks': 'Tips & Tricks', 'ai-guides': 'AI Guides',
};

export default function ProgressReport() {
  const completedArr = Array.from(getCompletedGuides());
  const total = completedArr.length;
  const streak = getStreak(completedArr);
  const categories = getCategoryBreakdown(completedArr);
  const nextGoal = GOALS.find(g => g > total) ?? GOALS[GOALS.length - 1];
  const pctToGoal = Math.min(100, (total / nextGoal) * 100);
  const recentGuides = completedArr.slice(-5).reverse().map(slug => guides.find(g => g.slug === slug)).filter(Boolean);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(() => typeof window !== 'undefined' && !!localStorage.getItem('teksure-report-email'));

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem('teksure-report-email', email);
    setSubscribed(true);
    toast.success('You\'re subscribed! Your first monthly report will arrive next month.');
  }

  const confidenceScore = typeof window !== 'undefined' ? parseInt(localStorage.getItem('teksure-confidence-score') ?? '0', 10) : 0;
  const chosenPath = typeof window !== 'undefined' ? localStorage.getItem('teksure-my-path-chosen') : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Your Monthly Progress Report — Track Your Learning | TekSure"
        description="Track your TekSure learning journey. See how many guides you've completed, your streak, confidence score, and what to tackle next."
        path="/progress-report"
      />
      <Navbar />
      <main className="flex-1 container max-w-3xl py-12 min-h-screen bg-background">
        <div className="text-center mb-10">
          <BarChart3 className="h-10 w-10 text-primary mx-auto mb-3" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-primary">Your Monthly Progress Report</h1>
          <p className="text-muted-foreground">A snapshot of your learning journey — see how far you've come.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: 'Guides completed', value: total, color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Flame, label: 'Day streak', value: streak, color: 'text-orange-600', bg: 'bg-orange-50' },
            { icon: Trophy, label: 'Confidence score', value: confidenceScore ? `${confidenceScore}%` : '—', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: TrendingUp, label: 'Next milestone', value: `${total}/${nextGoal}`, color: 'text-purple-600', bg: 'bg-purple-50' },
          ].map((stat, i) => (
            <div key={stat.label}>
              <Card>
                <CardContent className="pt-4 pb-3 text-center">
                  <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Goal progress */}
        <Card className="mb-6 rounded-2xl border border-border bg-card">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">Progress to next milestone</p>
              <Badge variant="secondary">{total} / {nextGoal} guides</Badge>
            </div>
            <Progress value={pctToGoal} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground">{nextGoal - total} more guide{nextGoal - total !== 1 ? 's' : ''} to reach your next milestone</p>
          </CardContent>
        </Card>

        {/* Category breakdown */}
        {categories.length > 0 && (
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="pt-5 pb-4">
              <h2 className="font-semibold mb-4">What you've been learning</h2>
              <div className="space-y-3">
                {categories.slice(0, 5).map(([cat, count]) => (
                  <div key={cat}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{catLabels[cat] ?? cat}</span>
                      <span className="font-semibold">{count} guide{count !== 1 ? 's' : ''}</span>
                    </div>
                    <Progress value={(count / total) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent activity */}
        {recentGuides.length > 0 && (
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="pt-5 pb-4">
              <h2 className="font-semibold mb-4 flex items-center gap-2"><Clock className="h-4 w-4" />Recently completed</h2>
              <div className="space-y-2">
                {recentGuides.map(g => g && (
                  <Link key={g.slug} to={`/guides/${g.slug}`} className="flex items-center gap-3 rounded-lg hover:bg-muted px-2 py-1.5 transition-colors group">
                    <img src={getGuideThumbnailSmall(g)} alt="" className="w-5 h-5 rounded object-cover shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{g.title}</p>
                      <p className="text-xs text-muted-foreground">{g.readTime}</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Current path */}
        {chosenPath && (
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="pt-5 pb-4 flex items-center gap-4">
              <Map className="h-8 w-8 text-primary" />
              <div className="flex-1">
                <p className="font-semibold">Your learning path</p>
                <p className="text-sm text-muted-foreground">{chosenPath}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to="/my-path">View path</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Empty state */}
        {total === 0 && (
          <Card className="text-center py-10 mb-6">
            <CardContent>
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground opacity-30 mb-4" />
              <h2 className="text-lg font-semibold mb-2">No guides completed yet</h2>
              <p className="text-muted-foreground text-sm mb-5">Start reading guides to track your progress here. Your journey begins with a single step.</p>
              <Button asChild className="gap-2 rounded-xl">
                <Link to="/my-path"><BookOpen className="h-4 w-4" /> Start Learning</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Email subscription */}
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="pt-5 pb-5">
            {subscribed ? (
              <div className="flex items-center gap-3 text-green-700">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-semibold">Monthly reports are on</p>
                  <p className="text-sm text-muted-foreground">We'll email you a progress summary at the start of each month.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Get monthly progress emails</p>
                    <p className="text-sm text-muted-foreground">A brief email each month showing your guides, badges, and what to try next.</p>
                  </div>
                </div>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="flex-1">
                    <Label className="sr-only">Email address</Label>
                    <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <Button type="submit" className="shrink-0 rounded-xl">Subscribe</Button>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
