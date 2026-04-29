import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

const MACHINES = [
  { name: 'Brother CS7000X', cost: '$220', best: 'Best beginner. 70 stitches.', good: 'Best overall.' },
  { name: 'Singer Heavy Duty 4423', cost: '$200', best: 'Sews thick fabric, jeans.', good: 'Best heavy.' },
  { name: 'Brother XM2701', cost: '$130', best: 'Lightweight, basic.', good: 'Best budget.' },
  { name: 'Janome 2212', cost: '$250', best: 'Mechanical, durable.', good: 'Best simple.' },
  { name: 'Bernette b37', cost: '$500', best: 'Premium beginner.', good: 'Best premium.' },
];

export default function SewingMachineBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sewing Machine Basics for Seniors | TekSure" description="Choosing + using sewing machines. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sewing Machine Basics</h1>
          <p className="text-lg text-muted-foreground">Mend, hem, create. Senior-friendly machines.</p>
        </div>

        <div className="space-y-3 mb-6">
          {MACHINES.map(m => (
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
            <h2 className="font-bold text-xl mb-3">Senior pick: Brother CS7000X</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$220.</li>
              <li>70 built-in stitches.</li>
              <li>Easy threading.</li>
              <li>Drop-in bobbin (no fiddly).</li>
              <li>Auto needle threader (huge for vision).</li>
              <li>Backed by Brother service.</li>
              <li>Light enough to move.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read manual cover to cover.</li>
              <li>Watch YouTube — model-specific.</li>
              <li>Practice on scrap fabric first.</li>
              <li>Learn: thread, bobbin, change needle.</li>
              <li>Master: straight stitch, zigzag.</li>
              <li>Then: basic seam, hem.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy senior projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hem pants (cheaper than tailor).</li>
              <li>Mend torn clothes.</li>
              <li>Pillowcases.</li>
              <li>Tote bags.</li>
              <li>Aprons.</li>
              <li>Pajama pants.</li>
              <li>Quilts (advanced).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comfort</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Magnifying lamp</strong> — ($40) clearer threading.</li>
              <li><strong>Auto needle threader</strong> — vision-friendly.</li>
              <li><strong>Larger spool holders</strong>.</li>
              <li><strong>Sturdy table at right height</strong>.</li>
              <li><strong>Comfortable chair with back support</strong>.</li>
              <li><strong>Knee lift</strong> — hands free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money sewing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hem pants — save $15 ea/tailor.</li>
              <li>Mend rather than throw out.</li>
              <li>Make gifts.</li>
              <li>Sell on Etsy / craft fairs.</li>
              <li>Costume creation for grandkids.</li>
              <li>Drapes / curtains.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free classes</h3>
            <p className="text-sm text-muted-foreground">Joann + Hobby Lobby — free beginner classes. YouTube — &quot;Whitney Sews&quot;, &quot;Made to Sew&quot;. Library — sewing books + sometimes machines to borrow. Senior centers + church groups. Many seniors restart sewing as creative outlet.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
