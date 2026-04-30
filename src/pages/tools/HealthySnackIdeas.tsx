import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function HealthySnackIdeas() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Healthy Senior Snacks | TekSure" description="Diabetes-friendly. Heart-friendly. Plain-English picks for senior snacks under 200 cal + protein-rich." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Healthy Snack Ideas</h1>
          <p className="text-lg text-muted-foreground">Quick. Healthy. Senior-friendly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Protein-rich snacks (under 200 cal)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hard-boiled egg + sliced apple.</li>
              <li>Greek yogurt + berries + nuts.</li>
              <li>Cottage cheese + peaches.</li>
              <li>Hummus + carrots + cucumbers.</li>
              <li>Cheese stick + grapes.</li>
              <li>Tuna packet + crackers.</li>
              <li>Almonds (1 oz) + dried apricot.</li>
              <li>Edamame (1 cup) + sea salt.</li>
              <li>Peanut butter + celery sticks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diabetic-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Low glycemic index foods</strong>:</li>
              <li>Walnuts + 1 small apple.</li>
              <li>Greek yogurt + cinnamon.</li>
              <li>Hard-boiled egg.</li>
              <li>Avocado on whole-grain crackers.</li>
              <li>Roasted chickpeas.</li>
              <li>Cheese cube + raw veggies.</li>
              <li>Limit: granola bars, dried fruit, juice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heart-healthy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walnuts (omega-3).</li>
              <li>Avocado (good fats).</li>
              <li>Berries (antioxidants).</li>
              <li>Salmon jerky / dried fish.</li>
              <li>Air-popped popcorn (no butter).</li>
              <li>Whole-grain crackers + nut butter.</li>
              <li>Limit: salt, fried snacks, processed meats.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior eating tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smaller, more frequent snacks beat 3 big meals.</li>
              <li>Protein at every snack — preserves muscle.</li>
              <li>Hydrate WITH snack — many seniors dehydrate.</li>
              <li>Pre-portion into single servings — no overeating.</li>
              <li>Keep healthy options visible, junk hidden.</li>
              <li>Plan snack times — 10 AM, 3 PM, 7 PM.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip these</h3>
            <p className="text-sm text-muted-foreground">"Healthy" granola bars often have 15-25g sugar. "Reduced fat" peanut butter has more sugar. "100 calorie packs" — high in salt, low in protein. Read labels. Real foods (apple, eggs, nuts) usually beat packaged.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
