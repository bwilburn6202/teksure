import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorIPadKindle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kindle App on iPad for Seniors — TekSure" description="Read Kindle books on iPad — bigger text, sync across devices." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kindle on iPad</h1>
          <p className="text-lg text-muted-foreground">Best of both worlds.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kindle app FREE</h2><p>Download from App Store. Sign in to Amazon.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger text</h2><p>Adjust font, size, line spacing. Most senior-friendly reading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sync</h2><p>Where you stop on iPad picks up on Kindle device or phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library Libby</h2><p>FREE library books. Read in Kindle app on iPad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audio books</h2><p>Buy Whispersync. Listen + read together. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free books</h2><p>Project Gutenberg via Kindle. 70,000 free classics.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: iPad screen tires eyes. Use Kindle Paperwhite for long reading.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
