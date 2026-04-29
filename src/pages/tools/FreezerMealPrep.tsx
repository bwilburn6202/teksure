import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function FreezerMealPrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Freezer Meal Prep for Seniors | TekSure" description="Cook once. Eat 10 times. Plain-English freezer meal strategy for 1-2 person senior households." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Freezer Meal Prep</h1>
          <p className="text-lg text-muted-foreground">Cook 1 day. Eat 10 days.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best freezer foods</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Soups + chili</strong> — freeze in 1-cup portions.</li>
              <li><strong>Lasagna</strong> — make 2, eat 1, freeze 1.</li>
              <li><strong>Casseroles</strong> — most freeze 3 months.</li>
              <li><strong>Meatballs / meatloaf</strong> — freeze raw OR cooked.</li>
              <li><strong>Cooked chicken</strong> — pull rotisserie + bag.</li>
              <li><strong>Slow-cooker dump bags</strong> — frozen ingredients in bag.</li>
              <li><strong>Smoothie packs</strong> — frozen fruit + spinach + protein powder.</li>
              <li><strong>Burritos</strong> — wrap + freeze. Microwave 2 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t freeze well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lettuce / fresh greens — turn to mush.</li>
              <li>Mayo or sour cream sauces — separate.</li>
              <li>Hard-boiled eggs.</li>
              <li>Whole tomatoes (chopped freezes OK).</li>
              <li>Soft cheeses — get watery.</li>
              <li>Cucumbers, raw potatoes.</li>
              <li>Cream-based pasta sauces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-portion freezing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-cup deli containers</strong> — perfect for soup / 1-person meal.</li>
              <li><strong>Glad zip-top bags</strong> — flatten for easy stacking.</li>
              <li><strong>Disposable foil pans</strong> — for casseroles.</li>
              <li><strong>Label EVERYTHING</strong> — name + date + reheating instructions.</li>
              <li><strong>Use within 3 months</strong> for best quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sunday cook-up routine</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick 2 simple recipes (chili + chicken + rice).</li>
              <li>Cook double batches.</li>
              <li>Eat one tonight.</li>
              <li>Portion + freeze rest.</li>
              <li>Sunday cook-up = 10 weeknight meals saved.</li>
              <li>3-4 hours / week. Saves dozens of "what to eat" decisions.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Buy a chest freezer</h3>
            <p className="text-sm text-muted-foreground">Cheap chest freezer ($200) in basement / garage = transformative. Holds months of meals. Costco bulk meat splits beautifully into freezer meals. Best ROI senior kitchen upgrade.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
