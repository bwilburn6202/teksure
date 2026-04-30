import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function DentureCareGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Denture Care Guide | TekSure" description="Daily denture care, adhesives, and cost-saving tips. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Denture Care</h1>
          <p className="text-lg text-muted-foreground">Comfort + clean = confidence.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remove + rinse after every meal.</li>
              <li>Brush dentures (soft brush) before bed.</li>
              <li>Soak overnight in cleaner solution.</li>
              <li>Brush gums + tongue with soft brush 2x daily.</li>
              <li>Rinse dentures in morning before reinserting.</li>
              <li>Never sleep in dentures — gum disease + sores.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning products</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Polident</strong> — most popular. Effervescent tablets.</li>
              <li><strong>Efferdent</strong> — similar, often cheaper.</li>
              <li><strong>Denture brush</strong> — different from toothbrush, $5.</li>
              <li><strong>Mild dish soap</strong> — for daily brush. Not regular toothpaste (too abrasive).</li>
              <li>Never bleach — yellows acrylic.</li>
              <li>Never hot water — warps dentures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adhesives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fixodent</strong> — most popular cream.</li>
              <li><strong>Poligrip</strong> — strong hold variant.</li>
              <li><strong>Sea Bond</strong> — strips, less mess.</li>
              <li>If you NEED lots of adhesive — dentures don&apos;t fit. Get adjusted.</li>
              <li>Avoid zinc-containing adhesives — can cause nerve damage with overuse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost-saving denture care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual reline ($300-400) — readjusts fit as gums shrink.</li>
              <li>Replace every 5-7 years.</li>
              <li>Dental schools — discounted dentures.</li>
              <li>Aspen Dental, Affordable Dentures — chains, lower cost.</li>
              <li>Medicare Advantage often includes some dental.</li>
              <li>Original Medicare = NO dental. Get dental insurance separately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Implants vs dentures</h3>
            <p className="text-sm text-muted-foreground">Implant-supported dentures = $5K-30K but stable, no adhesive needed. Last 20+ years. Worth it if budget allows. Mexico/Costa Rica dental tourism = 50-70% savings (research clinic carefully).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
