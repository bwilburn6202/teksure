import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function BookClubsHowToFind() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find Book Clubs for Seniors | TekSure" description="Senior book clubs in person + online. Plain-English finder guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find Book Clubs</h1>
          <p className="text-lg text-muted-foreground">Reading + friends + brain exercise.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Library</strong> — most have multiple clubs.</li>
              <li><strong>Senior centers</strong>.</li>
              <li><strong>Bookstore-hosted</strong> (Barnes &amp; Noble).</li>
              <li><strong>Church/temple book clubs</strong>.</li>
              <li><strong>Neighborhood / friend group</strong>.</li>
              <li><strong>Meetup.com</strong> — search book clubs.</li>
              <li>Free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Reese Witherspoon&apos;s Book Club</strong> — large following.</li>
              <li><strong>Oprah&apos;s Book Club</strong>.</li>
              <li><strong>Goodreads groups</strong> — thousands.</li>
              <li><strong>NYT Book Review podcast/club</strong>.</li>
              <li><strong>Kindle reading groups</strong>.</li>
              <li><strong>OurShelves</strong> — Facebook book groups.</li>
              <li>FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-themed clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many libraries have 50+ specific clubs.</li>
              <li>Slower pace — meets monthly.</li>
              <li>Mix of fiction + nonfiction.</li>
              <li>Mostly women but men welcome.</li>
              <li>Some daytime + senior-friendly hours.</li>
              <li>Quiet, thoughtful discussion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start your own</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Invite 4-8 friends.</li>
              <li>Meet monthly.</li>
              <li>Rotate hosts.</li>
              <li>Pick book together.</li>
              <li>2-hour meeting typical.</li>
              <li>Wine + snacks optional.</li>
              <li>Books often $15-20 (or library copies free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discussion guides FREE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major books have publisher discussion guides.</li>
              <li>LitLovers.com.</li>
              <li>Book clubs in libraries provide.</li>
              <li>Pick 5-10 deep questions per meeting.</li>
              <li>Don&apos;t need professor — just read + share.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Brain + social benefits</h3>
            <p className="text-sm text-muted-foreground">Book clubs = reading exercise + social connection + cognitive challenge. Studies link to brain health. Plus deep friendships form. Many seniors&apos; favorite social activity. Discussion expands thinking. Try one.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
