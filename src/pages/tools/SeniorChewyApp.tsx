import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorChewyApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chewy App for Seniors — TekSure" description="Pet supplies delivered — auto-ship, prescriptions, free shipping over $49." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chewy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pet food and meds delivered.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free shipping</h2><p>Free on orders $49+. Most seniors meet this with one bag of food.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-ship savings</h2><p>10% off first order. 5% off forever after. No carrying heavy bags.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Prescription meds</h2><p>Often cheaper than vet. Chewy contacts your vet directly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">24/7 customer service</h2><p>Phone or chat. Real people. Often send handwritten cards and pet portraits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Returns</h2><p>365-day returns. Pet doesn&apos;t like the food? Free return.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sad alternatives</h2><p>If a pet passes, Chewy refunds remaining auto-ship orders. Often donates the food.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Connect with Rakuten for cash back. Stack savings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
