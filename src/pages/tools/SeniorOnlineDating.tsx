import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorOnlineDating() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Dating for Seniors — Senior Guide" description="Use senior dating sites safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Dating</h1>
          <p className="text-lg text-muted-foreground">Find companionship safely.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. SilverSingles</h2><p>For 50+. $40/month. Personality-matched profiles.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. OurTime</h2><p>For 50+. Same idea, slightly different feel. Try the free trial.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Match.com</h2><p>All ages. Many seniors. $36/month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Stitch</h2><p>For 50+. Friendship-first. Helps avoid romance scams.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Romance scam red flags</h2><p>Lives far away, can't video chat, asks for money. All scams.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Meet in public first</h2><p>Coffee shop, daytime, busy place. Tell a family member where you're going.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never send money to anyone you've only met online. Period.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
