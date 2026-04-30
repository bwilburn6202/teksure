import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookText } from 'lucide-react';

const APPS = [
  { name: 'Kindle (Amazon)', cost: 'Free app; books $5-15 each', best: 'Largest e-book selection. Plays nice with Libby (library books).', good: 'Read on Kindle device, iPad, or phone — synced across all.' },
  { name: 'Apple Books', cost: 'Free app; books $5-15', best: 'Beautiful interface on iPhone, iPad, Mac. Free public-domain classics included.', good: 'Best for iOS-only readers.' },
  { name: 'Libby (library)', cost: 'FREE', best: 'Free e-books from your local library. Sync to Kindle device. (See our Libby Helper.)', good: 'Best free option overall.' },
  { name: 'Pocket', cost: 'Free; $5/mo Premium', best: '"Save for later" — clip articles to read offline. Cleans up the layout. Read on phone or computer.', good: 'Best for the "20 open browser tabs" reader.' },
  { name: 'Instapaper', cost: 'Free; $30/yr Premium', best: 'Same as Pocket. Some prefer Instapaper\'s minimal design.', good: 'Either is fine; pick one.' },
  { name: 'Readwise', cost: '$8/mo', best: 'For serious readers — surfaces your old highlights from Kindle and Pocket so you actually remember what you read.', good: 'Best for non-fiction readers.' },
  { name: 'Apple News+ / NYT / Bloomberg', cost: '$10-25/mo', best: 'Hundreds of magazines and newspapers in one subscription.', good: 'Often free with Medicare Advantage or Verizon Wireless plans.' },
];

export default function ReadingAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reading App Picker — Kindle, Apple Books, Pocket | TekSure" description="E-books, library borrows, save-for-later articles. The best reading apps and how to use them well." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reading App Picker</h1>
          <p className="text-lg text-muted-foreground">E-books, articles, magazines — all on one device.</p>
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
            <h2 className="font-bold text-xl mb-3">Why an e-reader (Kindle Paperwhite) over phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Easier on the eyes</strong> — e-ink screen mimics paper, no glare, no blue light.</li>
              <li><strong>Battery</strong> — 6-8 weeks per charge.</li>
              <li><strong>No notifications</strong> — single-purpose device. Less distraction.</li>
              <li><strong>Waterproof</strong> — read by the pool or in the bath.</li>
              <li><strong>Adjustable text size</strong> — bigger than any printed book.</li>
              <li><strong>$140 for a Kindle Paperwhite</strong> — less than 12 hardcovers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to find cheap or free books</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Libby</strong> — your library, free.</li>
              <li><strong>BookBub email</strong> — daily list of $0-3 e-book deals on best-sellers.</li>
              <li><strong>Project Gutenberg</strong> — 70,000 free public-domain classics.</li>
              <li><strong>Kindle Unlimited</strong> ($12/mo) — Netflix-style subscription, big rotating library.</li>
              <li><strong>Hoopla</strong> — free e-books from your library, no waitlists.</li>
              <li><strong>Amazon\'s "Daily Deals"</strong> — $1-3 ebooks every day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">If you already use Kindle, install <strong>Libby</strong> next. When you borrow from Libby, choose "Send to Kindle" — the library book lands on your Kindle automatically. The two apps work beautifully together.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
