import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function OtterAITranscription() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Otter AI Transcription for Seniors | TekSure" description="Otter.ai records and transcribes meetings, doctor visits, and lectures. Free for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Otter.ai</h1>
          <p className="text-lg text-muted-foreground">Record + transcribe doctor visits and meetings.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Otter?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App that records voices + transcribes to text.</li>
              <li>Real-time live transcripts.</li>
              <li>Highlight key points later.</li>
              <li>Search through transcripts by keyword.</li>
              <li>Free version generous — 300 minutes/month.</li>
              <li>Pro: $17/month for unlimited.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor appointments — never forget instructions.</li>
              <li>Family meetings about elder care.</li>
              <li>Church sermons — review later.</li>
              <li>Phone calls with family — keep memories.</li>
              <li>Recording your own life stories.</li>
              <li>Lectures + classes for review.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Doctor visit use case</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask doctor permission first — most agree.</li>
              <li>Place phone on table, tap record.</li>
              <li>Listen normally — no need to take notes.</li>
              <li>After visit, review transcript on phone.</li>
              <li>Search for specific medications mentioned.</li>
              <li>Share with adult child caring for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Otter free from app store.</li>
              <li>Create account — email + password.</li>
              <li>Tap red microphone to start.</li>
              <li>Tap stop when done.</li>
              <li>Transcript appears in seconds.</li>
              <li>Edit, share, or save.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always inform people you&apos;re recording.</li>
              <li>Some states require both-party consent.</li>
              <li>Otter stores transcripts in cloud.</li>
              <li>Delete recordings you don&apos;t need.</li>
              <li>Don&apos;t record private medical info you wouldn&apos;t share.</li>
              <li>Read Otter privacy policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Voice Memos — auto-transcription on newer iPhones.</li>
              <li>Google Recorder app (Pixel phones) — free.</li>
              <li>Microsoft Word — built-in dictation.</li>
              <li>Google Docs — voice typing free.</li>
              <li>Whisper (OpenAI) — free if technical.</li>
              <li>Otter still easiest for non-technical users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Game-changer for medical visits</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve ever left a doctor&apos;s appointment trying to remember everything they said, Otter changes that. Ask your doctor &quot;May I record this so I can review it later?&quot; Most will agree. After the visit, the full transcript is searchable. You can email key parts to your adult children. Many seniors say this single app dramatically improved their healthcare experience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
