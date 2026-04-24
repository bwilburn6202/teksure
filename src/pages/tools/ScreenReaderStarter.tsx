import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Eye,
  Volume2,
  Headphones,
  Ear,
  Settings,
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Tv,
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  BookOpen,
  HelpCircle,
  ExternalLink,
  Lightbulb,
  AlertTriangle,
  Globe,
  Keyboard,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
 * Screen Reader Starter
 * ------------------------------------------------------------------------
 * A beginner-friendly, plain-English tour of built-in screen readers on
 * every device — VoiceOver (iOS/Mac), TalkBack (Android), Narrator (Windows),
 * NVDA (free alternative), ChromeVox (ChromeOS), and Smart TV readers.
 * Built for readers with any level of vision, tired eyes, dyslexia, or
 * anyone who prefers to listen rather than read.
 * ──────────────────────────────────────────────────────────────────────── */

type DeviceId = 'iphone' | 'mac' | 'android' | 'windows' | 'chromeos' | 'tv';

interface DeviceTab {
  id: DeviceId;
  label: string;
  shortLabel: string;
  icon: typeof Smartphone;
}

const DEVICES: DeviceTab[] = [
  { id: 'iphone',   label: 'iPhone / iPad', shortLabel: 'iPhone',  icon: Smartphone },
  { id: 'mac',      label: 'Mac',            shortLabel: 'Mac',      icon: Laptop },
  { id: 'android',  label: 'Android',        shortLabel: 'Android',  icon: Tablet },
  { id: 'windows',  label: 'Windows 10/11',  shortLabel: 'Windows',  icon: Monitor },
  { id: 'chromeos', label: 'ChromeOS',       shortLabel: 'ChromeOS', icon: Laptop },
  { id: 'tv',       label: 'Smart TV',       shortLabel: 'TV',       icon: Tv },
];

interface QuickStart {
  heading: string;
  bullets: string[];
}

interface DeviceContent {
  id: DeviceId;
  title: string;
  intro: string;
  sections: QuickStart[];
  rescue?: string;
  extra?: string;
}

const IPHONE: DeviceContent = {
  id: 'iphone',
  title: 'iPhone & iPad — VoiceOver',
  intro:
    'VoiceOver is built in on every iPhone and iPad. Apple was first to the party with screen readers and has the most polished experience.',
  sections: [
    {
      heading: 'Three ways to turn VoiceOver on',
      bullets: [
        'Through Settings: Settings → Accessibility → VoiceOver → toggle On.',
        'Through the shortcut: Settings → Accessibility → Accessibility Shortcut → check VoiceOver. After that, triple-press the side button (or Home button on older models) to turn it on or off from anywhere.',
        'Through Siri: hold the side button and say "Turn on VoiceOver" or "Hey Siri, turn on VoiceOver."',
      ],
    },
    {
      heading: 'Turn it off if you switched it on by accident',
      bullets: [
        'Three-finger triple-tap anywhere on the screen. VoiceOver will announce "VoiceOver Off."',
        'Or tell Siri: "Hey Siri, turn off VoiceOver."',
        'Or triple-press the side button if you set up the Accessibility Shortcut.',
      ],
    },
    {
      heading: 'Basic gestures to get moving',
      bullets: [
        'Single tap — select an item (VoiceOver reads it out loud).',
        'Double-tap anywhere — activate the selected item (same as a normal tap).',
        'Swipe right or left with one finger — move to the next or previous item.',
        'Swipe up or down with three fingers — scroll the page.',
        'Two-finger tap — pause or resume speech.',
      ],
    },
    {
      heading: 'Speech rate, volume, and pitch',
      bullets: [
        'Settings → Accessibility → VoiceOver → Speech.',
        'Slide "Speaking Rate" to a speed that feels comfortable — start slow.',
        'Tap "Voice" to pick a voice you like (Samantha, Karen, Fred, Nicky, and many more).',
        'Tap "Pronunciations" to teach VoiceOver how to say names or words it gets wrong.',
      ],
    },
    {
      heading: 'Braille display support',
      bullets: [
        'VoiceOver pairs with refreshable Braille displays over Bluetooth.',
        'Settings → Accessibility → VoiceOver → Braille → pair your display.',
        'Over 70 display brands are supported out of the box.',
      ],
    },
  ],
  rescue:
    'Stuck because everything is talking and your taps feel wrong? That is expected. VoiceOver changes how gestures behave. Three-finger triple-tap turns it off.',
};

