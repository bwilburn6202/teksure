import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function SeniorRecipesApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recipe Apps for Seniors — Senior Guide" description="Find easy recipes on free apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe Apps</h1>
          <p className="text-lg text-muted-foreground">Recipes for any cook level.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Allrecipes</h2><p>Free. Read recipes from real cooks. Filter by under 30 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Yummly</h2><p>Free. Tells you what to cook based on what's in your fridge.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. NYT Cooking</h2><p>$5/month. Best curated recipes. Step-by-step instructions and videos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. AllRecipes Dinner Spinner</h2><p>Shake phone for random dinner idea. Fun for indecisive nights.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pinterest</h2><p>Save recipes from across the web. Make boards by category.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Senior-friendly tip</h2><p>Look for one-pan, slow cooker, or sheet pan recipes. Less cleanup.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Reading glasses on. Most recipe apps let you bump up text size in settings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
