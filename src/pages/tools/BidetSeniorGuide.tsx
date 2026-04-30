import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bath } from 'lucide-react';

const PICKS = [
  { name: 'TUSHY Classic 3.0', cost: '$130', best: 'Beginner. Cold water only. Easy install.', good: 'Best beginner.' },
  { name: 'TUSHY Spa', cost: '$180', best: 'Warm + cold water mix.', good: 'Best mid-range.' },
  { name: 'BioBidet Bliss', cost: '$700', best: 'Heated seat, dryer, deodorizer.', good: 'Best premium.' },
  { name: 'TOTO Washlet C5', cost: '$700', best: 'Japanese quality. Most popular.', good: 'Best Japanese.' },
  { name: 'Brondell Swash 1400', cost: '$650', best: 'Premium with all features.', good: 'Best with features.' },
];

export default function BidetSeniorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bidet Guide for Seniors | TekSure" description="Bidet attachments for senior bathrooms. Plain-English picks + benefits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bath className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bidet for Seniors</h1>
          <p className="text-lg text-muted-foreground">Better hygiene. Less reaching. Senior favorite.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Less reaching/twisting.</li>
              <li>Better hygiene than paper.</li>
              <li>Reduces UTIs (women).</li>
              <li>Helps after surgery / hemorrhoids.</li>
              <li>Less toilet paper = save $$$.</li>
              <li>Eco-friendly.</li>
              <li>Once tried — never go back.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install (15-30 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Turn off water at toilet.</li>
              <li>Disconnect supply line.</li>
              <li>Install T-valve to feed bidet.</li>
              <li>Attach bidet to toilet seat.</li>
              <li>Reconnect water.</li>
              <li>For premium models — need outlet near (electrician).</li>
              <li>Most basic ones DIY in 15 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable spray pressure.</li>
              <li>Warm water (avoid cold shock).</li>
              <li>Heated seat (winter).</li>
              <li>Dryer (no toilet paper needed).</li>
              <li>Self-cleaning nozzle.</li>
              <li>Side-mounted controls (don&apos;t reach behind).</li>
              <li>Slow-close lid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cold water OK?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cold water — many adapt fine.</li>
              <li>Warm water more comfortable, especially winter.</li>
              <li>Mid-range models easy upgrade.</li>
              <li>Hot water needs power outlet near toilet.</li>
              <li>Test cold first ($130) — if works, great.</li>
              <li>If not — upgrade to warm.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Premium worth it?</h3>
            <p className="text-sm text-muted-foreground">$700 TOTO Washlet feels like luxury hotel. Heated seat, dryer, warm water = no toilet paper needed. Senior favorite. Pays back in toilet paper savings + comfort. If $700 too much — TUSHY Spa $180 = 80% benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
