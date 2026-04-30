import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function RecordFamilyHistoryAudio() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Record Family History Audio Stories | TekSure" description="Capture family stories with audio. StoryCorps, Voice Memos, free tools for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Record Family Stories</h1>
          <p className="text-lg text-muted-foreground">Audio is more powerful than written.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why audio matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Voice carries emotion text never can.</li>
              <li>Hear laughter, accents, hesitations.</li>
              <li>Easier than writing — just talk.</li>
              <li>Grandchildren may forget your face but never your voice.</li>
              <li>Captures regional dialect of an era.</li>
              <li>Future generations will treasure it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">StoryCorps app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app from National Public Radio.</li>
              <li>Records 40-minute interviews.</li>
              <li>Built-in question prompts.</li>
              <li>Submit to Library of Congress archive (optional).</li>
              <li>Or keep private to family.</li>
              <li>Beautiful, simple interface.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice Memos (iPhone)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-installed on every iPhone.</li>
              <li>Tap red button — start recording.</li>
              <li>Automatic transcription in newer iPhones.</li>
              <li>Share via text, email, or AirDrop.</li>
              <li>Sync to Mac via iCloud.</li>
              <li>Free, simple, always available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Conducting good interviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quiet room — no TV, no fan.</li>
              <li>Ask open-ended questions: &quot;Tell me about...&quot;</li>
              <li>Let silences happen — don&apos;t fill them.</li>
              <li>Follow curiosity — go off-script.</li>
              <li>Record 30–60 minutes max per session.</li>
              <li>Multiple sessions over time better than one long one.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Great questions to ask elders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>What&apos;s your earliest memory?</li>
              <li>Tell me about your parents.</li>
              <li>What was school like for you?</li>
              <li>How did the world change in your lifetime?</li>
              <li>What family stories did your grandparents tell?</li>
              <li>What do you want grandchildren to know?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to save recordings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iCloud, Google Drive, Dropbox — back up always.</li>
              <li>Email to several family members.</li>
              <li>FamilySearch Memories — free permanent archive.</li>
              <li>Library of Congress (via StoryCorps).</li>
              <li>Burn to USB drives — give to multiple family.</li>
              <li>Multiple copies = won&apos;t be lost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t wait — start this week</h3>
            <p className="text-sm text-muted-foreground">If you have an elderly parent, aunt, uncle, or older relative — record them this Sunday. Not next month, not when you have time. Pull out your phone, open Voice Memos or StoryCorps, ask three questions. Adult children most regret not having recorded their parents&apos; voices when they had the chance. Take 20 minutes today. The recording will become priceless.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
