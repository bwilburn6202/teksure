import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fish } from 'lucide-react';

export default function SeniorAquariumTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Aquarium Tech for Seniors — TekSure" description="Auto-feeders, smart heaters, water testing — easier fishkeeping for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Aquarium Tech</h1>
          <p className="text-lg text-muted-foreground">Calming hobby. Tech makes it simple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eheim Auto Feeder</h2><p>$30. Schedule daily feedings. Travel-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Inkbird heater controller</h2><p>$30. Precise temperature control. Auto-shuts off if too hot.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart water testing</h2><p>Seneye monitor ($150). Warns of pH/nitrate problems before fish die.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart light timer</h2><p>Wyze Smart Plug ($15). Auto on/off lights. Looks like sunrise/sunset.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beginner tank</h2><p>20-gallon long with hood and filter $80-$120 starter kit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calming benefit</h2><p>Studies show watching fish reduces blood pressure and anxiety.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Start with hardy fish (zebra danios, platies). Less stressful than goldfish.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
