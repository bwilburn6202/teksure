import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Box } from 'lucide-react';

export default function PrintableHobby3D() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="3D Printing for Senior Hobbyists | TekSure" description="3D printing as retirement hobby. Plain-English starter guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Box className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">3D Printing Hobby</h1>
          <p className="text-lg text-muted-foreground">Make replacement parts + gifts + art.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best beginner printers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bambu Lab A1</strong> — $400. Easiest. Plug in + print.</li>
              <li><strong>Bambu Lab P1S</strong> — $700. Better quality.</li>
              <li><strong>Prusa Mini+</strong> — $440. Reliable, smaller.</li>
              <li><strong>Creality Ender 3 V3</strong> — $250. Cheap, fiddly.</li>
              <li>Bambu Lab = senior-friendliest by far.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What seniors print</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adaptive grip aids (jar openers, etc.).</li>
              <li>Replacement parts for old appliances.</li>
              <li>Christmas ornaments (custom for grandkids).</li>
              <li>Garden tools / planters.</li>
              <li>Storage / organization solutions.</li>
              <li>Memorial items (urns, plaques).</li>
              <li>Custom gifts.</li>
              <li>Tools you can&apos;t buy in stores.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No design skills needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Thingiverse</strong> — millions of FREE 3D files.</li>
              <li><strong>Printables.com</strong> — Prusa community files.</li>
              <li><strong>MakerWorld</strong> — Bambu community.</li>
              <li>Search → download → print. No design.</li>
              <li>Tinkercad if want to design (free, beginner-friendly).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Printer $250-700.</li>
              <li>Filament: $20-30 per kg (most prints under $1 in material).</li>
              <li>Electricity: pennies per print.</li>
              <li>Replacement nozzles, parts $20-50 yearly.</li>
              <li>Hobby costs less than golf.</li>
              <li>Sell prints on Etsy = earn back.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Try before buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Library 3D printers (many libraries have).</li>
              <li>Maker spaces.</li>
              <li>Community college classes.</li>
              <li>Local senior centers — some have.</li>
              <li>Try free for 1-2 prints first.</li>
              <li>See if you enjoy before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free + paid resources</h3>
            <p className="text-sm text-muted-foreground"><strong>3D Print General</strong> YouTube — best beginner channel. <strong>CHEP</strong> YouTube — calibration help. <strong>Reddit r/3Dprinting</strong> — friendly community. <strong>Bambu Lab forums</strong>. Endless free learning. Hobby that engages mind + creativity. Many retirees love it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
