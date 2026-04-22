import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tablet,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Newspaper,
  Video,
  BookOpen,
  Tv,
  Gamepad2,
  Mail,
  Images,
  Globe,
  Wifi,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Home,
  Bookmark,
  Coffee,
  Power,
  KeyRound,
  MapPin,
  Mic,
  BarChart3,
  RefreshCw,
  Settings as SettingsIcon,
  Eye,
  Type as TypeIcon,
  MousePointerClick,
  Zap,
  Volume2,
  Users,
  Lock,
  Siren,
  PackageOpen,
  BatteryCharging,
  Globe2,
  UserPlus,
  Info,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Your New iPad — Let's Get Comfortable
 * ------------------------------------------------------------
 * A warm, senior-friendly walkthrough for someone who just got
 * an iPad. 14 short setup steps plus accessibility tips, common
 * activities, family sharing, troubleshooting, and safety.
 * ────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:ipad-for-seniors';

interface SavedProgress {
  stepIndex: number;
  completed: number[];
  savedAt: string;
}

interface WizardStep {
  title: string;
  oneLiner: string;
  icon: LucideIcon;
  actions: string[];
  stumble: string;
  why?: string;
  screenshot: string;
}

const STEPS: WizardStep[] = [
  {
    title: "What's in the box",
    oneLiner: "Before we turn anything on, let's lay out the pieces on a clean table.",
    icon: PackageOpen,
    actions: [
      'The iPad itself — the large flat screen in the middle of the box.',
      'A charging cable — most new iPads use a USB-C cable (oval-shaped ends on both sides).',
      'A power brick — the small white square that the cable plugs into. It goes into a wall outlet.',
      'A tiny envelope with paperwork and a SIM tool (only if you bought a cellular iPad).',
      'Peel any plastic film off the screen and back — it is meant to be removed.',
    ],
    stumble:
      "Older iPads came with a Lightning cable (smaller, rectangular with a flat metal tip) instead of USB-C. Both work fine — use whichever came in your box. Don't force the wrong end.",
    why:
      "Laying every piece out on the table first means you will not be hunting for a missing cable halfway through setup.",
    screenshot: 'Unboxed iPad with cable, power brick, and paperwork laid out on a table',
  },
  {
    title: 'Charge it before you turn it on',
    oneLiner: 'Plug the iPad in and let it reach at least 50% before first-time setup.',
    icon: BatteryCharging,
    actions: [
      'Plug the cable into the power brick, and the brick into a wall outlet.',
      'Plug the other end of the cable into the port on the bottom edge of the iPad.',
      'Within 30 seconds you should see a large battery picture with a lightning bolt on the screen.',
      'Let it charge until the battery shows at least 50%. For a brand-new iPad, about 30 minutes is usually enough.',
      'Leave it plugged in for the rest of this setup if you like — that is fine.',
    ],
    stumble:
      "If nothing happens when you plug in, try a different wall outlet and make sure the cable is pushed all the way in on both ends. Brand-new iPads sometimes ship with almost no battery — give it a full 15 minutes before worrying.",
    screenshot: 'Large battery icon on a black iPad screen while charging',
  },
  {
    title: 'Turn it on',
    oneLiner: 'Press and hold the top button for about 3 seconds until the Apple logo appears.',
    icon: Power,
    actions: [
      'Find the top button — it is the small button on the top edge (or top-right corner) of the iPad.',
      'Press and HOLD that button for about 3 seconds.',
      'A white Apple logo will appear on a black screen. The iPad is starting up — this can take up to a minute.',
      'When the word "Hello" appears (in many languages), you are ready for the next step.',
      'If your iPad has a Home button (a round button below the screen), you can press that once to wake it up later.',
    ],
    stumble:
      "Nothing happens? Keep holding the top button for a full 10 seconds. If there is still no Apple logo, your iPad needs more charge — leave it plugged in for another 15 minutes and try again.",
    screenshot: 'iPad showing the Apple logo on a black startup screen',
  },
  {
    title: 'Pick your language and country',
    oneLiner: 'Tap English (or the language you prefer), then tap United States.',
    icon: Globe2,
    actions: [
      'On the "Hello" screen, swipe up from the bottom of the screen with one finger (or press the Home button on older iPads).',
      'Tap your preferred language — for most readers here, that is English.',
      'On the next screen, tap United States (or your country/region).',
      'The iPad will adjust time zones, keyboards, and spelling based on this choice.',
      'A "Quick Start" screen may appear next — we handle that in the next step.',
    ],
    stumble:
      "Tapped the wrong language? Tap the small back arrow in the top-left corner, or simply restart (hold the top button + either volume button, then slide to power off) and begin again. Nothing is saved yet.",
    screenshot: 'iPad language selection screen with English highlighted',
  },
  {
    title: 'Quick Start or Set Up Manually',
    oneLiner: 'If you own another Apple device nearby, Quick Start copies your settings. Otherwise choose manual setup.',
    icon: RefreshCw,
    actions: [
      'If you have an iPhone or an older iPad signed into an Apple ID, hold it close to the new iPad and follow the on-screen prompts on both.',
      'Quick Start can copy your Apple ID, Wi-Fi, preferences, and photos — nothing on the old device is erased.',
      'Do NOT have another Apple device? Tap Set Up Manually (small text near the bottom) and continue to the Wi-Fi step.',
      'Either path is fine — Quick Start is faster, manual is simpler.',
    ],
    stumble:
      "If Quick Start keeps asking you to 'bring the devices closer,' lay them next to each other on a flat table with both screens facing up and wait 10 seconds. Turning Bluetooth on both (swipe from top-right corner → tap the Bluetooth icon) often gets things unstuck.",
    why:
      "Quick Start is the single biggest time-saver when setting up a new iPad if you already own an iPhone. Everything you already have — apps, contacts, photos — can come over in a few minutes.",
    screenshot: 'Quick Start screen showing two Apple devices pairing with a blue animation',
  },
  {
    title: 'Connect to your home Wi-Fi',
    oneLiner: 'Tap your home network, then type the password exactly as printed on your router.',
    icon: Wifi,
    actions: [
      'On the Choose a Wi-Fi Network screen, find the name of YOUR home Wi-Fi (it usually has your internet company name or your family name).',
      'Tap that network name.',
      'A password box appears with a keyboard.',
      'Type the password exactly as printed on the back or bottom of your internet router (the small box with blinking lights).',
      'A capital O is different from a zero (0). A lowercase L is different from a 1. Take your time.',
      'Tap Join. After about 10 seconds you should see a blue check mark and the word "Connected."',
    ],
    stumble:
      "Wi-Fi passwords are case-sensitive — every capital and lowercase letter matters. The single best place to find the password is the sticker on the bottom of your router (not the paperwork from your internet company, which is often out of date).",
    why:
      "Without Wi-Fi, the rest of setup stops here. Many things on the iPad — FaceTime, books, video, app downloads — only work well on Wi-Fi, and Wi-Fi at home is free (it does not use up your cell data).",
    screenshot: 'Wi-Fi network list with a network selected and password field visible',
  },
  {
    title: 'Sign in with (or create) an Apple ID',
    oneLiner: 'Your Apple ID is the email and password that unlocks everything Apple — books, apps, FaceTime, iCloud.',
    icon: KeyRound,
    actions: [
      'If you already have an Apple ID from an iPhone or older iPad, enter that email address and password.',
      'If this is your first Apple device ever, tap "Forgot password or don\'t have an Apple ID?" then tap "Create a Free Apple ID."',
      'A strong password mixes capital letters, lowercase letters, and at least one number — for example, a short phrase plus a number.',
      'Write the Apple ID and password down on paper and store it somewhere safe. You will be asked for it often.',
      'You may be asked for a 6-digit code — it will be sent as a text message or shown on another Apple device you own.',
    ],
    stumble:
      "Forgot your Apple ID password? Tap 'Forgot password' on the sign-in screen to reset it by email. Never give an Apple ID password to anyone who calls you on the phone — Apple will never call you to ask for it.",
    why:
      "The Apple ID is the single most important account on the iPad. Our guide on picking a strong, memorable password may help: see the link below.",
    screenshot: 'Apple ID sign-in screen with email and password fields',
  },
  {
    title: 'Set up Face ID, Touch ID, or a passcode',
    oneLiner: 'Your face, fingerprint, or a 6-digit code keeps everyone else out of your iPad.',
    icon: ShieldCheck,
    actions: [
      'Newer iPad Pro models use Face ID — hold the iPad 12 inches from your face and slowly roll your head in a circle. Do this twice.',
      'iPad Air and the regular iPad use Touch ID — touch the top button (or the Home button on older models) with the finger you want to use. Lift and re-place until the circle fills in.',
      'You will also be asked to set a 6-digit passcode as a backup. Pick something you can remember — a birthday or a short meaningful number.',
      'Write the passcode down on paper and store it somewhere safe.',
    ],
    stumble:
      "Skip the 4-digit \"easier\" passcode option and stick with 6 digits — 4 digits is much easier for strangers to guess. Also avoid 1-2-3-4-5-6, 0-0-0-0-0-0, or your full date of birth.",
    why:
      "If your iPad is ever lost or stolen, your passcode is the wall that keeps a stranger from opening your email, photos, and banking apps.",
    screenshot: 'Face ID setup screen with a face inside a circular guide',
  },
  {
    title: 'Location, Siri, and Screen Time',
    oneLiner: 'Three quick yes/no questions — here is what each one means.',
    icon: MapPin,
    actions: [
      'Location Services — say YES. Maps, weather, and "Find My iPad" need this. Apple does not sell your location.',
      'Siri — say YES if you would like to talk to your iPad ("Hey Siri, what\'s the weather?"). You can turn it off later in Settings.',
      'Screen Time — this shows how much time you spend on the iPad. Skip it for now (tap "Set Up Later in Settings") unless you want reports.',
      'When in doubt, take the default answer Apple suggests — you can change any of these later.',
    ],
    stumble:
      "If you said no to something and want to turn it on later, open Settings (grey gear icon) → scroll to the feature (Location, Siri, Screen Time) → flip the switch. Nothing is permanent.",
    screenshot: 'Siri setup screen with a blue and purple animated wave',
  },
  {
    title: 'App Analytics and Display mode',
    oneLiner: 'Two more quick questions, then you are basically done with setup.',
    icon: BarChart3,
    actions: [
      'Share App Analytics with App Developers — saying NO is fine. This only shares anonymous crash information.',
      'iPad Analytics with Apple — saying NO is also fine. Your iPad will work identically either way.',
      'Choose a look — Light mode (bright screen) is easier to read in the daytime, Dark mode (dark background) is easier on the eyes at night.',
      'Tap Continue. The iPad will briefly say "Hello" again and you are almost done.',
    ],
    stumble:
      "You can switch between Light and Dark mode any time: Settings → Display & Brightness → tap Light or Dark. Some people also like \"Automatic\" which switches on its own at sunset.",
    screenshot: 'Display mode selection screen showing Light and Dark previews side by side',
  },
  {
    title: 'Turn on automatic updates',
    oneLiner: 'Apple fixes bugs and security holes each month — let the iPad install these overnight.',
    icon: Zap,
    actions: [
      'On the Software Updates screen, tap Continue to turn on automatic updates.',
      'If you skipped this during setup, open Settings → General → Software Update → Automatic Updates and flip all switches on.',
      'Updates happen overnight when the iPad is plugged in and connected to Wi-Fi. You will see a short message the next morning.',
      'Never do anything to "speed up" your iPad from a website or phone caller — real updates only come from Apple.',
    ],
    stumble:
      "If a full-screen popup ever claims your iPad has a virus, it is a scam. iPads cannot get viruses from websites. Close the tab and move on — never tap the popup.",
    why:
      "Most of the scary tech news stories you hear are about people who never updated. Automatic updates protect you without any effort on your part.",
    screenshot: 'Automatic updates settings with all switches turned on',
  },
  {
    title: 'Tour the Home Screen and Dock',
    oneLiner: 'Every square picture is an app. The Dock at the bottom holds your favorites.',
    icon: Home,
    actions: [
      'APPS are the small squares with pictures — Safari (compass), Mail (envelope), Photos (pinwheel), Messages (speech bubble), and so on.',
      'The DOCK is the row of icons along the bottom edge. It stays put when you swipe between screens.',
      'The STATUS BAR at the very top shows the time, Wi-Fi (a fan shape), and the battery.',
      'Swipe LEFT to see more app screens. Swipe RIGHT to come back.',
      'Swipe DOWN from the middle of the Home Screen to search for any app by name — very helpful when you cannot find something.',
    ],
    stumble:
      "Accidentally moved an app? Press and hold any empty spot on the Home Screen, then tap Done in the top-right corner — everything snaps back. You cannot truly lose or delete an app by dragging it.",
    screenshot: 'iPad Home Screen with apps, Dock, and status bar clearly labeled',
  },
  {
    title: 'Control Center — one swipe for everything',
    oneLiner: 'Swipe down from the TOP-RIGHT corner for volume, brightness, Wi-Fi, and airplane mode.',
    icon: Volume2,
    actions: [
      'With one finger, swipe DOWN from the very top-RIGHT corner of the screen (near the battery icon).',
      'A box slides in with round controls.',
      'The sun slider is screen brightness — drag up to brighten, down to dim.',
      'The speaker slider is volume.',
      'The airplane icon turns off all signals (use on planes).',
      'The Wi-Fi fan and Bluetooth arrow can be tapped to turn those on or off.',
      'Swipe up or tap any empty spot to close Control Center.',
    ],
    stumble:
      "Swiping from the top-LEFT shows you notifications (missed messages, reminders) instead. Both corners are useful — just remember: right corner for settings, left corner for messages.",
    screenshot: 'Control Center open with brightness, volume, Wi-Fi, and airplane mode visible',
  },
  {
    title: "You're ready — take a deep breath",
    oneLiner: 'Setup is done. Everything from here is practice and fun.',
    icon: Sparkles,
    actions: [
      'Open Safari (the blue compass) and try visiting teksure.com.',
      'Open FaceTime and make a test video call to a family member — it is the green video camera icon.',
      'Ask Siri something by holding the top button: "Hey Siri, what\'s the weather today?"',
      'Bookmark this page so you can come back to any step.',
      'Scroll down on this page for accessibility tips, common activities, and safety advice.',
    ],
    stumble:
      "Feeling overwhelmed is normal and temporary. You do not have to learn every feature today — come back to any step whenever you want. The iPad is not going anywhere.",
    screenshot: 'A friendly confetti graphic celebrating completion of the iPad setup',
  },
];

