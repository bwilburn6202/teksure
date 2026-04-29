import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coins } from 'lucide-react';

const APPS = [
  { name: 'Yard Sale Treasure Map', cost: 'FREE / $5 Premium', best: 'Map of yard sales near you. Pulls from Craigslist, Facebook, Nextdoor.', good: 'Best for hunting yard sales.' },
  { name: 'Garage Sale Finder', cost: 'FREE', best: 'Listing service.', good: 'Solid free option.' },
  { name: 'Nextdoor', cost: 'FREE', best: 'Yard sales posted by neighbors.', good: 'Best local source.' },
  { name: 'Facebook Marketplace + neighborhood groups', cost: 'FREE', best: 'Most yard sales now post here.', good: 'Where most action is.' },
  { name: 'Craigslist garage sales section', cost: 'FREE', best: 'Old reliable.', good: 'Many seniors post here.' },
];

export default function YardSaleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yard Sale Apps — Find &amp; Run Garage Sales | TekSure" description="Find good yard sales nearby on Saturday mornings, or run your own profitable sale. Plain-English picks for yard sale apps and tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coins className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yard Sale Apps</h1>
          <p className="text-lg text-muted-foreground">Saturday morning hunt. Or run your own.</p>
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
            <h2 className="font-bold text-xl mb-3">Running a successful yard sale</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Saturday morning</strong> 7-12 is best. Friday afternoon if Friday.</li>
              <li><strong>Advertise</strong> on Nextdoor + Facebook + Craigslist + Yard Sale Treasure Map. Take photos.</li>
              <li><strong>Big signs</strong> at intersections + yard. Bright colored, simple, ARROWS.</li>
              <li><strong>Price everything</strong>. Bargain-hunters love clearly marked items.</li>
              <li><strong>Have plenty of small bills</strong> — start with $30 in $5s and $1s.</li>
              <li><strong>Accept Venmo / Zelle / Cash</strong>. Even seniors can do this — no credit cards.</li>
              <li><strong>Lower prices in afternoon</strong>. By 2 PM offer 50% off.</li>
              <li><strong>Donate or pickup-haul leftover</strong> — don\'t put it back in garage.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic earnings</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Single household sale: $150-500.</li>
              <li>Multi-family / neighborhood sale: $300-1,500/family.</li>
              <li>For valuable items: list on Facebook Marketplace separately, get more.</li>
              <li>For furniture / lots of stuff: hire estate sale company instead — pays more even after their cut.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For shoppers</h3>
            <p className="text-sm text-muted-foreground">Cash + small bills. Arrive at 7am for best stuff. Be polite. Negotiate gently — sellers respond to fair offers, not lowball bullying. Wear comfortable shoes; you\'ll walk a lot.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
