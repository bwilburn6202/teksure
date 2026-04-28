import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PhoneOff, ChevronRight, AlertTriangle } from 'lucide-react';

interface Pattern {
  scenario: string;
  redFlag: string;
  whatToDo: string;
}

const PATTERNS: Pattern[] = [
  {
    scenario: 'A "grandchild" calls in a panic — they\'re in jail / in a hospital / stranded — and need money fast.',
    redFlag: 'The voice may sound EXACTLY like your grandchild. AI voice cloning needs only 3 seconds of recorded voice (from a Facebook video, Instagram reel, podcast). The scammer pulled the voice from social media.',
    whatToDo: 'Hang up. Call your actual grandchild on a number you know is theirs. The fake call falls apart in 30 seconds. Have a family safe-word ("blue elephant") that everyone knows but no one posts publicly.',
  },
  {
    scenario: 'A "spouse" or "child" voice tells you to wire money urgently because of a family emergency.',
    redFlag: 'Same pattern with closer family. AI clones can fool even people who know the voice well, especially over a noisy phone line.',
    whatToDo: 'Call them back on their direct number. If you cannot reach them, call another family member to confirm. Real emergencies wait the 5 minutes it takes to verify.',
  },
  {
    scenario: 'A "doctor" or "lawyer" calls saying a loved one was in an accident.',
    redFlag: 'Often delivered with realistic background noise (sirens, hospital bustle) made by AI. Plays on panic.',
    whatToDo: 'Get the supposed name and case number, then call the hospital or law office directly. Real medical/legal professionals wait while you verify; scammers will not.',
  },
  {
    scenario: 'A "boss" or "co-worker" calls asking you to wire money or buy gift cards from work.',
    redFlag: 'Even small businesses get hit. Scammers harvest LinkedIn for the boss\'s name and voice (from a podcast, video).',
    whatToDo: 'Always verify with a second channel — text the boss directly, or walk down the hall. NEVER buy gift cards because the boss "asked".',
  },
  {
    scenario: '"You\'ve been arrested for missing jury duty" call from a police-sounding voice.',
    redFlag: 'Real police never call to demand payment. They show up in person with paperwork.',
    whatToDo: 'Hang up. Call your local non-emergency police number to confirm (it will not be real).',
  },
];

const PROTECTION_STEPS = [
  {
    title: 'Set a family safe-word',
    detail: 'Pick a phrase that is hard to guess but memorable ("purple turtle", "Aunt Mary\'s pickles"). Tell every immediate family member. NEVER post it online or share over text. Anyone calling for help has to know the safe-word.',
  },
  {
    title: 'Lock down your social-media voice',
    detail: 'Set Facebook and Instagram videos to "Friends only". Make TikTok account private. The voice clones are trained on PUBLIC video. If your videos are private, scammers cannot easily clone you.',
  },
  {
    title: 'Hang up and call back',
    detail: 'The single most powerful defense. Even if the voice sounds 100% real, hang up and call back on a known number. Real emergencies survive a 30-second pause.',
  },
  {
    title: 'Never wire money on a phone call',
    detail: 'No matter who is calling — bank, family, employer. Wire transfers, Zelle, gift cards from a phone call = scam. Period.',
  },
  {
    title: 'Run unfamiliar numbers through carrier spam check',
    detail: 'Verizon Call Filter, AT&T ActiveArmor, T-Mobile Scam Shield — all flag suspicious incoming calls. Often catch AI-voice scams before they reach you.',
  },
];

export default function AiVoiceDefense() {
  return (
    <>
      <SEOHead
        title="AI Voice Clone Defense"
        description="AI voice cloning makes scam calls sound exactly like your family. How to recognize the patterns, set a family safe-word, and protect yourself in 2026."
        path="/tools/ai-voice-defense"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <PhoneOff className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Voice Clone Defense</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The voice on the phone may sound exactly like your grandchild — and not be. Here is how to protect your family.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'AI Voice Clone Defense' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">What changed in the last two years</p>
                <p className="text-muted-foreground">
                  AI voice cloning used to need an hour of voice recording. Now it needs 3 seconds — pulled from any public Facebook video, podcast, or voicemail greeting. This means scammers can call your number in your grandchild\'s actual voice. The technology is real and the scam is rising fast.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five patterns to recognize</p>
          <div className="space-y-4 mb-6">
            {PATTERNS.map((p, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-2">Pattern {i + 1}</Badge>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Scenario</p>
                  <p className="text-sm mb-2 italic">{p.scenario}</p>

                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mb-1">Red flag</p>
                  <p className="text-sm mb-2 p-2 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">{p.redFlag}</p>

                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider mb-1">What to do</p>
                  <p className="text-sm p-2 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">{p.whatToDo}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five protection steps to take this week</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {PROTECTION_STEPS.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note for the family conversation</p>
              <p className="text-xs text-muted-foreground">
                Talk about this once with the whole family — kids, grandkids, parents. Pick the safe-word together. Show grandparents this page. The conversation takes 10 minutes and saves a lot of money and grief.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For text and email scams.</p>
              </Link>
              <Link to="/tools/common-scams-library" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Common Scams Library</p>
                <p className="text-xs text-muted-foreground mt-0.5">Other scam patterns.</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Have the family conversation.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: a family safe-word costs nothing and stops the most expensive scam. Pick one this week.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
