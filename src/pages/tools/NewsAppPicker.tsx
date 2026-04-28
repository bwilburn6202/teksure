import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Newspaper, ExternalLink, AlertTriangle } from 'lucide-react';

type Source = 'applenews' | 'nyt' | 'wsj' | 'wapo' | 'ap' | 'reuters' | 'npr' | 'newsbreak';

interface Pick {
  name: string;
  cost: string;
  whoFor: string;
  highlights: string[];
  watchOuts: string[];
  link: string;
}

const PICKS: Record<Source, Pick> = {
  applenews: {
    name: 'Apple News+',
    cost: '13/mo (covers 300+ publications)',
    whoFor: 'iPhone or iPad readers who want one bill instead of five.',
    highlights: ['Bundles WSJ, The Atlantic, People, Time, National Geographic, Bloomberg, and 300+ more.', 'Audio narration of long stories — listen while you walk or cook.', 'Daily digest curated by human editors, not an algorithm.'],
    watchOuts: ['iPhone / iPad / Mac only. Not on Android or Windows.', 'WSJ access through Apple News+ is missing some specialty video content.'],
    link: 'https://www.apple.com/apple-news/',
  },
  nyt: {
    name: 'New York Times (All Access)',
    cost: '25/mo after intro pricing',
    whoFor: 'Readers who want deep reporting plus Cooking, Games, and The Athletic.',
    highlights: ['All Access bundles News, Cooking, Games (Wordle, Connections, Spelling Bee), Wirecutter, and The Athletic.', 'Daily Briefing email summarizes the morning in 5 minutes.', 'Audio app reads articles aloud and includes The Daily podcast.'],
    watchOuts: ['Auto-renews at full price after a promo period — set a calendar reminder.', 'News-only is cheaper if you skip Cooking and Games.'],
    link: 'https://www.nytimes.com/subscription',
  },
  wsj: {
    name: 'Wall Street Journal',
    cost: '40/mo standalone (or free inside Apple News+ at 13/mo)',
    whoFor: 'Business, finance, and markets readers.',
    highlights: ['Best business and markets reporting in the country.', 'Personal Finance section is excellent for retirement and tax planning.', "What's News audio briefing covers the day in 12 minutes."],
    watchOuts: ['Apple News+ at 13/mo is a far better value if you do not need every WSJ feature.', 'Editorial page leans conservative; news pages aim down the middle.'],
    link: 'https://www.wsj.com/subscribe',
  },
  wapo: {
    name: 'Washington Post',
    cost: '15/mo (frequent 4/mo promotions)',
    whoFor: 'Politics, federal government, and national policy readers.',
    highlights: ['Strong politics and Pentagon coverage.', 'Live blogs during big events update without refreshing the page.', '7 Live podcast and Post Reports give the day in audio.'],
    watchOuts: ['Promotional 4/mo rates are common — never pay full price the first year.', 'Comments sections can get heated; you can hide them in settings.'],
    link: 'https://subscribe.washingtonpost.com',
  },
  ap: {
    name: 'AP News',
    cost: 'Free, no signup required',
    whoFor: 'Anyone who wants the wire-service facts before the spin.',
    highlights: ['The Associated Press is the source most other outlets quote — go to the source.', 'Plain, factual reporting with very little opinion.', 'Free app and free website. No paywall.'],
    watchOuts: ['Less analysis and feature writing than paid outlets.', 'Layout is functional, not flashy.'],
    link: 'https://apnews.com',
  },
  reuters: {
    name: 'Reuters',
    cost: 'Free for most articles',
    whoFor: 'Markets, world news, and international affairs.',
    highlights: ['Like AP, Reuters is a wire service — the source other outlets cite.', 'Excellent international coverage from real foreign correspondents.', 'Reuters TV gives short video summaries.'],
    watchOuts: ['Some specialty content (Reuters Pro, deep market data) is paid.', 'US politics coverage is lighter than AP.'],
    link: 'https://www.reuters.com',
  },
  npr: {
    name: 'NPR',
    cost: 'Free (donations welcome)',
    whoFor: 'Radio-style audio news lovers.',
    highlights: ['Up First (10-min mornings) and Consider This (afternoons) are excellent daily briefings.', 'NPR One app plays your local station plus national stories — like a personal radio.', 'Listen-by-state in the app keeps you connected to home if you travel.'],
    watchOuts: ['Tone is more feature-driven than breaking-news.', 'Some donors prefer to give through their local station, not national NPR.'],
    link: 'https://www.npr.org',
  },
  newsbreak: {
    name: 'NewsBreak (local)',
    cost: 'Free with ads',
    whoFor: 'Local news for your zip code.',
    highlights: ['Pulls together local newspaper articles, weather alerts, and town events.', 'Strong push notifications for severe weather and traffic.', 'Helpful when local papers have closed or paywalled.'],
    watchOuts: ['Quality varies — some content is aggregated from less-vetted sources.', 'Cross-check big claims against AP or Reuters before sharing.'],
    link: 'https://www.newsbreak.com',
  },
};

