import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function DisputeChargeCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="How to Dispute a Credit Card Charge | TekSure" description="Got a wrong charge, fraud, or undelivered product? Plain-English steps to dispute (chargeback) a credit card charge — your card has powerful federal protections." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dispute a Credit Card Charge</h1>
          <p className="text-lg text-muted-foreground">When a charge is wrong, you have powerful federal rights.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Federal protections</h2>
            <p className="text-sm">Under the Fair Credit Billing Act (1974) and Truth in Lending Act, you can dispute charges and not pay them while disputed. Banks usually credit your account immediately. Credit card protection is FAR stronger than debit card.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you can dispute</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fraudulent charge</strong> — you didn\'t make it. (Always disputable.)</li>
              <li><strong>Wrong amount</strong> — charged more than agreed.</li>
              <li><strong>Item never arrived</strong>.</li>
              <li><strong>Item arrived broken or "not as described"</strong> — and seller won\'t refund.</li>
              <li><strong>Service not provided</strong> (cancelled flight, contractor didn\'t finish, etc.).</li>
              <li><strong>Subscription you cancelled but kept charging</strong>.</li>
              <li><strong>Double charge</strong>.</li>
              <li><strong>Charges after returning an item</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step-by-step process</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Try the merchant first</strong> — call or email asking for refund. Save the response (or non-response).</li>
              <li><strong>Sign in to your card account</strong> — Chase, Discover, Citi, Capital One, etc. Look for "Dispute charge" or "Report a problem".</li>
              <li><strong>Click the charge in question</strong>. Many cards now have a "Dispute" button right there.</li>
              <li><strong>Pick a reason</strong>. Banks have ~15 categories.</li>
              <li><strong>Submit evidence</strong> — emails, photos, receipts.</li>
              <li><strong>Bank credits your account</strong> immediately while investigating (in most cases).</li>
              <li><strong>Wait 30-90 days</strong> for resolution.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time limits</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Fraud:</strong> Up to 60 days from when you received the statement.</li>
              <li><strong>Item not received / not as described:</strong> Usually 60-120 days from purchase.</li>
              <li><strong>Old charges (over 6 months)</strong> — harder but sometimes still possible. Try.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips that help win</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Be specific</strong> — "Charged $150 on 3/14 for product that arrived broken on 3/20. Sent merchant photo on 3/22, no response."</li>
              <li><strong>Save proof</strong> — emails, tracking numbers, photos.</li>
              <li><strong>Stay polite</strong> — bank reps are humans deciding.</li>
              <li><strong>Pay the rest of the bill</strong> — only the disputed part is held back.</li>
              <li><strong>If denied, appeal</strong>. About 30% of denials get reversed on appeal.</li>
              <li><strong>If still denied, file with CFPB</strong> at consumerfinance.gov — federal regulator.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ For DEBIT card disputes</h2>
            <p className="text-sm">Debit cards have weaker protection (Electronic Fund Transfer Act). Money is OUT of your account during dispute. ALWAYS use credit card for online or unfamiliar purchases.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best card for protection</h3>
            <p className="text-sm text-muted-foreground">American Express has the BEST customer service for disputes. Chase and Capital One are strong runners-up. Discover is famously customer-friendly. If you frequently order from small merchants — pay with one of these.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
