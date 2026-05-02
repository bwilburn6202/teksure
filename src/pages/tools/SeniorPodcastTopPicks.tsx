import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorPodcastTopPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Top Senior Podcasts — Senior Guide" description="The best podcasts for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Top Senior Podcasts</h1>
          <p className="text-lg text-muted-foreground">Free shows worth your time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP The Perfect Scam</h2><p>Real stories of scams. Helps you spot tactics before they hit you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Stuff You Should Know</h2><p>Fun facts about everything. 25-minute episodes. Light listening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Wait Wait Don't Tell Me</h2><p>NPR's news quiz show. Funny weekly summary of the news.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Hidden Brain</h2><p>Psychology and human behavior. Shankar Vedantam's calming voice.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Revisionist History</h2><p>Malcolm Gladwell digs into things misunderstood by history.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. The Daily</h2><p>NYT's daily 20-minute deep dive on one news story.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Try one episode of each. Subscribe to the ones you finish. Skip the rest.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
