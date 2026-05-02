import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorAirTagsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirTags for Seniors — TekSure" description="Apple AirTag basics for seniors — find keys, wallet, luggage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirTags for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never lose keys, wallet, luggage.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$29 each</h2><p>$99 for 4-pack at Costco. Best deal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pair to iPhone</h2><p>Hold near iPhone. Pop-up appears. Tap Connect. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Keys (most popular)</li><li>Wallet</li><li>Luggage (travel)</li><li>TV remote</li><li>Walking cane</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find lost item</h2><p>Open Find My app. Tap AirTag. iPhone shows direction and distance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Play sound</h2><p>Tap &ldquo;Play Sound&rdquo;. AirTag chirps. Find under couch in seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worldwide</h2><p>If left at airport, any iPhone helps locate it. 1+ billion iPhones in network.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AirTag in luggage saves hundreds in airline-lost-bag fees and stress.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
