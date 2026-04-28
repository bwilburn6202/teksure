import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Pick {
  name: string;
  price: string;
  whoItFits: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'iRobot Roomba j7+',
    price: '$600 with self-empty base',
    whoItFits: 'Best mainstream pick. For folks who want the bin to empty itself for weeks at a time and a robot that is smart about cords and pet messes.',
    pros: [
      'AI obstacle avoidance — steers around shoes, charging cables, and pet accidents',
      'Self-empty base holds about 60 days of dirt before you touch it',
      'Strong app, voice control with Alexa or Google',
      'iRobot has been making these the longest — parts and support are solid',
    ],
    cons: [
      'Vacuum only — no mop',
      'Costs more than the others on this list',
      'Mapping is fine but not the best in class',
    ],
    link: 'https://www.irobot.com/en_US/roomba/j7-plus.html',
  },
  {
    name: 'Eufy X10 Pro Omni',
    price: '$550',
    whoItFits: 'For hard floors plus a few rugs. The one robot here that vacuums and mops well in the same run, with a base that washes the mop pads.',
    pros: [
      'Vacuums and mops in one pass — pads lift up over carpet',
      'Self-empty plus self-wash base — minimal hands-on cleaning',
      'Strong suction (8,000 Pa) for pet hair on hard floors',
      'No monthly subscription required',
    ],
    cons: [
      'Big base station — needs about 18 inches of free wall space',
      'Mop function works best on tile and sealed wood, not deep carpet',
      'App is good, not great',
    ],
    link: 'https://us.eufy.com/products/t2351',
  },
  {
    name: 'Roborock Q5+',
    price: '$330',
    whoItFits: 'Best value with a self-empty base. A great middle pick for a one-story home with mostly hard floors and short rugs.',
    pros: [
      'Self-empty base at the lowest price on this list',
      'Solid mapping — saves the layout of your home and lets you skip rooms',
      'Quiet for a robot vacuum',
      '180-minute battery — covers larger homes on one charge',
    ],
    cons: [
      'No obstacle avoidance — will roll over a sock or a charging cable',
      'No mop on this model (the Q5 Pro+ adds a basic mop for about $100 more)',
      'App asks for an account and your home Wi-Fi',
    ],
    link: 'https://us.roborock.com/pages/roborock-q5-plus',
  },
  {
    name: 'Wyze Robot Vacuum',
    price: '$240',
    whoItFits: 'The cheapest robot vacuum that still does a real job. For a small apartment, condo, or one-story home where you do not need fancy features.',
    pros: [
      'Lowest price for a robot that maps the room (most cheap robots do not)',
      'Wyze app is friendly and the brand is known for plain-English support',
      'Lidar mapping at this price is rare',
      'No subscription needed for basic use',
    ],
    cons: [
      'No self-empty base — you empty the bin after every run or two',
      'Vacuum only, no mop',
      'Customer service is email-based, not phone — slower if something breaks',
    ],
    link: 'https://www.wyze.com/products/wyze-robot-vacuum',
  },
  {
    name: 'Shark IQ Robot (RV1001AE)',
    price: '$300',
    whoItFits: 'Costco-friendly, simple to set up. For folks who want a recognizable American brand and a no-fuss robot from a big-box store with a good return policy.',
    pros: [
      'Self-empty base at a fair price',
      'Simple setup — Shark calls a US-based support line that picks up',
      'Sold at Costco, Target, and Walmart with strong return windows',
      'Works with Alexa, Google, and the Shark app',
    ],
    cons: [
      'Mapping is basic — it learns your floor plan slowly',
      'No obstacle avoidance for cords or socks',
      'A bit louder than the Roborock or Eufy',
    ],
    link: 'https://www.sharkclean.com/robot-vacuums/',
  },
];

const SKIP_REASONS = [
  {
    title: 'You live in a very small space',
    detail: 'Under 600 square feet, a stick vacuum or a small upright will finish faster than a robot can map the room. You do not need to spend $300 to clean two rooms.',
  },
  {
    title: 'You have a lot of cords and clutter on the floor',
    detail: 'Robot vacuums get tangled in phone chargers, fan cords, and shoelaces. Only the Roomba j7+ and a few high-end Roborocks reliably steer around them. If you have not picked up cords in years, expect daily rescue runs.',
  },
  {
    title: 'You have a pet that gets anxious around moving things',
    detail: 'Some dogs and cats panic when a robot starts up. If your pet hides for hours after the vacuum runs, that is a real welfare issue. Try borrowing a friend\'s robot for a weekend before you spend the money.',
  },
  {
    title: 'You have a multi-floor home and only want one robot',
    detail: 'Robots cannot climb stairs. You can carry the same one upstairs and downstairs, but the map gets confused and the cleaning suffers. Plan on one robot per floor or stick with a regular vacuum.',
  },
  {
    title: 'You have deep carpet or shag rugs',
    detail: 'Most robots — including everything on this list — cannot lift dirt out of plush or shag carpet. They will roll over the top and miss most of the deep dust. Save your money for an upright vacuum.',
  },
  {
    title: 'Stairs and steep door thresholds',
    detail: 'Robots stop at stairs (good) but they also get stuck on door thresholds taller than about half an inch. If your home has a sunken living room or thick rug edges, the robot will beep for help several times a run.',
  },
];

