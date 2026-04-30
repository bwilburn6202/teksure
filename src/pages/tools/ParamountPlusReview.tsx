import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function ParamountPlusReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paramount+ Review for Seniors | TekSure" description="CBS shows + classic movies. Plain-English Paramount+ guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paramount+ for Seniors</h1>
          <p className="text-lg text-muted-foreground">CBS lineage + Star Trek + classic Westerns.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tier picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Essential w/ Ads</strong> — $8/mo. CBS + originals.</li>
              <li><strong>Premium</strong> — $13/mo. No ads + local CBS live.</li>
              <li>FREE 7-day trial.</li>
              <li>FREE with Walmart+ ($98/yr).</li>
              <li>$48/yr Annual Essential — discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NCIS franchise</strong> — full library.</li>
              <li><strong>Yellowstone</strong> — cowboys, Kevin Costner.</li>
              <li><strong>1883, 1923</strong> — Yellowstone prequels.</li>
              <li><strong>CBS classics</strong> — Frasier, Cheers, MASH.</li>
              <li><strong>Star Trek (every show)</strong>.</li>
              <li><strong>Smithsonian Channel</strong> — history docs.</li>
              <li><strong>CBS Sunday Morning</strong> — beloved.</li>
              <li><strong>Local CBS stations live</strong> — premium tier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Movies + classics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Paramount Pictures library.</li>
              <li><strong>Top Gun</strong>, <strong>Indiana Jones</strong>, <strong>Forrest Gump</strong>.</li>
              <li><strong>Mission: Impossible</strong> series.</li>
              <li><strong>Classic Westerns</strong>.</li>
              <li><strong>Sherlock Holmes</strong> films.</li>
              <li>Older selection larger than Apple TV+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walmart+ free perk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walmart+ ($98/yr) includes Paramount+ Essential FREE.</li>
              <li>Saves $96/yr.</li>
              <li>Plus grocery delivery, gas discount.</li>
              <li>Compare to Amazon Prime ($139/yr).</li>
              <li>Walmart+ better value for many seniors.</li>
              <li>See /tools/walmart-plus-review.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior CBS faves</h3>
            <p className="text-sm text-muted-foreground">Many seniors keep Paramount+ for CBS shows: <strong>NCIS</strong> (still going), <strong>Blue Bloods</strong>, <strong>Young Sheldon</strong>, <strong>Sunday Morning</strong>, <strong>60 Minutes</strong>. If CBS is your favorite network, Paramount+ essential. If never watched CBS = skip.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
