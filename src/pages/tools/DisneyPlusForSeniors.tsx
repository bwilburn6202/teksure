import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function DisneyPlusForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Disney+ for Seniors | TekSure" description="Disney+ explained for seniors. Plain-English streaming guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Disney+</h1>
          <p className="text-lg text-muted-foreground">Classic films, Marvel, Star Wars, and more.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic Disney animated films.</li>
              <li>Pixar movies (Toy Story, Finding Nemo).</li>
              <li>Marvel superhero series + movies.</li>
              <li>Star Wars everything.</li>
              <li>National Geographic documentaries.</li>
              <li>Disney Channel originals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Basic (with ads) — $7.99/month.</li>
              <li>Premium (no ads) — $13.99/month.</li>
              <li>Bundle: Disney+ + Hulu + ESPN+ — $14.99/month.</li>
              <li>Annual plans save about 15%.</li>
              <li>No senior discount — watch for promos.</li>
              <li>Cancel anytime — no contract.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to DisneyPlus.com or download app.</li>
              <li>Create account with email.</li>
              <li>Enter credit card or PayPal.</li>
              <li>Download on TV, phone, tablet, computer.</li>
              <li>Sign in on each device.</li>
              <li>Works on Roku, Fire Stick, Apple TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic 1950s–1990s Disney films — nostalgic.</li>
              <li>National Geographic nature docs.</li>
              <li>Holiday specials — Christmas classics.</li>
              <li>Family time with grandkids.</li>
              <li>Ken Burns-style history docs.</li>
              <li>Disney music + sing-alongs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Navigation tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home tab — recommended for you.</li>
              <li>Search icon — type any title.</li>
              <li>Watchlist — add movies to watch later.</li>
              <li>Download for offline — works on phone/tablet.</li>
              <li>Subtitles — CC button during playback.</li>
              <li>Text size — accessibility settings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profiles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Up to 4 profiles per account.</li>
              <li>Each person has own watchlist.</li>
              <li>Kids profile = age-appropriate only.</li>
              <li>Grandkids can have own profile.</li>
              <li>Share with household.</li>
              <li>Not for sharing outside home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it?</h3>
            <p className="text-sm text-muted-foreground">If you have grandkids — yes, Disney+ is a grandparent goldmine. Watch Bambi, Cinderella, Fantasia together. National Geographic alone is worth it for nature lovers. If Marvel and Star Wars don&apos;t interest you, the library may feel thin. Try a free trial first to see if the content matches your taste before committing monthly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
