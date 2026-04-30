import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const PLANS = [
  { name: 'T-Mobile Essentials Saver 55+', cost: '$30/line', best: 'Great national coverage. 2 lines for $55. No contract.', good: 'Often the cheapest big-name option.' },
  { name: 'AT&T Unlimited 55+', cost: '$60-80/line in Florida only', best: 'AT&T limits 55+ pricing to Florida. Elsewhere — Cricket (AT&T network) at $30-55.', good: 'Use Cricket if outside FL.' },
  { name: 'Verizon 55+ Plan', cost: '$60/line, in Florida only', best: 'Same FL-only catch. Outside FL — try Verizon Visible Wireless ($25/month) on the Verizon network.', good: 'Visible is the budget pick on Verizon.' },
  { name: 'Consumer Cellular', cost: '$20-65/month', best: 'AARP discount available. Unlimited talk + 1GB data starts at $20. Phone support is great with seniors.', good: 'Best for low usage, AARP 5% off.' },
  { name: 'Mint Mobile', cost: '$15-30/month for 3-month plans', best: 'Owned by Ryan Reynolds. Cheapest unlimited plans. Pay 3 months at a time.', good: 'Great if you have Wi-Fi at home (and don\'t need lots of cellular).' },
  { name: 'Tello / US Mobile / Visible', cost: '$10-25/month', best: 'Smaller carriers riding on big networks (T-Mobile, Verizon). Excellent value.', good: 'Skip if you need top-tier customer service in person.' },
  { name: 'Lifeline Program (FREE)', cost: 'FREE', best: 'Free or near-free phone + service for low-income households. Includes Medicaid, SNAP recipients.', good: 'Most underused federal benefit. lifelinesupport.org.' },
];

export default function SeniorCellPlanPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Cell Phone Plan Picker — Cheapest Options | TekSure" description="Stop overpaying for cell service. T-Mobile 55+, Consumer Cellular, Mint, Lifeline (free). Plain-English picks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Cell Plan Picker</h1>
          <p className="text-lg text-muted-foreground">Stop overpaying. Real options under $30/month.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">The average US cell bill is $144/month. Most people on Verizon, AT&T, or T-Mobile premium plans pay $80-$100/line. Switching to one of the picks below cuts that to $20-40/line on the SAME networks.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PLANS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to switch (any carrier)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up with the new carrier. Pick a plan. They send a SIM card or set up eSIM.</li>
              <li>BEFORE removing the old SIM: ask the old carrier for your "account number" and "transfer PIN".</li>
              <li>Tell the new carrier you want to "port your number" — give them the account number and PIN.</li>
              <li>Wait 1-24 hours. Phone switches networks.</li>
              <li>Test the phone. Make a call. Send a text. Try cellular data.</li>
              <li>Once working, cancel the old service.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these traps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Free phone" deals</strong> — usually require staying with a $90+/month plan for 36 months. Math worse than buying a phone outright on a cheap plan.</li>
              <li><strong>Activation fees</strong> — most cheap carriers have none. Big carriers charge $35.</li>
              <li><strong>Equipment leases</strong> — Verizon and AT&T sometimes lease phones; you pay monthly forever. Buy outright instead.</li>
              <li><strong>"Insurance" add-ons</strong> — usually a bad deal. Use your home insurance or a credit card with cellphone protection (Chase Sapphire, Amex).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Lifeline — completely free</h3>
            <p className="text-sm text-muted-foreground">If you receive Medicaid, SNAP, SSI, Veterans Pension, or live below 135% of poverty — you may qualify for FREE phone + service through the Lifeline program. SafeLink, Q Link, and Assurance Wireless all participate. Apply at <strong>lifelinesupport.org</strong>.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
