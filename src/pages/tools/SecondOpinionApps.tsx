import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

const SVCS = [
  { name: 'Cleveland Clinic 2nd Opinion', cost: '$1,500-3,500', best: 'World-class. Used by Aetna, BCBS, others. Doctor reviews remotely.', good: 'Best top-tier.' },
  { name: 'Mayo Clinic 2nd Opinion', cost: '$1,000-3,000', best: 'Same idea. Different specialists.', good: 'Best Mayo.' },
  { name: 'PinnacleCare', cost: 'Subscription $5,000+', best: 'Premium concierge — assigns a nurse advocate.', good: 'Best premium.' },
  { name: 'MORE Health', cost: '$1,500-2,500', best: 'Online consults with academic medical center experts.', good: 'Best online.' },
  { name: 'Local academic medical center', cost: '$300-1,500 with insurance', best: 'Cheapest if you can travel. Most insurance covers.', good: 'Best if you can travel.' },
];

export default function SecondOpinionApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Second Medical Opinion Services | TekSure" description="Cleveland Clinic, Mayo, PinnacleCare. Plain-English picks for getting a second opinion before major surgery or treatment." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Second Medical Opinion</h1>
          <p className="text-lg text-muted-foreground">Worth the cost for big diagnoses.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to get one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cancer diagnosis.</li>
              <li>Major surgery recommended (heart, joint replacement, spine).</li>
              <li>Rare disease + complex treatment plan.</li>
              <li>"Last resort" or experimental treatment.</li>
              <li>Life expectancy + quality of life decisions.</li>
              <li>You don&apos;t feel right about doctor&apos;s recommendation.</li>
              <li>Conflicting advice from multiple doctors.</li>
              <li>Studies — 20-30% of 2nd opinions change diagnosis or treatment plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major insurance covers 2nd opinion (Medicare, BCBS, Aetna, etc.).</li>
              <li>Some HMOs require referral first — check.</li>
              <li>Cleveland Clinic has insurance partnerships — fully covered for many.</li>
              <li>Medicare covers 2nd opinion before surgery if your doctor recommends one.</li>
              <li>Self-pay options often available for those without coverage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to ask first doctor</h2>
            <p className="text-sm">"I want to get a second opinion before this big decision — can you help me transfer my records?" Most doctors RESPECT this — they prefer patients who are confident in the plan. Doctors who get defensive = red flag.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help finding specialist</h3>
            <p className="text-sm text-muted-foreground">For rare diseases — NIH Rare Diseases Network is free. ALS Association, American Cancer Society, etc. have nurse hotlines that help find best specialists. State medical society referral lines also free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
