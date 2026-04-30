import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorBookClubsOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Book Clubs for Seniors | TekSure" description="Join virtual book clubs from home. Goodreads, Reese&apos;s Book Club, BookBub for senior readers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Book Clubs</h1>
          <p className="text-lg text-muted-foreground">Read + discuss with others.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Goodreads</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free reading community — 100M users.</li>
              <li>Track books read.</li>
              <li>Read reviews + ratings.</li>
              <li>Join groups by genre/topic.</li>
              <li>Owned by Amazon.</li>
              <li>Best for casual reading tracking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">BookBub</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free e-book deal alerts.</li>
              <li>Daily email with discounted books.</li>
              <li>Often $0.99 or $2.99 deals.</li>
              <li>Pick genres you like.</li>
              <li>Build a library cheap.</li>
              <li>Senior favorites in mystery, romance, thriller.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Celebrity book clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reese&apos;s Book Club — Reese Witherspoon picks.</li>
              <li>Oprah&apos;s Book Club — long-running.</li>
              <li>Jenna Hager (Today Show).</li>
              <li>Read along with millions.</li>
              <li>Free to follow.</li>
              <li>Books typically uplifting + thought-provoking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library book clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local library hosts free clubs.</li>
              <li>Often Zoom + in-person hybrid.</li>
              <li>Senior-specific clubs available.</li>
              <li>Free books for members sometimes.</li>
              <li>Discussion led by librarian.</li>
              <li>Make new local friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Virtual book clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Behind the Bookshelf, Modern Mrs Darcy.</li>
              <li>Tea Reads — international tea + book pairings.</li>
              <li>Senior Reads — over-55 specific.</li>
              <li>Often free to join.</li>
              <li>Monthly Zoom discussions.</li>
              <li>International perspectives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start your own</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Round up 5–10 friends.</li>
              <li>Pick monthly book.</li>
              <li>Meet via Zoom or in person.</li>
              <li>Take turns picking books.</li>
              <li>Wine + cheese gatherings.</li>
              <li>Stronger connection than online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Library book club is the gold</h3>
            <p className="text-sm text-muted-foreground">Most local libraries host free senior book clubs. Combines social interaction with mental engagement. Books often free or library has copies. Discussion led by librarian. Friendships form. Beats online-only clubs. Visit your library this week and ask. Combined with Libby for free reading, you have a complete free reading lifestyle.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
