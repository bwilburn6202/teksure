import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Mic,
  Speaker,
  Apple,
  Watch,
  Smartphone,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Lock,
  Volume2,
  Star,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Voice Assistant Setup
 * ------------------------------------------------------------
 * A senior-friendly tool to compare Alexa, Google Assistant,
 * Siri, Apple Watch Siri, and existing phone assistants, take
 * a quick 3-question quiz to get a recommendation, then walk
 * through step-by-step setup for the chosen device.
 * ────────────────────────────────────────────────────────────── */

type DeviceId = 'alexa' | 'google' | 'siri' | 'watch' | 'phone';

/* ── Comparison card data ─────────────────────────────────────── */

interface CompareItem {
  id: DeviceId;
  name: string;
  tagline: string;
  icon: LucideIcon;
  price: string;
  strengths: string[];
  weaknesses: string[];
  wakeWord: string;
}

const COMPARE: CompareItem[] = [
  {
    id: 'alexa',
    name: 'Alexa (Amazon Echo)',
    tagline: 'The most popular home voice assistant.',
    icon: Speaker,
    price: '$25 – $100',
    strengths: [
      'Easy setup — guided by a phone app',
      'Huge library of "skills" (add-ons)',
      'Cheapest hardware — Echo Dot often goes on sale for $25',
      'Best for smart home devices (lights, plugs, thermostats)',
    ],
    weaknesses: [
      'Tied to Amazon — nudges you toward Amazon shopping',
      'Answers are shorter and less detailed than Google',
      'Needs a free Amazon account',
    ],
    wakeWord: '"Alexa"',
  },
  {
    id: 'google',
    name: 'Google Assistant (Nest)',
    tagline: 'The smartest answers — it has Google behind it.',
    icon: Mic,
    price: '$50 – $100',
    strengths: [
      'Smartest answers — uses Google Search',
      'Best at follow-up questions ("How tall is she?")',
      'Works with most phones out of the box',
      'Excellent news and weather briefings',
    ],
    weaknesses: [
      'Fewer third-party integrations than Alexa',
      'Google collects more data than Apple (but less than Alexa for shopping)',
      'Needs a free Google account',
    ],
    wakeWord: '"Hey Google" or "OK Google"',
  },
  {
    id: 'siri',
    name: 'Siri (HomePod / HomePod Mini)',
    tagline: 'The most private option — built for Apple households.',
    icon: Apple,
    price: '$99 – $299',
    strengths: [
      'Best if you already have iPhone, iPad, or Apple Watch',
      'Highest privacy — most requests handled on-device',
      'Beautiful audio on the HomePod Mini',
      'Perfect integration with Apple Music and Messages',
    ],
    weaknesses: [
      'Weaker at general knowledge questions than Google',
      'Pricier hardware ($99 for Mini vs $25 for Echo Dot)',
      'Only works well in an Apple household',
    ],
    wakeWord: '"Hey Siri"',
  },
  {
    id: 'watch',
    name: 'Apple Watch (Siri on your wrist)',
    tagline: 'Hands-free voice help wherever you go.',
    icon: Watch,
    price: '$199+ (if you already have iPhone)',
    strengths: [
      'Always with you — great for on-the-go reminders',
      'Fall detection and emergency SOS built in',
      'Raise your wrist and talk — no phone needed',
      'Excellent for walking, gardening, or cooking',
    ],
    weaknesses: [
      'Requires an iPhone to set up',
      'Needs a daily charge',
      'Smaller screen for reading answers',
    ],
    wakeWord: '"Hey Siri" or just raise wrist and speak',
  },
  {
    id: 'phone',
    name: 'Your Existing Phone',
    tagline: 'The cheapest option — you probably already have one.',
    icon: Smartphone,
    price: 'Free — already on your phone',
    strengths: [
      'No extra purchase needed',
      'Already set up on most phones',
      'Works anywhere — even away from home',
      'Perfect to "try before you buy" a smart speaker',
    ],
    weaknesses: [
      'Has to be unlocked and nearby to hear you',
      'Smaller speaker — harder to hear across the room',
      'Drains your phone battery faster',
    ],
    wakeWord: 'iPhone: "Hey Siri" · Android: "Hey Google"',
  },
];

/* ── Quiz questions & recommendation logic ────────────────────── */

type AppleAnswer = 'yes' | 'no' | 'dontcare';
type YesNo = 'yes' | 'no';
type UseCase = 'music' | 'weather' | 'smarthome' | 'questions' | 'medication';

interface QuizAnswers {
  apple?: AppleAnswer;
  amazon?: YesNo;
  useCase?: UseCase;
}

