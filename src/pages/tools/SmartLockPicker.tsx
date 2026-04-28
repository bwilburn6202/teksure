import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Lock {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const LOCKS: Lock[] = [
  {
    name: 'August Wi-Fi Smart Lock (4th Gen)',
    price: '$230',
    whoFor: 'Best for renters or homeowners who do not want to replace the existing deadbolt.',
    pros: [
      'Mounts on the inside — your existing key still works.',
      'Auto-unlock as you walk up.',
      'Apple Home, Google, Alexa support.',
      'No need for a new deadbolt or hub.',
    ],
    cons: [
      'Bulky on the inside.',
      'Battery is 4 months — you change it.',
    ],
    link: 'https://august.com/products/august-wi-fi-smart-lock-4th-generation',
  },
  {
    name: 'Schlage Encode Plus',
    price: '$300',
    whoFor: 'Anyone replacing a deadbolt for the long term — the most reliable smart deadbolt.',
    pros: [
      'Solid metal build, looks like a regular deadbolt.',
      'Apple Home Key (tap your iPhone or Apple Watch — no app).',
      'Wi-Fi built in.',
      'Up to 250 unique unlock codes for family.',
    ],
    cons: [
      'Replacing a deadbolt requires basic handyman skills.',
      'Battery is 6 months.',
    ],
    link: 'https://www.schlage.com/en/home/keypad-locks/encode-plus.html',
  },
  {
    name: 'Yale Assure Lock 2',
    price: '$220',
    whoFor: 'Cheaper full-deadbolt option. Multiple variations (with/without keypad, key/no key).',
    pros: [
      'Pick the model — touchscreen, keypad, or key-free.',
      'Wi-Fi or Z-Wave variants.',
      'Apple Home, Google, Alexa support.',
    ],
    cons: [
      'Touchscreen variant scratches over time.',
      'Slightly less polished app than August or Schlage.',
    ],
    link: 'https://shopyalehome.com/products/yale-assure-lock-2',
  },
  {
    name: 'Level Lock+',
    price: '$340',
    whoFor: 'For anyone who hates how big smart locks look. Level fits inside a normal deadbolt.',
    pros: [
      'Indistinguishable from a regular deadbolt — no big keypad.',
      'Apple Home Key (tap iPhone, no app).',
      'Most premium-looking smart lock.',
    ],
    cons: [
      'Most expensive option here.',
      'AAA battery in the lock — needs swap every year.',
    ],
    link: 'https://level.co/products/lock-plus',
  },
  {
    name: 'Wyze Lock',
    price: '$130',
    whoFor: 'Budget option. Mounts inside (like August), works with the free Wyze app.',
    pros: [
      'Half the price of August.',
      'Auto-unlock works.',
      'Wyze ecosystem if you have other Wyze cams.',
    ],
    cons: [
      'No Apple Home support (Google + Alexa only).',
      'Wyze had a security incident in 2023; trust slowly being rebuilt.',
    ],
    link: 'https://www.wyze.com/products/wyze-lock',
  },
];

export default function SmartLockPicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Smart Lock Picker"
        description="Choose the right smart lock — August, Schlage, Yale, Level, or Wyze. Plain-English pros and cons, install requirements, app support."
        path="/tools/smart-lock-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-zinc-50 dark:from-slate-950/20 dark:to-zinc-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-slate-500/10 rounded-full">
                <Lock className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Lock Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Unlock your front door with your phone, a code, or your face. Five honest comparisons.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart Lock Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Smart-lock benefits — and tradeoffs</p>
              <p className="text-xs text-muted-foreground mb-3">
                The good: never get locked out, give a guest a temporary code, see when family arrived home, lock the door from your bed. The not-good: batteries die (always have a physical key backup), Wi-Fi outages can lock you out of remote access, and a smart lock is a computer that can be hacked. Pick a name brand, pair it with strong app password, and keep the old key.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? LOCKS : LOCKS.slice(0, 3)).map(l => (
              <Card key={l.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{l.name}</p>
                    <Badge variant="outline">{l.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {l.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {l.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {l.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={l.link} target="_blank" rel="noreferrer"
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
                <p className="font-semibold mb-1">Three rules for any smart lock</p>
                <ol className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">1.</span><span>Always keep your old physical key. Hidden, with a friend, or in a lockbox. The lock\'s battery WILL die at the worst possible time.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">2.</span><span>Set a unique app password and turn on 2FA. Reusing a password here is the same as handing your house keys to a stranger.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">3.</span><span>Never leave the bypass-key code at the default. Most locks ship with 1234 — change it the first day.</span></li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Worth knowing about installation</p>
              <p className="text-xs text-muted-foreground">
                "Mounts on the inside" locks (August, Wyze) take 10 minutes — Phillips screwdriver only. "Replaces the deadbolt" locks (Schlage, Yale, Level) take 30-45 minutes — slightly more skill. A handyman or Best Buy installation is usually $50-$100 if you do not want to do it yourself.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First device picks — many seniors start here.</p>
              </Link>
              <Link to="/tools/home-security-camera-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Home Security Camera</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with a doorbell camera.</p>
              </Link>
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">Track your physical keys too.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: walk the door with the lock unscrewed before buying. Some smart locks bind in older doors. Take measurements (deadbolt thickness, door alignment) first.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
