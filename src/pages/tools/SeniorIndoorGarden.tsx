import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorIndoorGarden() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Indoor Gardens for Seniors — TekSure" description="AeroGarden, Click and Grow — countertop herb gardens for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Indoor Gardens</h1>
          <p className="text-lg text-muted-foreground">Fresh herbs all winter.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AeroGarden Harvest</h2><p>$80-$150. 6 herbs at once. Built-in light. No sun needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Click and Grow</h2><p>$100-$200. Smaller. Pretty design. Plant pods refills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lettuce Grow Farmstand</h2><p>$400+. Tall vertical garden. 24-36 plants.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Basil</li><li>Cilantro</li><li>Parsley</li><li>Lettuce</li><li>Cherry tomatoes</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No skill needed</h2><p>Auto-waters. Auto-light. Just refill water + nutrients monthly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior benefits</h2><p>Fresh herbs without bending. No outdoor work. Year-round.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Place near kitchen. Use herbs same week as picked.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