function recommend(a: QuizAnswers): { id: DeviceId; reason: string } {
  // Priority rules:
  // 1. If user is all-in on Apple → Siri
  // 2. If user shops on Amazon a lot → Alexa
  // 3. If primary use is smart home → Alexa (biggest integration library)
  // 4. If primary use is questions → Google
  // 5. If primary use is medication reminders → Alexa (most reliable reminders)
  // 6. Otherwise → Google Assistant (best general purpose)
  if (a.apple === 'yes') {
    return {
      id: 'siri',
      reason: 'Since you already prefer Apple, Siri on a HomePod Mini will talk to your iPhone and iPad seamlessly — your reminders, calendar, and music all live in one place.',
    };
  }
  if (a.amazon === 'yes') {
    return {
      id: 'alexa',
      reason: 'Because you shop on Amazon often, Alexa on an Echo gives you the smoothest experience — you can re-order, check shipments, and get the cheapest hardware ($25 for an Echo Dot on sale).',
    };
  }
  if (a.useCase === 'smarthome') {
    return {
      id: 'alexa',
      reason: 'For smart home control (lights, plugs, thermostats), Alexa has the largest library of compatible devices and the most reliable routines.',
    };
  }
  if (a.useCase === 'questions') {
    return {
      id: 'google',
      reason: 'For general questions and follow-ups, Google Assistant gives the smartest, most detailed answers — it pulls directly from Google Search.',
    };
  }
  if (a.useCase === 'medication') {
    return {
      id: 'alexa',
      reason: 'For medication reminders, Alexa has the most reliable repeating reminders and will keep nagging until you say "stop" or "done".',
    };
  }
  if (a.apple === 'no' && a.amazon === 'no') {
    return {
      id: 'google',
      reason: 'Since you don\'t lean toward Apple or Amazon, Google Assistant on a Nest Mini is a safe, flexible choice — great at answers, music, and basic smart home.',
    };
  }
  return {
    id: 'phone',
    reason: 'Not sure yet? Try the voice assistant already on your phone before buying hardware — "Hey Siri" on iPhone or "Hey Google" on Android. It costs nothing to experiment.',
  };
}

/* ── Setup steps ──────────────────────────────────────────────── */

interface Step {
  title: string;
  instruction: string;
  stumble?: string;
  screenshot: string;
}

interface DeviceInfo {
  id: DeviceId;
  name: string;
  shortName: string;
  icon: LucideIcon;
  wakeWord: string;
  estTime: string;
  steps: Step[];
  firstCommands: string[];
  privacyNote: { wakeWord: string; deletePath: string; muteButton: string };
  support: { label: string; url: string };
}

