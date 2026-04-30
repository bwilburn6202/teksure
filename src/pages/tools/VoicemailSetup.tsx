import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Voicemail, ChevronRight, Phone, AlertTriangle,
} from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Step {
  title: string;
  detail: string;
}

const SETUP: Record<Phone, Step[]> = {
  iphone: [
    { title: 'Turn on Visual Voicemail', detail: 'Open the Phone app → tap "Voicemail" tab at the bottom right. The first time, it walks you through setting a 4–6 digit password and recording a greeting.' },
    { title: 'Pick a passcode you can remember', detail: 'Avoid 1234 or your birthday. Your carrier may force a minimum length (usually 4 digits). Write it on the same card as your phone unlock hint and keep that card somewhere safe.' },
    { title: 'Record a clear greeting', detail: 'Tap "Greeting" (top-left in the Voicemail tab) → "Custom" → record button. 10 seconds is plenty: "Hi, you have reached [name]. Please leave a message and I will call you back."' },
    { title: 'Try Live Voicemail (iOS 17+)', detail: 'Settings → Phone → Live Voicemail → ON. Now when someone leaves a message, you see the words appear on your screen as they speak — and you can pick up partway through if you want to take the call.' },
    { title: 'Set up transcription', detail: 'It is on by default in iOS 10+. When voicemail is left, the Phone app shows the words. Useful when hearing aids are not in.' },
  ],
  android: [
    { title: 'Open the Phone app → Voicemail tab', detail: 'On most Android phones the Voicemail tab is at the bottom of the Phone app. Tap it. The first time, it asks if you want to set up Visual Voicemail with your carrier.' },
    { title: 'Set a passcode', detail: 'Your carrier asks for a 4–7 digit passcode. Pick one you can remember; write it on the card with your phone-unlock hint.' },
    { title: 'Record a greeting', detail: 'Voicemail tab → menu → "Voicemail settings" → "Greeting" → record. 10 seconds is plenty.' },
    { title: 'Turn on transcription if your carrier offers it', detail: 'Verizon and AT&T include voicemail-to-text on most plans. Settings inside the Voicemail tab → "Transcripts" → ON.' },
    { title: 'Try Google Voice as a free alternative', detail: 'Google Voice gives you free voicemail with very accurate transcription, even on a basic phone plan. voice.google.com to set up.' },
  ],
};

const TIPS = [
  {
    title: 'Skip your own greeting on call',
    detail: 'When dialling your voicemail, press # while your greeting is playing — it skips straight to the menu. Saves 30 seconds every time.',
  },
  {
    title: 'Save important voicemails forever',
    detail: 'iPhone: Phone → Voicemail → tap a message → share icon → "Save to Files" or email it to yourself. Android: Voicemail tab → tap a message → menu → Save / Share.',
  },
  {
    title: 'Forward an important voicemail to family',
    detail: 'Use the Share button right inside the Voicemail tab. Send it as a text or email — saves you re-explaining the message to family.',
  },
  {
    title: 'Reset your voicemail PIN if you forget it',
    detail: 'Verizon: dial *611, ask for the voicemail team. AT&T: same — dial 611. T-Mobile: 611. They will text-verify your line and reset.',
  },
  {
    title: 'Fix the most common voicemail problem: "calling from area code"',
    detail: 'If voicemail asks for an area code every time you dial, the system has lost your number. Carrier needs to "re-provision" — call 611 and ask. Free fix, takes 5 minutes.',
  },
];

export default function VoicemailSetup() {
  const [phone, setPhone] = useState<Phone>('iphone');

  return (
    <>
      <SEOHead
        title="Voicemail Setup Helper"
        description="Set up Visual Voicemail with transcription so you can read messages instead of dialling in. Step-by-step for iPhone and Android, plus the carrier reset trick when something goes wrong."
        path="/tools/voicemail-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Voicemail className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Voicemail Setup Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set it up once. Read your messages instead of dialling in to listen.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Voicemail Setup Helper' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
              <ol className="space-y-3">
                {SETUP[phone].map((s, i) => (
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

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five tricks worth knowing</p>
              <div className="space-y-3">
                {TIPS.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for "voicemail full" scam emails</p>
                <p className="text-muted-foreground">
                  Real carrier voicemail does not email you a fake "play your message" link. If you get an email like "you have a new voicemail — click to listen", do not click. Open the Phone app and check the voicemail tab directly.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/robocall-blocker-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Robocall Blocker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop unwanted callers reaching voicemail.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check that suspicious voicemail.</p>
              </Link>
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing</p>
                <p className="text-xs text-muted-foreground mt-0.5">Hear voicemails through hearing aids.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <Phone className="h-3 w-3" /> Quick Tip: a clear 10-second greeting beats a long one. Most callers hang up at 20 seconds.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
