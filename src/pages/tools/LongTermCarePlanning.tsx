import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function LongTermCarePlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Long-Term Care Planning — Insurance, Costs, Alternatives | TekSure" description="Long-term care costs $5,000-$10,000/month. Plain-English options: insurance, hybrid policies, Medicaid planning, family caregiving." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Long-Term Care Planning</h1>
          <p className="text-lg text-muted-foreground">A topic no one wants to discuss. But you must.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The hard truth</h2>
            <p className="text-sm">70% of Americans 65+ will need some long-term care. Average cost: $5,000-7,000/month for assisted living, $9,000-12,000/month for nursing home. Average duration: 3 years. Total cost: $200,000-400,000+.</p>
            <p className="text-sm mt-2"><strong>Medicare does NOT cover long-term care.</strong> Most family savings can\'t absorb this hit alone.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 1 — Traditional LTC insurance</h2>
            <p className="text-sm">Pay annual premiums; insurance pays for care if you need it.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Best to buy in your 50s or early 60s — premiums lower, easier to qualify.</li>
              <li>$2,000-5,000/year typical for couples in 50s.</li>
              <li>Premiums can rise unexpectedly (insurers re-rate periodically).</li>
              <li>Insurers: Mutual of Omaha, Northwestern Mutual, MassMutual.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">If you have decent savings + Medicare + family support, traditional LTC may not be worth it.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 2 — Hybrid life/LTC policies</h2>
            <p className="text-sm">A life insurance policy you can also use for long-term care. If you don\'t need care, family gets the death benefit.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Examples: OneAmerica Asset-Care, Lincoln MoneyGuard, Nationwide YourLife.</li>
              <li>Single premium ($50,000-$200,000) or paid over years.</li>
              <li>Premiums don\'t rise.</li>
              <li>Death benefit if unused.</li>
            </ul>
            <p className="text-sm mt-2">Best for people with $100k+ in fairly idle savings.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 3 — Self-fund</h2>
            <p className="text-sm">Use your own savings. Most realistic if you have $1M+ in retirement.</p>
            <p className="text-sm mt-2">Plan: budget for 3 years × $7,000/month = $250,000 in dedicated long-term care reserves.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 4 — Medicaid (last resort)</h2>
            <p className="text-sm">If you exhaust savings, Medicaid pays for nursing home care. But:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>You spend down to ~$2,000 in countable assets (rules vary by state).</li>
              <li>"Look-back period" — Medicaid checks 5 years of asset transfers; gifts to family in that period delay coverage.</li>
              <li>Limited choice of facilities.</li>
              <li>An ELDER LAW ATTORNEY ($2,000-5,000) can structure things legally to protect spouse and home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 5 — Aging in place</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Home modifications</strong> — grab bars, stair lift, walk-in shower. $5,000-30,000 once.</li>
              <li><strong>Home health aide</strong> — $25-35/hour. Cheaper than facility for moderate needs.</li>
              <li><strong>PACE program</strong> (Programs of All-inclusive Care for the Elderly) — Medicare/Medicaid combined for seniors who qualify. Day center + home care.</li>
              <li><strong>VA benefits (Aid and Attendance)</strong> — for veterans + spouses, $1,500-2,500/month tax-free for care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First step</h3>
            <p className="text-sm text-muted-foreground">Talk to a fee-only fiduciary financial advisor (NAPFA.org) AND an elder-law attorney. Many offer free initial consults. Plan in your 50s-60s — much harder once you\'re 75+.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
