import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function GreatCoursesPlusReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Great Courses Plus / Wondrium Review for Seniors | TekSure" description="Wondrium (formerly Great Courses Plus) lectures by top professors. Senior favorite." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wondrium</h1>
          <p className="text-lg text-muted-foreground">Top professor lectures streamed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Wondrium?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Formerly The Great Courses Plus.</li>
              <li>$20/month — unlimited streaming.</li>
              <li>Top university professors lecture.</li>
              <li>Curated by Teaching Company.</li>
              <li>3,000+ video lectures.</li>
              <li>Senior favorite for decades.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Topics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>History — every era.</li>
              <li>Science + medicine.</li>
              <li>Music + art appreciation.</li>
              <li>Philosophy.</li>
              <li>Mathematics + computer science.</li>
              <li>Languages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-popular series</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Story of Human Language.</li>
              <li>How the World Looks to a Bee.</li>
              <li>Understanding Russia.</li>
              <li>The History of the Ancient World.</li>
              <li>How Music Works.</li>
              <li>Roughly 24-36 lectures each.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free trial</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>14-day free trial standard.</li>
              <li>Try one full course free.</li>
              <li>Cancel before charged.</li>
              <li>Decide if worth $20/month.</li>
              <li>Annual subscription saves money.</li>
              <li>Often family plan available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Library DVDs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many libraries have Great Courses DVDs.</li>
              <li>Free borrowing.</li>
              <li>Watch on TV — no streaming.</li>
              <li>Same content as Wondrium.</li>
              <li>Senior-friendly approach.</li>
              <li>Save $240/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Better than watching on phone.</li>
              <li>Roku, Apple TV, Fire TV apps.</li>
              <li>Pause + rewind.</li>
              <li>Take notes during lectures.</li>
              <li>Family can watch together.</li>
              <li>Senior brain food at its best.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Library DVDs first</h3>
            <p className="text-sm text-muted-foreground">Before subscribing to $20/month Wondrium, check your library — most carry The Great Courses DVDs. Free with library card. Same professors, same content. If your library has limited selection or you watch heavily, then $20/month is reasonable. Some seniors auto-renew Wondrium for years and never run out of new content.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
