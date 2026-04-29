import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

const PICKS = [
  { name: 'Brita pitcher', price: '$30 + $5/filter', best: 'Cheapest. Removes chlorine taste, mercury, copper. Doesn\'t remove "forever chemicals" (PFAS).', good: 'Best basic taste filter.' },
  { name: 'PUR pitcher', price: '$30 + $5/filter', best: 'Similar to Brita.', good: 'Brita alternative.' },
  { name: 'LifeStraw Home pitcher', price: '$50', best: 'Removes more contaminants (lead, PFAS, bacteria).', good: 'Best mid-range pitcher.' },
  { name: 'ZeroWater', price: '$40', best: 'Very thorough — removes most dissolved solids. Includes water-quality meter.', good: 'Best for taste-test results.' },
  { name: 'Berkey gravity system', price: '$300-400', best: 'Premium. Removes nearly everything — lead, fluoride (with extra filter), PFAS, bacteria. Sits on counter, no plumbing.', good: 'Best portable thorough filter.' },
  { name: 'Reverse Osmosis under-sink (APEC, iSpring)', price: '$200-400 + install', best: 'Best whole-glass-of-water filter. Removes nearly everything.', good: 'Best dedicated drinking water.' },
  { name: 'Whole-house filter', price: '$1,000-3,000 install', best: 'Filters every faucet + shower in the house. Stops chlorine showering.', good: 'For sensitive skin / sensitive lungs.' },
];

export default function WaterFilterPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Filter Picker — Brita, Berkey, Reverse Osmosis | TekSure" description="From $30 pitcher to whole-house filter. Plain-English picks for water filters and what they actually remove (and don\'t)." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Filter Picker</h1>
          <p className="text-lg text-muted-foreground">From pitcher to under-sink to whole-house.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">First — find out what\'s in YOUR water</h2>
            <p className="text-sm">Search <strong>EWG\'s Tap Water Database</strong> at ewg.org/tapwater. Type your zip code. See exactly what\'s found in your local supply. Then pick the right filter for what\'s actually there — not what\'s scary on TV.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test water at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lead test strips</strong> — $10-20 from hardware store. Particularly important if home was built pre-1986.</li>
              <li><strong>Tap Score (mytapscore.com)</strong> — $50-300 mail-in. Most thorough analysis.</li>
              <li><strong>Annual EPA report</strong> — your water utility must mail you one each year. Read it.</li>
              <li><strong>Free city test</strong> — many cities offer free lead testing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common myths</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>"Bottled water is safer"</strong> — usually FROM tap water and less regulated.</li>
              <li><strong>"All filters remove everything"</strong> — most pitchers don\'t remove lead or PFAS.</li>
              <li><strong>"Reverse osmosis wastes water"</strong> — newer systems are 80%+ efficient.</li>
              <li><strong>"Soft water is bad to drink"</strong> — it\'s fine; people without sodium-restricted diets needn\'t worry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick recommendation</h3>
            <p className="text-sm text-muted-foreground">For most homes — a <strong>LifeStraw Home pitcher</strong> ($50) covers 95% of taste/odor issues + removes lead. If you have an old home with lead pipes — under-sink RO ($300). If well water — get a full water test first; results determine which filter.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
