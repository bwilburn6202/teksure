import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Camera,
  CheckCircle2,
  ChevronRight,
  Image as ImageIcon,
  HardDrive,
  Shield,
  HeartHandshake,
  HelpCircle,
  Lock,
  Package,
  Printer,
  RotateCcw,
  Share2,
  Sparkles,
  Users,
  Wrench,
  Frame,
  ScanLine,
  AlertTriangle,
  Info,
  Smartphone,
  Eye,
  type LucideIcon,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

/* ──────────────────────────────────────────────────────────────
 * Photo Backup Wizard
 * ----------------------------------------------------------------
 * Senior-friendly wizard that helps pick a cloud photo service,
 * walks through setup, explains the 3-2-1 rule, and covers
 * restoring, sharing, troubleshooting, scanning prints and digital
 * photo frames.
 * ────────────────────────────────────────────────────────────── */

type ServiceId =
  | 'icloud'
  | 'google'
  | 'amazon'
  | 'dropbox'
  | 'onedrive'
  | 'flickr'
  | 'smugmug';

interface Service {
  id: ServiceId;
  name: string;
  tagline: string;
  who: string;
  free: string;
  paid: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  officialUrl: string;
}

const SERVICES: Service[] = [
  {
    id: 'icloud',
    name: 'iCloud Photos',
    tagline: 'Best if you have an iPhone or iPad',
    who: 'iPhone / iPad / Mac users',
    free: '5 GB free',
    paid: '50 GB $0.99 · 200 GB $2.99 · 2 TB $9.99 / month',
    icon: Cloud,
    color: 'text-sky-600',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    officialUrl: 'https://support.apple.com/en-us/HT204264',
  },
  {
    id: 'google',
    name: 'Google Photos',
    tagline: 'Works on iPhone and Android',
    who: 'Anyone with a Gmail account',
    free: '15 GB free (shared with Gmail & Drive)',
    paid: '100 GB $1.99 · 200 GB $2.99 · 2 TB $9.99 / month',
    icon: ImageIcon,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    officialUrl: 'https://support.google.com/photos/',
  },
  {
    id: 'amazon',
    name: 'Amazon Photos',
    tagline: 'Prime members get unlimited photo storage',
    who: 'Amazon Prime members',
    free: 'Unlimited full-resolution photos with Prime',
    paid: '5 GB free video · 100 GB $1.99 · 1 TB $6.99 / month',
    icon: Package,
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    officialUrl: 'https://www.amazon.com/b?node=13234696011',
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    tagline: 'Simple cloud folder for photos and files',
    who: 'People who already use Dropbox for documents',
    free: '2 GB free',
    paid: 'Plus: 2 TB $11.99 / month',
    icon: HardDrive,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    officialUrl: 'https://help.dropbox.com/',
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    tagline: 'Free 1 TB with a Microsoft 365 subscription',
    who: 'Microsoft 365 subscribers and Windows users',
    free: '5 GB free',
    paid: 'Microsoft 365 Personal: 1 TB for $6.99 / month',
    icon: Cloud,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    officialUrl: 'https://support.microsoft.com/onedrive',
  },
  {
    id: 'flickr',
    name: 'Flickr',
    tagline: 'Photo-first community for hobby photographers',
    who: 'Casual photographers who want feedback',
    free: '1,000 photos free',
    paid: 'Pro: $8.25 / month billed yearly — unlimited',
    icon: Camera,
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    officialUrl: 'https://help.flickr.com/',
  },
  {
    id: 'smugmug',
    name: 'SmugMug',
    tagline: 'For serious photographers who want a portfolio',
    who: 'Enthusiasts and pros',
    free: '14-day free trial',
    paid: 'From $13 / month — unlimited',
    icon: Camera,
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    officialUrl: 'https://help.smugmug.com/',
  },
];

/* ── Setup steps per service ─────────────────────────────── */

interface SetupStep {
  title: string;
  body: string;
}

interface SetupPlan {
  id: string;
  label: string;
  intro: string;
  steps: SetupStep[];
  tip?: string;
}

