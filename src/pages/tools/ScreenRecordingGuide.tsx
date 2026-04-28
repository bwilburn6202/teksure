import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, ChevronRight } from 'lucide-react';

type Device = 'iphone' | 'android' | 'mac' | 'windows';

interface DeviceGuide {
  screenshot: string[];
  screenRecord: string[];
  whereSaved: string;
}

const GUIDES: Record<Device, DeviceGuide> = {
  iphone: {
    screenshot: [
      'Press the Side button + Volume Up button at the same time. Quick press, both buttons together.',
      'A flash + click sound = it worked.',
      'Thumbnail appears at the bottom-left for a few seconds — tap it to edit, share, or save.',
    ],
    screenRecord: [
      'Settings → Control Center → tap "+" next to Screen Recording.',
      'Open Control Center (swipe down from top-right of any iPhone X+; up from bottom on older).',
      'Tap the white circle inside a circle. 3-second countdown.',
      'Stop by re-tapping it or by tapping the red bar at the top of the screen.',
    ],
    whereSaved: 'Both screenshots and screen recordings save to Photos → Albums → Screenshots / Recents.',
  },
  android: {
    screenshot: [
      'Press Power + Volume Down at the same time. Quick press, both buttons.',
      'Some Samsung phones — swipe the edge of your hand across the screen (chop motion).',
      'Confirmation appears at the bottom for a few seconds — tap to share or edit.',
    ],
    screenRecord: [
      'Pull down from the top of the screen with two fingers (full Quick Settings).',
      'Tap "Screen recorder" tile (you may need to add it via the pencil/edit icon first).',
      'Pick whether to record audio. Tap "Start".',
      'Stop by pulling down and tapping "Stop", or tapping the red recording badge.',
    ],
    whereSaved: 'Photos / Gallery app → Screenshots album.',
  },
  mac: {
    screenshot: [
      'Cmd + Shift + 3 — captures the full screen.',
      'Cmd + Shift + 4 — drag to capture part of the screen.',
      'Cmd + Shift + 5 — opens the screenshot toolbar with all options.',
    ],
    screenRecord: [
      'Cmd + Shift + 5 → click the screen-record icon (rectangle).',
      'Pick "Record Entire Screen" or "Record Selected Portion".',
      'Click Record. To stop: click the stop button in the menu bar at the top.',
    ],
    whereSaved: 'Defaults to Desktop. Change in the Cmd+Shift+5 toolbar → Options → Save to.',
  },
  windows: {
    screenshot: [
      'Windows + Shift + S — opens Snipping Tool. Drag to select what to capture.',
      'Or PrtScn (Print Screen) key — full screen, copies to clipboard.',
      'Or Windows + PrtScn — saves a full screenshot to your Pictures folder.',
    ],
    screenRecord: [
      'Press Windows + Alt + R (Game Bar shortcut, works in any app despite the name).',
      'Or press Windows + G to open the full Game Bar with the record toolbar.',
      'Click the record dot. To stop: click the stop button or press Windows + Alt + R again.',
    ],
    whereSaved: 'Pictures → Screenshots folder for screenshots. Videos → Captures for screen recordings.',
  },
};

const USE_CASES = [
  { title: 'Showing a tech buddy what is wrong', detail: 'Screenshot the error message. Send it via text. Way faster than describing it on the phone.' },
  { title: 'Saving a confirmation page', detail: 'Booking a flight, completing an order — screenshot the confirmation. Easier to find later than digging through email.' },
  { title: 'Recording a problem for support', detail: 'Some bugs only appear when you do a specific thing. Record the screen showing it happen, send the video to support.' },
  { title: 'Demonstrating to a grandkid', detail: 'Record yourself walking through how to do something. Send it to a grandchild who keeps forgetting.' },
  { title: 'Proof of something', detail: 'A weird charge on a website, a misleading ad, a scam attempt — screenshot it before it disappears.' },
];

const DEVICES: { id: Device; label: string }[] = [
  { id: 'iphone',  label: 'iPhone' },
  { id: 'android', label: 'Android' },
  { id: 'mac',     label: 'Mac' },
  { id: 'windows', label: 'Windows' },
];

export default function ScreenRecordingGuide() {
  const [device, setDevice] = useState<Device>('iphone');
  const guide = GUIDES[device];

  return (
    <>
      <SEOHead
        title="Screen Recording & Screenshots Guide"
        description="Take screenshots and record your screen on iPhone, Android, Mac, or Windows. Step-by-step shortcuts, where the files save, and five real reasons to use them."
        path="/tools/screen-recording-guide"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Camera className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Screenshots &amp; Screen Recording</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The keyboard shortcuts that make showing-the-screen 10x easier. iPhone, Android, Mac, Windows.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Screen Recording Guide' }]} />

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
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Take a screenshot</p>
              <ol className="space-y-2 mb-5">
                {guide.screenshot.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Record the screen</p>
              <ol className="space-y-2 mb-5">
                {guide.screenRecord.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-300"><strong>Where files save:</strong> {guide.whereSaved}</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">When to use this</p>
          <div className="space-y-3 mb-6">
            {USE_CASES.map(u => (
              <Card key={u.title} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{u.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{u.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Editing screenshots</p>
              <p className="text-xs text-muted-foreground">
                Most platforms let you crop and annotate immediately after capturing. Tap the thumbnail (iPhone, Android) or click the toast (Windows) to draw arrows, highlight, or blur sensitive info before sharing.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/remote-tech-help" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Remote Tech Help</p>
                <p className="text-xs text-muted-foreground mt-0.5">Live screen-share with a helper.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find old screenshots later.</p>
              </Link>
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner</p>
                <p className="text-xs text-muted-foreground mt-0.5">For paper, not screens.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: blur sensitive info BEFORE sharing — credit card numbers, addresses, account screens. Most editors have a "redact" or "marker" tool.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
