import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorPackingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Packing Apps for Seniors — TekSure" description="Don't forget anything — PackPoint, TripIt, smart packing lists." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Packing Apps</h1>
          <p className="text-lg text-muted-foreground">Pack right every time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PackPoint</h2><p>FREE. Lists what to pack based on destination weather and trip length.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TripIt</h2><p>FREE. Forwards confirmation emails. Auto-builds itinerary.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior packing essentials</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>All medications (carry-on)</li><li>Phone charger</li><li>Power adapter (international)</li><li>Reading glasses backup</li><li>Compression socks</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Reminders</h2><p>FREE. Make &ldquo;Travel&rdquo; list. Reuse for every trip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo passport</h2><p>Take photo of passport. Stays in iCloud if real one lost.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pack lighter</h2><p>Most seniors over-pack. 1 outfit per 2 days + walking shoes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Carry-on only saves $30+ per flight, no lost luggage.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
