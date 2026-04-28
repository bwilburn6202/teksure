import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Printer, FileText, Sparkles } from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Task {
  id: string;
  label: string;
  steps: Record<Phone, string[]>;
}

const TASKS: Task[] = [
  {
    id: 'text',
    label: 'Send a text message',
    steps: {
      iphone: [
        'Tap the green Messages app.',
        'Tap the square pencil icon (top right) to start a new message.',
        'Type a contact name or phone number in the "To:" line.',
        'Type your message in the box at the bottom.',
        'Tap the blue arrow to send.',
      ],
      android: [
        'Open the Messages app.',
        'Tap "Start chat" (bottom right).',
        'Pick a contact or type a phone number.',
        'Type your message at the bottom.',
        'Tap the paper airplane to send.',
      ],
    },
  },
  {
    id: 'photo',
    label: 'Take a photo',
    steps: {
      iphone: [
        'Tap the Camera app (looks like a black camera).',
        'Hold the phone steady. Tap the white circle to take the picture.',
        'To see it, tap the small picture in the bottom-left corner.',
      ],
      android: [
        'Tap the Camera app.',
        'Tap the big circle button at the bottom.',
        'Tap the small thumbnail near the button to view your photo.',
      ],
    },
  },
  {
    id: 'sendphoto',
    label: 'Send a photo to family',
    steps: {
      iphone: [
        'Open Photos. Tap the photo you want to send.',
        'Tap the share icon (square with an up-arrow, bottom-left).',
        'Tap "Messages" → pick the contact → tap the blue arrow.',
      ],
      android: [
        'Open the Gallery (or Photos) app. Tap a photo.',
        'Tap the share icon (three dots in a triangle).',
        'Pick Messages → choose a contact → tap send.',
      ],
    },
  },
  {
    id: 'video-call',
    label: 'Make a video call',
    steps: {
      iphone: [
        'Open FaceTime.',
        'Tap "New FaceTime" at the top.',
        'Type the contact name or phone number.',
        'Tap the green video icon to call.',
      ],
      android: [
        'Open the Google Meet (or Duo) app.',
        'Tap "New call" → "Video".',
        'Pick a contact → tap the call button.',
      ],
    },
  },
  {
    id: 'wifi',
    label: 'Connect to Wi-Fi',
    steps: {
      iphone: [
        'Open Settings (gray gear icon).',
        'Tap "Wi-Fi" near the top.',
        'Tap the network name (your house may say something like "Smith_Home").',
        'Type the password (it is on the back of the router or on your bill).',
        'Tap "Join".',
      ],
      android: [
        'Open Settings.',
        'Tap "Network & Internet" → "Wi-Fi".',
        'Tap the network you want.',
        'Type the password → tap "Connect".',
      ],
    },
  },
  {
    id: 'volume',
    label: 'Make calls louder',
    steps: {
      iphone: [
        'Press the + (volume up) button on the side of your phone while on a call.',
        'For permanent louder ringtones: Settings → Sounds & Haptics → drag the slider up.',
      ],
      android: [
        'Press the volume-up button on the side of your phone during a call.',
        'For louder ringtones: Settings → Sound & vibration → Volume → drag Ring volume up.',
      ],
    },
  },
  {
    id: 'bigger-text',
    label: 'Make text bigger on the screen',
    steps: {
      iphone: [
        'Open Settings → "Display & Brightness" → "Text Size".',
        'Drag the dot at the bottom to the right until it feels comfortable.',
      ],
      android: [
        'Open Settings → "Display" → "Font size".',
        'Drag the slider toward the right.',
      ],
    },
  },
  {
    id: 'flashlight',
    label: 'Turn the flashlight on',
    steps: {
      iphone: [
        'Swipe down from the top-right corner of the screen.',
        'Tap the flashlight icon. Tap it again to turn it off.',
      ],
      android: [
        'Swipe down from the top of the screen with two fingers.',
        'Tap the flashlight tile.',
      ],
    },
  },
  {
    id: 'maps',
    label: 'Get directions somewhere',
    steps: {
      iphone: [
        'Open Maps (the folded map icon).',
        'Tap the search bar → type the address or business name.',
        'Tap "Directions" → tap "Go".',
      ],
      android: [
        'Open Google Maps.',
        'Tap the search bar → type where you want to go.',
        'Tap "Directions" → tap "Start".',
      ],
    },
  },
  {
    id: 'app',
    label: 'Get a new app',
    steps: {
      iphone: [
        'Open the App Store (blue "A" icon).',
        'Tap "Search" at the bottom and type the app name.',
        'Tap "Get" → confirm with Face ID, Touch ID, or your password.',
      ],
      android: [
        'Open the Play Store (white triangle icon).',
        'Tap the search bar at the top.',
        'Tap "Install" → confirm with your fingerprint or password.',
      ],
    },
  },
  {
    id: 'lost',
    label: 'Find my phone if I lose it',
    steps: {
      iphone: [
        'On any computer go to icloud.com/find.',
        'Sign in with your Apple ID.',
        'Pick your phone — you can ring it, lock it, or see it on a map.',
      ],
      android: [
        'On any computer go to google.com/android/find.',
        'Sign in with your Google account.',
        'Pick your phone — you can ring it, lock it, or see it on a map.',
      ],
    },
  },
];

