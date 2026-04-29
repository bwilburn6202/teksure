import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function FraudAlertSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fraud Alerts &amp; Credit Freeze | TekSure" description="Stop identity thieves from opening accounts in your name. Plain-English steps to set up free fraud alerts and credit freezes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fraud Alert &amp; Credit Freeze Setup</h1>
          <p className="text-lg text-muted-foreground">Free. Takes 15 minutes. Best ID-theft protection.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two free tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fraud Alert</strong> — bureaus must verify your identity before approving NEW credit. Lasts 1 year (free) or 7 years (with ID-theft report).</li>
              <li><strong>Credit Freeze</strong> — locks your credit reports completely. NO new credit can be opened without you unfreezing first. Strongest protection.</li>
            </ul>
            <p className="text-sm mt-3">Both are FREE since 2018. Banks tried to charge for years — federal law now bans fees.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit Freeze — recommended for most people</h2>
            <p className="text-sm">You must freeze with all 3 credit bureaus (separate steps):</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm mt-2">
              <li><strong>Equifax</strong> — equifax.com/personal/credit-report-services or 1-800-685-1111.</li>
              <li><strong>Experian</strong> — experian.com/freeze or 1-888-397-3742.</li>
              <li><strong>TransUnion</strong> — transunion.com/credit-freeze or 1-888-909-8872.</li>
            </ol>
            <p className="text-sm mt-3">Each gives you a PIN. WRITE DOWN ALL 3 PINs. Need them to unfreeze later.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to thaw (unfreeze)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Applying for a credit card.</li>
              <li>Getting a mortgage or refi.</li>
              <li>Buying a car (loan).</li>
              <li>New apartment (landlord pulls credit).</li>
              <li>New utility account.</li>
            </ul>
            <p className="text-sm mt-3">Thaw online with your PIN — usually instant. Re-freeze when done. Each thaw can be temporary (1-30 days) or permanent.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fraud Alert (alternative — slightly less strong)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Place at any ONE bureau. They notify the other two automatically.</li>
              <li>Lasts 1 year. Free to renew.</li>
              <li>If you confirm ID theft (police report), get 7-year extended fraud alert.</li>
              <li>Doesn&apos;t lock credit — just adds a "verify identity" step.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>annualcreditreport.com</strong> — pull your free credit reports weekly (since 2023). Check for unfamiliar accounts.</li>
              <li><strong>IRS Identity Protection PIN</strong> — get free at IRS.gov. Stops tax-return fraud. 6-digit PIN required to file.</li>
              <li><strong>Social Security my Social Security account</strong> — at ssa.gov, lock your number. Prevents fake claims.</li>
              <li><strong>identitytheft.gov</strong> — FTC&apos;s recovery plan if you become a victim.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t pay for &quot;identity theft protection&quot;</h3>
            <p className="text-sm text-muted-foreground">LifeLock, Aura, IDShield charge $10-30/month. Most of what they offer (credit monitoring, alerts) is FREE elsewhere. Credit freeze is the gold standard and it&apos;s free. Save $200-300/year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
