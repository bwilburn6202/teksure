import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

const APPS = [
  { name: 'Google Flights', cost: 'FREE', best: 'Best overall flight search. Price tracking, calendar view, "explore" any city. Most comprehensive.', good: 'Use first for any trip.' },
  { name: 'Kayak', cost: 'FREE', best: 'Compares many airlines + booking sites. Strong "flexible date" search.', good: 'Good for non-stop priorities.' },
  { name: 'Skyscanner', cost: 'FREE', best: 'Best for international and budget airlines. Flexible search "everywhere".', good: 'Surfaces flights Google misses (Frontier, Spirit, etc.).' },
  { name: 'Hopper', cost: 'FREE; price-prediction tips', best: 'Predicts whether prices will rise or fall. "Watch this trip" notifications.', good: 'Best for waiting on price drops.' },
  { name: 'Going (Scott\'s Cheap Flights)', cost: 'Free; $50/yr Premium', best: 'Emails when flights from your home airport drop dramatically. Best for opportunistic travelers.', good: 'Saves $200-1000+ on lucky deals.' },
  { name: 'Airline\'s own site/app', cost: 'FREE', best: 'Best deal? Sometimes only on the airline\'s site. Skip the booking-site fee.', good: 'Always check direct.' },
];

export default function FlightSearchApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Flight Search Apps — Google Flights, Kayak, Skyscanner | TekSure" description="Find cheap flights. Plain-English picks for the best flight search apps and how to actually save hundreds on every trip." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Flight Search Apps</h1>
          <p className="text-lg text-muted-foreground">Find a cheap flight. Track prices. Save hundreds.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips that save real money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Be flexible on dates</strong> — a Tuesday or Wednesday flight can be $100-300 cheaper than weekends.</li>
              <li><strong>Try a nearby airport</strong> — flying out of a smaller airport sometimes saves a lot. Or try alternates within driving distance.</li>
              <li><strong>Book 4-12 weeks ahead</strong> — domestic. International: 2-6 months out.</li>
              <li><strong>Tuesday afternoon</strong> — often the cheapest moment to book.</li>
              <li><strong>Set price alerts</strong> in Google Flights — get notified when the price drops.</li>
              <li><strong>Use one credit card with travel benefits</strong> (Chase Sapphire, Amex Gold) — earn miles + travel insurance + lounge access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior airfare programs</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Southwest 65+</strong> — refundable senior fares (often higher but flexible).</li>
              <li><strong>American Airlines / United / Delta</strong> — limited senior fares; call to ask. Compare to standard low-fare anyway.</li>
              <li><strong>AARP discount partners</strong> — Avis, Budget rental car, Hilton, Hyatt, Best Western.</li>
              <li><strong>Costco Travel</strong> — surprisingly competitive on full-trip packages with rental car / hotel bundles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — search incognito</h3>
            <p className="text-sm text-muted-foreground">Some travel sites raise the price the more times you search the same flight. Open the website in an "Incognito" or "Private" browser tab — fresh prices each time. Cookies don\'t track you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
