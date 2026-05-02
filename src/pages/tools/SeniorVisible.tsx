import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorVisible() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Visible by Verizon for Seniors — TekSure" description="Visible — Verizon network for $25/month. Best value for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Visible by Verizon</h1>
          <p className="text-lg text-muted-foreground">Verizon network at half price.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$25/month</h2><p>Unlimited talk/text/data. Verizon network. No tricks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visible+ $45/month</h2><p>Premium features. International calling included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Owned by Verizon</h2><p>Same network. No coverage compromise.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">App-only</h2><p>No stores. Sign up online. Senior tip: family helps with setup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">eSIM</h2><p>iPhone XS+ supports eSIM. Switch in 10 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free trial</h2><p>15 days. Test before keeping Verizon.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Visible saves $50/month vs Verizon. $600/year for same network.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
