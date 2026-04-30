import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function RaisedBedAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Raised Bed Garden Apps for Seniors | TekSure" description="Plan raised garden beds. Senior-friendly knee-level gardening." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Raised Bed Gardens</h1>
          <p className="text-lg text-muted-foreground">Senior knee-friendly.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Less bending.</li><li>Better soil control.</li><li>Drainage easier.</li><li>Senior arthritis friendly.</li><li>Higher yield.</li><li>Pretty design.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vego Garden</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Metal raised beds.</li><li>$200-$500.</li><li>Senior 32-inch height.</li><li>Easy assembly.</li><li>Long-lasting.</li><li>Popular brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Seedtime app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plan when to plant.</li><li>$5/month.</li><li>Custom zone schedule.</li><li>Senior planning.</li><li>Frost dates.</li><li>Worth subscription gardener.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free planner</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>GrowVeg.com free trial.</li><li>Drag plants on grid.</li><li>Crop rotation tips.</li><li>Senior visual.</li><li>Companion planting.</li><li>Easy to use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior plants</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tomatoes, herbs.</li><li>Lettuce, spinach.</li><li>Strawberries.</li><li>Pollinator flowers.</li><li>Senior easy + tasty.</li><li>Container friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Drip irrigation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 starter kit.</li><li>Auto-watering.</li><li>Senior less daily work.</li><li>Vacation easy.</li><li>Plants thrive.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$300 raised bed = senior garden joy</h3><p className="text-sm text-muted-foreground">$300 Vego raised bed 32-inch + $50 drip irrigation = senior knee-friendly garden. No bending. Free GrowVeg planner online. Tomatoes, herbs, strawberries flourish. Senior daily joy + healthy food. Most under-considered senior wellness investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