const SETUP_PLANS: Record<string, SetupPlan> = {
  icloud: {
    id: 'icloud',
    label: 'iCloud Photos (iPhone / iPad)',
    intro: 'Turn on iCloud Photos in Settings and every new picture will upload over Wi-Fi automatically.',
    steps: [
      { title: 'Open Settings', body: 'Find the grey gear icon on your home screen and tap it.' },
      { title: 'Tap your name at the top', body: 'That opens your Apple ID where iCloud lives.' },
      { title: 'Tap iCloud, then Photos', body: 'Turn on the switch labeled "Sync this iPhone" or "iCloud Photos".' },
      { title: 'Choose "Optimize iPhone Storage"', body: 'Full-size photos live in the cloud. Your phone keeps smaller versions to save space.' },
      { title: 'Plug in and connect to Wi-Fi', body: 'Leave your phone on the charger overnight. The first upload can take several hours if you have a lot of photos.' },
      { title: 'Check it worked', body: 'On a computer, open iCloud.com, sign in, and click Photos. You should see your pictures there.' },
      { title: 'Upgrade if you need more room', body: 'Settings → your name → iCloud → Manage Account Storage → Change Storage Plan.' },
      { title: 'Share an album with family (optional)', body: 'Open Photos → Albums → + → New Shared Album. Invite family by email or phone number.' },
    ],
    tip: 'If the phone warns you that iCloud is full, you can upgrade the plan or free up space by deleting old iCloud backups and large attachments in Messages.',
  },
  'google-iphone': {
    id: 'google-iphone',
    label: 'Google Photos (iPhone)',
    intro: 'Google Photos runs on iPhone through a free app. It is a great second backup even if you already use iCloud.',
    steps: [
      { title: 'Install Google Photos', body: 'Open the App Store, search "Google Photos", tap Get, and sign in with Face ID or your Apple ID password.' },
      { title: 'Sign in with your Gmail', body: 'Use the same Google account you use for Gmail. If you do not have one, tap "Create account".' },
      { title: 'Turn on Backup', body: 'Tap your profile picture in the top right → Photos settings → Backup → turn the switch on.' },
      { title: 'Pick a quality', body: '"Storage saver" is fine for most memories. Pick "Original quality" only if you are a serious photographer.' },
      { title: 'Allow access to photos', body: 'Choose "All Photos" when iPhone asks — otherwise Google can only back up a few.' },
      { title: 'Let it upload', body: 'Leave the phone on Wi-Fi and plugged in. A large library can take overnight or longer.' },
      { title: 'Verify at photos.google.com', body: 'Open Chrome or Safari on a computer, visit photos.google.com, and sign in. Your photos should be there.' },
      { title: 'Turn on Partner Sharing (optional)', body: 'Settings → Partner sharing → invite your spouse or adult child so they see new photos automatically.' },
    ],
    tip: 'Google Photos counts against the 15 GB free you share with Gmail and Google Drive. If you get close, either upgrade to Google One or delete big email attachments.',
  },
  'google-android': {
    id: 'google-android',
    label: 'Google Photos (Android)',
    intro: 'Google Photos is already installed on most Android phones. You only need to turn on Backup.',
    steps: [
      { title: 'Open the Photos app', body: 'Look for the colorful pinwheel icon. If it is missing, install "Google Photos" from the Play Store.' },
      { title: 'Tap your profile picture', body: 'Top right corner — a small circle with your initial or photo.' },
      { title: 'Tap Photos settings → Backup', body: 'This is the menu where backup lives.' },
      { title: 'Turn on Backup', body: 'Toggle the switch so it turns blue.' },
      { title: 'Pick Wi-Fi only vs cellular', body: 'Leave "Back up over mobile data" OFF to avoid surprise phone-bill charges.' },
      { title: 'Choose upload quality', body: 'Storage saver is fine for phone photos. Original quality uses more of your Google storage.' },
      { title: 'Verify at photos.google.com', body: 'Open a browser, sign in, and check your pictures are there.' },
      { title: 'Set up Partner Sharing', body: 'Tap profile → Photos settings → Partner sharing. Invite your spouse so they see family photos automatically.' },
    ],
    tip: 'If you ever see "Backup paused," tap the warning and check for low battery, Battery Saver mode, or weak Wi-Fi.',
  },
  amazon: {
    id: 'amazon',
    label: 'Amazon Photos (iPhone / Android)',
    intro: 'If you pay for Amazon Prime you already have unlimited photo backup — no extra charge.',
    steps: [
      { title: 'Install Amazon Photos', body: 'Search "Amazon Photos" in the App Store or Play Store and install.' },
      { title: 'Sign in with your Amazon account', body: 'Use the same email and password you use to shop on Amazon.' },
      { title: 'Allow access to your photos', body: 'When asked, pick "All Photos" so Amazon can back everything up.' },
      { title: 'Turn on Auto-Save', body: 'Tap More → Settings → Auto-Save. Toggle it on.' },
      { title: 'Wait for the first upload', body: 'Keep the phone on Wi-Fi and plugged in overnight.' },
      { title: 'Verify on a computer', body: 'Visit amazon.com/photos, sign in, and make sure your pictures appear.' },
      { title: 'Invite family to your Family Vault', body: 'Tap Family Vault → Invite Family. Up to 5 people can share your unlimited photo storage.' },
    ],
    tip: 'Amazon Photos is unlimited only for photos. Videos count against the 5 GB free or a paid plan.',
  },
  dropbox: {
    id: 'dropbox',
    label: 'Dropbox Camera Upload',
    intro: 'Dropbox can auto-upload your phone photos into a folder called "Camera Uploads".',
    steps: [
      { title: 'Install Dropbox', body: 'Search "Dropbox" in your phone\'s app store.' },
      { title: 'Sign in or create an account', body: 'Free accounts get 2 GB of space.' },
      { title: 'Turn on Camera Uploads', body: 'Tap the gear icon → Camera Uploads → turn it on.' },
      { title: 'Allow photo access', body: 'Pick "All Photos" so Dropbox can see your whole library.' },
      { title: 'Choose Wi-Fi only', body: 'Leave "Use cellular data" OFF to protect your data plan.' },
      { title: 'Verify on dropbox.com', body: 'Sign in, open the "Camera Uploads" folder, and make sure the photos are there.' },
    ],
    tip: 'Dropbox free only gives you 2 GB. If you have lots of photos, Google Photos or iCloud is usually cheaper.',
  },
  onedrive: {
    id: 'onedrive',
    label: 'Microsoft OneDrive',
    intro: 'If you pay for Microsoft 365 you already have 1 TB of space — plenty for photos.',
    steps: [
      { title: 'Install OneDrive', body: 'Search "OneDrive" in the App Store or Play Store.' },
      { title: 'Sign in with your Microsoft account', body: 'Use the same email and password you use for Outlook or Office.' },
      { title: 'Tap "Turn on Camera Upload"', body: 'You will see this on the home screen the first time you open the app.' },
      { title: 'Allow access to photos', body: 'Pick "All Photos" so OneDrive can back up everything.' },
      { title: 'Leave "Include videos" on', body: 'Videos are what fill your phone fastest. Backing them up is a lifesaver.' },
      { title: 'Verify on onedrive.live.com', body: 'Open a browser, sign in, and look for the "Pictures" or "Camera Roll" folder.' },
    ],
    tip: 'OneDrive gives you a generous 1 TB bundled with Microsoft 365 — one of the best deals if you already pay for Office.',
  },
  flickr: {
    id: 'flickr',
    label: 'Flickr',
    intro: 'Flickr is popular with hobby photographers and has a friendly community.',
    steps: [
      { title: 'Create a Flickr account', body: 'Visit flickr.com and tap Sign Up. Free accounts get 1,000 photos.' },
      { title: 'Install the Flickr app', body: 'Search "Flickr" in the App Store or Play Store.' },
      { title: 'Turn on Auto-Upload', body: 'Open the app → Profile → Settings → Auto-Uploadr → turn it on.' },
      { title: 'Make uploads private by default', body: 'Flickr is public-first. In the upload settings, change new uploads to "Private" unless you want the world to see them.' },
      { title: 'Let the first batch finish', body: 'Plug in and connect to Wi-Fi overnight.' },
      { title: 'Browse your photos on flickr.com', body: 'Sign in and click your profile to see the uploads.' },
    ],
    tip: 'Free Flickr caps you at 1,000 photos total. If you have more, upgrade to Flickr Pro or use a different service.',
  },
  smugmug: {
    id: 'smugmug',
    label: 'SmugMug',
    intro: 'SmugMug is built for people who want a polished photo portfolio.',
    steps: [
      { title: 'Start a free 14-day trial', body: 'Visit smugmug.com and pick a plan. You will not be charged during the trial.' },
      { title: 'Install the SmugMug app', body: 'Search "SmugMug" in the App Store or Play Store.' },
      { title: 'Sign in', body: 'Use the email and password from your trial account.' },
      { title: 'Turn on Auto-Upload', body: 'In the app, open Settings → Auto-Upload and turn it on.' },
      { title: 'Organize into galleries', body: 'On the website, create galleries by year or event so family can browse easily.' },
      { title: 'Share with family', body: 'Each gallery can be password-protected or shared by link.' },
    ],
    tip: 'SmugMug is overkill for casual family photos. Most people are better off with Google Photos or iCloud.',
  },
};