const MAC: DeviceContent = {
  id: 'mac',
  title: 'Mac — VoiceOver',
  intro:
    'The Mac ships with the same VoiceOver engine as iPhone, plus a built-in interactive tutorial that walks you through everything. It is one of the most thorough screen readers on any platform.',
  sections: [
    {
      heading: 'Turn VoiceOver on or off',
      bullets: [
        'Press Command + F5 (or Cmd + fn + F5 on laptops that share the F-row with media keys).',
        'Or open System Settings → Accessibility → VoiceOver and toggle it on.',
        'Same shortcut turns it off — Command + F5 again.',
      ],
    },
    {
      heading: 'The VO key combo',
      bullets: [
        '"VO" is shorthand for holding Control + Option together.',
        'Almost every VoiceOver command starts with VO.',
        'You can lock VO keys in Settings so you do not have to hold them — press VO + ; (semicolon) to lock.',
      ],
    },
    {
      heading: 'Move around the screen',
      bullets: [
        'VO + Arrow keys — move between items on the current screen.',
        'VO + Spacebar — activate the selected item (same as clicking).',
        'VO + A — read the entire window from the top.',
        'VO + Shift + Down Arrow — step into a group or table.',
        'VO + Shift + Up Arrow — step back out.',
      ],
    },
    {
      heading: 'Work through the built-in tutorial',
      bullets: [
        'Press Command + F5 to start VoiceOver.',
        'At the welcome screen, choose "Learn VoiceOver."',
        'The tutorial takes about 30 minutes and covers every basic command in hands-on steps.',
        'You can leave and come back any time — your progress is saved.',
      ],
    },
    {
      heading: 'VoiceOver Utility — fine-tune everything',
      bullets: [
        'Open with VO + F8.',
        'Adjust speech rate, voice, punctuation level, verbosity, hot-spot behavior.',
        'Change the cursor shape and color used by VoiceOver.',
      ],
    },
  ],
  rescue:
    'If VoiceOver is talking too much, open VoiceOver Utility with VO + F8 and turn Verbosity down to Low.',
};

const ANDROID: DeviceContent = {
  id: 'android',
  title: 'Android — TalkBack',
  intro:
    'TalkBack is Google\'s built-in screen reader on Android phones and tablets. It works on Samsung, Google Pixel, Motorola, and almost every modern Android device.',
  sections: [
    {
      heading: 'Turn TalkBack on',
      bullets: [
        'Settings → Accessibility → TalkBack → toggle On.',
        'Or use the volume-key shortcut: press and hold both volume keys at the same time for 3 seconds.',
        'Or tell Google Assistant: "Hey Google, turn on TalkBack."',
        'On Samsung phones the path is Settings → Accessibility → Screen reader → Voice Assistant (same engine).',
      ],
    },
    {
      heading: 'Turn TalkBack off if it came on by accident',
      bullets: [
        'Hold both volume keys together for 3 seconds — this is the quickest rescue.',
        'Or tell Google Assistant: "Turn off TalkBack."',
        'Or navigate back to Settings → Accessibility → TalkBack and toggle it off (remember — with TalkBack on, you swipe and double-tap instead of tapping).',
      ],
    },
    {
      heading: 'Basic gestures',
      bullets: [
        'Swipe right — move to the next item.',
        'Swipe left — move to the previous item.',
        'Double-tap anywhere — activate the selected item.',
        'Swipe up then right (like the letter L) — open the TalkBack menu.',
        'Swipe down with two fingers — scroll down the page.',
      ],
    },
    {
      heading: 'Practice with the built-in tutorial',
      bullets: [
        'Settings → Accessibility → TalkBack → Settings → Tutorial and help → Practice gestures.',
        'You can practice every gesture as many times as you want — nothing on your phone changes.',
      ],
    },
    {
      heading: 'Change voice and speed',
      bullets: [
        'Settings → Accessibility → TalkBack → Text-to-speech settings.',
        'Pick your voice engine (Google TTS or Samsung TTS).',
        'Adjust speech rate and pitch with the sliders.',
      ],
    },
  ],
  rescue:
    'If both-volume-keys does not work, it may be off in settings. Turn it on: Settings → Accessibility → Volume key shortcut → pick TalkBack.',
};