const ALEXA: DeviceInfo = {
  id: 'alexa',
  name: 'Amazon Echo (Alexa)',
  shortName: 'Echo',
  icon: Speaker,
  wakeWord: '"Alexa"',
  estTime: '20 – 30 minutes',
  steps: [
    {
      title: 'Plug in your Echo and wait for the orange ring',
      instruction:
        'Plug the round power cable into the back of the Echo, then into a wall outlet. The blue light ring on top will spin for about a minute, then turn orange. Orange means the Echo is ready to be set up. Place the Echo on a flat surface in the middle of the room where you spend the most time — the kitchen and living room are popular spots.',
      stumble:
        'If the ring stays blue forever or no light comes on at all, unplug it, wait 30 seconds, and plug back in. Echo uses a specific power brick — do not swap in a phone charger.',
      screenshot: 'Echo Dot with orange light ring on a kitchen counter',
    },
    {
      title: 'Download the free Alexa app on your phone',
      instruction:
        'On your iPhone, open the App Store. On Android, open the Play Store. Search for "Amazon Alexa" and tap Install (it\'s free). The app icon is a blue circle with a white speech bubble. When it finishes, tap Open.',
      stumble:
        'There are many apps with "Alexa" in the name — make sure you install the one made by "Amazon" or "Amazon Mobile LLC". Look for the blue-and-white icon.',
      screenshot: 'Amazon Alexa app icon in the App Store',
    },
    {
      title: 'Sign in with your Amazon account (or create a free one)',
      instruction:
        'The Alexa app will ask for your Amazon email and password — the same one you use to shop on Amazon. If you don\'t have an Amazon account, tap "Create a new Amazon account" — it\'s free and you do NOT need to pay for Prime or add a credit card.',
      stumble:
        'Forgot your Amazon password? Tap "Forgot password" and Amazon will email you a link to reset it. Do not make a second account — it will cause confusion with your Echo later.',
      screenshot: 'Alexa app Amazon sign-in screen with email and password fields',
    },
    {
      title: 'Connect the Echo to your home Wi-Fi',
      instruction:
        'In the Alexa app, tap the "+" icon, then "Add Device" → "Amazon Echo" → pick your Echo model. The app walks you through connecting the Echo to your Wi-Fi. Pick your Wi-Fi network from the list and type your Wi-Fi password. The Echo will say "Your Echo is ready" when it\'s connected.',
      stumble:
        'Wi-Fi passwords are case-sensitive — capital O and number zero are different. The safest way to find your password is to look at the sticker on the back of your router.',
      screenshot: 'Alexa app "Add Device → Amazon Echo" setup screen',
    },
    {
      title: 'Teach Alexa your voice (optional but helpful)',
      instruction:
        'The app offers "Voice Profile" setup. Tap "Set up now". Alexa will ask you to say 10 short phrases like "Alexa, what\'s the weather?". This helps Alexa recognize YOU specifically — useful in households with multiple people. Takes about 3 minutes.',
      stumble:
        'Speak normally — not louder or slower. If Alexa doesn\'t understand a phrase, it will simply repeat that one. You can skip this step entirely and still use the Echo.',
      screenshot: 'Alexa app "Create your voice profile" screen',
    },
    {
      title: 'Try your first command — "Alexa, what\'s the weather?"',
      instruction:
        'Stand near the Echo, in a normal speaking voice, say: "Alexa, what\'s the weather?" The light ring turns blue to show it\'s listening, then Alexa answers with today\'s forecast. That\'s it — you\'re officially using a voice assistant.',
      stumble:
        'If Alexa doesn\'t respond, check that the Echo\'s microphone is NOT muted — if the ring is solid red, press the microphone button on top (the one with a slash through it) to un-mute.',
      screenshot: 'Echo with blue light ring listening to a voice command',
    },
    {
      title: 'Enable a few useful skills (news, reminders, calming music)',
      instruction:
        'In the Alexa app, tap More → Skills & Games. "Skills" are free add-ons. Search for and enable: "Flash Briefing" (daily news from NPR, BBC, etc.), "Ask My Buddy" (can alert family in an emergency), and any calming music skill like "Sleep Sounds". Tap Enable on each one.',
      stumble:
        'Be careful of skills that ask to connect to your bank, email, or health records — only enable ones from well-known names (NPR, AARP, The Weather Channel, Mayo Clinic).',
      screenshot: 'Alexa app Skills store with "Flash Briefing" highlighted',
    },
    {
      title: 'Set a morning or bedtime routine',
      instruction:
        'In the Alexa app, tap More → Routines → "+" to create one. Example: "When I say \'Good morning\', Alexa turns on the lights, reads the weather, and plays the news." Follow the prompts. Routines are the single most useful Alexa feature — one command does many things.',
      stumble:
        'Start with just ONE simple routine — adding too many at once gets confusing. The "Good morning" and "Goodnight" routines are the most popular with seniors.',
      screenshot: 'Alexa app Routines builder with trigger and action slots',
    },
  ],
  firstCommands: [
    '"Alexa, what\'s the weather tomorrow?"',
    '"Alexa, set a timer for 20 minutes."',
    '"Alexa, remind me to take my medicine at 8 a.m."',
    '"Alexa, play calming music."',
    '"Alexa, call [family member\'s name]."',
    '"Alexa, tell me a joke."',
    '"Alexa, what\'s on my calendar today?"',
    '"Alexa, how do you spell restaurant?"',
    '"Alexa, add milk to my shopping list."',
    '"Alexa, play the news."',
  ],
  privacyNote: {
    wakeWord: 'Alexa only begins recording AFTER it hears "Alexa". Before that, the device is listening locally for the wake word but not sending audio to Amazon.',
    deletePath: 'In the Alexa app: More → Settings → Alexa Privacy → Review Voice History → Delete All. You can also say "Alexa, delete everything I said today."',
    muteButton: 'The round button with a microphone icon and slash on top of the Echo physically disconnects the microphone. The ring turns solid red.',
  },
  support: { label: 'Amazon Echo & Alexa Help', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G7HPV3YLTGLEYFWB' },
};

const GOOGLE: DeviceInfo = {
  id: 'google',
  name: 'Google Nest Mini (Google Assistant)',
  shortName: 'Nest Mini',
  icon: Mic,
  wakeWord: '"Hey Google" or "OK Google"',
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Plug in your Nest Mini and wait for a chime',
      instruction:
        'Plug the included power cable into the back of the Nest Mini, then into a wall outlet. After about 30 seconds, the speaker will chime and say "Welcome to Google Home." Place the Nest Mini on a flat surface — the top of a bookshelf or kitchen counter works well.',
      stumble:
        'If you don\'t hear anything after a minute, check that the cable is firmly plugged in on both ends. The Nest Mini does not have a power light — the chime is how you know it\'s on.',
      screenshot: 'Google Nest Mini speaker plugged in and ready',
    },
    {
      title: 'Download the free Google Home app on your phone',
      instruction:
        'Open the App Store (iPhone) or Play Store (Android). Search for "Google Home" and tap Install. It\'s free. The icon is a little colorful house. Open it when done.',
      stumble:
        'Make sure it\'s "Google Home" — not "Google Nest", "Google Mini", or "Nest Home". Only Google Home sets up the speaker.',
      screenshot: 'Google Home app icon in the App Store',
    },
    {
      title: 'Sign in with your Google account',
      instruction:
        'Tap "Get Started" and sign in with your Gmail address and password. If you don\'t have a Google account, tap "Create account" — it\'s free and doesn\'t require a credit card.',
      stumble:
        'If you have multiple Google accounts, pick the one you use every day — that\'s the calendar, contacts, and reminders Google Assistant will read from.',
      screenshot: 'Google Home sign-in screen with Gmail field',
    },
    {
      title: 'Add the Nest Mini to your Home',
      instruction:
        'In the Google Home app, tap the "+" at the top left, then "Set up device" → "New device". The app uses Bluetooth to find the Nest Mini automatically. Tap Yes when you see a matching sound play from the speaker. Pick a room like "Living Room" or "Kitchen".',
      stumble:
        'If the app says "No devices found", make sure Bluetooth is ON in your phone\'s settings. Also make sure your phone is on the same Wi-Fi network you want the Nest Mini to use.',
      screenshot: 'Google Home "Set up new device" screen',
    },
    {
      title: 'Connect to Wi-Fi and train "Hey Google"',
      instruction:
        'Pick your Wi-Fi network from the list and type your password. Next, the app asks you to say "Hey Google" and "OK Google" a few times — this trains the speaker to recognize YOUR voice. Takes about a minute.',
      stumble:
        'Speak naturally, not louder or slower. If the speaker doesn\'t pick up your voice, move closer — about 3 feet is ideal during training.',
      screenshot: 'Google Home "Teach your Assistant" voice training screen',
    },
    {
      title: 'Try your first question — "Hey Google, what\'s the weather?"',
      instruction:
        'Stand near the Nest Mini and say, "Hey Google, what\'s the weather?" in a normal voice. Four colored dots will glow on top while it listens. Google Assistant will speak today\'s forecast. That\'s it — you\'re set up.',
      stumble:
        'If Google doesn\'t respond, check the microphone is not muted — there\'s a slide switch on the back of the Nest Mini. If orange is showing, the mic is off.',
      screenshot: 'Nest Mini with 4 colored dots glowing while listening',
    },
    {
      title: 'Set up a Routine (morning or bedtime)',
      instruction:
        'In the Google Home app, tap Routines → "+" New. Pick a trigger like "Good morning" and actions like "Tell me the weather, read my calendar, play the news." Save it. Now just say "Hey Google, good morning" and everything happens.',
      stumble:
        'Start simple with just 2–3 actions per routine. You can always add more later. Make sure each action has a check mark before tapping Save.',
      screenshot: 'Google Home Routines builder with trigger and action list',
    },
  ],
  firstCommands: [
    '"Hey Google, what\'s the weather tomorrow?"',
    '"Hey Google, set a timer for 15 minutes."',
    '"Hey Google, remind me to call my daughter at 6 p.m."',
    '"Hey Google, play calming music."',
    '"Hey Google, call Mom."',
    '"Hey Google, tell me a joke."',
    '"Hey Google, how do you spell Mississippi?"',
    '"Hey Google, what\'s on my calendar today?"',
    '"Hey Google, play NPR news."',
    '"Hey Google, good morning."',
  ],
  privacyNote: {
    wakeWord: 'The Nest Mini only records AFTER "Hey Google" is heard. Before that, it\'s listening locally for the wake word.',
    deletePath: 'Go to myactivity.google.com in any browser, sign in, and delete recordings. Or say "Hey Google, delete what I just said" / "delete everything I said today."',
    muteButton: 'There\'s a physical slide switch on the back of the Nest Mini. Orange means the microphone is OFF.',
  },
  support: { label: 'Google Nest Help', url: 'https://support.google.com/googlenest' },
};

