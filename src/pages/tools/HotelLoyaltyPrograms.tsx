import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hotel } from 'lucide-react';

const PROGRAMS = [
  { name: 'Marriott Bonvoy', cost: 'FREE to join', best: 'Biggest network — Marriott, Sheraton, Westin, Ritz-Carlton, Courtyard. 30 brands.', good: 'Best variety.' },
  { name: 'Hilton Honors', cost: 'FREE to join', best: 'Hilton, DoubleTree, Hampton Inn, Embassy Suites. Strong free breakfast at Hampton.', good: 'Best free breakfast.' },
  { name: 'IHG One Rewards', cost: 'FREE to join', best: 'Holiday Inn, Holiday Inn Express, Crowne Plaza. Big in airports.', good: 'Best for airport hotels.' },
  { name: 'Wyndham Rewards', cost: 'FREE to join', best: 'Days Inn, Super 8, La Quinta, Wyndham. Good for budget road trips.', good: 'Best budget chains.' },
  { name: 'Choice Privileges', cost: 'FREE to join', best: 'Comfort Inn, Quality Inn, Sleep Inn. Often best value rural areas.', good: 'Best for highway road trips.' },
  { name: 'Hyatt World of Hyatt', cost: 'FREE to join', best: 'Smaller network but generous rewards. Best status benefits.', good: 'Best value points.' },
];

export default function HotelLoyaltyPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hotel Loyalty Programs — Compared | TekSure" description="Marriott, Hilton, IHG, Hyatt. Plain-English picks for free hotel loyalty programs and which one fits your travel pattern." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hotel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hotel Loyalty Programs</h1>
          <p className="text-lg text-muted-foreground">Free to join. Free upgrades. Free nights.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PROGRAMS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free to join. Sign up in 2 minutes online.</li>
              <li>Best room rate ("member rate") — usually 5-15% off public rate.</li>
              <li>Free wifi (most chains).</li>
              <li>Late checkout if available.</li>
              <li>Earn points → free nights after 8-15 stays.</li>
              <li>Welcome amenities at higher tiers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which to pick</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cruise + airport stays</strong> — Marriott Bonvoy (most port-city hotels).</li>
              <li><strong>Highway road trips</strong> — Choice Privileges or IHG.</li>
              <li><strong>Visit family abroad</strong> — Marriott or Hilton (biggest international).</li>
              <li><strong>Want free breakfast</strong> — Hilton (Hampton, Homewood) or IHG (Holiday Inn Express).</li>
              <li><strong>Want best status perks</strong> — Hyatt.</li>
              <li>Pick 1-2. Don&apos;t spread points across 5 programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Marriott</strong> — 15% off "Senior Discount" rate (must be 62+, can&apos;t combine with member rate).</li>
              <li><strong>Hilton</strong> — 10% off "Hilton Senior Discount" (62+).</li>
              <li><strong>Choice Hotels</strong> — 5-10% senior discount.</li>
              <li><strong>Best Western</strong> — 15% senior discount.</li>
              <li><strong>AARP discounts</strong> — usually 5-10% on most major chains.</li>
              <li>Check both senior + AARP rates. Pick whichever is cheaper.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Status hacks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Co-branded credit cards</strong> give automatic mid-tier status — Hilton Aspire ($550/yr) gives top-tier Diamond status.</li>
              <li><strong>Match status</strong> — moved away from a brand? Email new brand asking to "match" your old status. Often granted.</li>
              <li><strong>Book direct on hotel website</strong> — never via Booking.com or Expedia for stays you want to count toward status.</li>
              <li><strong>Stay 2 nights instead of 1</strong> — earns same status credit either way for some programs (Hilton).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free fifth night</h3>
            <p className="text-sm text-muted-foreground">Marriott Bonvoy, Hilton Honors, and IHG all give "5th night free" when you pay for 4 nights with points. If a long trip — book in 5-night chunks. 20% savings effectively.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
