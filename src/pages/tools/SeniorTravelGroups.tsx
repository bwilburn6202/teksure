import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const SVCS = [
  { name: 'Road Scholar', cost: '$1,500-5,000/trip', best: 'Largest senior tour operator (was Elderhostel). Educational. Senior-perfect.', good: 'Best overall.' },
  { name: 'Overseas Adventure Travel (OAT)', cost: '$2,500-7,000', best: 'Adventures for 50+. Smaller groups (16 max). Authentic experiences.', good: 'Best adventure.' },
  { name: 'Tauck', cost: '$5,000-15,000', best: 'Premium small-group tours. Senior-popular.', good: 'Best premium.' },
  { name: 'Trafalgar', cost: '$2,000-7,000', best: 'Mainstream group tours. Less expensive.', good: 'Best mid-range.' },
  { name: 'Country Walkers', cost: '$3,000-7,000', best: 'Walking tours for active seniors. Europe + USA.', good: 'Best for walkers.' },
  { name: 'Singles Cruise / SoloCruise', cost: 'Cruise + extras', best: 'Solo cruises with same-age groups. Some no single supplement.', good: 'Best solo.' },
];

export default function SeniorTravelGroups() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Travel Groups | TekSure" description="Road Scholar, OAT, Tauck. Plain-English picks for senior group tours + travel companions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Travel Groups</h1>
          <p className="text-lg text-muted-foreground">Travel with peers + experts.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why group tours</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-planned — no logistics.</li>
              <li>Built-in friends — meet other seniors.</li>
              <li>Local expert guides.</li>
              <li>Safer — group accommodation.</li>
              <li>No single-supplement fees on some senior tours.</li>
              <li>Accessible options usually available.</li>
              <li>Travel insurance often included or strongly recommended.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco Travel</strong> — package deals + cash card.</li>
              <li><strong>AAA Travel</strong> — discounts for members.</li>
              <li><strong>YMCA Senior Adventures</strong> — local low-cost trips.</li>
              <li><strong>Senior centers</strong> — local 1-day + multi-day trips.</li>
              <li><strong>Church / faith group trips</strong> — pilgrimages, mission trips, Holy Land.</li>
              <li><strong>OLLI</strong> — university lifelong learning often runs trips.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Solo senior travel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Road Scholar + OAT have many solo travelers — won&apos;t feel out of place.</li>
              <li>Cruise lines have solo-traveler events.</li>
              <li>Roommate matching — saves the single supplement.</li>
              <li>Hostels (yes, age 60+ welcome) for budget-conscious adventurers.</li>
              <li>Solo travel apps: Travelo, Bumble BFF for travel friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Travel insurance ESSENTIAL</h3>
            <p className="text-sm text-muted-foreground">For 65+ international trip — travel insurance with medical coverage + medical evacuation is essential. Original Medicare does NOT cover overseas. $200-400 per trip = peace of mind. See /tools/travel-insurance-reality.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
