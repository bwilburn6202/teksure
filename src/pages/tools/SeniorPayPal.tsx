import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function SeniorPayPal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PayPal for Seniors — Senior Guide" description="Use PayPal for online shopping safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PayPal</h1>
          <p className="text-lg text-muted-foreground">Pay online without sharing your card.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free at paypal.com. Link a bank account or credit card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pay with PayPal button</h2><p>Many websites have one. Click it instead of typing card number. Safer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Buyer protection</h2><p>If item never arrives or is fake, file a dispute. PayPal often refunds you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Send to family</h2><p>Pick Friends and Family option to skip fees when sending to relatives.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Two-step login</h2><p>Settings, Security. Add 2-step verification. Stops most break-ins.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Watch for fakes</h2><p>If an email asks you to log in to confirm payment, ignore. PayPal email always says your full name.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Use PayPal for online buys. Use Zelle or Venmo for friends and family.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
