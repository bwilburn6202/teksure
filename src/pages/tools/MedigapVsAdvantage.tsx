import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, AlertTriangle } from 'lucide-react';

export default function MedigapVsAdvantage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medigap vs Medicare Advantage — Plain English | TekSure" description="The biggest Medicare decision. Plain-English breakdown of Medicare Supplement (Medigap) vs Medicare Advantage — pros, cons, and which suits you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medigap vs Medicare Advantage</h1>
          <p className="text-lg text-muted-foreground">The single biggest decision in Medicare. Choose carefully.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The basic question</h2>
            <p className="text-sm">When you turn 65, you pick ONE of these two paths:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>Original Medicare + Medigap (Supplement) + Part D</strong> — three pieces, more flexibility.</li>
              <li><strong>Medicare Advantage (Part C)</strong> — all-in-one, like an HMO.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medigap (Medicare Supplement)</h2>
            <p className="text-sm mb-2"><strong>How it works:</strong> Original Medicare pays first, Medigap pays leftover. Plus a separate Part D drug plan.</p>
            <p className="font-semibold text-sm mt-3">Pros:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Any doctor that accepts Medicare. No networks. Travel anywhere in US.</li>
              <li>Predictable costs (monthly premium covers most copays).</li>
              <li>No referrals needed for specialists.</li>
              <li>Best for: people who travel, want freedom, or have ongoing serious conditions.</li>
            </ul>
            <p className="font-semibold text-sm mt-3">Cons:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Higher monthly premium ($150-300/month for Plan G is typical).</li>
              <li>No dental, vision, hearing usually (sold separately).</li>
              <li>You pay 3 monthly premiums (Part B + Medigap + Part D drug).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare Advantage (Part C)</h2>
            <p className="text-sm mb-2"><strong>How it works:</strong> A private insurance plan that replaces Medicare. Often $0-50/month premium. Networks like an HMO.</p>
            <p className="font-semibold text-sm mt-3">Pros:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Often $0/month premium.</li>
              <li>Often includes dental, vision, hearing, gym, OTC stipend.</li>
              <li>Drug coverage usually built in.</li>
              <li>Out-of-pocket maximum (Original Medicare has no cap).</li>
              <li>Best for: people who don\'t travel, want low premiums, are healthy.</li>
            </ul>
            <p className="font-semibold text-sm mt-3">Cons:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Network restrictions — often must see in-network doctors only.</li>
              <li>Prior authorization for many treatments — can delay care.</li>
              <li>Hardest year is when you get sick — copays and bills add up.</li>
              <li>Switching back to Medigap LATER may be impossible (insurers can deny).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">The trap people don\'t see</h3>
                <p className="text-sm">When you first sign up at 65, you can pick Medigap with NO health questions asked. After that 6-month "open enrollment", insurers can deny you Medigap based on health. Many seniors who pick Medicare Advantage at 65 — then get sick — can\'t switch to Medigap when they need it most.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Picking a Medigap plan letter</h2>
            <p className="text-sm mb-2">The two most popular:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Plan G</strong> — covers everything except the small Part B deductible ($240 in 2025). Best overall.</li>
              <li><strong>Plan N</strong> — slightly cheaper. Has small ER and visit copays. Solid budget option.</li>
              <li>Plans F and C are no longer available to new enrollees (you might still see them).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get free help (no salesperson)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SHIP — State Health Insurance Assistance Program</strong> — free, unbiased Medicare counseling in every state. <strong>shiphelp.org</strong> or 1-877-839-2675.</li>
              <li><strong>Medicare.gov\'s plan finder</strong> — official tool.</li>
              <li><strong>AARP Medicare resources</strong>.</li>
              <li><strong>Avoid TV ad insurance brokers</strong> — they\'re paid commission to push specific plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick rule of thumb</h3>
            <p className="text-sm text-muted-foreground">Plan to travel, have ongoing conditions, value freedom of choice — Medigap. Want to minimize monthly cost, are healthy, don\'t travel — Medicare Advantage. But always run YOUR specific numbers through SHIP or Medicare.gov before committing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
