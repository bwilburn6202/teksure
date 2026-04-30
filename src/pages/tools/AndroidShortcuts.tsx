import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone, ChevronRight, AlertTriangle, MousePointer2, ArrowDown, Hand,
  Mic, ArrowLeft, Flashlight, Camera, RotateCcw, Sun, Lock, Wifi, FolderOpen,
  Volume2, Bell, Layers, Type, Search, Battery, Wand2, type LucideIcon,
} from 'lucide-react';

type Vendor = 'all' | 'samsung' | 'pixel';

interface Trick {
  id: string;
  icon: LucideIcon;
  title: string;
  vendor: Vendor;
  detail: string;
}

const VENDOR_LABEL: Record<Vendor, string> = {
  all: 'Most Androids',
  samsung: 'Samsung only',
  pixel: 'Pixel only',
};

const VENDOR_STYLE: Record<Vendor, string> = {
  all: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  samsung: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
  pixel: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
};

const TRICKS: Trick[] = [
  {
    id: 'long-press-app',
    icon: MousePointer2,
    title: 'Long-press an app icon for hidden options',
    vendor: 'all',
    detail: 'Press and hold any app icon on your home screen for about a second. A small menu pops up with shortcuts like "App info", "Uninstall", or quick actions inside the app. On Samsung phones the same long-press also offers "Open in pop-up view" and "App pair" so two apps open together side-by-side.',
  },
  {
    id: 'swipe-down-home',
    icon: ArrowDown,
    title: 'Swipe down on the home screen for notifications',
    vendor: 'all',
    detail: 'You do not need to reach all the way to the top. From the home screen, swipe down anywhere in the middle and your notifications and Quick Settings drop into reach. This is a setting on most phones — Samsung calls it "Quick-open notification panel" inside Settings → Home screen.',
  },
  {
    id: 'two-finger-quick-settings',
    icon: Hand,
    title: 'Swipe down with two fingers for the full Quick Settings',
    vendor: 'all',
    detail: 'From the top of the screen, drag down with two fingers at the same time. Instead of one row of icons, the full Quick Settings panel opens — Wi-Fi, Bluetooth, flashlight, Do Not Disturb, brightness, and more, all in one swipe.',
  },
  {
    id: 'hold-home-assistant',
    icon: Mic,
    title: 'Hold the home button for Google Assistant',
    vendor: 'all',
    detail: 'Press and hold the home button (or, on newer phones with gesture navigation, swipe diagonally up from a bottom corner). Google Assistant opens. You can ask things like "Set a timer for 10 minutes" or "What is the weather tomorrow?" without typing.',
  },
  {
    id: 'edge-swipe-back',
    icon: ArrowLeft,
    title: 'Swipe in from the edge to go back',
    vendor: 'all',
    detail: 'If your phone uses gesture navigation, you do not need a back button. Slide your finger in from the very left or right edge of the screen and the phone goes back one step. Settings → Display → Navigation bar lets you turn this on or off.',
  },
  {
    id: 'shake-flashlight',
    icon: Flashlight,
    title: 'Shake the phone to turn on the flashlight',
    vendor: 'pixel',
    detail: 'On Pixel phones, open Settings → System → Gestures → "Quick tap to start actions" or "Quick gestures". Some Pixels offer a chop motion or a double-tap on the back of the phone that turns the flashlight on. Handy in a dark hallway when reaching for a button is hard.',
  },
  {
    id: 'palm-screenshot',
    icon: Camera,
    title: 'Screenshot by sliding the side of your hand across the screen',
    vendor: 'samsung',
    detail: 'Samsung calls this "Palm swipe to capture". Turn it on at Settings → Advanced features → Motions and gestures → "Palm swipe to capture". Then run the side of your hand across the screen from right to left (or left to right). A screenshot snaps without pressing any buttons.',
  },
  {
    id: 'bixby-reroute',
    icon: RotateCcw,
    title: 'Stop the side button from opening Bixby',
    vendor: 'samsung',
    detail: 'On many Samsung phones the side button opens Bixby by mistake. Open Settings → Advanced features → Side key. Change "Press and hold" from "Wake Bixby" to "Power off menu". Now holding the button shuts the phone down like it should.',
  },
  {
    id: 'aod',
    icon: Sun,
    title: 'Turn on Always On Display for the time and notifications',
    vendor: 'all',
    detail: 'Always On Display shows the clock, date, and notification icons on a dim screen even when the phone is locked. On Samsung: Settings → Lock screen → Always On Display. On Pixel: Settings → Display → Lock screen → "Always show time and info". A quick glance replaces a full unlock.',
  },
  {
    id: 'smart-lock',
    icon: Lock,
    title: 'Smart Lock keeps your phone unlocked at home',
    vendor: 'all',
    detail: 'Settings → Security → Smart Lock (or "Extend Unlock"). Add your home Wi-Fi as a "Trusted place" or pair a smartwatch as a "Trusted device". When you are home or wearing your watch, the phone stops asking for the PIN. Outside those places it locks normally.',
  },
  {
    id: 'nfc-share',
    icon: Wifi,
    title: 'Tap two phones together to share a photo or contact',
    vendor: 'all',
    detail: 'Most Android phones have NFC (a tiny chip near the top back). Open the photo or contact you want to share, tap "Share" → "Nearby Share" (or "Quick Share" on Samsung), then hold the two phones back-to-back. The other phone gets a notification to accept. No cables, no email.',
  },
  {
    id: 'files-by-google',
    icon: FolderOpen,
    title: 'Use Files by Google to clean up offline files',
    vendor: 'all',
    detail: 'Install "Files by Google" from the Play Store (free, made by Google). It shows downloads, screenshots, large files, and duplicates in plain categories. Tap "Clean" to find what is taking up space. It also opens PDFs, ZIPs, and documents the Photos app cannot.',
  },
  {
    id: 'volume-pop',
    icon: Volume2,
    title: 'Tap the gear next to the volume slider to control every sound',
    vendor: 'all',
    detail: 'Press the volume button, then tap the small icon (three dots or a gear) next to the slider that pops up. Separate sliders appear for ringtone, media, alarms, and calls. That is how you make videos louder without making your ringtone louder too.',
  },
  {
    id: 'notification-history',
    icon: Bell,
    title: 'Bring back a notification you swiped away by accident',
    vendor: 'all',
    detail: 'Settings → Notifications → "Notification history". Turn it on. From now on, every notification stays in this list for 24 hours, even if you swipe it away. A lifesaver when you flick away a text from a doctor before reading it.',
  },
  {
    id: 'split-screen',
    icon: Layers,
    title: 'Split the screen between two apps at once',
    vendor: 'all',
    detail: 'Open the Recent Apps view (swipe up and hold, or tap the square button). Tap an app icon at the top of its card → "Split screen" or "Open in split-screen view". Pick a second app. Now you can read a recipe on top and watch a video underneath.',
  },
  {
    id: 'text-size',
    icon: Type,
    title: 'Make text bigger across every app at once',
    vendor: 'all',
    detail: 'Settings → Display → Font size and style (Samsung) or Settings → Display → Display size and text (Pixel). Drag the slider. Every app — Messages, Gmail, Facebook, your bank — all get bigger text together. No more squinting in one app while another looks fine.',
  },
  {
    id: 'google-search-bar',
    icon: Search,
    title: 'Search your phone from the Google bar at the bottom',
    vendor: 'all',
    detail: 'The Google search bar on the home screen does more than search the web. Type a contact name and it offers to call. Type a setting like "Bluetooth" and it jumps right to that settings page. Type an app name and it opens the app. A shortcut to almost everything.',
  },
  {
    id: 'battery-saver-tile',
    icon: Battery,
    title: 'Add Battery Saver to Quick Settings for one-tap power saving',
    vendor: 'all',
    detail: 'Pull down Quick Settings with two fingers. Tap the pencil or edit icon. Drag "Battery Saver" up into the visible area. Now when your battery hits 20% on a long day, one tap stretches the remaining hours by dimming the screen and pausing background apps.',
  },
  {
    id: 'one-handed-mode',
    icon: Hand,
    title: 'Shrink the screen to one corner for one-handed use',
    vendor: 'all',
    detail: 'On Samsung: Settings → Advanced features → One-handed mode. On Pixel: Settings → System → Gestures → One-handed mode. Once on, swipe down on the bottom edge and the whole screen scoots into the lower corner so your thumb can reach the top icons.',
  },
  {
    id: 'lock-screen-shortcuts',
    icon: Wand2,
    title: 'Customize the two shortcuts on the lock screen',
    vendor: 'all',
    detail: 'The two icons at the bottom of the lock screen (often a flashlight and a camera) can be changed. Long-press the lock screen → "Customize" or open Settings → Lock screen → Shortcuts. Swap them for the apps you really use — maybe a magnifier, your medical info, or Google Wallet for tap-to-pay.',
  },
];

