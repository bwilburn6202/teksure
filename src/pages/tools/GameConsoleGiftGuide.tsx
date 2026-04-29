import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

const CONSOLES = [
  { name: 'Nintendo Switch / Switch 2', price: '$300-450', best: 'Best for kids 6-14. Family-friendly games (Mario, Zelda, Animal Crossing). Plays on TV OR handheld. Simple to use.', good: 'Top pick for grandkids.' },
  { name: 'Nintendo Switch Lite', price: '$200', best: 'Handheld only. Cheaper. Good for travel or kid\'s own room.', good: 'Smaller hands; budget pick.' },
  { name: 'PlayStation 5', price: '$500-700', best: 'Big game library — Spider-Man, God of War, Hogwarts Legacy. More mature. Best for teens 13+.', good: 'Many parents prefer over Xbox.' },
  { name: 'Xbox Series X / S', price: '$300-500', best: 'Game Pass subscription ($17/mo) gives access to 400+ games. Great value. Less family-focused than Switch.', good: 'Best per-dollar value with Game Pass.' },
  { name: 'Steam Deck (handheld PC)', price: '$400-650', best: 'For older teens / college kids who play PC games. Plays Steam library on the go.', good: 'Niche — for serious gamers.' },
  { name: 'Apple TV + Apple Arcade', price: '$140 + $7/mo', best: 'Cheapest. Simple games on your TV. No mature content. Subscription includes 200+ games.', good: 'For non-gamer households who want basic family fun.' },
  { name: 'Tablet with games', price: '$60+', best: 'For ages 3-7. Educational games on Fire HD or iPad.', good: 'Avoid in-app purchases.' },
];

export default function GameConsoleGiftGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Game Console Gift Guide for Grandkids | TekSure" description="Switch, PlayStation, Xbox, Steam Deck. Plain-English picks for which console fits which grandkid age and family budget." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Game Console Gift Guide</h1>
          <p className="text-lg text-muted-foreground">Match grandkid to console.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Always ask the parent first</h2>
            <p className="text-sm">Major gaming console = big commitment in screen time, accessories, possible subscriptions, online interactions. Get parent\'s blessing first. Some prefer Switch (family-friendly); others have rules against shooters.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {CONSOLES.map(c => (
            <Card key={c.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="text-sm font-semibold text-primary">{c.price}</span>
                </div>
                <p className="text-sm mb-1">{c.best}</p>
                <p className="text-sm text-muted-foreground">{c.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don\'t forget the extras</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Extra controller</strong> — for siblings/friends to play.</li>
              <li><strong>Online subscription</strong> — Switch ($20-40/yr), PS Plus ($80/yr), Xbox Game Pass ($120/yr).</li>
              <li><strong>Game gift cards</strong> — let the kid pick their own game.</li>
              <li><strong>Parental controls</strong> — set in console settings; limit screen time, set spending limits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Game age ratings (ESRB)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>E (Everyone)</strong> — fine for any age.</li>
              <li><strong>E10+</strong> — ages 10 and up.</li>
              <li><strong>T (Teen)</strong> — ages 13+. Mild violence/language.</li>
              <li><strong>M (Mature)</strong> — 17+. Significant violence, sometimes sexual content. Most "Call of Duty" and "Grand Theft Auto" titles.</li>
            </ul>
            <p className="text-sm mt-2">Talk to the parent about whether M-rated games are okay before gifting.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Easiest gift</h3>
            <p className="text-sm text-muted-foreground">A <strong>$50 game gift card</strong> for the console they already have. Lets them pick what they actually want. Way better than guessing a specific game and being wrong.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