const HOMEPOD: DeviceInfo = {
  id: 'siri',
  name: 'Apple HomePod Mini (Siri)',
  shortName: 'HomePod Mini',
  icon: Apple,
  wakeWord: '"Hey Siri"',
  estTime: '10 – 20 minutes',
  steps: [
    {
      title: 'Plug in your HomePod Mini',
      instruction:
        'Plug the USB-C power cable into the HomePod Mini and the other end into the included white wall adapter, then plug it into a wall outlet. You\'ll hear a chime and the top of the HomePod Mini will glow white. Place it where you spend time — kitchen and living room are popular.',
      stumble:
        'HomePod Mini needs the INCLUDED 20W USB-C adapter. A weaker phone adapter will cause it to restart or not turn on.',
      screenshot: 'HomePod Mini glowing white on a kitchen counter',
    },
    {
      title: 'Unlock your iPhone or iPad nearby',
      instruction:
        'Pick up your iPhone or iPad, unlock it, and hold it within a few inches of the HomePod Mini. A "Set Up" card slides up from the bottom of your phone screen within 10 seconds. Tap "Set Up".',
      stumble:
        'If the card doesn\'t appear, make sure Bluetooth and Wi-Fi are both ON on your phone. Also make sure your iCloud account is signed in (Settings → your name at the top).',
      screenshot: 'iPhone showing "HomePod Mini Set Up" card sliding up',
    },
    {
      title: 'Pick a room and agree to a few quick settings',
      instruction:
        'Pick a room name (Kitchen, Living Room, etc.) — this matters later when you say "Hey Siri, play music in the kitchen". Then agree to "Personal Requests" (lets Siri read texts), "Find My" (locates the HomePod), and Siri Privacy. Just tap Continue on each.',
      stumble:
        'You can turn off Personal Requests later if you don\'t want Siri reading texts out loud — Home app → HomePod → Personal Requests.',
      screenshot: 'iPhone HomePod setup room picker screen',
    },
    {
      title: 'Hold your iPhone next to the HomePod for transfer',
      instruction:
        'The iPhone shows a camera viewfinder with a swirling pattern — hold your phone so the pattern on the HomePod top is centered. This transfers your Apple ID, Wi-Fi password, and iCloud settings. Takes about 30 seconds. Don\'t move the phone until it says "Done".',
      stumble:
        'If the transfer fails, tap "Enter Passcode Manually" — it just asks for your iPhone unlock code, then does the same thing a different way.',
      screenshot: 'iPhone camera viewfinder over the top of a HomePod Mini',
    },
    {
      title: 'Wait for "HomePod Mini is ready"',
      instruction:
        'Your iPhone and the HomePod sing a quick chime, then the Home app shows "HomePod Mini is ready" with a green checkmark. Tap Done. The HomePod Mini glows a soft white when idle — that means it\'s ready.',
      stumble:
        'If it takes longer than 3 minutes and nothing happens, unplug the HomePod, plug it back in, and start over. The second try almost always works.',
      screenshot: 'iPhone Home app "HomePod Mini is ready" confirmation',
    },
    {
      title: 'Try your first command — "Hey Siri, what\'s the weather?"',
      instruction:
        'In a normal voice, say "Hey Siri, what\'s the weather?" The top of the HomePod glows with swirling colors while Siri listens, then answers. You\'re set up.',
      stumble:
        'If Siri doesn\'t respond, double-tap the top of the HomePod Mini — this wakes Siri manually. If THAT works, say "Hey Siri, can you hear me?" — Siri will recalibrate.',
      screenshot: 'HomePod Mini top glowing with Siri colors while listening',
    },
    {
      title: 'Set a Siri shortcut or scene in the Home app',
      instruction:
        'Open the Home app on your iPhone. Tap "+" → Add Scene. Name it "Good morning" and pick actions like "Tell me the weather" and "Play my News podcast". Save it. Now say "Hey Siri, good morning" and it all runs.',
      stumble:
        'Scenes in the Home app work best if you have Apple smart home devices (HomeKit lights, plugs). Without those, stick with simple single commands.',
      screenshot: 'iPhone Home app "Add Scene" with actions list',
    },
  ],
  firstCommands: [
    '"Hey Siri, what\'s the weather tomorrow?"',
    '"Hey Siri, set a timer for 20 minutes."',
    '"Hey Siri, remind me to take my medication at 8 a.m."',
    '"Hey Siri, play some calming music."',
    '"Hey Siri, call [contact name]."',
    '"Hey Siri, tell me a joke."',
    '"Hey Siri, read my messages."',
    '"Hey Siri, play the news."',
    '"Hey Siri, what\'s on my calendar?"',
    '"Hey Siri, how do I spell restaurant?"',
  ],
  privacyNote: {
    wakeWord: 'HomePod only records AFTER "Hey Siri" is heard. Most Siri requests are processed on-device and never leave your HomePod. This is the most private of the three.',
    deletePath: 'On your iPhone: Settings → Siri & Search → Siri & Dictation History → Delete Siri & Dictation History.',
    muteButton: 'Say "Hey Siri, stop listening" or turn off the microphone in the Home app: Home → HomePod → Listen for "Hey Siri".',
  },
  support: { label: 'Apple HomePod Support', url: 'https://support.apple.com/homepod' },
};

