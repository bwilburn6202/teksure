import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorScrapbookApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Book Apps — Senior Guide" description="Make photo books and scrapbooks on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Book Apps</h1>
          <p className="text-lg text-muted-foreground">Real books from your photos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Shutterfly</h2><p>Most popular. Photo books from $20. Watch for 50-70% off coupon codes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Snapfish</h2><p>Cheaper than Shutterfly. Same quality. Pre-built templates make it easy.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Mixbook</h2><p>Premium quality. Custom layouts. $40+ but professional results.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Chatbooks</h2><p>$10/month subscription. App auto-makes a small book each month from Instagram photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Costco Photo</h2><p>Members only. High quality books at lower prices. 4-7 day turnaround.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Walgreens / CVS</h2><p>Photo books from local store. Same-day prints, 1-week books.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Photo books make wonderful gifts for grandkids. Show your life story in their hands.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
