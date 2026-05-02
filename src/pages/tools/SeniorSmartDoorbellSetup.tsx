import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SeniorSmartDoorbellSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Doorbell Setup for Seniors — TekSure" description="How seniors can install Ring, Nest, or Eufy video doorbells safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Doorbell Setup</h1>
          <p className="text-lg text-muted-foreground">See who&apos;s at your door — from anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ring Video Doorbell</h2><p>Most popular. $99-$199. Battery or wired. Works with Alexa.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Nest Doorbell</h2><p>$179. Best for Google Home users. 3 hours of free recording.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eufy Doorbell</h2><p>$149. No monthly fee — local storage on a hub.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup steps</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Charge battery overnight</li><li>Download the app</li><li>Connect to home Wi-Fi</li><li>Mount with screws or 3M tape</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Monthly costs</h2><p>Ring Protect $4.99/month for video history. Eufy is free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get help installing</h2><p>Best Buy Geek Squad installs for ~$100. Some HOAs offer free senior installation.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set up notifications to ring on your phone AND a smart speaker. Don&apos;t miss visitors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
