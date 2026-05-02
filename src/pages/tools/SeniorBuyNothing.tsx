import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorBuyNothing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Buy Nothing Groups — Senior Guide" description="Give and receive free items in your neighborhood." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Buy Nothing Groups</h1>
          <p className="text-lg text-muted-foreground">Give and get free in your neighborhood.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free Buy Nothing app</h2><p>Find neighborhood-only groups. Everyone gives, no money exchanged.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Facebook groups</h2><p>Search Buy Nothing + your city. Most have hundreds of members.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Common giveaways</h2><p>Furniture, kids' toys, garden seeds, books, leftover holiday food.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Ask for things</h2><p>Need a vacuum? Post a request. Often someone gives one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Polite culture</h2><p>Most groups don't allow selling. First-come-first-served not preferred.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Builds community</h2><p>Lonely seniors find this connects them with neighbors. Real friendships form.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pay it forward. If you receive, give back later when you can.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
