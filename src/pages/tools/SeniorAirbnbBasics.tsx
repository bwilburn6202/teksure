import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorAirbnbBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb Basics for Seniors — TekSure" description="How seniors use Airbnb safely — find rentals, avoid scams, accessibility filters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb for Seniors</h1>
          <p className="text-lg text-muted-foreground">Vacation rentals — safely.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign up</h2><p>Free at airbnb.com. Verify identity with photo + ID for trusted status.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Filter accessibility</h2><p>Search → More Filters → Accessibility. Step-free entrance, elevator, grab bars.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read reviews</h2><p>50+ reviews = reliable host. Look for &ldquo;cleanliness&rdquo; and &ldquo;accuracy&rdquo; mentions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pay in app</h2><p>NEVER send money outside Airbnb. Hosts asking for it are scammers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VRBO alternative</h2><p>Same idea. Often better for whole-house rentals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save vs hotels</h2><p>1-bedroom Airbnb often $80/night vs $200+ hotel. Includes kitchen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Message host before booking. Confirms they&apos;re responsive.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
