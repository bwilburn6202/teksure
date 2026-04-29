import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'Goodreads', cost: 'FREE', best: 'Largest book community. Track reading. Reviews. Recommendations.', good: 'Best overall.' },
  { name: 'StoryGraph', cost: 'FREE / $50/yr Plus', best: 'Better stats than Goodreads. Mood + pace filtering.', good: 'Best for stats.' },
  { name: 'Bookly', cost: '$30/yr', best: 'Senior-friendly. Track reading time + speed.', good: 'Best premium.' },
  { name: 'Libby (library)', cost: 'FREE with library card', best: 'Free audiobooks + ebooks. Senior favorite.', good: 'Best free reading.' },
  { name: 'Hoopla (library)', cost: 'FREE with library card', best: 'Same library partnership. Different selection.', good: 'Best 2nd library.' },
];

export default function BookClubAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Book Club Apps for Seniors | TekSure" description="Goodreads, StoryGraph, library apps. Plain-English picks for senior book clubs + reading communities." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Book Club Apps</h1>
          <p className="text-lg text-muted-foreground">Read together. Share thoughts.</p>
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
            <h2 className="font-bold text-xl mb-3">Find a book club</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local library — most have multiple. Free.</li>
              <li>Senior centers — popular activity.</li>
              <li>Faith community book group.</li>
              <li>Meetup app — search "book club" + zip.</li>
              <li>Goodreads "groups" feature — online global clubs.</li>
              <li>Reese&apos;s + Oprah&apos;s clubs — official monthly picks.</li>
              <li>NYT, NPR weekly book recommendations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online book clubs (no commute)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zoom meetings — most book clubs offer.</li>
              <li>Goodreads global groups — by genre / decade.</li>
              <li>Bookclubs.com — host online.</li>
              <li>Discord — for younger crowd.</li>
              <li>Reddit r/bookclub.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior reading benefits</h3>
            <p className="text-sm text-muted-foreground">Reading 30 min/day = lower stress, better sleep, slower cognitive decline (research shows). Audiobooks count. Library = FREE forever. No reason not to read.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
