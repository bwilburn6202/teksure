import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorChurchOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Church Online — Senior Guide" description="Stream church services from home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Church Online</h1>
          <p className="text-lg text-muted-foreground">Worship from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Your church first</h2><p>Most churches stream Sunday service free on YouTube or Facebook.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. YouVersion Bible</h2><p>Free. 1,400+ Bible translations. Audio, daily plans, devotionals.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Hallow</h2><p>Catholic prayer app. $80/year. Liturgy of Hours, daily mass.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Prayer apps</h2><p>Pray.com, Echo. Daily prayer prompts. Mostly free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cast to TV</h2><p>Stream service to your TV. More like in-person worship.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Tithe online</h2><p>Pushpay or church website lets you donate online. Auto-monthly available.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Online services help when illness or weather keeps you home. Real fellowship best in person.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
