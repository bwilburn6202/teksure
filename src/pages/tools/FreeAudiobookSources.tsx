import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function FreeAudiobookSources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Audiobook Sources for Seniors | TekSure" description="Skip Audible. Free audiobooks from libraries, NLS, Librivox. Plain-English for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FREE Audiobooks</h1>
          <p className="text-lg text-muted-foreground">Stop paying $15/mo Audible.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library apps (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Libby</strong> — see /tools/libby-app-for-seniors.</li>
              <li><strong>Hoopla</strong> — different selection, instant.</li>
              <li><strong>OverDrive</strong> — older version (use Libby instead).</li>
              <li>Both = library card required (FREE).</li>
              <li>Listen on phone, tablet, computer.</li>
              <li>Auto-returns. No late fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NLS (free for vision/print disability)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>National Library Service for the Blind</strong> — Library of Congress.</li>
              <li>Free audiobooks + Braille.</li>
              <li>Eligible: blind, low vision, reading disability, physical inability to hold book.</li>
              <li>Doctor signs application form.</li>
              <li>Mailed CD player + cartridges. OR app for smartphones.</li>
              <li>HUGE selection — 100K+ titles.</li>
              <li>Apply at loc.gov/nls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Librivox (public domain free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Librivox.org</strong> — volunteer-narrated classics.</li>
              <li>Public domain — Mark Twain, Dickens, Shakespeare, all free.</li>
              <li>Quality varies — some narrators excellent.</li>
              <li>No app needed — download MP3s.</li>
              <li>50,000+ free audiobooks.</li>
              <li>Donation suggested but not required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audiobook samplers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Audible free trial</strong> — 30 days + 1 free audiobook.</li>
              <li><strong>Spotify Premium</strong> — now includes 15 hrs/mo audiobook listening (with subscription).</li>
              <li><strong>YouTube</strong> — many full audiobooks (legality varies).</li>
              <li><strong>Project Gutenberg</strong> — free ebooks (text-to-speech).</li>
              <li><strong>Loyal Books</strong> — public domain audiobooks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly listening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bluetooth speaker for hands-free listening.</li>
              <li>Sleep timer — won&apos;t miss progress if dozing.</li>
              <li>Slow playback (0.75x) for complex books.</li>
              <li>Speed up (1.25x) for simple genre fiction.</li>
              <li>Bookmark favorite passages.</li>
              <li>Hearing aids with Bluetooth = direct streaming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you DO pay for Audible</h3>
            <p className="text-sm text-muted-foreground">Get $7.95/mo Audible Plus Catalog (cheaper plan, smaller selection but unlimited). Or Audible Premium $14.95/mo with 1 credit + Plus catalog. Cancel anytime — they&apos;ll often offer 50% off to retain. Many seniors don&apos;t need it once they discover free library options.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
