import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function CreditRepairScamWarning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Repair Scams — Don&apos;t Pay for Free Things | TekSure" description="Credit repair companies charge \$100-200/month for what you can do yourself for free. Plain-English warning + the right way to fix bad credit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-destructive mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Repair Scams</h1>
          <p className="text-lg text-muted-foreground">$100-200/month for things you can do FREE yourself.</p>
        </div>

        <Card className="mb-4 border-destructive">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The truth</h2>
            <p className="text-sm">Credit repair companies promise to "fix" your credit for $100-200/month. They mostly:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li>Send dispute letters to bureaus (you can do free).</li>
              <li>Wait for items to age off (happens regardless of payment).</li>
              <li>Sometimes file fake disputes that get reversed when verified.</li>
              <li>String you along for 12-24 months billing $1,200-4,800.</li>
            </ul>
            <p className="text-sm mt-2 font-semibold">Federal Trade Commission has shut down many. Most are scams.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What works (FREE)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Pay bills on time, every time</strong>. Single biggest factor (35% of score).</li>
              <li><strong>Pay down credit card balances</strong>. Get utilization under 30% — ideally under 10%.</li>
              <li><strong>Dispute errors yourself</strong>. annualcreditreport.com → see your reports → file disputes online with each bureau (Equifax, Experian, TransUnion).</li>
              <li><strong>Keep old cards open</strong>. Length of history matters.</li>
              <li><strong>Time</strong>. Most negative items fall off after 7 years (10 for bankruptcy).</li>
              <li><strong>Become "authorized user"</strong> on a family member\'s long-history good-standing card. Quick boost.</li>
              <li><strong>Secured credit card</strong>. If credit destroyed, $200 deposit secures a card. Use, pay off — rebuilds in 12-18 months.</li>
              <li><strong>Experian Boost (free)</strong>. Adds utility/phone payments to credit history. Quick small bump.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you DO need help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NFCC.org — National Foundation for Credit Counseling</strong>. Non-profit. Free or low-cost. Real help.</li>
              <li><strong>HUD-approved housing counselors</strong> (hud.gov) — free for housing-related credit issues.</li>
              <li><strong>Legal Aid</strong> — for FCRA disputes / debt harassment. Free for low-income.</li>
              <li><strong>Bankruptcy attorney</strong> — if truly drowning. Sometimes the right answer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags to walk away from</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"Guaranteed" results.</li>
              <li>Demands payment upfront before any work (illegal under federal law).</li>
              <li>Tells you to dispute accurate information.</li>
              <li>Says they have "secret" or "loophole" methods.</li>
              <li>Suggests creating a "new credit identity" with EIN. ILLEGAL.</li>
              <li>High-pressure sales tactics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bottom line</h3>
            <p className="text-sm text-muted-foreground">If your credit is bad, the only real fix is TIME + on-time payments + reduced utilization. No company can magically erase legitimate negative items. Do the work yourself for free, or get help from NFCC. Skip everyone in a TV ad promising "credit repair".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
