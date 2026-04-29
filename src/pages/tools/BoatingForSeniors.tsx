import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sailboat } from 'lucide-react';

export default function BoatingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Boating for Seniors | TekSure" description="Pontoons, fishing boats, sailing. Plain-English senior boating guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sailboat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Boating for Seniors</h1>
          <p className="text-lg text-muted-foreground">Different boats for different joys.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly boats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pontoon</strong> — easiest. Stable. Roomy.</li>
              <li><strong>Bowrider</strong> — versatile family boat.</li>
              <li><strong>Fishing boat</strong> — quiet + simple.</li>
              <li><strong>Trawler</strong> — slow + comfortable.</li>
              <li><strong>Sailboat</strong> — peaceful (more skill).</li>
              <li>Avoid: speed boats, ski boats.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Renting vs buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rent first — try before commit.</li>
              <li>Most lakes/marinas rent.</li>
              <li>Owning = $$$$ (slip + maintenance + insurance).</li>
              <li>Boat clubs — share access without ownership.</li>
              <li>Freedom Boat Club, Carefree Boat Club.</li>
              <li>$200-500/mo for unlimited.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take Coast Guard boating safety class (free).</li>
              <li>Required in most states for license.</li>
              <li>Life jackets EVERYONE always.</li>
              <li>Sober boating — alcohol = drowning.</li>
              <li>Watch weather.</li>
              <li>VHF radio + EPIRB for big water.</li>
              <li>Tell someone float plan.</li>
              <li>Don&apos;t boat alone first time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sun protection (UPF clothing, hat).</li>
              <li>Sunglasses polarized.</li>
              <li>Non-slip deck shoes.</li>
              <li>Boat ladder with handrails.</li>
              <li>Comfortable seating with backs.</li>
              <li>Bimini for shade.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cruising senior life</h3>
            <p className="text-sm text-muted-foreground">Some seniors live on trawlers full-time. Loop America (East coast + Mississippi + Great Lakes). Caribbean cruising. Slower pace = senior dream. Boat clubs reduce ownership headaches. Many enjoy boating into 80s.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
