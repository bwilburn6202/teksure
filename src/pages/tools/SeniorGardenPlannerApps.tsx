import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorGardenPlannerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garden Planner Apps for Seniors — TekSure" description="Plan vegetable beds and flower gardens — From Seed, GrowVeg, Gardenize." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garden Planner Apps</h1>
          <p className="text-lg text-muted-foreground">Plan beds. Track harvests.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">From Seed (FREE)</h2><p>Plan vegetable garden by zip code. Best planting dates included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GrowVeg</h2><p>$35/year. Drag-drop garden bed designer. Companion planting suggestions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gardenize</h2><p>FREE. Track all your plants. Note bloom times, harvests.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Almanac.com</h2><p>FREE. Old Farmer&apos;s Almanac. Best planting dates for your area.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA Hardiness Zone</h2><p>planthardiness.ars.usda.gov. Type zip — find your zone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior tip</h2><p>Raised beds save backs. Easier on knees and joints.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Photo every plant when you first plant it. Helps remember what&apos;s where.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
