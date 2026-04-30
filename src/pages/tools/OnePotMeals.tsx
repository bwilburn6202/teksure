import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function OnePotMeals() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="One-Pot Meals for Seniors | TekSure" description="Less cleanup. Fewer dishes. Plain-English picks for one-pan, sheet-pan, and skillet meals for 1-2 people." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">One-Pot Meals</h1>
          <p className="text-lg text-muted-foreground">One pan. One delicious meal.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sheet pan dinners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Salmon + asparagus + lemon</strong> — 400°F, 18 min.</li>
              <li><strong>Chicken thighs + sweet potato + broccoli</strong> — 425°F, 30 min.</li>
              <li><strong>Sausage + peppers + onions + potatoes</strong> — 400°F, 25 min.</li>
              <li><strong>Cod + zucchini + cherry tomatoes</strong> — 400°F, 15 min.</li>
              <li>Toss veggies in olive oil + salt + pepper. Done.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skillet meals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chicken stir-fry</strong> — chicken + frozen veggie mix + soy sauce + rice.</li>
              <li><strong>Egg scramble</strong> — eggs + leftover veggies + cheese.</li>
              <li><strong>Pasta + meat sauce</strong> — ground beef + jar sauce + cooked pasta in same pan.</li>
              <li><strong>Tacos</strong> — ground beef + taco seasoning + tortillas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pot meals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chicken + rice 1-pot</strong> — boil rice + chicken in broth. 25 min.</li>
              <li><strong>Soup + grilled cheese</strong> — comforting, easy.</li>
              <li><strong>Beans + rice</strong> — cheap, healthy, freezes well.</li>
              <li><strong>Mac + cheese stovetop</strong> — pasta + cheese + milk. 15 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-cut veggies (Costco / supermarket) — saves arthritis hands.</li>
              <li>Frozen veggie steam-bags — pour right in pan.</li>
              <li>Rotisserie chicken from Costco ($5) — pulls easy + freezes.</li>
              <li>Pre-cooked rice / quinoa packets — heat 90 seconds.</li>
              <li>Pre-marinated meats — eliminate prep step.</li>
              <li>Air fryer halves cook times for many of these.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For 1 person households</h3>
            <p className="text-sm text-muted-foreground">Cook full recipe. Eat half tonight. Freeze half for next week. Or — make smaller in toaster oven (8x8 pan) for true 1-2 servings. Don&apos;t cook tiny — wastes time + ingredients.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
