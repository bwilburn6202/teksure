import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const APPS = [
  { name: 'Gratitude (app)', cost: 'FREE / $40/yr', best: 'Most popular. Daily prompts. Senior-friendly.', good: 'Best overall.' },
  { name: 'Day One Journal', cost: '$3/mo', best: 'Beautiful + photos. Apple favorite.', good: 'Best journaling.' },
  { name: 'Five Minute Journal', cost: '$5', best: 'Morning + night gratitude prompts.', good: 'Best minimalist.' },
  { name: 'Presently', cost: 'FREE', best: 'Free. Simple. Privacy-focused.', good: 'Best free.' },
  { name: 'Paper journal', cost: '$5-15', best: 'No screen. Permanent record. Senior favorite.', good: 'Best old-school.' },
];

export default function GratitudePracticeApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gratitude Practice for Seniors | TekSure" description="Daily gratitude = proven happiness boost. Plain-English app + paper picks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gratitude Practice</h1>
          <p className="text-lg text-muted-foreground">5 minutes daily = happier life. Proven.</p>
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
            <h2 className="font-bold text-xl mb-3">Why it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Studies: 2-week practice = lasting happiness boost.</li>
              <li>Lowers depression scores.</li>
              <li>Better sleep.</li>
              <li>Stronger relationships.</li>
              <li>Lower BP.</li>
              <li>Especially helps grieving seniors.</li>
              <li>Free brain medicine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Simple practice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Write 3 things grateful for daily.</li>
              <li>Be specific — &quot;hot coffee on cold morning&quot; vs &quot;coffee.&quot;</li>
              <li>Different things each day.</li>
              <li>Same time daily — morning or before bed.</li>
              <li>5 minutes max.</li>
              <li>Read past entries when sad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Variations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gratitude letter</strong> — write to someone who helped you. Don&apos;t send (or do).</li>
              <li><strong>Gratitude visit</strong> — read letter to person.</li>
              <li><strong>Three good things</strong> — at dinner with family.</li>
              <li><strong>Gratitude jar</strong> — write notes, read at New Year.</li>
              <li><strong>Photo gratitude</strong> — photograph something good daily.</li>
              <li><strong>Voice memo</strong> — speak instead of write.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Yale class</h3>
            <p className="text-sm text-muted-foreground"><strong>Science of Well-Being</strong> on Coursera — Yale&apos;s most popular course ever. Free audit. Teaches gratitude + happiness research. Life-changing for many seniors. <strong>Greater Good Science Center</strong> — UC Berkeley free resources. Skip self-help books — research-backed practices best.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
