import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorZelleVenmo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zelle vs Venmo for Seniors — TekSure" description="Senior-friendly guide to sending money — Zelle, Venmo, PayPal, Cash App." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zelle vs Venmo</h1>
          <p className="text-lg text-muted-foreground">Sending money to family — explained.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zelle</h2><p>Free. Built into most bank apps. Instant. Best for trusted family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Venmo</h2><p>Free. Owned by PayPal. Popular with younger family. Free between bank accounts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cash App</h2><p>Free. Simple. Has a debit card option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PayPal</h2><p>Free for friends/family. Buyer protection for purchases.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAFETY RULE</h2><p>Only send money to people you know. Zelle and Venmo do NOT refund scams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verify recipient</h2><p>Always confirm the phone number or username with a phone call before sending.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A small $1 test transfer is smart for first-time sends. Then send the full amount.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
