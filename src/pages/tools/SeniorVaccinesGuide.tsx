import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Syringe } from 'lucide-react';

export default function SeniorVaccinesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Vaccines Guide | TekSure" description="Recommended senior shots. Plain-English vaccine guide for 50+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Syringe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Vaccines</h1>
          <p className="text-lg text-muted-foreground">Free with Medicare. Save lives.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recommended vaccines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Flu</strong> — yearly. High-dose senior version.</li>
              <li><strong>COVID</strong> — annual updates.</li>
              <li><strong>Pneumonia</strong> — once or twice in life.</li>
              <li><strong>Shingles (Shingrix)</strong> — 2 doses, 50+. Critical.</li>
              <li><strong>Tdap</strong> — every 10 years.</li>
              <li><strong>RSV</strong> — new for 60+.</li>
              <li><strong>Hep A/B</strong> — if at risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shingles (most missed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shingrix — 2-dose vaccine.</li>
              <li>97% effective.</li>
              <li>Shingles VERY painful, lasts months.</li>
              <li>Postherpetic neuralgia = long-term pain.</li>
              <li>Free with Medicare Part D (2023+).</li>
              <li>Ask pharmacy or doctor.</li>
              <li>Most seniors haven&apos;t gotten — please get.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RSV (new important)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RSV (respiratory syncytial virus) hospitalizes 60K seniors/yr.</li>
              <li>New vaccines 2023+ effective.</li>
              <li>Recommended for 60+ in poor health, 75+ everyone.</li>
              <li>Single dose protection.</li>
              <li>Free with Medicare.</li>
              <li>Pharmacies + doctors offer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel vaccines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to doctor 4-6 weeks before international travel.</li>
              <li>Hepatitis A — most warm climates.</li>
              <li>Typhoid — South Asia, Africa.</li>
              <li>Yellow fever — Africa, South America.</li>
              <li>Travel clinics specialize.</li>
              <li>CDC.gov/travel — country-specific recommendations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + easy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CVS, Walgreens, Walmart pharmacies — walk-in.</li>
              <li>Most free with Medicare or insurance.</li>
              <li>Schedule online or walk-in.</li>
              <li>15 min total visit.</li>
              <li>Sometimes get all due in one visit.</li>
              <li>Make list of yours, take to pharmacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vaccine record</h3>
            <p className="text-sm text-muted-foreground">Keep digital copy in iPhone Health app or Google Pay (vaccine card scanning). Print copy in important docs file. Helps doctor know what you&apos;ve had. State immunization registries also keep record. Get when offered — saves visits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
