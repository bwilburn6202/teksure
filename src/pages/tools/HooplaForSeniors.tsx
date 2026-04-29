import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function HooplaForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hoopla for Seniors | TekSure" description="Free movies + audiobooks + music from your library. Plain-English Hoopla guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hoopla for Seniors</h1>
          <p className="text-lg text-muted-foreground">FREE movies, music, books — instant.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Hoopla offers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Movies + TV shows</strong> — many classics + indie films.</li>
              <li><strong>Music albums</strong> — borrow full albums.</li>
              <li><strong>Audiobooks</strong> — different selection than Libby.</li>
              <li><strong>Comics + graphic novels</strong>.</li>
              <li><strong>Ebooks</strong> — though Libby usually better for ebooks.</li>
              <li>Total FREE with library card.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (3 minutes)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Hoopla Digital app.</li>
              <li>Sign up with email + password.</li>
              <li>Search for + select your library.</li>
              <li>Enter library card number.</li>
              <li>Set monthly limit (typically 4-12 borrows/mo).</li>
              <li>Start browsing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No wait list — instant access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Unlike Libby — NO HOLDS.</li>
              <li>Click + watch / listen instantly.</li>
              <li>Limit per month (4-12 depending on library).</li>
              <li>Auto-returns at end of loan.</li>
              <li>Fewer total options than Netflix but FREE.</li>
              <li>Great for last-minute movie night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch on TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hoopla app on Roku, Apple TV, Fire TV, Chromecast.</li>
              <li>Cast from phone to TV.</li>
              <li>Smart TVs (Samsung, LG) often have it built-in.</li>
              <li>Browse on tablet → watch on TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic movies (1930s-1980s) — huge selection.</li>
              <li>Older PBS shows.</li>
              <li>Travel documentaries.</li>
              <li>Greatest Generation history.</li>
              <li>Classic country, jazz, big band music.</li>
              <li>Cozy mystery audiobooks.</li>
              <li>Religious + spiritual content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Combine with Libby + Kanopy</h3>
            <p className="text-sm text-muted-foreground">Use ALL three free apps: Libby (best ebooks/audiobooks), Hoopla (instant movies + music), Kanopy (best documentaries + foreign films). Save $30-50/mo vs paid streaming. All FREE with library card. Some libraries also offer Flipster (free magazines).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
