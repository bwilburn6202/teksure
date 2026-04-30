import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookHeart } from 'lucide-react';

export default function DayOneJournalApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Day One Journal App for Seniors | TekSure" description="Best journaling app for senior writers. Day One features, privacy, photo integration." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Day One</h1>
          <p className="text-lg text-muted-foreground">Beautiful daily journal app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily journal — type, photo, voice memo.</li>
              <li>Auto-tags location + weather.</li>
              <li>Free with optional Premium ($35/year).</li>
              <li>Most beautiful journal interface.</li>
              <li>End-to-end encrypted.</li>
              <li>Available iPhone, Mac, Web.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily gratitude practice.</li>
              <li>Travel diary — auto-tagged with locations.</li>
              <li>Health journal — track symptoms.</li>
              <li>Memory keeper — preserve thoughts.</li>
              <li>Family stories for grandchildren.</li>
              <li>Therapeutic for grief, retirement transitions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memories feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shows entries from same date previous years.</li>
              <li>&quot;On this day 5 years ago...&quot;</li>
              <li>Brings up forgotten moments.</li>
              <li>Especially meaningful for seniors.</li>
              <li>Reflect on life journey.</li>
              <li>Some say their best feature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Premium features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Unlimited journals.</li>
              <li>Multiple devices sync.</li>
              <li>PDF + photo book exports.</li>
              <li>Voice transcription.</li>
              <li>Print your journal as physical book.</li>
              <li>$35/year worth it for serious journalers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>End-to-end encrypted on Premium.</li>
              <li>Even Day One can&apos;t read your journal.</li>
              <li>Private password lock.</li>
              <li>Face ID protection.</li>
              <li>Your thoughts stay private.</li>
              <li>Best privacy of any journaling app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Notes — basic but works.</li>
              <li>Google Keep — quick notes.</li>
              <li>Journey — Android-friendly.</li>
              <li>Penzu — simple online diary.</li>
              <li>Microsoft Word — old-school document.</li>
              <li>Pen + paper still works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with 3 sentences daily</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t commit to long entries. Start with 3 sentences each evening: 1) Best moment today. 2) Something you learned. 3) Something you&apos;re grateful for. Day One Free is plenty for this. After a year you&apos;ll have 1,000+ sentences chronicling your life — priceless. Combine with morning coffee photo for visual memories.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
