import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

const APPS = [
  { name: 'Hinge Health', cost: 'FREE if covered by employer/insurance', best: 'Virtual PT for chronic pain. Senior-popular. Many insurances cover.', good: 'Best free if eligible.' },
  { name: 'Sword Health', cost: 'FREE through insurance', best: 'Same idea. AI motion-tracking.', good: 'Best with insurance.' },
  { name: 'Curable', cost: '$70/yr', best: 'Pain-science based. Best for chronic + back pain.', good: 'Best for chronic pain.' },
  { name: 'PT Genie', cost: 'FREE', best: 'Free PT exercise videos. Senior-specific.', good: 'Best free YouTube PT.' },
  { name: 'YouTube — Bob and Brad', cost: 'FREE', best: '"The 2 Most Famous Physical Therapists on the Internet". Free senior PT.', good: 'Best YouTube channel.' },
  { name: 'Real PT clinic', cost: '$0-30 copay (Medicare)', best: 'Nothing replaces in-person PT. Apps supplement, don&apos;t replace.', good: 'Best overall.' },
];

export default function PhysicalTherapyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Physical Therapy Apps for Seniors | TekSure" description="Hinge Health, Bob and Brad. Plain-English picks for at-home PT to maintain strength + recover from injury." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PT Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Maintain strength. Heal at home.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need real PT</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After surgery — knee, hip, back.</li>
              <li>After fall or fracture.</li>
              <li>Stroke recovery.</li>
              <li>Chronic pain not improving.</li>
              <li>Major balance issues / fall risk.</li>
              <li>New injury within last 8 weeks.</li>
              <li>Doctor referral required for Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare PT coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare Part B covers PT — 80% after deductible.</li>
              <li>Need doctor referral.</li>
              <li>"Maintenance therapy" covered too (was previously denied — appeal won 2013).</li>
              <li>Home PT covered if homebound.</li>
              <li>20% copay typically. Medigap covers rest.</li>
              <li>NO arbitrary visit limit anymore (2024 rule).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bob and Brad PT</strong> — "Most Famous PTs on Internet". Senior-friendly.</li>
              <li><strong>Eldergym</strong> — Doug Schrift PT. Senior-specific.</li>
              <li><strong>SilverSneakers</strong> — free with Medicare Advantage. PT-style classes.</li>
              <li><strong>More Life Health Seniors</strong> — Mike Hines.</li>
              <li><strong>El Paso Manual Physical Therapy</strong> — specific issues like sciatica, plantar fasciitis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Daily 15 minutes</h3>
            <p className="text-sm text-muted-foreground">Daily 15-min PT exercise = better than weekly 1-hr session. Apps + YouTube fill gaps between in-person visits. Print exercises from in-person session — taping to wall reminds you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
