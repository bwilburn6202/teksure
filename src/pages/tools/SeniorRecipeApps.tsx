import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorRecipeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recipe Apps for Seniors — TekSure" description="Best free recipe apps — NYT Cooking, AllRecipes, BBC Good Food." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe Apps</h1>
          <p className="text-lg text-muted-foreground">Thousands of recipes. Step by step.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NYT Cooking</h2><p>$5/month. 20,000 recipes. Famous chefs. Senior-friendly comments and tips.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AllRecipes</h2><p>FREE. Real cooks rate everything. Find tested family recipes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BBC Good Food</h2><p>FREE. British recipes — hearty, classic, well-tested.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yummly</h2><p>FREE. Filter by allergies, diabetes, low sodium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice while cooking</h2><p>&ldquo;Hey Siri, set timer 12 minutes.&rdquo; Hands-free in messy kitchen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save family recipes</h2><p>Take photo of grandma&apos;s handwritten cards. Add to Apple Notes or Paprika app.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bigger text in recipe apps — pinch out with two fingers to zoom.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
