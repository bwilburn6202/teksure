import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

const APPS = [
  { name: 'PictureThis', cost: '$30/yr', best: 'Identify any plant from photo. Plus care advice.', good: 'Best paid identifier.' },
  { name: 'iNaturalist + Seek', cost: 'FREE', best: 'Free plant + bug + bird ID. Community-verified.', good: 'Best free.' },
  { name: 'Garden Tags', cost: 'FREE / $30/yr Premium', best: 'Track your garden. Share with community.', good: 'Best community.' },
  { name: 'Almanac.com app', cost: 'FREE', best: 'Planting dates by zip. Companion planting. Free.', good: 'Best for planting calendar.' },
  { name: 'Burpee Garden Time', cost: 'FREE', best: 'From Burpee Seeds. Free + practical.', good: 'Best for newer gardeners.' },
];

export default function GardeningHelpApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gardening Help Apps for Seniors | TekSure" description="PictureThis, iNaturalist, Almanac. Plain-English picks for senior gardeners — identification + planting + raised-bed gardening." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gardening Help Apps</h1>
          <p className="text-lg text-muted-foreground">Tech for green thumbs.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly gardening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Raised beds (24-36" tall)</strong> — no kneeling. $200-500 for kit.</li>
              <li><strong>Container gardening</strong> — patio, deck, balcony.</li>
              <li><strong>Drip irrigation kit</strong> ($30-100) — auto-water plants.</li>
              <li><strong>Smart sprinkler controller</strong> ($150) — skips when rain forecast.</li>
              <li><strong>Long-handled tools</strong> — reduce back strain.</li>
              <li><strong>Garden seat / kneeler</strong> ($30) — flips both ways.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free expert advice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Master Gardeners</strong> — free hotline by state Cooperative Extension.</li>
              <li><strong>Local nursery</strong> — staff often answer questions.</li>
              <li><strong>USDA Plant Hardiness Zone Map</strong> — find your zone.</li>
              <li><strong>YouTube — Epic Gardening, Self Sufficient Me</strong>.</li>
              <li><strong>r/gardening on Reddit</strong> — friendly community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior community gardening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many cities have community gardens.</li>
              <li>Senior centers often have garden plots.</li>
              <li>Health benefits: 30 min gardening = strength + cardio + sun + community.</li>
              <li>Mental health: lowers depression + cortisol.</li>
              <li>Better than gym for many seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cycle 120 milestone</h3>
            <p className="text-sm text-muted-foreground">600+ tools shipped. From smart speakers to smart gardens. Tech for every stage of senior life — that&apos;s TekSure&apos;s mission.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
