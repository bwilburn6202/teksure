import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

export default function SudokuAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sudoku Apps for Seniors | TekSure" description="Best free sudoku apps for senior brain training. Easy to hard puzzles." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Grid3x3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sudoku for Seniors</h1>
          <p className="text-lg text-muted-foreground">Daily brain workout.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sudoku.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Most popular free app.</li><li>Daily challenges.</li><li>Easy to expert.</li><li>Hint system.</li><li>Stats track progress.</li><li>Senior-friendly UI.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Andoku 3</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Android favorite.</li><li>16+ variant types.</li><li>Pencil marks.</li><li>Color highlighting.</li><li>Customize colors.</li><li>Larger numbers option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple News+ </h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily NYT-style puzzles.</li><li>If you have subscription.</li><li>Crossword + Sudoku.</li><li>Spelling Bee included.</li><li>$13/month.</li><li>Brain game bundle.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Difficulty progression</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start with easy.</li><li>Don&apos;t skip levels.</li><li>Master techniques.</li><li>Move up slowly.</li><li>Expert in months.</li><li>Daily 15 minutes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brain benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Logic + concentration.</li><li>Pattern recognition.</li><li>Working memory.</li><li>Studies show benefit.</li><li>Slows cognitive decline.</li><li>Free brain training.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Larger screen helps eyes.</li><li>Increase font size.</li><li>Use pencil mark feature.</li><li>Take breaks every 20 min.</li><li>Morning when fresh.</li><li>Don&apos;t use hint too much.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free + science-backed brain food</h3><p className="text-sm text-muted-foreground">Daily Sudoku is free, science-backed senior brain exercise. 15-30 minutes daily slows cognitive decline. Sudoku.com on iPad with large numbers is senior-friendly. Track progress, climb difficulty, feel proud. Gentler than Lumosity, more proven than candy crush.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
