import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const PROGRAMS = [
  { name: 'Amazon Prime', cost: '$139/yr', best: 'Free shipping, Prime Video, Photos, Music. Worth it for active shoppers.', good: 'Most-used loyalty program in US.' },
  { name: 'Costco Executive', cost: '$130/yr', best: '2% back on Costco purchases. Pays for itself if you spend $3,250+/year.', good: 'Best for big spenders.' },
  { name: 'Walmart+', cost: '$98/yr', best: 'Free delivery, gas discount, Paramount+ included.', good: 'Best Walmart-loyal value.' },
  { name: 'Target Circle 360', cost: '$99/yr', best: '5% off. Free same-day delivery.', good: 'Best for Target regulars.' },
  { name: 'Sam\'s Club Plus', cost: '$110/yr', best: '2% back. Free shipping. Free curbside.', good: 'Sam\'s alternative.' },
  { name: 'Best Buy Total Tech', cost: '$200/yr', best: 'Unlimited Geek Squad help. 20% off Geek Squad services.', good: 'Best for installs.' },
  { name: 'AAA', cost: '$60-100/yr', best: 'Roadside + travel + restaurant + retail discounts. Often $200+ saved per year.', good: 'Most underused.' },
  { name: 'AARP', cost: '$16/yr (50+)', best: 'Hotel + car rental + restaurant + insurance + Rx discounts. Cheapest membership.', good: 'No-brainer at 50.' },
  { name: 'Kohl\'s Rewards', cost: 'FREE', best: 'Free reward dollars. Birthday gift. Stack with coupons.', good: 'Free for store shoppers.' },
];

export default function LoyaltyProgramsCompared() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Loyalty Programs Compared — Prime, Costco, Walmart+ | TekSure" description="Which paid memberships actually save money? Plain-English comparison of all major retail loyalty programs and free alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Loyalty Programs Compared</h1>
          <p className="text-lg text-muted-foreground">Which memberships pay for themselves? Most don\'t.</p>
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
            <h2 className="font-bold text-xl mb-3">Math your money</h2>
            <p className="text-sm">Before paying — open the previous 12 months of statements. How much did you ACTUALLY spend at the store / category? If membership cost is more than 5% of spend, probably not worth it.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free programs worth signing up for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kroger / Albertsons / Publix</strong> — every grocery has free loyalty. $50-200/year in savings.</li>
              <li><strong>Walgreens Cash Rewards</strong> — free, earns ~5% on store brand.</li>
              <li><strong>CVS ExtraCare</strong> — free coupons.</li>
              <li><strong>Hotel chains</strong> (Marriott Bonvoy, Hilton Honors) — free, earn points for free nights.</li>
              <li><strong>Airline frequent flyer</strong> — free.</li>
              <li><strong>Bank credit card cashback</strong> — already have.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most-worth-it for seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP ($16/year)</strong> — single biggest ROI in this list. Saves on everything from car rentals to glasses to restaurants. Plus access to free tax prep, medication safety, fraud helpline.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
