import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function LibbyAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Libby App for Seniors | TekSure" description="Free ebooks + audiobooks from your library. Plain-English Libby setup for senior readers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Libby App for Seniors</h1>
          <p className="text-lg text-muted-foreground">FREE ebooks + audiobooks from your library.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Libby?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE app from your library.</li>
              <li>Borrow ebooks + audiobooks digitally.</li>
              <li>No late fees — auto-returns.</li>
              <li>Read on phone, tablet, Kindle, or computer.</li>
              <li>Most US libraries support Libby.</li>
              <li>Save hundreds/year vs Audible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (5 minutes)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get library card from local library (FREE).</li>
              <li>Download Libby app (App Store / Google Play).</li>
              <li>Open app → search your library.</li>
              <li>Type library card number + PIN.</li>
              <li>Done — start browsing.</li>
              <li>Add multiple library cards (some allow non-residents).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Multiple library cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Some libraries offer FREE non-resident cards.</li>
              <li><strong>NYPL</strong> (New York Public Library) — free cards for any state, sometimes.</li>
              <li><strong>Brooklyn Public Library</strong> — paid non-resident cards $50/yr.</li>
              <li>Multiple cards = bigger book selection + shorter wait times.</li>
              <li>Each card adds 5-10 new holds.</li>
              <li>Spouse&apos;s card too — double access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjust font size — large text easy.</li>
              <li>Change to dark mode (less eye strain).</li>
              <li>Audiobook playback — speed up/down.</li>
              <li>Sleep timer for audiobooks.</li>
              <li>Bookmark, highlight, take notes.</li>
              <li>Sync across devices automatically.</li>
              <li>Send books to Kindle for reading.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How holds work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Popular books have wait lists.</li>
              <li>Place hold — get notified when available.</li>
              <li>Borrow up to 10 books at once usually.</li>
              <li>3-week loan period typical.</li>
              <li>Automatic return — no late fees ever.</li>
              <li>&quot;Tag&quot; books to track favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other library apps</h3>
            <p className="text-sm text-muted-foreground"><strong>Hoopla</strong> — videos + music + comics + audiobooks. <strong>Kanopy</strong> — free movies (especially documentaries + classic). <strong>Flipster</strong> — free magazines (Time, People, Better Homes). All FREE with library card. See /tools/hoopla-for-seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
