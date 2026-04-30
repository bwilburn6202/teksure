import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function CrosswordAppsForSeniorPlayers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Crossword Apps for Senior Players | TekSure" description="NYT, Wapo, and free crossword apps for senior puzzle lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Crossword Apps</h1>
          <p className="text-lg text-muted-foreground">Daily word puzzles.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">NYT Crossword</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Gold standard.</li><li>$40/year subscription.</li><li>Daily new puzzle.</li><li>Mini for quick play.</li><li>Spelling Bee included.</li><li>Senior brain food.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">USA Today free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free in app.</li><li>Daily puzzle.</li><li>Easier than NYT.</li><li>Senior-friendly start.</li><li>No subscription.</li><li>Solid quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wapo crossword</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + good.</li><li>Sunday only.</li><li>Themed weekly.</li><li>Solid difficulty.</li><li>Free to play.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Crosswords with Friends</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pop culture clues.</li><li>Easier puzzles.</li><li>Good intro.</li><li>Free with ads.</li><li>Pop culture clues.</li><li>Light fun.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Variety puzzles</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cryptic crosswords (UK).</li><li>Acrostics.</li><li>Spelling bees.</li><li>Word ladders.</li><li>Variety = better workout.</li><li>Try them all.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad bigger than phone.</li><li>Increase font size.</li><li>Don&apos;t check unless stuck.</li><li>Sleep on hard ones.</li><li>Morning fresh.</li><li>Brain proven benefit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Crosswords slow cognitive decline</h3><p className="text-sm text-muted-foreground">2022 study showed daily crosswords slow cognitive decline in seniors. NYT subscription is best $40/year senior brain investment. Free USA Today + Wapo Sunday solid backup. 30 minutes daily keeps mind sharp + vocabulary growing.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
