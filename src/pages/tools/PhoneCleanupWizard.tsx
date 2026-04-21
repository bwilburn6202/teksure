import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Smartphone,
  Apple,
  Bot,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  AppWindow,
  Globe,
  MessageSquare,
  Music,
  HardDrive,
  Trash2,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────────────────────────────────────────── *
 * Phone Cleanup Wizard
 * ------------------------------------------------------------
 * A true step-by-step walkthrough for seniors to free up
 * storage on their iPhone or Android phone. NOT automated —
 * this tool only GUIDES the user through each step on their
 * own phone.
 *
 * Flow:
 *   Step 0  Pick phone type (iPhone or Android)
 *   Step 1  Photos & videos
 *   Step 2  Unused apps
 *   Step 3  Browser cache
 *   Step 4  Text attachments
 *   Step 5  Downloaded music & podcasts
 *   Step 6  "Other" / System storage
 *   Step 7  Empty Photos Trash (Recently Deleted)
 *   Step 8  Summary / review
 * ───────────────────────────────────────────────────────────── */

type PhoneType = 'iphone' | 'android';
type Difficulty = 'Easy' | 'Medium';

interface StepContent {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  estimatedSpace: string;      // human-readable estimate, e.g. "1–20 GB"
  difficulty: Difficulty;
  intro: string;               // friendly paragraph shown at the top of the step
  instructions: string[];      // numbered list of concrete steps
  tip?: string;                // optional big yellow tip card
  warning?: string;            // optional red warning card
  screenshotLabel: string;     // text shown inside the placeholder
}

const PHONE_LABEL: Record<PhoneType, string> = {
  iphone: 'iPhone (Apple)',
  android: 'Android',
};

/* ── Step definitions per phone type ─────────────────────────── */

