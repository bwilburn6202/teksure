import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'YouVersion Bible', cost: 'FREE', best: 'Largest. 2,000+ versions, 1,800 languages. Reading plans. Free audio.', good: 'Best overall.' },
  { name: 'Bible Gateway', cost: 'FREE / $5/mo Plus', best: 'Bible study commentary. Many translations. Senior-friendly desktop site.', good: 'Best for study.' },
  { name: 'Olive Tree Bible', cost: 'FREE / paid commentary', best: 'Best paid scholarly tools. Original Greek/Hebrew options.', good: 'Best for scholars.' },
  { name: 'Audible — Bible audio', cost: '$15/mo with Audible', best: 'Premium narrated Bible (Alexander Scourby, etc.). One credit = entire Bible.', good: 'Best audio quality.' },
  { name: 'Logos / Accordance', cost: '$300+', best: 'Pastor / scholar-grade. Massive commentary libraries.', good: 'Best for clergy.' },
];

export default function BibleAppCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bible App Compared | TekSure" description="YouVersion, Bible Gateway, Olive Tree. Plain-English picks for the best free Bible apps with audio + reading plans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bible App Compare</h1>
          <p className="text-lg text-muted-foreground">Daily reading + audio Bible — free.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouVersion features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free audio Bible — multiple narrators, multiple translations.</li>
              <li>Daily verse pushed to phone.</li>
              <li>20,000+ reading plans (Through-the-Bible, devotionals, topical).</li>
              <li>Read with friends.</li>
              <li>Highlight + bookmark verses.</li>
              <li>Sync across phone, iPad, desktop.</li>
              <li>"Bible for Kids" sister app for grandkids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap font icon — make text BIGGER (often 4-5 sizes).</li>
              <li>Audio Bible — listen while doing dishes, walking, falling asleep.</li>
              <li>Pick translation you grew up with — KJV, NIV, NLT, ESV all available.</li>
              <li>Reading plan — "The Bible in a Year" has many versions.</li>
              <li>"Verse of the Day" widget — phone home screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free study resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>BibleProject</strong> (YouTube + app) — free animated explanations of every Bible book.</li>
              <li><strong>RightNow Media</strong> — many churches give free access. Like Netflix for Christian study.</li>
              <li><strong>Pray.com</strong> — free, audio-driven devotionals.</li>
              <li><strong>Daily Audio Bible</strong> — Brian Hardin reads through Bible in a year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quiet morning routine</h3>
            <p className="text-sm text-muted-foreground">Best use for many seniors: 10 minutes each morning. Open Bible app, read today&apos;s passage, listen to audio while drinking coffee, journal a sentence in a paper notebook. Simple. Sustainable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
