import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function HydroponicForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hydroponic Gardens for Seniors | TekSure" description="AeroGarden + indoor hydroponic for senior fresh food." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Indoor Hydroponic</h1>
          <p className="text-lg text-muted-foreground">Year-round senior fresh.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AeroGarden</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$400.</li><li>Indoor herbs + greens.</li><li>Auto-watering + light.</li><li>Senior counter top.</li><li>Year-round fresh.</li><li>Plug + plant.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Click + Grow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$300.</li><li>Smaller footprint.</li><li>Pre-seeded pods.</li><li>Senior simple.</li><li>Beautiful design.</li><li>$8/pod refills.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Year-round fresh herbs.</li><li>Lettuce always.</li><li>No bending.</li><li>Senior arthritis-friendly.</li><li>Educational.</li><li>Save grocery $.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pod cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5-$8/pod.</li><li>3-month harvest.</li><li>Senior calculate vs grocery.</li><li>Often break even.</li><li>Joy of growing factor.</li><li>Tasty fresh.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Refill alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Generic pods cheaper.</li><li>Or DIY grow seedlings.</li><li>Senior frugal.</li><li>Watch YouTube.</li><li>Save 75%.</li><li>Worth learning.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start with herbs.</li><li>Basil, parsley, thyme.</li><li>Senior cooking flavors.</li><li>Most expensive at store.</li><li>Constant fresh supply.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 AeroGarden = senior fresh herbs year-round</h3><p className="text-sm text-muted-foreground">$100 small AeroGarden = senior fresh herbs year-round. Basil, parsley, thyme cooking ready. No bending, auto-watering. DIY refill pods saves 75% over time. Senior arthritis-friendly fresh food. Worth investment for daily cooks.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
