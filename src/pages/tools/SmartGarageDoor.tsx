import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Opener {
  name: string;
  price: string;
  whoFor: string;
  install: string;
  app: string;
  pros: string[];
  cons: string[];
  link: string;
}

const OPENERS: Opener[] = [
  {
    name: 'Chamberlain MyQ Smart Garage Hub',
    price: '$30',
    whoFor: 'Best starter pick. Works with most existing openers from the last 25 years. The free app is the reason most people choose this one.',
    install: 'DIY — about 30 minutes with a step ladder and a phone.',
    app: 'myQ (free, no monthly fee for the basics).',
    pros: [
      'Cheapest way to make a regular opener smart.',
      'Open, close, and check the door from anywhere.',
      'Get a phone alert if the door is left open.',
      'Works with Google Home and Amazon Key for in-garage delivery.',
    ],
    cons: [
      'Apple Home support requires extra setup through a hub.',
      'Older add-on features (IFTTT, Google Assistant voice control to close) sometimes need a paid tier.',
    ],
    link: 'https://www.chamberlain.com/smart-garage-control/b/4332',
  },
  {
    name: 'Tailwind iQ3 Pro',
    price: '$90',
    whoFor: 'For people who want one-time price with no monthly fees and full Apple Home, Google, Alexa support out of the box.',
    install: 'DIY — 20 minutes. Plugs into the opener with two wires.',
    app: 'Tailwind (free, no subscription ever).',
    pros: [
      'No monthly fees, no paywalls.',
      'Apple Home, Google Home, Alexa, SmartThings — all built in.',
      'Auto-close after a set time (great for forgetful days).',
      'Works with up to 3 garage doors from one device.',
    ],
    cons: [
      'Pricier upfront than MyQ.',
      'Smaller company — support is email only.',
    ],
    link: 'https://gotailwind.com/products/tailwind-iq3-pro',
  },
  {
    name: 'Aladdin Connect by Genie',
    price: '$60',
    whoFor: 'A solid middle-ground option. Genie makes the opener you already own in many cases, so this is a natural pair.',
    install: 'DIY — about 30 minutes. Comes with a tilt sensor for the door.',
    app: 'Aladdin Connect (free).',
    pros: [
      'Works with most opener brands, not only Genie.',
      'Tilt sensor reports the real door position, not a guess.',
      'Apple Home, Google, Alexa support.',
      'Good track record with senior users — clear, large buttons in the app.',
    ],
    cons: [
      'App can be slow to refresh after Wi-Fi drops.',
      'Tilt sensor battery needs swapping every couple of years.',
    ],
    link: 'https://www.geniecompany.com/aladdin-connect-by-genie',
  },
  {
    name: 'LiftMaster (built-in Wi-Fi models)',
    price: '$300-$500 (full opener)',
    whoFor: 'For anyone replacing the whole opener. LiftMaster is the pro-grade brand most installers carry, with Wi-Fi already inside.',
    install: 'Pro install recommended — $150-$250 labor.',
    app: 'myQ (same app as Chamberlain).',
    pros: [
      'Built-in Wi-Fi, no extra hub.',
      'Quietest belt-drive models on the market.',
      'Battery backup runs the door during a power outage.',
      'Pro-installed — they remove the old one and haul it away.',
    ],
    cons: [
      'Replacing the whole opener is overkill if your current one works fine.',
      'Some advanced myQ features require a $1/month or $10/year plan.',
    ],
    link: 'https://www.liftmaster.com/wi-fi-garage-door-openers/c/wifi',
  },
  {
    name: 'Refoss / Meross Smart Garage Opener',
    price: '$35',
    whoFor: 'Budget Apple Home pick. If you live inside Apple Home and want the cheapest path, this is it.',
    install: 'DIY — 20 minutes.',
    app: 'Meross (free).',
    pros: [
      'Apple Home, Google, Alexa support without a separate hub.',
      'About the same price as MyQ.',
      'No subscription.',
    ],
    cons: [
      'Lesser-known brand — community support is smaller.',
      'App design is functional, not polished.',
    ],
    link: 'https://www.meross.com/en-gc/smart-garage-door-opener/Garage%20Door%20Opener/27',
  },
];

export default function SmartGarageDoor() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Smart Garage Door Opener"
        description="Pick a smart garage door opener — Chamberlain MyQ, Tailwind iQ3, Aladdin Connect, LiftMaster, Meross. Plain-English comparison for seniors."
        path="/tools/smart-garage-door"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-zinc-50 dark:from-slate-950/20 dark:to-zinc-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-slate-500/10 rounded-full">
                <Home className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Garage Door Opener</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Check the garage from your phone. Five honest comparisons for seniors.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart Garage Door Opener' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Why bother making the garage smart?</p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>Pull out of the driveway, second-guess yourself, then check the app — no turning around to drive home.</li>
                <li>Get a phone alert the moment someone opens the door, day or night.</li>
                <li>Crack the door for a delivery, then close it from your chair when the package arrives.</li>
                <li>Set an auto-close at 10pm so a forgotten door does not sit open all night.</li>
                <li>Pick one thing to automate. Most seniors love the nightly auto-close — that one rule alone is worth the price.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? OPENERS : OPENERS.slice(0, 3)).map(o => (
              <Card key={o.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{o.name}</p>
                    <Badge variant="outline">{o.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {o.whoFor}</p>
                  <p className="text-xs text-muted-foreground mb-1"><strong>Install:</strong> {o.install}</p>
                  <p className="text-xs text-muted-foreground mb-3"><strong>App:</strong> {o.app}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {o.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {o.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={o.link} target="_blank" rel="noreferrer"
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
                <p className="font-semibold mb-1">Leave the "auto-open as I arrive" feature off</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Most of these apps offer a location trigger — when your phone gets within a few hundred feet of home, the garage opens on its own. That sounds wonderful when you have arms full of groceries. The tradeoff: if a delivery driver, a friend, or a thief grabs your phone, the garage opens for them too. Phones can also misfire the trigger when GPS is glitchy, leaving the door open while you sit at a stoplight a block away.
                </p>
                <p className="text-xs text-muted-foreground">
                  Better trade: skip the auto-open, and turn ON the auto-close at 10pm rule instead. You get the peace-of-mind half of the benefit without the security risk.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A senior-friendly setup — automate one thing</p>
              <p className="text-xs text-muted-foreground mb-2">
                Do not try to learn every feature on day one. Pick the rule that bothers you the most and set only that.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li><strong>Worried you left it open?</strong> Turn on "alert me when door has been open for 15 minutes."</li>
                <li><strong>Forget at bedtime?</strong> Set "auto-close every night at 10pm."</li>
                <li><strong>Family stops by often?</strong> Share app access with one trusted person, not the whole family.</li>
                <li><strong>That is enough.</strong> Master one rule, then add another in a month if you want.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Worth knowing about install</p>
              <p className="text-xs text-muted-foreground">
                The hub options (MyQ, Tailwind, Aladdin, Meross) bolt onto the ceiling near the existing motor — two screws and two wires. Watch the YouTube video for your specific opener model first. If a step ladder is not safe for you, a handyman or a Best Buy install runs $75-$125. The full LiftMaster opener replacement is a pro job — most homeowners do not do that one alone.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick your first smart device.</p>
              </Link>
              <Link to="/tools/smart-lock-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Lock Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">A natural pair with a smart garage.</p>
              </Link>
              <Link to="/tools/video-doorbell-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Video Doorbell Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">See who is at the door, too.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write your garage Wi-Fi password on a card and tape it inside a kitchen drawer. After a power outage, the hub may need to reconnect, and that little card will save you a 20-minute hunt.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
