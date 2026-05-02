import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorMintMobile() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mint Mobile for Seniors — TekSure" description="Cheap phone plans — Mint Mobile $15/month. T-Mobile network." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mint Mobile for Seniors</h1>
          <p className="text-lg text-muted-foreground">Save big. T-Mobile network.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$15/month</h2><p>If buy 12 months upfront. Unlimited talk/text + 5 GB data.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$20/month</h2><p>Unlimited everything. Often cheaper than Verizon by half.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">T-Mobile network</h2><p>Same coverage as T-Mobile. 99% of US.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bring your phone</h2><p>Works with most iPhones, Samsung, Google Pixel.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free trial</h2><p>7 days free. Try before you buy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save $50/month</h2><p>Average senior saves $600/year switching from major carrier.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Buy 12 months upfront. Lock in $15/month forever.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
