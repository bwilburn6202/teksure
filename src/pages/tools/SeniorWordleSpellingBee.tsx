import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorWordleSpellingBee() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wordle & NYT Games for Seniors — TekSure" description="Free Wordle, Spelling Bee, and other NYT puzzle games for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wordle &amp; NYT Games</h1>
          <p className="text-lg text-muted-foreground">Daily brain workout.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wordle (FREE)</h2><p>Guess a 5-letter word in 6 tries. Once a day. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Connections (FREE)</h2><p>Find 4 groups of 4 related words. Daily. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mini Crossword (FREE)</h2><p>5x5 mini puzzle. 1-3 minutes. Daily. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spelling Bee</h2><p>Free version available. $5/month for full version.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily streak</h2><p>Many seniors keep 1,000+ day streaks. Daily habit boosts memory.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share scores</h2><p>Text scores with family. Friendly competition keeps everyone engaged.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Make it morning ritual with coffee. Brain warm-up sets up the day.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
