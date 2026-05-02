import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorOfferUp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OfferUp for Seniors — Senior Guide" description="Buy and sell locally with OfferUp." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OfferUp</h1>
          <p className="text-lg text-muted-foreground">Local buy and sell, less drama.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up free</h2><p>No Facebook required. Verify with phone for trust.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. List in 30 seconds</h2><p>Photo, price, location. Done.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. TruYou verified</h2><p>Look for verified seal. Means seller showed real ID.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. In-app messaging</h2><p>Don't share phone number. Chat through app keeps you safer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Shipping option</h2><p>OfferUp can mediate shipping for items over $20. Small fee.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Meet at a spot</h2><p>OfferUp lists Community MeetUp Spots — police stations and similar.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>OfferUp scams less common than Marketplace. Still meet in public, daytime, cash.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
