import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export default function MealPlanningForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Planning Apps for Seniors | TekSure" description="Plan weekly meals, save money, eat better. Senior meal planning apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarDays className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Planning</h1>
          <p className="text-lg text-muted-foreground">Weekly dinner solved.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why plan</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save money — less waste.</li><li>Eat healthier.</li><li>Less daily stress.</li><li>One shopping trip/week.</li><li>Senior energy saved.</li><li>Cook smarter.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mealime app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>30-min recipes.</li><li>Auto-grocery list.</li><li>Diet preferences.</li><li>Senior friendly.</li><li>Beginner-perfect.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plan to Eat</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month.</li><li>Save recipes anywhere.</li><li>Drag to meal plan.</li><li>Auto grocery list.</li><li>Senior power user app.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sunday planning ritual</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pick 4-5 dinners.</li><li>Make grocery list.</li><li>One shop trip.</li><li>Less weeknight stress.</li><li>Senior calm week.</li><li>30 min Sunday.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hello Fresh + Blue Apron</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pre-portioned ingredients.</li><li>Recipe cards.</li><li>$60-$100/week (2 ppl).</li><li>No planning + shopping.</li><li>Senior convenience.</li><li>Try free week.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Frozen meals + Silver Cuisine</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior-targeted meal delivery.</li><li>BistroMD, Silver Cuisine.</li><li>Heart-healthy options.</li><li>$10/meal.</li><li>Less cooking.</li><li>Senior solo option.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30 min Sunday = stress-free week</h3><p className="text-sm text-muted-foreground">30 minutes Sunday meal planning saves 5x daily &quot;what for dinner?&quot; stress. Free Mealime app makes easy. Or HelloFresh delivers ingredients. Senior energy + money saved. Eat better. Less waste. Most under-rated senior life upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
