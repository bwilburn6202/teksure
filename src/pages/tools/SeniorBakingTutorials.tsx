import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cake } from 'lucide-react';

export default function SeniorBakingTutorials() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Baking Apps + Tutorials for Seniors | TekSure" description="Best baking apps and YouTube channels for senior bakers. Bread, pies, cookies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Baking Tutorials</h1>
          <p className="text-lg text-muted-foreground">Bread, pies, cookies + cakes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Joshua Weissman — bread mastery.</li>
              <li>Preppy Kitchen — gorgeous baking.</li>
              <li>Sally&apos;s Baking Recipes — beginner-friendly.</li>
              <li>King Arthur Baking School — bread school.</li>
              <li>Anna Olson — Canadian baking.</li>
              <li>Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">King Arthur app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free recipes from King Arthur Baking.</li>
              <li>Step-by-step instructions.</li>
              <li>Beginner to advanced.</li>
              <li>Bread, pastry, cakes.</li>
              <li>Excellent reputation.</li>
              <li>Senior bakers trusted resource.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly bakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No-knead bread — minimal effort.</li>
              <li>Cookies — easy + crowd-pleasing.</li>
              <li>Bundt cakes — one pan.</li>
              <li>Pie — apple, pumpkin, custard.</li>
              <li>Banana bread — uses old bananas.</li>
              <li>Quick breads — simple recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools that help seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stand mixer (KitchenAid) — saves wrists.</li>
              <li>Silicone baking mats — non-stick.</li>
              <li>Cookie scoop — even portions.</li>
              <li>Digital scale — accuracy.</li>
              <li>Magnetic measuring spoons — large.</li>
              <li>Worth investing as senior baker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Great British Bake Off</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beloved show — wholesome competition.</li>
              <li>Streaming on Netflix.</li>
              <li>Free + paid versions.</li>
              <li>Inspires senior bakers worldwide.</li>
              <li>Watch with grandkids.</li>
              <li>Calm + entertaining.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sourdough revival</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many seniors discovered baking in 2020.</li>
              <li>Bread-making rewarding hobby.</li>
              <li>Breadtopia — sourdough specifics.</li>
              <li>Foodgeek YouTube — sourdough deep dives.</li>
              <li>Patience + tradition combine.</li>
              <li>Share fresh bread with neighbors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with no-knead bread</h3>
            <p className="text-sm text-muted-foreground">Search YouTube for &quot;no-knead bread Jim Lahey.&quot; Watch the simple 4-ingredient recipe. Mix in evening, bake next afternoon. Perfect bread, no effort. Many seniors discover bread-making this way and never go back to store-bought. Pair with King Arthur free recipes for endless variety. Beautiful retirement hobby.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
