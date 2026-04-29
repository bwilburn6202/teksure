import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function PayPalSafelyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PayPal Safely for Seniors | TekSure" description="Use PayPal without scams. Plain-English guide for senior safe online payments." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PayPal for Seniors</h1>
          <p className="text-lg text-muted-foreground">Safe online payments — if you know the rules.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use PayPal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Card # never shared with merchant.</li>
              <li>PayPal Buyer Protection — 180-day money-back.</li>
              <li>Disputes mediated by PayPal.</li>
              <li>Pay friends easily without sharing bank info.</li>
              <li>Works on most sites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup safely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up at paypal.com (NOT through email link).</li>
              <li>Use a unique strong password.</li>
              <li>Turn on 2-factor authentication (Settings → Security).</li>
              <li>Link a credit card (NOT debit) — better fraud protection.</li>
              <li>You can also add bank account but credit card safer.</li>
              <li>Enable email + text notifications for activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PayPal scams to know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fake &quot;invoice&quot; emails</strong> — &quot;You authorized $500.&quot; Don&apos;t click. Log into paypal.com directly.</li>
              <li><strong>&quot;Refund&quot; phone scams</strong> — &quot;We accidentally sent you $$, send back.&quot; Hang up.</li>
              <li><strong>Phishing texts</strong> — fake login pages.</li>
              <li><strong>Fake buyers</strong> — pay for item, then claim &quot;not received&quot;.</li>
              <li><strong>Friends/Family vs Goods</strong> — Friends/Family has NO buyer protection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CRITICAL rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buying from stranger? Use &quot;Goods &amp; Services&quot;, NEVER &quot;Friends &amp; Family.&quot;</li>
              <li>Goods &amp; Services = PayPal protects you.</li>
              <li>Friends &amp; Family = ZERO protection. Money gone forever.</li>
              <li>Sellers ask for Friends/Family to avoid fees — SCAM RED FLAG.</li>
              <li>Pay extra fee (3%) for protection — worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buyer Protection covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Item not received.</li>
              <li>Item significantly different than described.</li>
              <li>Counterfeit items.</li>
              <li>180 days to file dispute.</li>
              <li>NOT covered: cars, real estate, gambling, prepaid cards.</li>
              <li>Take photos when item arrives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you suspect fraud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Log in at paypal.com (not email link).</li>
              <li>Resolution Center → Open Dispute.</li>
              <li>Contact card company too (double protection).</li>
              <li>Change PayPal password immediately.</li>
              <li>Forward phishing emails to spoof@paypal.com.</li>
              <li>Report to FTC: reportfraud.ftc.gov.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other safe payment apps</h3>
            <p className="text-sm text-muted-foreground"><strong>Apple Pay</strong> — most secure (see /tools/apple-pay-setup-seniors). <strong>Zelle</strong> — bank to bank, fast but NO buyer protection (use for trusted only). <strong>Venmo</strong> — like Zelle, careful. PayPal Goods &amp; Services = best for unfamiliar sellers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
