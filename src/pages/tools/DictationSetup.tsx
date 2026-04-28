import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, ChevronRight } from 'lucide-react';

type Device = 'iphone' | 'android' | 'mac' | 'windows';

interface Setup {
  steps: string[];
  triggerHow: string;
  punctuation: { phrase: string; result: string }[];
  pro: string[];
}

const DICTATION: Record<Device, Setup> = {
  iphone: {
    steps: [
      'Settings → General → Keyboard → "Enable Dictation" → ON.',
      'When asked, allow it to use the microphone.',
      'Tap into any text box (Messages, Notes, Mail).',
      'Tap the microphone icon to the left of the spacebar.',
      'Speak. Tap done when finished.',
    ],
    triggerHow: 'Tap the microphone on the keyboard. Or hold the home button (older iPhones) and ask Siri to write a message for you.',
    punctuation: [
      { phrase: 'period',          result: '.' },
      { phrase: 'comma',           result: ',' },
      { phrase: 'question mark',    result: '?' },
      { phrase: 'exclamation point', result: '!' },
      { phrase: 'new line',         result: 'a line break' },
      { phrase: 'new paragraph',    result: 'a paragraph break' },
      { phrase: 'cap dad',          result: '"Dad" (capitalised)' },
      { phrase: 'all caps yes',     result: '"YES"' },
    ],
    pro: [
      'iOS 17 and later keep dictation on while you tap to fix words — type, then keep dictating.',
      'Long-press the dictation key for language options if you want Spanish or French.',
      'Speak normally — pause briefly after each sentence. iPhone is good at where to break.',
    ],
  },
  android: {
    steps: [
      'Settings → System → Languages & input → On-screen keyboard → Gboard → Voice typing → ON.',
      'Allow microphone permission when prompted.',
      'Tap into any text box.',
      'Tap the microphone icon at the top-right of the Gboard keyboard.',
      'Speak. Tap the mic again or tap into the text to stop.',
    ],
    triggerHow: 'Tap the microphone on the Gboard keyboard. Or say "Hey Google, send a text to..." and dictate from there.',
    punctuation: [
      { phrase: 'period',          result: '.' },
      { phrase: 'comma',           result: ',' },
      { phrase: 'question mark',    result: '?' },
      { phrase: 'exclamation point', result: '!' },
      { phrase: 'new line',         result: 'a line break' },
      { phrase: 'new paragraph',    result: 'a paragraph break' },
    ],
    pro: [
      'On Pixel phones, "Assistant Voice Typing" is even better — turn it on in the same Voice typing menu.',
      'You can edit while still in dictation mode — tap to fix a word, then keep talking.',
      'Voice typing works offline on most newer Androids.',
    ],
  },
  mac: {
    steps: [
      'System Settings → Keyboard → "Dictation" → ON.',
      'Allow microphone access when asked.',
      'Pick a shortcut — the default is pressing the Function (fn) key twice.',
      'In any app — Mail, Notes, Pages — press fn fn to start.',
      'Press fn again or click "Done" to stop.',
    ],
    triggerHow: 'Press the Function (fn) key twice from any text field.',
    punctuation: [
      { phrase: 'period',          result: '.' },
      { phrase: 'comma',           result: ',' },
      { phrase: 'question mark',    result: '?' },
      { phrase: 'exclamation point', result: '!' },
      { phrase: 'new line',         result: 'a line break' },
      { phrase: 'new paragraph',    result: 'a paragraph break' },
      { phrase: 'open quote / close quote', result: '"..."' },
    ],
    pro: [
      'Mac dictation now stays on indefinitely — type and dictate freely without restarting.',
      'For longer documents, dictation is more accurate after macOS Sonoma.',
      'In System Settings → Accessibility → Voice Control, you can also dictate to control your Mac (open apps, click buttons by name).',
    ],
  },
  windows: {
    steps: [
      'Press Windows key + H from any text box.',
      'The first time, allow microphone access.',
      'A small dictation toolbar appears at the top of the screen.',
      'Speak — your words appear where the cursor is.',
      'Press Windows + H again to stop.',
    ],
    triggerHow: 'Windows key + H — works in any text field, anywhere in Windows 10 and 11.',
    punctuation: [
      { phrase: 'period',          result: '.' },
      { phrase: 'comma',           result: ',' },
      { phrase: 'question mark',    result: '?' },
      { phrase: 'exclamation mark', result: '!' },
      { phrase: 'new line',         result: 'a line break' },
      { phrase: 'new paragraph',    result: 'a paragraph break' },
    ],
    pro: [
      'Voice Access (Windows 11) goes further — you can control the entire computer by voice. Settings → Accessibility → Speech.',
      'Cortana / Copilot dictation handle long-form better than the basic Win+H tool.',
      'Microsoft Word has its own "Dictate" button on the ribbon, with built-in punctuation cues.',
    ],
  },
};

const DEVICES: { id: Device; label: string }[] = [
  { id: 'iphone',  label: 'iPhone / iPad' },
  { id: 'android', label: 'Android phone / tablet' },
  { id: 'mac',     label: 'Mac' },
  { id: 'windows', label: 'Windows' },
];

export default function DictationSetup() {
  const [device, setDevice] = useState<Device>('iphone');
  const setup = DICTATION[device];

  return (
    <>
      <SEOHead
        title="Dictation Setup Helper"
        description="Stop typing — talk to your phone or computer. Setup, voice commands, and the trick to getting punctuation right. Plain English for iPhone, Android, Mac, and Windows."
        path="/tools/dictation-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Mic className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Dictation Setup Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Stop typing — talk. Five-minute setup, plus the punctuation trick most people never learn.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Dictation Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your device</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {DEVICES.map(d => (
                  <button key={d.id} onClick={() => setDevice(d.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      device === d.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{d.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Turn it on</p>
              <ol className="space-y-2 mb-5">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Trigger</p>
                <p className="text-sm">{setup.triggerHow}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Say this — get this</p>
              <p className="text-xs text-muted-foreground mb-3">The trick most people never learn: dictation does not auto-punctuate. You speak the punctuation.</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {setup.punctuation.map((p, i) => (
                  <div key={i} className="p-2 rounded border border-border flex items-center gap-3 bg-muted/30">
                    <code className="text-xs font-mono px-2 py-0.5 rounded bg-background border border-border">{p.phrase}</code>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-sm">{p.result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tricks worth knowing</p>
              <ul className="space-y-2 text-sm">
                {setup.pro.map((p, i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary shrink-0">•</span><span>{p}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/voice-assistant-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voice Assistant Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Siri, Alexa, Google Assistant.</p>
              </Link>
              <Link to="/tools/voice-commands" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voice Command Cheat Sheet</p>
                <p className="text-xs text-muted-foreground mt-0.5">All the voice tricks in one place.</p>
              </Link>
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn the screen into the listener too.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: dictation is twice as accurate after the first day. Your phone learns your voice.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
