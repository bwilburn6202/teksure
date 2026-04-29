import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function IRSPaymentPortal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Payment Portal — Plain English | TekSure" description="Pay taxes online. Plain-English steps to use IRS.gov to pay, set up payment plans, get IP PIN." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Payment Portal</h1>
          <p className="text-lg text-muted-foreground">Real IRS = IRS.gov.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to pay</h2>
            <p className="text-sm">Only at <strong>IRS.gov/payments</strong>. Anything else = scam.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Direct Pay</strong> — free from bank account.</li>
              <li><strong>Debit/credit card</strong> — small fee 1.85-2.95%.</li>
              <li><strong>EFTPS</strong> — for businesses + individual estimated.</li>
              <li><strong>IRS2Go app</strong> — official mobile app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get an IP PIN (free)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>IRS.gov → "Get an Identity Protection PIN".</li>
              <li>Verify identity via Login.gov.</li>
              <li>Get 6-digit PIN.</li>
              <li>Use when filing tax return — prevents fraud.</li>
              <li>New PIN issued each year.</li>
              <li>Best free identity-theft protection for tax fraud.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Payment plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Owe more than you can pay? Apply for payment plan online.</li>
              <li><strong>Short-term</strong> — pay in 180 days. No fee.</li>
              <li><strong>Long-term</strong> — monthly installments. $31 setup fee online.</li>
              <li>Owe under $50K — can apply online directly.</li>
              <li>Always cheaper than IRS levy.</li>
              <li>Penalty interest still accrues — pay extra when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free IRS tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Where&apos;s My Refund</strong> — check refund status.</li>
              <li><strong>Get My Payment</strong> — past stimulus checks.</li>
              <li><strong>Get Transcript</strong> — old tax returns, summary, account.</li>
              <li><strong>IRS Free File</strong> — file for free if income under $79K.</li>
              <li><strong>IRS Direct File</strong> — new free filing in 25+ states.</li>
              <li><strong>Tax Withholding Estimator</strong> — adjust W-4.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">IRS scam warnings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IRS NEVER calls demanding immediate payment.</li>
              <li>IRS NEVER threatens arrest.</li>
              <li>IRS NEVER asks for gift cards / wire / crypto.</li>
              <li>Real IRS contacts via MAIL first.</li>
              <li>Verify any "IRS" call by hanging up + calling 1-800-829-1040.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AARP Tax-Aide free help</h3>
            <p className="text-sm text-muted-foreground">Real free human help: AARP Foundation Tax-Aide. 5,000 sites nationwide. Free for any age (don&apos;t need AARP membership). Find at aarp.org/findtaxhelp. February-April. Best free tax help.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