const SOURCES: { id: Source; label: string }[] = [
  { id: 'applenews', label: 'Apple News+' },
  { id: 'nyt',       label: 'New York Times' },
  { id: 'wsj',       label: 'Wall Street Journal' },
  { id: 'wapo',      label: 'Washington Post' },
  { id: 'ap',        label: 'AP News (free)' },
  { id: 'reuters',   label: 'Reuters (free)' },
  { id: 'npr',       label: 'NPR (free)' },
  { id: 'newsbreak', label: 'NewsBreak (local)' },
];

export default function NewsAppPicker() {
  const [s, setS] = useState<Source>('applenews');
  const pick = PICKS[s];

  return (
    <>
      <SEOHead title="News App Picker for Seniors" description="Compare Apple News+, NYT, WSJ, Washington Post, AP, Reuters, NPR, and NewsBreak. Pick a real news app and skip social-media outrage." path="/tools/news-app-picker" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-slate-50 dark:from-blue-950/20 dark:to-slate-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3"><div className="p-3 bg-blue-500/10 rounded-full"><Newspaper className="h-8 w-8 text-blue-600" /></div></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">News App Picker for Seniors</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Eight calmer ways to read the news, with prices and what each one is best at.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'News App Picker' }]} />

          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>The news on Facebook and X is not really the news</AlertTitle>
            <AlertDescription>What you see on Facebook and X is curated by an algorithm whose goal is to make you angry enough to keep scrolling. That is not the same as being informed. Go DIRECTLY to a real news app — pick one or two below — and skip the outrage feed entirely. You will feel calmer within a week.</AlertDescription>
          </Alert>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick a source</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SOURCES.map(o => (
                  <button key={o.id} onClick={() => setS(o.id)} className={`p-3 rounded-lg border text-left transition-all ${s === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'}`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{pick.name}</Badge>
              <Badge variant="outline" className="ml-2 mb-2">{pick.cost}</Badge>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Best for</p>
              <p className="text-sm mb-4">{pick.whoFor}</p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What is great</p>
              <ul className="space-y-2 mb-4">
                {pick.highlights.map((h, i) => (<li key={i} className="flex gap-3 text-sm"><span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" /><span>{h}</span></li>))}
              </ul>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Watch out for</p>
              <ul className="space-y-2 mb-4">
                {pick.watchOuts.map((w, i) => (<li key={i} className="flex gap-3 text-sm"><span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" /><span>{w}</span></li>))}
              </ul>
              <a href={pick.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-1 text-xs text-primary hover:underline">Visit official site <ExternalLink className="h-3 w-3" /></a>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Bonus: news in audio form</p>
              <p className="text-xs text-muted-foreground mb-2">Pocket Casts (free, with a 4/mo Plus tier) is a clean podcast app for iPhone and Android. Use it for The Daily (NYT), Up First (NPR), What&rsquo;s News (WSJ), and Post Reports (Washington Post). Listening while you cook breakfast is a calmer start to the day than scrolling.</p>
              <p className="text-xs text-muted-foreground">Yahoo News (free with ads) is fine as a quick headline scan, but it pulls from many sources of varying quality — treat it as a starting point, not a destination.</p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">PressReader free with a library card.</p>
              </Link>
              <Link to="/tools/podcast-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Podcast Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find your first three podcasts.</p>
              </Link>
              <Link to="/tools/ai-image-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">AI Image Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tell real photos from AI fakes.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