export default function AndroidShortcuts() {
  return (
    <>
      <SEOHead
        title="Android Shortcuts and Tricks"
        description="20 Android shortcuts most people never find. Two-finger quick settings, palm-swipe screenshots, smart lock, NFC sharing, and more — plain-English steps for Samsung and Pixel phones."
        path="/tools/android-shortcuts"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-green-50 via-background to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-green-500/10 rounded-full">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">20 Android Shortcuts &amp; Tricks</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The hidden gestures, settings, and shortcuts most Android owners never discover.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Android Shortcuts' }]} />

          <Card className="border-amber-500/30 bg-amber-500/5 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">A note before you start</p>
                  <p className="text-muted-foreground">
                    Android phones are made by many companies. A handful of these tricks work only on Samsung Galaxy phones, and one is Pixel-only. Look for the small badge on each card — green means most Androids, blue means Samsung only, purple means Pixel only. If a setting screen does not match yours word-for-word, look for a similar name nearby.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {TRICKS.map((t, i) => {
              const Icon = t.icon;
              return (
                <Card key={t.id} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">Trick {i + 1}</Badge>
                          <Badge variant="outline" className={`text-xs ${VENDOR_STYLE[t.vendor]}`}>
                            {VENDOR_LABEL[t.vendor]}
                          </Badge>
                        </div>
                        <p className="font-semibold text-base">{t.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground ml-12">{t.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mt-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">One thing not to do</p>
              <p className="text-xs text-muted-foreground">
                Do not turn on every gesture and shortcut at once. Pick two or three from this list, practice them for a week, then come back for more. Muscle memory takes a few days, and learning twenty new motions in one sitting is a recipe for forgetting all of them.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk to type in any app on your phone.</p>
              </Link>
              <Link to="/tools/voicemail-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voicemail Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get your greeting and inbox working right.</p>
              </Link>
              <Link to="/tools/tech-cheatsheet-generator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Cheatsheet Generator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Print a one-page reference of your favorite shortcuts.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: the two-finger swipe down for full Quick Settings is the single biggest time-saver. Practice it five times today and it sticks for life.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
