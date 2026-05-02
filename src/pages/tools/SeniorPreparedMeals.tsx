import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorPreparedMeals() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prepared Meals for Seniors — TekSure" description="Heat-and-eat meals — Factor, Mom's Meals, Magic Kitchen for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prepared Meals</h1>
          <p className="text-lg text-muted-foreground">No cooking. Just heat.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Factor</h2><p>$11/meal. Fresh, no prep. 25+ meal options weekly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mom&apos;s Meals</h2><p>$8/meal. Often FREE through Medicare Advantage post-hospital.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Kitchen</h2><p>$10/meal. Senior-focused. Diabetic, heart-healthy options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Silver Cuisine</h2><p>$18/meal. BistroMD-quality. Senior portions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Advantage benefit</h2><p>Many cover post-hospital meals. Free 28 meals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Costco frozen</h2><p>Stouffers, Healthy Choice. Heat in 5 min. Cheaper than meal services.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mom&apos;s Meals often free post-hospital. Worth asking discharge nurse.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
