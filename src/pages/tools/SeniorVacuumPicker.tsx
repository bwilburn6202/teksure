import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

const PICKS = [
  { name: 'Shark Stratos Cordless', price: '$300-400', best: 'Lightweight (5-7 lbs). Strong suction. Self-cleaning brush roll.', good: 'Best balance of power and weight.' },
  { name: 'Dyson V8 / V12', price: '$300-700', best: 'Premium cordless. Best filtration. Convertible — lift off the head, becomes a small handheld.', good: 'Best premium pick.' },
  { name: 'Tineco Pure One S15', price: '$600', best: 'Smart vacuum. Auto-adjusts suction by floor type. App tells you when filter needs cleaning.', good: 'Best smart features.' },
  { name: 'Bissell Featherweight', price: '$40-60', best: 'Lightweight stick (3 lbs). Cheapest option. Good for small messes.', good: 'Best for tiny apartments.' },
  { name: 'Robot vacuum (Roomba/Roborock)', price: '$200-1,400', best: 'Set and forget. (See our Robot Vacuum Coach.)', good: 'Best for those who hate vacuuming.' },
  { name: 'Miele Triflex HX2', price: '$700', best: 'German engineering, lasts 20 years.', good: 'Most durable.' },
  { name: 'Eureka NES210', price: '$80', best: 'Cheap corded stick.', good: 'Cheapest reliable corded.' },
];

export default function SeniorVacuumPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Vacuum for Seniors — Lightweight, Cordless | TekSure" description="Heavy vacuums hurt knees and backs. Plain-English picks for the lightest cordless vacuums that still actually clean." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Vacuum Picker</h1>
          <p className="text-lg text-muted-foreground">Lightweight. Cordless. Easy on the back.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why cordless / stick</h2>
            <ul className="text-sm list-disc pl-5">
              <li>5-8 pounds vs 15-20 for upright. Easier on shoulders.</li>
              <li>No cord wrestling. No bending to plug in.</li>
              <li>Convertible to handheld for stairs and car.</li>
              <li>Fits in a closet vertically.</li>
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
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Under 10 pounds.</li>
              <li>Battery 40+ minutes.</li>
              <li>HEPA filter (allergies).</li>
              <li>Empties without touching dust (touchless dump).</li>
              <li>LED headlights (reveals dust under furniture).</li>
              <li>Self-cleaning brush roll (no manual hair removal).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>$50 no-name brands — die in 6-12 months.</li>
              <li>Bagged uprights for solo seniors — too heavy, hard to maneuver.</li>
              <li>"Mop + vacuum 2-in-1" floor washers — usually worse at both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best combo</h3>
            <p className="text-sm text-muted-foreground">Cordless stick (Shark or Dyson) + a robot vacuum (Roomba). Stick for "I see crumbs, let me clean now". Robot for daily floor maintenance. Together about $500-1,000. Knees never hurt again.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
