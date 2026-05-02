import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorMealKits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Kits for Seniors — TekSure" description="HelloFresh, Blue Apron, senior-friendly meal kits compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Kits for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pre-portioned. Easy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">HelloFresh</h2><p>$11/meal. 25-min recipes. Senior-friendly options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Blue Apron</h2><p>$10/meal. More gourmet. Heart-healthy section.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Home Chef</h2><p>$10/meal. Easy-prep options. Most senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No grocery shopping</li><li>Right portions</li><li>New recipes</li><li>Less food waste</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pause anytime</h2><p>Most allow weekly skip or pause. No commitment.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First box deals</h2><p>$60-$100 off first orders. Watch for promo codes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try 2-meal week first. See if cooking style fits before committing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
