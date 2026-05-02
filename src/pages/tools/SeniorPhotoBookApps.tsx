import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorPhotoBookApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Book Apps for Seniors — TekSure" description="Make printed photo books from your phone — Shutterfly, Mixbook, Chatbooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Book Apps</h1>
          <p className="text-lg text-muted-foreground">Turn phone photos into printed books.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shutterfly</h2><p>$30-$80 per book. Free books often offered with free shipping codes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mixbook</h2><p>Higher quality. $40-$100. Best for keepsake gifts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chatbooks</h2><p>$10/month auto-photobook. Pulls from phone monthly. Best for grandkids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Photos book</h2><p>Built into Mac Photos. Print direct to high-quality books.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior gift idea</h2><p>Make a 12-month family photo book yearly. A 10-year set tells your story.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch sales</h2><p>50% off codes around Mother&apos;s Day, Black Friday, December.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add captions while making the book. Future generations will treasure the stories.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
