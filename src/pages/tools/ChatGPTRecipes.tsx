import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function ChatGPTRecipes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ChatGPT for Recipes — Plain English Guide | TekSure" description="Use AI as your kitchen assistant. Plain-English recipe prompts senior cooks love." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ChatGPT for Recipes</h1>
          <p className="text-lg text-muted-foreground">AI as kitchen helper.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best recipe prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"What can I cook with chicken thighs, rice, and frozen broccoli?"</li>
              <li>"Diabetic-friendly dinner under 500 calories using salmon."</li>
              <li>"Heart-healthy 30-min meal for 2 with low sodium."</li>
              <li>"Use up: 2 zucchini, half onion, 4 eggs, cheese."</li>
              <li>"Slow cooker pot roast — old-fashioned style."</li>
              <li>"Replace eggs in pancake recipe — what to use?"</li>
              <li>"Convert this recipe (paste) for Instant Pot."</li>
              <li>"Make it less spicy + add veggies."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Special diets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Diabetic</strong> — "Glycemic index under 50 / carbs under 30g per serving."</li>
              <li><strong>Heart-healthy</strong> — "Low sodium, low saturated fat, high fiber."</li>
              <li><strong>Kidney</strong> — "Low potassium, low phosphorus."</li>
              <li><strong>Soft food</strong> — "After dental work" or "for swallowing issues".</li>
              <li><strong>Pureed</strong> — "Easy to chew, smooth, balanced nutrition."</li>
              <li><strong>Allergies</strong> — list yours, AI works around.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan + shop with AI</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Make me a 7-day meal plan for diabetes, $100 grocery budget, 1 person."</li>
              <li>"Generate grocery list."</li>
              <li>"Convert grocery list to Costco bulk buying."</li>
              <li>"Make all meals freezer-friendly."</li>
              <li>"Prep instructions on Sunday for whole week."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ChatGPT app voice mode = hands-free cooking.</li>
              <li>"How long do I bake this potato?"</li>
              <li>"How much is 2 oz cheese?"</li>
              <li>"Substitute baking powder?"</li>
              <li>"How to test if chicken is done?"</li>
              <li>While hands are messy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Verify safety-critical info</h3>
            <p className="text-sm text-muted-foreground">AI sometimes invents temperatures or cook times. For meat doneness, food storage times — verify with USDA / trusted source. AI is a starting point + recipe inspiration, not the final word on food safety.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