/* ── iPad model identifier data ─────────────────────────────────── */

interface IpadModel {
  name: string;
  tagline: string;
  port: 'USB-C' | 'Lightning' | 'USB-C or Lightning';
  unlock: 'Touch ID (top button)' | 'Touch ID (Home button)' | 'Face ID';
  notes: string;
}

const IPAD_MODELS: IpadModel[] = [
  {
    name: 'iPad (regular)',
    tagline: 'The everyday iPad — great for reading, video calls, and web browsing.',
    port: 'USB-C or Lightning',
    unlock: 'Touch ID (top button)',
    notes:
      'Newer models (2022 and later) use USB-C. Older models use the smaller Lightning cable. Both have a top button with a built-in fingerprint reader — no Home button below the screen on new models.',
  },
  {
    name: 'iPad mini',
    tagline: 'A smaller iPad — fits easily in one hand and slips into any bag.',
    port: 'USB-C',
    unlock: 'Touch ID (top button)',
    notes:
      'Compact and very light. Excellent for reading books in bed or at the kitchen table. Uses USB-C on modern models.',
  },
  {
    name: 'iPad Air',
    tagline: 'A lighter, faster iPad — the most popular step up from the regular iPad.',
    port: 'USB-C',
    unlock: 'Touch ID (top button)',
    notes:
      'Thinner than the regular iPad, with a brighter screen. Works with the Apple Pencil. No Home button — unlock is the small top button.',
  },
  {
    name: 'iPad Pro',
    tagline: 'The top-of-the-line iPad — with a larger screen and Face ID unlock.',
    port: 'USB-C',
    unlock: 'Face ID',
    notes:
      'Unlocks with your face, so no fingerprint needed. Often paired with a keyboard for writing long emails. More expensive — most people do not need a Pro.',
  },
];