const DEVICES: Record<'alexa' | 'google' | 'siri', DeviceInfo> = {
  alexa: ALEXA,
  google: GOOGLE,
  siri: HOMEPOD,
};

/* ── Common issues ────────────────────────────────────────────── */

interface IssueItem {
  title: string;
  body: string;
}

const COMMON_ISSUES: IssueItem[] = [
  {
    title: 'It doesn\'t hear me well',
    body:
      'Move the speaker to a quieter, more open spot — away from walls, TVs, or a running dishwasher. Speak in a normal voice (not louder or slower). In the app, look for "Microphone sensitivity" and turn it up. If you have a large room, consider adding a second speaker in the far corner.',
  },
  {
    title: 'It doesn\'t understand my accent',
    body:
      'All three assistants let you retrain your voice profile. Alexa: More → Settings → Your Profile → Voice Profile. Google: More settings → Voice Match → Retrain. Siri: Settings → Siri & Search → "Hey Siri" → turn off and back on to retrain. Speak in your most natural voice, not an exaggerated one.',
  },
  {
    title: 'It keeps triggering accidentally (from the TV or another conversation)',
    body:
      'You can change Alexa\'s wake word to "Echo", "Computer", or "Amazon" in the app: Settings → Device Settings → your Echo → Wake Word. Google only allows "Hey Google" or "OK Google" — but you can move the speaker further from the TV. Siri only allows "Hey Siri".',
  },
  {
    title: 'The answers are sometimes wrong',
    body:
      'Voice assistants sometimes guess. If an answer seems off — especially about medicine, money, or safety — verify it with a quick web search on your phone. Never take a voice assistant\'s word as final for important decisions.',
  },
  {
    title: 'It can\'t hear me when music is playing',
    body:
      'Say the wake word louder and slightly slower — the device automatically lowers the music to listen. If that doesn\'t work, pause the music first with "Alexa, stop" / "Hey Google, stop" / "Hey Siri, stop", then give your next command.',
  },
];

