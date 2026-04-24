import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, ShieldAlert, Info, CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';

type Urgency = 'safe' | 'info' | 'act' | 'scam';

interface Notification {
  id: string;
  title: string;
  subtitle: string;
  device: string[];
  category: string;
  urgency: Urgency;
  whatItMeans: string;
  whatCausedIt: string;
  whatToDo: string[];
  safeToIgnore: boolean;
  keywords: string[];
}

const notifications: Notification[] = [
  {
    id: 'storage-full',
    title: '"Storage Almost Full"',
    subtitle: 'iPhone or iPad storage warning',
    device: ['iPhone', 'iPad'],
    category: 'Device Storage',
    urgency: 'act',
    whatItMeans: 'Your phone or tablet is running out of space to save new photos, apps, or updates. When storage fills up completely, your device may stop working properly.',
    whatCausedIt: 'Photos, videos, and apps have built up over time. Videos are especially large — a single 1-minute video can use as much space as 300 photos.',
    whatToDo: [
      `Go to Settings → General → iPhone Storage to see what's using the most space.`,
      'Delete photos and videos you no longer need (or move them to iCloud).',
      `Delete apps you haven't opened in over 6 months.`,
      'Turn on iCloud Photos to automatically move photos off your device.',
    ],
    safeToIgnore: false,
    keywords: ['storage full', 'storage almost full', 'running out of space', 'low storage', 'iphone storage'],
  },
  {
    id: 'software-update',
    title: '"Software Update Available"',
    subtitle: 'System update notification on iPhone, iPad, Mac, Windows, or Android',
    device: ['iPhone', 'iPad', 'Mac', 'Windows', 'Android'],
    category: 'Updates',
    urgency: 'act',
    whatItMeans: `Your device's maker has released a new version of the software that runs it. Updates fix security problems, bugs, and sometimes add new features.`,
    whatCausedIt: 'Your device checked for updates (which it does automatically in the background) and found a newer version.',
    whatToDo: [
      'Plug your device into power first — updates can drain battery.',
      'Connect to WiFi before updating (updates are large downloads).',
      'Tap "Install Tonight" or "Install Now" — both are safe options.',
      `If you're asked to back up first, tap "Back Up Then Update."`,
    ],
    safeToIgnore: false,
    keywords: ['software update', 'update available', 'new update', 'install update', 'system update'],
  },
  {
    id: 'low-battery',
    title: '"Low Battery" or "20% Battery Remaining"',
    subtitle: 'Battery warning on any device',
    device: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows'],
    category: 'Battery',
    urgency: 'info',
    whatItMeans: `Your device's battery is getting low and will need charging soon. At 20%, most devices switch to a low-power mode to stretch the remaining charge.`,
    whatCausedIt: `You've been using the device for a while without plugging it in.`,
    whatToDo: [
      'Plug your device into a charger as soon as you can.',
      `If you can't charge right away, turn down screen brightness to save power.`,
      'On iPhone, turn on Low Power Mode under Settings → Battery.',
      `Avoid running video or games until you're charged.`,
    ],
    safeToIgnore: true,
    keywords: ['low battery', 'battery low', 'battery warning', '20% battery', '10% battery', 'charge your device'],
  },
  {
    id: 'virus-alert-popup',
    title: '"Your Computer Has a Virus!" popup',
    subtitle: 'Scary warning that appears in a browser or on your screen',
    device: ['Windows', 'Mac', 'iPhone', 'Android'],
    category: 'Scam Alerts',
    urgency: 'scam',
    whatItMeans: `This is almost certainly a scam. Real virus warnings from Apple, Microsoft, or Google do NOT appear as pop-ups asking you to call a phone number. Real warnings appear in your device's Settings app — not in a browser window.`,
    whatCausedIt: 'You visited a website that ran a scam script designed to scare you into calling a fake "tech support" number or paying for fake software.',
    whatToDo: [
      'Do NOT call any phone number shown in the popup.',
      'Do NOT click any button inside the popup — not even "X" to close it.',
      'On your keyboard, press Alt + F4 (Windows) or Command + Q (Mac) to close the browser entirely.',
      'On a phone, swipe the browser app away from your recent apps list.',
      `If the popup won't close, restart your device.`,
      'You do NOT need to pay anyone or download anything.',
    ],
    safeToIgnore: false,
    keywords: ['virus alert', 'virus detected', 'computer virus', 'call microsoft', 'call apple', 'technical support popup', 'your computer is infected'],
  },
  {
    id: 'app-wants-location',
    title: '"[App] Would Like to Use Your Location"',
    subtitle: 'Location permission request on iPhone, iPad, or Android',
    device: ['iPhone', 'iPad', 'Android'],
    category: 'App Permissions',
    urgency: 'info',
    whatItMeans: `An app is asking for permission to see where you are physically located. Some apps need this to work (like Maps or Weather). Others don't really need it.`,
    whatCausedIt: 'You opened an app for the first time, or the app was updated and is asking for new access.',
    whatToDo: [
      `Ask yourself: does this app actually need my location to work? Maps and Weather apps do. A game or recipe app probably doesn't.`,
      `Tap "Allow While Using App" if you want to allow it only while you're actively using the app.`,
      `Tap "Don't Allow" if you're not comfortable — most apps still work without location access.`,
      'Tap "Allow Once" if you want to grant permission just this one time.',
      'You can always change this later in Settings → Privacy → Location Services.',
    ],
    safeToIgnore: false,
    keywords: ['would like to use your location', 'location permission', 'access your location', 'location services'],
  },
  {
    id: 'app-wants-notifications',
    title: '"[App] Would Like to Send You Notifications"',
    subtitle: 'Notification permission request on iPhone, iPad, or Android',
    device: ['iPhone', 'iPad', 'Android'],
    category: 'App Permissions',
    urgency: 'info',
    whatItMeans: `An app is asking for permission to send you alerts, sounds, and badges on your screen even when you're not actively using the app.`,
    whatCausedIt: 'You installed a new app or opened one that wants to alert you about new messages, deals, or activity.',
    whatToDo: [
      `If it's an app where you want alerts (like a news app, messaging app, or banking app), tap "Allow."`,
      `If it's a game or shopping app and you don't need reminders, tap "Don't Allow."`,
      'You can change this anytime in Settings → Notifications and find the app name.',
    ],
    safeToIgnore: false,
    keywords: ['would like to send you notifications', 'notification permission', 'allow notifications', 'send notifications'],
  },
  {
    id: 'windows-defender',
    title: '"Windows Security" alert',
    subtitle: 'Notification from Windows built-in security',
    device: ['Windows'],
    category: 'Security',
    urgency: 'info',
    whatItMeans: 'Windows Defender (the built-in security tool on all Windows computers) is letting you know about something it found or is actively monitoring. These are real, legitimate alerts — not scams.',
    whatCausedIt: 'Windows Defender regularly scans your computer for threats and sends updates about what it found.',
    whatToDo: [
      `If it says "No action needed" or "Real-time protection is on" — you're fine, no action required.`,
      'If it says "Threat found" or "Action recommended," click the notification to see what it found.',
      'Follow the on-screen steps — Windows Defender will usually handle threats automatically.',
      'Do NOT call any phone number from this notification. The real Windows security tool never asks you to call.',
    ],
    safeToIgnore: false,
    keywords: ['windows security', 'windows defender', 'windows firewall', 'threat found', 'action recommended'],
  },
  {
    id: 'two-factor-code',
    title: 'Text message with a 6-digit code',
    subtitle: 'Verification code sent to your phone',
    device: ['iPhone', 'Android'],
    category: 'Account Security',
    urgency: 'info',
    whatItMeans: `A website or app you have an account with sent you a one-time code to confirm it's really you logging in. This is a good security feature called two-factor authentication.`,
    whatCausedIt: 'Either you (or someone with your password) just tried to log into an account that requires this extra step.',
    whatToDo: [
      'If YOU just tried to log in — go back to that website or app and enter the code. Codes usually expire in 10 minutes.',
      'If you did NOT try to log in — do not share the code with anyone. Someone else may have your password. Change your password as soon as possible.',
      'Never share this code if someone calls and asks for it — that is always a scam.',
    ],
    safeToIgnore: false,
    keywords: ['verification code', '6 digit code', 'one time code', 'two factor', 'login code', 'text code', 'sms code'],
  },
  {
    id: 'app-needs-update',
    title: '"App needs to be updated"',
    subtitle: 'App update warning in the App Store or Play Store',
    device: ['iPhone', 'iPad', 'Android'],
    category: 'Updates',
    urgency: 'info',
    whatItMeans: `The company that makes the app has released a new version with improvements or security fixes. Your device is letting you know it's ready to download.`,
    whatCausedIt: `The app developer published an update through Apple's App Store or Google's Play Store.`,
    whatToDo: [
      'Tap "Update" to install it — this is safe and free.',
      'To update all your apps at once: open the App Store → tap your profile picture at the top → scroll down and tap "Update All."',
      'You can also turn on automatic app updates in Settings so you never have to do this manually.',
    ],
    safeToIgnore: true,
    keywords: ['app update', 'app needs update', 'update available', 'update all', 'app store update'],
  },
  {
    id: 'wifi-password',
    title: '"Enter WiFi Password"',
    subtitle: 'Your device is asking for the password to join a network',
    device: ['iPhone', 'iPad', 'Android', 'Windows', 'Mac'],
    category: 'Connectivity',
    urgency: 'info',
    whatItMeans: 'Your device found a WiFi network nearby but needs the password to connect. This is normal when connecting somewhere new.',
    whatCausedIt: `Your device detected a WiFi network it hasn't connected to before, or you asked it to join a new network.`,
    whatToDo: [
      'Find the WiFi password on your router (usually on a sticker on the side or bottom of the box).',
      'Ask the homeowner or business for the password.',
      `Make sure you're connecting to the right network name — scammers sometimes create fake networks with similar names to real ones.`,
      'At home, your network name and password are printed on your internet router.',
    ],
    safeToIgnore: false,
    keywords: ['enter wifi password', 'wifi password', 'join network', 'network password'],
  },
  {
    id: 'icloud-storage-full',
    title: '"iCloud Storage Is Full"',
    subtitle: 'Apple iCloud storage limit reached',
    device: ['iPhone', 'iPad', 'Mac'],
    category: 'Device Storage',
    urgency: 'act',
    whatItMeans: `Your free iCloud storage (5 GB) is full. iCloud stores your photos, contacts, and device backups in the cloud. When it's full, new photos won't back up and your device won't save a recent backup.`,
    whatCausedIt: 'Photos, device backups, and files have accumulated over time and filled the 5 GB Apple provides for free.',
    whatToDo: [
      'Delete old iCloud backups you no longer need: Settings → [Your Name] → iCloud → Manage Storage → Backups.',
      'Upgrade your storage plan for 50 GB for $0.99/month in Settings → [Your Name] → iCloud → Manage Storage.',
      'Delete large files or photos from iCloud Drive.',
      `Turn off iCloud backup for apps you don't need backed up.`,
    ],
    safeToIgnore: false,
    keywords: ['icloud storage full', 'icloud full', 'icloud storage is full', 'icloud backup'],
  },
  {
    id: 'password-saved',
    title: '"Save Password?" or "Your Password Was Saved"',
    subtitle: 'Browser or device password save prompt',
    device: ['iPhone', 'iPad', 'Android', 'Windows', 'Mac'],
    category: 'Account Security',
    urgency: 'safe',
    whatItMeans: `Your browser or phone is offering to remember your password so you don't have to type it next time. This is a convenience feature built into all major devices and browsers.`,
    whatCausedIt: 'You just logged into a website and your device noticed you entered a password.',
    whatToDo: [
      `Tap "Save" or "Yes" if it's your own personal device. It's safe and convenient.`,
      `Tap "Never" or "Not Now" if you're on someone else's device or a public computer.`,
      'Passwords saved on your device are encrypted and stored securely.',
    ],
    safeToIgnore: false,
    keywords: ['save password', 'password saved', 'would you like to save', 'remember password'],
  },
  {
    id: 'disk-almost-full',
    title: '"Your startup disk is almost full" (Mac)',
    subtitle: 'Mac hard drive storage warning',
    device: ['Mac'],
    category: 'Device Storage',
    urgency: 'act',
    whatItMeans: `Your Mac is running very low on storage space. When a Mac's disk fills up completely, it can become very slow or stop working correctly.`,
    whatCausedIt: 'Files, downloads, photos, and apps have built up over time.',
    whatToDo: [
      'Click the Apple menu (top left) → About This Mac → Storage → Manage.',
      'Click "Recommendations" — macOS will suggest specific things to delete.',
      'Empty the Trash (right-click the Trash icon → Empty Trash).',
      'Delete downloads you no longer need (Finder → Downloads folder).',
      'Move large video files or old photos to an external hard drive or iCloud.',
    ],
    safeToIgnore: false,
    keywords: ['startup disk full', 'disk almost full', 'mac storage', 'macintosh hd full', 'startup disk'],
  },
  {
    id: 'unknown-caller',
    title: '"Potential Spam" or "Scam Likely" caller label',
    subtitle: 'Your phone flags an incoming call as spam',
    device: ['iPhone', 'Android'],
    category: 'Phone Safety',
    urgency: 'scam',
    whatItMeans: 'Your phone carrier or a spam-detection service has identified this phone number as one that has been used for spam or scam calls. The call may be a robocall, a sales pitch, or a scam attempt.',
    whatCausedIt: `Other people reported this number, or your carrier's system detected patterns of mass-calling from it.`,
    whatToDo: [
      `You can let it go to voicemail. If it's important, they'll leave a message.`,
      'Do not give out personal information, your Social Security number, bank details, or gift card numbers to unknown callers.',
      'If they claim to be from the IRS, Social Security, Medicare, or a government agency — hang up. Real government agencies send letters first.',
      'You can block the number after the call by tapping the number in your recent calls list.',
    ],
    safeToIgnore: true,
    keywords: ['potential spam', 'scam likely', 'spam call', 'unknown caller', 'suspected spam'],
  },
  {
    id: 'app-wants-camera',
    title: '"[App] Would Like to Access Your Camera"',
    subtitle: 'Camera permission request',
    device: ['iPhone', 'iPad', 'Android'],
    category: 'App Permissions',
    urgency: 'info',
    whatItMeans: 'An app wants permission to use your camera. Some apps genuinely need it (like video calls, photo editing, or QR code scanners). Others should not need it.',
    whatCausedIt: `You're using a feature in an app that requires the camera, or the app is requesting access it shouldn't need.`,
    whatToDo: [
      'Allow it for apps where camera use makes sense: video calling apps (Zoom, FaceTime), photo apps, QR code scanners, document scanners.',
      'Deny it for apps that have no reason to use your camera: games, weather apps, news apps.',
      'You can adjust this anytime: Settings → Privacy → Camera.',
    ],
    safeToIgnore: false,
    keywords: ['access your camera', 'camera permission', 'would like to use camera', 'camera access'],
  },
  {
    id: 'find-my-device',
    title: '"Find My" location sharing notification',
    subtitle: 'Apple Find My app notification',
    device: ['iPhone', 'iPad', 'Mac'],
    category: 'Privacy',
    urgency: 'info',
    whatItMeans: `Someone in your Family Sharing group (or yourself) is using Apple's Find My app to see your device's location, or you've received an alert about an AirTag nearby.`,
    whatCausedIt: 'A family member checked your location, you have location sharing turned on with someone, or an unknown AirTag may be traveling with you.',
    whatToDo: [
      `If a family member is checking your location and that's expected — no action needed.`,
      `If you don't recognize who is tracking you, go to Settings → [Your Name] → Find My → Share My Location and review who can see you.`,
      'If an unknown AirTag is detected near you, follow the on-screen instructions to find and disable it.',
    ],
    safeToIgnore: false,
    keywords: ['find my', 'location sharing', 'airtag', 'airtag detected', 'someone is sharing location'],
  },
];

