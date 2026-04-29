import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function HomeInsuranceShop() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Shop Home Insurance Smarter | TekSure" description="Save $300-1,000/yr. Plain-English picks for shopping homeowners insurance + senior discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Shop Home Insurance</h1>
          <p className="text-lg text-muted-foreground">Quote 3 every 2 years.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best companies (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>USAA</strong> — vets only, top-rated.</li>
              <li><strong>Amica</strong> — top customer satisfaction. Most states.</li>
              <li><strong>State Farm</strong> — local agents, reliable.</li>
              <li><strong>Allstate</strong> — strong claim handling.</li>
              <li><strong>GEICO / Progressive</strong> — bundle with auto.</li>
              <li><strong>Lemonade</strong> — newer, app-first, cheap.</li>
              <li>Avoid Florida-only insurers — many failing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most insurers offer 10-25% off for retirees / 55+.</li>
              <li>Bundle (auto + home) — 15-25%.</li>
              <li>Newly built / re-roofed — 5-15%.</li>
              <li>Security system — 5-10%.</li>
              <li>Deadbolts + smoke alarms — small.</li>
              <li>Home water shut-off (Moen Flo) — 5-10%.</li>
              <li>Loyalty discount — 5-10% after 3+ years.</li>
              <li>Higher deductible — $1,500 vs $500 saves 10-15%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coverage to verify</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dwelling</strong> — REPLACEMENT cost (not market value). Check rebuild estimator.</li>
              <li><strong>Personal property</strong> — usually 50-70% of dwelling.</li>
              <li><strong>Liability</strong> — $300K minimum, $500K-1M better.</li>
              <li><strong>Medical payments</strong> — visitors hurt at home.</li>
              <li><strong>Loss of use</strong> — pays for hotel if home unlivable.</li>
              <li><strong>Special items</strong> — jewelry, art over $1K need scheduled.</li>
              <li><strong>Sewer backup</strong> — separate rider often needed.</li>
              <li><strong>Flood</strong> — separate. Standard insurance doesn&apos;t cover.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shop every 2 years</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get 3 quotes (Amica, State Farm, GEICO).</li>
              <li>Match coverage exactly.</li>
              <li>Note discounts.</li>
              <li>If new is 15%+ cheaper — switch.</li>
              <li>Cancel old policy after new takes effect.</li>
              <li>Loyalty doesn&apos;t pay — switching saves real money.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t buy from junk mail</h3>
            <p className="text-sm text-muted-foreground">"Final expense" + "senior life" insurance flyers in mail = often overpriced + heavy commission. Quote the same coverage from major insurers — usually 30-60% cheaper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
