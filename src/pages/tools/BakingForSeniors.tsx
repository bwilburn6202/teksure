import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cake } from 'lucide-react';

export default function BakingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Baking for Seniors | TekSure" description="Bake at any age. Plain-English baking guide for seniors with arthritis." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Baking for Seniors</h1>
          <p className="text-lg text-muted-foreground">Therapy. Joy. Family love.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy senior bakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Box mixes</strong> — perfectly fine. Add own touches.</li>
              <li><strong>Banana bread</strong> — forgiving recipe.</li>
              <li><strong>Cookies</strong> — drop cookies easiest.</li>
              <li><strong>Brownies</strong> — fudgy + simple.</li>
              <li><strong>Muffins</strong> — quick + freezer-friendly.</li>
              <li><strong>Pound cake</strong> — single bowl.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Stand mixer</strong> — KitchenAid forever, or hand mixer.</li>
              <li><strong>Silicone baking mats</strong> — no greasing.</li>
              <li><strong>Pre-cut parchment</strong> — easy lift out.</li>
              <li><strong>Talking timer</strong> — for low vision.</li>
              <li><strong>Light pans</strong> — no heavy cast iron.</li>
              <li><strong>Easy-grip utensils</strong> — OXO Good Grips.</li>
              <li>Stand-up to oven door — no bending.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Modify recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI helps adapt — see /tools/ai-translate-recipe.</li>
              <li>Reduce sugar 25-30% (still works).</li>
              <li>Half recipe for less waste.</li>
              <li>Substitute applesauce for some butter.</li>
              <li>Whole wheat flour for fiber.</li>
              <li>No-knead bread methods.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Joy of baking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Therapy + creative.</li>
              <li>Share with neighbors.</li>
              <li>Family heritage recipes.</li>
              <li>Holiday traditions.</li>
              <li>Therapeutic for grief.</li>
              <li>Many seniors&apos; favorite hobby.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best beginner cookbooks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>How to Bake Everything</strong> — Mark Bittman.</li>
              <li><strong>The Joy of Cooking</strong> — classic.</li>
              <li><strong>Sally&apos;s Baking Addiction</strong> — blog + cookbooks.</li>
              <li><strong>Smitten Kitchen</strong> — Deb Perelman.</li>
              <li><strong>King Arthur Flour</strong> — recipes free + great.</li>
              <li>Library has all free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Joy not perfection</h3>
            <p className="text-sm text-muted-foreground">Imperfect cookies = still delicious. Don&apos;t aim for Pinterest-perfect. Family loves grandma&apos;s slightly burnt cookies. Process matters more than result. Bake for love.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