/* ── Accessibility tips ─────────────────────────────────────────── */

interface AccessibilityTip {
  title: string;
  icon: LucideIcon;
  description: string;
  steps: string[];
}

const ACCESSIBILITY_TIPS: AccessibilityTip[] = [
  {
    title: 'Bigger text everywhere',
    icon: TypeIcon,
    description: 'Makes every word on the iPad larger — in Mail, Messages, Safari, and more.',
    steps: [
      'Open Settings (grey gear).',
      'Tap Display & Brightness → Text Size.',
      'Drag the slider to the right until words feel comfortable.',
    ],
  },
  {
    title: 'Bold text',
    icon: TypeIcon,
    description: 'Makes all text slightly thicker — easier on tired eyes without changing size.',
    steps: [
      'Open Settings → Display & Brightness.',
      'Flip the Bold Text switch ON.',
      'The iPad briefly refreshes — give it 10 seconds.',
    ],
  },
  {
    title: 'Button shapes',
    icon: MousePointerClick,
    description: 'Adds a visible outline around every button so you can see exactly what is tappable.',
    steps: [
      'Open Settings → Accessibility.',
      'Tap Display & Text Size → Button Shapes.',
      'Flip the switch ON.',
    ],
  },
  {
    title: 'Reduce motion',
    icon: RefreshCw,
    description: 'Cuts down the animation that makes screens slide and zoom — helpful if motion feels dizzy.',
    steps: [
      'Open Settings → Accessibility.',
      'Tap Motion.',
      'Flip Reduce Motion ON.',
    ],
  },
  {
    title: 'Increase contrast',
    icon: Eye,
    description: 'Darkens text and backgrounds so words stand out more clearly.',
    steps: [
      'Open Settings → Accessibility.',
      'Tap Display & Text Size → Increase Contrast.',
      'Flip the switch ON.',
    ],
  },
  {
    title: 'Zoom (whole screen magnifier)',
    icon: Sparkles,
    description: 'Lets you triple-tap with three fingers to zoom the entire screen — anywhere.',
    steps: [
      'Open Settings → Accessibility → Zoom.',
      'Flip Zoom ON.',
      'Triple-tap anywhere with three fingers to zoom in; triple-tap again to zoom out.',
    ],
  },
  {
    title: 'VoiceOver (screen reader)',
    icon: Volume2,
    description: 'Reads the screen aloud when you tap — for people with low or no vision.',
    steps: [
      'Open Settings → Accessibility → VoiceOver.',
      'Flip VoiceOver ON.',
      'Learn the basics first — tap once to hear, double-tap to open. Three-finger triple-tap can also toggle it on or off from any screen.',
    ],
  },
  {
    title: 'Larger tap targets and Spoken Content',
    icon: Mic,
    description: 'Bigger, easier-to-hit buttons and an option to have selected text read aloud.',
    steps: [
      'Open Settings → Accessibility → Spoken Content.',
      'Flip "Speak Selection" ON.',
      'After this, selecting any text will show a "Speak" option that reads it aloud — great for articles.',
    ],
  },
];

