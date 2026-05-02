import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorAffordableConnectivity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Affordable Internet for Seniors — TekSure" description="Low-income internet — Lifeline, Xfinity Internet Essentials, AT&amp;T Access." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Affordable Internet</h1>
          <p className="text-lg text-muted-foreground">$10-$30/month options for seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lifeline (federal)</h2><p>$9.25/month off internet/phone bill. SNAP/Medicaid qualified.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Xfinity Internet Essentials</h2><p>$10/month if SNAP/Medicaid. Comcast areas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AT&amp;T Access</h2><p>$10/month for low-income. AT&amp;T areas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spectrum Internet Assist</h2><p>$15/month. SSI or SNAP needed. 30 Mbps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">T-Mobile Home Internet</h2><p>$50/month. No contracts. 5G home internet. Often beats cable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library hotspot</h2><p>FREE. Many libraries lend Wi-Fi hotspots 1-2 weeks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apply for Lifeline first. Free $10/month off any provider.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
