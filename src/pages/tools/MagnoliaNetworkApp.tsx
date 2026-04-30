import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function MagnoliaNetworkApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magnolia Network for Seniors | TekSure" description="Chip + Joanna Gaines lifestyle content. Magnolia Network on Discovery+ + Max." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magnolia Network</h1>
          <p className="text-lg text-muted-foreground">Chip + Joanna&apos;s lifestyle channel.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Magnolia?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chip + Joanna Gaines&apos; lifestyle network.</li>
              <li>Home design, cooking, gardening shows.</li>
              <li>Calmer, gentler than HGTV.</li>
              <li>Beautiful production.</li>
              <li>Senior-favorite quality programming.</li>
              <li>Wholesome content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to watch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Max ($10/month with ads).</li>
              <li>Discovery+ ($5/month with ads).</li>
              <li>Both stream Magnolia content.</li>
              <li>Some episodes on YouTube free.</li>
              <li>Magnolia Network App (uses Max/Discovery+ account).</li>
              <li>Available on smart TVs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorite shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fixer Upper — original Chip + Joanna show.</li>
              <li>Magnolia Table — cooking with Joanna.</li>
              <li>Restoration Road — saving old buildings.</li>
              <li>Inn the Works — running historic inn.</li>
              <li>Lifestyle Network feel.</li>
              <li>Calm + inspiring.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better choice between</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Max ($10/mo) — more shows + HBO content.</li>
              <li>Discovery+ ($5/mo) — focuses on lifestyle/HGTV.</li>
              <li>If you also want HBO dramas — Max.</li>
              <li>If lifestyle only — Discovery+.</li>
              <li>Both have free trials.</li>
              <li>Cancel and resume anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HGTV alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HGTV channel on cable.</li>
              <li>HGTV streaming on Discovery+.</li>
              <li>Magnolia gentler than HGTV reality drama.</li>
              <li>Both feature home renovation.</li>
              <li>Magnolia more personality-driven.</li>
              <li>Both senior favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Magnolia Journal magazine — print + digital.</li>
              <li>Joanna&apos;s YouTube channel — recipes + DIY.</li>
              <li>Fixer Upper episodes occasionally on YouTube.</li>
              <li>Magnolia.com blog content.</li>
              <li>Free social media inspiration.</li>
              <li>Lots without paying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Discovery+ for HGTV-loving seniors</h3>
            <p className="text-sm text-muted-foreground">If you love HGTV shows, Discovery+ at $5/month is a great deal. All HGTV content + Magnolia Network + Food Network. Cheaper than maintaining cable subscription. Many senior cord-cutters use just Discovery+ + library streaming. Try free trial first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
