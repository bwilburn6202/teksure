import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function ShortStoryWriting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Short Story Writing for Seniors | TekSure" description="Write your first short story. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Short Story Writing</h1>
          <p className="text-lg text-muted-foreground">1,000-5,000 words. Real fiction.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why write?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brain cardio — stay sharp.</li>
              <li>Process life experiences.</li>
              <li>Family heirloom potential.</li>
              <li>Discover hidden creativity.</li>
              <li>Submit to magazines, contests.</li>
              <li>Therapy through fiction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5-step structure</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1. Hook</strong> — first sentence catches attention.</li>
              <li><strong>2. Setup</strong> — character + setting.</li>
              <li><strong>3. Conflict</strong> — what goes wrong?</li>
              <li><strong>4. Climax</strong> — biggest moment.</li>
              <li><strong>5. Resolution</strong> — how it ends.</li>
              <li>1,500-3,000 words ideal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Writing apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Microsoft Word</strong> — most familiar.</li>
              <li><strong>Google Docs</strong> — FREE, save automatically.</li>
              <li><strong>Pages</strong> — Apple FREE.</li>
              <li><strong>Scrivener</strong> — $50, novel-grade.</li>
              <li><strong>Notes app</strong> — quick ideas.</li>
              <li>Pen + paper great too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Story idea sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Real-life family stories (fictionalize).</li>
              <li>What if?... ask hypotheticals.</li>
              <li>News stories twisted.</li>
              <li>Childhood memories.</li>
              <li>Eavesdropped conversations.</li>
              <li>Daily prompt sites.</li>
              <li>Reedsy free prompts weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for new writers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Write first, don&apos;t edit.</li>
              <li>Keep going even when bad.</li>
              <li>Edit next week, not same day.</li>
              <li>Read aloud — catch awkward.</li>
              <li>Cut 10% in second draft.</li>
              <li>One reader = honest feedback.</li>
              <li>Don&apos;t share until polished.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Submit + publish</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Reedsy</strong> — weekly contests.</li>
              <li><strong>Glimmer Train</strong> — literary mag.</li>
              <li><strong>The Sun Magazine</strong>.</li>
              <li><strong>Senior literary magazines</strong>.</li>
              <li><strong>Self-publish</strong> — Amazon KDP free.</li>
              <li>Local writing contests.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family stories book</h3>
            <p className="text-sm text-muted-foreground">Best gift to grandkids: collection of family stories you write. 10-20 short stories about people, places, times. Print at Lulu / Shutterfly. Heirloom for generations. Late-life writers like Frank McCourt, Jim Harrison. Library — short story craft books. Just write. 1 hour/day. 6 months = book.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