const WINDOWS: DeviceContent = {
  id: 'windows',
  title: 'Windows 10 / 11 — Narrator (and NVDA)',
  intro:
    'Windows comes with Narrator, a capable screen reader you can start in seconds. For heavier use, many people switch to NVDA — a free, open-source screen reader with a bigger community.',
  sections: [
    {
      heading: 'Turn Narrator on or off',
      bullets: [
        'Press Windows key + Ctrl + Enter — this works on any Windows 10 or 11 PC.',
        'Or open Settings → Accessibility → Narrator → toggle On.',
        'Same shortcut turns it off.',
      ],
    },
    {
      heading: 'Narrator Home — the built-in tutorial',
      bullets: [
        'Press Windows key + Ctrl + N to open Narrator Home.',
        'Work through "Quick start" for a 5-minute intro.',
        '"Narrator guide" is a full tutorial covering navigation, reading, and forms.',
        'You can revisit any time Narrator is running.',
      ],
    },
    {
      heading: 'Common keys',
      bullets: [
        'Caps Lock is the "Narrator key" by default — hold it with other keys for Narrator commands.',
        'Caps Lock + Arrow keys — move between items.',
        'Caps Lock + Spacebar — activate the selected item.',
        'Caps Lock + R — read from here to the end of the screen.',
        'Caps Lock + Esc — turn Narrator off from anywhere.',
      ],
    },
    {
      heading: 'Change voice and speed',
      bullets: [
        'Settings → Accessibility → Narrator → Narrator\'s voice.',
        'Pick a voice (many natural voices are now included).',
        'Drag the Speed slider to your preferred pace.',
        'Adjust pitch and volume right below.',
      ],
    },
  ],
};

const NVDA_NOTE = {
  heading: 'NVDA — a free, more powerful alternative',
  bullets: [
    'Download from nvaccess.org — it is free and open source.',
    'Run the installer and reboot your PC.',
    'NVDA covers more apps and websites than Narrator, and has a much bigger online community to ask questions.',
    'Keyboard help: press Insert + 1 to hear a key\'s function before you use it (training mode).',
    'YouTube and nvaccess.org both have great beginner tutorials.',
  ],
};

const CHROMEOS: DeviceContent = {
  id: 'chromeos',
  title: 'ChromeOS (Chromebook) — ChromeVox',
  intro:
    'ChromeVox is built into every Chromebook. It is fast to turn on and works well across the web and Google apps.',
  sections: [
    {
      heading: 'Turn ChromeVox on or off',
      bullets: [
        'Press Ctrl + Alt + Z — this is the universal toggle on every Chromebook.',
        'Or open Settings → Accessibility → Manage accessibility features → turn on "Enable ChromeVox."',
        'Same shortcut (Ctrl + Alt + Z) turns it off.',
      ],
    },
    {
      heading: 'Move around',
      bullets: [
        'Search + Arrow keys — move through items on the screen (the Search key is the magnifying-glass key).',
        'Search + Space — activate the selected item.',
        'Search + Period — open the ChromeVox menu for more options.',
      ],
    },
    {
      heading: 'Built-in tutorial',
      bullets: [
        'With ChromeVox on, press Search + O, then T.',
        'The interactive tutorial walks you through navigation, reading, and forms.',
      ],
    },
    {
      heading: 'Change voice',
      bullets: [
        'Settings → Accessibility → Manage accessibility features → Text-to-speech.',
        'Pick voice, rate, pitch, and volume.',
      ],
    },
  ],
};

const TV: DeviceContent = {
  id: 'tv',
  title: 'Smart TV — Voice Guide & Screen Reader',
  intro:
    'Smart TV screen readers are more limited than on phones or computers, but every major brand includes one that reads menus and settings out loud.',
  sections: [
    {
      heading: 'Samsung TV — Voice Guide',
      bullets: [
        'Settings → General → Accessibility → Voice Guide → On.',
        'Or press and hold the Mute button for a few seconds on newer Samsung remotes.',
        'Adjust speed, volume, and pitch right below the Voice Guide toggle.',
      ],
    },
    {
      heading: 'LG TV — Audio Guidance',
      bullets: [
        'Settings → All Settings → Accessibility → Audio Guidance → On.',
        'On newer webOS models, press and hold the Mute button as a shortcut.',
      ],
    },
    {
      heading: 'Sony TV — Screen Reader',
      bullets: [
        'Settings → Device Preferences → Accessibility → Screen reader → On.',
        'On Google TV Sony models, hold the Mute key for a shortcut.',
      ],
    },
    {
      heading: 'Roku — Screen Reader',
      bullets: [
        'Settings → Accessibility → Screen Reader → On.',
        'Or press Star (*) four times quickly on any Roku remote.',
      ],
    },
    {
      heading: 'Apple TV — VoiceOver',
      bullets: [
        'Settings → Accessibility → VoiceOver → On.',
        'Or triple-press the Menu or TV button if you set up the Accessibility Shortcut.',
      ],
    },
  ],
  extra:
    'Note: smart TV screen readers read menus and settings, not show content. For shows, look for Audio Description in your streaming service.',
};

