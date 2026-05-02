import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plug } from 'lucide-react';

export default function SeniorTravelChargers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Chargers for Seniors — TekSure" description="International power adapters, USB-C hubs, GaN chargers for senior travel." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Chargers</h1>
          <p className="text-lg text-muted-foreground">Power abroad and on the go.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Universal adapter</h2><p>$25. EPICKA. Works in 200+ countries. Built-in USB-C.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Anker GaN charger</h2><p>$60. 100W. Charges laptop + phone + tablet from one outlet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Power bank 20,000 mAh</h2><p>$40. 4-5 phone charges. Allowed in carry-on (most airlines).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multi-port USB</h2><p>$30. Charges 6 devices at once from one outlet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>USB ports in airports are SECURITY RISK. Use your own charger + outlet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Solar charger</h2><p>$30. Outdoor backup. Slow but works in emergencies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One adapter + one GaN charger = all senior travel power needs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
