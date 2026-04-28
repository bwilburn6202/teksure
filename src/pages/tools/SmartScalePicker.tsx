import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface ScalePick {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const SCALES: ScalePick[] = [
  {
    name: 'Withings Body+',
    price: '$100',
    whoFor: 'Best all-around pick. Trusted brand, clean app, reliable Wi-Fi sync — great for seniors who want one-step weigh-ins.',
    pros: ['Steps on, weight syncs to your phone over Wi-Fi — no buttons.', 'Tracks weight, body fat, water, muscle, bone mass, BMI.', 'Works with Apple Health, Google Fit, Fitbit, MyFitnessPal.', 'Up to 8 users — one scale for the whole household.'],
    cons: ['Initial Wi-Fi setup takes about 10 minutes.', 'Pricier than budget options.'],
    link: 'https://www.withings.com/us/en/body-plus',
  },
  {
    name: 'Eufy Smart Scale C1',
    price: '$26',
    whoFor: 'Best budget pick. Bluetooth-only — you bring your phone close, the scale syncs.',
    pros: ['Under $30 — hard to beat the price.', 'Tracks 12 body metrics including BMI and body fat.', 'Works with Apple Health and Google Fit.', 'Simple, clean Eufy Life app.'],
    cons: ['Bluetooth-only — your phone must be nearby for the sync.', 'No Wi-Fi means no automatic background updates.'],
    link: 'https://www.eufy.com/products/t9146',
  },
  {
    name: 'Renpho Elis 1',
    price: '$25',
    whoFor: 'Another budget winner with the largest senior user base. The Renpho app is the clearest in plain English.',
    pros: ['Big clear display, four sensors for steady readings.', 'Renpho app gives plain-language explanations of each metric.', 'Apple Health, Google Fit, Fitbit, Samsung Health support.', 'Unlimited users — good for adult children to track a parent.'],
    cons: ['Bluetooth-only, like the Eufy.', 'Renpho sends marketing emails unless you turn them off.'],
    link: 'https://www.renpho.com/products/elis-1-smart-body-fat-scale',
  },
  {
    name: 'Garmin Index S2',
    price: '$150',
    whoFor: 'For seniors who already wear a Garmin watch or want the most accurate trend graphs over months.',
    pros: ['Wi-Fi sync straight to Garmin Connect — no phone needed.', 'Color display shows weight trend arrows on the scale itself.', 'Up to 16 users.', 'Best long-term graphs for tracking slow weight changes.'],
    cons: ['Most expensive option here.', 'Garmin Connect app has more features than most seniors need.'],
    link: 'https://www.garmin.com/en-US/p/707081',
  },
  {
    name: 'Apple Health (any regular scale + manual entry)',
    price: '$0 extra',
    whoFor: 'Already have a working scale and an iPhone? You may not need a smart scale at all.',
    pros: ['Open the Health app, tap Weight, type the number — done.', 'Builds the same long-term graph as a smart scale.', 'No batteries, no Wi-Fi, no app pairing problems.', 'Free — keep the scale you own.'],
    cons: ['No body-fat or muscle estimates — weight only.', 'You have to remember to log it (a daily reminder helps).'],
    link: 'https://support.apple.com/guide/iphone/track-your-health-information-iph2db4ab4b9/ios',
  },
];

export default function SmartScalePicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Smart Scale Picker"
        description="Pick a smart bathroom scale for tracking weight, BMI, and body composition — Withings, Eufy, Renpho, Garmin, or stick with Apple Health."
        path="/tools/smart-scale-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-teal-50 dark:from-sky-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Scale className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Scale Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Track weight, BMI, and body composition at home. Five honest picks for seniors.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart Scale Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What a smart scale actually does</p>
              <p className="text-xs text-muted-foreground mb-3">
                You step on. Weight reads in a second or two. The number then sends to your phone (Bluetooth or Wi-Fi) and saves a graph over months and years. Most also estimate body fat, muscle, water, and BMI by sending a tiny, harmless electrical signal through your feet. The graph matters more than any single weigh-in — that is what doctors look at.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? SCALES : SCALES.slice(0, 3)).map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {s.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {s.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {s.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={s.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 5 picks</Button>
            )}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Body-fat numbers are estimates, not medical results</p>
                <p className="text-xs text-muted-foreground">
                  Every home scale measures body fat the same way: bioelectrical impedance, or BIA — a tiny electric signal traveling through your feet. The reading can swing 3-5% based on how hydrated you are, the time of day, recent exercise, or whether your feet are dry. These are <strong>estimates, NOT clinical accuracy</strong>. Use the trend over weeks, not the daily number, and never make a medical decision based on a home scale. For real body composition, ask your doctor about a DEXA scan.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A few tips for steady, useful readings</p>
              <p className="text-xs text-muted-foreground">
                Weigh in at the same time each day — first thing in the morning, after the bathroom, before food or coffee, with bare feet. Place the scale on a hard floor (carpet throws off the reading). If you have a pacemaker, skip the body-fat features and use a regular scale — the BIA signal is small but not recommended for implanted devices.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/blood-pressure-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Blood Pressure Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">Log BP alongside weight in one place.</p>
              </Link>
              <Link to="/tools/fitness-tracker-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fitness Tracker Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair a watch with your new scale.</p>
              </Link>
              <Link to="/tools/nutrition-app-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Nutrition App Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Match meals to weight trends.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: share your weight graph with your doctor at the next visit. A six-month trend tells them more than any single visit weigh-in.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
