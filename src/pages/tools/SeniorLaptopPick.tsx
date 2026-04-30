import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

const PICKS = [
  { name: 'MacBook Air (M2/M3)', price: '$999-1,200', best: 'Best overall for seniors. Long battery, silent (no fan), works with iPhone perfectly. Gets free OS updates for 7+ years.', good: 'iCloud sync makes setup easy.' },
  { name: 'MacBook Air refurbished from Apple', price: '$700-900', best: 'Same as above, $200-300 cheaper. Same warranty.', good: 'Best value Mac.' },
  { name: 'Chromebook (Acer / Lenovo / Asus)', price: '$200-500', best: 'Cheapest reliable laptop. Boots in 5 seconds, virtually no viruses. Limited to web browsing + Google Docs.', good: 'Best for email/web/basic tasks only.' },
  { name: 'Windows laptop ($600-900 sweet spot)', price: '$600-900', best: 'Standard PC. Familiar if you\'ve always used Windows. Lots of choice. Lenovo ThinkPad, HP Pavilion, Dell XPS.', good: 'Avoid bottom $300-400 cheap PCs — they\'re slow, ad-laden.' },
  { name: 'Microsoft Surface', price: '$1,000+', best: 'Premium Windows. Touch screen. Best build quality.', good: 'For premium Windows experience.' },
  { name: 'iPad with keyboard', price: '$500-1,000+', best: 'NOT a laptop, but for many seniors who only do email/web/photos — an iPad with attached keyboard is enough AND simpler.', good: 'Worth considering before buying a laptop.' },
];

export default function SeniorLaptopPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Laptop for Seniors — Mac, Chromebook, Windows | TekSure" description="Buying a laptop? Plain-English picks for seniors — Mac, Chromebook, Windows. What fits which use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Laptop Picker</h1>
          <p className="text-lg text-muted-foreground">Don\'t overpay. Don\'t underpay. Honest take.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Match laptop to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Email + web only</strong> → Chromebook ($300) or iPad with keyboard.</li>
              <li><strong>Photos / videos / family memories</strong> → MacBook Air. Photos app is excellent.</li>
              <li><strong>Office documents (Word, Excel)</strong> → Windows or Mac (both run Office).</li>
              <li><strong>Genealogy / serious research / spreadsheets</strong> → Mac or Windows with full keyboard.</li>
              <li><strong>Gaming</strong> → Windows gaming PC, not a laptop.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specs to look for</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>16 GB RAM</strong> minimum. 8 GB feels slow within a year or two.</li>
              <li><strong>256-512 GB SSD</strong>. Nothing less. SSD (not HDD) is essential.</li>
              <li><strong>Battery life 8+ hours</strong>.</li>
              <li><strong>Backlit keyboard</strong> — game-changer for low-light.</li>
              <li><strong>13-15 inch screen</strong> — big enough for tired eyes, light enough to carry.</li>
              <li><strong>HD webcam</strong> for video calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Certified Refurbished</strong> — same warranty, $200-400 off.</li>
              <li><strong>Best Buy</strong> — has knowledgeable staff. Open box deals.</li>
              <li><strong>Costco</strong> — extra year warranty included free. Good deals.</li>
              <li><strong>Amazon Renewed</strong> — used PCs with limited warranty.</li>
              <li><strong>Microcenter</strong> if you have one — best prices on PC components.</li>
              <li><strong>Avoid bottom-tier $200 Walmart laptops</strong> — slow, often unusable in 1-2 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Our top pick</h3>
            <p className="text-sm text-muted-foreground">For most seniors: <strong>refurbished MacBook Air with 16 GB RAM</strong> from apple.com. $999 vs $1,200 new, same warranty. Lasts 7-10 years easily, gets free updates, integrates with iPhone, virtually no viruses, best resale value.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
