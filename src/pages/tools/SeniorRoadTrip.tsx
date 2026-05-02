import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorRoadTrip() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Road Trip Apps for Seniors — TekSure" description="Roadtrippers, Hipcamp, GasBuddy for senior road trips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Road Trip Apps</h1>
          <p className="text-lg text-muted-foreground">Plan once. Drive forever.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roadtrippers</h2><p>FREE basic. Plans routes with stops. Best places to see.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hipcamp</h2><p>Like Airbnb for camping. Private land stays. Different from KOA.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GasBuddy</h2><p>FREE. Cheapest gas on route. Easy savings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior pace</h2><p>4-5 hours driving max per day. Stop every 2 hours. Stretch.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audiobooks</h2><p>Libby (free with library). Hours fly. Audible $15/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CarPlay/Android Auto</h2><p>Phone on dashboard. Hands-free everything. Safer.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior road trip = 3 weeks instead of 1. Slower pace, see more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
