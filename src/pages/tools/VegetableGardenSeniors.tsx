import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Carrot } from 'lucide-react';

export default function VegetableGardenSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vegetable Garden for Seniors | TekSure" description="Grow vegetables without hurting back. Plain-English guide for senior vegetable gardeners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Carrot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Vegetable Garden</h1>
          <p className="text-lg text-muted-foreground">Fresh tomatoes from your own yard.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easiest vegetables</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tomatoes</strong> — most rewarding.</li>
              <li><strong>Zucchini / squash</strong> — abundant production.</li>
              <li><strong>Lettuce + greens</strong> — fast + cool weather.</li>
              <li><strong>Green beans (bush type)</strong> — low maintenance.</li>
              <li><strong>Cucumbers</strong> — climb trellis, less ground space.</li>
              <li><strong>Herbs</strong> — basil, rosemary, oregano.</li>
              <li><strong>Peppers</strong> — productive in heat.</li>
              <li><strong>Garlic</strong> — plant fall, harvest summer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Raised beds</strong> — 24-36&quot; tall = no bending.</li>
              <li><strong>Standing planters</strong> — Lifetime $200, perfect height.</li>
              <li><strong>Wheelchair accessible beds</strong> — 24&quot; tall + open under.</li>
              <li><strong>Container gardens</strong> — pots on patio.</li>
              <li><strong>Vertical gardens</strong> — climb up walls/trellis.</li>
              <li>Avoid in-ground if back/knee issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drip irrigation</strong> — auto water with timer.</li>
              <li><strong>Mulch heavy</strong> — less weeds, less water.</li>
              <li><strong>Square foot gardening</strong> — densely planted.</li>
              <li><strong>Companion planting</strong> — natural pest control.</li>
              <li><strong>Self-watering containers</strong>.</li>
              <li><strong>Soaker hoses</strong> + timer = water without thinking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Long-handle tools</strong> — less bending.</li>
              <li><strong>Garden seat / kneeler</strong> — saves knees + back.</li>
              <li><strong>Ergonomic trowel + cultivator</strong> — easier grip.</li>
              <li><strong>Wheel barrow with handles</strong> — easier hauling.</li>
              <li><strong>Lightweight watering can</strong> or hose.</li>
              <li><strong>Sun hat + gloves</strong> — protect skin.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Light exercise 3-4 hours/week.</li>
              <li>Vitamin D from sun (don&apos;t skip sunscreen!).</li>
              <li>Stress relief.</li>
              <li>Better diet — fresh produce.</li>
              <li>Mental focus.</li>
              <li>Sense of purpose + accomplishment.</li>
              <li>Connection to nature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Master Gardener help</h3>
            <p className="text-sm text-muted-foreground">FREE Cooperative Extension Master Gardener help. Call your county extension. Diagnose plant problems, soil testing, climate-specific advice. Many programs train seniors to BE Master Gardeners — volunteer + learn. Best gardening resource exists. mastergardener.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
