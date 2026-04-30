import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function FurnaceFilterSwap() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Furnace Filter Swap for Seniors | TekSure" description="Easiest senior DIY. Plain-English filter change guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Furnace Filter Swap</h1>
          <p className="text-lg text-muted-foreground">2-min DIY. Saves $$$ + extends HVAC life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How often</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1&quot; standard filters: every 1-3 months.</li>
              <li>4-5&quot; pleated filters: every 6-12 months.</li>
              <li>Pets/dust = more often.</li>
              <li>Seasonal allergies = more often.</li>
              <li>Set phone reminder.</li>
              <li>Don&apos;t skip — kills HVAC.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Steps (2 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Turn off HVAC.</li>
              <li>Find filter slot (next to HVAC unit).</li>
              <li>Note arrow direction on old filter.</li>
              <li>Slide out old.</li>
              <li>Slide in new (arrow same direction).</li>
              <li>Turn HVAC back on.</li>
              <li>Done.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find size</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Written on side of OLD filter.</li>
              <li>Common: 16x25, 20x25, 16x20.</li>
              <li>Subscribe + Save Amazon — auto-deliver.</li>
              <li>Costco bulk 6-12 pack cheap.</li>
              <li>Set + forget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">MERV rating</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>MERV 8 = standard, fine for most.</li>
              <li>MERV 11 = better for allergies.</li>
              <li>MERV 13 = highest catches viruses.</li>
              <li>Higher MERV = more pressure on HVAC.</li>
              <li>Don&apos;t use HEPA filters in HVAC — too restrictive.</li>
              <li>11-13 sweet spot for senior allergy/health.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Big savings</h3>
            <p className="text-sm text-muted-foreground">Skipping filter changes destroys HVAC = $5K-15K replace. New filter = $8-30. HVAC contractor charges $30-50 to swap. Total no-brainer DIY. 5 min monthly. Family member can do if you can&apos;t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