export default function TechCheatsheetGenerator() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [name, setName] = useState('');
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const togglePick = (id: string) => {
    setPicked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 6) next.add(id);
      return next;
    });
  };

  const pickedTasks = useMemo(
    () => TASKS.filter(t => picked.has(t.id)),
    [picked],
  );

  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Tech Cheatsheet Generator"
        description="Pick your phone and the tasks you want help with. We will build a one-page printable cheatsheet you can keep by the kitchen phone."
        path="/tools/tech-cheatsheet-generator"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Cheatsheet Generator</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick your phone, pick up to 6 tasks, hit print. Keep it by the kitchen phone for quick reference.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Tech Cheatsheet Generator' },
            ]}
          />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-5">
              <div>
                <Label className="text-sm font-semibold mb-2 block">Which phone do you have?</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(['iphone', 'android'] as Phone[]).map(p => (
                    <button
                      key={p}
                      onClick={() => setPhone(p)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        phone === p ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <p className="font-medium text-sm">{p === 'iphone' ? 'iPhone' : 'Android phone'}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="name">Your name (optional, prints at the top)</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mom's cheatsheet" className="mt-1" />
              </div>

              {phone && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Pick up to 6 tasks ({picked.size}/6)</Label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {TASKS.map(t => (
                      <label
                        key={t.id}
                        className={`flex items-start gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                          picked.has(t.id) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                        } ${!picked.has(t.id) && picked.size >= 6 ? 'opacity-50' : ''}`}
                      >
                        <Checkbox
                          checked={picked.has(t.id)}
                          onCheckedChange={() => togglePick(t.id)}
                          disabled={!picked.has(t.id) && picked.size >= 6}
                          className="mt-0.5"
                        />
                        <span className="text-sm">{t.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {phone && picked.size > 0 && (
                <Button onClick={printIt} size="lg" className="gap-2 w-full sm:w-auto">
                  <Printer className="h-5 w-5" /> Print my cheatsheet
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/practice-mode" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Practice Mode</p>
                <p className="text-xs text-muted-foreground mt-0.5">Try things in a safe simulator.</p>
              </Link>
              <Link to="/tools/settings-finder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Settings Finder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Where is that setting on my phone?</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan tech help with the whole family.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Print view */}
        <div className="hidden print:block px-8 py-6">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">{name || 'My phone cheatsheet'}</h1>
            <p className="text-sm text-gray-700 mt-1">
              {phone === 'iphone' ? 'iPhone' : 'Android'} — kept simple by TekSure.com
            </p>
          </header>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {pickedTasks.map((t, i) => (
              <section key={t.id} className="break-inside-avoid">
                <p className="font-bold text-base mb-1">{i + 1}. {t.label}</p>
                <ol className="list-decimal pl-5 text-sm leading-snug">
                  {t.steps[phone!].map((s, j) => (
                    <li key={j} className="mb-0.5">{s}</li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <footer className="mt-8 pt-3 border-t border-gray-300 text-xs text-gray-600">
            More free guides at TekSure.com — plain-English tech help for everyone.
          </footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
