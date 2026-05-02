import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorPropertyDeeds() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Property Deeds for Seniors — TekSure" description="Find deed, transfer to family, deed scams to avoid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Property Deeds</h1>
          <p className="text-lg text-muted-foreground">Protect your home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find deed</h2><p>County recorder office. Free online for most counties. Search by address.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Deed scams</h2><p>Mail offers to &ldquo;send certified deed copy&rdquo; for $50-$80. SCAM. Free at county.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Title fraud</h2><p>Identity thieves transfer your home title. Property fraud alerts FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add child to deed</h2><p>NOT recommended. Tax issues. Use trust instead. Talk to estate attorney.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Transfer-on-death deed</h2><p>Available in most states. Property transfers automatically. No probate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reverse mortgage</h2><p>Different from selling. Keep deed. Borrow against equity. Risky, get advice.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sign up for free property fraud alerts. County recorders offer.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
