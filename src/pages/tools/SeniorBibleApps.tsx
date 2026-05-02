import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorBibleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bible Apps for Seniors — Senior Guide" description="Free Bible reading and study apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bible Apps</h1>
          <p className="text-lg text-muted-foreground">Read, listen, and study scripture.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. YouVersion Bible</h2><p>Free. 1,400+ translations. Audio versions. Daily reading plans.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Verse of the Day</h2><p>Free. Each morning a single verse. Perfect breakfast routine.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Olive Tree</h2><p>Free Bible app. Strong study notes and Greek/Hebrew tools for serious students.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pray.com</h2><p>Free. Daily devotional audio. Bible stories with music.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Big text</h2><p>Adjust font size in settings. No more squinting at fine print.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Audio Bible</h2><p>Listen while driving or gardening. Most apps include free narration.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Reading plans help if you've never read Bible cover to cover. Most last 1 year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
