import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

export default function SeniorZelle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zelle for Seniors — Senior Guide" description="Send money fast with Zelle bank-to-bank." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zelle</h1>
          <p className="text-lg text-muted-foreground">Bank-to-bank money in minutes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Built into bank apps</h2><p>Open Chase, BofA, Wells, or other major bank apps. Tap Pay, then Zelle.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. No fees</h2><p>Most banks charge nothing. Money arrives in minutes, not days.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Send by email or phone</h2><p>Type the recipient's email or phone. Type amount. Confirm.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Confirm name</h2><p>Zelle shows the receiver's name before you send. Always check spelling first.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cannot reverse</h2><p>Once sent, gone. Zelle is for known people only — never strangers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Common scam</h2><p>Caller pretending to be your bank tells you to send Zelle. Real banks never ask.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If unsure, hang up and call the bank from the number on your card.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
