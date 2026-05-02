import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorGardeningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gardening Apps for Seniors — TekSure" description="Best free gardening apps for seniors — PictureThis, Planta, Seek." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gardening Apps</h1>
          <p className="text-lg text-muted-foreground">Identify plants. Schedule watering. Save money.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PictureThis</h2><p>Snap any plant. AI tells you what it is and how to care for it. Free trial.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Seek by iNaturalist</h2><p>FREE. Same idea but no subscription. Backed by California Academy of Sciences.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Planta</h2><p>Watering reminders for every plant in your home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Almanac</h2><p>Free. Old Farmer&apos;s Almanac. Best planting dates for your zip code.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">From Seed</h2><p>Plan a vegetable garden. Spacing, sun, harvest time auto-calculated.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA Zone</h2><p>Type your zip into planthardiness.ars.usda.gov. Tells you what grows.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take a photo of every plant when you buy it. Apps remember care for you.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
