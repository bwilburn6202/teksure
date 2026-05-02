import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorRakutenCashback() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rakuten Cash Back for Seniors — TekSure" description="Earn cash back on online shopping — free senior-friendly Rakuten guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rakuten Cash Back</h1>
          <p className="text-lg text-muted-foreground">Get money back on shopping you already do.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>No subscription. Sign up at rakuten.com.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How it works</h2><p>Click through Rakuten before shopping at Walmart, Macy&apos;s, Kohl&apos;s, etc. They pay you 1-10% back.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get paid quarterly</h2><p>Check or PayPal. $5+ minimum. Most seniors earn $50-$200/year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Browser extension</h2><p>Auto-applies cash back. Pops up reminders at checkout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Department stores</li><li>Travel sites</li><li>Pet supplies (Chewy 4%)</li><li>Holiday shopping</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><p>Honey (Amazon-friendly). Capital One Shopping. All free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Stack with credit card cash back for double rewards.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
