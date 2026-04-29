import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function DentalInsuranceCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dental Insurance Coach for Seniors | TekSure" description="Original Medicare does NOT cover dental. Plain-English options — Medicare Advantage dental, separate dental plans, discount plans, and dental schools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dental Insurance Coach</h1>
          <p className="text-lg text-muted-foreground">Medicare doesn\'t cover dental. Here\'s what does.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 1 — Medicare Advantage with dental</h2>
            <p className="text-sm">Most Medicare Advantage plans now include dental coverage. Coverage varies WIDELY:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Routine cleanings + exams (basic plans).</li>
              <li>Fillings + extractions.</li>
              <li>Some cover crowns, root canals, dentures (look for "comprehensive dental").</li>
              <li>Annual maximum often $1,000-3,000.</li>
            </ul>
            <p className="text-sm mt-2">When picking a Medicare Advantage plan during Open Enrollment (Oct 15-Dec 7), compare dental coverage carefully.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 2 — Standalone senior dental insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Delta Dental Senior</strong> — biggest provider. $30-60/month.</li>
              <li><strong>Humana Dental Plus</strong> — multiple tiers.</li>
              <li><strong>Cigna Dental Preventive</strong> — basic, cheaper.</li>
              <li><strong>Spirit Dental</strong> — no waiting period for many services.</li>
              <li><strong>Physicians Mutual</strong> — heavily advertised. Usually NOT the cheapest.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Most have 6-12 month waiting period for major work. Plan ahead.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 3 — Dental discount plan (NOT insurance)</h2>
            <p className="text-sm mb-2">$10-15/month for "membership" giving 15-50% off at participating dentists. No waiting period, no annual max. Examples:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Aetna Dental Access.</li>
              <li>DentalPlans.com — compares many plans.</li>
              <li>Smile Direct (different from braces company).</li>
            </ul>
            <p className="text-sm mt-2">Best if you only need cleanings and routine work. Often cheaper than insurance.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 4 — Dental school clinics</h2>
            <p className="text-sm">Dental students under supervision do work at 30-50% less. Slower visits, but solid quality. 65 dental schools in the US — most have public clinics. Search "[your area] dental school clinic".</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 5 — Free or low-cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dental Lifeline Network</strong> (dentallifeline.org) — free dental care for medically fragile, disabled, low-income elderly.</li>
              <li><strong>Mission of Mercy</strong> — free dental days held in many states. Check missionofmercy.org.</li>
              <li><strong>Federally Qualified Health Centers (FQHC)</strong> — sliding-scale dental at 1,400 US clinics. Find at findahealthcenter.hrsa.gov.</li>
              <li><strong>Medicaid</strong> — covers dental in many states (varies). Apply at your state\'s Medicaid office.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best math</h3>
            <p className="text-sm text-muted-foreground">If you need just routine cleanings — pay cash ($150 twice a year = $300). Insurance often costs $400-700 in premiums for routine coverage. Insurance pays off if you need crowns, dentures, or root canals.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
