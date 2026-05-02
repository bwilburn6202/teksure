import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SmartDishwasherForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Dishwashers for Seniors | TekSure" description="Bosch, Miele dishwashers for senior kitchens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Dishwashers</h1>
          <p className="text-lg text-muted-foreground">Senior kitchen ease.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bosch best</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$700-$1,500.</li><li>Quietest.</li><li>Senior 42-44 dB.</li><li>Reliable.</li><li>Long-lasting.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priorities</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Quiet — senior sensitive.</li><li>Easy controls.</li><li>3rd rack utensils.</li><li>Reliable.</li><li>Energy efficient.</li><li>Skip touchscreens.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App alerts done.</li><li>Run during off-peak.</li><li>Senior optional.</li><li>Skip $2,000 premium.</li><li>$1,000 plenty.</li><li>Reliability priority.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Drawers vs door</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fisher Paykel drawers $1,500.</li><li>Senior less bending.</li><li>Two halves.</li><li>Worth knee-friendly.</li><li>Premium feature.</li><li>Worth it some.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Energy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Energy Star save $$.</li><li>Less hot water.</li><li>Senior bills lower.</li><li>Off-peak schedule.</li><li>Free savings.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tablet detergent</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cascade Platinum.</li><li>One per load.</li><li>Senior easier than measuring.</li><li>No spills.</li><li>Better cleaning.</li><li>Worth premium pods.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$1,000 Bosch = senior quietest</h3><p className="text-sm text-muted-foreground">$1,000 Bosch dishwasher = senior quietest 42-44 dB. Reliable, long-lasting. Skip $2,000 smart features. 3rd rack utensils. Cascade Platinum tablets easier. Or $1,500 Fisher Paykel drawers if knees bad. Senior best dishwasher.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
