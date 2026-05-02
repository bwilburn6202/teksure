import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorRoadScholar() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Road Scholar for Seniors — TekSure" description="Educational travel for seniors — Road Scholar, Smithsonian, Trafalgar." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Travel Tours</h1>
          <p className="text-lg text-muted-foreground">Travel + learning. Single-friendly.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Road Scholar</h2><p>Designed for ages 50+. 5,500 programs in 100+ countries. Senior community.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smithsonian Journeys</h2><p>Expert-led with curators. Premium pricing. Cultural depth.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trafalgar Tours</h2><p>Coach tours. All ages but senior-friendly. Tipping included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Solo travel</h2><p>Many tours have low/no single supplements. Great way to travel alone safely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Levels of activity</h2><p>Filter by easy/moderate/active. Choose what fits your fitness.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free catalogs</h2><p>Order printed catalog from roadscholar.org. Beautiful inspiration.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Book 6-12 months ahead. Best programs sell out. Early bird discounts often.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