/* ── Things seniors often want to do ─────────────────────────────── */

interface Activity {
  title: string;
  icon: LucideIcon;
  overview: string;
  howTo: string[];
}

const ACTIVITIES: Activity[] = [
  {
    title: 'Read the newspaper',
    icon: Newspaper,
    overview:
      "Most newspapers have a free app in the App Store. Many public libraries also offer free newspaper access through a card.",
    howTo: [
      'Open the App Store (blue A).',
      'Tap Search, then type your paper\'s name (New York Times, Washington Post, local paper).',
      'Tap Get to install — your Apple ID password or Face ID confirms.',
      'Or ask your library about the free "Libby" or "PressReader" app.',
    ],
  },
  {
    title: 'Video call with FaceTime',
    icon: Video,
    overview:
      'See the face of a loved one for free, over Wi-Fi. FaceTime is built into every iPad — no setup needed.',
    howTo: [
      'Open FaceTime (green video camera icon).',
      'Tap New FaceTime (or the + in the top-right).',
      'Type the name, number, or email of the person you want to call.',
      'Tap the green FaceTime video icon to start — they must also have an iPhone, iPad, or Mac.',
    ],
  },
  {
    title: 'Read books',
    icon: BookOpen,
    overview:
      'The Books app (orange book icon) has both free and paid books, and Libby (from the App Store) gives you free library books.',
    howTo: [
      'Open the Books app — it comes with every iPad.',
      'Browse the Book Store tab for bestsellers, or tap Library → Want to Read.',
      'For free library books: install Libby from the App Store and sign in with your library card.',
    ],
  },
  {
    title: 'Watch TV and movies',
    icon: Tv,
    overview:
      'Netflix, YouTube, Disney+, and others each have their own app. Some are free with ads; others cost a monthly fee.',
    howTo: [
      'Open the App Store and search by name (YouTube, Netflix, Disney+, Apple TV).',
      'Tap Get to install.',
      'Open the app and sign in with your account — or create a new free account where available.',
      'Prop the iPad up on a stand for comfortable viewing.',
    ],
  },
  {
    title: 'Play gentle games',
    icon: Gamepad2,
    overview:
      'Solitaire, crosswords, word puzzles, and classic card games — most are free in the App Store.',
    howTo: [
      'Open the App Store → Search.',
      'Try typing "solitaire," "crosswords," or "word puzzle."',
      'Look for apps with high star ratings (4.5 and up) and many reviews — those are usually trustworthy.',
      'Avoid games that constantly ask you to buy things — read the reviews before installing.',
    ],
  },
  {
    title: 'Send and receive email',
    icon: Mail,
    overview:
      'The Mail app (blue envelope) works with Gmail, Yahoo, iCloud, AOL, Outlook — almost any email account.',
    howTo: [
      'Open Settings → Mail → Accounts → Add Account.',
      'Tap your email provider (Gmail, Yahoo, Outlook, etc.).',
      'Type your email address and password.',
      'Open the Mail app — your messages will appear within a minute.',
    ],
  },
  {
    title: 'Store and share photos',
    icon: Images,
    overview:
      'Every photo you take on the iPad is saved in the Photos app (colorful pinwheel). iCloud can back them up automatically.',
    howTo: [
      'Open Photos to see everything you have taken.',
      'Tap a photo, then the Share icon (square with an up arrow) to send it by Messages, Mail, or AirDrop.',
      'Turn on iCloud Photos (Settings → your name → iCloud → Photos) so your pictures are safely backed up.',
    ],
  },
  {
    title: 'Browse the web safely',
    icon: Globe,
    overview:
      'Safari (blue compass) is the built-in web browser. It has a safe reader mode and blocks many popups.',
    howTo: [
      'Open Safari.',
      'Tap the address bar at the top and type a website name (teksure.com, wikipedia.org).',
      'Tap the reader icon (looks like lines of text) in the address bar for a clean, ad-free view.',
      'Bookmark favorite sites by tapping the Share icon → Add Bookmark.',
    ],
  },
];

