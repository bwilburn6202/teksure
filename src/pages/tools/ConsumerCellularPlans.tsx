import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const PLANS = [
  { name: 'Consumer Cellular', cost: '$20-55/mo', best: 'AARP discount. Senior-friendly support. AT&T network.', good: 'Best for seniors.' },
  { name: 'T-Mobile 55+', cost: '$40/mo (2 lines)', best: 'Unlimited everything. Couple discount.', good: 'Best couples.' },
  { name: 'Mint Mobile', cost: '$15-30/mo', best: 'Pay yearly = cheapest. T-Mobile network.', good: 'Best budget.' },
  { name: 'Visible (Verizon)', cost: '$25-45/mo', best: 'Verizon network at half price.', good: 'Best for Verizon coverage.' },
  { name: 'US Mobile', cost: '$8-30/mo', best: 'Customizable plans. T-Mobile + Verizon.', good: 'Best customizable.' },
  { name: 'Lifeline (free for income-eligible)', cost: 'FREE', best: 'Federal program for low-income seniors.', good: 'Best free.' },
];

export default function ConsumerCellularPlans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cell Phone Plans for Seniors | TekSure" description="Stop overpaying for cellular. Plain-English senior cell plan picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Cell Phone Plans</h1>
          <p className="text-lg text-muted-foreground">$20/mo or less. Don&apos;t pay $80.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PLANS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Why switch from major carriers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verizon/AT&amp;T plans = $80-110/mo per line.</li>
              <li>Same network through MVNOs = $15-30/mo.</li>
              <li>SAME service quality.</li>
              <li>Save $50-80/MONTH = $600-960/year.</li>
              <li>Bring your own phone usually.</li>
              <li>Same phone number kept.</li>
              <li>Most senior favorite: Consumer Cellular.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much data do you need?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mostly WiFi at home</strong> — 1-2 GB.</li>
              <li><strong>Light usage</strong> — 5-10 GB.</li>
              <li><strong>Streaming on cellular</strong> — 15+ GB.</li>
              <li><strong>Most seniors</strong> — 5 GB enough.</li>
              <li>Don&apos;t pay for unlimited if you don&apos;t need.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifeline FREE program</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal program — free phone + service.</li>
              <li>Income-eligible: SNAP, Medicaid, SSI, etc.</li>
              <li>Or 135% federal poverty line.</li>
              <li>Apply at lifelinesupport.org.</li>
              <li>1 line per household.</li>
              <li>Plus Affordable Connectivity Program (ACP) — $30/mo internet credit (if Congress refunds).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Switch in 30 minutes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick new plan online.</li>
              <li>Order SIM card or eSIM.</li>
              <li>Old phone unlocked? Most are.</li>
              <li>Bring your number (free porting).</li>
              <li>Activate new SIM.</li>
              <li>Phone works. Old plan auto-cancels.</li>
              <li>Some carriers do it in store too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Switching support</h3>
            <p className="text-sm text-muted-foreground">Consumer Cellular has the best phone support for seniors switching. Real US-based agents help you. Walk through every step. Best Buy + T-Mobile stores help too. Don&apos;t let &quot;switching anxiety&quot; cost you $1,000/yr. Free help available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
