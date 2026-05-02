import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function SeniorMedicalBilling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Billing Apps for Seniors — TekSure" description="Track and dispute medical bills — Solv, Resolve, MyChart billing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Billing Apps</h1>
          <p className="text-lg text-muted-foreground">Catch billing errors. Save thousands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">75% of bills have errors</h2><p>Studies show 3 of 4 hospital bills have charges they shouldn&apos;t. Always check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Resolve</h2><p>FREE. Negotiates medical bills for you. Often saves 30-60%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyChart Billing</h2><p>FREE in patient portal. See itemized bill. Question line items.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Request itemized bill</h2><p>Always ask for line-by-line bill. Vague &ldquo;ER charge $5,000&rdquo; is unacceptable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Negotiate</h2><p>Hospitals often accept 50% if you offer to pay quickly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>State Health Insurance Assistance Program (SHIP). Free counselor reviews bills.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t pay first bill. Wait for &ldquo;final&rdquo; after insurance processes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
