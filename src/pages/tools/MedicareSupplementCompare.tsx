import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function MedicareSupplementCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Supplement (Medigap) Compared | TekSure" description="Plan G, Plan N, Plan F. Plain-English picks for Medigap plans + when each makes sense." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medigap (Plan G, N) Compare</h1>
          <p className="text-lg text-muted-foreground">Original Medicare + Medigap = peace of mind.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Medigap covers</h2>
            <p className="text-sm">Original Medicare leaves you on the hook for 20% of Part B costs (no cap). Medigap fills these "gaps". Standardized lettered plans (A-N) — same benefits no matter who sells.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most-popular plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Plan G</strong> — covers everything except Part B deductible ($240 in 2025). $130-300/mo. Most popular for new enrollees.</li>
              <li><strong>Plan N</strong> — like G but small copays. $90-200/mo. Cheaper if mostly healthy.</li>
              <li><strong>Plan F</strong> — most comprehensive. ONLY available if you turned 65 BEFORE Jan 1, 2020.</li>
              <li><strong>High-Deductible Plan G</strong> — $50-100/mo, $2,800 deductible. For healthy + budget-conscious.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Original Medicare + Medigap vs Medicare Advantage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Original + Medigap</strong> — $200-400/mo total. ANY doctor accepting Medicare. Predictable costs.</li>
              <li><strong>Medicare Advantage</strong> — $0-100/mo. NETWORK doctors. Surprise costs possible.</li>
              <li>For travelers / multiple doctors: Original + Medigap.</li>
              <li>For limited budget + local care: Medicare Advantage.</li>
              <li>Big decision — both have pros/cons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy SAME plan letter, DIFFERENT prices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan G is IDENTICAL coverage no matter who sells.</li>
              <li>Mutual of Omaha vs AARP/UnitedHealthcare — different prices.</li>
              <li>Same coverage = pay LESS.</li>
              <li>Compare quotes annually — switch insurers if cheaper.</li>
              <li>BUT — switching may require medical underwriting after first 6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SHIP</strong> — shiphelp.org. Free counselors.</li>
              <li><strong>Medicare.gov</strong> — official compare tool.</li>
              <li><strong>BoomerBenefits.com</strong> — independent + senior-friendly broker.</li>
              <li>Avoid TV commercials with celebrities — biased.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Once-yearly review</h3>
            <p className="text-sm text-muted-foreground">Medicare costs change every year. Check Plan G quotes annually — sometimes save $40-100/mo by switching insurer. SHIP counselors do this free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
