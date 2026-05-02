import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorAirlineApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airline Apps for Seniors — Senior Guide" description="Use airline apps for boarding, bags, and changes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airline Apps</h1>
          <p className="text-lg text-muted-foreground">Travel smoother on the airline.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Download yours</h2><p>Delta, American, United, Southwest, JetBlue. Pick the one you fly most.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Mobile boarding pass</h2><p>Skip the printer. Show phone at TSA and gate.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bag tracking</h2><p>See where your checked bag is during connections. Less worry.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Flight alerts</h2><p>Texts when gate changes or delay happens. Saves running across the airport.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Loyalty miles</h2><p>App tracks frequent flyer miles. Redeem free flights.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Seat changes</h2><p>Switch to better seats once a flight opens up. Free in many cases.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always print a paper boarding pass too if you're flying internationally — some countries still require it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
