import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const PICKS = [
  { name: 'Sense Home Energy Monitor', price: '$300', best: 'Top-rated. Identifies INDIVIDUAL devices automatically. "Your dryer is on", "Your old fridge uses 30% more power than average."', good: 'Best at finding hidden energy hogs.' },
  { name: 'Emporia Vue', price: '$120', best: 'Cheaper Sense alternative. Tracks per-circuit (you connect to specific breakers).', good: 'Best value — clamps directly on breakers.' },
  { name: 'Span Smart Panel', price: '$3,500+ installed', best: 'Replaces your home\'s electrical panel. Tracks every circuit, controls them, integrates with solar.', good: 'For new construction or panel replacement.' },
  { name: 'Smart plugs (Wyze, Kasa)', price: '$10-15 each', best: 'Per-device tracking. Plug into a smart plug; monitor in app.', good: 'Best for one-device tracking (find power-hungry appliances).' },
  { name: 'Your utility\'s app', price: 'FREE', best: 'Most utilities now show daily/hourly usage in their app. Often free.', good: 'Already paying for it.' },
];

export default function HomeEnergyMonitor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Energy Monitor — Sense, Emporia, Smart Plugs | TekSure" description="See exactly which appliance is driving your electric bill. Plain-English picks for energy monitors that find hidden waste." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Energy Monitor</h1>
          <p className="text-lg text-muted-foreground">See where every kilowatt actually goes.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why bother</h2>
            <p className="text-sm">Most homeowners have NO idea what device drives their bill. An old fridge could cost $200/year extra. A failing AC could double its draw. Energy monitors find these hidden costs in weeks.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Things you\'ll discover</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your old basement fridge using $20/month for 6 cans of soda.</li>
              <li>The hot water heater fighting a leak you didn\'t know about.</li>
              <li>"Vampire" devices (TV, computer, microwave) drawing 5-15W each, 24/7.</li>
              <li>An aging AC condenser drawing too much amperage = imminent failure.</li>
              <li>Pool pump running unnecessarily.</li>
              <li>Hidden circuit you forgot you had.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sense / Emporia</strong> — must be installed in your electrical panel. DIY if comfortable, OR pay an electrician $100-200.</li>
              <li><strong>Smart plugs</strong> — just plug in. No electrician needed.</li>
              <li><strong>Utility app</strong> — already there. Just sign in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start free</h3>
            <p className="text-sm text-muted-foreground">Sign in to your utility\'s app. Most show hour-by-hour usage now. Look for spikes. Cross-reference what you were doing — "8pm Sunday spike = oven for dinner". Builds intuition before spending on hardware.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
