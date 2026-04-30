import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Folder } from 'lucide-react';

const APPS = [
  { name: 'Paprika 3', cost: '$5 one-time', best: 'Save from any website. Meal planner. Grocery list. Senior favorite.', good: 'Best overall.' },
  { name: 'AnyList', cost: 'FREE / $20/yr Premium', best: 'Best grocery list integration. Paired with recipes.', good: 'Best grocery list.' },
  { name: 'Apple Notes', cost: 'FREE', best: 'Already on iPhone/Mac. Make a "Recipes" folder. Search works.', good: 'Best free.' },
  { name: 'Pinterest', cost: 'FREE', best: 'Save recipes from web with one click. Visual.', good: 'Best for browsing.' },
  { name: 'Eat Your Books', cost: '$3/mo', best: 'Index ALL your physical cookbooks. Search across 200,000+ books.', good: 'Best for cookbook collectors.' },
  { name: 'A binder + plastic sheets', cost: '$10', best: 'Old-school. Print recipes, slip into sheets. Spilled batter? Wipe clean.', good: 'Best non-tech.' },
];

export default function RecipeOrganizers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recipe Organizer Apps | TekSure" description="Paprika, AnyList, Pinterest. Plain-English picks for organizing recipes — saving from web, family recipes, and cookbooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Folder className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe Organizers</h1>
          <p className="text-lg text-muted-foreground">Tame the chaos of saved recipes.</p>
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
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Want one-time purchase</strong> → Paprika 3 ($5 once).</li>
              <li><strong>Just want it free</strong> → Apple Notes folder.</li>
              <li><strong>Big cookbook collection</strong> → Eat Your Books.</li>
              <li><strong>Visual person</strong> → Pinterest.</li>
              <li><strong>Mix all approaches</strong> — works fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save grandma&apos;s recipes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Take photos of every handwritten recipe card.</li>
              <li>Type into Paprika OR Apple Notes — preserves searchability.</li>
              <li>Add a "story" note — when she made it, who loved it.</li>
              <li>Share with family — kids, grandkids, cousins.</li>
              <li>Print + bind — physical heirloom.</li>
              <li>Recipes vanish faster than people. Save them now.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">In the kitchen</h3>
            <p className="text-sm text-muted-foreground">Use iPad on stand in kitchen with Paprika. Recipe + grocery list in one. Voice "Hey Siri, set timer 15 min" while hands floury. Kids can &quot;cast&quot; recipes to grandparents&apos; smart TV — read along together over video chat.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
