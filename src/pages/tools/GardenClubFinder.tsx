import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function GardenClubFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find a Garden Club Near You | TekSure" description="National Garden Clubs has 5,000 local chapters. Plain-English guide to finding senior-friendly garden clubs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garden Club Finder</h1>
          <p className="text-lg text-muted-foreground">Plant lovers gather here.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">National Garden Clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>165,000 members across 50 states.</li>
              <li>5,000+ local chapters.</li>
              <li>Find at <strong>gardenclub.org</strong> — search by state.</li>
              <li>Most meet monthly. $30-100/yr dues.</li>
              <li>Programs: garden tours, lectures, plant sales, civic projects.</li>
              <li>Many seniors active here.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialty groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>American Rose Society</strong> — local rose societies.</li>
              <li><strong>American Iris Society</strong> — local iris groups.</li>
              <li><strong>African Violet Society</strong>.</li>
              <li><strong>Native Plant Society</strong> — by state.</li>
              <li><strong>Daffodil Society</strong>, hosta, daylily — most plants have societies.</li>
              <li><strong>Local arboretum / botanical garden</strong> — volunteer + classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Master Gardener (advanced)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USDA-certified Cooperative Extension program.</li>
              <li>40-50 hr training + 40-50 volunteer hours.</li>
              <li>$100-200 cost. Training value $2-3K.</li>
              <li>Built-in senior community.</li>
              <li>See /tools/master-gardener-signup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Community garden plots</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most cities have community gardens.</li>
              <li>$25-100/year for 4×8 plot.</li>
              <li>Built-in community.</li>
              <li>Search "[your city] community garden".</li>
              <li>Senior centers often have garden programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Online garden community</h3>
            <p className="text-sm text-muted-foreground"><strong>r/gardening</strong> (Reddit) — friendly community. <strong>Garden Tags app</strong> — share photos. <strong>iNaturalist</strong> — identify + log plants. Free + active 24/7. Best for those without local club.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
