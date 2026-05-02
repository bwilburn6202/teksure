import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorPenPalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pen Pal Apps for Seniors — Senior Guide" description="Find friends and pen pals online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pen Pal Apps</h1>
          <p className="text-lg text-muted-foreground">Make friends across the world.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Slowly</h2><p>Free. Letters take time to arrive — like real mail. Calming pace.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. InterPals</h2><p>Free. Match by language and interests. Practice your French or Spanish.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Senior Friend Finder</h2><p>Friendship-only for 50+. No dating pressure.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Old-fashioned mail</h2><p>InternationalPenPals.com matches you with real postal pen pals.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Stay safe</h2><p>Don't share your address right away. Keep money topics off the table.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Veterans</h2><p>Operation Gratitude — write to deployed troops. Brings joy on both ends.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pen pals reduce loneliness. Studies link letter-writing to better mental health.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
