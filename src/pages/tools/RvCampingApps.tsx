import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tent } from 'lucide-react';

const APPS = [
  { name: 'Campendium', cost: 'Free; $50/yr Roadside', best: 'Best free campground reviews. Includes free overnight options (Walmart, Cracker Barrel).', good: 'Free is plenty for most trips.' },
  { name: 'AllStays Camp & RV', cost: '$10 once', best: 'No subscription. Most thorough listing — every type of stop.', good: 'One-time purchase forever.' },
  { name: 'iOverlander', cost: 'Free', best: 'Free camping spots, dump stations, water fill, propane. Crowdsourced, sometimes outdated but invaluable.', good: 'Best free dispersed-camping app.' },
  { name: 'RV LIFE Trip Wizard', cost: '$65/yr', best: 'Best route planner — avoids low bridges, weight-restricted roads, propane-banned tunnels. Critical for taller RVs.', good: 'Worth it for full-time RVers.' },
  { name: 'Harvest Hosts', cost: '$99/yr', best: 'Free overnight stays at 9,000+ wineries, breweries, farms, museums. Great for full-time travelers.', good: 'Pays for itself in 4-5 nights.' },
  { name: 'Recreation.gov', cost: 'Free', best: 'Federal campgrounds — National Parks, National Forests, BLM. Best free outdoor camping in America.', good: 'Book 6 months ahead for popular parks.' },
  { name: 'KOA app', cost: 'Free', best: 'KOA campgrounds nationwide. Reliable but pricier than public.', good: 'Best for first-time RVers (full hookups, easy in/out).' },
];

export default function RvCampingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV & Camping Apps — Campendium, RV LIFE, Harvest Hosts | TekSure" description="Find campsites, route around low bridges, score free overnight stays. The best apps for RVers and tent campers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tent className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV & Camping Apps</h1>
          <p className="text-lg text-muted-foreground">Plan trips, find sites, save on overnight stays.</p>
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
            <h2 className="font-bold text-xl mb-3">Free overnight options (worth knowing)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Walmart parking lot</strong> — call store first; many allow overnight RVs.</li>
              <li><strong>Cracker Barrel</strong> — most allow RV overnight if you eat there.</li>
              <li><strong>Cabela\'s, Bass Pro Shops</strong> — many accept overnight RVers.</li>
              <li><strong>Casinos</strong> — many actively welcome RVs.</li>
              <li><strong>Public lands (BLM, National Forest)</strong> — 14-day free dispersed camping in much of the West.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific perks</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>America the Beautiful Senior Pass</strong> — $80 lifetime, 50% off federal campgrounds plus free park entry.</li>
              <li><strong>Good Sam Club</strong> — 10% discount at thousands of campgrounds. $35/year membership pays for itself in a few nights.</li>
              <li><strong>Passport America</strong> — 50% off at participating private campgrounds. $44/year.</li>
              <li><strong>State park senior discounts</strong> — most states offer reduced rates for seniors. Check your state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Start with <strong>Campendium (free)</strong> to read reviews. Use <strong>RV LIFE Trip Wizard</strong> if your rig is bigger than 25 feet — it\'s saved many an RV from a destroyed roof on a low overpass.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
