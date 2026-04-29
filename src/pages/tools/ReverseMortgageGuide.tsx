import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function ReverseMortgageGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reverse Mortgage — Honest Guide | TekSure" description="Reverse mortgage truth — when it helps, when it hurts. Plain-English explainer for seniors considering tapping home equity." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reverse Mortgage Guide</h1>
          <p className="text-lg text-muted-foreground">Honest. Pros and cons.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">For homeowners 62+. Bank pays YOU monthly OR lump sum, using home as collateral. You owe nothing while alive + in home. After death/move, home sold to repay loan. You can never owe more than home is worth.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it might make sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You&apos;re 70+ and want to age in place.</li>
              <li>House is paid off / nearly paid off.</li>
              <li>You need monthly income — pension/SS not enough.</li>
              <li>You don&apos;t plan to leave home to heirs.</li>
              <li>You&apos;re NOT moving in next 5+ years.</li>
              <li>Heirs are OK with selling home after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big downsides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>High fees</strong> — 4-6% upfront. Eats home equity fast.</li>
              <li><strong>Compounding interest</strong> — balance grows monthly.</li>
              <li><strong>Heirs lose home</strong> — they must sell or pay off loan.</li>
              <li><strong>Must keep paying</strong> property tax, insurance, maintenance — or foreclosed.</li>
              <li><strong>Hard to sell</strong> if you change mind quickly.</li>
              <li><strong>Heavy sales pressure</strong> — many sketchy salespeople.</li>
              <li><strong>Affects Medicaid eligibility</strong> in some cases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Downsize</strong> — sell home, buy smaller, pocket difference. Often best.</li>
              <li><strong>HELOC</strong> — line of credit. Lower fees. Can be cancelled by bank.</li>
              <li><strong>Cash-out refinance</strong> — at lower rate.</li>
              <li><strong>Sell + rent</strong> — eliminates maintenance hassle.</li>
              <li><strong>Sell + use proceeds in CDs/ HYSA</strong>.</li>
              <li><strong>Rent room out</strong> on Airbnb / boarder.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Required HUD counseling</h2>
            <p className="text-sm">Federal law requires HUD-approved counseling before getting reverse mortgage. ~$125. Counselor explains alternatives + costs. <strong>Listen carefully — they&apos;re neutral, salesman isn&apos;t.</strong></p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Fee-only advisor first</h3>
            <p className="text-sm text-muted-foreground">Reverse mortgages are right for ~10% of 62+ who consider them. For the rest, alternatives are better. Talk to fee-only fiduciary (NAPFA.org). Pay $300-500 for unbiased opinion. Salesman gets paid $5,000+ to sell you one — they&apos;re biased.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
