import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function WriteYourMemoir() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Write Your Memoir | TekSure" description="Capture your life story. Plain-English memoir-writing guide for seniors — services + DIY." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Write Your Memoir</h1>
          <p className="text-lg text-muted-foreground">Greatest gift to family. Easier than you think.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy services that do it for you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>StoryWorth</strong> — $99/yr. Weekly question, year-end book.</li>
              <li><strong>Remento</strong> — record voice answers, AI transcribes.</li>
              <li><strong>Storypath</strong> — guided life story prompts.</li>
              <li><strong>iLifeStory</strong> — pro interviews + edits + book.</li>
              <li><strong>StoryCorps</strong> — free archived at Library of Congress.</li>
              <li>None require writing skills — just answer questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY memoir approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30 minutes/day — much easier than &quot;writing a book.&quot;</li>
              <li>Voice memo while walking or driving.</li>
              <li>One memory at a time — no chronological order needed.</li>
              <li>Bullet points fine — polish later.</li>
              <li>Mix with photos.</li>
              <li>Aim for 30,000-50,000 words = ~200-page book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memory prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Earliest childhood memory.</li>
              <li>Your parents — what made them special.</li>
              <li>School memories.</li>
              <li>First job.</li>
              <li>How you met your spouse.</li>
              <li>Major historical events you lived through.</li>
              <li>Most difficult challenge.</li>
              <li>Proudest accomplishment.</li>
              <li>Lessons learned.</li>
              <li>Advice for grandchildren.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice-to-text tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone Voice Memos</strong> — record + transcribe (free).</li>
              <li><strong>Otter.ai</strong> — free + AI transcription.</li>
              <li><strong>Google Docs Voice Typing</strong> — free.</li>
              <li><strong>Word Dictate</strong> — built into Microsoft Word.</li>
              <li>Talk for 5 min = 750-word chapter.</li>
              <li>Edit later — first capture matters most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-publish</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon KDP</strong> — print on demand, FREE to publish.</li>
              <li><strong>Lulu</strong> — quality printing, family copies.</li>
              <li><strong>Blurb</strong> — photo books, premium.</li>
              <li><strong>Shutterfly</strong> — easy + cheap photo books.</li>
              <li>Print 5-20 copies for family.</li>
              <li>Cost: $5-20/copy print on demand.</li>
              <li>Hardcover $15-30/copy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t wait until perfect</h3>
            <p className="text-sm text-muted-foreground">Most family memoirs never finish. Imperfect + complete &gt; perfect + never. Quick story bullet points beat polished prose. Start TODAY with one memory. Family will treasure rough draft over no draft. Many seniors regret not asking parents — be the answer for your kids.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
