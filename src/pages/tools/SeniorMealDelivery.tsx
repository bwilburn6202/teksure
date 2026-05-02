import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorMealDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Meal Delivery — TekSure" description="Meal delivery for seniors — Meals on Wheels, Silver Cuisine, Mom's Meals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Meal Delivery</h1>
          <p className="text-lg text-muted-foreground">Healthy meals to your door.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Meals on Wheels</h2><p>Free or low-cost. Volunteer-delivered. mealsonwheelsamerica.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Silver Cuisine by BistroMD</h2><p>$130/week. Senior-friendly portions. Heart-healthy, diabetic-friendly options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mom&apos;s Meals</h2><p>Often Medicare Advantage covers free. Heart-healthy, low-sodium, kidney-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Kitchen</h2><p>Senior-focused. Pre-cooked, frozen meals. From $7/meal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Factor</h2><p>$11/meal. Fresh-prepared. Many low-carb options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Advantage benefit</h2><p>Many plans cover post-hospital meals — call your plan and ask.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Check your local senior center — many have FREE Tuesday and Thursday meals.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
