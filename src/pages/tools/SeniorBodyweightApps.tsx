import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBodyweightApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bodyweight Exercise for Seniors — TekSure" description="No equipment workouts — Bold, NIA, Otago for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bodyweight Exercise</h1>
          <p className="text-lg text-muted-foreground">No equipment needed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bold</h2><p>$15/month. Designed for over-60. Bodyweight focus. 15 min daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers GO</h2><p>FREE with Medicare Advantage. At-home senior workouts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Otago Exercise</h2><p>FREE. CDC-recommended. Reduces falls 35%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior staples</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Sit-to-stands</li><li>Wall push-ups</li><li>Heel raises</li><li>Marching in place</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sit-to-stand test</h2><p>Sit, stand 5 times. Can&apos;t do 5 in 14 sec? Need strength training.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free at home</h2><p>YouTube has hundreds of senior bodyweight workouts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 50 sit-to-stands daily replaces gym membership. Free strength training.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
