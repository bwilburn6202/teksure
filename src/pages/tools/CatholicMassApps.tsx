import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cross } from 'lucide-react';

const APPS = [
  { name: 'Hallow', cost: 'Free; $7-13/mo Premium', best: 'Best Catholic prayer + meditation app.', good: 'Mark Wahlberg, Jonathan Roumie content.' },
  { name: 'Laudate', cost: 'FREE', best: 'Most comprehensive free Catholic app. Mass readings, rosary, prayers.', good: 'Best free Catholic.' },
  { name: 'iBreviary', cost: 'FREE', best: 'Liturgy of the Hours, missal, prayers in many languages.', good: 'For those praying the Hours.' },
  { name: 'EWTN app', cost: 'FREE', best: 'Live TV/radio. Daily Mass. Catholic news. Audiobooks.', good: 'Best Catholic media.' },
  { name: 'Magnificat', cost: '$30/year', best: 'Beautiful daily readings + reflections. Print and app version.', good: 'Loved by traditional Catholics.' },
  { name: 'Word on Fire', cost: 'Free; Engage subscription', best: 'Bishop Robert Barron\'s daily reflections + library.', good: 'For deep theology.' },
  { name: 'Catholic Mass Times', cost: 'FREE', best: 'Find Mass times, parishes, confession schedules anywhere.', good: 'Travel essential.' },
];

export default function CatholicMassApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Catholic Mass Apps — Hallow, Laudate, EWTN | TekSure" description="Daily Mass readings, rosary, prayer, and Catholic media. Plain-English picks for Catholic apps and streaming." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cross className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Catholic Mass Apps</h1>
          <p className="text-lg text-muted-foreground">Daily Mass, rosary, devotionals.</p>
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
            <h2 className="font-bold text-xl mb-3">Stream Mass live</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Your parish website</strong> — most stream Sunday Mass.</li>
              <li><strong>EWTN</strong> — daily Mass at multiple times.</li>
              <li><strong>Vatican TV</strong> — live papal events and Vatican Mass.</li>
              <li><strong>USCCB.org</strong> — daily Mass readings text + audio.</li>
              <li><strong>"Daily TV Mass"</strong> on YouTube — Toronto-based, broadcast quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For housebound</h3>
            <p className="text-sm text-muted-foreground">A Eucharistic Minister can bring Holy Communion to your home weekly. Call your parish office. Many parishes also visit homebound seniors monthly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
