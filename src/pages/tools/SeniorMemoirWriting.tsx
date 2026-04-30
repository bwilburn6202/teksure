import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorMemoirWriting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memoir Writing for Seniors | TekSure" description="Write your life story with these senior-friendly tools. Free apps, prompts, services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memoir Writing</h1>
          <p className="text-lg text-muted-foreground">Tell your life story.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why write your memoir?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Preserve your story for grandchildren.</li>
              <li>Process your life experience.</li>
              <li>Therapeutic for difficult memories.</li>
              <li>Document family history.</li>
              <li>You&apos;re the only one who can tell it.</li>
              <li>Don&apos;t need to be famous to matter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">StoryWorth — easiest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$99/year service.</li>
              <li>Sends one question per week by email.</li>
              <li>You reply — that becomes a chapter.</li>
              <li>52 questions = 52 chapters.</li>
              <li>Hardcover book printed at end of year.</li>
              <li>Most popular memoir gift.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free DIY approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Doc — type your stories.</li>
              <li>Free question lists online.</li>
              <li>Voice memos for thinking aloud.</li>
              <li>Self-publish via Amazon KDP free.</li>
              <li>Photo + memory book via Shutterfly.</li>
              <li>Save $99 if motivated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memoir writing apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scrivener — pro writing tool, $49.</li>
              <li>Day One — daily journal style.</li>
              <li>Lifetales — guided memoir prompts.</li>
              <li>Lifebook — workbook approach.</li>
              <li>iA Writer — minimalist, distraction-free.</li>
              <li>Microsoft Word for serious writing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice + speech-to-text</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk easier than type for many.</li>
              <li>iPhone Voice Memos — record stories.</li>
              <li>Auto-transcription on newer iPhones.</li>
              <li>Otter.ai — record + transcribe.</li>
              <li>Hire transcriber on Upwork.</li>
              <li>Tell stories your way.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-publishing options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon KDP — free to publish.</li>
              <li>Shutterfly photo book — for photo-heavy memoirs.</li>
              <li>Lulu — print on demand.</li>
              <li>Ingram Spark — professional.</li>
              <li>Local print shop for family copies.</li>
              <li>Print 5–10 for family — affordable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with childhood memories</h3>
            <p className="text-sm text-muted-foreground">Begin by writing about your earliest memories. Where you grew up, your parents, school days, first job. These are the stories your grandchildren will treasure most. Use voice memos if typing is hard. Don&apos;t edit, don&apos;t worry about quality. Just capture the stories. You can polish later. Many seniors who never thought they could &quot;write&quot; produce beautiful memoirs by simply recording memories.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
