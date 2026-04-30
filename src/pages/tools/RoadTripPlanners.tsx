import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Route } from 'lucide-react';

const APPS = [
  { name: 'Roadtrippers', cost: 'FREE / $30/yr Pro', best: 'Best route + stops planner. Quirky stops, gas, food, lodging.', good: 'Best overall.' },
  { name: 'Google Maps + Saved Lists', cost: 'FREE', best: 'Use "Saved" lists for trip stops. Share with travel partner.', good: 'Best free.' },
  { name: 'Waze', cost: 'FREE', best: 'Real-time traffic + speed traps. Best while driving.', good: 'Best while driving.' },
  { name: 'Furkot', cost: 'FREE / $5/mo', best: 'Most-detailed multi-day trip planner. Web + app.', good: 'Best for long trips.' },
  { name: 'GasBuddy', cost: 'FREE', best: 'Find cheapest gas along route. Save 10-30c/gal.', good: 'Best for gas savings.' },
  { name: 'AllStays Camp &amp; RV', cost: '$10', best: 'Best for RV trips. All campgrounds, dump stations, Walmart parking.', good: 'Best for RV.' },
];

export default function RoadTripPlanners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Road Trip Planning Apps for Seniors | TekSure" description="Roadtrippers, Furkot, AllStays. Plain-English picks for road trip planning apps senior-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Route className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Road Trip Planners</h1>
          <p className="text-lg text-muted-foreground">Plan less. Drive more. Enjoy.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly trip rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>4-6 hours/day max driving. Less is more.</li>
              <li>Pre-book hotels — small towns get full.</li>
              <li>Stop every 2 hours. Stretch. Use bathroom.</li>
              <li>Avoid driving at night when possible.</li>
              <li>Pack medications + cooler with snacks.</li>
              <li>Print backup map — phone signal cuts out.</li>
              <li>Avoid rush hour through cities — plan around 10 AM-2 PM transit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-trip vehicle check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tire pressure (cold).</li>
              <li>Oil level + age (every 5K-7K miles).</li>
              <li>Wiper blades + fluid.</li>
              <li>Battery age (replace at 4-6 years).</li>
              <li>Spare tire + jack.</li>
              <li>Roadside assistance card.</li>
              <li>First aid kit, jumper cables, flashlight, water.</li>
              <li>Phone charger, paper map, $100 cash.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pre-trip diagnostic</h3>
            <p className="text-sm text-muted-foreground">Ask local mechanic for a "trip inspection" — usually $20-50. Catches issues before you&apos;re stranded 1,000 miles from home. Best $50 you can spend pre-trip.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
