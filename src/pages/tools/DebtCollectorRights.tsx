import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function DebtCollectorRights() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Debt Collector Rights for Seniors | TekSure" description="Know your rights against debt collectors. Plain-English FDCPA guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Debt Collector Rights</h1>
          <p className="text-lg text-muted-foreground">You have rights. Don&apos;t be intimidated.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FDCPA protections</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal Fair Debt Collection Practices Act.</li>
              <li>Collectors CAN&apos;T call before 8am or after 9pm.</li>
              <li>CAN&apos;T threaten arrest or legal action they can&apos;t take.</li>
              <li>CAN&apos;T harass, swear, or use abusive language.</li>
              <li>CAN&apos;T tell employer or family.</li>
              <li>CAN&apos;T garnish Social Security (federal protections).</li>
              <li>If they violate — sue for $1,000+ damages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Validate the debt FIRST</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Within 30 days of first contact — request validation in writing.</li>
              <li>Sample letter at consumerfinance.gov.</li>
              <li>Send certified mail.</li>
              <li>They MUST prove the debt is yours + amount correct.</li>
              <li>Many can&apos;t prove — debt sold many times.</li>
              <li>They must stop collection until validated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protected income</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Social Security</strong> — generally can&apos;t be garnished by private collectors.</li>
              <li><strong>VA benefits</strong> — protected.</li>
              <li><strong>Federal pensions</strong> — protected.</li>
              <li><strong>SSI</strong> — fully protected.</li>
              <li><strong>EXCEPTION</strong> — federal debts (taxes, student loans) CAN garnish Social Security.</li>
              <li>Keep protected funds in separate bank account.</li>
              <li>Tell bank these are SS deposits — they may protect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stop the calls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Send written &quot;cease &amp; desist&quot; letter.</li>
              <li>They can only contact you to confirm receipt or lawsuit.</li>
              <li>Sample letter at CFPB.</li>
              <li>Send certified mail with return receipt.</li>
              <li>Keep records of every call.</li>
              <li>Doesn&apos;t make debt go away — but stops harassment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Negotiate down</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Old debts often negotiable to 20-50% of amount.</li>
              <li>Get any settlement IN WRITING before paying.</li>
              <li>Pay by check (NOT direct from bank account).</li>
              <li>Get &quot;paid in full&quot; written confirmation.</li>
              <li>Ask for &quot;deletion&quot; from credit report.</li>
              <li>Statute of limitations — old debts may be uncollectable (varies by state, 3-6 years usually).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Report violations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CFPB</strong> — consumerfinance.gov/complaint. Free.</li>
              <li><strong>FTC</strong> — reportfraud.ftc.gov.</li>
              <li><strong>State Attorney General</strong> — most active on this.</li>
              <li>FDCPA violations — sue for damages + lawyer fees.</li>
              <li><strong>NACA</strong> — naca.net. Free directory of consumer attorneys.</li>
              <li>Many take cases on contingency (no upfront cost).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t pay scams</h3>
            <p className="text-sm text-muted-foreground">Common scam: caller demands cash for &quot;old debt.&quot; If unfamiliar — DON&apos;T PAY. Demand validation. Most are scams or expired debts. Never pay by gift card / wire / Venmo. Real collectors accept check + give written validation. Hang up if pressure tactics. Call your bank. Free help: <strong>NCLC</strong> — nclc.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
