import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User, Mail, Shield, Save, Loader2, CheckCircle, ArrowRight, MessageSquare, BookOpen, Trophy, Map, CheckCircle2, Lock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { evaluateBadges, type Badge as TekBadge } from '@/lib/badges';
import { getProgressCount, getCompletedGuides } from '@/lib/progress';
import { guides } from '@/data/guides';
import { getGuideThumbnailSmall } from '@/lib/guideThumbnails';

const roleColors: Record<string, string> = {
  customer: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  tech: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  admin: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
};

const roleLabels: Record<string, string> = {
  customer: 'Customer',
  tech: 'Tech Support',
  admin: 'Admin',
};

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [badges, setBadges] = useState<TekBadge[]>(() => evaluateBadges());
  const allSlugs = guides.map(g => g.slug);
  const progressStats = getProgressCount(allSlugs);

  // Personalized learning path — curated sequences by experience level
  const LEARNING_PATHS = [
    {
      id: 'beginner',
      label: ' Beginner Path',
      description: 'Start with the most important basics',
      slugs: ['staying-safe-online', 'creating-strong-passwords', 'windows-basics', 'wifi-connection', 'avoiding-scams'],
    },
    {
      id: 'essential',
      label: ' Safety Essentials',
      description: 'Keep yourself safe online',
      slugs: ['two-factor-auth', 'social-media-safety', 'phishing-emails', 'home-network-security', 'software-updates'],
    },
    {
      id: 'practical',
      label: ' Practical Skills',
      description: 'Everyday tech you\'ll actually use',
      slugs: ['video-calls', 'file-management', 'photo-organization', 'email-basics', 'screen-recording'],
    },
    {
      id: 'devices',
      label: ' Devices & Apps',
      description: 'Get the most from your devices',
      slugs: ['iphone-basics', 'android-basics', 'smart-home-setup', 'streaming-setup', 'banking-apps'],
    },
    {
      id: 'ai',
      label: ' AI & Modern Tech',
      description: 'Stay up to date with AI tools',
      slugs: ['chatgpt-basics', 'google-ai-tools', 'ai-image-tools', 'ai-safety', 'digital-legacy'],
    },
  ];

  const completedGuides = getCompletedGuides();
  const getBestPath = () => {
    // Pick the path the user has the least progress on but has started, else beginner
    let best = LEARNING_PATHS[0];
    let bestScore = Infinity;
    for (const path of LEARNING_PATHS) {
      const validSlugs = path.slugs.filter(s => allSlugs.includes(s));
      if (validSlugs.length === 0) continue;
      const done = validSlugs.filter(s => completedGuides.has(s)).length;
      const pct = done / validSlugs.length;
      // Prefer paths that are started but not finished
      if (done > 0 && pct < 1 && pct < bestScore) {
        bestScore = pct;
        best = path;
      }
    }
    // If no started paths, return beginner
    return best;
  };

  const activePath = getBestPath();
  const pathGuides = activePath.slugs
    .map(slug => guides.find(g => g.slug === slug))
    .filter(Boolean)
    .slice(0, 5) as typeof guides;

  useEffect(() => {
    const refresh = () => setBadges(evaluateBadges());
    window.addEventListener('teksure-progress-update', refresh);
    window.addEventListener('teksure-badge-earned', refresh);
    return () => {
      window.removeEventListener('teksure-progress-update', refresh);
      window.removeEventListener('teksure-badge-earned', refresh);
    };
  }, []);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ full_name: fullName.trim() })
      .eq('id', user.id);

    setSaving(false);

    if (updateError) {
      setError('Could not save changes. Please try again.');
      return;
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const initials = fullName
    ? fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : (user.email?.[0]?.toUpperCase() || '?');

  return (
    <>
      <SEOHead
        title="My Profile — TekSure"
        description="Manage your TekSure account details."
        path="/profile"
      />
      <Navbar />
      <main className="container max-w-xl py-16 min-h-screen bg-background">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-primary">My Profile</h1>

        {/* Avatar + summary */}
        <div className="flex items-center gap-5 mb-8">
          <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-primary">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-lg truncate">{fullName || 'No name set'}</p>
            <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            {user.role && (
              <Badge className={`mt-1.5 text-xs font-normal ${roleColors[user.role] || ''}`}>
                {roleLabels[user.role] || user.role}
              </Badge>
            )}
          </div>
        </div>

        {/* Edit details */}
        <Card className="mb-6 rounded-2xl border border-border bg-card">
          <CardHeader className="pb-4 border-b border-border">
            <CardTitle className="text-base text-primary">Account Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input
                  value={user.email}
                  disabled
                  className="h-11 opacity-60 cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground">Email address cannot be changed here.</p>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  Account Type
                </Label>
                <Input
                  value={roleLabels[user.role] || user.role}
                  disabled
                  className="h-11 opacity-60 cursor-not-allowed"
                />
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={saving} className="w-full h-11 gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                {saving ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Saving...</>
                ) : saved ? (
                  <><CheckCircle className="h-4 w-4" /> Saved!</>
                ) : (
                  <><Save className="h-4 w-4" /> Save Changes</>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="mb-6 rounded-2xl border border-border bg-card">
          <CardContent className="pt-5 pb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Learning Progress
            </p>
            <div className="flex items-end justify-between mb-2">
              <p className="text-sm font-medium">{progressStats.completed} guides completed</p>
              <p className="text-lg font-bold text-primary">{progressStats.pct}%</p>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progressStats.pct}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {progressStats.completed === 0
                ? 'Complete your first guide to start tracking progress!'
                : `${progressStats.total - progressStats.completed} more to go — keep it up!`}
            </p>
          </CardContent>
        </Card>

        {/* Personalized Learning Path */}
        <Card className="mb-6 rounded-2xl border border-border bg-card">
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base flex items-center gap-2 text-primary">
              <Map className="h-4 w-4 text-primary" />
              Your Learning Path
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">{activePath.label} — {activePath.description}</p>
          </CardHeader>
          <CardContent className="pb-5">
            <div className="space-y-2">
              {pathGuides.map((guide, index) => {
                const done = completedGuides.has(guide.slug);
                const prevDone = index === 0 || completedGuides.has(pathGuides[index - 1]?.slug ?? '');
                const isNext = !done && prevDone;
                return (
                  <Link
                    key={guide.slug}
                    to={`/guides/${guide.slug}`}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      done
                        ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20'
                        : isNext
                        ? 'border-primary/40 bg-primary/5 hover:bg-primary/10'
                        : 'border-border bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      done ? 'bg-green-100 dark:bg-green-900' : isNext ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                      {done
                        ? <CheckCircle2 className="h-4 w-4 text-green-600" />
                        : isNext
                        ? <span className="text-sm font-bold text-primary">{index + 1}</span>
                        : <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium leading-tight truncate ${done ? 'line-through text-muted-foreground' : ''}`}>
                        <img src={getGuideThumbnailSmall(guide)} alt="" className="w-4 h-4 rounded object-cover inline-block mr-1 align-text-bottom" loading="lazy" />{guide.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{guide.excerpt}</p>
                    </div>
                    {isNext && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">Next up</span>
                    )}
                    {done && (
                      <span className="text-xs text-green-600 shrink-0">Done </span>
                    )}
                  </Link>
                );
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full text-xs rounded-xl"
              onClick={() => navigate('/guides')}
            >
              Browse all guides <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="mb-6 rounded-2xl border border-border bg-card">
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-base flex items-center gap-2 text-primary">
              <Trophy className="h-4 w-4 text-amber-500" />
              Achievement Badges
              <Badge variant="secondary" className="text-xs ml-auto">
                {badges.filter(b => b.earned).length} / {badges.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-5">
            {badges.filter(b => b.earned).length === 0 && (
              <p className="text-sm text-muted-foreground mb-4">Complete guides to earn your first badge!</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {badges.map(badge => (
                <div
                  key={badge.id}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${
                    badge.earned
                      ? 'border-amber-400/40 bg-amber-50 dark:bg-amber-950/20'
                      : 'border-border bg-muted/30 opacity-50 grayscale'
                  }`}
                >
                  <span className="text-2xl">{badge.emoji}</span>
                  <p className="text-xs font-semibold leading-tight">{badge.title}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{badge.description}</p>
                  {badge.earned && badge.earnedAt && (
                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                      {new Date(badge.earnedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick links */}
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="pt-5 pb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Quick Links
            </p>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/my-requests')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  My Help Requests
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/guides')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Browse Free Guides
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/get-help')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  Get Tech Help
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </CardContent>
        </Card>

      </main>
      <Footer />
    </>
  );
}
