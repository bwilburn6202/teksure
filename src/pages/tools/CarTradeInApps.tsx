import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const APPS = [
  { name: 'Carvana', cost: 'FREE quote', best: 'Online buy + sell. Pickup.', good: 'Best online.' },
  { name: 'CarMax', cost: 'FREE quote', best: 'Walk-in inspection.', good: 'Best in-person.' },
  { name: 'Vroom', cost: 'FREE quote', best: 'Online sell + buy.', good: 'Best alternative.' },
  { name: 'KBB Instant Cash Offer', cost: 'FREE', best: 'Industry-standard valuation.', good: 'Best valuation.' },
  { name: 'Edmunds', cost: 'FREE quote', best: 'Multiple dealer quotes.', good: 'Best multiple.' },
];

export default function CarTradeInApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Trade-In Apps for Seniors | TekSure" description="Sell or trade your car. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Trade-In</h1>
          <p className="text-lg text-muted-foreground">Get fair value. Maximum money.</p>
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
            <h2 className="font-bold text-xl mb-3">Trade vs sell</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trade-in</strong> — easier, less money.</li>
              <li><strong>Private sale</strong> — most money, more work.</li>
              <li><strong>Online buyers</strong> — middle ground.</li>
              <li>Difference 10-20% typically.</li>
              <li>Senior — ease often worth less money.</li>
              <li>Family member can help private sale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Carvana</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online quote in minutes.</li>
              <li>Pick up car at home.</li>
              <li>Cash transferred to bank.</li>
              <li>No haggling.</li>
              <li>$5,000-$50,000 cars.</li>
              <li>7-day money-back if you change mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maximize value</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wash + clean inside.</li>
              <li>Detail kit — $30 vs hire $200.</li>
              <li>Recent oil change records.</li>
              <li>Maintenance log if available.</li>
              <li>Both keys + manual.</li>
              <li>Carfax history positive helps.</li>
              <li>Photos in good light.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never accept personal check.</li>
              <li>Never deliver before payment confirmed.</li>
              <li>Beware &quot;buyer&apos;s agent&quot; abroad.</li>
              <li>Cashier&apos;s checks — verify with bank.</li>
              <li>Wire transfers preferred.</li>
              <li>Meet at bank for transaction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Title transfer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign title to buyer in person.</li>
              <li>Bill of sale — both copies.</li>
              <li>Notify state DMV — release of liability.</li>
              <li>Cancel insurance day of.</li>
              <li>Transfer plates / return.</li>
              <li>Keep copies of everything.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Donate option</h3>
            <p className="text-sm text-muted-foreground">If car worth less than $1,000 — consider donation. Charity tax deduction. Free pickup. Habitat for Humanity, Make-A-Wish, NPR. Less stress than selling. Rotary clubs accept too. Old cars without titles — recycling for parts. Don&apos;t let car sit deteriorating in driveway.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