const STEPS_IPHONE: StepContent[] = [
  {
    title: 'Clear out old photos and videos',
    subtitle: 'Photos and videos take up more space than anything else',
    icon: ImageIcon,
    estimatedSpace: '1 – 20 GB',
    difficulty: 'Easy',
    intro:
      'Videos and photo bursts are by far the biggest space hogs on most phones. We will look at the biggest ones first so deleting just a few can free up a lot.',
    instructions: [
      'Before deleting ANYTHING, turn on iCloud Photos so your memories are safely backed up: Open Settings → tap your name at the top → tap iCloud → tap Photos → turn ON "Sync this iPhone".',
      'Open the Photos app.',
      'Tap the "Albums" tab at the bottom.',
      'Scroll down to "Media Types" and tap "Videos" — videos are almost always your biggest files.',
      'Tap "Select" in the top-right corner.',
      'Tap each video you no longer need (old recordings, duplicates, accidental clips).',
      'Tap the trash can icon at the bottom-right to delete them.',
      'Go back to Albums → "Media Types" → tap "Bursts" and review those too (bursts are groups of 10+ photos taken in a second).',
    ],
    tip: 'If iCloud costs worry you: the free plan is 5 GB. Google Photos is a great free alternative — download "Google Photos" from the App Store, sign in, and turn on Backup. It gives you 15 GB free.',
    warning:
      'Do NOT skip the backup step. Once photos are truly deleted (after Step 7), they are gone forever.',
    screenshotLabel: 'Photos app → Albums → Videos → Select → Trash',
  },
  {
    title: 'Remove apps you never open',
    subtitle: 'Unused apps can take up gigabytes of space each',
    icon: AppWindow,
    estimatedSpace: '500 MB – 10 GB',
    difficulty: 'Easy',
    intro:
      'Games and streaming apps especially can be huge. Your iPhone can also "offload" an app, which keeps your settings but removes the big files — a good choice if you\'re unsure.',
    instructions: [
      'Open Settings.',
      'Tap "General".',
      'Tap "iPhone Storage". Wait a few seconds — it is calculating.',
      'You will see a list of every app, sorted by size (biggest first).',
      'Tap any app you do not recognize or have not used recently.',
      'To save space but keep your data: tap "Offload App". The icon stays on your home screen with a small cloud — tap it later to re-download.',
      'To fully remove the app and its data: tap "Delete App".',
      'Safe to delete: old games, shopping apps for one-time purchases, duplicate weather apps, store loyalty apps you never use.',
    ],
    tip: 'Turn on automatic offloading so your iPhone does this for you in the future: Settings → App Store → turn ON "Offload Unused Apps".',
    warning:
      'Do NOT delete apps from your bank, doctor, government (like ID.me), or two-factor code apps (like Authy or Google Authenticator) without checking first.',
    screenshotLabel: 'Settings → General → iPhone Storage → app list',
  },
  {
    title: 'Clear your Safari browser cache',
    subtitle: 'Old website data can build up into gigabytes',
    icon: Globe,
    estimatedSpace: '200 MB – 2 GB',
    difficulty: 'Easy',
    intro:
      'Every time you visit a website, Safari saves pieces of it to load faster next time. Over years, this adds up. Clearing it is safe — you will just need to sign back in to sites you use.',
    instructions: [
      'Open the Settings app.',
      'Scroll down and tap "Apps".',
      'Scroll until you find "Safari" and tap it.',
      'Scroll down and tap "Clear History and Website Data".',
      'Choose "All history" from the time range.',
      'Tap "Clear History" in red to confirm.',
      'If you also use Chrome: open Chrome → tap the three dots (⋯) at the bottom → Settings → Privacy → Clear Browsing Data → Clear.',
    ],
    tip: 'This will sign you out of most websites. Make sure you know your passwords for sites you use — or use a password manager.',
    screenshotLabel: 'Settings → Apps → Safari → Clear History and Website Data',
  },
  {
    title: 'Delete hidden photos and videos in Messages',
    subtitle: 'Years of texted memes and videos quietly pile up',
    icon: MessageSquare,
    estimatedSpace: '500 MB – 5 GB',
    difficulty: 'Medium',
    intro:
      'Photos and videos people text you are stored on your phone forever by default. iPhone makes them easy to find and remove all at once.',
    instructions: [
      'Open Settings.',
      'Tap "General" → "iPhone Storage".',
      'Scroll down and tap "Messages".',
      'You will see categories: Photos, Videos, GIFs, Stickers, and Other.',
      'Tap "Videos" (usually the biggest).',
      'Tap "Edit" in the top-right.',
      'Tap the circle next to each large video to select it, then tap the trash icon.',
      'Repeat for "Photos" and "GIFs".',
      'Optional — auto-delete old messages: Settings → Apps → Messages → Keep Messages → change from "Forever" to "1 Year".',
    ],
    warning:
      'Changing "Keep Messages" to 1 Year permanently deletes any text message older than a year. Only do this if you do not need old message history for medical, legal, or tax reasons.',
    screenshotLabel: 'Settings → General → iPhone Storage → Messages → Videos',
  },
  {
    title: 'Remove downloaded music and podcasts',
    subtitle: 'Offline downloads can quietly take 5+ GB',
    icon: Music,
    estimatedSpace: '1 – 10 GB',
    difficulty: 'Easy',
    intro:
      'If you use Apple Music, Spotify, or Apple Podcasts, downloaded songs and episodes are saved for offline listening. You can delete the downloads without losing the ability to re-download later.',
    instructions: [
      'For Apple Music: open the Music app → tap "Library" → tap "Downloaded" → swipe left on a song, album, or playlist → tap "Remove" → tap "Remove Download".',
      'For Apple Podcasts: open Podcasts app → Library → Downloaded → swipe left on any old episode → tap "Remove Download".',
      'For Spotify: open Spotify → tap your profile icon → Settings → Storage → tap "Remove all downloads" to wipe them all at once.',
      'For Audible/Audiobooks: open the app → Library → tap "Downloaded" filter → swipe left on finished books to remove them.',
      'Bonus: Podcasts → Library → tap three dots (⋯) → Settings → "Remove Played Downloads: After 24 hours" so this stays tidy automatically.',
    ],
    tip:
      'You don\'t lose the song or episode — just the offline copy. As long as you have internet, you can listen again anytime.',
    screenshotLabel: 'Music → Library → Downloaded → swipe left → Remove',
  },
  {
    title: 'Check your "System" and "Other" storage',
    subtitle: 'This mysterious category can be surprisingly large',
    icon: HardDrive,
    estimatedSpace: '500 MB – 5 GB',
    difficulty: 'Medium',
    intro:
      '"Other" (now called "System Data") is a mix of caches, logs, and temporary files. You cannot delete it directly, but simple actions shrink it.',
    instructions: [
      'Go to Settings → General → iPhone Storage.',
      'At the top, look at the colored bar. Find "System Data" in the key below.',
      'If it is over 10 GB, the best fix is to restart your phone: hold the side button + volume-up button → slide to power off → wait 30 seconds → turn back on.',
      'After restart, let the phone sit for a few hours while plugged in. iOS cleans itself up overnight.',
      'If still huge after a day: back up to iCloud, then Settings → General → Transfer or Reset iPhone → "Reset" → "Reset All Settings". This clears caches without deleting your photos or apps.',
      'Last resort (only if you have a full iCloud backup): a full "Erase All Content and Settings" followed by restoring from backup gives you the cleanest state.',
    ],
    warning:
      'Never tap "Erase All Content and Settings" without a recent and verified iCloud or computer backup. When in doubt, ask a trusted family member or TekSure technician.',
    screenshotLabel: 'Settings → General → iPhone Storage → System Data bar',
  },
  {
    title: 'Empty your Photos "Recently Deleted" folder',
    subtitle: 'The last step — deleted photos still take up space for 30 days',
    icon: Trash2,
    estimatedSpace: '1 – 20 GB',
    difficulty: 'Easy',
    intro:
      'When you delete a photo, iPhone moves it to "Recently Deleted" for 30 days in case you change your mind. That means ALL the photos and videos you deleted in Step 1 are still on your phone! Emptying this folder is where the real space comes back.',
    instructions: [
      'Open the Photos app.',
      'Tap the "Albums" tab at the bottom.',
      'Scroll all the way down to "Utilities".',
      'Tap "Recently Deleted".',
      'You will be asked to use Face ID or your passcode — this is normal, it protects against accidents.',
      'Tap "Select" in the top-right.',
      'Tap "Delete All" in the bottom-left (or pick items individually).',
      'Confirm by tapping "Delete".',
    ],
    warning:
      'This is final. Anything you empty here cannot be recovered. Double-check your iCloud or Google Photos backup first.',
    screenshotLabel: 'Photos → Albums → Utilities → Recently Deleted → Delete All',
  },
];

