import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const PICKS = [
  { name: 'Husqvarna Automower', price: '$1,500-5,000', best: 'Best premium. Up to 1.25 acres. GPS tracking. Takes itself out, mows, returns to charge.', good: 'Best built; long-lasting.' },
  { name: 'Worx Landroid', price: '$1,000-2,000', best: 'Mid-range. Up to 0.5 acre.', good: 'Best mid-range.' },
  { name: 'Mammotion LUBA / Yarbo', price: '$2,000-3,000', best: 'Newer wireless models — no boundary wire. RTK GPS for navigation.', good: 'Best wireless install.' },
  { name: 'Segway Navimow', price: '$2,500', best: 'Wireless RTK. Quiet. Smart obstacle avoidance.', good: 'Best wireless mid-range.' },
  { name: 'Greenworks Optimow', price: '$1,300-2,000', best: 'Green-power affordable.', good: 'Budget pick.' },
];

export default function RoboticMowerPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robotic Lawn Mower Picker | TekSure" description="Set and forget — robot mows your lawn while you have coffee. Plain-English picks for robotic mowers in 2025." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robotic Lawn Mower</h1>
          <p className="text-lg text-muted-foreground">Set it. Forget it. Lawn always neat.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why robotic mowers?</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Mows DAILY — short trims keep grass healthier.</li>
              <li>Eliminates the back/knee pain of pushing a mower.</li>
              <li>Quiet — many run while you sleep.</li>
              <li>Small clippings act as natural fertilizer.</li>
              <li>3-7 year payback vs hiring a service.</li>
              <li>One $1,500 robot replaces 7 years of pushing.</li>
            </ul>
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
            <h2 className="font-bold text-xl mb-3">Wired vs wireless</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wired (Husqvarna, Worx)</strong> — buried boundary wire defines mowing area. Tedious DIY install (4-8 hours) or $300-500 pro install.</li>
              <li><strong>Wireless RTK GPS (Mammotion, Segway)</strong> — no wire. Just place a GPS antenna on a roof or pole. Newer, more expensive, but install is 1-2 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth knowing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most can\'t handle slopes over 20-25 degrees.</li>
              <li>Need a flat charging dock area near power.</li>
              <li>Theft worry — many have GPS lock + alarm.</li>
              <li>Bring inside in winter (snow, hard freezes).</li>
              <li>Replace blades every 1-3 months ($30/year).</li>
              <li>Battery lasts 3-5 years. Replacement: $150-300.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most senior yards</h3>
            <p className="text-sm text-muted-foreground">If your lawn is under 0.25 acre and mostly flat — Worx Landroid. If bigger or hillier — Husqvarna Automower 320. Both rated for senior-friendly install if you can DIY the boundary wire.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
