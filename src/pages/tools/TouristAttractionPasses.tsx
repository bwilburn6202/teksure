import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ticket } from 'lucide-react';

export default function TouristAttractionPasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tourist Attraction Passes for Seniors | TekSure" description="CityPass, GoCity, etc. Plain-English attraction pass guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ticket className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tourist Attraction Passes</h1>
          <p className="text-lg text-muted-foreground">Save 30-50% at major attractions.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CityPass cities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NYC</strong>, <strong>Chicago</strong>, <strong>Boston</strong>, <strong>Philadelphia</strong>.</li>
              <li><strong>Dallas</strong>, <strong>Houston</strong>, <strong>San Antonio</strong>.</li>
              <li><strong>San Francisco</strong>, <strong>Atlanta</strong>, <strong>Seattle</strong>.</li>
              <li>$80-150 per person.</li>
              <li>Saves 40-50% on bundle of 5-6 attractions.</li>
              <li>Skip-line included some attractions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GoCity passes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50+ cities worldwide.</li>
              <li>All-inclusive (unlimited attractions in days).</li>
              <li>Or Explorer pass (pick X attractions).</li>
              <li>$50-200/day.</li>
              <li>Senior discount sometimes.</li>
              <li>Great for European cities — Paris, Rome, London.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major museums offer 50%+ senior discount.</li>
              <li>Some FREE for 65+ (NYC museums on certain days).</li>
              <li>National Park senior pass ($80 lifetime — see /tools/national-parks-trip).</li>
              <li>Smithsonian — always free.</li>
              <li>Library museum passes — many libraries lend free.</li>
              <li>State museums free or discounted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Should you buy pass?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan to do 4+ included attractions = yes.</li>
              <li>Casual visiting 1-2 spots = no, skip.</li>
              <li>Calculate before buying.</li>
              <li>Senior pace — maybe stretch over 2 trips.</li>
              <li>Avoid pressure to over-do attractions in 1 day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free city sights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most cities have free walking tours (tip-based).</li>
              <li>Public parks always free.</li>
              <li>Federal museums often free.</li>
              <li>Some museums free certain days/hours.</li>
              <li>Hop-on-off tour buses — sometimes worth.</li>
              <li>Self-guided audio tours via apps free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior travel hack</h3>
            <p className="text-sm text-muted-foreground">Skip pre-buying passes. Walk into attractions, ask &quot;senior discount?&quot; Often 25-50% off vs paid pass advance. Combine with library passes (free). Smithsonian free. Many cities have free museum days. Save $$.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
