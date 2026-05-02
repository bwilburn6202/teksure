import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorPetTransportApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Transport for Seniors — TekSure" description="Get pet to vet — Uber Pet, Rover, vet house calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Transport</h1>
          <p className="text-lg text-muted-foreground">Get pet to vet.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Uber Pet</h2><p>$5 extra. Pet allowed. In most major cities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lyft Pets</h2><p>Tell driver in advance. Pet-friendly drivers accept.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vet house calls</h2><p>$100-$200. Lap of Love. Mobile vets. Saves transportation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet taxis</h2><p>$50-$80. Professional pet transport in many cities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rover dog walkers</h2><p>$20-$30 visit. Walks if you can&apos;t. Helps senior pets.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior pet help</h2><p>Local rescues. Pet Pals seniors program. Volunteer help.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Telehealth vet first for minor issues. Saves transportation and vet bills.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
