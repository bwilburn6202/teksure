import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorVenmo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Venmo for Seniors — Senior Guide" description="Send and receive money with Venmo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Venmo</h1>
          <p className="text-lg text-muted-foreground">Send money to family in seconds.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free. Owned by PayPal. Link a bank account or debit card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Send money</h2><p>Type a username. Type the amount. Add a note. Tap Pay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Send to friends only</h2><p>Only pay people you know. Once sent, money is hard to recover.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Privacy</h2><p>Settings, Privacy. Set to Private. By default Venmo posts your transactions publicly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. PIN protect</h2><p>Settings, Security. Turn on PIN code. Required to open the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip strangers</h2><p>If a Venmo request comes from an unknown person, decline. Common scam tactic.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Venmo does not offer buyer protection. Use only for friends. Not for online shopping.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
