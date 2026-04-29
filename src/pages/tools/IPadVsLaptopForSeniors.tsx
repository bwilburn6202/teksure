import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TabletSmartphone } from 'lucide-react';

export default function IPadVsLaptopForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad vs Laptop for Seniors | TekSure" description="Pick the right device. Plain-English comparison for senior tech buyers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TabletSmartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad vs Laptop</h1>
          <p className="text-lg text-muted-foreground">Right device for what you do.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick iPad if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Browse web + watch videos primarily.</li>
              <li>Email + messaging.</li>
              <li>Photos + video calls.</li>
              <li>Read ebooks + magazines.</li>
              <li>Light document creation.</li>
              <li>Travel — lightweight + portable.</li>
              <li>Touchscreen feels more intuitive.</li>
              <li>Cost: $349-1,200.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick laptop if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heavy typing (memoirs, letters, emails).</li>
              <li>Large spreadsheets.</li>
              <li>Photo / video editing.</li>
              <li>Multiple windows side-by-side.</li>
              <li>Niche software (TurboTax, Quicken desktop).</li>
              <li>Programming hobby.</li>
              <li>Want full keyboard always.</li>
              <li>Cost: $250-1,500.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best of both</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPad + Magic Keyboard</strong> — $349 + $300. Tablet OR laptop.</li>
              <li><strong>Surface Pro</strong> — Microsoft tablet/laptop hybrid.</li>
              <li><strong>Lenovo IdeaPad Duet Chromebook</strong> — $300 hybrid.</li>
              <li>Hybrids satisfy both modes.</li>
              <li>iPad with Magic Keyboard = senior favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Side-by-side</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Weight</strong> — iPad 1 lb / laptop 2-4 lbs.</li>
              <li><strong>Battery</strong> — iPad 10 hrs / laptop 8-12.</li>
              <li><strong>Touchscreen</strong> — iPad yes / most laptops no.</li>
              <li><strong>Apps</strong> — iPad 1M+ / laptop unlimited.</li>
              <li><strong>Repair</strong> — iPad limited / laptop more.</li>
              <li><strong>Price</strong> — similar.</li>
              <li><strong>Lifespan</strong> — both 5-7 yrs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If buying first device — iPad easier learning curve.</li>
              <li>If switching from PC — laptop similar feel.</li>
              <li>Test both at Apple Store / Best Buy.</li>
              <li>30-min hands-on usually decides.</li>
              <li>Family member&apos;s device = try theirs first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">My device picks 2026</h3>
            <p className="text-sm text-muted-foreground">For most seniors first device: <strong>iPad 10th gen ($349) + bluetooth keyboard ($30)</strong>. Better than Chromebook for senior intuitive use, better than laptop for portability. For heavy work: <strong>MacBook Air M3 13&quot; ($1,000)</strong> or <strong>Dell Inspiron 16 ($700)</strong>. Test before buying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