const urgencyConfig: Record<Urgency, { label: string; color: string; bg: string; border: string; icon: typeof Info; tagline: string }> = {
  safe: {
    label: 'Safe',
    color: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    icon: CheckCircle,
    tagline: 'Nothing to worry about.',
  },
  info: {
    label: 'Good to know',
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    icon: Info,
    tagline: 'No emergency, but worth reading.',
  },
  act: {
    label: 'Take action',
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    icon: AlertTriangle,
    tagline: 'You should do something about this.',
  },
  scam: {
    label: 'Scam / Danger',
    color: 'text-red-700 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-800',
    icon: XCircle,
    tagline: 'Stop — do not click, call, or pay anything.',
  },
};

const categories = ['All', 'Device Storage', 'Updates', 'Battery', 'Scam Alerts', 'App Permissions', 'Security', 'Account Security', 'Connectivity', 'Phone Safety', 'Privacy'];

export default function NotificationDecoder() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return notifications.filter(n => {
      const matchesSearch = !q || n.title.toLowerCase().includes(q) || n.keywords.some(k => k.includes(q)) || n.whatItMeans.toLowerCase().includes(q);
      const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <SEOHead
        title="Notification Decoder — What Does This Notification Mean? | TekSure"
        description="Confused by a notification on your phone or computer? Look it up here and get a plain-English explanation of what it means and exactly what to do."
        path="/tools/notification-decoder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Notification Decoder' }]} />
        </div>

        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center flex-shrink-0">
                <Bell className="h-6 w-6 text-violet-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Notification Decoder
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Got a confusing notification on your phone or computer? Look it up here and find out exactly what it means — and what (if anything) you should do about it.
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
              <Input
                placeholder='Type the notification, e.g. "storage almost full" or "virus alert"…'
                className="pl-11 h-12 rounded-2xl text-sm"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search for a notification"
              />
            </div>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${
                  activeCategory === cat
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-foreground/70 border-border hover:border-foreground/30'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} notification{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Notification cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-3"></p>
              <p className="font-semibold text-lg mb-2">No results found</p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Try different words — for example, type "virus" instead of "virus warning."
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map(n => {
                const cfg = urgencyConfig[n.urgency];
                const Icon = cfg.icon;
                const isOpen = expanded === n.id;

                return (
                  <div
                    key={n.id}
                    className={`rounded-2xl border ${cfg.border} overflow-hidden transition-shadow hover:shadow-md`}
                  >
                    {/* Card header — always visible */}
                    <button
                      className="w-full text-left p-5 flex items-start gap-4"
                      onClick={() => setExpanded(isOpen ? null : n.id)}
                      aria-expanded={isOpen}
                      aria-controls={`notification-${n.id}`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 h-10 w-10 rounded-xl ${cfg.bg} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${cfg.color}`} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
                            {cfg.label}
                          </span>
                          <span className="text-xs text-muted-foreground">{n.category}</span>
                        </div>
                        <h2 className="font-semibold text-base leading-snug mb-0.5">{n.title}</h2>
                        <p className="text-sm text-muted-foreground">{n.subtitle}</p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen
                          ? <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                          : <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        }
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div id={`notification-${n.id}`} className="px-5 pb-6 border-t border-inherit pt-5 space-y-5">
                        {/* Tagline */}
                        <p className={`text-sm font-medium ${cfg.color}`}>{cfg.tagline}</p>

                        {/* What it means */}
                        <div>
                          <h3 className="font-semibold text-sm mb-1.5">What this means</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{n.whatItMeans}</p>
                        </div>

                        {/* What caused it */}
                        <div>
                          <h3 className="font-semibold text-sm mb-1.5">Why you're seeing it</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{n.whatCausedIt}</p>
                        </div>

                        {/* What to do */}
                        <div>
                          <h3 className="font-semibold text-sm mb-2">What to do</h3>
                          <ol className="space-y-2">
                            {n.whatToDo.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground/10 text-xs flex items-center justify-center font-medium mt-0.5">
                                  {i + 1}
                                </span>
                                <span className="text-muted-foreground leading-relaxed">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Safe to ignore */}
                        <div className={`flex items-center gap-2 text-sm px-3 py-2.5 rounded-xl ${n.safeToIgnore ? 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400' : 'bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400'}`}>
                          {n.safeToIgnore
                            ? <><CheckCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" /><span>This notification is safe to ignore if you're not ready to act.</span></>
                            : <><AlertTriangle className="h-4 w-4 flex-shrink-0" aria-hidden="true" /><span>This notification is worth acting on — don't dismiss it without reading what to do.</span></>
                          }
                        </div>

                        {/* Devices */}
                        <div className="flex gap-2 flex-wrap">
                          {n.device.map(d => (
                            <Badge key={d} variant="outline" className="text-xs">{d}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom tip */}
          <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="flex gap-3 items-start">
              <ShieldAlert className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm mb-1">Quick Tip: Real vs. Fake alerts</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real security alerts from Apple, Microsoft, and Google appear in your device's Settings app — not in a browser pop-up. If a pop-up shows a phone number to call, it\'s always a scam. Close it without clicking anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
