import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function IndoorPlantsLowMaintenance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Low-Maintenance Indoor Plants | TekSure" description="Hard-to-kill houseplants for seniors. Plain-English picks for plants that thrive on neglect." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Low-Maintenance Indoor Plants</h1>
          <p className="text-lg text-muted-foreground">Hard to kill. Easy to enjoy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best beginner plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Snake plant (Sansevieria)</strong> — water once / 2-4 weeks. Tolerates neglect.</li>
              <li><strong>ZZ plant</strong> — basically indestructible.</li>
              <li><strong>Pothos</strong> — vining. Tolerates low light.</li>
              <li><strong>Spider plant</strong> — produces babies.</li>
              <li><strong>Cast iron plant (Aspidistra)</strong> — bombproof.</li>
              <li><strong>Christmas cactus</strong> — blooms once a year.</li>
              <li><strong>Philodendron</strong> — many varieties, all forgiving.</li>
              <li><strong>Aloe vera</strong> — succulent + useful for burns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watering rule for forgetful</h2>
            <p className="text-sm">Most senior plant deaths = OVER-watering. Stick finger 1" into soil. Dry? Water. Wet? Wait. Better to under-water than over-water.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Air-purifying plants (NASA list)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Snake plant — releases oxygen at night.</li>
              <li>Spider plant — removes formaldehyde.</li>
              <li>Peace lily — removes ammonia + benzene.</li>
              <li>Pothos — removes formaldehyde + xylene.</li>
              <li>Bamboo palm — removes benzene + trichloroethylene.</li>
              <li>Effects modest in real homes — but plants ARE psychologically beneficial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pet-safe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Safe</strong>: spider plant, Christmas cactus, parlor palm, areca palm, Boston fern, prayer plant.</li>
              <li><strong>TOXIC to cats/dogs</strong>: pothos, peace lily, philodendron, snake plant, aloe vera.</li>
              <li>If pet, check ASPCA toxic plant list before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Self-watering pots</h3>
            <p className="text-sm text-muted-foreground">For forgetful seniors — self-watering pots ($15-50). Reservoir bottom keeps soil moist. Water every 2-3 weeks instead of weekly. Saves plants. Saves anxiety.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
