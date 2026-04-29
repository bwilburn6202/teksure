import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const PICKS = [
  { name: 'Oral-B iO Series 8', cost: '$200-300', best: 'Smart toothbrush. App tracks brushing. Senior-friendly.', good: 'Best smart electric.' },
  { name: 'Philips Sonicare 9000', cost: '$200', best: 'Strong competitor. Different motion. Equally effective.', good: 'Best Sonicare.' },
  { name: 'Quip Electric', cost: '$45', best: 'Simple. Subscription brush head replacement.', good: 'Best basic electric.' },
  { name: 'Waterpik Aquarius', cost: '$80', best: 'Water flosser. Senior-friendly (easier than string floss).', good: 'Best flosser alternative.' },
  { name: 'Manual + Crest Pro Health Toothpaste', cost: '$10', best: 'Manual brushing works fine WITH proper technique. Save money.', good: 'Best basic.' },
];

export default function TeethCleaningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Dental Hygiene Tools | TekSure" description="Best electric toothbrushes, water flossers, and apps for senior dental health. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dental Hygiene Tools</h1>
          <p className="text-lg text-muted-foreground">Better tools = fewer cavities = less $.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior dental issues + prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dry mouth</strong> — many meds cause it. Drink more water. Sugar-free gum. Biotene mouthwash.</li>
              <li><strong>Receding gums</strong> — soft toothbrush only. Sensodyne toothpaste.</li>
              <li><strong>Root cavities</strong> — fluoride mouthwash (ACT) helps.</li>
              <li><strong>Loose dentures</strong> — relined every 5 years OR consider implants.</li>
              <li><strong>Gum disease</strong> — daily floss/water-pick. Critical.</li>
              <li><strong>Daily routine</strong> — brush 2x, floss 1x, mouthwash, dentist 2x/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + cheap dental care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dental schools</strong> — students do work supervised, 30-50% off.</li>
              <li><strong>FQHC clinics</strong> — sliding-scale fees.</li>
              <li><strong>Mission of Mercy</strong> — annual free dental clinics.</li>
              <li><strong>Donated Dental Services</strong> — free for vulnerable seniors. dentallifeline.org.</li>
              <li><strong>Local Aging Office</strong> — knows local programs.</li>
              <li><strong>Costco / Sam&apos;s Optical</strong> — cheapest dental discount plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Original Medicare doesn&apos;t cover dental</h3>
            <p className="text-sm text-muted-foreground">Big surprise to many — Original Medicare covers ZERO routine dental. Medicare Advantage often does. Standalone dental insurance ($30-60/mo) for cleanings + simple work. For implants/crowns, dental plan often saves less than expected. Calculate carefully.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
