import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function DirectDepositSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Direct Deposit Setup for Seniors | TekSure" description="Direct deposit Social Security + pension. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Direct Deposit</h1>
          <p className="text-lg text-muted-foreground">Money goes straight to bank. Safer.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why direct deposit?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Safer than mailed checks.</li>
              <li>Faster — money same day.</li>
              <li>No lost / stolen checks.</li>
              <li>No bank trips.</li>
              <li>Required by law for new SS recipients.</li>
              <li>Also for pensions, refunds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Information needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bank name.</li>
              <li>Routing number (9 digits).</li>
              <li>Account number.</li>
              <li>Type — checking or savings.</li>
              <li>Find on bottom of check.</li>
              <li>Or in bank app, account details.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up Social Security</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online — ssa.gov.</li>
              <li>Sign in to my Social Security.</li>
              <li>&quot;Benefits &amp; Payment Details&quot;.</li>
              <li>&quot;Update Direct Deposit&quot;.</li>
              <li>Enter routing + account.</li>
              <li>Or call 1-800-772-1213.</li>
              <li>Or visit local SSA office.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up pensions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contact pension provider.</li>
              <li>Form usually mailed or online.</li>
              <li>Routing + account info.</li>
              <li>Voided check sometimes required.</li>
              <li>Email or mail back.</li>
              <li>Confirmation arrives in 30 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up tax refund</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>On tax return — Form 1040.</li>
              <li>Routing + account number lines.</li>
              <li>Choose checking or savings.</li>
              <li>3 weeks vs 8 weeks paper.</li>
              <li>Free tax software does this.</li>
              <li>IRS Direct Deposit safest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Switching banks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t close old account immediately.</li>
              <li>Update direct deposit at all sources.</li>
              <li>Wait 60 days to confirm receipt.</li>
              <li>Then close old account.</li>
              <li>Update auto-payments too.</li>
              <li>Bills + utilities + gym.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Beware scams</h3>
            <p className="text-sm text-muted-foreground">SSA + IRS NEVER call to ask for direct deposit info. Never give to caller. Setup only via official websites or in person. If asked by phone — hang up + call back at official number. Most senior bank fraud starts with phone calls. Direct deposit setup is YOUR initiative only.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
