import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorNutritionTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nutrition Tracking for Seniors — TekSure" description="Track sodium, potassium, fiber — apps for seniors with diet restrictions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nutrition Tracking</h1>
          <p className="text-lg text-muted-foreground">Especially for diet restrictions.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyFitnessPal Premium</h2><p>$20/month. Tracks sodium, fiber, sugar, carbs precisely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cronometer</h2><p>FREE basic. Most accurate micronutrients. Good for seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lose It!</h2><p>FREE basic. Easier than MyFitnessPal for casual tracking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DASH diet apps</h2><p>For high blood pressure. Filter recipes by sodium under 600 mg.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kidney-friendly</h2><p>Track potassium, phosphorus. Davita Kidney Diet has free app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diabetes</h2><p>Track carbs by meal. Time-of-day tracking is critical.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even 1 week of tracking shows big sodium/sugar surprises.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
