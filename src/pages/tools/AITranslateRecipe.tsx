import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function AITranslateRecipe() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Recipe + Translation Helper | TekSure" description="ChatGPT for recipes + translations. Plain-English guide for senior cooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Recipe + Translation</h1>
          <p className="text-lg text-muted-foreground">Cook better. Cook safer. Cook for one.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adapt recipes for diet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Make this recipe diabetic-friendly.&quot;</li>
              <li>&quot;Reduce sodium in this recipe.&quot;</li>
              <li>&quot;Make this gluten-free.&quot;</li>
              <li>&quot;Make this heart-healthy / low-sodium.&quot;</li>
              <li>&quot;Adapt for one person.&quot;</li>
              <li>&quot;Make in slow cooker / instant pot / air fryer.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooking for one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type recipe — say &quot;halve this&quot; or &quot;make for 1 person.&quot;</li>
              <li>AI adjusts measurements perfectly.</li>
              <li>&quot;What can I make with [list ingredients in fridge]?&quot;</li>
              <li>&quot;Quick 15-min dinner with chicken + spinach + rice.&quot;</li>
              <li>&quot;Healthy lunch using leftover [item].&quot;</li>
              <li>Reduces food waste.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Substitutions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Out of buttermilk — what can I substitute?&quot;</li>
              <li>&quot;Healthier alternative to butter in baking?&quot;</li>
              <li>&quot;Lower-sodium soy sauce alternative?&quot;</li>
              <li>&quot;Low-sugar dessert ideas?&quot;</li>
              <li>&quot;What can I use instead of [ingredient]?&quot;</li>
              <li>Saves trips to store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Translate old recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grandma&apos;s recipe in Italian/Greek/etc.?</li>
              <li>Type or photo (with phone OCR).</li>
              <li>AI translates AND adapts to American measurements.</li>
              <li>Convert metric to US measurements.</li>
              <li>Modern oven temperatures from old gas marks.</li>
              <li>Preserve family heritage recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Meal planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Plan healthy meals for week, low-sodium, $50 budget.&quot;</li>
              <li>&quot;Mediterranean diet meal plan for 1 week.&quot;</li>
              <li>&quot;Simple meals using slow cooker for arthritic hands.&quot;</li>
              <li>AI generates shopping list from meal plan.</li>
              <li>Reduces decision fatigue.</li>
              <li>Save plans you like as document.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voice cooking</h3>
            <p className="text-sm text-muted-foreground">Cooking with messy hands? Ask Alexa/Google: &quot;Set timer 5 minutes,&quot; &quot;What temperature for chicken?&quot;, &quot;Convert tablespoons to teaspoons.&quot; Or use phone&apos;s &quot;Hey Siri, read me the recipe.&quot; ChatGPT app has voice mode — talk while cooking. Hands-free help.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
