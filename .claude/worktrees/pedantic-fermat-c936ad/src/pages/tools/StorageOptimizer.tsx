import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Laptop, Monitor, Tablet, HardDrive, Cloud,
  CheckCircle2, ChevronDown, ChevronUp, Trash2, Sparkles,
  ArrowRight, Lightbulb, AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ─────────────────────────────────────────── */

type DeviceId = 'iphone' | 'android' | 'mac' | 'windows' | 'chromebook';

interface Step {
  id: string;
  title: string;
  how: string[];
  savedGb: number; // estimated max GB freed
}

interface Device {
  id: DeviceId;
  label: string;
  icon: typeof Smartphone;
  intro: string;
  steps: Step[];
}

/* ── Content ───────────────────────────────────────── */

const devices: Device[] = [
  {
    id: 'iphone',
    label: 'iPhone / iPad',
    icon: Smartphone,
    intro: 'iOS bundles a lot of data you can usually remove without losing anything important. Work top to bottom — the first few steps give the biggest wins.',
    steps: [
      {
        id: 'iphone-1',
        title: 'See what is using your space',
        savedGb: 0,
        how: [
          'Open Settings',
          'Tap General',
          'Tap iPhone Storage (or iPad Storage)',
          'Wait 10–20 seconds for the chart to load',
          'Look at the colored bar — the biggest categories are your targets',
        ],
      },
      {
        id: 'iphone-2',
        title: 'Offload unused apps (biggest easy win)',
        savedGb: 5,
        how: [
          'On the same iPhone Storage screen, scroll down to Recommendations',
          'Tap Enable next to "Offload Unused Apps"',
          'This removes the app but keeps your data — you can reinstall with one tap later',
          'You can also offload individual apps manually by tapping them in the list',
        ],
      },
      {
        id: 'iphone-3',
        title: 'Review Messages media',
        savedGb: 4,
        how: [
          'Settings > General > iPhone Storage > Messages',
          'Tap Review Large Attachments',
          'Swipe left on videos and photos you do not need and tap Delete',
          'Also consider turning on "Auto-delete old conversations" (1 year)',
        ],
      },
      {
        id: 'iphone-4',
        title: 'Delete old podcast downloads',
        savedGb: 2,
        how: [
          'Open the Podcasts app',
          'Tap Library > Downloaded',
          'Swipe left on old episodes and tap Remove',
          'Or tap the three dots > Settings > Storage > Delete All',
        ],
      },
      {
        id: 'iphone-5',
        title: 'Clear Safari cache',
        savedGb: 1,
        how: [
          'Settings > Safari',
          'Scroll down and tap Clear History and Website Data',
          'Confirm',
          'This removes cached pages but keeps your bookmarks and passwords',
        ],
      },
      {
        id: 'iphone-6',
        title: 'Review Photos — duplicates, screenshots, old videos',
        savedGb: 6,
        how: [
          'Open Photos',
          'Tap Albums at the bottom',
          'Scroll to Utilities > Duplicates (iOS 16+), then merge',
          'Go to Utilities > Screenshots and delete the ones you do not need',
          'In Albums > Videos, review and delete long clips',
        ],
      },
      {
        id: 'iphone-7',
        title: 'Turn on iCloud Photos "Optimize Storage"',
        savedGb: 8,
        how: [
          'Settings > [your name] > iCloud > Photos',
          'Make sure Sync this iPhone is on',
          'Select Optimize iPhone Storage',
          'Full-resolution photos stay in iCloud; smaller versions live on your phone',
        ],
      },
      {
        id: 'iphone-8',
        title: 'Delete old Messages conversations',
        savedGb: 3,
        how: [
          'Open Messages',
          'Swipe left on old conversations you no longer need',
          'Tap Delete',
          'Settings > Messages > Keep Messages > 1 Year for ongoing cleanup',
        ],
      },
      {
        id: 'iphone-9',
        title: 'Clear app caches (TikTok, Instagram, YouTube)',
        savedGb: 5,
        how: [
          'TikTok: Profile > menu > Settings > Free up space > Clear cache',
          'Instagram: no built-in option — offload the app and reinstall',
          'YouTube: Library > Downloads > remove old downloads',
          'Spotify: Settings > Storage > Remove all downloads (re-download on WiFi)',
        ],
      },
      {
        id: 'iphone-10',
        title: 'Review Downloads and Files app',
        savedGb: 2,
        how: [
          'Open the Files app',
          'Tap Browse > On My iPhone > Downloads',
          'Delete PDFs, ZIPs, and documents you no longer need',
        ],
      },
    ],
  },
  {
    id: 'android',
    label: 'Android',
    icon: Smartphone,
    intro: 'Android menus vary by brand (Samsung, Pixel, Motorola), but the steps are similar. Look for Settings > Storage on any model.',
    steps: [
      {
        id: 'android-1',
        title: 'See the storage breakdown',
        savedGb: 0,
        how: [
          'Open Settings',
          'Tap Storage (on Samsung: Settings > Battery and device care > Storage)',
          'Review the category breakdown — apps, photos, audio, etc.',
        ],
      },
      {
        id: 'android-2',
        title: 'Run Smart Storage cleanup',
        savedGb: 3,
        how: [
          'On Pixel: Settings > Storage > Free up space',
          'On Samsung: Settings > Battery and device care > Storage > Clean now',
          'Follow the prompts to remove junk files, duplicates, and large files',
        ],
      },
      {
        id: 'android-3',
        title: 'Free up Google Photos local copies',
        savedGb: 10,
        how: [
          'Open Google Photos',
          'Tap your profile picture > Photos settings',
          'Tap Free up device storage',
          'This removes local photos that are already safely backed up to Google',
        ],
      },
      {
        id: 'android-4',
        title: 'Uninstall apps you do not use',
        savedGb: 5,
        how: [
          'Open Play Store',
          'Tap your profile > Manage apps and device > Manage',
          'Sort by Size or Least used',
          'Tap the checkbox on apps you want to remove, then tap the trash icon',
        ],
      },
      {
        id: 'android-5',
        title: 'Clear app caches',
        savedGb: 4,
        how: [
          'Settings > Apps',
          'Tap an app (start with Chrome, Instagram, TikTok, Facebook)',
          'Tap Storage and cache > Clear cache',
          'This will not log you out — it just removes temporary files',
        ],
      },
      {
        id: 'android-6',
        title: 'Review the Downloads folder',
        savedGb: 2,
        how: [
          'Open the Files or My Files app',
          'Tap Downloads',
          'Delete old APKs, PDFs, and videos',
        ],
      },
      {
        id: 'android-7',
        title: 'Install Files by Google',
        savedGb: 6,
        how: [
          'Install Files by Google from the Play Store (free)',
          'Tap Clean',
          'Follow each recommendation — junk files, duplicates, large media, memes',
          'Schedule automatic cleaning in its settings',
        ],
      },
      {
        id: 'android-8',
        title: 'Move media to an SD card (if your phone supports it)',
        savedGb: 16,
        how: [
          'Insert an SD card if your phone has a slot',
          'Settings > Storage > SD card > Format as portable storage',
          'In Files by Google, move photos, videos, and music to the SD card',
        ],
      },
      {
        id: 'android-9',
        title: 'Use cloud photos with "free up space"',
        savedGb: 8,
        how: [
          'Make sure Google Photos backup is on and finished',
          'In Google Photos settings, use Free up device storage again every few months',
          'Consider Google One (100 GB for $1.99/month) if you run out of free space',
        ],
      },
      {
        id: 'android-10',
        title: 'Clear browser cache',
        savedGb: 1,
        how: [
          'Open Chrome',
          'Tap the three dots > History > Clear browsing data',
          'Select Cached images and files (leave passwords untouched)',
          'Tap Clear data',
        ],
      },
    ],
  },
  {
    id: 'mac',
    label: 'Mac',
    icon: Laptop,
    intro: 'macOS has a good built-in storage tool. Work through the Recommendations panel first, then dig into individual apps.',
    steps: [
      {
        id: 'mac-1',
        title: 'Open storage settings',
        savedGb: 0,
        how: [
          'Click the Apple menu in the top-left',
          'Click About This Mac',
          'Click More Info (or Storage on older versions)',
          'Scroll down and click Storage Settings',
        ],
      },
      {
        id: 'mac-2',
        title: 'Use the Recommendations panel',
        savedGb: 15,
        how: [
          'In Storage Settings, review each recommendation',
          'Store in iCloud — moves old files to iCloud, keeps recents on the Mac',
          'Optimize Storage — removes watched Apple TV shows automatically',
          'Empty Trash Automatically — 30 day rule',
        ],
      },
      {
        id: 'mac-3',
        title: 'Empty Trash and Downloads',
        savedGb: 5,
        how: [
          'Right-click the Trash icon in the Dock > Empty Trash',
          'Open Finder > Downloads',
          'Sort by Size — delete old installers, ZIPs, and DMG files',
        ],
      },
      {
        id: 'mac-4',
        title: 'Delete old iPhone/iPad backups',
        savedGb: 20,
        how: [
          'Open Finder',
          'Click your iPhone/iPad in the sidebar if plugged in, or go to Storage Settings > iOS Files',
          'Select old device backups you no longer need',
          'Click Delete',
        ],
      },
      {
        id: 'mac-5',
        title: 'Remove old Mail downloads',
        savedGb: 3,
        how: [
          'Open Mail',
          'Go to Mail menu > Settings (or Preferences) > Accounts',
          'Choose each account > set "Download Attachments" to Recent or None',
          'Mail > View > Mailboxes > Rebuild to clear local copies',
        ],
      },
      {
        id: 'mac-6',
        title: 'Review Photos duplicates',
        savedGb: 5,
        how: [
          'Open Photos',
          'In the sidebar, click Duplicates (macOS Ventura or newer)',
          'Review and click Merge for each group',
          'Also turn on iCloud Photos with Optimize Mac Storage if you have a lot',
        ],
      },
      {
        id: 'mac-7',
        title: 'Move large files to iCloud or external drive',
        savedGb: 25,
        how: [
          'Open Finder > All My Files, or search for kind:movie',
          'Sort by Size to find biggest files',
          'Drag them to iCloud Drive, an external USB drive, or a cloud service',
        ],
      },
      {
        id: 'mac-8',
        title: 'Find large files with Disk Utility or Finder',
        savedGb: 4,
        how: [
          'Open Finder, press Cmd+F',
          'Click This Mac, then change the dropdown to File Size > is greater than > 500 MB',
          'Review and delete anything you no longer need',
        ],
      },
      {
        id: 'mac-9',
        title: 'Uninstall apps you do not use',
        savedGb: 8,
        how: [
          'Open Finder > Applications',
          'Sort by Size (View > as List, then click Size column)',
          'Drag unused apps to the Trash',
          'Empty Trash when done',
        ],
      },
      {
        id: 'mac-10',
        title: 'Clean Library cache folders (careful)',
        savedGb: 3,
        how: [
          'In Finder, press Cmd+Shift+G',
          'Type ~/Library/Caches and press Enter',
          'You can safely delete the contents of folders inside Caches — do not delete the folders themselves',
          'Only do this if your drive is nearly full',
        ],
      },
    ],
  },
  {
    id: 'windows',
    label: 'Windows PC',
    icon: Monitor,
    intro: 'Windows 10 and 11 have a built-in storage cleanup tool that handles most of the work. Start with Storage Sense and Disk Cleanup.',
    steps: [
      {
        id: 'windows-1',
        title: 'Open Storage settings',
        savedGb: 0,
        how: [
          'Click Start > Settings (gear icon)',
          'Click System > Storage',
          'Wait for the categories to load',
        ],
      },
      {
        id: 'windows-2',
        title: 'Turn on Storage Sense',
        savedGb: 5,
        how: [
          'On the Storage page, turn Storage Sense On',
          'Click it to configure — set it to empty the Recycle Bin every 30 days',
          'Set Downloads cleanup to 30 or 60 days',
          'Windows will now clean up automatically',
        ],
      },
      {
        id: 'windows-3',
        title: 'Run Disk Cleanup',
        savedGb: 6,
        how: [
          'Press the Windows key, type cleanmgr, and press Enter',
          'Select your C: drive',
          'Check the boxes for Temporary files, Thumbnails, Delivery Optimization Files',
          'Click Clean up system files for more options (old Windows installs, Windows Update cache)',
        ],
      },
      {
        id: 'windows-4',
        title: 'Uninstall apps you do not use',
        savedGb: 8,
        how: [
          'Settings > Apps > Installed apps',
          'Sort by Size',
          'Click the three dots next to apps you do not use > Uninstall',
          'Games and Creative apps tend to be the biggest',
        ],
      },
      {
        id: 'windows-5',
        title: 'Move photos and videos to external drive or cloud',
        savedGb: 20,
        how: [
          'Plug in a USB external drive',
          'Open File Explorer > Pictures and Videos',
          'Cut and paste large folders to the external drive',
          'Or back up to OneDrive, Google Photos, or iDrive',
        ],
      },
      {
        id: 'windows-6',
        title: 'Empty the Recycle Bin',
        savedGb: 3,
        how: [
          'Right-click the Recycle Bin on the desktop',
          'Select Empty Recycle Bin',
          'Confirm',
        ],
      },
      {
        id: 'windows-7',
        title: 'Clear browser cache',
        savedGb: 2,
        how: [
          'Open Chrome/Edge/Firefox',
          'Press Ctrl+Shift+Delete',
          'Select Cached images and files and All time',
          'Click Clear data',
        ],
      },
      {
        id: 'windows-8',
        title: 'Clean out Downloads',
        savedGb: 5,
        how: [
          'Open File Explorer > Downloads',
          'Sort by Size',
          'Delete old installers (.exe, .msi), ZIPs, and ISOs',
        ],
      },
      {
        id: 'windows-9',
        title: 'Remove Windows Update cache',
        savedGb: 4,
        how: [
          'In Disk Cleanup, click Clean up system files',
          'Check Windows Update Cleanup and Previous Windows installations',
          'Click OK — this can free several GB after a big update',
        ],
      },
      {
        id: 'windows-10',
        title: 'Check OneDrive "Files On-Demand"',
        savedGb: 10,
        how: [
          'Right-click the OneDrive cloud icon in the taskbar',
          'Settings > Sync and backup > Advanced settings > Files On-Demand',
          'Click Free up space to keep files in the cloud only',
        ],
      },
    ],
  },
  {
    id: 'chromebook',
    label: 'Chromebook',
    icon: Tablet,
    intro: 'Chromebooks store almost everything in the cloud, so they rarely fill up. When they do, the fixes are quick.',
    steps: [
      {
        id: 'cb-1',
        title: 'Check your storage',
        savedGb: 0,
        how: [
          'Click the time in the bottom-right > gear icon to open Settings',
          'Search for Storage management',
          'Review the breakdown — Downloads, Offline files, Browsing data, Android apps',
        ],
      },
      {
        id: 'cb-2',
        title: 'Clear Downloads folder',
        savedGb: 3,
        how: [
          'Open Files (shelf or app drawer)',
          'Click Downloads',
          'Select old files, right-click > Delete',
          'Empty trash if prompted',
        ],
      },
      {
        id: 'cb-3',
        title: 'Remove offline Google Drive files',
        savedGb: 4,
        how: [
          'Open Files > Google Drive',
          'Right-click any file marked with the Available offline icon',
          'Uncheck Available offline',
        ],
      },
      {
        id: 'cb-4',
        title: 'Uninstall Android apps you do not use',
        savedGb: 5,
        how: [
          'Open the app drawer',
          'Right-click an Android app > Uninstall',
          'Games and social apps are usually the biggest',
        ],
      },
      {
        id: 'cb-5',
        title: 'Clear Chrome browsing data',
        savedGb: 1,
        how: [
          'Open Chrome',
          'Press Ctrl+Shift+Delete',
          'Select Cached images and files and All time',
          'Click Clear data',
        ],
      },
    ],
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function StorageOptimizer() {
  const [device, setDevice] = useState<DeviceId>('iphone');
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [openStep, setOpenStep] = useState<string | null>(null);

  const current = useMemo(() => devices.find((d) => d.id === device)!, [device]);
  const totalSavedMax = useMemo(() => current.steps.reduce((n, s) => n + s.savedGb, 0), [current]);
  const savedGb = useMemo(
    () => current.steps.reduce((n, s) => n + (completed[s.id] ? s.savedGb : 0), 0),
    [current, completed]
  );
  const percent = totalSavedMax > 0 ? Math.min(100, Math.round((savedGb / totalSavedMax) * 100)) : 0;

  function toggle(id: string) {
    setCompleted((c) => ({ ...c, [id]: !c[id] }));
  }

  function switchDevice(id: DeviceId) {
    setDevice(id);
    setCompleted({});
    setOpenStep(null);
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Phone & Computer Storage Optimizer — Free Up Space Now | TekSure"
        description="Step-by-step cleanup for iPhone, Android, Mac, Windows, and Chromebook. Track your progress and reclaim gigabytes of storage for free."
        path="/tools/storage-optimizer"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/30 dark:to-background py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <HardDrive className="h-3 w-3 mr-1" /> Storage Cleanup
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Running Out of Storage? Here is How to Fix It</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick your device. Follow the steps in order. Watch the space freed meter climb — no app downloads, no payment required.
          </p>
        </div>
      </section>

      {/* Device picker */}
      <section className="py-8 sticky top-16 bg-background/95 backdrop-blur z-30 border-b">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {devices.map((d) => {
              const Icon = d.icon;
              const active = d.id === device;
              return (
                <button key={d.id}
                  onClick={() => switchDevice(d.id)}
                  className={`px-4 py-2.5 rounded-lg border flex items-center gap-2 text-sm font-medium transition ${active ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'hover:border-slate-400'}`}>
                  <Icon className="h-4 w-4" />
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress bar */}
      <section className="py-6 bg-slate-50 dark:bg-slate-950 border-b">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-xs uppercase font-semibold text-muted-foreground">Space freed</p>
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                {savedGb} <span className="text-lg font-semibold text-muted-foreground">/ up to {totalSavedMax} GB</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                {Object.values(completed).filter(Boolean).length} / {current.steps.length} steps done
              </p>
            </div>
          </div>
          <Progress value={percent} className="h-3" />
          <p className="text-xs text-muted-foreground mt-2">Estimates are rough — actual space freed depends on how much data you have.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-muted-foreground italic border-l-4 border-emerald-500 pl-4">{current.intro}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-16">
        <div className="container max-w-3xl mx-auto px-4 space-y-3">
          {current.steps.map((step, i) => {
            const isOpen = openStep === step.id;
            const isDone = completed[step.id];
            return (
              <Card key={step.id} className={isDone ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/10' : ''}>
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 p-4">
                    <button
                      onClick={() => toggle(step.id)}
                      aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
                      className={`h-7 w-7 rounded-full border-2 flex items-center justify-center shrink-0 transition ${isDone ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 hover:border-emerald-500'}`}>
                      {isDone && <CheckCircle2 className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => setOpenStep(isOpen ? null : step.id)}
                      className="flex-1 text-left flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className={`font-semibold ${isDone ? 'line-through text-muted-foreground' : ''}`}>
                          {i + 1}. {step.title}
                        </p>
                        {step.savedGb > 0 && (
                          <p className="text-xs text-muted-foreground">
                            Expected savings: up to <strong className="text-emerald-700 dark:text-emerald-400">{step.savedGb} GB</strong>
                          </p>
                        )}
                      </div>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                    </button>
                  </div>
                  {isOpen && (
                    <div className="px-4 pb-5 pl-14">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">HOW TO</p>
                      <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
                        {step.how.map((h, hi) => <li key={hi}><span className="text-foreground">{h}</span></li>)}
                      </ol>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Still not enough? */}
      <section className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="h-6 w-6 text-amber-500" />
            <h2 className="text-2xl font-bold">Still not enough space? Here is what to do.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="h-5 w-5 text-sky-600" />
                  <h3 className="font-bold">Pay for more cloud storage (cheap)</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>iCloud+ 50 GB</span><strong>$0.99 / month</strong></li>
                  <li className="flex justify-between"><span>iCloud+ 200 GB</span><strong>$2.99 / month</strong></li>
                  <li className="flex justify-between"><span>Google One 100 GB</span><strong>$1.99 / month</strong></li>
                  <li className="flex justify-between"><span>Google One 200 GB</span><strong>$2.99 / month</strong></li>
                  <li className="flex justify-between"><span>Microsoft 365 (1 TB + Office)</span><strong>$6.99 / month</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Prices are 2026 US rates and may change.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <h3 className="font-bold">When do you really need a new device?</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• The device is more than 5 years old</li>
                  <li>• You cannot install the latest operating system update</li>
                  <li>• Even after cleanup, you have less than 5 GB free</li>
                  <li>• The battery no longer holds a charge for more than a couple hours</li>
                  <li>• Apps crash often or the device feels sluggish for everyday tasks</li>
                </ul>
                <Link to="/tools/device-age-checker" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Check your device age <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Link to="/tools/tech-budget-planner"
                  className="border rounded-lg p-5 bg-background hover:shadow-md transition group flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Tech budget planner</h3>
                <p className="text-sm text-muted-foreground">See what your subscriptions are costing you.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/tools/backup-wizard"
                  className="border rounded-lg p-5 bg-background hover:shadow-md transition group flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Backup wizard</h3>
                <p className="text-sm text-muted-foreground">Back up everything before a big cleanup.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="py-10">
        <div className="container max-w-3xl mx-auto px-4">
          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <CardContent className="p-5 flex gap-3 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Back up first</p>
                <p className="text-muted-foreground">
                  Before any big cleanup, make sure photos and important documents are backed up to iCloud, Google, OneDrive, or an external drive.
                  Deleted files cannot always be recovered.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
