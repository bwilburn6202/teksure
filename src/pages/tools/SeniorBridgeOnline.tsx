import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

export default function SeniorBridgeOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Bridge for Seniors — Senior Guide" description="Play bridge online with partners worldwide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Bridge</h1>
          <p className="text-lg text-muted-foreground">Find partners anytime, anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bridge Base Online (BBO)</h2><p>Free. Largest bridge site. Sign up at bridgebase.com.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Funbridge</h2><p>Play against AI or real people. Free version with limited deals.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Tournaments</h2><p>BBO has tournaments daily. Some free, some $1-5 entry.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. ACBL points</h2><p>Earn American Contract Bridge League points playing online tournaments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Lessons</h2><p>BBO offers free beginner lessons. Larry Cohen's classes are excellent.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Find a club</h2><p>Search ACBL for nearby in-person clubs. Online play first, then meet folks in person.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Bridge keeps the mind sharp. Studies link card games to lower dementia risk.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