const DEVICE_CONTENT: Record<DeviceId, DeviceContent> = {
  iphone: IPHONE,
  mac: MAC,
  android: ANDROID,
  windows: WINDOWS,
  chromeos: CHROMEOS,
  tv: TV,
};

/* ── Small shared data sets ───────────────────────────────────────────── */

const HELP_LIST: string[] = [
  'Macular degeneration, glaucoma, cataracts, or diabetic retinopathy',
  'Resting tired eyes after hours of reading on a screen',
  'Reading in the dark without a lamp',
  'Multitasking — cooking, walking, riding as a passenger',
  'Dyslexia — having text read aloud reduces fatigue and improves comprehension',
  'Learning English as a second language — hearing words helps with pronunciation',
];

const VOCAB: { term: string; meaning: string }[] = [
  {
    term: 'Rotor (iOS) / Spinner',
    meaning:
      'A quick-access dial on iPhone and iPad. Turn two fingers in a rotating motion to change what swipes do — jump by headings, links, words, characters, and more.',
  },
  {
    term: 'Reading order',
    meaning:
      'The order in which a screen reader reads a page. Normally top-to-bottom, left-to-right. Well-designed apps and websites follow a clear reading order.',
  },
  {
    term: 'Landmarks',
    meaning:
      'Labeled regions on a page — headings, navigation, main content, footer. Screen readers let you jump straight to them, which saves a lot of time on long pages.',
  },
  {
    term: 'Speak Screen / Speak Selection',
    meaning:
      'A lighter-weight option that reads the current screen or a highlighted chunk when you ask, without changing any of your other gestures. A good place to start.',
  },
  {
    term: 'TTS (Text-to-Speech)',
    meaning:
      'The engine that turns text into voice. Every screen reader uses one, and you can usually choose which voice it plays.',
  },
];

const READ_ALOUD_APPS: { name: string; how: string }[] = [
  { name: 'Kindle',                     how: 'Long-press any book cover and pick "Listen" — uses your phone\'s voice to read the book aloud.' },
  { name: 'Apple Books (iOS)',          how: 'Select text in any book and tap "Speak" — iOS reads the passage out loud.' },
  { name: 'Kindle on Mac / PC',         how: 'Click the menu → View → Read Aloud → Start Reading.' },
  { name: 'Microsoft Word',             how: 'Ribbon → Review → Read Aloud. Works on Windows, Mac, Web, and mobile.' },
  { name: 'Google Docs',                how: 'Tools → Accessibility → turn on Screen Reader support. Then ChromeVox or any screen reader reads the document.' },
  { name: 'Pocket & Instapaper',        how: 'Both "read-later" apps have built-in text-to-speech — tap the headphone icon on any saved article.' },
  { name: 'Podcasts',                   how: 'Already audio — no screen reader needed. A lovely first step into listening instead of reading.' },
];

const BROWSER_READ_ALOUD: { browser: string; how: string }[] = [
  { browser: 'Safari (Mac & iOS)',    how: 'Select text, right-click (or long-press on iOS), and pick "Speech → Start Speaking."' },
  { browser: 'Chrome',                how: 'Add the "Select-to-Speak" or "Read Aloud" extension, or use ChromeOS\'s built-in Select-to-Speak.' },
  { browser: 'Microsoft Edge',        how: 'Press Alt + Shift + U, or click the "Read aloud" button in the address bar. Has the best built-in voices of any browser.' },
  { browser: 'Firefox',               how: 'Add the "Read Aloud: A Text to Speech Voice Reader" extension from the Firefox add-ons store.' },
];

