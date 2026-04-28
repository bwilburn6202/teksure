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
import { Activity, ChevronRight, ExternalLink } from 'lucide-react';

type Want = 'apple-house' | 'android-house' | 'fall-detection' | 'minimal' | 'budget' | 'long-battery' | 'medical-readings';

interface Pick {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Record<string, Pick> = {
  appleSE: {
    name: 'Apple Watch SE',
    price: '$249',
    whoFor: 'Best mainstream pick if you have an iPhone.',
    pros: ['Fall detection', 'Heart rate, ECG', 'Apple Pay, GPS', 'CarPlay-friendly notifications'],
    cons: ['Battery is 18 hours — needs nightly charging', 'Costs more than dedicated fitness trackers'],
    link: 'https://www.apple.com/shop/buy-watch/apple-watch-se',
  },
  applePro: {
    name: 'Apple Watch Series 10',
    price: '$399',
    whoFor: 'iPhone owners who want every health feature.',
    pros: ['Everything the SE has plus blood-oxygen, sleep tracking, larger screen', 'Better swim ratings'],
    cons: ['Same 18-hour battery', 'Significant upgrade in cost over SE for marginal everyday gain'],
    link: 'https://www.apple.com/shop/buy-watch/apple-watch',
  },
  pixelWatch: {
    name: 'Google Pixel Watch 3',
    price: '$349',
    whoFor: 'Android users — works best with Pixel and Samsung phones.',
    pros: ['Fall detection', 'Strong sleep tracking', 'Free Fitbit Premium 6 months'],
    cons: ['About 24-hour battery', 'No Apple Pay (uses Google Pay)'],
    link: 'https://store.google.com/us/product/pixel_watch_3',
  },
  galaxy: {
    name: 'Samsung Galaxy Watch 7',
    price: '$300',
    whoFor: 'Samsung phone owners.',
    pros: ['Best Android integration if you have a Galaxy', 'Body composition reading (rare)', 'Solid battery (~36 hours)'],
    cons: ['Some health features iPhone-restricted', 'Cheaper Watch FE is similar at half the price'],
    link: 'https://www.samsung.com/us/watches/all-watches/',
  },
  fitbit: {
    name: 'Fitbit Charge 6',
    price: '$160',
    whoFor: 'Anyone who wants step + sleep tracking without the smartwatch.',
    pros: ['7-day battery', 'Built-in GPS', 'Heart rate, ECG, sleep tracking', 'Works on iPhone or Android'],
    cons: ['No fall detection (use a watch instead)', 'Some features need Fitbit Premium ($10/mo)'],
    link: 'https://www.fitbit.com/global/us/products/trackers/charge6',
  },
  garmin: {
    name: 'Garmin Vivosmart 5',
    price: '$150',
    whoFor: 'No-fuss step counter that lasts a week between charges.',
    pros: ['7-day battery', 'Step + sleep + heart rate', 'No subscription needed for any features', 'Slim, light, sleep-comfortable'],
    cons: ['No GPS — needs phone for outdoor distance', 'Smaller, harder-to-read screen'],
    link: 'https://www.garmin.com/en-US/p/733148',
  },
  galaxyFit: {
    name: 'Samsung Galaxy Fit 3',
    price: '$60',
    whoFor: 'Cheapest option that still works well.',
    pros: ['$60', '13-day battery', 'Step, sleep, heart rate', 'Works on iPhone or Android'],
    cons: ['No GPS, no fall detection', 'Basic screen'],
    link: 'https://www.samsung.com/us/wearables/galaxy-fit3/',
  },
};

function recommend(wants: Set<Want>): Pick[] {
  const result: Pick[] = [];

  if (wants.has('fall-detection')) {
    if (wants.has('apple-house')) result.push(PICKS.appleSE);
    else if (wants.has('android-house')) result.push(PICKS.pixelWatch);
    else result.push(PICKS.appleSE, PICKS.pixelWatch);
  }

  if (wants.has('apple-house') && !result.includes(PICKS.appleSE)) {
    result.push(PICKS.appleSE);
  }

  if (wants.has('android-house') && !result.includes(PICKS.pixelWatch) && !result.includes(PICKS.galaxy)) {
    result.push(PICKS.galaxy);
  }

  if (wants.has('long-battery')) {
    result.push(PICKS.garmin);
  }

  if (wants.has('budget')) {
    result.push(PICKS.galaxyFit);
  }

  if (wants.has('minimal') || wants.has('medical-readings')) {
    result.push(PICKS.fitbit);
  }

  if (result.length === 0) {
    result.push(PICKS.fitbit, PICKS.appleSE);
  }

  // Dedupe
  const seen = new Set<string>();
  return result.filter(p => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  }).slice(0, 3);
}

const WANT_OPTIONS: { id: Want; label: string }[] = [
  { id: 'apple-house',     label: 'I have an iPhone' },
  { id: 'android-house',   label: 'I have an Android' },
  { id: 'fall-detection',  label: 'Fall detection matters' },
  { id: 'medical-readings', label: 'Heart rate / ECG / sleep' },
  { id: 'long-battery',    label: 'Battery should last a week+' },
  { id: 'minimal',         label: 'Step + sleep only, nothing fancy' },
  { id: 'budget',          label: 'Cheapest that works' },
];

export default function FitnessTrackerPicker() {
  const [wants, setWants] = useState<Set<Want>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: Want) => {
    setWants(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const picks = useMemo(() => recommend(wants), [wants]);

  return (
    <>
      <SEOHead
        title="Fitness Tracker Picker"
        description="Apple Watch, Pixel Watch, Galaxy Watch, Fitbit, Garmin — which fitness tracker fits you? Pick what matters and we will narrow it to one or two."
        path="/tools/fitness-tracker-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Activity className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Fitness Tracker Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Apple Watch, Fitbit, or Garmin? Pick what matters — get one or two clear recommendations.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Fitness Tracker Picker' }]} />

          {!submitted ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-3">What matters? Pick everything that applies.</p>
                <div className="space-y-2 mb-5">
                  {WANT_OPTIONS.map(o => (
                    <label key={o.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        wants.has(o.id) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                      }`}>
                      <Checkbox checked={wants.has(o.id)} onCheckedChange={() => toggle(o.id)} />
                      <span className="font-medium text-sm">{o.label}</span>
                    </label>
                  ))}
                </div>
                <Button onClick={() => setSubmitted(true)} disabled={wants.size === 0} size="lg" className="gap-2 w-full sm:w-auto">
                  Show recommendations <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <Badge variant="outline">{picks.length} recommendation{picks.length !== 1 ? 's' : ''}</Badge>
                  <Button variant="outline" size="sm" onClick={() => { setWants(new Set()); setSubmitted(false); }}>Start over</Button>
                </CardContent>
              </Card>

              <div className="space-y-4 mb-6">
                {picks.map(p => (
                  <Card key={p.name} className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                        <p className="font-semibold text-base">{p.name}</p>
                        <Badge variant="outline">{p.price}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.whoFor}</p>

                      <div className="grid sm:grid-cols-2 gap-2 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                          <ul className="space-y-0.5">
                            {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                          <ul className="space-y-0.5">
                            {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                          </ul>
                        </div>
                      </div>

                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        View on official site <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-muted/30">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Things people forget</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span><span>You have to actually wear it. The fanciest watch is useless on the dresser.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Most fall-detection requires the watch on your wrist. Take it off at night and you lose protection.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Rechargeable batteries last 2-3 years. Plan to replace the watch eventually — Apple charges $99 for battery replacement.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn it on after you buy.</p>
              </Link>
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with the watch too.</p>
              </Link>
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First smart-home device.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
