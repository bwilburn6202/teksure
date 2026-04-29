import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

const APPS = [
  { name: 'Libby (free with library card)', cost: 'FREE', best: 'Free audiobooks AND ebooks from your local library. Best free option, period.', good: 'Best overall.' },
  { name: 'Hoopla (free with library card)', cost: 'FREE', best: 'Same idea — library partnership. Different selection than Libby. Use both.', good: 'Bigger combined catalog.' },
  { name: 'Audible (Amazon)', cost: '$15/mo (1 credit/mo)', best: 'Biggest catalog. Best app. Whispersync with Kindle. 30-day free trial.', good: 'Best paid.' },
  { name: 'Spotify (with Premium)', cost: '$12/mo', best: 'Includes 15 hours/month of audiobooks free. Mostly bestsellers.', good: 'Best if you already pay for Spotify.' },
  { name: 'Apple Books', cost: 'Buy per book', best: 'Built into iPhone/iPad. No subscription. Buy individual titles ($5-25).', good: 'Best if you only listen sometimes.' },
  { name: 'Chirp', cost: 'Buy per book ($1-7)', best: 'Daily audiobook deals — limited-time offers. Owned by BookBub.', good: 'Best for cheap finds.' },
];

export default function AudiobookApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audiobook Apps — Free and Paid | TekSure" description="Listen to books while gardening, walking, driving. Plain-English picks for free library audiobooks and the best paid apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audiobook Apps</h1>
          <p className="text-lg text-muted-foreground">Read while walking, driving, gardening.</p>
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
            <h2 className="font-bold text-xl mb-3">Library cards make audiobooks free</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get a free library card from your local library (in-person OR many libraries do online sign-up).</li>
              <li>Download Libby app + Hoopla app.</li>
              <li>Tap "Add Library Card". Enter card number.</li>
              <li>Search any book. Borrow. It downloads. Listen.</li>
              <li>3-week loans, auto-return.</li>
              <li>$0 forever.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for better listening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjust speed — most apps allow 0.8x to 2x. 1.1x or 1.2x speeds up without sounding chipmunky.</li>
              <li>Sleep timer — most apps have one. Pause after 15 min.</li>
              <li>Bluetooth headphones (or AirPods) keep cord out of way.</li>
              <li>Bluetooth in your car connects audiobook to car speakers automatically.</li>
              <li>Bookmark a spot — long-press the playback bar in most apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audible vs Library</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Library</strong> — free, but waits 1-12 weeks for popular new books.</li>
              <li><strong>Audible</strong> — $15/month, instant access, you own the credit.</li>
              <li>Many people use Library for older books, Audible only for new releases they can&apos;t wait for.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For low vision or fading eyesight</h3>
            <p className="text-sm text-muted-foreground">If reading print is hard, ask your library about <strong>BARD</strong> (Braille and Audio Reading Download) — a free service from the Library of Congress for people with vision loss. Tens of thousands of audiobooks. Doctor or librarian can certify eligibility.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
