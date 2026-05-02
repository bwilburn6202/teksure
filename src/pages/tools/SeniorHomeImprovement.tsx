import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function SeniorHomeImprovement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Improvement Apps — Senior Guide" description="Apps for projects and contractor hiring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Improvement Apps</h1>
          <p className="text-lg text-muted-foreground">For DIY and finding pros.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Angi (formerly Angie's List)</h2><p>Free. Find local plumbers, electricians, painters. Read reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Thumbtack</h2><p>Free. Get bids from local pros for any project.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. HomeAdvisor</h2><p>Free. Same idea. Background-checked pros.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Houzz</h2><p>Free. Inspiration photos. Sketches help you talk to contractors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Home Depot or Lowe's app</h2><p>Free. Check inventory at local stores. Pay before pickup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Better Business Bureau</h2><p>bbb.org for verified local contractors. Avoid 1-star reviews.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always get 3 quotes. Pay no more than 25% upfront. Avoid cash-only contractors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
