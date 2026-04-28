import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { FileAudio, AlertTriangle, ChevronRight } from 'lucide-react';

type ServiceId = 'voice-memos' | 'google-recorder' | 'otter' | 'trint' | 'rev';

interface Service {
  id: ServiceId;
  name: string;
  cost: string;
  howToUse: string[];
  whoFits: string;
  pros: string[];
  cons: string[];
}

const SERVICES: Service[] = [
  {
    id: 'voice-memos',
    name: 'iPhone Voice Memos (built-in)',
    cost: 'Free — included on every iPhone running iOS 18 or later.',
    howToUse: [
      'Open the Voice Memos app (it looks like a sound wave on a black square).',
      'Tap the red circle to record. Tap it again to stop.',
      'Tap your recording in the list, then tap the three dots (•••) and choose "Transcript".',
      'Wait a moment — the words appear under the audio. Tap any line to jump there.',
      'To copy the text: tap and hold a paragraph, choose Select All, then Copy.',
    ],
    whoFits: 'Anyone with a recent iPhone who wants the simplest option. No account, no upload, nothing extra to download.',
    pros: [
      'Already on your phone — no setup.',
      'Works without internet after the first transcription.',
      'Audio never leaves your device.',
    ],
    cons: [
      'Requires iOS 18 or later (iPhone XS and newer).',
      'One speaker only — does not label "Doctor:" vs "You:".',
      'No long-document export — you copy and paste.',
    ],
  },
  {
    id: 'google-recorder',
    name: 'Google Recorder (Pixel phones)',
    cost: 'Free — built into every Google Pixel phone.',
    howToUse: [
      'Open the Recorder app on your Pixel.',
      'Tap the red record button. Speak or place the phone near what you want to capture.',
      'Tap stop when finished — the transcript appears side-by-side with the audio.',
      'Tap "Share" to send the transcript by email or save it to Google Docs.',
      'Search across every recording you have ever made — tap the magnifying glass and type a word.',
    ],
    whoFits: 'Pixel phone owners. Best free option for capturing a long story from a relative — searchable forever.',
    pros: [
      'Truly free, no minute limit, no ads.',
      'Searchable transcript library.',
      'Works offline after the app downloads its language pack.',
    ],
    cons: [
      'Pixel phones only — does not work on Samsung or other Android brands.',
      'English does best; other languages can be hit-or-miss.',
      'No built-in speaker labels.',
    ],
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    cost: 'Free plan: 300 minutes per month, 30 minutes per recording. Pro: about 17 dollars per month for 1,200 minutes and longer recordings.',
    howToUse: [
      'Download "Otter" from the App Store or Play Store. Make a free account with your email.',
      'Open the app and tap the blue record button at the bottom.',
      'Speak — the words appear on screen as you talk.',
      'Tap stop. Otter saves the recording and the transcript together in your account.',
      'On a computer, sign in at otter.ai to read, edit, copy, or download the transcript as a Word file.',
    ],
    whoFits: 'Dictating a long letter or capturing a family story you want to share with relatives. Speaker labels help with two-person conversations.',
    pros: [
      'Words appear live as you speak.',
      'Labels different speakers (says "Speaker 1, Speaker 2").',
      'Works on iPhone, Android, and any web browser.',
    ],
    cons: [
      'Free plan caps at 300 minutes per month.',
      'Audio is uploaded to their servers — not fully private.',
      'Account required.',
    ],
  },
  {
    id: 'trint',
    name: 'Trint',
    cost: 'Paid only — about 60 dollars per month after a 7-day free trial. No free tier.',
    howToUse: [
      'Sign up at trint.com and start the 7-day trial.',
      'Record on your phone first (Voice Memos works fine), then upload the audio file at trint.com.',
      'Wait a few minutes — Trint sends an email when the transcript is ready.',
      'Edit the transcript right next to the audio in your browser; click any word to jump to that moment in the recording.',
      'Download as Word, PDF, or plain text.',
    ],
    whoFits: 'Family historians or writers ready to pay for high accuracy on hours of audio — interviews with parents, oral histories.',
    pros: [
      'Very accurate, even with accents.',
      'Strong editing tools — fix the text while you listen.',
      'Exports to many formats.',
    ],
    cons: [
      'Expensive for casual use.',
      'No free monthly minutes.',
      'Web-based — you upload audio (slower on home internet).',
    ],
  },
  {
    id: 'rev',
    name: 'Rev',
    cost: 'Pay as you go: 25 cents per minute for AI transcripts, 1 dollar 50 cents per minute for human transcribers. Subscription: 30 dollars per month.',
    howToUse: [
      'Go to rev.com and create an account, or download the Rev Voice Recorder app.',
      'Record on the app or upload an audio file you already have.',
      'Choose AI (faster, cheaper) or Human (slower, near-perfect).',
      'AI transcripts come back in minutes; human transcripts arrive within 12 hours by email.',
      'Read, edit, and download from your Rev account on the web.',
    ],
    whoFits: 'When accuracy matters more than money — a family member with a strong accent, a recording of a doctor visit you must quote exactly.',
    pros: [
      'Human option is the most accurate you can buy.',
      'Pay only for what you use.',
      'Trusted by journalists and lawyers.',
    ],
    cons: [
      'Costs add up quickly on long recordings.',
      'Human option takes hours, not minutes.',
      'Audio uploads to their servers.',
    ],
  },
];

export default function VoiceMemoTranscribe() {
  const [activeId, setActiveId] = useState<ServiceId>('voice-memos');
  const active = SERVICES.find(s => s.id === activeId)!;

  return (
    <>
      <SEOHead
        title="Voice Memo to Text Transcription Helper"
        description="Turn voice notes into text. Compare iPhone Voice Memos, Google Recorder, Otter.ai, Trint, and Rev — cost, how-to, pros and cons. Plain English for seniors."
        path="/tools/voice-memo-transcribe"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FileAudio className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Voice Memo to Text</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Dictate a long letter. Capture a story from your mother. Read back what your doctor said. Five tools — pick the one that fits.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Voice Memo to Text' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">Recording a doctor visit? Read this first.</p>
                <p className="text-amber-900 dark:text-amber-100">
                  Most US states are "one-party consent" — you can record any conversation you are part of without telling anyone.
                  But twelve states (including California, Florida, Pennsylvania, and Washington) require everyone to agree.
                  The respectful move in any state: tell your doctor before you press record. Most will say yes — patients ask all the time.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick a service</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICES.map(s => (
                  <button key={s.id} onClick={() => setActiveId(s.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activeId === s.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{s.name}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cost</p>
              <p className="text-sm mb-5">{active.cost}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">How to use it</p>
              <ol className="space-y-2 mb-5">
                {active.howToUse.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Who it fits</p>
                <p className="text-sm">{active.whoFits}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="border-green-300 bg-green-50/50 dark:bg-green-950/10">
              <CardContent className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 mb-3">Pros</p>
                <ul className="space-y-2 text-sm">
                  {active.pros.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="text-green-600 shrink-0">+</span><span>{p}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-rose-300 bg-rose-50/50 dark:bg-rose-950/10">
              <CardContent className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3">Cons</p>
                <ul className="space-y-2 text-sm">
                  {active.cons.map((c, i) => (
                    <li key={i} className="flex gap-2"><span className="text-rose-600 shrink-0">−</span><span>{c}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk instead of typing in any app.</p>
              </Link>
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn paper into PDF with your phone.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find, sort, and protect your photos.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: hold the phone about a foot from whoever is speaking. Closer is muffled, farther is faint.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
