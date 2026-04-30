import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function ActiveAdultCommunity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="55+ Active Adult Community Guide | TekSure" description="Pick the right active senior community. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">55+ Active Communities</h1>
          <p className="text-lg text-muted-foreground">Built-in friends. Activities. No kids.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top US communities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The Villages, FL</strong> — 150K residents. Largest.</li>
              <li><strong>Sun City, AZ</strong> — original active adult.</li>
              <li><strong>Del Webb communities</strong> — nationwide.</li>
              <li><strong>Robson Communities</strong> — premium.</li>
              <li><strong>Trilogy</strong> — Shea Homes brand.</li>
              <li>Your state has many — search 55+ communities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they offer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pools, golf, tennis.</li>
              <li>Clubhouses + fitness centers.</li>
              <li>Hundreds of clubs (from quilting to dancing).</li>
              <li>Shuttle services.</li>
              <li>Maintenance-free living.</li>
              <li>Built-in social network.</li>
              <li>Restaurants on-site.</li>
              <li>Health services nearby.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home prices: $200K-1M+.</li>
              <li>HOA fees: $200-1,000/month.</li>
              <li>Includes amenities + maintenance.</li>
              <li>Property taxes still owed.</li>
              <li>Resale tied to community popularity.</li>
              <li>Some have entrance fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pros + cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>+</strong> Friends made easily.</li>
              <li><strong>+</strong> Active lifestyle.</li>
              <li><strong>+</strong> Maintenance-free.</li>
              <li><strong>+</strong> Same age peers.</li>
              <li><strong>-</strong> No kids/grandkids around.</li>
              <li><strong>-</strong> HOA rules can be restrictive.</li>
              <li><strong>-</strong> Diversity often limited.</li>
              <li><strong>-</strong> Forever decision.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Visit before buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stay 1-3 nights minimum.</li>
              <li>Many offer trial stays.</li>
              <li>Visit different times of day.</li>
              <li>Ask about HOA rules.</li>
              <li>Check resale values.</li>
              <li>Talk to current residents.</li>
              <li>Visit several communities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior moving</h3>
            <p className="text-sm text-muted-foreground">Average move 70+ — 1 in 4 regret. Don&apos;t move impulsively after spouse death. Visit + try before commit. Some find paradise. Others miss old home + family. Decision must be RIGHT for you. See /tools/senior-relocation-services.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
