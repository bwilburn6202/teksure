import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function SeniorMagazinesDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Magazines — Senior Guide" description="Read magazines on tablets and phones." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Magazines</h1>
          <p className="text-lg text-muted-foreground">100s of magazines on one screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Library free</h2><p>Libby app from your library. Free magazines like Vogue, Time, Reader's Digest.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple News+</h2><p>$13/month. 300+ magazines and newspapers. Read offline.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Magzter</h2><p>$10/month. Senior magazines like AARP and Better Homes & Gardens.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Direct subscriptions</h2><p>Most magazines $1-3/month for digital only. Cheaper than print.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pinch to zoom</h2><p>Tap an article. Pinch out for big print. Easier on eyes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Save articles</h2><p>Tap bookmark. Read later when traveling. Stays offline.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Try a free library trial first. Most folks find one or two magazines and stop there.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
