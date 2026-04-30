import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function EmergencyFundForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Fund for Seniors | TekSure" description="Build emergency savings safely. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Fund</h1>
          <p className="text-lg text-muted-foreground">Cushion for the unexpected.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3-6 months of expenses minimum.</li>
              <li>Seniors — 6-12 months ideal.</li>
              <li>$10,000 baseline for most.</li>
              <li>Higher if home or pet.</li>
              <li>Includes insurance deductible.</li>
              <li>Easy access — no penalty withdrawal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>High-yield savings</strong> — 4-5% APY currently.</li>
              <li><strong>Marcus, Ally, Capital One 360</strong>.</li>
              <li>Online banks — better rates.</li>
              <li>FDIC-insured up to $250K.</li>
              <li>Withdrawals 1-3 days.</li>
              <li>Skip CDs (penalty for withdrawal).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior emergencies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medical bills not covered.</li>
              <li>Home repair (roof, HVAC).</li>
              <li>Car repair / replacement.</li>
              <li>Pet emergency.</li>
              <li>Family member crisis.</li>
              <li>Hospital co-pay.</li>
              <li>Insurance gap month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build slowly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with $1,000 baby step.</li>
              <li>Auto-transfer $50/wk.</li>
              <li>Tax refund into emergency.</li>
              <li>Birthday money in.</li>
              <li>Dollar General savings = real.</li>
              <li>Year of $50/wk = $2,600 cushion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Real emergency only.</li>
              <li>Holiday spending = NOT emergency.</li>
              <li>Vacation = NOT emergency.</li>
              <li>Roof leak = emergency.</li>
              <li>Hospital bill = emergency.</li>
              <li>Refill within 3 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Replace credit cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t emergency = credit card.</li>
              <li>Interest 20%+ buries seniors.</li>
              <li>Cash = no debt fight.</li>
              <li>Sleep better.</li>
              <li>Smaller emergencies fund.</li>
              <li>Big emergencies = additional sources OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sources beyond fund</h3>
            <p className="text-sm text-muted-foreground">If emergency exceeds fund: home equity line, tax-free Roth withdrawal, family loan, payment plans (most providers offer). NEVER payday loans (predatory). NEVER &quot;reverse mortgage to fix problem&quot; (drains equity). Emergency fund first defense. Other sources as backup.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
