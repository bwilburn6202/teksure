import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ChevronRight, ExternalLink } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'SilverSneakers',
    cost: 'Free with most Medicare Advantage plans',
    bestFor: 'Most US seniors. Free fitness center membership + on-demand classes.',
    pros: [
      'Free if your Medicare Advantage plan includes it.',
      'Access to 15,000+ gyms (Anytime Fitness, LA Fitness, etc).',
      'On-demand and live classes — chair yoga, strength, cardio.',
      'Senior-paced and modeled.',
    ],
    cons: ['Original Medicare does NOT include it — only Advantage plans do.'],
    link: 'https://www.silversneakers.com',
  },
  {
    name: 'Renpho Health (free)',
    cost: 'Free',
    bestFor: 'Step counting, weight tracking, simple progress charts.',
    pros: [
      'Pairs with Renpho smart scale ($25-$40) for weight + body composition.',
      'No subscription, no ads.',
      'Simple charts that show trends, not noise.',
    ],
    cons: ['You need the scale to get the most out of it.'],
    link: 'https://renpho.com/products/elis-1-smart-body-fat-scale',
  },
  {
    name: 'Apple Fitness+',
    cost: '$10/mo or free with Apple One ($20/mo bundle)',
    bestFor: 'iPhone / Apple Watch users. Wide range of guided workout videos.',
    pros: [
      'Senior-friendly "30 Days of Fitness for Beginners" + chair workouts.',
      'Walking + meditation programs.',
      'Apple Watch syncs heart rate to the workout video — beautiful integration.',
      '14-day free trial.',
    ],
    cons: ['Needs an iPhone, iPad, or Apple TV.', 'Smaller library than Peloton.'],
    link: 'https://www.apple.com/apple-fitness-plus/',
  },
  {
    name: 'Peloton App',
    cost: '$13/mo (no equipment needed)',
    bestFor: 'Anyone who wants the most polished workout videos. No bike required for the App tier.',
    pros: [
      'Great strength, yoga, cardio, walking, and meditation classes.',
      'Excellent senior-paced sections.',
      'Works on any phone, tablet, computer, or smart TV.',
    ],
    cons: ['Subscription only — no free tier.'],
    link: 'https://www.onepeloton.com/app',
  },
  {
    name: 'Down Dog (yoga, walking)',
    cost: 'Free for first month, $13/mo or $90/year',
    bestFor: 'Yoga and walking workouts. Customizable difficulty.',
    pros: [
      'No two classes are alike — algorithm generates them.',
      'Set difficulty, voice, music, length — fully tailored.',
      'Senior + chair-yoga options.',
    ],
    cons: ['Subscription required after first month free.'],
    link: 'https://www.downdogapp.com',
  },
  {
    name: 'Walk at Home (Leslie Sansone)',
    cost: 'Free on YouTube',
    bestFor: 'Indoor walking workouts. Decades of classes, beloved by seniors.',
    pros: [
      'Completely free on YouTube — search "Walk at Home Leslie Sansone".',
      'No equipment beyond standing room.',
      'Senior-tested, low-impact, joint-friendly.',
    ],
    cons: ['No tracking; you have to count your own minutes.'],
    link: 'https://www.youtube.com/@walkathome',
  },
];

export default function SeniorFitnessApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Senior Fitness Apps"
        description="Six fitness apps and programs that work for seniors — SilverSneakers (often free), Apple Fitness+, Peloton App, Walk at Home, Down Dog. Honest comparison."
        path="/tools/senior-fitness-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Senior Fitness Apps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six app and program picks that actually work for seniors. SilverSneakers is free for most Medicare Advantage members.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Senior Fitness Apps' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Check SilverSneakers first</p>
              <p className="text-xs text-muted-foreground">
                If you have Medicare Advantage (a "Part C" plan), there\'s an 80%+ chance you have FREE SilverSneakers — covers gyms AND on-demand classes. Check your plan website or call the member-services number on your insurance card before paying for any other app.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>

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
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Talk to your doctor first</p>
              <p className="text-xs text-muted-foreground">
                Especially for strength training or longer cardio. Your doctor or PT can recommend modifications based on knees, back, heart, or balance. Many also write a referral that gets fitness covered by insurance.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fitness-tracker-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fitness Tracker Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Hardware to pair with the app.</p>
              </Link>
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection</p>
                <p className="text-xs text-muted-foreground mt-0.5">Safety while exercising solo.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick a plan that includes SilverSneakers.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pick something you would actually do. The best fitness app is the one you open three times a week.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
