import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function VitaminsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vitamins for Seniors | TekSure" description="Essential vitamins for seniors. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vitamins for Seniors</h1>
          <p className="text-lg text-muted-foreground">What you really need. What to skip.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most important</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vitamin D</strong> — bones + immune.</li>
              <li><strong>Vitamin B12</strong> — energy + nerves.</li>
              <li><strong>Calcium</strong> — bones (with D).</li>
              <li><strong>Vitamin B6</strong> — brain + energy.</li>
              <li><strong>Folate (B9)</strong> — heart + brain.</li>
              <li>Doctor blood test confirms levels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vitamin D specifically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1,000-2,000 IU daily for most.</li>
              <li>Reduces falls 20%.</li>
              <li>Better immunity.</li>
              <li>Sun = best source.</li>
              <li>15 min/day sun = baseline.</li>
              <li>Pill if can&apos;t get sun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">B12 — sneaky deficiency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30%+ of seniors deficient.</li>
              <li>Causes fatigue, depression, dementia symptoms.</li>
              <li>Stomach acid decreases with age = absorption.</li>
              <li>Sublingual or shot if very low.</li>
              <li>Methylcobalamin form best.</li>
              <li>Annual blood test critical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Multivitamin debate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Centrum Silver / One A Day 65+.</li>
              <li>Senior-targeted formulas.</li>
              <li>Some studies show benefit.</li>
              <li>$15-30/mo.</li>
              <li>Doctor often recommends.</li>
              <li>Costco Kirkland half price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SKIP these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vitamin E</strong> — high-dose risky.</li>
              <li><strong>Vitamin A</strong> — too much harmful.</li>
              <li><strong>Iron</strong> — unless deficient.</li>
              <li><strong>&quot;Memory boosters&quot;</strong> — unproven.</li>
              <li><strong>Beta-carotene</strong> — high dose risk.</li>
              <li><strong>Mega-doses</strong> — most harmful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drug interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vitamin K + warfarin (Coumadin) = bleeding risk.</li>
              <li>Calcium + thyroid meds = absorption issue.</li>
              <li>St. John&apos;s Wort + many meds.</li>
              <li>Garlic + blood thinners.</li>
              <li>Always tell doctor + pharmacist.</li>
              <li>Drugs.com has interaction checker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get tested first</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t guess. Annual blood panel includes Vitamin D, B12, folate. Medicare covers. Cheaper than buying random supplements. Most seniors deficient in something. Targeted supplementation. Quality matters — USP-verified. Whole foods preferred when possible. Vitamin pills don&apos;t replace healthy diet.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
