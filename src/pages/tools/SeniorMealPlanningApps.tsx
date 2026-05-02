import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorMealPlanningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Planning Apps for Seniors — TekSure" description="Plan weekly meals — Mealime, Yummly, Plan to Eat, NYT Cooking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Planning Apps</h1>
          <p className="text-lg text-muted-foreground">No more &ldquo;what&apos;s for dinner?&rdquo;</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mealime</h2><p>FREE. Picks 3 meals per week. Auto-creates grocery list.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan to Eat</h2><p>$5/month. Drag recipes onto calendar. Easy meal planning.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yummly</h2><p>FREE. Filter by allergies, diabetes, low sodium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NYT Cooking</h2><p>$5/month. 20,000 recipes. Save into weekly plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior tip</h2><p>Plan 3-4 meals/week. Repeat 1-2. Saves food waste and money.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heart-healthy</h2><p>Filter for &ldquo;DASH diet&rdquo; or &ldquo;Mediterranean.&rdquo; Doctor-recommended.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cook double on Sundays. Lunches and easy reheats all week.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
