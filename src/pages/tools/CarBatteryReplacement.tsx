import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function CarBatteryReplacement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Battery Replacement for Seniors | TekSure" description="When to replace + best brands. Plain-English car battery guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Battery</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t get stranded. Know the basics.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifespan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3-5 years typical.</li>
              <li>Hot climates shorter.</li>
              <li>Cold climates also shorter.</li>
              <li>Replace BEFORE fail (not after).</li>
              <li>Don&apos;t wait until won&apos;t start.</li>
              <li>Get free testing at AutoZone, Costco.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Warning signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slow cranking.</li>
              <li>Headlights dim at idle.</li>
              <li>Dashboard warning light.</li>
              <li>Old battery (3+ years).</li>
              <li>Corrosion on terminals.</li>
              <li>Multiple short trips wear faster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco</strong> — best price. Free install. 36-month warranty.</li>
              <li><strong>Sam&apos;s Club</strong> — competitive.</li>
              <li><strong>AutoZone, Advance</strong> — free test + install.</li>
              <li><strong>Walmart</strong> — cheapest, basic.</li>
              <li>Skip dealer — usually 2x price.</li>
              <li>$100-200 typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If stranded</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AAA tow + jump.</li>
              <li>Insurance often roadside.</li>
              <li>Portable jump starter ($60) — keep in trunk.</li>
              <li>Don&apos;t accept rides from strangers.</li>
              <li>Stay in car if at intersection / busy road.</li>
              <li>Emergency reflective triangles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check terminals — clean corrosion with baking soda.</li>
              <li>Drive 30+ min once weekly.</li>
              <li>Disconnect if storing 30+ days.</li>
              <li>Battery tender if stored.</li>
              <li>Don&apos;t leave lights on.</li>
              <li>Replace as preventive measure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior survival kit</h3>
            <p className="text-sm text-muted-foreground">Trunk: jumper cables (or jumper pack), reflective triangle, blanket, water, granola bars, phone charger, flashlight, basic tools, AAA card. Replace battery preventively at year 4. Don&apos;t get stranded.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
