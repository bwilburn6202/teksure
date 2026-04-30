import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function MealPlanningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Planning Apps for Seniors | TekSure" description="Best meal planning apps for seniors. Save money, eat better, reduce waste." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Planning Apps</h1>
          <p className="text-lg text-muted-foreground">Plan the week. Shop once. Eat better.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why plan meals?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save money — fewer grocery trips, less waste.</li>
              <li>Eat better — no &quot;what&apos;s for dinner&quot; takeout.</li>
              <li>Less stress — decision made ahead.</li>
              <li>Variety — avoid eating same things.</li>
              <li>Honor doctor&apos;s diet recommendations.</li>
              <li>Support diabetes, heart, kidney diets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan to Eat — best dedicated app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$5/month, 30-day free trial.</li>
              <li>Drag recipes onto calendar days.</li>
              <li>Auto-generates grocery list.</li>
              <li>Save recipes from any website.</li>
              <li>Share plan with spouse via cloud.</li>
              <li>Best for serious meal planners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mealime — easiest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free, with optional Pro at $5/month.</li>
              <li>Pick recipes — app makes grocery list.</li>
              <li>Quick recipes, mostly under 30 minutes.</li>
              <li>Diet filters — diabetic, low-carb, vegetarian.</li>
              <li>Avoid foods you don&apos;t like.</li>
              <li>Most popular meal planning app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eat This Much</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-generates meal plans from your goals.</li>
              <li>Set calories + diet preferences.</li>
              <li>App designs full week of meals.</li>
              <li>Free with limits — Premium $5/month.</li>
              <li>Great for weight management.</li>
              <li>Hands-off planning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free option: simple notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone&apos;s Notes app — list 7 dinners.</li>
              <li>Make grocery list from those.</li>
              <li>No app, no subscription.</li>
              <li>Works for many seniors.</li>
              <li>Calendar reminders for &quot;defrost chicken&quot; etc.</li>
              <li>Don&apos;t overcomplicate it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior meal planning tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan 5 dinners — leave 2 for leftovers/eating out.</li>
              <li>Cook bigger batches — freeze portions.</li>
              <li>Theme nights — Meatless Monday, Fish Friday.</li>
              <li>Repeat favorite easy recipes weekly.</li>
              <li>One new recipe per week to avoid boredom.</li>
              <li>Account for medication timing if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sunday is meal-plan day</h3>
            <p className="text-sm text-muted-foreground">Pick Sunday afternoon as your weekly meal-planning ritual. Spend 20 minutes choosing 5 dinners for the week and writing the grocery list. Order from Instacart or shop Monday morning. The rest of the week, &quot;what&apos;s for dinner?&quot; is already answered. Many seniors say this single habit dramatically reduced cooking stress and improved their nutrition.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
