import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

const APPS = [
  { name: 'Allrecipes', cost: 'Free', best: 'Biggest free recipe library. Real reviews from millions of home cooks.', good: 'Best for "what can I make with ground beef and rice?".' },
  { name: 'Yummly', cost: 'Free; $5/mo Pro', best: 'Personalized — tell it what you don\'t eat (gluten, nuts) and it filters out everything you can\'t have.', good: 'Free version is solid.' },
  { name: 'Paprika 3', cost: '$5 once per device', best: 'Save recipes from any website. Plan meals. Generates grocery lists.', good: 'Best one-time purchase. Pays for itself in convenience.' },
  { name: 'Mealime', cost: 'Free; $6/mo Pro', best: 'Pick recipes for the week, app generates one combined grocery list. Saves shopping trips.', good: 'Free version covers most uses.' },
  { name: 'New York Times Cooking', cost: '$5/month', best: 'Beautiful recipes from the Times. Paywall but big library and reliable instructions.', good: 'Worth it if you cook regularly.' },
  { name: 'BigOven', cost: 'Free; $30/yr Pro', best: 'Strong "leftover" search — type what you have, get recipes that use it.', good: 'Great for waste reduction.' },
];

export default function RecipeMealApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recipe & Meal Planning Apps — Allrecipes, Paprika, Mealime | TekSure" description="Plan meals, save family recipes, generate grocery lists. The best recipe apps for home cooks — free and paid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe & Meal Apps</h1>
          <p className="text-lg text-muted-foreground">Cook better, plan smarter, waste less.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save your family\'s old recipes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Take a photo of the handwritten recipe card.</li>
              <li>In Apple Notes (or Google Keep) — tap and hold the photo → "Look Up" or use Live Text — many handwriting becomes selectable text you can copy.</li>
              <li>Paste it into Paprika, Apple Notes, or a shared Google Doc with family.</li>
              <li>Add the photo of the original card to keep that personal touch.</li>
            </ol>
            <p className="text-sm mt-2">An afternoon with grandma\'s recipe box, scanned into Paprika, is one of the best gifts a family can give itself.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Just ask AI for help</h2>
            <p className="text-sm">"I have chicken thighs, broccoli, and rice. What\'s a 30-minute dinner?" — open ChatGPT, Claude, or Google Gemini. They\'re great at recipe ideas based on what\'s in your fridge.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — print a few favorites</h3>
            <p className="text-sm text-muted-foreground">For recipes you make 50 times a year, print the page and put it in a plastic sheet protector in a binder. Recipe apps come and go, but a printed binder lasts decades and survives spaghetti splatters.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
