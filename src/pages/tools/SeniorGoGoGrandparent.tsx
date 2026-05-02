import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorGoGoGrandparent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GoGoGrandparent — Senior Guide" description="Call rides without using a smartphone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GoGoGrandparent</h1>
          <p className="text-lg text-muted-foreground">Uber and Lyft by phone call.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it does</h2><p>Calls Uber or Lyft for you over a regular phone call. No smartphone needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign up</h2><p>Visit gogograndparent.com or have family help. One-time setup with home address.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Call to ride</h2><p>Dial 1-855-464-6872. Press 1 for a ride home. Press 0 to talk to a person.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Cost</h2><p>$0.27/minute on top of the ride fare. Plans available with monthly fee.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Family alerts</h2><p>Sons and daughters can get text alerts when ride starts, completes, or goes off-route.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Also delivers</h2><p>Press 4 for grocery, 5 for prescriptions, 6 for food. Same simple phone calls.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Great for seniors uncomfortable with smartphone apps. Adult kids feel less worried too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
