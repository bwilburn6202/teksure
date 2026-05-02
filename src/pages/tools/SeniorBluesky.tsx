import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorBluesky() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluesky for Seniors — Senior Guide" description="A calmer Twitter-like alternative." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluesky</h1>
          <p className="text-lg text-muted-foreground">Twitter-like, but calmer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App and bsky.app. No ads. No paid checkmarks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign up</h2><p>Email and password. Pick handle (@yourname.bsky.social).</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Follow news</h2><p>NPR, BBC, AARP many news sources are on Bluesky now.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Custom feeds</h2><p>Pick feeds — gardening, books, travel — instead of one mixed firehose.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Less drama</h2><p>Many seniors find it more polite than X. Worth a try.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Same scam warnings</h2><p>Don't share personal info. Skip messages from strangers asking for money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Open-source. Funded by users, not ads. Less chaos than other social platforms.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
