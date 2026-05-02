import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function SeniorRealID() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Real ID for Seniors — TekSure" description="Real ID 2025 deadline — what seniors need at DMV." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Real ID for Seniors</h1>
          <p className="text-lg text-muted-foreground">Get it before flying.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Required May 2025</h2><p>For domestic flights and federal buildings. Driver license needs star.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visit DMV</h2><p>Bring documents. Make appointment online. Avoid long lines.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Documents needed</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Birth certificate or passport</li><li>Social Security card</li><li>2 proofs of address</li><li>Marriage license if name changed</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip if you have passport</h2><p>Passport works for domestic flights. No Real ID needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$30-$60 typically. Often included with renewal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No mobile DMV</h2><p>Must visit in person. Some states have senior-friendly appointments.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Combine Real ID with renewal. Save trip.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
