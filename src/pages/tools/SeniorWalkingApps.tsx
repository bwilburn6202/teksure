import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorWalkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Apps for Seniors — Senior Guide" description="Apps that turn walks into fun." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Apps</h1>
          <p className="text-lg text-muted-foreground">Make daily walks fun and useful.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Health / Google Fit</h2><p>Free, built in. Tracks steps automatically using phone sensors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pacer</h2><p>Free. Goal challenges. Walk to virtual landmarks worldwide.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. WalkLogger</h2><p>Free. Senior-friendly large buttons. Tracks every walk.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Nike Run Club</h2><p>Free. Audio coaches encourage you. Walking guides included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Charity Miles</h2><p>Free. Sponsors donate to charity for every mile you walk. Walks for a cause.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Just push play</h2><p>Audiobook or podcast app turns 30-minute walks into the best part of your day.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Walking 30 minutes daily lowers risk of heart disease, diabetes, and falls.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
