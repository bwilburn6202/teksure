import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tv, ChevronRight, Scissors, AlertTriangle, ExternalLink,
} from 'lucide-react';

type WatchType = 'local-news' | 'sports' | 'movies' | 'shows' | 'pbs' | 'live-sports-niche';

interface ServiceRec {
  name: string;
  monthly: number;
  why: string;
  link: string;
  notes?: string;
}

const RECS: Record<WatchType, ServiceRec[]> = {
  'local-news': [
    {
      name: 'Free over-the-air antenna ($25 one-time)',
      monthly: 0,
      why: 'A small indoor antenna picks up your local ABC, NBC, CBS, FOX, and PBS stations free, in HD, forever. Better picture than cable in most cases.',
      link: 'https://www.fcc.gov/consumers/guides/antennas-and-digital-television',
      notes: 'Try Mohu Leaf or Antennas Direct ClearStream — both highly rated, both work in most US homes.',
    },
    {
      name: 'NewsON app',
      monthly: 0,
      why: 'Free app on your phone or smart TV with live local news from 250+ US stations. Pair with the antenna for backup.',
      link: 'https://www.newson.us/',
    },
  ],
  'sports': [
    {
      name: 'YouTube TV',
      monthly: 83,
      why: 'Closest direct replacement for cable for sports — has ESPN, regional sports, and most local channels. The picture is better than cable and you can rewind anything live.',
      link: 'https://tv.youtube.com',
    },
    {
      name: 'Sling TV (Orange + Sports Extra)',
      monthly: 51,
      why: 'Cheaper than YouTube TV. Has ESPN and most sports channels. Skip if you also want regional sports networks for your home team — those usually cost extra.',
      link: 'https://www.sling.com',
    },
  ],
  'movies': [
    {
      name: 'Netflix Standard',
      monthly: 18,
      why: 'Largest movie library and the only one without ads at this price.',
      link: 'https://www.netflix.com',
    },
    {
      name: 'Tubi (free with ads)',
      monthly: 0,
      why: 'Surprisingly large legal free movie library — owned by FOX. Works on every smart TV and Roku.',
      link: 'https://tubitv.com',
    },
    {
      name: 'Local library Hoopla / Kanopy (free with library card)',
      monthly: 0,
      why: 'Most US public libraries give you 10+ free movies a month through Hoopla and Kanopy. Sign up at your library website.',
      link: 'https://www.hoopladigital.com/',
      notes: 'Worth setting up — many seniors do not realize their library card gets them this.',
    },
  ],
  'shows': [
    {
      name: 'Hulu (with ads)',
      monthly: 10,
      why: 'Best for next-day episodes of network TV shows. Cheap with ads.',
      link: 'https://www.hulu.com',
    },
    {
      name: 'Disney+ / Hulu / ESPN+ Bundle',
      monthly: 16,
      why: 'If you also want kid-friendly content for grandkids and any sports, the bundle is the cheapest path.',
      link: 'https://www.disneyplus.com/bundle',
    },
    {
      name: 'PBS Passport (donation to PBS)',
      monthly: 5,
      why: 'A $60+ annual donation to your local PBS station unlocks Passport — a streaming library of every PBS show, current and old. Great for Masterpiece, news, documentaries.',
      link: 'https://www.pbs.org/passport/',
    },
  ],
  'pbs': [
    {
      name: 'PBS Passport',
      monthly: 5,
      why: 'The full PBS library — Masterpiece, NewsHour, documentaries, kids shows. Comes with a $60+ donation to your local PBS station.',
      link: 'https://www.pbs.org/passport/',
    },
    {
      name: 'Free PBS app',
      monthly: 0,
      why: 'Even without Passport, the free app lets you watch many shows live and recent episodes for free.',
      link: 'https://www.pbs.org/',
    },
  ],
  'live-sports-niche': [
    {
      name: 'Direct league apps',
      monthly: 30,
      why: 'NBA League Pass, MLB.tv, NFL+, NHL.tv. Each is $10–$30/month and shows their league in HD. Often cheaper than getting all of cable for one sport.',
      link: 'https://www.nba.com/leaguepass',
      notes: 'Note: most leagues black out your home team\'s local games — you may also need YouTube TV for those.',
    },
    {
      name: 'ESPN+',
      monthly: 12,
      why: 'For UFC, college sports, and a lot of soccer. Does NOT include the main ESPN cable channel — that needs YouTube TV or Sling.',
      link: 'https://plus.espn.com',
    },
  ],
};

const WATCH_OPTIONS: { id: WatchType; label: string; sub: string }[] = [
  { id: 'local-news',         label: 'Local news + weather', sub: 'ABC/NBC/CBS/FOX/PBS for my city' },
  { id: 'sports',             label: 'Live sports — major leagues', sub: 'ESPN, regional sports, my home team' },
  { id: 'live-sports-niche',  label: 'A specific niche sport',       sub: 'NBA, MLB, NHL, UFC, soccer leagues' },
  { id: 'movies',             label: 'Movies',                       sub: 'Older catalog + new releases' },
  { id: 'shows',              label: 'Network TV shows',             sub: 'Sitcoms, dramas, prime-time' },
  { id: 'pbs',                label: 'PBS programming',              sub: 'Masterpiece, NewsHour, documentaries' },
];

