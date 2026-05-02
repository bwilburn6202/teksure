import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorSeedlingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Seedling Apps for Seniors — TekSure" description="From Seed app, Almanac.com — best planting dates for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Seedling Apps</h1>
          <p className="text-lg text-muted-foreground">Right plant. Right time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">From Seed</h2><p>FREE. Type zip. Tells when to plant + spacing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Almanac.com</h2><p>FREE. Old Farmer&apos;s Almanac. Trusted for centuries.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA Zone</h2><p>FREE planthardiness.ars.usda.gov. Type zip. Know your zone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Garden Planner Pro</h2><p>$5/month. Drag plants on grid. Companion planting suggestions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easiest seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Cherry tomatoes</li><li>Lettuce</li><li>Herbs</li><li>Marigolds</li><li>Cucumbers</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local extension</h2><p>FREE. Master Gardeners. Senior-friendly advice. Free workshops.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Local extension = best gardening advice. Master Gardeners free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
