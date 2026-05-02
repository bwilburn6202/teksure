import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function SeniorTrainTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Train Travel for Seniors — TekSure" description="Amtrak senior discount, scenic routes, accessible train cars." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Train Travel for Seniors</h1>
          <p className="text-lg text-muted-foreground">No security lines. No bag fees.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amtrak Senior 10%</h2><p>10% off all tickets ages 65+. Add at booking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No security check</li><li>2 free bags</li><li>Comfortable seats</li><li>Walk around</li><li>Beautiful scenery</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best routes</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>California Zephyr (Chicago-SF)</li><li>Coast Starlight (Seattle-LA)</li><li>Empire Builder (Chicago-Seattle)</li><li>Southwest Chief (Chicago-LA)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roomettes</h2><p>$200-$500 extra. Bed at night. Meals included. Senior worth it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Accessible</h2><p>All Amtrak trains accessible. Wheelchair seating bookable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan ahead</h2><p>Book 11 months in advance for best rates.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Amtrak USA Rail Pass $499. 10 segments in 30 days. Lots of senior travel.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