/* ── Decision helper quiz ──────────────────────────────── */

type Phone = 'iphone' | 'android';
type Pay = 'free' | 'paid';
type ShareFamily = 'yes' | 'no';
type ExistingSub = 'prime' | 'm365' | 'neither';

interface QuizAnswers {
  phone: Phone | null;
  pay: Pay | null;
  share: ShareFamily | null;
  sub: ExistingSub | null;
}

interface Recommendation {
  name: string;
  id: ServiceId;
  reason: string;
}

function recommend(a: QuizAnswers): Recommendation[] {
  const recs: Recommendation[] = [];
  if (!a.phone || !a.pay || !a.share || !a.sub) return recs;

  if (a.sub === 'prime') {
    recs.push({
      name: 'Amazon Photos',
      id: 'amazon',
      reason: 'You already pay for Prime — photo backup is unlimited and included.',
    });
  }
  if (a.sub === 'm365') {
    recs.push({
      name: 'OneDrive',
      id: 'onedrive',
      reason: 'Your Microsoft 365 subscription includes 1 TB of OneDrive — plenty for every photo you will ever take.',
    });
  }

  if (a.phone === 'iphone') {
    recs.push({
      name: 'iCloud Photos',
      id: 'icloud',
      reason: 'Built right into your iPhone — nothing to install, and it syncs with every Apple device you own.',
    });
  }

  recs.push({
    name: 'Google Photos',
    id: 'google',
    reason: a.share === 'yes'
      ? 'Partner Sharing automatically sends new photos to your spouse or adult child — and it works on iPhone and Android.'
      : 'The most flexible option — works on any phone and makes it easy to search by face or place.',
  });

  const seen = new Set<ServiceId>();
  const unique: Recommendation[] = [];
  for (const r of recs) {
    if (seen.has(r.id)) continue;
    seen.add(r.id);
    unique.push(r);
  }
  return unique.slice(0, 2);
}

