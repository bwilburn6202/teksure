import { useState } from 'react';
import { Smartphone, CheckCircle2, RotateCcw, ChevronRight, Star, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type Usage = 'video-calls' | 'banking' | 'photos' | 'shopping' | 'reading' | 'health';
type DeviceType = 'iphone' | 'android' | 'windows' | 'mac';
type Budget = 'free' | 'paid-ok';
type Simplicity = 'very-simple' | 'normal';

interface Answers { usage: Usage | null; device: DeviceType | null; budget: Budget | null; simplicity: Simplicity | null; }

/* ── App data ────────────────────────────── */
interface AppRec {
  name: string; emoji: string; tagline: string; description: string;
  whySeniors: string; price: string; rating: string;
  iosUrl?: string; androidUrl?: string; windowsUrl?: string;
  badge?: string;
}

type AppData = Record<Usage, Record<DeviceType, AppRec[]>>;

const appData: AppData = {
  'video-calls': {
    iphone: [
      { name: 'FaceTime', emoji: '', tagline: 'Built-in Apple video calling', description: 'Already on your iPhone — free calls to any other Apple device.', whySeniors: "No setup needed — tap a contact's name. Large clear buttons.", price: 'Free', rating: '4.8', iosUrl: 'https://apps.apple.com/app/facetime/id1110145091', badge: 'Best Pick' },
      { name: 'Zoom', emoji: '', tagline: 'Video meetings with anyone', description: 'Join or host video calls with family, doctors, or groups.', whySeniors: 'Simple "Join a Meeting" button. Works on any device so everyone can join.', price: 'Free', rating: '4.6', iosUrl: 'https://apps.apple.com/app/zoom/id546505307' },
    ],
    android: [
      { name: 'Google Meet', emoji: '', tagline: 'Free video calls from Google', description: 'Make free video calls to anyone with a Google account.', whySeniors: 'Pre-installed on many Android phones. Big, clear interface.', price: 'Free', rating: '4.5', androidUrl: 'https://play.google.com/store/apps/details?id=com.google.android.apps.meetings', badge: 'Best Pick' },
      { name: 'WhatsApp', emoji: '', tagline: 'Chat and video call in one app', description: 'Free video calls, voice calls, and messages worldwide.', whySeniors: "Used by billions — your family probably already has it. Easy to find contacts.", price: 'Free', rating: '4.4', androidUrl: 'https://play.google.com/store/apps/details?id=com.whatsapp' },
    ],
    windows: [
      { name: 'Zoom', emoji: '', tagline: 'The most popular video call app', description: 'Join or host video meetings with anyone on any device.', whySeniors: 'Click a meeting link to join. No account needed to join other calls.', price: 'Free', rating: '4.6', windowsUrl: 'https://zoom.us/download', badge: 'Best Pick' },
      { name: 'Microsoft Teams', emoji: '', tagline: 'Video calls built into Windows', description: 'Pre-installed on Windows 11. Great for family group chats.', whySeniors: 'Already on your PC — no download needed on Windows 11.', price: 'Free', rating: '4.4' },
    ],
    mac: [
      { name: 'FaceTime', emoji: '', tagline: 'Apple video calling on your Mac', description: 'Already installed — free calls to any Apple device.', whySeniors: 'Same easy interface on Mac as iPhone. Nothing to download.', price: 'Free', rating: '4.8', badge: 'Best Pick' },
      { name: 'Zoom', emoji: '', tagline: 'Video meetings with anyone', description: 'Join calls with family, friends, or doctors on any device.', whySeniors: 'Click a meeting link — works even if others use Android or Windows.', price: 'Free', rating: '4.6', windowsUrl: 'https://zoom.us/download' },
    ],
  },
  'banking': {
    iphone: [
      { name: 'Your Bank\'s App', emoji: '', tagline: 'Official app from your bank', description: "Search for your bank's name in the App Store — most major banks have free, official apps.", whySeniors: 'Lets you check your balance, pay bills, and transfer money safely without going to the branch.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
      { name: 'Monzo', emoji: '', tagline: 'Simple digital bank', description: 'A friendly, modern bank app with very clear spending summaries.', whySeniors: 'Very simple interface. Instant notifications every time money moves.', price: 'Free', rating: '4.7', iosUrl: 'https://apps.apple.com/app/monzo/id943948612' },
    ],
    android: [
      { name: 'Your Bank\'s App', emoji: '', tagline: 'Official app from your bank', description: "Search for your bank's name in Google Play — most major banks have free, official apps.", whySeniors: 'Lets you check your balance, pay bills, and transfer money without going to the branch.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
      { name: 'Google Pay', emoji: '', tagline: 'Pay with your phone', description: 'Tap your phone on a card reader to pay — like a contactless card.', whySeniors: 'No need to dig out your wallet. Works at millions of shops.', price: 'Free', rating: '4.3', androidUrl: 'https://pay.google.com' },
    ],
    windows: [
      { name: 'Your Bank\'s Website', emoji: '', tagline: 'Use your browser', description: "Most banks have excellent websites — open your bank's website and look for 'Online Banking'.", whySeniors: 'No app to download. Large screen makes everything easier to read.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
    ],
    mac: [
      { name: 'Your Bank\'s Website', emoji: '', tagline: 'Use your browser', description: "Most banks have excellent websites — open your bank's website and look for 'Online Banking'.", whySeniors: 'No app to download. Large screen makes everything easier to read.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
    ],
  },
  'photos': {
    iphone: [
      { name: 'iCloud Photos', emoji: '', tagline: 'Built-in Apple photo backup', description: 'Automatically backs up every photo to Apple\'s cloud — free for up to 5GB.', whySeniors: 'Nothing to set up — turn it on once and it works automatically forever.', price: 'Free (5GB) / $0.99/mo more', rating: '4.7', badge: 'Best Pick' },
      { name: 'Google Photos', emoji: '', tagline: 'Free unlimited photo storage', description: 'Backs up all your photos and lets you search them (e.g. "beach 2019").', whySeniors: 'Easy to share albums with family. Smart search finds photos by face, place, or date.', price: 'Free (15GB)', rating: '4.6', iosUrl: 'https://apps.apple.com/app/google-photos/id962194608' },
    ],
    android: [
      { name: 'Google Photos', emoji: '', tagline: 'Free unlimited photo backup', description: 'Backs up all your photos automatically and organizes them by date and place.', whySeniors: 'Easy to share albums with family. Already on most Android phones.', price: 'Free (15GB)', rating: '4.6', androidUrl: 'https://play.google.com/store/apps/details?id=com.google.android.apps.photos', badge: 'Best Pick' },
    ],
    windows: [
      { name: 'Google Photos (browser)', emoji: '', tagline: 'View and manage photos online', description: 'Access all your Google Photos from photos.google.com — no download needed.', whySeniors: 'Big screen makes it easy to browse and edit photos. Download for printing.', price: 'Free (15GB)', rating: '4.6', badge: 'Best Pick' },
      { name: 'Microsoft Photos', emoji: '', tagline: 'Built-in Windows photo viewer', description: 'Already installed on Windows — view, edit, and organize photos easily.', whySeniors: 'No setup needed — double-click any photo to open it.', price: 'Free', rating: '4.2' },
    ],
    mac: [
      { name: 'Apple Photos', emoji: '', tagline: 'Built-in Mac photo manager', description: "Already installed on your Mac — organizes photos by year, month, and day automatically.", whySeniors: 'Nothing to install. Syncs with your iPhone automatically via iCloud.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
    ],
  },
  'shopping': {
    iphone: [
      { name: 'Amazon', emoji: '', tagline: 'Huge selection, fast delivery', description: "The world's biggest online shop with millions of products.", whySeniors: 'Easy returns, fast delivery, and customer reviews help you choose safely.', price: 'Free app', rating: '4.7', iosUrl: 'https://apps.apple.com/app/amazon/id297606951', badge: 'Best Pick' },
      { name: 'eBay', emoji: '', tagline: 'New and secondhand items', description: 'Buy new or used items — great for finding bargains.', whySeniors: 'Good buyer protection. Useful for finding discontinued products.', price: 'Free app', rating: '4.5', iosUrl: 'https://apps.apple.com/app/ebay/id282614216' },
    ],
    android: [
      { name: 'Amazon', emoji: '', tagline: 'Huge selection, fast delivery', description: "The world's biggest online shop with millions of products.", whySeniors: 'Easy returns, fast delivery, and customer reviews help you choose safely.', price: 'Free app', rating: '4.7', androidUrl: 'https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping', badge: 'Best Pick' },
    ],
    windows: [
      { name: 'amazon.co.uk / .com', emoji: '', tagline: 'Shop in your browser', description: 'Visit amazon.co.uk or amazon.com in any browser — no app needed.', whySeniors: 'Large screen makes shopping easier. Easy to compare products side by side.', price: 'Free', rating: '4.7', badge: 'Best Pick' },
    ],
    mac: [
      { name: 'amazon.co.uk / .com', emoji: '', tagline: 'Shop in your browser', description: 'Visit amazon.co.uk or amazon.com in your browser — no app needed.', whySeniors: 'Large screen makes shopping easier. Easy to compare products side by side.', price: 'Free', rating: '4.7', badge: 'Best Pick' },
    ],
  },
  'reading': {
    iphone: [
      { name: 'Kindle', emoji: '', tagline: "Amazon's e-book reader", description: 'Read millions of books — many are free. Adjust font size to your comfort.', whySeniors: "Large font options, no glare, and you can read in the dark. Buy once, read on any device.", price: 'Free app; books from $0', rating: '4.8', iosUrl: 'https://apps.apple.com/app/amazon-kindle/id302584613', badge: 'Best Pick' },
      { name: 'Libby', emoji: '', tagline: 'Free library books on your phone', description: 'Borrow e-books and audiobooks for free with your library card.', whySeniors: 'Completely free. Large selection. No late fees — books return automatically.', price: 'Free', rating: '4.8', iosUrl: 'https://apps.apple.com/app/libby-by-overdrive/id1076402606' },
    ],
    android: [
      { name: 'Kindle', emoji: '', tagline: "Amazon's e-book reader", description: 'Read millions of books — many are free. Large font options.', whySeniors: 'Adjustable text size and background color for comfortable reading.', price: 'Free app; books from $0', rating: '4.7', androidUrl: 'https://play.google.com/store/apps/details?id=com.amazon.kindle', badge: 'Best Pick' },
      { name: 'Libby', emoji: '', tagline: 'Free library books on your phone', description: 'Borrow e-books free with your library card.', whySeniors: 'Completely free. No late fees.', price: 'Free', rating: '4.8', androidUrl: 'https://play.google.com/store/apps/details?id=com.overdrive.mobile.android.libby' },
    ],
    windows: [
      { name: 'Kindle (browser)', emoji: '', tagline: "Read on your PC", description: 'Read any Kindle book at read.amazon.co.uk — no download needed.', whySeniors: 'Large screen is easier on the eyes. Adjustable font size.', price: 'Free', rating: '4.7', badge: 'Best Pick' },
    ],
    mac: [
      { name: 'Apple Books', emoji: '', tagline: 'Built-in Mac reading app', description: 'Already installed. Buy or get free books from the Apple Books store.', whySeniors: 'Nothing to install. Large font options. Syncs with iPhone automatically.', price: 'Free app', rating: '4.6', badge: 'Best Pick' },
      { name: 'Kindle (browser)', emoji: '', tagline: "Read on your Mac", description: 'Read any Kindle book at read.amazon.co.uk — no download needed.', whySeniors: 'Huge selection. One account works on all devices.', price: 'Free', rating: '4.7' },
    ],
  },
  'health': {
    iphone: [
      { name: 'Apple Health', emoji: '', tagline: 'Built-in health tracking', description: "Already on your iPhone — tracks steps, heart rate (with Apple Watch), sleep, and more.", whySeniors: 'No setup needed. Can share data with your doctor. Emergency health card visible on lock screen.', price: 'Free', rating: '4.6', badge: 'Best Pick' },
      { name: 'Medisafe', emoji: '', tagline: 'Medication reminder app', description: 'Never forget a dose — set up reminders for every medication.', whySeniors: 'Very clear, simple design. Family members can also get notified if you miss a dose.', price: 'Free', rating: '4.7', iosUrl: 'https://apps.apple.com/app/medisafe-medication-management/id573916946' },
    ],
    android: [
      { name: 'Google Fit', emoji: '', tagline: 'Free health tracker from Google', description: 'Tracks your steps, activity, and heart rate. Connects to most fitness devices.', whySeniors: 'Simple weekly summary shows how active you were. Works without a smartwatch.', price: 'Free', rating: '4.3', androidUrl: 'https://play.google.com/store/apps/details?id=com.google.android.apps.fitness', badge: 'Best Pick' },
      { name: 'Medisafe', emoji: '', tagline: 'Medication reminder app', description: 'Never forget a dose — set up reminders for every medication.', whySeniors: 'Very clear, simple design. Family can be notified if you miss a dose.', price: 'Free', rating: '4.7', androidUrl: 'https://play.google.com/store/apps/details?id=com.medisafe.android.client' },
    ],
    windows: [
      { name: 'NHS App (browser)', emoji: '', tagline: 'Access NHS services online', description: 'Book GP appointments, order prescriptions, and view your health record at nhs.uk.', whySeniors: 'Large screen is easiest for filling in forms and reading health information.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
    ],
    mac: [
      { name: 'NHS App (browser)', emoji: '', tagline: 'Access NHS services online', description: 'Book GP appointments, order prescriptions, and view your health record at nhs.uk.', whySeniors: 'Large screen is easiest for filling in forms and reading health information.', price: 'Free', rating: '4.5', badge: 'Best Pick' },
    ],
  },
};

const usageOptions: { id: Usage; label: string; emoji: string; desc: string }[] = [
  { id: 'video-calls', label: 'Video calls', emoji: '', desc: 'FaceTime, Zoom, WhatsApp video' },
  { id: 'banking', label: 'Banking', emoji: '', desc: 'Checking balance, paying bills' },
  { id: 'photos', label: 'Photos', emoji: '', desc: 'Backing up and sharing photos' },
  { id: 'shopping', label: 'Shopping', emoji: '', desc: 'Buying things online safely' },
  { id: 'reading', label: 'Reading', emoji: '', desc: 'E-books and audiobooks' },
  { id: 'health', label: 'Health & medication', emoji: '', desc: 'Reminders, NHS access, tracking' },
];

const deviceOptions: { id: DeviceType; label: string; emoji: string }[] = [
  { id: 'iphone', label: 'iPhone / iPad', emoji: '' },
  { id: 'android', label: 'Android phone', emoji: '' },
  { id: 'windows', label: 'Windows PC / Laptop', emoji: '' },
  { id: 'mac', label: 'Mac / MacBook', emoji: '' },
];

const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

export default function AppRecommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ usage: null, device: null, budget: null, simplicity: null });

  const progress = (step / 3) * 100;
  const recs = answers.usage && answers.device ? (appData[answers.usage][answers.device] ?? []) : [];

  function reset() { setStep(0); setAnswers({ usage: null, device: null, budget: null, simplicity: null }); }

  return (
    <>
      <SEOHead
        title="App Recommender | TekSure"
        description="Not sure which app to use? Answer 3 questions and get personalized app recommendations for your device and needs."
        path="/tools/app-recommender"
      />
      <Navbar />
      <main className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Smartphone className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">App Recommender</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Tell us what you want to do and which device you use — we'll recommend the best apps for you.
        </p>

        {step < 3 && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Question {step + 1} of 3</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <>

          {/* Step 0 — What do you want to do? */}
          {step === 0 && (
            <div key="usage" {...slide}>
              <h2 className="text-xl font-semibold mb-4">What do you want to do with your device?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {usageOptions.map(u => (
                  <button
                    key={u.id}
                    onClick={() => { setAnswers(p => ({ ...p, usage: u.id })); setStep(1); }}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <span className="text-3xl">{u.emoji}</span>
                    <div>
                      <div className="font-medium">{u.label}</div>
                      <div className="text-xs text-muted-foreground">{u.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Which device? */}
          {step === 1 && (
            <div key="device" {...slide}>
              <h2 className="text-xl font-semibold mb-4">Which device do you mainly use?</h2>
              <div className="grid gap-3">
                {deviceOptions.map(d => (
                  <button
                    key={d.id}
                    onClick={() => { setAnswers(p => ({ ...p, device: d.id })); setStep(2); }}
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <span className="text-3xl">{d.emoji}</span>
                    <span className="font-medium">{d.label}</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto" />
                  </button>
                ))}
              </div>
              <Button variant="ghost" className="mt-4" onClick={() => setStep(0)}>← Back</Button>
            </div>
          )}

          {/* Step 2 — Free or paid? */}
          {step === 2 && (
            <div key="budget" {...slide}>
              <h2 className="text-xl font-semibold mb-4">Are you happy to pay for apps?</h2>
              <div className="grid gap-3">
                <button
                  onClick={() => { setAnswers(p => ({ ...p, budget: 'free' })); setStep(3); }}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl">🆓</span>
                  <div>
                    <div className="font-medium">Free only, please</div>
                    <div className="text-sm text-muted-foreground">Show me only apps that cost nothing</div>
                  </div>
                </button>
                <button
                  onClick={() => { setAnswers(p => ({ ...p, budget: 'paid-ok' })); setStep(3); }}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-3xl"></span>
                  <div>
                    <div className="font-medium">I'll consider paid apps</div>
                    <div className="text-sm text-muted-foreground">Show me the best option, free or paid</div>
                  </div>
                </button>
              </div>
              <Button variant="ghost" className="mt-4" onClick={() => setStep(1)}>← Back</Button>
            </div>
          )}

          {/* Step 3 — Results */}
          {step === 3 && (
            <div key="results" {...slide}>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-7 w-7 text-primary" />
                <h2 className="text-2xl font-bold">Your App Recommendations</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Here are the best apps for <strong>{usageOptions.find(u => u.id === answers.usage)?.label.toLowerCase()}</strong> on your <strong>{deviceOptions.find(d => d.id === answers.device)?.label}</strong>:
              </p>

              <div className="grid gap-4 mb-8">
                {recs.map((app, i) => (
                  <Card key={i} className={`transition-shadow hover:shadow-md ${i === 0 ? 'border-primary/40 bg-primary/5' : ''}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{app.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-lg font-bold">{app.name}</span>
                            {app.badge && <Badge className="bg-primary text-primary-foreground text-xs">{app.badge}</Badge>}
                            <span className="text-sm text-muted-foreground ml-auto">{app.rating}</span>
                          </div>
                          <p className="text-sm font-medium text-primary mb-1">{app.tagline}</p>
                          <p className="text-sm text-muted-foreground mb-2">{app.description}</p>
                          <div className="rounded-lg bg-muted/60 p-3 mb-3">
                            <p className="text-xs font-semibold text-muted-foreground mb-0.5">Why it's great for beginners:</p>
                            <p className="text-sm">{app.whySeniors}</p>
                          </div>
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-sm font-medium">{app.price}</span>
                            <div className="flex gap-2">
                              {app.iosUrl && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={app.iosUrl} target="_blank" rel="noreferrer">
                                    App Store <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              )}
                              {app.androidUrl && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={app.androidUrl} target="_blank" rel="noreferrer">
                                    Google Play <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              )}
                              {app.windowsUrl && !app.iosUrl && !app.androidUrl && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={app.windowsUrl} target="_blank" rel="noreferrer">
                                    Download <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 mb-6">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1"> Safety tip</p>
                <p className="text-sm text-amber-700/90 dark:text-amber-300/90">
                  Always download apps from the official App Store or Google Play — never from a random website link. Official stores check every app for safety.
                </p>
              </div>

              <Button variant="outline" onClick={reset} className="gap-2">
                <RotateCcw className="h-4 w-4" /> Try another category
              </Button>
            </div>
          )}

        </>
      </main>
      <Footer />
    </>
  );
}
