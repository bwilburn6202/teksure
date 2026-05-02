import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function SeniorChickenKeeping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backyard Chickens for Seniors — TekSure" description="Senior-friendly backyard chicken tech — auto-doors, smart coops." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backyard Chickens for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier than you think.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto coop door</h2><p>Run-Chicken or Omlet. $150-$300. Opens at dawn, closes at dusk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto feeder</h2><p>Treadle feeder $50. Only chickens activate it. No raccoons or rats.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heated waterer</h2><p>$50. Stays liquid even in winter freeze.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Fresh eggs daily</li><li>Garden composting</li><li>Pest control</li><li>Calming pets</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Check local laws</h2><p>Most cities allow 4-6 hens. No roosters. Quiet, no neighbor complaints.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Coop options</h2><p>Cheap kit $300. Pre-built nice $1,500. Custom $3,000+.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 4 hens give 1 egg/day each. Plenty for senior couple.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
