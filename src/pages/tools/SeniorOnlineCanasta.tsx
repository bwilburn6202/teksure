import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

export default function SeniorOnlineCanasta() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Canasta — Senior Guide" description="Play Canasta online with partners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Canasta</h1>
          <p className="text-lg text-muted-foreground">A senior favorite — online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Canasta Junction</h2><p>Free. Real partners 24/7. Most popular Canasta site for seniors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Canasta on Pogo</h2><p>Free. Plus other classic card games at pogo.com.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Canasta Online</h2><p>App store. $5. Single-player or pass-and-play with grandkids.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Hand & Foot</h2><p>Variant some seniors prefer. Many sites support this version.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Family Canasta</h2><p>Schedule weekly online games with relatives. Brings family closer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Headset</h2><p>Use headphones to chat while playing. Like real card night.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Canasta keeps the brain working. Strategy, memory, partnership all in play.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