/* ── Troubleshooting items ──────────────────────────────────────── */

const TROUBLES = [
  {
    q: 'The screen is too small or too bright',
    a: 'Open Settings → Display & Brightness → Text Size, and drag the slider. For brightness, swipe down from the top-right corner and drag the sun slider. Enable Zoom in Settings → Accessibility for a full-screen magnifier.',
  },
  {
    q: 'I forgot my Apple ID or password',
    a: 'Open Safari and go to iforgot.apple.com. You can reset the password by answering security questions or receiving a code by email. Never give your Apple ID to anyone who calls you on the phone.',
  },
  {
    q: "An app won't open or keeps freezing",
    a: 'Force-quit the app: swipe up from the bottom and pause in the middle, then flick the app\'s card UP off the top of the screen. Open the app again. If that fails, restart the iPad (hold top button + either volume button, slide to power off, wait 10 seconds, hold top button again).',
  },
  {
    q: 'Safari keeps asking about cookies on every website',
    a: 'That popup is from each website — not Apple. Tap "Accept" or "Reject" — either choice is fine and you will not break anything. Many websites require you to pick one before letting you read.',
  },
  {
    q: 'The iPad suddenly reads everything I touch',
    a: 'You turned on VoiceOver by accident. To turn it off, triple-tap the top button (or Home button on older iPads) with ONE finger. Or open Settings (double-tap each item to open) → Accessibility → VoiceOver → flip it OFF.',
  },
  {
    q: "The iPad won't charge",
    a: 'Try a different wall outlet. Wipe the charging port gently with a dry cotton swab — lint often clogs it. If you have another Apple cable, try that. If the battery icon still does not appear after 15 minutes, the cable or brick may be faulty.',
  },
  {
    q: 'It keeps asking me to update',
    a: 'Updates from Apple fix real bugs and security issues — it is safe to say yes. The best time is overnight while the iPad is plugged in. If you skipped it, Settings → General → Software Update lets you do it on your own schedule.',
  },
  {
    q: 'Too many notifications — beeps and banners all day',
    a: 'Open Settings → Notifications. Tap any app, then either turn Allow Notifications OFF or change the alert style to "None." Start with the noisiest apps first — often Mail, Messages, and games.',
  },
];

/* ── FAQ ────────────────────────────────────────────────────────── */

const FAQ = [
  {
    q: 'Do I need cellular service on my iPad?',
    a: 'No — most people only need the Wi-Fi model. Wi-Fi works free at home, at most coffee shops, and at libraries. Cellular iPads cost more up front AND have a monthly fee. Only pick cellular if you often travel away from Wi-Fi and need internet on the go.',
  },
  {
    q: 'Can I print from my iPad?',
    a: 'Yes, if your printer supports AirPrint (almost all modern home printers do). Tap the Share icon in any app → Print → pick your printer. If your printer is older, the printer manufacturer usually offers a free app in the App Store.',
  },
  {
    q: 'How do I stop my grandchildren from buying things in games?',
    a: 'Open Settings → Screen Time → Content & Privacy Restrictions → iTunes & App Store Purchases → In-app Purchases → Don\'t Allow. You can also require your password for every purchase, even small ones.',
  },
  {
    q: 'Do I need an Apple Pencil?',
    a: 'No. The Apple Pencil is helpful for drawing or detailed note-taking, but everything on the iPad works with your finger. Buy a Pencil only if you know you will use it.',
  },
  {
    q: 'How do I share photos with family?',
    a: 'Open Photos → tap a photo → tap the Share icon (square with an up arrow) → pick Messages, Mail, or AirDrop (for nearby Apple devices). For ongoing sharing, set up a Shared Album: Photos → Albums → the + icon → New Shared Album.',
  },
];

