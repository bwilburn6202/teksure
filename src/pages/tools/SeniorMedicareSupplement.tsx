import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorMedicareSupplement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Supplement Insurance — TekSure" description="Medigap plans explained for seniors — Plan G, N, F. Compare online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Supplement (Medigap)</h1>
          <p className="text-lg text-muted-foreground">Fill the gap in Original Medicare.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan G</h2><p>Most popular today. Pays everything Medicare doesn&apos;t (except $240 deductible).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan N</h2><p>Cheaper. $20 doctor visit copays. Saves money for healthy seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan F</h2><p>No longer available to new enrollees. If you have it, keep it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$100-$300/month. Varies by state and age.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare on Medicare.gov</h2><p>FREE official comparison tool. Plans identical by letter, only price varies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>SHIP counselors. Free unbiased advice. 1-800-633-4227.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Buy at 65 = guaranteed acceptance. After 65 = pre-existing conditions can be denied.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
