import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorVisionInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vision Insurance for Seniors — TekSure" description="Vision coverage for seniors — VSP, EyeMed, Medicare Advantage vision." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vision Insurance for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most Medicare doesn&apos;t cover.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Advantage</h2><p>Many include vision. $200-$300 yearly glasses allowance typical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VSP Direct</h2><p>$20/month. Largest network. Easy claims.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EyeMed</h2><p>$15-$30/month. Larger Walmart, LensCrafters access.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip insurance</h2><p>Buy direct cheaper. Glasses online $100. Eye exam at Costco $80. No insurance needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diabetic eye exams</h2><p>Medicare Part B covers annually for diabetics. Don&apos;t skip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cataract surgery</h2><p>Medicare covers. One-time procedure. Restores sight.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Costco Optical accepts most vision insurance. Big discounts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