/* ── Main component ──────────────────────────────────────────────── */

export default function IpadForSeniors() {
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const totalSteps = STEPS.length;
  const current = STEPS[stepIndex] ?? STEPS[0];
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);
  const isLastStep = stepIndex === totalSteps - 1;
  const StepIcon = current.icon;

  /* ── Load saved progress on mount ── */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as SavedProgress;
      if (saved && typeof saved.stepIndex === 'number') {
        setStepIndex(Math.min(Math.max(saved.stepIndex, 0), totalSteps - 1));
        if (Array.isArray(saved.completed)) {
          setCompleted(new Set(saved.completed));
        }
      }
    } catch {
      // ignore corrupted data
    }
  }, [totalSteps]);

  /* ── Save progress whenever state changes ── */
  const saveNow = useCallback(() => {
    if (typeof window === 'undefined') return;
    const payload: SavedProgress = {
      stepIndex,
      completed: Array.from(completed),
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // storage may be full or disabled — silently ignore
    }
  }, [stepIndex, completed]);

  useEffect(() => {
    saveNow();
  }, [saveNow]);

  /* ── Wizard navigation helpers ── */
  const goNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jumpTo = (i: number) => {
    setStepIndex(i);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const takeABreak = () => {
    saveNow();
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-alert
      window.alert(
        "Your progress has been saved. You can close this page and come back any time — we'll remember where you left off.",
      );
    }
  };

  /* ── Hero ── */
  const Hero = useMemo(
    () => (
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7D9C5] via-orange-50 to-amber-50 dark:from-orange-950/40 dark:via-rose-950/30 dark:to-amber-950/20" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.25),transparent_60%)]" />
        <div className="container relative py-10 md:py-14">
          <div className="absolute top-6 right-6">
            <BookmarkButton
              type="tool"
              slug="ipad-for-seniors"
              title="Your New iPad — Let's Get Comfortable"
              url="/tools/ipad-for-seniors"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Tablet className="w-5 h-5 text-orange-700 dark:text-orange-300" />
            <Badge variant="outline" className="text-xs border-orange-300 text-orange-800 dark:text-orange-200">
              iPad for seniors · Guided walkthrough
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
            Your New iPad — Let&apos;s Get Comfortable
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            From unboxing to reading the paper, one gentle step at a time.
          </p>
        </div>
      </section>
    ),
    [],
  );

  return (
    <>
      <SEOHead
        title="Your New iPad — A Gentle Walkthrough for Seniors"
        description="Just got an iPad? Follow a warm, step-by-step setup guide designed for seniors. 14 plain-language steps, accessibility tips, and the everyday activities you came for."
        path="/tools/ipad-for-seniors"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {Hero}

        {/* ── "Which iPad?" identifier ───────────────────────── */}
        <section className="container py-10 md:py-14">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-orange-700 dark:text-orange-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">Which iPad do you have?</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            All four kinds work the same way — the differences are mostly size, speed, and how you unlock.
            Flip your iPad over and look for the model name on the back, or match one of these descriptions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {IPAD_MODELS.map((m) => (
              <Card key={m.name} className="border-orange-300/50 bg-orange-50/40 dark:bg-orange-950/10">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 shrink-0">
                      <Tablet className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{m.name}</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {m.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
                    <div className="rounded-lg bg-background/70 border border-border px-3 py-2">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Charging port</div>
                      <div className="font-semibold">{m.port}</div>
                    </div>
                    <div className="rounded-lg bg-background/70 border border-border px-3 py-2">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">How you unlock</div>
                      <div className="font-semibold">{m.unlock}</div>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">{m.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="mt-6 border-amber-400/60 bg-amber-50 dark:bg-amber-950/30">
            <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            <AlertTitle className="text-base md:text-lg">USB-C vs Lightning at a glance</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              USB-C is the newer, oval-shaped cable end that can be plugged in either way up. Lightning is
              the older, thinner, rectangular cable with a flat metal tip. Both charge an iPad equally well —
              use whichever cable came in your box. Face ID (unlocking with your face) is only on iPad Pro;
              all other iPads use Touch ID (a fingerprint reader built into the top button) or the Home
              button on older models.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Wizard (setup walkthrough) ───────────────────────── */}
        <section className="border-t border-border bg-gradient-to-br from-orange-50 via-rose-50/60 to-amber-50 dark:from-orange-950/30 dark:via-rose-950/20 dark:to-amber-950/10">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <StepIcon className="w-5 h-5 text-orange-700 dark:text-orange-300" />
                <span className="text-base md:text-lg font-medium">iPad setup walkthrough</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={takeABreak}
                  className="gap-2 min-h-11 text-base"
                >
                  <Coffee className="w-4 h-4" />
                  Take a break
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={restart}
                  className="gap-2 min-h-11 text-base"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start over
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-sm md:text-base font-medium">
                Step {stepIndex + 1} of {totalSteps}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                You&apos;re doing great — take your time.
              </span>
            </div>
            <Progress value={progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          <article className="space-y-6">
            {/* Step header */}
            <header className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="text-sm bg-orange-600 hover:bg-orange-600 text-white">
                  Step {stepIndex + 1} / {totalSteps}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  iPad
                </Badge>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 shrink-0">
                  <StepIcon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
                    {current.oneLiner}
                  </p>
                </div>
              </div>
            </header>

            {/* Screenshot placeholder */}
            <div
              role="img"
              aria-label={`Screenshot placeholder: ${current.screenshot}`}
              className="relative aspect-video rounded-xl border-2 border-dashed border-muted-foreground/30 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-950/30 dark:to-rose-950/20 flex flex-col items-center justify-center text-center gap-3 p-6"
            >
              <div className="p-3 rounded-full bg-background border">
                <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Screenshot: iPad
              </div>
              <div className="text-base md:text-lg font-medium max-w-md">{current.screenshot}</div>
            </div>

            {/* Actions list */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">What to do</h2>
                <ol className="space-y-3">
                  {current.actions.map((action, i) => (
                    <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200 font-bold flex items-center justify-center text-base"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-1">{action}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Stumbling block */}
            <Alert className="border-amber-400/60 bg-amber-50 dark:bg-amber-950/30">
              <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              <AlertTitle className="text-base md:text-lg">Common stumbling block</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                {current.stumble}
              </AlertDescription>
            </Alert>

            {/* Why this matters (optional) */}
            {current.why && (
              <Alert className="border-primary/40 bg-primary/5">
                <Sparkles className="h-5 w-5 text-primary" />
                <AlertTitle className="text-base md:text-lg">Why this matters</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  {current.why}
                  {stepIndex === 6 && (
                    <>
                      {' '}
                      <Link
                        to="/tools/password-strength-tester"
                        className="text-primary underline font-medium"
                      >
                        Try our password strength tester
                      </Link>
                      .
                    </>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {/* Nav */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="lg"
                onClick={goBack}
                disabled={stepIndex === 0}
                className="gap-2 min-h-14 text-base"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </Button>

              {isLastStep ? (
                <Button
                  size="lg"
                  onClick={goNext}
                  className="gap-2 min-h-14 text-base bg-green-600 hover:bg-green-700"
                >
                  I&apos;m finished!
                  <CheckCircle2 className="w-5 h-5" />
                </Button>
              ) : (
                <Button size="lg" onClick={goNext} className="gap-2 min-h-14 text-base">
                  {completed.has(stepIndex) ? 'Next step' : 'Got it — next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* Step-jump grid */}
            <div className="pt-4">
              <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
              <div className="flex flex-wrap gap-2">
                {STEPS.map((s, i) => {
                  const done = completed.has(i);
                  const active = i === stepIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => jumpTo(i)}
                      aria-current={active ? 'step' : undefined}
                      className={[
                        'px-3 py-2 rounded-lg text-sm font-medium transition-colors border min-h-11',
                        active
                          ? 'bg-orange-600 text-white border-orange-600'
                          : done
                            ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                            : 'bg-background text-foreground border-border hover:border-orange-400',
                      ].join(' ')}
                    >
                      {done && !active ? (
                        <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                      ) : null}
                      {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                      {s.title.split(' ').length > 4 ? '…' : ''}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reassurance footer */}
            <Card className="bg-muted/30">
              <CardContent className="p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-base leading-relaxed">
                  <strong>Can&apos;t break your iPad here.</strong> Every step in this walkthrough is safe.
                  If something looks different on your screen, take a photo and{' '}
                  <Link to="/get-help" className="text-primary underline font-medium">
                    book a TekSure technician
                  </Link>{' '}
                  for a short video session.
                </div>
              </CardContent>
            </Card>
          </article>
        </section>

        {/* ── After-setup: accessibility ───────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">Make it easier on your eyes and hands</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Apple has spent years building thoughtful accessibility tools. Pick one or two to try —
              you do not need all eight. Each takes less than a minute.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ACCESSIBILITY_TIPS.map((tip) => {
                const Icon = tip.icon;
                return (
                  <Card key={tip.title}>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="p-3 rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold">{tip.title}</h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                      <ol className="space-y-2 pl-1">
                        {tip.steps.map((s, i) => (
                          <li key={i} className="flex gap-3 text-base leading-relaxed">
                            <span
                              aria-hidden="true"
                              className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200 font-semibold flex items-center justify-center text-sm"
                            >
                              {i + 1}
                            </span>
                            <span className="pt-0.5">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Things seniors want to do ───────────────────────── */}
        <section className="container py-10 md:py-14">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-700 dark:text-orange-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">Things you probably got the iPad for</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Here are the activities most people want on day one. Each card has a short description and a
            numbered way to start.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ACTIVITIES.map((a) => {
              const Icon = a.icon;
              return (
                <Card key={a.title}>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{a.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {a.overview}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        How to start
                      </h4>
                      <ol className="space-y-2">
                        {a.howTo.map((s, i) => (
                          <li key={i} className="flex gap-3 text-base leading-relaxed">
                            <span
                              aria-hidden="true"
                              className="shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200 font-semibold flex items-center justify-center text-sm"
                            >
                              {i + 1}
                            </span>
                            <span className="pt-0.5">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── Family sharing + privacy ───────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">Family, sharing, and privacy</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A few settings worth turning on early. They protect the iPad from strangers and give you
              peace of mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Protect your Apple ID with 2FA</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Two-factor authentication (2FA) requires a 6-digit code plus your password when
                        signing in from a new place.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Open Settings → your name at the top → Sign-In &amp; Security. Make sure Two-Factor
                    Authentication is ON. Add a trusted phone number you answer at — the codes go there.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Turn on Find My iPad</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        If the iPad is lost or stolen, Find My can locate it on a map and wipe it remotely.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Open Settings → your name → Find My → Find My iPad. Turn on Find My iPad, Find My
                    Network, and Send Last Location. Peace of mind, free.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <SettingsIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Use Screen Time for limits</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Helpful if grandkids share the iPad — set daily limits for games, social media, or
                        video.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Open Settings → Screen Time → Turn On Screen Time. Tap App Limits → Add Limit and pick
                    a category. You can also require a passcode before any limit is raised.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <KeyRound className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Require password for every purchase</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        So a tap or a shared iPad cannot accidentally buy a $40 app coin pack.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Open Settings → your name → Media &amp; Purchases → Password Settings → Always Require.
                    Also turn Require Password for Free Downloads ON.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Use Private Browsing when needed</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Private tabs in Safari do not save history or autofill — helpful at a doctor&apos;s
                        office or on a shared iPad.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    In Safari, tap the tabs icon (two overlapping squares) in the top-right → tap
                    &quot;Private&quot; at the bottom, then the + to open a new private tab. The screen
                    edge turns dark to remind you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <UserPlus className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Set up Family Sharing</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Share purchases, subscriptions, photos, and locations with up to 5 family members —
                        no need to buy an app twice.
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Open Settings → your name → Family → Set Up Family. Invite family members by Apple ID.
                    You can share Apple TV, Apple Music, and iCloud Storage with everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Troubleshooting accordion ───────────────────────── */}
        <section className="container py-10 md:py-14">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-orange-700 dark:text-orange-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">Little things going wrong?</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            The 8 most common iPad puzzles, with short plain-language answers. Tap any question to read.
          </p>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {TROUBLES.map((t, i) => (
                <AccordionItem key={i} value={`trouble-${i}`}>
                  <AccordionTrigger className="text-base md:text-lg text-left">
                    {t.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">{t.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Safety card ───────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-3">
              <Siren className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl md:text-3xl font-semibold">Stay safe on your iPad</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The iPad itself is very safe. The scams you need to watch for live on websites, in emails,
              and in phone calls — not in the iPad.
            </p>

            <Card className="border-red-400/60 bg-red-50/40 dark:bg-red-950/20 max-w-3xl">
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-3 text-base md:text-lg leading-relaxed">
                  <li className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-300 shrink-0 mt-1" />
                    <span>
                      <strong>Safari scam popups</strong> that say &quot;Your iPad has a virus&quot; are
                      fake. Close the tab (two overlapping squares → swipe the tab away). Never tap the
                      popup.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-300 shrink-0 mt-1" />
                    <span>
                      <strong>Never give your Apple ID password</strong> to a popup, an email, or a caller.
                      Apple will never ask for it that way.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-300 shrink-0 mt-1" />
                    <span>
                      <strong>Apple doesn&apos;t call you.</strong> If someone calls claiming to be from
                      Apple Support, hang up. If you want real support, go to support.apple.com yourself.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-300 shrink-0 mt-1" />
                    <span>
                      <strong>Fake virus popups</strong> often add fake clocks, sirens, or loud sounds.
                      None of that is from Apple. Close the page, clear Safari history (Settings → Safari →
                      Clear History and Website Data) and carry on.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Link to="/tools/is-this-real">
                    <Button variant="outline" size="lg" className="min-h-14 text-base">
                      Is This Real? — scam checker
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/tools/scam-simulator">
                    <Button variant="outline" size="lg" className="min-h-14 text-base">
                      Scam Simulator — practice
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <div className="flex items-center gap-2 mb-3">
            <Bookmark className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            The questions we hear most often from new iPad owners.
          </p>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base md:text-lg text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Related tools ───────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-orange-700 dark:text-orange-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">Keep learning</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A few next stops on TekSure once you are comfortable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
              <Link to="/tools/my-first-smartphone">
                <Card className="hover:border-orange-400 transition-colors h-full">
                  <CardContent className="p-5 space-y-2">
                    <Tablet className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                    <h3 className="text-lg font-semibold">My First Smartphone</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The sister walkthrough for iPhone and Android owners.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/tools/voice-assistant-setup">
                <Card className="hover:border-orange-400 transition-colors h-full">
                  <CardContent className="p-5 space-y-2">
                    <Mic className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                    <h3 className="text-lg font-semibold">Voice Assistant Setup</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Teach Siri or Google to help you hands-free.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/guides?category=basics">
                <Card className="hover:border-orange-400 transition-colors h-full">
                  <CardContent className="p-5 space-y-2">
                    <BookOpen className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                    <h3 className="text-lg font-semibold">Basics guide library</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Short how-tos on all the everyday things — printing, email, scanning.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
