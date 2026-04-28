import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { ListenButton } from '@/components/ListenButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sun, ChevronRight, Calendar, ArrowRight, Sparkles,
  Lightbulb,
} from 'lucide-react';
import { weeklyTips, type WeeklyTip } from '@/data/weekly-tips';

function pickTipForToday(): { tip: WeeklyTip; dayIdx: number } {
  const start = new Date(2026, 0, 1);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const dayIdx = Math.max(0, Math.floor((today.getTime() - start.getTime()) / 86_400_000));
  const tip = weeklyTips[dayIdx % weeklyTips.length];
  return { tip, dayIdx };
}

function buildSpeakable(tip: WeeklyTip): string {
  return [tip.headline, ...tip.body].join(' ');
}

export default function DailyTip() {
  const { tip, dayIdx } = useMemo(() => pickTipForToday(), []);

  const todayLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });

  const speakable = buildSpeakable(tip);

  return (
    <>
      <SEOHead
        title={`Today's tip — ${tip.headline}`}
        description={`A 60-second tech tip you can listen to or read: ${tip.body[0] ?? tip.headline}`}
        path="/daily-tip"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Sun className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <Badge variant="outline" className="mb-2 gap-1">
              <Calendar className="h-3 w-3" /> {todayLabel}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Your 60-second tech tip</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              One tip a day. Listen to it while you make coffee, or read it now.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Daily tip' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <Badge>{tip.category}</Badge>
                <ListenButton text={speakable} label="Listen (1 min)" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{tip.headline}</h2>
              <div className="space-y-3 mb-6">
                {tip.body.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed">{p}</p>
                ))}
              </div>
              <Button asChild size="lg" className="gap-2">
                <Link to={tip.ctaHref}>
                  {tip.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Want this every morning?</p>
                  <p className="text-xs text-muted-foreground">
                    Bookmark <code className="text-xs bg-background px-1.5 py-0.5 rounded">teksure.com/daily-tip</code> on your phone&apos;s home screen and tap it with your morning coffee. Or sign up for the weekly newsletter — five tips a week, no spam, free.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-3">
                    <Link to="/newsletter">Get the weekly newsletter</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground text-center mb-8">Tip #{dayIdx % weeklyTips.length + 1} in the rotating set</p>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">More like this</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/weekly-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">All weekly tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Five fresh tips every week.</p>
              </Link>
              <Link to="/tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Quick tips library</p>
                <p className="text-xs text-muted-foreground mt-0.5">Browse by topic.</p>
              </Link>
              <Link to="/guides" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Full guides</p>
                <p className="text-xs text-muted-foreground mt-0.5">Step-by-step walkthroughs.</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/daily-tip">
                <ChevronRight className="h-3 w-3" /> Reload for tomorrow&apos;s tip <Sparkles className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
