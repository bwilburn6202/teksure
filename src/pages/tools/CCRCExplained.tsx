import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function CCRCExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CCRC Explained — Continuing Care Retirement Community | TekSure" description="What CCRCs are, costs, contracts (Type A B C). Plain-English explainer for major retirement decisions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CCRC Explained</h1>
          <p className="text-lg text-muted-foreground">Big decision. Big money. Get it right.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What CCRC means</h2>
            <p className="text-sm">Continuing Care Retirement Community. ALL levels of care in one place — independent → assisted → memory → skilled nursing. Move once + age in place. Often called "Life Plan" community.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 contract types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Type A (Life Care)</strong> — pay big upfront ($300K-$2M+) + monthly fee. Care levels included even if you need them later. Most predictable.</li>
              <li><strong>Type B (Modified)</strong> — middle ground. Some care discounted, some pay-as-you-go.</li>
              <li><strong>Type C (Fee-for-Service)</strong> — pay full market rate as needs change. Lowest entry, highest risk.</li>
              <li>Type A best for those scared of running out of money. Type C for those healthy + DIY budgeters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Entrance fee</strong> — $200K-$2M. Refundable 50-90% to estate (depending on contract).</li>
              <li><strong>Monthly fee</strong> — $3K-$8K independent, more for higher care.</li>
              <li><strong>Annual increases</strong> — 3-6% typical. Lock in early for best rates.</li>
              <li><strong>Healthcare costs</strong> — Medicare still pays for medical, CCRC for "non-medical" care.</li>
              <li>Some financial advisors say CCRC = "buying long-term care insurance you don&apos;t want to use".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Predictable cost (Type A).</li>
              <li>One move — never have to relocate as needs change.</li>
              <li>Spouse can stay even if other goes to memory care.</li>
              <li>Built-in friends + activities.</li>
              <li>Healthcare on-site for emergencies.</li>
              <li>Often more amenities than independent senior community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cons + risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big entrance fee ties up assets.</li>
              <li>If CCRC goes bankrupt — refund may be lost.</li>
              <li>Annual increases can outpace pension/SS.</li>
              <li>Once in, hard to leave (entrance fee partially non-refundable for years).</li>
              <li>Some CCRCs require minimum income / assets.</li>
              <li>Quality varies — research carefully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>How many years operating?</li>
              <li>Owner — non-profit, religious, or corporate?</li>
              <li>Audited financial statements (request).</li>
              <li>Occupancy rate. (Above 85% = healthy.)</li>
              <li>Resident reviews (visit + ask alone).</li>
              <li>State accreditation (CARF International is good signal).</li>
              <li>Refund policy in writing.</li>
              <li>Health care quality at facility level.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire CCRC-experienced lawyer</h3>
            <p className="text-sm text-muted-foreground">For big-money CCRC decisions, hire elder-law attorney who specializes in CCRC contracts. $1,500-3,000 review can save $500K of regret. Especially Type A contract review.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
