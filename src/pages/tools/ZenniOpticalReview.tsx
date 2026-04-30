import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function ZenniOpticalReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zenni Optical for Seniors Review | TekSure" description="Cheapest online glasses. Zenni Optical reviewed for seniors — pros, cons, ordering tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zenni Optical</h1>
          <p className="text-lg text-muted-foreground">$9 glasses. Genuinely.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheapest legit online glasses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Frames + prescription lenses from $9.</li>
              <li>Average pair: $30–$50.</li>
              <li>Compare to $300+ traditional optical.</li>
              <li>Sell millions of pairs yearly.</li>
              <li>Ships from China — 7–14 days.</li>
              <li>Quality surprisingly good for the price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can get cheap</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Single-vision distance or reading glasses.</li>
              <li>Bifocals — $20+.</li>
              <li>Progressive lenses — $30+ (vs $200+ elsewhere).</li>
              <li>Sunglasses with prescription.</li>
              <li>Computer glasses (blue light).</li>
              <li>Backup pairs at low cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for ordering</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Need prescription + PD measurement.</li>
              <li>PD = pupillary distance, in millimeters.</li>
              <li>Ask doctor or measure at home.</li>
              <li>Try on virtually with phone camera.</li>
              <li>Read sizing carefully.</li>
              <li>Order one pair first to test quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for senior use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup glasses — keep extra in car or purse.</li>
              <li>Reading-only glasses for nightstand.</li>
              <li>Computer glasses for home office.</li>
              <li>Sunglasses prescription.</li>
              <li>Replace easily if broken or lost.</li>
              <li>$9 backup pair = no stress about breakage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drawbacks to know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustments — your local optician may charge.</li>
              <li>Returns — limited window (30 days).</li>
              <li>Some shipping issues.</li>
              <li>Cheap frames may break sooner.</li>
              <li>Customer service via chat/email mostly.</li>
              <li>Worth $9 to test, not for irreplaceable Rx.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adjustments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most local opticians adjust new glasses.</li>
              <li>Free at place that sold them, $5–$15 elsewhere.</li>
              <li>Costco optical sometimes adjusts free.</li>
              <li>Can adjust at home with hot water + bend.</li>
              <li>YouTube videos show technique.</li>
              <li>Ask before buying if you need professional fit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Order one pair to test</h3>
            <p className="text-sm text-muted-foreground">Spend $20 on one pair from Zenni to test quality before going all-in. Many seniors order their main pair from Warby Parker (better quality, returns) and a backup pair from Zenni (cheap insurance against losing or breaking the good pair). For purely reading glasses or sunglasses, Zenni&apos;s $9–$30 prices are unbeatable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
