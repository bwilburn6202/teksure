import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Library } from 'lucide-react';

const APPS = [
  { name: 'Goodreads', cost: 'FREE (Amazon-owned)', best: 'Biggest book community. Reading goals, reviews, friends\' bookshelves. Recommendation engine.', good: 'Most book clubs use it.' },
  { name: 'StoryGraph', cost: 'FREE; $5/mo Plus', best: 'Goodreads alternative. Better mood/genre filters, more accurate recommendations. Indie-owned.', good: 'Best alternative for those who don\'t want Amazon.' },
  { name: 'LibraryThing', cost: 'FREE up to 200 books; $25 lifetime unlimited', best: 'Catalog every book you own. Detailed.', good: 'For serious librarians.' },
  { name: 'Bookly', cost: '$30/year', best: 'Reading timer — track how long you spent on each book. Rewards reading habit.', good: 'For habit builders.' },
  { name: 'Apple Books reading goals', cost: 'FREE on iPhone', best: 'Built-in. Pages per day, books per year. Simple.', good: 'No app needed if you use Apple Books.' },
];

export default function BookTrackingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Book Tracking Apps — Goodreads, StoryGraph | TekSure" description="Track what you\'ve read, set yearly goals, find your next book. Plain-English picks for book tracking apps and book club tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Library className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Book Tracking Apps</h1>
          <p className="text-lg text-muted-foreground">"What was that great book I read in 2018?" — answered.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (Goodreads as example)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Goodreads</strong> from App Store / Play Store.</li>
              <li>Sign in with email or Amazon account.</li>
              <li>Set a yearly reading goal — try 12 books your first year.</li>
              <li>"Want to Read" — your wishlist. Add books as friends recommend them.</li>
              <li>"Currently Reading" — what you\'re on now.</li>
              <li>"Read" — finished books. Rate them 1-5 stars.</li>
              <li>Connect with family / friends to see what they\'re reading.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Book club tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Goodreads Groups</strong> — make a private group for your book club, schedule reads, post questions.</li>
              <li><strong>Local library book clubs</strong> — most libraries run free in-person clubs. Different genre each month.</li>
              <li><strong>Bookshop.org</strong> — buy books, supports local independent bookstores.</li>
              <li><strong>Libby Bingo / Reading Challenge</strong> — many libraries offer fun yearly challenges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best feature: "What did I read in 2019?"</h3>
            <p className="text-sm text-muted-foreground">Years from now you\'ll wonder "what was that mystery I loved?". With Goodreads or StoryGraph, the answer is one tap. Worth setting up just for the record.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
