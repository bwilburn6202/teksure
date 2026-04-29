import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function CookbookPicksForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cookbook Picks for Seniors | TekSure" description="Best cookbooks for senior home cooks. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cookbook Picks</h1>
          <p className="text-lg text-muted-foreground">Senior-favorite cookbooks. Library has all.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Foundational</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Joy of Cooking</strong> — classic, encyclopedic.</li>
              <li><strong>How to Cook Everything</strong> — Mark Bittman.</li>
              <li><strong>The America&apos;s Test Kitchen Cookbook</strong>.</li>
              <li><strong>The Silver Spoon</strong> — Italian.</li>
              <li><strong>Mastering the Art of French Cooking</strong> — Julia Child.</li>
              <li>Build cooking foundation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health-focused</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The Mediterranean Diet Cookbook</strong>.</li>
              <li><strong>The Complete DASH Diet Solution</strong>.</li>
              <li><strong>Forks Over Knives Family</strong>.</li>
              <li><strong>The Blue Zones Kitchen</strong> — Dan Buettner.</li>
              <li>Senior-aligned eating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior + special diet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Diabetic Cooking</strong> series.</li>
              <li><strong>Heart Healthy Cookbook</strong>.</li>
              <li><strong>Cooking for One</strong> books.</li>
              <li><strong>Slow Cooker Revolution</strong>.</li>
              <li><strong>Air Fryer cookbooks</strong>.</li>
              <li>Match to dietary needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beautiful + fun</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smitten Kitchen Every Day</strong>.</li>
              <li><strong>Salt, Fat, Acid, Heat</strong> — Samin Nosrat.</li>
              <li><strong>The Pioneer Woman</strong> — Ree Drummond.</li>
              <li><strong>Magnolia Table</strong> — Joanna Gaines.</li>
              <li><strong>Half Baked Harvest</strong>.</li>
              <li>Inspiring + useful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cook&apos;s Illustrated</strong> magazine.</li>
              <li><strong>Bon Appétit</strong> magazine.</li>
              <li><strong>Senior cooking blogs</strong> — Skinnytaste.</li>
              <li><strong>Local community cookbooks</strong> — church / school.</li>
              <li>Library has shelves of cookbooks.</li>
              <li>Free + endless.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family recipes</h3>
            <p className="text-sm text-muted-foreground">Most precious cookbook = grandma&apos;s. Type up / scan handwritten recipes before lost. Make family cookbook for grandkids — Shutterfly photo book. Capture heritage. Tradition continues.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