const STEPS_ANDROID: StepContent[] = [
  {
    title: 'Clear out old photos and videos',
    subtitle: 'Photos and videos take up more space than anything else',
    icon: ImageIcon,
    estimatedSpace: '1 – 20 GB',
    difficulty: 'Easy',
    intro:
      'Videos and duplicate photos are the biggest space hogs. Android and Google Photos together let you find the largest ones quickly so deleting just a few can free up a lot.',
    instructions: [
      'Before deleting ANYTHING, turn on Google Photos backup so your memories are safe: Open the Google Photos app → tap your profile picture (top-right) → "Photos settings" → "Backup" → turn ON. Everyone gets 15 GB free.',
      'Wait until you see "Backup complete" near your profile picture before continuing.',
      'In Google Photos, tap "Library" at the bottom → "Utilities" → "Free up space on this device". Google will tell you how many items are safely backed up and offer to delete the local copies.',
      'For more control: open the "Files" or "My Files" app (comes with your phone) → tap "Clean" or "Storage" → tap "Large files" or "Videos".',
      'Sort by size, largest first.',
      'Tap and hold any video you no longer need → pick more → tap the trash icon.',
    ],
    tip: 'Google Photos "Free up space" is the single safest and fastest way to reclaim photo storage. It only deletes photos that are already backed up.',
    warning:
      'Do NOT delete photos before Google Photos finishes backing up. Look for "Backup complete" first.',
    screenshotLabel: 'Google Photos → Library → Utilities → Free up space',
  },
  {
    title: 'Uninstall apps you never open',
    subtitle: 'Unused apps can take up gigabytes each',
    icon: AppWindow,
    estimatedSpace: '500 MB – 10 GB',
    difficulty: 'Easy',
    intro:
      'Games and social-media apps are usually the biggest. Android shows you the size of every app so you can make good choices.',
    instructions: [
      'Open the Settings app (the gear icon).',
      'Tap "Apps" (or "Apps & notifications").',
      'Tap "See all apps" if you see it.',
      'Tap the three-dot menu (⋮) in the top-right → "Sort by" → "Size". Biggest apps float to the top.',
      'Tap any app you do not recognize or have not used recently.',
      'Tap "Uninstall". (If the button is greyed out, it is a system app — leave it alone.)',
      'Also consider: Settings → Apps → tap the app → "Storage & cache" → "Clear cache" to free space without uninstalling.',
      'Safe to remove: old games, shopping apps for one-time purchases, duplicate weather apps, bloatware that came with the phone.',
    ],
    tip: 'Many Samsung and Motorola phones have a built-in "Device care" or "Moto" app with a one-tap cleanup. Look in Settings → Battery and device care → Storage.',
    warning:
      'Do NOT uninstall apps from your bank, doctor, government, or two-factor code apps (Authy, Google Authenticator, Microsoft Authenticator) without checking first.',
    screenshotLabel: 'Settings → Apps → See all apps → Sort by Size',
  },
  {
    title: 'Clear your Chrome browser cache',
    subtitle: 'Old website data can pile up into gigabytes',
    icon: Globe,
    estimatedSpace: '200 MB – 2 GB',
    difficulty: 'Easy',
    intro:
      'Chrome saves pieces of every website you visit to load faster next time. Clearing this is safe — you will just need to sign back in to sites you use.',
    instructions: [
      'Open the Chrome app.',
      'Tap the three dots (⋮) in the top-right corner.',
      'Tap "Settings".',
      'Tap "Privacy and security".',
      'Tap "Clear browsing data".',
      'Change "Time range" to "All time".',
      'Check the boxes for "Cookies and site data" and "Cached images and files".',
      'Tap "Clear data" (blue button at the bottom).',
      'If you use Samsung Internet or Firefox, the steps are very similar — look in each app\'s Settings for "Delete browsing data".',
    ],
    tip: 'This will sign you out of most websites. Make sure you know your passwords — or use a password manager like Google Password Manager or Bitwarden.',
    screenshotLabel: 'Chrome → ⋮ → Settings → Privacy and security → Clear browsing data',
  },
  {
    title: 'Delete hidden attachments in your messaging apps',
    subtitle: 'Texts, WhatsApp, and Messenger store every picture forever',
    icon: MessageSquare,
    estimatedSpace: '500 MB – 5 GB',
    difficulty: 'Medium',
    intro:
      'Photos and videos people send you are saved on your phone indefinitely. Whichever apps you use, each one has a built-in cleanup.',
    instructions: [
      'For Google Messages (the default texting app): open Messages → tap your profile picture → Messages settings → Storage → "Auto-delete old OTPs after 24 hours" to clean up old one-time codes.',
      'For Samsung Messages: Messages → ⋮ → Settings → "More settings" → "Delete old messages" → turn on (deletes after 1000 messages per conversation).',
      'For WhatsApp (the biggest offender for most people): Open WhatsApp → Settings → "Storage and data" → "Manage storage". It shows every chat sorted by size. Tap the largest chat → review "Forwarded many times" and large videos → select and delete.',
      'For Facebook Messenger: open Messenger → tap your profile → Settings → "Storage" → review each conversation.',
      'For Telegram: Settings → "Data and Storage" → "Storage Usage" → clear cache for specific chats.',
    ],
    tip:
      'WhatsApp media is often 2–5 GB by itself. Using its "Manage storage" screen once a year is the single biggest win for most Android users.',
    screenshotLabel: 'WhatsApp → Settings → Storage and data → Manage storage',
  },
  {
    title: 'Remove downloaded music and podcasts',
    subtitle: 'Offline downloads can quietly take 5+ GB',
    icon: Music,
    estimatedSpace: '1 – 10 GB',
    difficulty: 'Easy',
    intro:
      'Spotify, YouTube Music, Audible, and podcast apps all save downloaded audio for offline play. You can remove these without losing access — as long as you have internet, you can re-download anytime.',
    instructions: [
      'For Spotify: open Spotify → tap your profile icon (top-left) → "Settings and privacy" → "Storage" → "Remove all downloads". This wipes every offline track.',
      'For YouTube Music: open YT Music → tap your profile → "Settings" → "Downloads and storage" → "Delete all downloads".',
      'For Audible: Library → tap "Downloaded" filter → long-press a finished book → "Remove from device".',
      'For Google Podcasts / Pocket Casts: open the app → Settings → "Storage and downloads" → pick a cleanup option.',
      'Bonus for Pocket Casts: Settings → "Storage and downloads" → "Auto Download" → limit downloads to the 3 most recent episodes per show.',
    ],
    tip:
      'You don\'t lose the song or episode — just the offline copy. As long as you have internet, you can listen again anytime.',
    screenshotLabel: 'Spotify → Profile → Settings → Storage → Remove all downloads',
  },
  {
    title: 'Check your "System" and miscellaneous storage',
    subtitle: 'This mysterious category can be surprisingly large',
    icon: HardDrive,
    estimatedSpace: '500 MB – 3 GB',
    difficulty: 'Medium',
    intro:
      'System storage is made up of app caches, thumbnails, and temporary files. You cannot delete it directly, but simple actions shrink it.',
    instructions: [
      'Go to Settings → "Storage" (or "Battery and device care" → "Storage" on Samsung).',
      'You will see a breakdown by category: Photos, Apps, Audio, System, etc.',
      'If "System" or "Other" is huge, restart your phone: hold the power button → "Restart". This clears a lot of temporary files.',
      'Tap "Clean" or "Free up space" if your phone has that button — most Samsung, Xiaomi, and Motorola phones do.',
      'Open Settings → Apps → tap each app with a big cache → "Storage & cache" → "Clear cache". Never tap "Clear storage" unless you are okay losing that app\'s data and signing in again.',
      'Some Samsung phones: Settings → Battery and device care → Memory → tap "Clean now" to free up RAM.',
    ],
    warning:
      '"Clear cache" is safe. "Clear storage" or "Clear data" resets the app completely — you will be signed out and any unsaved progress is lost. Be careful which one you tap.',
    screenshotLabel: 'Settings → Storage → tap "Free up space" or app cache',
  },
  {
    title: 'Empty your Photos "Trash" folder',
    subtitle: 'The last step — deleted photos still take up space for 30–60 days',
    icon: Trash2,
    estimatedSpace: '1 – 20 GB',
    difficulty: 'Easy',
    intro:
      'When you delete a photo, both your Gallery app and Google Photos keep it in a "Trash" folder for 30–60 days in case you change your mind. That means everything you deleted in Step 1 is still on your phone! Emptying Trash is where the real space comes back.',
    instructions: [
      'In Google Photos: open the app → tap "Library" at the bottom → tap "Trash" → tap the three dots (⋮) → "Empty Trash" → confirm with "Delete" or your fingerprint.',
      'In Samsung Gallery: open Gallery → tap ☰ or three dots (⋮) → "Trash" → tap "Edit" or ⋮ → "Empty" → confirm.',
      'In the Files app: open Files → tap ☰ (menu) → "Trash" → select all → delete.',
      'Some phones (especially Motorola and Pixel) have a "Recently deleted" folder inside the Files app too — check there.',
    ],
    warning:
      'This is final. Anything you empty from Trash cannot be recovered. Double-check that Google Photos says "Backup complete" first.',
    screenshotLabel: 'Google Photos → Library → Trash → ⋮ → Empty Trash',
  },
];

