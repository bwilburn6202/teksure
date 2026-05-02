import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SeniorPhishingDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phishing Defense — Senior Guide" description="Spot and stop phishing emails and texts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phishing Defense</h1>
          <p className="text-lg text-muted-foreground">Spot and stop fake messages.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Urgent threats</h2><p>Your account will close in 24 hours. Real banks never threaten this way.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Misspelled addresses</h2><p>chase-bank-help.com is not chase.com. Check carefully before clicking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Don't click links</h2><p>Open the bank's app or website yourself. Never trust a link in a message.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Hover before clicking</h2><p>On a computer, hover over a link to see where it really goes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Spelling and grammar</h2><p>Many phishing emails have odd phrasing or typos. A real Apple email won't.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Report it</h2><p>Forward suspicious texts to 7726 (SPAM). Forward emails to reportphishing@apwg.org.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If unsure, call the company using the number on your card or printed bill — never the number in the message.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
