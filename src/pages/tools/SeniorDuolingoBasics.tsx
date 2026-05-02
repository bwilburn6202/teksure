import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SeniorDuolingoBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Duolingo for Seniors — TekSure" description="Learn a new language at any age — Duolingo basics for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Duolingo for Seniors</h1>
          <p className="text-lg text-muted-foreground">Learn a language — 5 minutes a day.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free forever</h2><p>Free version is plenty. Premium ($7/month) removes ads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Download. Pick a language. Pick &ldquo;5 minutes a day&rdquo; goal. Start your first lesson.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best languages for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Spanish — most useful in US</li><li>Italian — fun for travel</li><li>French — popular for trips</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Streaks build habit</h2><p>App tracks how many days in a row. Most seniors keep streaks of 100+ days.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Brain benefits</h2><p>Studies show language learning slows cognitive decline. Real measurable benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak out loud</h2><p>Don&apos;t skip pronunciation. Speak the answers — improves recall.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pair Duolingo with Netflix shows in that language with subtitles. Learn faster.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
