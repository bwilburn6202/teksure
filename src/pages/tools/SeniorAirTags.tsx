import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorAirTags() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirTags — Senior Guide" description="Use AirTags to find keys, wallets, and bags." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirTags</h1>
          <p className="text-lg text-muted-foreground">Find lost items in seconds.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What they do</h2><p>Tiny coin-shaped trackers from Apple. $29 each, $99 for 4-pack.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Hold AirTag near your iPhone. Setup pops up. Name it Keys, Wallet, or Bag.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Find My app</h2><p>Open Find My. Tap Items. See every AirTag on a map.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Play sound</h2><p>If it's nearby, tap Play Sound. AirTag chimes loudly until found.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Precision finding</h2><p>Within 30 feet, AirTag shows arrow and distance — works like a treasure hunt.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Lost mode</h2><p>If lost in public, mark Lost. Anyone with iPhone who finds it sees your phone number.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Battery lasts about a year. Replace with a CR2032 coin battery — $2 at any drugstore.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
