import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function DigitalSavingPlans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Savings Apps for Grandkids | TekSure" description="529, custodial accounts, gifting. Plain-English picks for setting up digital savings for grandchildren." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Savings for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Money + lessons that compound.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best account types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>529 College Plan</strong> — tax-free for college expenses. Open at Vanguard, Fidelity. $25 starting deposit.</li>
              <li><strong>UTMA / UGMA custodial</strong> — for any purpose at age 18-21.</li>
              <li><strong>Roth IRA for working teens</strong> — they earn, you match. Tax-free retirement.</li>
              <li><strong>HYSA in their name</strong> — Ally, Marcus. 4-5% yield.</li>
              <li><strong>I Bonds (TreasuryDirect)</strong> — inflation-protected. Up to $10K/yr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy gifting platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Greenlight Card</strong> — debit card + savings + investing for kids.</li>
              <li><strong>UNest / Acorns Early</strong> — grandparents gift to UTMA.</li>
              <li><strong>Goalsetter</strong> — kids&apos; banking + gifting.</li>
              <li><strong>Backer.com</strong> — share 529 link, family contributes.</li>
              <li><strong>Direct check to parents&apos; account</strong> — old school works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax-smart gifting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$19,000 / yr / grandkid tax-free (2025).</li>
              <li>Couples can give $38K each grandkid.</li>
              <li>Direct tuition payment — UNLIMITED, no gift tax.</li>
              <li>Direct medical payment — UNLIMITED.</li>
              <li>5-year accelerated 529 — give $90K at once for super-charged growth.</li>
              <li>See /tools/estate-gifting-planning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$50 monthly for 18 years</h3>
            <p className="text-sm text-muted-foreground">$50/month from birth at 7% return = $21K at 18 (college). $80K at 30 (down payment). Best legacy gift = consistent small contributions over years. Better than one big gift later.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