export default function CordCutterWizard() {
  const [picks, setPicks] = useState<Set<WatchType>>(new Set());
  const [cableBill, setCableBill] = useState('');

  const toggle = (id: WatchType) => {
    setPicks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const recs = useMemo(() => {
    const out: { type: WatchType; rec: ServiceRec }[] = [];
    Array.from(picks).forEach(t => {
      RECS[t].forEach(r => out.push({ type: t, rec: r }));
    });
    return out;
  }, [picks]);

  const monthlyTotal = useMemo(() => {
    const seen = new Set<string>();
    return recs.reduce((sum, r) => {
      if (seen.has(r.rec.name)) return sum;
      seen.add(r.rec.name);
      return sum + r.rec.monthly;
    }, 0);
  }, [recs]);

  const cable = parseFloat(cableBill) || 0;
  const yearSaved = cable > 0 ? Math.max(0, (cable - monthlyTotal) * 12) : 0;

  return (
    <>
      <SEOHead
        title="Cord Cutter Wizard"
        description="Drop cable without losing the shows you watch. Pick what you actually watch and we will tell you the cheapest streaming combination — including free options most people miss."
        path="/tools/cord-cutter-wizard"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Scissors className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cord Cutter Wizard</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick what you actually watch. We will show you the cheapest streaming combination — and the free options most people miss.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Cord Cutter Wizard' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-3">What do you actually watch? Pick everything that applies.</p>
              <div className="space-y-2 mb-4">
                {WATCH_OPTIONS.map(o => (
                  <label key={o.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      picks.has(o.id) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                    }`}>
                    <Checkbox checked={picks.has(o.id)} onCheckedChange={() => toggle(o.id)} className="mt-1" />
                    <div>
                      <p className="font-medium text-sm">{o.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{o.sub}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <Label htmlFor="bill">Your current cable bill (optional)</Label>
                <Input id="bill" type="number" placeholder="e.g. 145" value={cableBill}
                  onChange={(e) => setCableBill(e.target.value)} className="mt-1 max-w-[200px]" />
                <p className="text-xs text-muted-foreground mt-1">Lets us show what you would save per year.</p>
              </div>
            </CardContent>
          </Card>

          {recs.length > 0 && (
            <>
              <Card className="border-2 border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Your streaming bill</p>
                  <p className="text-4xl font-bold text-green-700 dark:text-green-300">
                    ${monthlyTotal}<span className="text-lg font-medium text-muted-foreground">/month</span>
                  </p>
                  {yearSaved > 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      You would save about <strong>${yearSaved.toLocaleString()}</strong> per year vs your current cable bill.
                    </p>
                  )}
                </CardContent>
              </Card>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recommended services</p>
              <div className="space-y-3 mb-6">
                {recs.map((r, i) => (
                  <Card key={`${r.type}-${i}`} className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                        <p className="font-semibold">{r.rec.name}</p>
                        <Badge variant="outline">{r.rec.monthly === 0 ? 'Free' : `$${r.rec.monthly}/mo`}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{r.rec.why}</p>
                      {r.rec.notes && (
                        <p className="text-xs text-muted-foreground italic mb-2">{r.rec.notes}</p>
                      )}
                      <a href={r.rec.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        Sign up / learn more <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Before you cancel</p>
                  <ol className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary shrink-0">1.</span><span>Run a 1-week test. Subscribe to the streaming services first, leave cable connected. Make sure everything you watch is actually there.</span></li>
                    <li className="flex gap-2"><span className="text-primary shrink-0">2.</span><span>Buy a Roku ($30) or Amazon Fire Stick ($30) for any TV that is not already smart. Plugs into HDMI, runs every streaming app.</span></li>
                    <li className="flex gap-2"><span className="text-primary shrink-0">3.</span><span>Call your cable company\'s "retention" line — when you say you are cancelling, they often offer 50% off for a year. Worth asking before pulling the plug.</span></li>
                    <li className="flex gap-2"><span className="text-primary shrink-0">4.</span><span>Return the cable box and modem in person. Get a receipt with serial numbers. Companies have charged seniors $200+ for "lost equipment" they returned.</span></li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Watch out for "internet-only" rate hikes</p>
                    <p className="text-muted-foreground">
                      Cable companies sometimes raise your internet price the moment you drop TV — bundles can be cheaper than internet alone. Confirm the new internet price in writing before you cancel TV. If they hike you, look at fiber (Frontier, AT&T) or fixed wireless (T-Mobile, Verizon) as alternatives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/streaming-service-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Streaming Service Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Senior-friendly recommendations.</p>
              </Link>
              <Link to="/tools/streaming-calculator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Streaming Calculator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Total cost of all your services.</p>
              </Link>
              <Link to="/tools/bill-negotiator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bill Negotiator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Negotiate before you cancel.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
