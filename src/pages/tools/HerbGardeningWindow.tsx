import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function HerbGardeningWindow() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Herb Garden in Window for Seniors | TekSure" description="Fresh herbs in any window. Plain-English window herb garden guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Window Herb Garden</h1>
          <p className="text-lg text-muted-foreground">Fresh herbs. No yard needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easiest herbs to grow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Basil</strong> — fastest, summer herb.</li>
              <li><strong>Mint</strong> — practically indestructible (use own pot, spreads).</li>
              <li><strong>Chives</strong> — perennial, easy.</li>
              <li><strong>Parsley</strong> — slow start but reliable.</li>
              <li><strong>Rosemary</strong> — drought tolerant.</li>
              <li><strong>Thyme</strong> — small plants, fragrant.</li>
              <li><strong>Cilantro</strong> — cool weather.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup in 30 min</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>South-facing window best (most sun).</li>
              <li>4-inch pots minimum.</li>
              <li>Drainage holes essential.</li>
              <li>Saucers under (protect window sill).</li>
              <li>Quality potting soil (not garden soil).</li>
              <li>Buy starter plants ($3-5 each) easier than seeds.</li>
              <li>Plant. Water. Done.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Water when top of soil dry.</li>
              <li>Don&apos;t overwater — kills more herbs than under.</li>
              <li>Rotate pots weekly (even sun).</li>
              <li>Pinch off flowers (keeps leafy).</li>
              <li>Trim regularly = bushier plants.</li>
              <li>Replant if rootbound.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">North-facing? Use grow light</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cheap clip-on grow light $30.</li>
              <li>Window has too little sun? Add light.</li>
              <li>14 hrs/day with timer.</li>
              <li>Plants grow faster + bushier with extra light.</li>
              <li>Or use AeroGarden (see /tools/aerogarden-for-seniors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save $$ vs store herbs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Store basil bunch: $4 for 2 oz.</li>
              <li>One basil plant: $3, produces months.</li>
              <li>5-6 plants = endless herbs all summer.</li>
              <li>Fresher = better flavor.</li>
              <li>Pesticide-free.</li>
              <li>Pick exactly what you need.</li>
              <li>Saves $200-500/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best window planters</h3>
            <p className="text-sm text-muted-foreground"><strong>Window-mounted herb planter</strong> — IKEA + Amazon $30. Sits in window frame. <strong>Mason jar wall hanging</strong> — DIY look. <strong>AeroGarden Sprout</strong> — $50 hydroponic for window. <strong>Self-watering pots</strong> — $15-30 each. Many beautiful options.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
