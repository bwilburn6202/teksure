import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function PaprikaRecipeManager() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paprika Recipe Manager for Seniors | TekSure" description="Save recipes from any website. Paprika app explained for senior cooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paprika</h1>
          <p className="text-lg text-muted-foreground">All your recipes in one place.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Paprika?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recipe organizer app for phone, tablet, computer.</li>
              <li>Save recipes from any website automatically.</li>
              <li>Build grocery lists from recipes.</li>
              <li>Plan meals for the week.</li>
              <li>Works offline once downloaded.</li>
              <li>One-time purchase — no subscription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$4.99 per device, one-time.</li>
              <li>iPhone, iPad, Mac, Windows, Android — separate.</li>
              <li>No subscription — pay once, own forever.</li>
              <li>Worth it for serious recipe collectors.</li>
              <li>Free trial available.</li>
              <li>Free competitor: AnyList for similar features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Saving recipes online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Browse recipes on any website.</li>
              <li>Tap &quot;Share&quot; — pick &quot;Paprika.&quot;</li>
              <li>App auto-extracts ingredients + instructions.</li>
              <li>No more lost bookmarks.</li>
              <li>Original photo and link saved.</li>
              <li>Categorize by cuisine, course, occasion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grocery list magic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick recipes for the week.</li>
              <li>Add ingredients — auto-combines duplicates.</li>
              <li>Organized by store section (produce, dairy, etc.).</li>
              <li>Check off as you shop.</li>
              <li>Share list with spouse via cloud sync.</li>
              <li>Never forget an ingredient again.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size for cooking with reading glasses.</li>
              <li>Step-by-step cooking mode.</li>
              <li>Built-in timer for each step.</li>
              <li>Adjust serving sizes — math done for you.</li>
              <li>Convert measurements (cups to grams, etc.).</li>
              <li>Family member can sync to share recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paprika alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AnyList — free, similar features.</li>
              <li>Plan to Eat — meal planning focus.</li>
              <li>Yummly — discover new recipes.</li>
              <li>BigOven — large recipe community.</li>
              <li>Simple notes + bookmarks also work.</li>
              <li>Try free options first if budget tight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Replace your recipe binders</h3>
            <p className="text-sm text-muted-foreground">If you have a binder full of recipe printouts and clippings, Paprika can preserve them digitally. Type each recipe in once (or photograph and OCR), and you have your entire family cookbook in your pocket forever. The grocery-list-from-recipes feature alone justifies the $5. Many seniors say switching to a recipe app cut cooking stress by half.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