/* ── Main component ───────────────────────────────────── */

export default function PhotoBackupWizard() {
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);
  const [quiz, setQuiz] = useState<QuizAnswers>({ phone: null, pay: null, share: null, sub: null });

  const quizComplete =
    !!quiz.phone && !!quiz.pay && !!quiz.share && !!quiz.sub;
  const recs = useMemo(() => recommend(quiz), [quiz]);

  const setupKeys = useMemo(() => {
    if (!selectedService) return [];
    if (selectedService === 'google') return ['google-iphone', 'google-android'];
    return [selectedService];
  }, [selectedService]);

  const resetQuiz = () =>
    setQuiz({ phone: null, pay: null, share: null, sub: null });

  return (
    <>
      <SEOHead
        title="Photo Backup Wizard — Protect Your Photos in 15 Minutes | TekSure"
        description="Senior-friendly guide to backing up your photos. Compare iCloud, Google Photos, Amazon Photos, Dropbox, OneDrive, Flickr, and SmugMug — then follow step-by-step setup."
        path="/tools/photo-backup-wizard"
      />

      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50 dark:from-sky-950/40 dark:via-blue-950/30 dark:to-indigo-950/20" />
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_60%)]" />
          <div className="container relative py-10 md:py-14">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="photo-backup-wizard"
                title="Photo Backup Wizard"
                url="/tools/photo-backup-wizard"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <Badge
                variant="outline"
                className="text-xs border-sky-300 text-sky-800 dark:text-sky-200"
              >
                Photo safety · Walk-through
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
              Protect Your Photos — Automatic Backup in 15 Minutes
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Never lose a family photo again. Set it up once, and you&apos;re covered.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl py-10 space-y-10">
          {/* ── Why this matters ────────────────────── */}
          <Alert className="border-sky-200 bg-sky-50 dark:bg-sky-950/30">
            <AlertTriangle className="h-5 w-5 text-sky-700" />
            <AlertTitle className="text-base">Why this matters</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              About 1 in 3 people lose photos permanently — dropped phones, stolen devices, accidental
              deletions, or forgotten passwords. Cloud backup is the fix. Once you turn it on, every
              new photo you take is safe before you even put the phone down.
            </AlertDescription>
          </Alert>

          {/* ── Decision helper quiz ────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Not sure where to start?</h2>
                <p className="text-base text-muted-foreground mt-1">
                  Answer 4 quick questions and we&apos;ll recommend the best 2 services for you.
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="py-6 space-y-6">
                {/* Q1 phone */}
                <div className="space-y-3">
                  <Label className="text-base">1. What kind of phone do you have?</Label>
                  <RadioGroup
                    value={quiz.phone ?? ''}
                    onValueChange={(v: Phone) => setQuiz((p) => ({ ...p, phone: v }))}
                    className="grid sm:grid-cols-2 gap-2"
                  >
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="iphone" id="q1-iphone" />
                      <span>iPhone or iPad</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="android" id="q1-android" />
                      <span>Android (Samsung, Pixel, etc.)</span>
                    </label>
                  </RadioGroup>
                </div>

                {/* Q2 pay */}
                <div className="space-y-3">
                  <Label className="text-base">2. Are you willing to pay a monthly fee?</Label>
                  <RadioGroup
                    value={quiz.pay ?? ''}
                    onValueChange={(v: Pay) => setQuiz((p) => ({ ...p, pay: v }))}
                    className="grid sm:grid-cols-2 gap-2"
                  >
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="free" id="q2-free" />
                      <span>Free only, please</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="paid" id="q2-paid" />
                      <span>A few dollars a month is fine</span>
                    </label>
                  </RadioGroup>
                </div>

                {/* Q3 share */}
                <div className="space-y-3">
                  <Label className="text-base">3. Do you want to share photos with family?</Label>
                  <RadioGroup
                    value={quiz.share ?? ''}
                    onValueChange={(v: ShareFamily) => setQuiz((p) => ({ ...p, share: v }))}
                    className="grid sm:grid-cols-2 gap-2"
                  >
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="yes" id="q3-yes" />
                      <span>Yes — with my spouse or kids</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="no" id="q3-no" />
                      <span>Only for me</span>
                    </label>
                  </RadioGroup>
                </div>

                {/* Q4 subscription */}
                <div className="space-y-3">
                  <Label className="text-base">
                    4. Do you already pay for Amazon Prime or Microsoft 365?
                  </Label>
                  <RadioGroup
                    value={quiz.sub ?? ''}
                    onValueChange={(v: ExistingSub) => setQuiz((p) => ({ ...p, sub: v }))}
                    className="grid sm:grid-cols-3 gap-2"
                  >
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="prime" id="q4-prime" />
                      <span>Prime</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="m365" id="q4-m365" />
                      <span>Microsoft 365</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 min-h-14 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer text-base">
                      <RadioGroupItem value="neither" id="q4-neither" />
                      <span>Neither</span>
                    </label>
                  </RadioGroup>
                </div>

                <Progress
                  value={
                    (Number(!!quiz.phone) + Number(!!quiz.pay) + Number(!!quiz.share) + Number(!!quiz.sub)) * 25
                  }
                  className="h-1.5"
                />

                {quizComplete && (
                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      Your top 2 matches
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {recs.map((r) => (
                        <Card key={r.id} className="border-primary/30">
                          <CardContent className="py-5">
                            <p className="font-semibold text-lg">{r.name}</p>
                            <p className="text-base text-muted-foreground leading-relaxed mt-1">
                              {r.reason}
                            </p>
                            <Button
                              className="mt-4 gap-2 min-h-14 text-base"
                              onClick={() => setSelectedService(r.id)}
                            >
                              Set this up <ChevronRight className="h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      onClick={resetQuiz}
                      className="gap-2 text-muted-foreground"
                    >
                      <RotateCcw className="h-4 w-4" /> Start quiz over
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* ── Service picker ─────────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Pick a service</h2>
            <p className="text-base text-muted-foreground mb-5">
              Tap any card to see step-by-step setup instructions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                const selected = selectedService === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`min-h-14 text-left rounded-2xl border-2 p-5 transition-all ${
                      selected
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    <div className={`h-11 w-11 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`h-5 w-5 ${s.color}`} />
                    </div>
                    <p className="font-semibold text-lg leading-tight">{s.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.tagline}</p>
                    <div className="mt-3 space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Who it&apos;s for:</span> {s.who}</p>
                      <p><span className="text-muted-foreground">Free tier:</span> {s.free}</p>
                      <p><span className="text-muted-foreground">Paid plans:</span> {s.paid}</p>
                    </div>
                    {selected && (
                      <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4" /> Selected
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Setup walkthrough ──────────────────── */}
          {selectedService && (
            <section id="setup">
              <div className="flex items-start gap-3 mb-4">
                <Wrench className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Set it up step-by-step</h2>
                  <p className="text-base text-muted-foreground mt-1">
                    Short steps in plain language. Take your time.
                  </p>
                </div>
              </div>

              {selectedService === 'google' ? (
                <Tabs defaultValue="google-iphone">
                  <TabsList className="grid grid-cols-2 w-full min-h-14">
                    <TabsTrigger value="google-iphone" className="text-base">iPhone</TabsTrigger>
                    <TabsTrigger value="google-android" className="text-base">Android</TabsTrigger>
                  </TabsList>
                  {setupKeys.map((k) => {
                    const plan = SETUP_PLANS[k];
                    if (!plan) return null;
                    return (
                      <TabsContent key={k} value={k}>
                        <SetupCard plan={plan} officialUrl={SERVICES.find((s) => s.id === 'google')?.officialUrl ?? ''} />
                      </TabsContent>
                    );
                  })}
                </Tabs>
              ) : (
                <SetupCard
                  plan={SETUP_PLANS[selectedService]}
                  officialUrl={SERVICES.find((s) => s.id === selectedService)?.officialUrl ?? ''}
                />
              )}
            </section>
          )}

          {/* ── 3-2-1 best practice ────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">The 3-2-1 backup rule</h2>
                <p className="text-base text-muted-foreground mt-1">
                  Professional photographers swear by this and it works equally well for family photos.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <Card>
                <CardContent className="py-5">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="font-semibold mt-1">Three copies</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Keep at least three copies of any photo that matters to you.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <p className="font-semibold mt-1">Two types of storage</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    For example: cloud + external hard drive. Not both in the cloud.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <p className="font-semibold mt-1">One offsite</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    One copy somewhere else — a relative&apos;s house, a safe-deposit box, or the cloud.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-4">
              <Printer className="h-5 w-5" />
              <AlertTitle className="text-base">Print your 25 best photos every year</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Paper is the most reliable backup there is. Services like Mpix, Shutterfly, and
                Walgreens will print a box of photos for about $20. You will thank yourself in 20 years.
              </AlertDescription>
            </Alert>
          </section>

          {/* ── Organizing tips ────────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Organize so you can actually find things</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: ImageIcon, title: 'Albums by year', body: 'Create one album per year. It is a simple system that still works 10 years later.' },
                { icon: Users, title: 'A "Family" shared album', body: 'One album where everyone can add photos. Great for birthdays and holidays.' },
                { icon: HeartHandshake, title: 'Favorite the photos you love', body: 'Tap the heart on your best pictures. That becomes your highlight reel.' },
                { icon: Eye, title: 'Face tagging (optional)', body: 'Apple and Google can learn people\'s faces. Faster search, but it is a privacy trade-off — turn it off if that bothers you.' },
              ].map((t) => (
                <Card key={t.title}>
                  <CardContent className="py-5 flex gap-3">
                    <t.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-base">{t.title}</p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-1">{t.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Free up phone space ────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Free up space on your phone — safely</h2>
            <Card>
              <CardContent className="py-5 space-y-3 text-base leading-relaxed">
                <p>
                  <strong>Verify backup first.</strong> Before deleting anything, check the backup in
                  three different ways:
                </p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Open the cloud service&apos;s website on a computer and sign in.</li>
                  <li>Open 3–4 random photos and make sure they display full-size.</li>
                  <li>Check that the total photo count looks right.</li>
                </ol>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <Card className="border-sky-200">
                    <CardContent className="py-4">
                      <p className="font-semibold flex items-center gap-2 text-base">
                        <Cloud className="h-4 w-4 text-sky-600" /> iCloud
                      </p>
                      <p className="text-base text-muted-foreground mt-1">
                        Turn on "Optimize iPhone Storage" (Settings → Photos). Your phone will replace
                        full-size photos with smaller versions automatically.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-emerald-200">
                    <CardContent className="py-4">
                      <p className="font-semibold flex items-center gap-2 text-base">
                        <ImageIcon className="h-4 w-4 text-emerald-600" /> Google Photos
                      </p>
                      <p className="text-base text-muted-foreground mt-1">
                        Open the app → Free up space. It only deletes photos that are safely backed up.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ── Restore section ────────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Restoring photos</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <Card>
                <CardContent className="py-5">
                  <Smartphone className="h-6 w-6 text-primary mb-2" />
                  <p className="font-semibold text-base">New phone</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Sign in with the same account. Photos sync back down automatically — usually within a few hours.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <Cloud className="h-6 w-6 text-primary mb-2" />
                  <p className="font-semibold text-base">Download full-size</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Go to iCloud.com or photos.google.com, select photos, and click Download. You get the original quality back.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <HardDrive className="h-6 w-6 text-primary mb-2" />
                  <p className="font-semibold text-base">Export to a USB drive</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    On a computer, select an album, click Download, and save the zip file to a USB drive. Keep it somewhere safe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Share with family ──────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <Share2 className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Share with family</h2>
                <p className="text-base text-muted-foreground mt-1">Pick the method that matches your service.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: 'iCloud Shared Library', body: 'One library you and your spouse both add to. Everyone sees every photo automatically.' },
                { title: 'iCloud Shared Albums', body: 'Like a scrapbook. Invite up to 100 people to view and add — does not count against your storage.' },
                { title: 'Google Partner Sharing', body: 'Automatically sends every new photo of your kids or grandkids to your spouse.' },
                { title: 'Apple Family Sharing', body: 'Lets a family of up to 6 share an iCloud+ plan, a photo album, and a calendar.' },
              ].map((o) => (
                <Card key={o.title}>
                  <CardContent className="py-4">
                    <p className="font-semibold text-base">{o.title}</p>
                    <p className="text-base text-muted-foreground mt-1 leading-relaxed">{o.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Alert className="mt-4 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <Lock className="h-5 w-5 text-amber-700" />
              <AlertTitle className="text-base">Privacy: who sees what</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Anyone invited to a shared album can see every photo in it, but not your main library.
                You can remove people at any time, and nobody can share from a shared album without your
                permission.
              </AlertDescription>
            </Alert>
          </section>

          {/* ── Troubleshooting ────────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Troubleshooting</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl">
              <AccordionItem value="t1" className="px-4">
                <AccordionTrigger className="text-base">"iCloud storage full"</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Go to Settings → your name → iCloud → Manage Account Storage. Either upgrade your plan,
                  or free up space by deleting old iCloud Backups and large Messages attachments — those
                  are usually the biggest space hogs, not your photos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="t2" className="px-4">
                <AccordionTrigger className="text-base">Google Photos is not backing up</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Check three things: you are on Wi-Fi (not cellular only), Battery Saver is off, and you
                  are signed into the right Google account. Open Photos → profile → Backup status.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="t3" className="px-4">
                <AccordionTrigger className="text-base">Syncing across iPhone and iPad</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Make sure both devices are signed into the same Apple ID (Settings → tap your name)
                  and both have iCloud Photos turned on. Give the iPad a few minutes on Wi-Fi and the
                  photos will appear.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="t4" className="px-4">
                <AccordionTrigger className="text-base">Photos app crashes during upload</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Close the app, restart the phone, and try again on a strong Wi-Fi connection with the
                  charger plugged in. If it keeps happening, update the app from the App Store or Play Store.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="t5" className="px-4">
                <AccordionTrigger className="text-base">"Will this use all my cellular data?"</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Only if you let it. In every service, turn off "Use cellular data" or set uploads to
                  "Wi-Fi only". That way photos only upload when you are home.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ── Privacy ─────────────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">What these companies see</h2>
                <p className="text-base text-muted-foreground mt-1">
                  Plain-English summary of the tradeoffs.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <Card>
                <CardContent className="py-5">
                  <p className="font-semibold text-base">Apple (iCloud)</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Apple makes money selling devices, not ads. Photos are encrypted in transit and on
                    their servers. You can turn on Advanced Data Protection for end-to-end encryption.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <p className="font-semibold text-base">Google (Photos)</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Google sells ads. They do not use your photos for ads, but their systems scan for
                    categories (beach, dog, food) to help you search. Face grouping can be turned off.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <p className="font-semibold text-base">Amazon (Photos)</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Amazon uses aggregate data to improve products. They do not sell your photos, but
                    they do profile your shopping habits — keep that in mind for the broader account.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Scanning old prints ────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <ScanLine className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Scan your old print photos</h2>
                <p className="text-base text-muted-foreground mt-1">
                  Shoeboxes in the closet? Bring them into the cloud too.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <Card>
                <CardContent className="py-5">
                  <p className="font-semibold text-base">Google PhotoScan (free)</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    Install PhotoScan from the App Store or Play Store. Place a photo on a table, press
                    the shutter, and follow the four dots. The app removes glare and crops automatically.
                    Scans save into Google Photos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-5">
                  <p className="font-semibold text-base">Photomyne (paid, batch mode)</p>
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    About $5 a month. Scans 4 photos at once and separates them automatically — good if
                    you have a huge box of prints to work through.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Alert className="mt-4">
              <Info className="h-5 w-5" />
              <AlertTitle className="text-base">Quick tip</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Scan outside in soft natural light for the best color, and work in short sessions — 20
                photos at a time. It goes faster than you think.
              </AlertDescription>
            </Alert>
          </section>

          {/* ── Digital photo frame tie-in ─────────── */}
          <section>
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="py-6">
                <div className="flex items-start gap-3">
                  <Frame className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Put your photos on a digital frame</p>
                    <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                      Aura, Nixplay, and Skylight frames can pull directly from iCloud or Google Photos.
                      Give one to a grandparent and new photos arrive automatically.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button asChild variant="secondary" className="min-h-14 text-base">
                        <Link to="/guides?category=devices">Browse device guides</Link>
                      </Button>
                      <Button asChild variant="outline" className="min-h-14 text-base">
                        <Link to="/tools/my-first-smartphone">New-smartphone wizard</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ── FAQ ─────────────────────────────── */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl font-bold">Common questions</h2>
            </div>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl">
              <AccordionItem value="f1" className="px-4">
                <AccordionTrigger className="text-base">Will this use all my data?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Not if you set it to Wi-Fi only, which is the default in every service. Upload when
                  you are at home and it costs you nothing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f2" className="px-4">
                <AccordionTrigger className="text-base">If I delete a photo, is the cloud copy gone too?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Usually yes — in iCloud and Google Photos, deleting on the phone deletes from the
                  cloud too, because they are synced. Deleted photos sit in a "Recently Deleted" folder
                  for 30–60 days so you can get them back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f3" className="px-4">
                <AccordionTrigger className="text-base">Can hackers see my photos?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Only if they get into your account. Turn on two-factor authentication (our{' '}
                  <Link to="/tools/two-factor-setup" className="text-primary underline">Two-Factor Setup Wizard</Link>
                  {' '}walks you through it), use a strong password, and do not reuse passwords from
                  other sites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f4" className="px-4">
                <AccordionTrigger className="text-base">Can I see my photos from a friend&apos;s house?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Yes — open any web browser, go to iCloud.com or photos.google.com, and sign in. Sign
                  out when you&apos;re done, especially on someone else&apos;s computer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f5" className="px-4">
                <AccordionTrigger className="text-base">What happens to my photos when I die?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Apple, Google, and Microsoft all let you name a "Legacy Contact" who can access your
                  photos after you pass. It takes 5 minutes to set up. See our{' '}
                  <Link to="/tools/grief-tech-helper" className="text-primary underline">Grief Tech Helper</Link>
                  {' '}for a full walkthrough.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ── Related ─────────────────────────── */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Related tools</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { to: '/tools/backup-wizard', title: 'Data Backup Wizard', body: 'Personalized plan for photos, documents, and contacts.' },
                { to: '/tools/my-first-smartphone', title: 'My First Smartphone', body: 'Walk through every setup step on a brand-new phone.' },
                { to: '/tools/ipad-for-seniors', title: 'iPad for Seniors', body: 'A gentle, senior-friendly iPad starter guide.' },
                { to: '/guides?category=devices', title: 'All device guides', body: 'Browse every TekSure device guide.' },
              ].map((r) => (
                <Card key={r.to} className="hover:shadow-md transition-shadow">
                  <CardContent className="py-5">
                    <Link to={r.to} className="font-semibold text-lg hover:text-primary flex items-center gap-2">
                      {r.title} <ChevronRight className="h-4 w-4" />
                    </Link>
                    <p className="text-base text-muted-foreground mt-1">{r.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

/* ── Setup card component ──────────────────────────────── */

function SetupCard({ plan, officialUrl }: { plan: SetupPlan; officialUrl: string }) {
  if (!plan) return null;
  return (
    <Card className="border-primary/20">
      <CardContent className="py-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-semibold leading-snug">{plan.label}</h3>
          <Badge variant="outline" className="text-xs shrink-0">Walkthrough</Badge>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed mb-5">{plan.intro}</p>

        <ol className="space-y-3">
          {plan.steps.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-base leading-snug">{s.title}</p>
                <p className="text-base text-muted-foreground leading-relaxed mt-0.5">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {plan.tip && (
          <Alert className="mt-5 border-amber-200 bg-amber-50 dark:bg-amber-950/20">
            <Info className="h-5 w-5 text-amber-700" />
            <AlertTitle className="text-base">Quick Tip</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">{plan.tip}</AlertDescription>
          </Alert>
        )}

        {officialUrl && (
          <p className="text-sm text-muted-foreground mt-4">
            Official help:{' '}
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {officialUrl}
            </a>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
