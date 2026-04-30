import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function TirePickGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tire Pick Guide for Seniors | TekSure" description="Pick + buy tires. Plain-English tire guide for senior car owners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tire Pick Guide</h1>
          <p className="text-lg text-muted-foreground">Safety + savings on your tire choice.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to replace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Penny test — Lincoln&apos;s head visible = replace.</li>
              <li>Cracks in sidewall.</li>
              <li>Bulges or bubbles.</li>
              <li>Uneven wear.</li>
              <li>6+ years old (regardless wear).</li>
              <li>50K-70K miles typical lifespan.</li>
              <li>Don&apos;t drive on bald tires — fatal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best places to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco</strong> — best prices for members. Free rotations + flat repair.</li>
              <li><strong>Discount Tire</strong> — best service. Free rotation forever.</li>
              <li><strong>Sam&apos;s Club</strong> — competitive.</li>
              <li><strong>Tire Rack</strong> — online research.</li>
              <li><strong>Walmart</strong> — cheapest, basic service.</li>
              <li>Get 3 quotes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-safe tire features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wet weather rating (UTQG).</li>
              <li>All-season vs snow tires for climate.</li>
              <li>Run-flat option (no flat tire change).</li>
              <li>Quiet ride matters — Michelin good.</li>
              <li>Long warranty.</li>
              <li>Don&apos;t cheapest tires — safety matters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top brands 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Michelin</strong> — premium quality, long-lasting.</li>
              <li><strong>Continental</strong> — quiet, balanced.</li>
              <li><strong>Goodyear</strong> — solid mid-range.</li>
              <li><strong>Bridgestone</strong> — reliable.</li>
              <li><strong>Pirelli</strong> — performance.</li>
              <li>Mid-range often best value for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance saves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rotate every 5,000-7,500 miles.</li>
              <li>Check pressure monthly.</li>
              <li>Inflate to door sticker (NOT max on tire).</li>
              <li>Wheel alignment yearly.</li>
              <li>Balance with rotation.</li>
              <li>Extends life 25%+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t change yourself</h3>
            <p className="text-sm text-muted-foreground">Senior tip: AAA membership ($70/yr) covers free flat tire changes. Worth it. Don&apos;t risk back / fall changing tire on roadside. Other roadside services too — Allstate, insurance often.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
