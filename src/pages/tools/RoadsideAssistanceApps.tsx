import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

const PROVIDERS = [
  { name: 'AAA Classic', cost: '$60-95/year', best: 'The standard. 4 service calls/year. Towing 5 miles included. Family discounts.', good: 'Best overall.' },
  { name: 'AAA Plus', cost: '$110-130/year', best: '100-mile towing, locksmith, fuel delivery, lockout — the upgraded plan most people actually need.', good: 'Best value upgrade.' },
  { name: 'Allstate Roadside (Good Hands)', cost: '$25-100/year', best: 'Pay-per-use option ($75/use, no membership). Or annual.', good: 'Best pay-as-you-go.' },
  { name: 'Better World Club', cost: '$60-90/year', best: 'Like AAA but supports clean energy. Bicycle and EV roadside included.', good: 'Best for cyclists/EV.' },
  { name: 'Your car insurance', cost: '$5-15/year add-on', best: 'Geico, Progressive, State Farm all sell roadside as a $1-2/month add-on.', good: 'Cheapest if you have car insurance.' },
  { name: 'Credit card benefit', cost: 'FREE (with card)', best: 'Many credit cards include roadside (Visa Signature, AmEx Platinum). Already paid.', good: 'Check your card before paying separately.' },
];

export default function RoadsideAssistanceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roadside Assistance — Compared | TekSure" description="AAA, Allstate, credit card roadside. Plain-English picks for towing, lockouts, and dead batteries — without overpaying." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roadside Assistance</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t pay twice for the same coverage.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PROVIDERS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Don&apos;t pay twice</h2>
            <p className="text-sm">Many people pay AAA $90/year while their credit card or car insurance ALREADY includes roadside. Check before paying:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Visa Signature, AmEx Platinum, Chase Sapphire — all include roadside.</li>
              <li>Geico, State Farm, Progressive — $1-2/month add-on with auto policy.</li>
              <li>New car warranty — most have 3-5 years of roadside included.</li>
              <li>Costco/Sam&apos;s Club — limited roadside via auto programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When AAA still wins</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You drive long distances (100-mile towing on AAA Plus).</li>
              <li>You travel in rural areas where local tow trucks are scarce.</li>
              <li>You want lockout/locksmith service.</li>
              <li>You take road trips (battery jumps, fuel delivery).</li>
              <li>Family member uses AAA — household plan covers all drivers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you call</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stay with your vehicle. Hazard lights ON.</li>
              <li>Pull over to safe spot. Off the road.</li>
              <li>Call the membership phone (in app or on card).</li>
              <li>Operator asks: name, member number, location, problem, vehicle.</li>
              <li>Wait time: 30-90 minutes typical.</li>
              <li>Tow truck arrives. Driver verifies your name.</li>
              <li>Show driver license + member card.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save the phone numbers</h3>
            <p className="text-sm text-muted-foreground">Add roadside, your insurance, and AAA into your phone contacts NOW. The middle of a thunderstorm at the side of the highway is not the moment to be searching.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
