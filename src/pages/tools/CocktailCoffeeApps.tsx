import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

const APPS = [
  { name: 'Mixel / Cocktail Flow', cost: 'Free; $3-7 Premium', best: 'Recipe library. Filter by what bottles you have.', good: 'Best home bartender.' },
  { name: 'Pirate\'s Grog Diary', cost: 'Free', best: 'Track your home bar inventory.', good: 'For collectors.' },
  { name: 'Pinterest', cost: 'FREE', best: 'Endless cocktail and coffee recipes. Visual inspiration.', good: 'Always free.' },
  { name: 'James Hoffmann YouTube', cost: 'FREE', best: 'World\'s best coffee channel. Honest, funny, deep.', good: 'Best free coffee learning.' },
  { name: 'Beanmark / Sprudge', cost: 'FREE/web', best: 'Find specialty coffee shops + roasters.', good: 'Coffee aficionados.' },
  { name: 'Trade Coffee', cost: 'Subscription', best: 'Specialty coffee delivered. Match to your taste.', good: 'Best discovery.' },
  { name: 'Brewer\'s Friend', cost: 'Free', best: 'For homebrewing beer.', good: 'Beer hobby.' },
  { name: 'CO Boil / Brewfather', cost: '$30-100/yr', best: 'Serious homebrew tracking.', good: 'For dedicated brewers.' },
];

export default function CocktailCoffeeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cocktail & Coffee Apps for Hobbyists | TekSure" description="Home bartending, espresso making, coffee roasting, beer homebrewing. Plain-English picks for every drink-making hobby." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cocktail & Coffee Apps</h1>
          <p className="text-lg text-muted-foreground">Bartending, espresso, homebrewing — at home.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home bartending starter kit</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Boston shaker set ($20-30).</li>
              <li>Jigger ($5-15).</li>
              <li>Bar spoon ($5).</li>
              <li>5-6 bottles to start: gin, vodka, bourbon, vermouth, bitters, simple syrup.</li>
              <li>Citrus juicer.</li>
              <li>Ice mold for big cubes.</li>
              <li>Total: ~$200 to make 50+ classic cocktails.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialty coffee starter</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Burr grinder ($150-300) — biggest single quality difference.</li>
              <li>Kettle with temperature control ($60-100).</li>
              <li>Pour-over (Hario V60 or Chemex) — $20-40.</li>
              <li>Scale ($25).</li>
              <li>Fresh whole-bean coffee from Trade or local roaster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sourdough hobbyist?</h3>
            <p className="text-sm text-muted-foreground">"The Perfect Loaf" website has the best free sourdough guide. Pair with King Arthur Flour\'s recipe library. Get a kitchen scale ($25), a Dutch oven ($40), and a sourdough starter (or buy one online for $10). Bread for life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
