import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorRetirementPodcasts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Podcasts — Senior Guide" description="Top retirement and money podcasts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Podcasts</h1>
          <p className="text-lg text-muted-foreground">Listen to retirement experts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. The Retirement Answer Man</h2><p>Roger Whitney. Friendly. Practical.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Stay Wealthy in Retirement</h2><p>Taylor Schulte. Tax-efficient retirement strategies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. The Long View</h2><p>Morningstar's retirement expert interviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Suze Orman</h2><p>Plain-language money advice for older adults.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AARP The Perfect Scam</h2><p>Spot scams targeting older adults. Important listening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Smart Money Mamas</h2><p>Family money topics. Saving, debt, retirement.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always check podcast advice with a fee-only fiduciary. They are not lawyers or CPAs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
