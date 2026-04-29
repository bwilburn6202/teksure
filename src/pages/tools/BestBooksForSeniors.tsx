import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function BestBooksForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Books for Seniors | TekSure" description="Senior reading list. Plain-English picks for senior book lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Books for Seniors</h1>
          <p className="text-lg text-muted-foreground">Senior favorites + thought-provoking.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">On aging well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Being Mortal</strong> — Atul Gawande.</li>
              <li><strong>Successful Aging</strong> — Daniel Levitin.</li>
              <li><strong>From Strength to Strength</strong> — Arthur Brooks.</li>
              <li><strong>The Telomere Effect</strong> — Blackburn + Epel.</li>
              <li><strong>Outlive</strong> — Peter Attia.</li>
              <li>All Libby/library available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memoir + biography</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The Light We Carry</strong> — Michelle Obama.</li>
              <li><strong>Spare</strong> — Prince Harry.</li>
              <li><strong>Educated</strong> — Tara Westover.</li>
              <li><strong>Leadership in Turbulent Times</strong> — Doris Kearns Goodwin.</li>
              <li><strong>The Unwinding of the Miracle</strong> — Julie Yip-Williams.</li>
              <li>All thought-provoking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cozy mysteries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior favorite genre.</li>
              <li><strong>Thursday Murder Club</strong> — Richard Osman.</li>
              <li><strong>Louise Penny</strong> — Inspector Gamache series.</li>
              <li><strong>Charles Todd</strong> — Bess Crawford.</li>
              <li><strong>Alexander McCall Smith</strong> — No. 1 Ladies&apos; Detective Agency.</li>
              <li>Light reading + fun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sapiens</strong> — Yuval Noah Harari.</li>
              <li><strong>Bowling Alone</strong> — Robert Putnam.</li>
              <li><strong>Thinking Fast and Slow</strong> — Daniel Kahneman.</li>
              <li><strong>The Code Breaker</strong> — Walter Isaacson.</li>
              <li><strong>How to Change Your Mind</strong> — Michael Pollan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spirituality + reflection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tuesdays with Morrie</strong> — Mitch Albom.</li>
              <li><strong>The Last Lecture</strong> — Randy Pausch.</li>
              <li><strong>When Things Fall Apart</strong> — Pema Chödrön.</li>
              <li><strong>The Power of Now</strong> — Eckhart Tolle.</li>
              <li><strong>Man&apos;s Search for Meaning</strong> — Viktor Frankl.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free at library</h3>
            <p className="text-sm text-muted-foreground">All free at library — physical or via Libby app. See /tools/libby-app-for-seniors. Book club discussion adds joy. Goodreads tracks reading. NYT Best Sellers — see what&apos;s popular. Reading = brain exercise + pleasure.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