const FRUSTRATIONS: { issue: string; fix: string }[] = [
  {
    issue: 'It reads everything too fast to follow',
    fix: 'Open your screen reader settings and slow the speech rate. On iOS: Settings → Accessibility → VoiceOver → Speaking Rate. Start at about 0.5× and speed up over a week.',
  },
  {
    issue: 'It reads things I do not want read',
    fix: 'Try "Speak Selection" or "Speak Screen" instead of the full screen reader. Those only read what you ask for, and your normal taps keep working.',
  },
  {
    issue: 'My normal taps stopped working',
    fix: 'Normal. With a screen reader on, single taps select and double-taps activate. This is so people with no vision can explore the screen without accidentally pressing things.',
  },
  {
    issue: 'The voice has a weird accent',
    fix: 'Change it. Most devices ship with five or more voices — US, UK, Australian, Irish, and others. Settings → your screen reader → Voice.',
  },
  {
    issue: 'Others can hear everything',
    fix: 'Plug in headphones or pair Bluetooth earbuds. All screen reading stays private. For rechargeable hearing aids, see our pairing guide.',
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Is this only for people who are blind?',
    a: 'No. Screen readers help anyone who wants to listen instead of read — people with tired eyes, dyslexia, English learners, multitaskers, and drivers. Millions of fully sighted people use them every day.',
  },
  {
    q: 'Is it expensive?',
    a: 'The big ones are free and built in. VoiceOver (Apple), TalkBack (Android), Narrator (Windows), and ChromeVox (ChromeOS) all come with the device. NVDA on Windows is also free and open source.',
  },
  {
    q: 'Can I turn it on for only some apps?',
    a: 'The full screen reader is all-or-nothing, but the lighter "Speak Selection" and "Speak Screen" options let you pick what gets read, one piece at a time. Many people start there.',
  },
  {
    q: 'Will other people hear what it is reading?',
    a: 'Yes, unless you plug in headphones or pair Bluetooth earbuds. Most people use headphones or AirPods when they want privacy.',
  },
  {
    q: 'Does it work in other languages?',
    a: 'Yes. VoiceOver, TalkBack, and Narrator cover the major world languages — Spanish, French, German, Chinese, Japanese, Korean, Arabic, and many more. Add a voice in your screen reader\'s settings.',
  },
  {
    q: 'Does it send my screen contents to the internet?',
    a: 'No. Screen readers run on your device. The voice is synthesized locally. Nothing you read is sent to a server.',
  },
  {
    q: 'How long until I feel comfortable?',
    a: 'Most people feel confident after about two weeks of 15-minute daily practice. Start with "Speak Selection," then graduate to the full screen reader.',
  },
];

const LOW_VISION_TOOLS: { name: string; blurb: string }[] = [
  { name: 'Zoom / Magnifier',         blurb: 'Blow up part of the screen so you can read it at the size that feels right.' },
  { name: 'Invert colors',            blurb: 'Flip black and white so bright screens are easier on tired eyes.' },
  { name: 'Color filters',            blurb: 'Tint the screen for color blindness or sensitivity to blue light.' },
  { name: 'Larger text',              blurb: 'Turn up text size everywhere the app supports it.' },
  { name: 'High contrast mode',       blurb: 'Strengthens outlines and removes faded effects for sharper edges.' },
  { name: 'Dark mode',                blurb: 'White text on a dark background — easier at night and for many eye conditions.' },
];

