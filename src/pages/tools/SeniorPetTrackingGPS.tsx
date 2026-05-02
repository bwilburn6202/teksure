import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorPetTrackingGPS() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GPS Pet Trackers for Seniors — TekSure" description="Find lost pets fast — Tractive, AirTag, Whistle, Apple Find My." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GPS Pet Trackers</h1>
          <p className="text-lg text-muted-foreground">Find a lost pet in minutes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tractive GPS</h2><p>$50 device + $7/month. Live tracking. Most reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Whistle Go</h2><p>$130 device + $9/month. Health tracking too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple AirTag</h2><p>$29. No subscription. Works only when other Apple devices are nearby.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tile</h2><p>$25. Works with iPhone or Android. Limited range without crowdsourcing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Choose by need</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Indoor cat: AirTag/Tile is enough</li><li>Outdoor cat: Tractive subscription</li><li>Dog who escapes: Tractive or Whistle</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microchip too</h2><p>GPS batteries die. A vet-installed microchip ($25-$50) is a permanent backup ID.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test the tracker. Walk down the block — make sure the alert works.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
