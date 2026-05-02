import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function SeniorPelotonGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Peloton for Seniors — TekSure" description="Is Peloton good for seniors? Bike, app, and senior-friendly classes reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Peloton for Seniors</h1>
          <p className="text-lg text-muted-foreground">A gym at home — for any fitness level.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Just the App</h2><p>$13/month. Use without a Peloton bike. Strength, walking, yoga, meditation classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Peloton Bike</h2><p>$1,445 + $44/month. Lower-impact than running. Adjustable for any height.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly classes</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Low Impact rides</li><li>Beginner Strength</li><li>Yoga (chair-friendly)</li><li>20-minute Walking</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Refurbished</h2><p>Peloton Bike $995 used. Same warranty.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers alternative</h2><p>FREE with most Medicare Advantage. Same kind of online classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Fitness+</h2><p>$10/month. Big senior-friendly walking program. Works on Apple Watch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try the app free for 30 days before buying a bike.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
