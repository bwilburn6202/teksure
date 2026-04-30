import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

export default function MirrorFitnessForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mirror + Tonal for Senior Fitness | TekSure" description="Smart fitness mirrors for senior home gyms." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Fitness Mirrors</h1>
          <p className="text-lg text-muted-foreground">Home gym mirrors.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mirror by Lululemon</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$995 + $40/mo.</li><li>Wall-mounted mirror.</li><li>Live + on-demand.</li><li>Senior + couples.</li><li>Many class types.</li><li>Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tonal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$3,000 + $50/mo.</li><li>Built-in resistance.</li><li>Strength focus.</li><li>Senior premium.</li><li>Smaller footprint.</li><li>Higher cost.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad + free YouTube.</li><li>Apple Fitness+ $10/mo.</li><li>Senior frugal.</li><li>$70 ring light.</li><li>Same effect.</li><li>Save thousands.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior assess</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Will use weekly?</li><li>Space available?</li><li>Budget?</li><li>Senior YouTube tries first.</li><li>Then maybe upgrade.</li><li>Don&apos;t over-buy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior content</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SilverSneakers free with insurance.</li><li>Eldergym YouTube.</li><li>Yoga With Adriene.</li><li>Senior content abundant.</li><li>Free.</li><li>Try before paying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Returns</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>30-day free trial.</li><li>Try at home.</li><li>Return if not used.</li><li>Senior risk-free.</li><li>Don&apos;t feel obligated.</li><li>Worth testing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10 Apple Fitness+ before $1000 mirror</h3><p className="text-sm text-muted-foreground">Try $10/mo Apple Fitness+ on iPad before $1,000 Mirror. Or free SilverSneakers/YouTube. Many seniors find $10 sufficient. Use mirror in bathroom for form check. Save $$$. Don&apos;t over-buy fitness equipment that gathers dust.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