/* ── Summary step (index = 8) shared between devices ─────────── */

function SummaryStep({
  phone,
  completedCount,
  totalSteps,
  onRestart,
}: {
  phone: PhoneType;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  // Very rough cumulative estimate: most users free 3–40 GB depending on starting point
  const estimateRange = phone === 'iphone' ? '3 – 50 GB' : '3 – 55 GB';

  return (
    <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-green-600/10 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">All done!</h2>
            <p className="text-muted-foreground">
              You completed {completedCount} of {totalSteps} cleanup steps on your {PHONE_LABEL[phone]}.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="text-sm text-muted-foreground mb-1">Estimated space freed</div>
              <div className="text-2xl font-bold">{estimateRange}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Range varies by how much was on your phone.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="text-sm text-muted-foreground mb-1">Steps completed</div>
              <div className="text-2xl font-bold">{completedCount} / {totalSteps}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Come back and finish any skipped steps later.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="text-sm text-muted-foreground mb-1">Time to check your new storage</div>
              <div className="text-2xl font-bold">~1 min</div>
              <div className="text-xs text-muted-foreground mt-1">
                {phone === 'iphone'
                  ? 'Settings → General → iPhone Storage'
                  : 'Settings → Storage'}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Stay tidy going forward
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>Set a reminder to repeat this cleanup every 3 months.</li>
            <li>
              Turn on cloud backup so your photos are always safe:{' '}
              <strong>{phone === 'iphone' ? 'iCloud Photos' : 'Google Photos'}</strong>.
            </li>
            <li>
              Be choosy about new apps. If you try one and don&apos;t use it for a month, remove it.
            </li>
            <li>
              Once a month, look in your messaging app&apos;s storage screen and delete old media.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2">
            <RotateCcw className="w-5 h-5" />
            Start over with a different phone
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tools/computer-cleanup-wizard">Clean my computer next</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Main component ──────────────────────────────────────────── */

export default function PhoneCleanupWizard() {
  const [phone, setPhone] = useState<PhoneType | null>(null);
  // stepIndex 0..(steps.length-1) = cleanup steps, stepIndex = steps.length = summary
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const steps = useMemo<StepContent[]>(
    () => (phone === 'android' ? STEPS_ANDROID : STEPS_IPHONE),
    [phone],
  );
  const totalSteps = steps.length; // 7
  const isSummary = stepIndex === totalSteps;
  const current: StepContent | null = !isSummary && steps[stepIndex] ? steps[stepIndex] : null;

  // Progress counts the final review as the last milestone
  const progress = Math.round((stepIndex / totalSteps) * 100);

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skipNext = () => {
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setPhone(null);
    setStepIndex(0);
    setCompleted(new Set());
  };

  /* ── Phone picker (step 0) ─── */
  if (!phone) {
    return (
      <>
        <SEOHead
          title="Phone Cleanup Wizard — Free Up Space on iPhone or Android"
          description="A senior-friendly step-by-step wizard that walks you through freeing up storage on your iPhone or Android phone. No software required."
          path="/tools/phone-cleanup"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <section className="border-b border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <Badge variant="outline" className="text-xs">Storage · Step-by-step</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">Phone Cleanup Wizard</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                &ldquo;Storage Almost Full&rdquo; notification again? We&apos;ll walk you through 7 simple steps to free up space on your phone. Works on iPhone or Android — nothing gets installed.
              </p>
            </div>
          </section>

          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What kind of phone do you have?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card
                onClick={() => setPhone('iphone')}
                className="cursor-pointer hover:border-primary transition-colors"
              >
                <CardContent className="p-6 md:p-8 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Apple className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">iPhone (Apple)</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Any iPhone running iOS 15 or newer. If your phone has an Apple logo on the back, pick this.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline">7 steps</Badge>
                      <Badge variant="outline">~30 min</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                onClick={() => setPhone('android')}
                className="cursor-pointer hover:border-primary transition-colors"
              >
                <CardContent className="p-6 md:p-8 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Bot className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Android</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Samsung Galaxy, Google Pixel, Motorola, OnePlus, or any other non-Apple phone.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline">7 steps</Badge>
                      <Badge variant="outline">~30 min</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
              <CardContent className="p-5 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-base mb-1">This tool is a guide — not an app</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    TekSure does not install anything on your phone and never sees your data. We just
                    tell you which buttons to press and what&apos;s safe to delete.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Wizard view ─── */
  return (
    <>
      <SEOHead
        title={`Phone Cleanup Wizard — ${PHONE_LABEL[phone]}`}
        description={`Step-by-step walkthrough to free up storage on your ${PHONE_LABEL[phone]}.`}
        path="/tools/phone-cleanup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg font-medium">
                  Phone Cleanup · {PHONE_LABEL[phone]}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Start over
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isSummary
                  ? 'Review'
                  : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
            </div>
            <Progress value={isSummary ? 100 : progress} className="h-3" aria-label="Cleanup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isSummary ? (
            <SummaryStep
              phone={phone}
              completedCount={completed.size}
              totalSteps={totalSteps}
              onRestart={restart}
            />
          ) : current ? (
            <article className="space-y-6">
              {/* Step header */}
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Frees ~{current.estimatedSpace}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      current.difficulty === 'Easy'
                        ? 'text-sm border-green-600/40 text-green-700 dark:text-green-400'
                        : 'text-sm border-amber-600/40 text-amber-700 dark:text-amber-400'
                    }
                  >
                    {current.difficulty}
                  </Badge>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <current.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                      {current.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {current.subtitle}
                    </p>
                  </div>
                </div>
              </header>

              {/* Intro */}
              <p className="text-lg leading-relaxed">{current.intro}</p>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshotLabel}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Screenshot coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshotLabel}</div>
              </div>

              {/* Instructions */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">How to do it</h2>
                  <ol className="space-y-4 list-none">
                    {current.instructions.map((line, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base"
                        >
                          {i + 1}
                        </span>
                        <span className="text-lg leading-relaxed pt-1">{line}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Tip */}
              {current.tip && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Helpful tip</h3>
                      <p className="text-base leading-relaxed">{current.tip}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Warning */}
              {current.warning && (
                <Card className="bg-red-50 dark:bg-red-950/20 border-red-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <AlertTriangle
                      className="w-6 h-6 text-red-700 dark:text-red-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Be careful</h3>
                      <p className="text-base leading-relaxed">{current.warning}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Nav */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 text-base"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous step
                </Button>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="lg" onClick={skipNext} className="text-base">
                    Skip for now
                  </Button>
                  <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base">
                    {completed.has(stepIndex) ? 'Done — next step' : 'Mark done & continue'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Step overview */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">
                  All steps
                </h2>
                <div className="flex flex-wrap gap-2">
                  {steps.map((s, i) => {
                    const done = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStepIndex(i);
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                          active
                            ? 'bg-primary text-primary-foreground border-primary'
                            : done
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {done && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 3).join(' ')}
                        {s.title.split(' ').length > 3 ? '…' : ''}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setStepIndex(totalSteps);
                      if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                      isSummary
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    Review
                  </button>
                </div>
              </div>
            </article>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
