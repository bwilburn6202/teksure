import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function FamilyHistoryInterview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family History Interview Guide | TekSure" description="Interview elders before stories are lost. Plain-English guide with questions for senior families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family History Interview</h1>
          <p className="text-lg text-muted-foreground">Capture stories before they&apos;re gone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Phone Voice Memos</strong> — record audio.</li>
              <li><strong>StoryCorps app</strong> — interviews + Library of Congress archive. FREE.</li>
              <li><strong>Otter.ai</strong> — record + auto-transcribe. FREE tier.</li>
              <li><strong>Zoom recording</strong> — for distant elders.</li>
              <li><strong>FaceTime + screen recording</strong> — iPhone.</li>
              <li>30-60 min sessions, multiple visits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell me about the home you grew up in.</li>
              <li>What did your family do on Sundays?</li>
              <li>What did you want to be when you grew up?</li>
              <li>How did you meet [spouse]?</li>
              <li>What was [historical event] like for you?</li>
              <li>What&apos;s a story you wish you had asked YOUR grandparents?</li>
              <li>What&apos;s the hardest thing you&apos;ve ever overcome?</li>
              <li>What do you most want grandchildren to know?</li>
              <li>What family traditions should continue?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quiet room.</li>
              <li>Mic close (phone mic 2-3 feet).</li>
              <li>Test recording first — 30 seconds.</li>
              <li>Comfortable chair, water nearby.</li>
              <li>Bring photos to spark memories.</li>
              <li>30-45 min = optimal — fatigue sets in.</li>
              <li>Multiple short sessions better than marathon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Interview style</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open-ended questions: &quot;Tell me about...&quot; vs yes/no.</li>
              <li>Listen, don&apos;t interrupt.</li>
              <li>&quot;Why?&quot; or &quot;How did you feel?&quot; goes deeper.</li>
              <li>Silence is okay — they&apos;re thinking.</li>
              <li>Don&apos;t correct facts — record their version.</li>
              <li>Sensitive topics — let them lead.</li>
              <li>Take notes for follow-up questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After the interview</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup audio files immediately (cloud + drive).</li>
              <li>Transcribe with Otter / Rev.com.</li>
              <li>Send transcript to elder for additions.</li>
              <li>Edit highlights to share at family events.</li>
              <li>Compile into book with photos.</li>
              <li>Shutterfly / Blurb photo books with QR code → audio clip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t wait</h3>
            <p className="text-sm text-muted-foreground">Single biggest regret in family genealogy: &quot;I should have asked Grandma when she was alive.&quot; Even a 30-min recording captures more than 100 photos. Start with oldest living relatives — even if they have early dementia, lucid moments are common. Schedule before holidays.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
