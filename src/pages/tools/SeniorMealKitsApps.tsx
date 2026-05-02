import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function SeniorMealKitsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Kits for Seniors — Senior Guide" description="Pick a meal kit service that fits seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Kits</h1>
          <p className="text-lg text-muted-foreground">Cooking with no shopping.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. HelloFresh</h2><p>Most popular. Pre-portioned. Recipes printed on cards.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Blue Apron</h2><p>Heat & Eat is fully cooked — just microwave. Great if cooking is too much.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Silver Cuisine</h2><p>Heat-and-eat meals designed for older adults. Diabetic and heart healthy options.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mom's Meals</h2><p>Medicare and many state programs cover these meals for free or reduced cost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cost</h2><p>Most $9-12 per serving. Compare to restaurants — meal kits often cheaper.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip weeks</h2><p>Going on vacation? Skip in the app. Avoid extra deliveries.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Ask Medicare Advantage if your plan covers meal delivery — many do for chronic conditions.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
