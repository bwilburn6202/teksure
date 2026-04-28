import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type Setup = 'iphone-iphone' | 'android' | 'windows' | 'mac';

interface ToolGuide {
  name: string;
  who: string;
  setup: string[];
  link: string;
}

const TOOLS: Record<Setup, ToolGuide> = {
  'iphone-iphone': {
    name: 'FaceTime SharePlay screen share',
    who: 'iPhone helping iPhone (or iPad).',
    setup: [
      'Senior: open FaceTime → call the helper.',
      'During the call: tap the screen-share icon (rectangle with person, top-right of FaceTime controls).',
      'Tap "Share My Screen" → 3-second countdown → helper sees what you see.',
      'Helper can talk you through; cannot click for you (Apple does not allow remote control for security).',
    ],
    link: 'https://support.apple.com/en-us/108823',
  },
  'android': {
    name: 'Google Meet screen share',
    who: 'Android helping Android, or any phone helping any phone.',
    setup: [
      'Senior: open Google Meet → start an instant meeting.',
      'Helper joins via the link.',
      'Tap "Present" → "Present screen" → "Start sharing".',
      'Helper sees and talks you through. No remote control.',
    ],
    link: 'https://support.google.com/meet/answer/9308856',
  },
  'windows': {
    name: 'Windows Quick Assist',
    who: 'Helping with a Windows 10 / 11 computer. Built-in. The HELPER controls the senior\'s computer.',
    setup: [
      'Senior: press Windows + Ctrl + Q. Or search "Quick Assist" in Start.',
      'Tap "Get assistance".',
      'Helper opens Quick Assist on their PC, picks "Help someone" → gets a 6-digit code.',
      'Senior types the code → grants permission → helper takes over.',
      'Senior can stop at any time by clicking the toolbar.',
    ],
    link: 'https://support.microsoft.com/en-us/windows/solve-pc-problems-over-a-remote-connection-b077e31a-16f4-2529-1a47-21f6a9040bf3',
  },
  'mac': {
    name: 'Apple Remote Management or RustDesk',
    who: 'Helping with a Mac.',
    setup: [
      'For Apple-to-Apple: Apple Messages screen sharing — start an iMessage conversation, click the screen-share icon.',
      'For broader help: install RustDesk on both computers (free, open-source).',
      'Senior shares a 9-digit ID + one-time password.',
      'Helper enters those, sees and controls the screen.',
    ],
    link: 'https://rustdesk.com',
  },
};

const SETUP_OPTIONS: { id: Setup; label: string }[] = [
  { id: 'iphone-iphone', label: 'iPhone helping iPhone' },
  { id: 'android',       label: 'Phone-to-phone (any kind)' },
  { id: 'windows',       label: 'Windows computer (full remote control)' },
  { id: 'mac',           label: 'Mac' },
];

const RULES = [
  { title: 'NEVER let a stranger remote into your computer', detail: 'Real Microsoft, Apple, and tech support do NOT call you. Anyone calling and asking to "fix your computer" by taking control is a scam.' },
  { title: 'Only grant access for a specific session', detail: 'Modern remote-help tools require a fresh code or password per session. Permanent access is dangerous and unnecessary.' },
  { title: 'Watch what they are doing', detail: 'Stay at the screen while the helper works. Speak up if anything looks wrong. End the session if you do not understand.' },
  { title: 'End the session when done', detail: 'Quick Assist auto-ends when closed. RustDesk: tap "End" in the toolbar. Confirm the connection icon is gone.' },
  { title: 'Restart afterwards if anything was changed', detail: 'A fresh restart locks in changes and clears any odd state.' },
];

export default function RemoteTechHelp() {
  const [setup, setSetup] = useState<Setup>('iphone-iphone');
  const tool = TOOLS[setup];

  return (
    <>
      <SEOHead
        title="Remote Tech Help Setup"
        description="Let a trusted family member or friend help you fix tech problems remotely. FaceTime SharePlay, Google Meet, Windows Quick Assist, RustDesk. Free, safe, real-time."
        path="/tools/remote-tech-help"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Remote Tech Help Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Let a trusted family member fix things from their home. Free, safe — when set up correctly.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Remote Tech Help' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Read this first</p>
                <p className="text-muted-foreground">
                  Remote tech help is the #2 vector for tech-support scams (right after fake pop-ups). ONLY install these tools when an actual family member or trusted friend is on the phone with you. NEVER do it because someone called you and said your computer is infected.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What does the helper need to do?</p>
              <div className="space-y-2">
                {SETUP_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setSetup(o.id)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      setup === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{tool.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>For:</strong> {tool.who}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-2 mb-4">
                {tool.setup.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <a href={tool.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Official help page <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five rules every time</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {RULES.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{r.title}</p>
                      <p className="text-muted-foreground mt-0.5">{r.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/tech-buddy-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Buddy Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with one trusted helper.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">For "your computer is infected" pop-ups.</p>
              </Link>
              <Link to="/tools/common-scams-library" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Common Scams Library</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tech-support scam pattern.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
