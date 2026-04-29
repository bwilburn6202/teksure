import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';

export default function ReturnsRefundsHowTo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Returns &amp; Refunds — How to Win | TekSure" description="The store said &quot;final sale&quot; — but you have rights. Plain-English guide to winning returns, refunds, and credit card chargebacks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RotateCcw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Returns &amp; Refunds</h1>
          <p className="text-lg text-muted-foreground">Know your rights. Get your money back.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best return policies (US, 2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco</strong> — basically lifetime, except electronics (90 days). Even open food/perishables.</li>
              <li><strong>L.L.Bean</strong> — 1 year, no receipt needed.</li>
              <li><strong>REI</strong> — 1 year (members).</li>
              <li><strong>Trader Joe&apos;s</strong> — full refund on anything, no receipt, no questions.</li>
              <li><strong>Nordstrom</strong> — no time limit, no receipt usually.</li>
              <li><strong>Costco/Amazon</strong> — easiest in terms of process.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Standard return rules (most stores)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-90 days typical. Holiday season often extended.</li>
              <li>Receipt makes everything easier. Take a photo when you buy.</li>
              <li>Original packaging usually required for electronics.</li>
              <li>Tags still attached for clothing.</li>
              <li>Some stores charge restocking fees on electronics (15-25%).</li>
              <li>"Final sale" / "All sales final" CAN sometimes be returned for store credit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If the store refuses</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask politely for a manager.</li>
              <li>Be calm. Explain the issue clearly.</li>
              <li>If still refused, mention "I&apos;d hate to dispute the charge with my credit card."</li>
              <li>If still no, leave. Don&apos;t escalate further in store.</li>
              <li>Call your credit card. Open a dispute (chargeback).</li>
              <li>Bank investigates. Usually wins within 30 days.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit card chargeback (your secret weapon)</h2>
            <p className="text-sm">Federal law (Fair Credit Billing Act) lets you dispute any charge on a credit card if:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Item never arrived.</li>
              <li>Item was damaged or wrong.</li>
              <li>Item materially different from description.</li>
              <li>Service not performed.</li>
              <li>Billed wrong amount.</li>
            </ul>
            <p className="text-sm mt-3"><strong>Time limit:</strong> 60 days from statement. Call the number on back of card. Say "I want to dispute a charge."</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online order that never arrived</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Wait until 5 days past promised delivery date.</li>
              <li>Email seller. Give them 7 days to respond/refund.</li>
              <li>If no response — call credit card company. Chargeback.</li>
              <li>If paid via PayPal — open dispute in PayPal. They handle it.</li>
              <li>If paid via Zelle/Venmo/Cash App — almost no recourse. Lesson learned.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Extended warranty rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many credit cards DOUBLE manufacturer warranty for free.</li>
              <li>Visa Signature, Mastercard World Elite, AmEx Platinum, Chase Sapphire — extended warranty included.</li>
              <li>Save receipts in your password manager or photos.</li>
              <li>Skip the in-store extended warranty — usually overpriced.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t accept a "store credit" first</h3>
            <p className="text-sm text-muted-foreground">Stores often offer store credit when you ask for refund. You don&apos;t have to accept. Politely say "I&apos;d prefer the refund to my card." Most managers honor it. Store credit expires; cash refund doesn&apos;t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
