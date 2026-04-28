import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ChevronRight, ExternalLink } from 'lucide-react';

type Step = 'choose' | 'unbox' | 'use' | 'borrow';

const TABS: { id: Step; label: string }[] = [
  { id: 'choose', label: '1. Pick the right Kindle' },
  { id: 'unbox',  label: '2. First-time setup' },
  { id: 'use',    label: '3. Get books' },
  { id: 'borrow', label: '4. Borrow free books' },
];

const KINDLE_MODELS = [
  {
    name: 'Kindle (basic, 11th gen)',
    price: '$110',
    bestFor: 'Most people, most of the time. Smaller, lighter, works great.',
    pros: ['Cheapest', 'Lightweight, hold-it-all-day', '6-week battery'],
    cons: ['Smaller 6" screen', 'No waterproofing'],
  },
  {
    name: 'Kindle Paperwhite',
    price: '$160',
    bestFor: 'Bookworms who read for hours. Larger screen, faster page turns.',
    pros: ['Bigger 6.8" screen', 'Adjustable warm light (less harsh at bedtime)', 'Waterproof', '10-week battery'],
    cons: ['$50 more than basic'],
  },
  {
    name: 'Kindle Scribe',
    price: '$340',
    bestFor: 'Reading + note-taking. Great for hobbyists who annotate.',
    pros: ['10.2" screen — close to a notebook page', 'Stylus included for handwritten notes', 'Best for technical or study reading'],
    cons: ['Heavier', 'Most expensive'],
  },
];

const SETUP_STEPS = [
  { title: 'Charge it for an hour first', detail: 'New devices ship with low battery. Plug in with the included USB-C cable while you do the rest of the setup.' },
  { title: 'Power on (button on top edge)', detail: 'Welcome screen appears in 30 seconds. Pick your language.' },
  { title: 'Connect to Wi-Fi', detail: 'Pick your home network. Enter the password — same one as your phone.' },
  { title: 'Sign in to Amazon', detail: 'Use your existing Amazon account email and password. Have not got one? Create it free at amazon.com first.' },
  { title: 'Pick your settings', detail: 'Skip "social" for privacy. Skip "kids profile" unless setting up for a grandchild. Pick a font size that is comfortable.' },
  { title: 'Done — open the home screen', detail: 'Tap the Home button (looks like a house). Your Amazon library appears, plus suggested books.' },
];

const TIPS = [
  { title: 'Adjust text size + font any time', detail: 'When reading, tap top of screen → Aa → text size, font, line spacing. Save 10 minutes of squinting.' },
  { title: 'Send PDFs and documents', detail: 'Email any PDF or Word doc to your Send-to-Kindle address (find it in Amazon → Manage Content & Devices → Settings). Arrives on your Kindle in seconds.' },
  { title: 'Built-in dictionary', detail: 'Hold a finger on any word — definition pops up. No more putting the book down to look something up.' },
  { title: 'Adjust warm light at night', detail: 'Paperwhite + Scribe — slide the warmth bar at top of screen → warmer = orange tint that is easier on eyes before bed.' },
  { title: 'Sample any book free', detail: 'Tap "Read Sample" before buying — usually 10% of the book. Better than buying and regretting.' },
];

export default function KindleSetup() {
  const [tab, setTab] = useState<Step>('choose');

  return (
    <>
      <SEOHead
        title="Kindle Setup Helper"
        description="Pick the right Kindle (basic vs Paperwhite vs Scribe), set it up step by step, get free books from your library through Libby, and read like a pro."
        path="/tools/kindle-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-yellow-50 via-background to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <BookOpen className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Kindle Setup Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the right Kindle, set it up, get books — free or paid. The complete starter guide.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Kindle Setup' }]} />

          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  tab === t.id ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'choose' && (
            <div className="space-y-3">
              {KINDLE_MODELS.map(m => (
                <Card key={m.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <p className="font-semibold text-base">{m.name}</p>
                      <Badge variant="outline">{m.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {m.bestFor}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                        <ul className="space-y-0.5">
                          {m.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                        <ul className="space-y-0.5">
                          {m.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {tab === 'unbox' && (
            <Card className="border-border">
              <CardContent className="p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
                <ol className="space-y-3">
                  {SETUP_STEPS.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {tab === 'use' && (
            <>
              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">How to buy a book</p>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary font-semibold">1.</span><span>From the Kindle home screen, tap the bag icon (top-right) → Kindle Store.</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">2.</span><span>Search for a book or browse bestsellers.</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">3.</span><span>Tap "Buy Now" → confirm with your Amazon password if asked.</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">4.</span><span>Book downloads in 30 seconds and shows up on your home screen.</span></li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five tips that change reading</p>
                  <div className="space-y-3">
                    {TIPS.map((t, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm">{t.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {tab === 'borrow' && (
            <>
              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Free books through your library — Libby</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    The single best kept secret. Most US libraries lend Kindle e-books and audiobooks free through the Libby app. Almost the same selection you would buy on Amazon.
                  </p>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary font-semibold">1.</span><span>Install "Libby" on your phone or tablet (not on the Kindle directly).</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">2.</span><span>Sign in with your library card number and PIN.</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">3.</span><span>Search any book → tap "Borrow" → choose "Read with Kindle".</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">4.</span><span>It opens Amazon, you click "Get Library Book", and it shows up on your Kindle in seconds.</span></li>
                    <li className="flex gap-2"><span className="text-primary font-semibold">5.</span><span>Auto-returns at the end of the loan — no late fees, ever.</span></li>
                  </ol>
                  <a href="https://libbyapp.com" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                    libbyapp.com <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Other free sources</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Project Gutenberg:</strong> 70,000+ classic books out of copyright. Send to your Kindle for free at gutenberg.org.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Kindle Unlimited:</strong> $12/mo, like Netflix for books. Free 30-day trial. Worth a month if you read more than 4 books.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Free Kindle Daily Deals:</strong> amazon.com/kindle-dbs/storefront/freebooks — refreshed daily.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Six free apps your library card unlocks.</p>
              </Link>
              <Link to="/tools/podcast-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Podcast Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">For audiobooks-by-another-name.</p>
              </Link>
              <Link to="/tools/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make any device easier to read.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
