import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function SeniorMuseumApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Museum Apps for Seniors — Senior Guide" description="Visit museums in person and online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Museum Apps</h1>
          <p className="text-lg text-muted-foreground">World museums on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Smithsonian app</h2><p>Free. Tours, maps, exhibits. National Air & Space, Natural History.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google Arts & Culture</h2><p>Free. Virtual tours of Louvre, MoMA, more. Zoom into masterpieces.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. The Met (NYC)</h2><p>Free. 5,000 years of art. Virtual tours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Free museum days</h2><p>Most museums have free days monthly. Check websites or AAA discount.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Senior discounts</h2><p>Show ID at most museums. $5-10 off admission.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Audio guides</h2><p>Many museums have free audio guide apps. Bring earphones for clearer narration.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Local libraries often offer free museum passes. Check your branch.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