/* ── Final "All done" screen ──────────────────────────────────── */

function DoneScreen({
  device,
  completedCount,
  totalSteps,
  onRestart,
}: {
  device: DeviceInfo;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  return (
    <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-green-600/10 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">You&apos;re all set!</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Your {device.shortName} is ready. You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">First-day commands to try</h3>
            </div>
            <ul className="space-y-2">
              {device.firstCommands.map((cmd) => (
                <li key={cmd} className="flex items-start gap-2">
                  <Volume2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-base leading-relaxed">{cmd}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Try at least 3 of these in your first day — it builds confidence and helps you find your favorites.
            </p>
          </CardContent>
        </Card>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            What to do next
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>
              Want to protect your privacy?{' '}
              <Link to="/tools/privacy-audit" className="text-primary underline font-medium">
                Run a privacy audit
              </Link>{' '}
              on all your devices.
            </li>
            <li>
              Setting up a new phone next?{' '}
              <Link to="/tools/new-phone-setup" className="text-primary underline font-medium">
                New Phone Setup Wizard
              </Link>.
            </li>
            <li>
              For manufacturer help, visit{' '}
              <a href={device.support.url} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium inline-flex items-center gap-1">
                {device.support.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </li>
            <li>
              Need hands-on help?{' '}
              <Link to="/get-help" className="text-primary underline font-medium">
                Book a TekSure technician
              </Link>{' '}
              for a guided video session.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base">
            <RotateCcw className="w-5 h-5" />
            Compare a different device
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Quiz component ───────────────────────────────────────────── */

function QuizSection({ onPick }: { onPick: (id: DeviceId) => void }) {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const result = useMemo(() => (done ? recommend(answers) : null), [done, answers]);

  const Questions = [
    {
      q: 'Do you own an iPhone or iPad, or prefer Apple products?',
      options: [
        { label: 'Yes, I use Apple devices', value: 'yes' as AppleAnswer },
        { label: 'No, I use Android or Windows', value: 'no' as AppleAnswer },
        { label: 'I don\'t really care either way', value: 'dontcare' as AppleAnswer },
      ],
      set: (v: AppleAnswer) => setAnswers((a) => ({ ...a, apple: v })),
    },
    {
      q: 'Do you shop on Amazon often?',
      options: [
        { label: 'Yes, I order from Amazon regularly', value: 'yes' as YesNo },
        { label: 'No, rarely or never', value: 'no' as YesNo },
      ],
      set: (v: YesNo) => setAnswers((a) => ({ ...a, amazon: v })),
    },
    {
      q: 'What\'s the ONE thing you most want a voice assistant to do?',
      options: [
        { label: 'Play music', value: 'music' as UseCase },
        { label: 'Tell me weather, news, and reminders', value: 'weather' as UseCase },
        { label: 'Control smart home (lights, plugs, thermostat)', value: 'smarthome' as UseCase },
        { label: 'Answer questions and look things up', value: 'questions' as UseCase },
        { label: 'Medication reminders', value: 'medication' as UseCase },
      ],
      set: (v: UseCase) => setAnswers((a) => ({ ...a, useCase: v })),
    },
  ];

  if (done && result) {
    const device = COMPARE.find((c) => c.id === result.id)!;
    return (
      <Card className="border-primary/40 bg-primary/5">
        <CardContent className="p-6 md:p-8 space-y-5">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Star className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm md:text-base font-medium text-muted-foreground mb-1">Your recommendation</div>
              <h3 className="text-2xl md:text-3xl font-bold">{device.name}</h3>
            </div>
          </div>

          <p className="text-base md:text-lg leading-relaxed">{result.reason}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {(result.id === 'alexa' || result.id === 'google' || result.id === 'siri') && (
              <Button size="lg" onClick={() => onPick(result.id)} className="gap-2 text-base">
                Set up my {device.name.split(' ')[0]}
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setAnswers({});
                setStep(0);
                setDone(false);
              }}
              className="gap-2 text-base"
            >
              <RotateCcw className="w-5 h-5" />
              Start over
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const current = Questions[step];

  return (
    <Card>
      <CardContent className="p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            Question {step + 1} of {Questions.length}
          </Badge>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold leading-tight">{current.q}</h3>

        <div className="grid grid-cols-1 gap-3">
          {current.options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => {
                // store answer, advance
                (current.set as (v: string) => void)(opt.value);
                if (step < Questions.length - 1) {
                  setStep(step + 1);
                } else {
                  setDone(true);
                }
              }}
              className="text-left p-4 md:p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors text-base md:text-lg font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {step > 0 && (
          <div className="pt-2">
            <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function VoiceAssistantSetup() {
  const [selectedId, setSelectedId] = useState<'alexa' | 'google' | 'siri' | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const device = useMemo<DeviceInfo | null>(
    () => (selectedId ? DEVICES[selectedId] : null),
    [selectedId],
  );

  const totalSteps = device?.steps.length ?? 0;
  const isDone = device ? stepIndex === totalSteps : false;
  const current: Step | null = device && !isDone ? device.steps[stepIndex] ?? null : null;
  const progress = device ? Math.round((stepIndex / totalSteps) * 100) : 0;

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setSelectedId(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickDevice = (id: DeviceId) => {
    if (id === 'alexa' || id === 'google' || id === 'siri') {
      setSelectedId(id);
      setStepIndex(0);
      setCompleted(new Set());
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /* ── Landing: comparison, quiz, privacy, issues ─── */
  if (!device) {
    return (
      <>
        <SEOHead
          title="Voice Assistants Made Simple — Compare Alexa, Google, and Siri"
          description="Compare Alexa, Google Assistant, and Siri side by side. Take a 3-question quiz to find your best match, then follow a senior-friendly step-by-step setup for your chosen device."
          path="/tools/voice-assistant-setup"
        />
        <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="border-b border-border bg-muted/30">
            <div className="container py-10 md:py-14 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="voice-assistant-setup"
                  title="Voice Assistants Made Simple"
                  url="/tools/voice-assistant-setup"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Mic className="w-5 h-5 text-primary" />
                <Badge variant="outline" className="text-xs">Smart Home · Compare & Set up</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
                Voice Assistants Made Simple
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Alexa, Google, or Siri — which is right for you? Compare the options, take a quick quiz,
                then follow a step-by-step setup written for first-time users.
              </p>
            </div>
          </section>

          {/* Comparison */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Compare the popular options</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Each voice assistant has clear strengths and trade-offs. Here they are side by side — written in plain English, no jargon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COMPARE.map((c) => (
                <Card key={c.id} className="flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <c.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold mb-1">{c.name}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{c.tagline}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-sm">{c.price}</Badge>
                      <Badge variant="outline" className="text-sm">Wake word: {c.wakeWord}</Badge>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-green-800 dark:text-green-400 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {c.strengths.map((s) => (
                            <li key={s} className="text-base leading-relaxed flex gap-2">
                              <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">+</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4" />
                          Weaknesses
                        </h4>
                        <ul className="space-y-1.5">
                          {c.weaknesses.map((w) => (
                            <li key={w} className="text-base leading-relaxed flex gap-2">
                              <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">−</span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {(c.id === 'alexa' || c.id === 'google' || c.id === 'siri') && (
                      <div className="pt-2 mt-auto">
                        <Button
                          size="lg"
                          className="w-full gap-2 text-base"
                          onClick={() => pickDevice(c.id)}
                        >
                          Set up {c.name.split(' ')[0]}
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quiz */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Not sure? Take the 3-question quiz</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Answer three quick questions and we&apos;ll recommend the voice assistant that fits your life best.
              </p>
              <div className="max-w-3xl">
                <QuizSection onPick={pickDevice} />
              </div>
            </div>
          </section>

          {/* Privacy overview */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Lock className="w-7 h-7 text-primary" />
              Your privacy — the honest answer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A common worry: "Is it always listening?" The short answer is that all three devices listen only for their wake word locally — but what happens next differs. Here&apos;s what to know.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    What they all have in common
                  </h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>They only start recording AFTER hearing the wake word (mostly — occasional mis-hears happen).</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>All let you review and delete your recordings in the app or a website.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>All have a physical microphone mute button or switch that electrically disconnects the mic.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    What&apos;s different
                  </h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li><strong>Siri</strong> processes most requests on-device, so less audio leaves your home. Most private.</li>
                    <li><strong>Google</strong> sends audio to Google servers but is clear about what it does with it. Most detailed answers.</li>
                    <li><strong>Alexa</strong> sends audio to Amazon servers and uses some data to recommend products. Most features.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Speaker className="w-4 h-4" />
                    Delete Alexa recordings
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Alexa app → More → Settings → Alexa Privacy → Review Voice History → Delete All.
                    Or just say: <em>&quot;Alexa, delete everything I said today.&quot;</em>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Mic className="w-4 h-4" />
                    Delete Google recordings
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Go to <strong>myactivity.google.com</strong> in any browser, sign in, and delete recordings.
                    Or say: <em>&quot;Hey Google, delete what I just said.&quot;</em>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Apple className="w-4 h-4" />
                    Delete Siri recordings
                  </h4>
                  <p className="text-sm leading-relaxed">
                    On iPhone: <strong>Settings → Siri &amp; Search → Siri &amp; Dictation History → Delete Siri &amp; Dictation History</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common issues */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Common issues (and easy fixes)
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                If something feels off, start here. Most problems are solved in under two minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COMMON_ISSUES.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  /* ── Wizard view (Alexa / Google / Siri step-by-step) ─── */
  return (
    <>
      <SEOHead
        title={`Voice Assistant Setup — ${device.shortName} step-by-step`}
        description={`Step-by-step walkthrough to set up your ${device.name}. Designed for seniors and first-time users.`}
        path="/tools/voice-assistant-setup"
      />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <device.icon className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg font-medium">
                  Setting up · {device.name}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Pick a different assistant
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                Wake word: <strong>{device.wakeWord}</strong>
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <DoneScreen
              device={device}
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
                    {device.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
              </header>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Visual coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshot}</div>
              </div>

              {/* Main instruction */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">What to do</h2>
                  <p className="text-lg leading-relaxed">{current.instruction}</p>
                </CardContent>
              </Card>

              {/* Stumbling block */}
              {current.stumble && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Common stumbling block</h3>
                      <p className="text-base leading-relaxed">{current.stumble}</p>
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
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base">
                  {stepIndex === totalSteps - 1
                    ? 'Finish'
                    : completed.has(stepIndex)
                      ? 'Done — next step'
                      : 'Next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Step overview */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {device.steps.map((s, i) => {
                    const isStepDone = completed.has(i);
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
                            : isStepDone
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {isStepDone && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
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
                      isDone
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    All done
                  </button>
                </div>
              </div>

              {/* Privacy reminder for this device */}
              <Card className="mt-6 bg-muted/30">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Privacy for {device.shortName}
                  </h3>
                  <p className="text-sm leading-relaxed"><strong>Wake word:</strong> {device.privacyNote.wakeWord}</p>
                  <p className="text-sm leading-relaxed"><strong>Delete recordings:</strong> {device.privacyNote.deletePath}</p>
                  <p className="text-sm leading-relaxed"><strong>Mute the microphone:</strong> {device.privacyNote.muteButton}</p>
                </CardContent>
              </Card>
            </article>
          ) : null}
        </section>
      </main>
    </>
  );
}
