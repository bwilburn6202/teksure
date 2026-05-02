import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorAirPods() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirPods for Seniors — Senior Guide" description="Use AirPods for calls, music, and as hearing aids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirPods</h1>
          <p className="text-lg text-muted-foreground">Wireless earbuds that work as hearing aids too.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a model</h2><p>AirPods 4 $129 — basic. Pro 2 $249 — noise canceling, hearing aid mode.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pair</h2><p>Open the case near iPhone. A popup asks to connect. Tap Connect.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Take calls</h2><p>Insert earbuds. Calls automatically come through. Talk hands-free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Hearing Aid mode</h2><p>Pro 2 only. Settings, Accessibility, Hearing. Take a hearing test in the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Conversation Boost</h2><p>Live boost for nearby voices. Helpful at restaurants.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Find lost AirPods</h2><p>Open Find My app. Each AirPod plays a sound. Easy to spot in the couch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>AirPods Pro 2 are now FDA-cleared as a hearing aid for mild-to-moderate hearing loss.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
