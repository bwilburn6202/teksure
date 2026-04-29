import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble } from 'lucide-react';

const MATTRESSES = [
  { name: 'Saatva Classic', cost: '$1,500-2,500', best: 'Innerspring + pillow top. Senior favorite. Free white-glove delivery.', good: 'Best overall.' },
  { name: 'Tempur-Pedic', cost: '$2,500-5,000', best: 'Memory foam. Pricey but lasts 15+ years.', good: 'Best foam.' },
  { name: 'Purple Hybrid', cost: '$2,000-3,500', best: 'Cooling. Good for hot sleepers.', good: 'Best cooling.' },
  { name: 'Casper Original', cost: '$1,000-1,500', best: 'Mid-range memory foam.', good: 'Best mid-range.' },
  { name: 'Sleep Number', cost: '$1,500-5,000', best: 'Adjustable firmness. Couples with different needs.', good: 'Best adjustable.' },
];

export default function MattressPillowPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mattress + Pillow Picker for Seniors | TekSure" description="Right mattress + pillow for senior backs + necks. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BedDouble className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mattress + Pillow Picker</h1>
          <p className="text-lg text-muted-foreground">Bad bed = bad sleep + back pain.</p>
        </div>

        <div className="space-y-3 mb-6">
          {MATTRESSES.map(m => (
            <Card key={m.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <span className="text-sm font-semibold text-primary">{m.cost}</span>
                </div>
                <p className="text-sm">{m.best}</p>
                <p className="text-sm text-muted-foreground">{m.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior mattress rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medium-firm best for back support.</li>
              <li>Too soft = hard to get out of bed.</li>
              <li>Replace every 7-10 years.</li>
              <li>Sleep trial 100+ nights — most allow.</li>
              <li>Adjustable base if reflux, sleep apnea, edema.</li>
              <li>Edge support — sit on side without sliding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pillow picks ($30-100)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Side sleeper</strong> — thick firm pillow + pillow between knees.</li>
              <li><strong>Back sleeper</strong> — thinner pillow + small pillow under knees.</li>
              <li><strong>Neck pain</strong> — Tempur-Pedic Neck or Coop Home Goods.</li>
              <li><strong>Snoring/apnea</strong> — wedge pillow.</li>
              <li><strong>Acid reflux</strong> — wedge pillow at 30-45 degrees.</li>
              <li>Replace pillows every 1-2 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Adjustable beds</h3>
            <p className="text-sm text-muted-foreground"><strong>Costco</strong> + <strong>Amazon</strong> sell adjustable bases $700-1,500. Helps reflux, snoring, back pain, easier in/out. Pair with new mattress for best results. Some HSAs cover with doctor prescription.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
