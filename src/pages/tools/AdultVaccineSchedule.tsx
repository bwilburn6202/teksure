import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Syringe } from 'lucide-react';

const VACCINES = [
  { name: 'Flu (Influenza)', when: 'Every year, ideally September-October.', who: 'Everyone over 6 months, especially 65+.', why: 'Flu hospitalizes 100,000-700,000 Americans yearly, mostly seniors.' },
  { name: 'Pneumonia (PCV20 or PCV15+PPSV23)', when: 'Once after age 65, no booster needed.', who: 'Everyone 65+. Some chronic-condition adults earlier.', why: 'Pneumonia is a top killer of older adults.' },
  { name: 'Shingles (Shingrix)', when: '2 doses, 2-6 months apart.', who: 'Adults 50+.', why: 'Shingles affects 1 in 3 adults; pain can last years (post-herpetic neuralgia).' },
  { name: 'RSV', when: 'Once after age 60.', who: 'Adults 60+, esp. with heart/lung conditions.', why: 'New CDC recommendation. RSV hospitalizes 60,000+ seniors yearly.' },
  { name: 'COVID-19', when: 'Updated booster every fall.', who: 'CDC recommends current vaccine for everyone, especially 65+.', why: 'Cuts hospitalization risk significantly.' },
  { name: 'Tdap (Tetanus / Diphtheria / Pertussis)', when: 'Once for booster, then Td or Tdap every 10 years.', who: 'All adults.', why: 'Especially important if grandchildren are around.' },
  { name: 'Hepatitis A & B', when: 'If at risk.', who: 'Travelers, healthcare workers, certain conditions.', why: 'Talk to doctor about your specific situation.' },
  { name: 'MMR (Measles)', when: 'Born after 1957 and unsure? Get a booster.', who: 'Travelers especially. Recent measles outbreaks.', why: 'Measles is back. Protection is forever after vaccination.' },
];

export default function AdultVaccineSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Vaccine Schedule — Flu, Pneumonia, Shingles, RSV | TekSure" description="Updated 2025 vaccine recommendations for adults 50+. CDC schedule, when, where, and what each protects against." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Syringe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Vaccine Schedule</h1>
          <p className="text-lg text-muted-foreground">CDC-recommended vaccines for adults 50+, in plain English.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Where to get them</h2>
            <p className="text-sm">Most adults can walk into <strong>CVS, Walgreens, Rite Aid, Costco, Walmart, or your local pharmacy</strong> for vaccines without an appointment. Medicare Part B and most insurance covers most adult vaccines free. Save the receipts.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {VACCINES.map(v => (
            <Card key={v.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{v.name}</h3>
                <p className="text-sm mb-1"><strong>When:</strong> {v.when}</p>
                <p className="text-sm mb-1"><strong>Who:</strong> {v.who}</p>
                <p className="text-sm text-muted-foreground"><strong>Why:</strong> {v.why}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Track your vaccinations</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Health → Vaccinations</strong> — phones can scan the CDC card.</li>
              <li><strong>Your state\'s immunization registry</strong> — most states have one. Search "[state] immunization registry".</li>
              <li><strong>Pharmacy app</strong> (CVS, Walgreens) — they keep records of what they gave you.</li>
              <li><strong>Photograph your CDC card</strong> — keep in a safe note.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best time to get them</h3>
            <p className="text-sm text-muted-foreground">Annual flu shot in early October is the gold standard. Pair with COVID booster. Get the Shingrix series the year you turn 50. Get RSV after 60. Pneumonia at 65. Most pharmacies will check your record and recommend what\'s due.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
