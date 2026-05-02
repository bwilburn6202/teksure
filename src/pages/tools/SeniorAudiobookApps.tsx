import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorAudiobookApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audiobook Apps for Seniors — TekSure" description="Free and paid audiobook apps for seniors — Libby, Audible, Hoopla." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audiobook Apps</h1>
          <p className="text-lg text-muted-foreground">Free books from your library — and more.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Libby</h2><p>FREE with library card. Borrow audiobooks and ebooks. Best app for seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hoopla</h2><p>FREE with library card. No waitlists — instant borrowing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audible</h2><p>$15/month — 1 audiobook credit + audio originals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spotify</h2><p>15 hours of audiobooks included with regular Premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get a library card</h2><p>Most US libraries offer free cards online. Then download Libby and sign in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep timer</h2><p>All apps have a sleep timer — book pauses after 15-60 minutes for bedtime listening.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Slow narration to 0.8x for easier listening, or speed up to 1.2x for fast readers.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
