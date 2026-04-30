import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function MedigapVsAdvantage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medigap vs Medicare Advantage Detailed | TekSure" description="Critical decision for seniors. Detailed comparison of Medigap and Medicare Advantage plans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medigap vs Advantage</h1>
          <p className="text-lg text-muted-foreground">Critical Medicare decision.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medigap (Supplement)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Used with Original Medicare.</li>
              <li>Higher monthly premium ($150-$300+).</li>
              <li>Lower out-of-pocket when you need care.</li>
              <li>Any doctor accepting Medicare.</li>
              <li>No referrals needed.</li>
              <li>Best for those wanting predictable costs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare Advantage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replaces Original Medicare.</li>
              <li>Often $0 monthly premium.</li>
              <li>Must use network doctors.</li>
              <li>May require referrals.</li>
              <li>Often includes Part D + dental + vision.</li>
              <li>Higher copays + max out-of-pocket.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medigap better when</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You travel often - accepted nationwide.</li>
              <li>Have specific specialists you want.</li>
              <li>Live in multiple states.</li>
              <li>Need lots of care - predictable costs.</li>
              <li>Prefer no referral system.</li>
              <li>Higher income (afford premium).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Advantage better when</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stay in one area + healthy.</li>
              <li>Want low monthly premium.</li>
              <li>Doctors are in plan&apos;s network.</li>
              <li>Want extra benefits (dental, vision).</li>
              <li>Limited income.</li>
              <li>Don&apos;t mind referral system.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The trap</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Switching FROM Advantage TO Medigap is hard.</li>
              <li>Medigap can deny based on health.</li>
              <li>Once locked into Advantage, often stuck.</li>
              <li>Initial enrollment = guaranteed Medigap acceptance.</li>
              <li>Pick carefully at first enrollment.</li>
              <li>Talk to advisor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get unbiased advice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SHIP - State Health Insurance Assistance.</li>
              <li>Free Medicare counseling.</li>
              <li>Independent - no commission.</li>
              <li>1-800-MEDICARE - official help.</li>
              <li>Avoid commission-based brokers initially.</li>
              <li>Get unbiased view first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Decide carefully at age 65</h3>
            <p className="text-sm text-muted-foreground">Your initial Medicare enrollment at 65 is the critical decision. Medigap (Supplement) Plan G is most common - covers most gaps in Original Medicare. Higher premium, lower copays. Medicare Advantage often has $0 premium but more restricted networks. Talk to free SHIP counselor before deciding. Get it right the first time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
