import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorVoiceShopping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Shopping for Seniors — TekSure" description="Order via Alexa, Siri — voice shopping for senior convenience." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Shopping</h1>
          <p className="text-lg text-muted-foreground">Order without screens.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alexa shopping</h2><p>&ldquo;Alexa, order paper towels.&rdquo; Reorders previous purchases.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Confirmation required</h2><p>Settings: require code or confirmation. Prevents accidental orders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Subscribe &amp; Save</h2><p>Recurring orders. Paper towels every 2 months. Save 5-15%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior friendly</h2><p>No reading small text. No struggling with mouse. Just talk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family approval</h2><p>Send orders for family approval before charging. Safety net.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Don&apos;t voice order luxury items. Slow down purchase decisions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set spending limit. &ldquo;Don&apos;t allow orders over $30 without code.&rdquo;</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
