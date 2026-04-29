import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SSNCompromiseSteps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SSN Compromise Steps for Seniors | TekSure" description="Social Security Number stolen — what to do. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SSN Stolen?</h1>
          <p className="text-lg text-muted-foreground">Act fast. Limit damage.</p>
        </div>

        <Card className="mb-4 border-red-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-red-700">First 24 hours</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contact 1 of 3 credit bureaus.</li>
              <li>Equifax / Experian / TransUnion.</li>
              <li>Place 1-year fraud alert (free).</li>
              <li>That bureau notifies others.</li>
              <li>Get free credit reports.</li>
              <li>Time-critical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2: Credit freeze</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free at all 3 bureaus.</li>
              <li>Stops new accounts opened.</li>
              <li>Equifax: equifax.com/personal/credit-freeze.</li>
              <li>Experian: experian.com/freeze.</li>
              <li>TransUnion: transunion.com/freeze.</li>
              <li>PIN to lift later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3: SSA + IRS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Report to SSA — 1-800-772-1213.</li>
              <li>Or visit local SSA office.</li>
              <li>Get IRS Identity Protection PIN.</li>
              <li>Block fake tax filings.</li>
              <li>identitytheft.gov — coordinate.</li>
              <li>Free IRS PIN forever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4: FTC report</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>identitytheft.gov.</li>
              <li>Step-by-step recovery plan.</li>
              <li>Generates affidavit.</li>
              <li>Use for credit disputes.</li>
              <li>Banks accept FTC report.</li>
              <li>Police report optional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for fraud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check credit reports monthly.</li>
              <li>Annual free at annualcreditreport.com.</li>
              <li>Bank app daily.</li>
              <li>Tax return early as possible.</li>
              <li>Medicare summaries — check.</li>
              <li>Mail from unknown lenders = report.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recovery time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Months to years.</li>
              <li>Disputes individual accounts.</li>
              <li>FTC report = legal weight.</li>
              <li>Don&apos;t pay fraudulent debts.</li>
              <li>Banks generally write off.</li>
              <li>Be patient + persistent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Future protection</h3>
            <p className="text-sm text-muted-foreground">Keep credit freeze active permanently. Lift only when applying for new credit (free, online). Strong passwords + 2FA on all accounts. Don&apos;t share SSN unless required by law. Memorize SSN — never carry card. Identity theft monitoring services ($30/mo) optional. Free credit alerts work too.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