const COMMUNITY: { name: string; blurb: string; url: string }[] = [
  { name: 'AppleVis',                               blurb: 'Community forum focused on Apple screen readers — great for iPhone, iPad, and Mac questions.',                 url: 'https://www.applevis.com/' },
  { name: 'American Foundation for the Blind (AFB)', blurb: 'National nonprofit with how-to articles, policy news, and a family resource section.',                           url: 'https://www.afb.org/' },
  { name: 'National Federation of the Blind (NFB)',  blurb: 'Advocacy, technology guidance, and local chapters across the US.',                                                url: 'https://nfb.org/' },
  { name: 'American Council of the Blind (ACB)',     blurb: 'Consumer advocacy and the ACB Radio network of audio programming.',                                               url: 'https://acb.org/' },
  { name: 'Hadley',                                   blurb: 'Free classes (online, phone, or video) on using technology with vision loss — one of the best-kept secrets.', url: 'https://hadley.edu/' },
  { name: 'Be My Eyes',                               blurb: 'Free app — a sighted volunteer helps through video on demand. 24/7 coverage in dozens of languages.',         url: 'https://www.bemyeyes.com/' },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

const ScreenReaderStarter = () => {
  const [activeDevice, setActiveDevice] = useState<DeviceId>('iphone');
  const content = DEVICE_CONTENT[activeDevice];

  return (
    <>
      <SEOHead
        title="Screen Reader Starter — VoiceOver, TalkBack, NVDA, Narrator in Plain English"
        description="A beginner-friendly guide to the screen readers built into your phone, tablet, computer, and TV. Turn them on, turn them off, and start listening instead of reading."
        path="/tools/screen-reader-starter"
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 dark:from-violet-950/40 dark:via-fuchsia-950/30 dark:to-amber-950/20 border-b border-violet-200 dark:border-violet-900">
          <div className="container py-12 md:py-16 max-w-5xl">
            <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Screen Reader Starter' }]} />
            <div className="relative pt-6">
              <div className="absolute top-0 right-0">
                <BookmarkButton
                  type="tool"
                  slug="screen-reader-starter"
                  title="Screen Reader Starter"
                  url="/tools/screen-reader-starter"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-3 rounded-2xl bg-violet-200 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200">
                  <Eye className="w-7 h-7" />
                </div>
                <Badge variant="outline" className="text-xs bg-white/70 dark:bg-slate-900/70">
                  Accessibility · Beginner
                </Badge>
                <Badge className="text-xs bg-violet-600 hover:bg-violet-600 text-white">New</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 text-slate-900 dark:text-slate-50">
                Screen Readers — Your Ears Can Do the Reading
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl leading-relaxed">
                Let your phone or computer read everything out loud. Works whether you have full vision,
                low vision, or none.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm px-3 py-1.5">
                  <Volume2 className="w-4 h-4 mr-1.5" /> Built into every device
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1.5">
                  <Headphones className="w-4 h-4 mr-1.5" /> Free, private, on-device
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1.5">
                  <Settings className="w-4 h-4 mr-1.5" /> Start in under a minute
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-10 md:py-14 max-w-5xl space-y-14">
          {/* ── Will this help me? ───────────────────────────────────── */}
          <section aria-labelledby="help-me">
            <Card className="border-violet-200 dark:border-violet-900 bg-violet-50/60 dark:bg-violet-950/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-violet-200 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 id="help-me" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                      Will this help me?
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mt-1">
                      Screen readers are for way more people than you might think. They help with:
                    </p>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3 mt-4">
                  {HELP_LIST.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-300 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* ── Start gentle alert ───────────────────────────────────── */}
          <Alert className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            <AlertTitle className="text-lg md:text-xl text-amber-900 dark:text-amber-100">
              Start gentle — try "Speak Screen" before the full screen reader
            </AlertTitle>
            <AlertDescription className="text-base text-amber-900 dark:text-amber-100 leading-relaxed space-y-2">
              <p>
                iOS, Android, and Mac all include a lighter option that reads a page on demand without
                changing any of your normal gestures. It is a kind way in.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>iOS:</strong> Settings → Accessibility → Spoken Content → turn on "Speak Screen."
                  Then two-finger swipe down from the top to read the page aloud.
                </li>
                <li>
                  <strong>Android:</strong> Settings → Accessibility → Select to Speak. Pick text, hear it read.
                </li>
                <li>
                  <strong>Mac:</strong> System Settings → Accessibility → Spoken Content → turn on "Speak Selection."
                  Highlight text, press Option + Esc.
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* ── Device picker tabs ───────────────────────────────────── */}
          <section aria-labelledby="device-picker">
            <h2 id="device-picker" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Pick your device
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              Every device has a screen reader built in. Tap your device below for a short, plain-English
              quickstart.
            </p>
            <Tabs value={activeDevice} onValueChange={(v) => setActiveDevice(v as DeviceId)}>
              <TabsList className="flex flex-wrap h-auto gap-1.5 bg-slate-100 dark:bg-slate-900 p-2 mb-6">
                {DEVICES.map((d) => {
                  const Icon = d.icon;
                  return (
                    <TabsTrigger
                      key={d.id}
                      value={d.id}
                      className="min-h-14 text-base px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white"
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      <span className="hidden sm:inline">{d.label}</span>
                      <span className="sm:hidden">{d.shortLabel}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {DEVICES.map((d) => {
                const c = DEVICE_CONTENT[d.id];
                return (
                  <TabsContent key={d.id} value={d.id} className="mt-0">
                    <Card className="border-violet-200 dark:border-violet-900">
                      <CardContent className="p-6 md:p-8 space-y-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50">
                            {c.title}
                          </h3>
                          <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mt-2">
                            {c.intro}
                          </p>
                        </div>

                        {c.sections.map((s, idx) => (
                          <div key={idx} className="border-l-4 border-violet-300 dark:border-violet-700 pl-4 py-1">
                            <h4 className="font-semibold text-lg md:text-xl text-slate-900 dark:text-slate-50 mb-2">
                              {s.heading}
                            </h4>
                            <ol className="list-decimal pl-6 space-y-2">
                              {s.bullets.map((b, j) => (
                                <li key={j} className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                                  {b}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}

                        {c.rescue && (
                          <Alert className="border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/20">
                            <AlertTriangle className="h-5 w-5 text-rose-700 dark:text-rose-300" />
                            <AlertTitle className="text-base md:text-lg text-rose-900 dark:text-rose-100">
                              Accidentally turned on?
                            </AlertTitle>
                            <AlertDescription className="text-base text-rose-900 dark:text-rose-100 leading-relaxed">
                              {c.rescue}
                            </AlertDescription>
                          </Alert>
                        )}

                        {c.extra && (
                          <div className="rounded-lg bg-slate-100 dark:bg-slate-900/40 p-4 flex gap-3">
                            <Info className="h-5 w-5 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
                            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{c.extra}</p>
                          </div>
                        )}

                        {/* NVDA card inside Windows tab */}
                        {d.id === 'windows' && (
                          <Card className="border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20">
                            <CardContent className="p-5 md:p-6">
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-emerald-200 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                                  <Sparkles className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg md:text-xl text-emerald-900 dark:text-emerald-100 mb-2">
                                    {NVDA_NOTE.heading}
                                  </h4>
                                  <ul className="list-disc pl-6 space-y-2">
                                    {NVDA_NOTE.bullets.map((b, j) => (
                                      <li key={j} className="text-base md:text-lg text-emerald-900 dark:text-emerald-100 leading-relaxed">
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                  <Button asChild variant="link" className="mt-3 px-0 text-emerald-800 dark:text-emerald-200">
                                    <a href="https://www.nvaccess.org/download/" target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4 mr-1.5" /> Download NVDA from nvaccess.org
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </section>

          {/* ── Vocabulary ────────────────────────────────────────────── */}
          <section aria-labelledby="vocab">
            <h2 id="vocab" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Common screen-reader words
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              A few terms you will hear as you get started. Knowing them makes every tutorial easier
              to follow.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {VOCAB.map((v, i) => (
                <Card key={i} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1">{v.term}</h3>
                        <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{v.meaning}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Voice customization ──────────────────────────────────── */}
          <section aria-labelledby="voice-custom">
            <Card className="border-violet-200 dark:border-violet-900">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <h2 id="voice-custom" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                    Pick a voice you enjoy
                  </h2>
                </div>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  The default voice is rarely the best one. Spending five minutes on this makes a big
                  difference over months of use.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Pick a voice you like.</strong> iOS has Samantha, Karen, Fred, Nicky, and Alex.
                    Windows and Mac include US, UK, Australian, Irish, Indian, and South African voices.
                  </li>
                  <li className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Start slow — 0.5× speaking rate.</strong> Your ears will speed up on their own.
                    After a week, bump to 0.75×. Power users often end up at 1.5× to 2×.
                  </li>
                  <li className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Punctuation level.</strong> Most people prefer "Some" — hears periods and commas,
                    skips the rest. "All" reads every symbol aloud ("exclamation mark," "dash," etc.).
                  </li>
                  <li className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Try a "premium" voice.</strong> iOS calls them Enhanced or Premium voices (free
                    download). Windows 11 has Natural voices that sound almost human.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* ── Apps with built-in read-aloud ────────────────────────── */}
          <section aria-labelledby="apps-readaloud">
            <h2 id="apps-readaloud" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Apps that read to you — no screen reader required
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              If the full screen reader feels like a lot, these apps have a read-aloud button of their
              own. Tap, sit back, and listen.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {READ_ALOUD_APPS.map((a, i) => (
                <Card key={i} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5 flex gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 h-fit">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1">{a.name}</h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{a.how}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Browser read aloud ───────────────────────────────────── */}
          <section aria-labelledby="browser-readaloud">
            <h2 id="browser-readaloud" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Read any web page out loud
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              Every major browser can read the current page. Microsoft Edge has the best built-in voices
              of the bunch.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {BROWSER_READ_ALOUD.map((b, i) => (
                <Card key={i} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5 flex gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 h-fit">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1">{b.browser}</h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{b.how}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Privacy ──────────────────────────────────────────────── */}
          <Alert className="border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20">
            <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
            <AlertTitle className="text-lg md:text-xl text-emerald-900 dark:text-emerald-100">
              About privacy — screen readers run on your device
            </AlertTitle>
            <AlertDescription className="text-base text-emerald-900 dark:text-emerald-100 leading-relaxed">
              VoiceOver, TalkBack, Narrator, NVDA, and ChromeVox all speak out loud locally. Nothing you
              read, type, or listen to gets sent to a company server. The voice is synthesized on the
              device itself, even when you are offline.
            </AlertDescription>
          </Alert>

          {/* ── Getting comfortable ──────────────────────────────────── */}
          <section aria-labelledby="comfort">
            <Card className="border-violet-200 dark:border-violet-900 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/20">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-200 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200">
                    <Keyboard className="w-6 h-6" />
                  </div>
                  <h2 id="comfort" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                    How to get comfortable
                  </h2>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    Start with "Speak Selection" before the full screen reader.
                  </li>
                  <li className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    Practice 15 minutes a day for a week — progress compounds fast.
                  </li>
                  <li className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    YouTube has excellent beginner videos — search "VoiceOver for beginners" or "TalkBack tutorial."
                  </li>
                  <li className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    Hadley (hadley.edu) offers free classes on screen readers — by phone, video, or self-paced online.
                  </li>
                  <li className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                    Use headphones in public — the voice is clearer and your reading stays private.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* ── Common frustrations ──────────────────────────────────── */}
          <section aria-labelledby="frustrations">
            <h2 id="frustrations" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Common frustrations — and quick fixes
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {FRUSTRATIONS.map((f, i) => (
                <AccordionItem key={i} value={`fix-${i}`} className="border border-slate-200 dark:border-slate-800 rounded-lg px-4">
                  <AccordionTrigger className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50 text-left min-h-14">
                    {f.issue}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed pb-4">
                    {f.fix}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* ── Pairing with hearing aids ────────────────────────────── */}
          <section aria-labelledby="hearing-aids">
            <Card className="border-amber-200 dark:border-amber-900">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    <Ear className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 id="hearing-aids" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                      Using a screen reader with hearing aids
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mt-2">
                      Most modern hearing aids can stream phone audio directly into your ears — no
                      headphones needed. This is a great combination with screen readers: clear, private,
                      comfortable.
                    </p>
                  </div>
                </div>
                <Button asChild className="mt-2 min-h-14 text-base bg-amber-600 hover:bg-amber-700 text-white">
                  <Link to="/tools/hearing-aid-tech-helper">
                    Pair hearing aids with your phone
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* ── Beyond screen readers — low-vision tools ─────────────── */}
          <section aria-labelledby="low-vision">
            <h2 id="low-vision" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Beyond screen readers — other low-vision helpers
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              A screen reader is one tool in a bigger kit. These other built-in helpers often make the
              bigger difference for tired eyes and low vision.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {LOW_VISION_TOOLS.map((t, i) => (
                <Card key={i} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5 flex gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 h-fit">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1">{t.name}</h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{t.blurb}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="outline" className="min-h-14 text-base">
              <Link to="/tools/low-vision-tech-hub">
                Open the Low Vision Tech Hub
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </section>

          {/* ── Community & free help ────────────────────────────────── */}
          <section aria-labelledby="community">
            <h2 id="community" className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Free classes and communities
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              You are not learning this alone. These groups have been supporting screen-reader users for
              decades — most are completely free.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {COMMUNITY.map((c, i) => (
                <Card key={i} className="border-slate-200 dark:border-slate-800 hover:border-violet-300 transition-colors">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1">{c.name}</h3>
                    <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-3">{c.blurb}</p>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base font-semibold text-violet-700 dark:text-violet-300 hover:underline min-h-14"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit {c.name}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────── */}
          <section aria-labelledby="faq">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 id="faq" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-slate-200 dark:border-slate-800 rounded-lg px-4">
                  <AccordionTrigger className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50 text-left min-h-14">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* ── Related tools ────────────────────────────────────────── */}
          <section aria-labelledby="related">
            <h2 id="related" className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">
              Related tools
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/tools/low-vision-tech-hub" className="group">
                <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-violet-400 hover:shadow-md transition-all">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-300">
                        Low Vision Tech Hub
                      </h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Every setting that makes screens easier to see on any device.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/tools/hearing-aid-tech-helper" className="group">
                <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-violet-400 hover:shadow-md transition-all">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                      <Ear className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-300">
                        Hearing Aid Tech Helper
                      </h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Pair, stream, and fix common tech issues with modern hearing aids.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/accessibility" className="group">
                <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-violet-400 hover:shadow-md transition-all">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-300">
                        Accessibility Hub
                      </h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Every accessibility guide on TekSure in one friendly directory.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/tools/my-first-smartphone" className="group">
                <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-violet-400 hover:shadow-md transition-all">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-300">
                        My First Smartphone
                      </h3>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        A calm, step-by-step walkthrough for your first phone or a new one.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ScreenReaderStarter;
