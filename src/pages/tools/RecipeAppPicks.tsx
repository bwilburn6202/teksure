import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

const APPS = [
  { name: 'Paprika 3 Recipe Manager', cost: '$5 one-time', best: 'Save recipes from ANY website. Meal planner. Grocery list. No subscription.', good: 'Best overall.' },
  { name: 'NYT Cooking', cost: '$5/mo (or free with subscription)', best: 'Highest-quality tested recipes. Recipe boxes, notes from other cooks.', good: 'Best premium.' },
  { name: 'Allrecipes', cost: 'FREE', best: 'Crowdsourced. Real cooks rate recipes. Best for "what to cook with [ingredient]".', good: 'Best free.' },
  { name: 'Yummly', cost: 'FREE / $5/mo Premium', best: 'Filter by diet — diabetic, low sodium, gluten-free, low-cholesterol.', good: 'Best for dietary restrictions.' },
  { name: 'BigOven', cost: 'FREE / $30/year Pro', best: 'Use up leftovers — type 3 ingredients you have, get recipe.', good: 'Best for leftovers.' },
  { name: 'America&apos;s Test Kitchen', cost: '$50/year', best: 'Most carefully tested. Best for "I want this to turn out right".', good: 'Best for serious cooks.' },
];

export default function RecipeAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recipe App Picks — NYT Cooking, Paprika, Yummly | TekSure" description="Save your favorite recipes, plan meals, build grocery lists. Plain-English picks for the best recipe apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe App Picks</h1>
          <p className="text-lg text-muted-foreground">No more printing recipes onto sticky paper.</p>
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
              <li><strong>Want to save recipes from any website</strong> → Paprika ($5 once).</li>
              <li><strong>Best free option</strong> → Allrecipes.</li>
              <li><strong>Health-conscious cooking</strong> → Yummly.</li>
              <li><strong>Highest quality recipes</strong> → NYT Cooking or America&apos;s Test Kitchen.</li>
              <li><strong>Already have iPhone</strong> → Apple Notes works fine for storing recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPad in kitchen on stand — bigger text, splatter-proof case.</li>
              <li>Voice "Hey Siri, set timer for 15 min" while hands are floury.</li>
              <li>Print recipes you make weekly — laminate them for a permanent kitchen binder.</li>
              <li>Settings → Display → bump text size to "Large" or larger.</li>
              <li>Read recipe ALL the way through before starting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save grandma&apos;s recipes</h2>
            <p className="text-sm">Family recipes on index cards? Take photos. Type into Paprika or Notes. Add stories. Share with grandkids. Recipes vanish faster than people. Save them while you&apos;re here to explain "a pinch of salt".</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly recipe sources</h3>
            <p className="text-sm text-muted-foreground">National Council on Aging, AARP, NIH all publish free senior recipe collections — heart-healthy, low-sodium, diabetic-friendly. Search "senior recipe" + condition. Beats sketchy weight-loss sites.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