export default function RobotVacuumPicker() {
  const [showSkip, setShowSkip] = useState(false);

  return (
    <>
      <SEOHead
        title="Robot Vacuum Picker"
        description="Honest robot vacuum comparison for seniors. Roomba, Roborock, Eufy, Shark, and Wyze — who needs self-empty, who needs a mop, and when to skip robot vacuums."
        path="/tools/robot-vacuum-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Robot Vacuum Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Roomba, Roborock, Eufy, Shark, or Wyze? An honest comparison for seniors — including when to skip robot vacuums altogether.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Robot Vacuum Picker' }]} />

          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <AlertTriangle className="h-4 w-4" /> Watch out for monthly subscription brands
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                A few newer robot vacuum brands (and some premium models) now lock features behind a monthly cloud subscription — saved room maps, no-go zones, scheduled cleaning, even voice control. If a robot needs $5 to $10 a month forever to keep working the way the box promised, that is a real cost over five years. Every pick on this page works fully without a paid subscription. If a salesperson pushes a different model, ask the question out loud: "Does anything on this robot stop working if I cancel a subscription?"
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-8">
            {PICKS.map((p, i) => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <span className="font-bold text-primary text-sm w-5 h-5 flex items-center justify-center">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">{p.name}</p>
                      <Badge variant="outline" className="mt-1">{p.price}</Badge>
                    </div>
                  </div>

                  <p className="text-sm mb-3"><span className="font-semibold">Who it fits: </span>{p.whoItFits}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1.5">Pros</p>
                      <ul className="space-y-1">
                        {p.pros.map((pro, k) => (
                          <li key={k} className="flex gap-2 text-sm">
                            <span className="text-emerald-600 shrink-0">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-1.5">Cons</p>
                      <ul className="space-y-1">
                        {p.cons.map((con, k) => (
                          <li key={k} className="flex gap-2 text-sm">
                            <span className="text-rose-600 shrink-0">−</span>
                            <span>{con}</span>
                          </li>
                        ))}
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

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick guide: which feature do you actually need?</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>Self-empty base:</strong> worth it if you have pets, allergies, or you do not want to bend down to a small bin every other day. Adds about $100 to $150 to the price.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>Vacuum plus mop:</strong> only worth it if at least 60% of your floors are hard surface (tile, sealed wood, vinyl). On mostly carpet, the mop sits unused.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>Lidar mapping:</strong> needed if you want to tell the robot "skip the bedroom" or "clean the kitchen now." Bump-and-go robots without a map will run forever and miss spots.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>Obstacle avoidance:</strong> only the Roomba j7+ on this list does it well. Worth the extra money if you have a pet or kids who leave items on the floor.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <button
                onClick={() => setShowSkip(!showSkip)}
                className="w-full flex items-center justify-between text-left"
              >
                <p className="text-sm font-semibold">When NOT to buy a robot vacuum</p>
                <ChevronRight className={`h-4 w-4 transition-transform ${showSkip ? 'rotate-90' : ''}`} />
              </button>
              {showSkip && (
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-muted-foreground">A robot vacuum is not the right answer for every home. Here are the cases where a regular vacuum (or a hired cleaner) gives you more for your money.</p>
                  {SKIP_REASONS.map((r, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border bg-muted/20">
                      <p className="font-medium text-sm mb-1">{r.title}</p>
                      <p className="text-sm text-muted-foreground">{r.detail}</p>
                    </div>
                  ))}
                </div>
              )}
              {!showSkip && (
                <p className="text-sm text-muted-foreground mt-2">A robot vacuum is the wrong tool for some homes. Tap to see six honest reasons to skip it.</p>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button asChild variant="outline" size="sm">
              <a href="https://www.consumerreports.org/appliances/robotic-vacuums/" target="_blank" rel="noreferrer" className="gap-1">
                Consumer Reports robot vacuum ratings <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Bulbs, plugs, doorbells — what to add first.</p>
              </Link>
              <Link to="/tools/senior-friendly-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior-Friendly Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">Apps that pair well with smart home gear.</p>
              </Link>
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tile and AirTag picks for keys, bags, remotes.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
