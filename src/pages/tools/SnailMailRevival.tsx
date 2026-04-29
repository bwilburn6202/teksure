import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SnailMailRevival() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snail Mail Revival for Seniors | TekSure" description="Real letters from grandparent = treasure. Plain-English picks for letter writing in 2025." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snail Mail Revival</h1>
          <p className="text-lg text-muted-foreground">Real letters = real impact.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why send real mail</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Treasured forever — adult kids find letters in boxes 30 years later.</li>
              <li>Cursive — kids haven&apos;t seen!</li>
              <li>Stands out from email + text noise.</li>
              <li>Slower pace = more thought.</li>
              <li>Tactile — physical artifact.</li>
              <li>Best for: birthday, sympathy, encouragement, just because.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Letter ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birthday letter — share memory of when grandkid was born.</li>
              <li>Story from when their parent was a kid.</li>
              <li>"What I learned at your age."</li>
              <li>Random encouragement — no occasion.</li>
              <li>Thank-you for visit.</li>
              <li>Pressed flower from your garden inside.</li>
              <li>Photo from family album with note explaining.</li>
              <li>Recipe in your handwriting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best mail tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Postable</strong> — type message + photo + they print + mail. $2-3/card.</li>
              <li><strong>Touchnote</strong> — phone photo to postcard. $3-5.</li>
              <li><strong>Ink + paper</strong> — old school. Nothing better.</li>
              <li><strong>USPS Forever stamps</strong> — never expire.</li>
              <li><strong>Address book app</strong> — keep all addresses in one place.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make it routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 letter / week. Different recipient each.</li>
              <li>Sunday afternoon = letter time. Coffee + paper + pen.</li>
              <li>Build inventory of stamps + cards.</li>
              <li>Don&apos;t wait for occasion — random letters most powerful.</li>
              <li>Within a year — every family member has 4-5 letters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">PostalPals + StoryWorth</h3>
            <p className="text-sm text-muted-foreground">PostalPals — pen pal matching for seniors. StoryWorth — turns letter-stories into bound book at end of year. Both make letter habit fulfilling + lasting.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
