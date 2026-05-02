import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SeniorRingDoorbell() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ring Doorbell — Senior Guide" description="Set up and use a Ring video doorbell." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ring Doorbell</h1>
          <p className="text-lg text-muted-foreground">See who's at the door — without opening it.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a model</h2><p>Battery Ring works without wiring — easiest. Wired Ring runs forever — best long-term.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Install the app</h2><p>Get the free Ring app. Sign up, scan QR code on doorbell, follow setup steps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Connect Wi-Fi</h2><p>Ring uses your home Wi-Fi. Make sure router is close enough for a strong signal.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mount it</h2><p>Use included screws or 3M tape. Eye level for best face view.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Talk through it</h2><p>When someone rings, the app pops up. Tap Answer. Speak through your phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Subscription</h2><p>Optional. $5/month saves 30 days of recordings. Without it, only live view.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many delivery scams stopped — Ring lets you tell drivers where to leave packages.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
