import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Mic,
  MicOff,
  Radio,
  Lightbulb,
  Lock,
  Phone,
  Printer,
  Search as SearchIcon,
  Apple,
  Speaker,
  Watch,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  Volume2,
  Heart,
  Users,
  Sparkles,
  HelpCircle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Voice Command Cheat Sheet
 * ------------------------------------------------------------
 * A searchable, printable list of every voice command a senior
 * actually uses on Siri, Alexa, Google Assistant, and Bixby.
 * Includes wake-word alternatives, privacy controls, troubleshooting,
 * accessibility, family setup, and a printable wall poster.
 * ────────────────────────────────────────────────────────────── */

type AssistantId = 'siri' | 'alexa' | 'google' | 'bixby';

interface AssistantInfo {
  id: AssistantId;
  name: string;
  shortName: string;
  wakeWord: string;
  devices: string;
  icon: LucideIcon;
  note?: string;
}

const ASSISTANTS: AssistantInfo[] = [
  {
    id: 'siri',
    name: 'Siri',
    shortName: 'Siri',
    wakeWord: '"Hey Siri"',
    devices: 'iPhone, iPad, Apple Watch, HomePod, Mac',
    icon: Apple,
  },
  {
    id: 'alexa',
    name: 'Alexa',
    shortName: 'Alexa',
    wakeWord: '"Alexa"',
    devices: 'Echo Dot, Echo Show, Echo Studio, Fire TV',
    icon: Speaker,
  },
  {
    id: 'google',
    name: 'Google Assistant',
    shortName: 'Google',
    wakeWord: '"Hey Google" or "OK Google"',
    devices: 'Android phones, Nest Mini, Nest Hub, Pixel',
    icon: Mic,
  },
  {
    id: 'bixby',
    name: 'Bixby',
    shortName: 'Bixby',
    wakeWord: '"Hi Bixby"',
    devices: 'Samsung Galaxy phones, Galaxy Watch, some Samsung TVs',
    icon: Smartphone,
    note:
      'Bixby comes built in on Samsung Galaxy phones. Most Galaxy owners actually prefer Google Assistant — both are available on the same phone. Press and hold the side key to wake Bixby, or set "Hi Bixby" in Settings → Bixby Voice.',
  },
];

/* ── Command categories ──────────────────────────────────────── */

interface Command {
  text: string;
  note?: string;
  link?: { to: string; label: string };
}

interface CommandGroup {
  title: string;
  description: string;
  commands: Command[];
}

/* Each assistant gets the same category structure with assistant-specific
   wording where it matters. Wake word substitution happens at render time. */

function buildLibrary(wake: string, id: AssistantId): CommandGroup[] {
  const isSiri = id === 'siri';
  const facetimeLine: Command[] = isSiri
    ? [{ text: `${wake}, FaceTime my daughter.`, note: 'Siri only — works with anyone in your Contacts who has an Apple device.' }]
    : [];

  return [
    {
      title: 'Basics',
      description: 'The everyday questions and timers you will use the most.',
      commands: [
        { text: `${wake}, what time is it?` },
        { text: `${wake}, what is today's date?` },
        { text: `${wake}, set a timer for 10 minutes.` },
        { text: `${wake}, set an alarm for 7 a.m.` },
        {
          text: `${wake}, remind me to take my medicine at 8 p.m.`,
          link: { to: '/tools/medication-reminder-setup', label: 'Set up medication reminders' },
        },
        { text: `${wake}, what is the weather?` },
        { text: `${wake}, what is the weather tomorrow?` },
        { text: `${wake}, will it rain this week?` },
        { text: `${wake}, what is the temperature outside?` },
        { text: `${wake}, what time does the sun set today?` },
      ],
    },
    {
      title: 'Calling and messaging',
      description: 'Hands-free calling, texts, and reading messages aloud.',
      commands: [
        { text: `${wake}, call Mom.`, note: 'Replace "Mom" with any name in your Contacts.' },
        { text: `${wake}, call my emergency contact.` },
        ...facetimeLine,
        { text: `${wake}, text my son "running late, see you at 6".` },
        { text: `${wake}, read my messages.` },
        { text: `${wake}, reply to that.` },
        { text: `${wake}, call back the last person who called.` },
        { text: `${wake}, send a voice message to my sister.` },
        { text: `${wake}, do not disturb on.` },
      ],
    },
    {
      title: 'Music and podcasts',
      description: 'Play, pause, skip, and adjust volume without touching the screen.',
      commands: [
        { text: `${wake}, play Frank Sinatra.` },
        { text: `${wake}, play classical music.` },
        { text: `${wake}, play the news.` },
        { text: `${wake}, play NPR.` },
        { text: `${wake}, play 70s rock.` },
        {
          text: `${wake}, play a podcast.`,
          link: { to: '/tools/podcast-directory', label: 'Find senior-friendly podcasts' },
        },
        { text: `${wake}, pause.` },
        { text: `${wake}, skip.` },
        { text: `${wake}, louder.` },
        { text: `${wake}, quieter.` },
        { text: `${wake}, set volume to 4.` },
        { text: `${wake}, who sings this song?` },
      ],
    },
    {
      title: 'Navigation and directions',
      description: 'Get directions, find places nearby, or call a ride.',
      commands: [
        { text: `${wake}, directions to the nearest pharmacy.` },
        { text: `${wake}, what is nearby?` },
        { text: `${wake}, find a gas station with the cheapest gas.` },
        {
          text: `${wake}, call a Lyft.`,
          link: { to: '/tools/rideshare-setup', label: 'Set up Uber and Lyft' },
        },
        { text: `${wake}, call an Uber to my home.` },
        { text: `${wake}, how long to drive to the grocery store?` },
        { text: `${wake}, where is the nearest urgent care?` },
        { text: `${wake}, find a coffee shop within walking distance.` },
      ],
    },
    {
      title: 'Calculations and questions',
      description: 'Math, conversions, definitions, and quick lookups.',
      commands: [
        { text: `${wake}, what is 15 percent of 80?` },
        { text: `${wake}, convert 2 cups to milliliters.` },
        { text: `${wake}, how many ounces are in a pound?` },
        { text: `${wake}, how old is Tom Hanks?` },
        { text: `${wake}, define "ephemeral".` },
        { text: `${wake}, spell "restaurant".` },
        { text: `${wake}, how do you say "thank you" in Spanish?` },
        { text: `${wake}, what is the capital of Australia?` },
        { text: `${wake}, what is 350 Fahrenheit in Celsius?` },
      ],
    },
    {
      title: 'Smart home',
      description: 'Lights, plugs, locks, thermostats, and TVs — all by voice.',
      commands: [
        { text: `${wake}, turn on the living room lights.` },
        { text: `${wake}, dim the bedroom lights to 30 percent.` },
        {
          text: `${wake}, set the thermostat to 72.`,
          link: { to: '/tools/smart-thermostat-setup', label: 'Set up a smart thermostat' },
        },
        { text: `${wake}, lock the front door.` },
        { text: `${wake}, is the garage door closed?` },
        { text: `${wake}, start the coffee maker.` },
        { text: `${wake}, play Netflix on the living room TV.` },
        { text: `${wake}, turn off all the lights.` },
        { text: `${wake}, good night.`, note: 'Triggers your bedtime routine if you set one.' },
      ],
    },
    {
      title: 'Entertainment',
      description: 'Jokes, stories, trivia, and TV listings.',
      commands: [
        { text: `${wake}, tell me a joke.` },
        { text: `${wake}, tell me a fun fact.` },
        { text: `${wake}, what is on TV tonight?` },
        { text: `${wake}, play Jeopardy.` },
        {
          text: `${wake}, play a podcast.`,
          link: { to: '/tools/podcast-directory', label: 'Browse podcasts' },
        },
        { text: `${wake}, read me an audiobook.` },
        { text: `${wake}, sing me a song.` },
      ],
    },
    {
      title: 'Accessibility wins',
      description: 'Built-in helpers for low vision, low hearing, and tremor.',
      commands: [
        { text: `${wake}, read the screen.`, note: 'Siri "Spoken Content" reads anything visible on the iPhone screen.' },
        { text: `${wake}, zoom in.` },
        { text: `${wake}, increase the text size.` },
        { text: `${wake}, turn on the flashlight.` },
        { text: `${wake}, turn on dark mode.` },
        { text: `${wake}, turn on captions.` },
        { text: `${wake}, slow down speech.` },
      ],
    },
    {
      title: 'Safety and emergency',
      description: 'Reach 911, your family, or your address in seconds.',
      commands: [
        { text: `${wake}, call 911.` },
        { text: `${wake}, call my emergency contact.` },
        { text: `${wake}, call my son.` },
        { text: `${wake}, call my daughter.` },
        {
          text: `${wake}, where am I?`,
          note: 'Speaks your full GPS address. Very helpful when calling 911 or roadside assistance.',
        },
        { text: `${wake}, share my location with my daughter.` },
        { text: `${wake}, find my phone.` },
      ],
    },
    {
      title: 'Senior-life specific',
      description: 'Medication, lists, calendar, news — the daily essentials.',
      commands: [
        {
          text: `${wake}, what are my medications?`,
          link: { to: '/tools/medication-reminder-setup', label: 'Set up medication reminders' },
          note: 'Works only after you set up reminders or a med list.',
        },
        { text: `${wake}, did I take my pills today?` },
        { text: `${wake}, read my grocery list.` },
        { text: `${wake}, add milk to my shopping list.` },
        { text: `${wake}, add bread, eggs, and butter to my shopping list.` },
        { text: `${wake}, how do you spell "appointment"?` },
        { text: `${wake}, read me the news.` },
        { text: `${wake}, what is on my calendar today?` },
        { text: `${wake}, when is my next doctor appointment?` },
        { text: `${wake}, remind me to call the dentist tomorrow at 10 a.m.` },
        { text: `${wake}, find my reading glasses.`, note: 'Only works with a tracker like AirTag or Tile.' },
      ],
    },
  ];
}

/* ── Setup, privacy, troubleshooting, fun, FAQ data ──────────── */

interface SetupTip {
  assistant: string;
  steps: string[];
}

const SETUP_TIPS: SetupTip[] = [
  {
    assistant: '"Hey Siri" training (iPhone or iPad)',
    steps: [
      'Open Settings.',
      'Tap "Siri & Search".',
      'Tap "Listen for" and pick "Hey Siri" or "Siri or Hey Siri" (iOS 17 and later).',
      'Follow the on-screen prompts to say a few short phrases.',
    ],
  },
  {
    assistant: 'Alexa Voice Profile',
    steps: [
      'Open the Alexa app on your phone.',
      'Tap More → Settings → Your Profile.',
      'Tap "Voice" → "Create your voice".',
      'Read the 10 short phrases out loud in your normal voice.',
    ],
  },
  {
    assistant: 'Google Voice Match',
    steps: [
      'Open the Google Home app.',
      'Tap your profile picture → Assistant settings.',
      'Tap "Hey Google & Voice Match" → "+" to add your voice.',
      'Repeat "Hey Google" and "OK Google" a few times when asked.',
    ],
  },
  {
    assistant: 'Samsung Bixby Voice',
    steps: [
      'Open Settings → "Advanced features" → "Bixby".',
      'Tap "Voice wake-up" and turn it on.',
      'Say "Hi Bixby" three times to train.',
      'Optional: in the Bixby app, change the side-key shortcut to "Press and hold to wake Bixby".',
    ],
  },
];

interface InvokeTip {
  device: string;
  how: string;
}

const INVOKE_TIPS: InvokeTip[] = [
  {
    device: 'iPhone',
    how: 'Hold the side button (right side) for 1 second. Or say "Hey Siri" if you have always-on listening enabled.',
  },
  {
    device: 'Apple Watch',
    how: 'Raise your wrist and start talking — no wake word needed on Series 9 and later, or Series 7 with watchOS 10. On older watches, hold the Digital Crown.',
  },
  {
    device: 'Echo (Alexa)',
    how: 'Press the round Action button on the top of any Echo. You can speak right away — no wake word needed.',
  },
  {
    device: 'Google Nest Mini / Hub',
    how: 'Touch the top of the device, or say "Hey Google". Newer Nest Hubs respond to a "Quick Phrase" — a short command without the wake word.',
  },
  {
    device: 'Samsung Galaxy phone',
    how: 'Press and hold the side key (the power button) for 1 second to wake Bixby, or open the Google Assistant app.',
  },
];

interface PrivacyCard {
  assistant: string;
  recordedDescription: string;
  deletePath: string;
  spokenDelete: string;
}

const PRIVACY_CARDS: PrivacyCard[] = [
  {
    assistant: 'Alexa',
    recordedDescription:
      'Amazon stores recordings of every command you give Alexa. Audio is sent to Amazon servers after the wake word.',
    deletePath:
      'Alexa app → More → Settings → Alexa Privacy → Review Voice History → Delete All.',
    spokenDelete: '"Alexa, delete what I just said." or "Alexa, delete everything I said today."',
  },
  {
    assistant: 'Google Assistant',
    recordedDescription:
      'Google stores your voice activity at myactivity.google.com unless you turn it off. Audio is sent to Google after the wake word.',
    deletePath:
      'Open myactivity.google.com → Web & App Activity → "Manage activity" → delete by date or topic.',
    spokenDelete: '"Hey Google, delete what I just said." or "Hey Google, delete my last conversation."',
  },
  {
    assistant: 'Siri',
    recordedDescription:
      'Most Siri requests run on the device itself and never leave your iPhone or HomePod. The most private of the three.',
    deletePath:
      'Settings → Siri → Siri & Dictation History → Delete Siri & Dictation History.',
    spokenDelete:
      'Siri does not yet support voice deletion. Use the Settings path above.',
  },
  {
    assistant: 'Bixby',
    recordedDescription:
      'Samsung stores Bixby commands tied to your Samsung account. Audio is sent to Samsung after the wake word.',
    deletePath:
      'Bixby app → Settings → "Privacy" → "Manage data" → Delete history.',
    spokenDelete: '"Hi Bixby, delete my voice history."',
  },
];

interface IssueItem {
  title: string;
  body: string;
}

const TROUBLESHOOTING: IssueItem[] = [
  {
    title: 'It is not hearing me',
    body:
      'Look at the status bar at the top of your phone — the orange or green microphone dot tells you the mic is on. Make sure the device is not muted (Echo: red ring; Nest: orange switch on back). Speak in a normal voice from about 3 feet away.',
  },
  {
    title: 'It keeps waking up by mistake',
    body:
      'TVs and other voices often trigger the wake word. Move the speaker further from the TV, or change the wake word: Alexa app → Settings → Device Settings → Wake Word → "Echo" or "Computer". Google and Siri only allow their default wake word.',
  },
  {
    title: 'It hears the wrong person\'s voice',
    body:
      'Re-enroll your voice. Alexa: app → Settings → Your Profile → Voice → Recreate. Google: Home app → Voice Match → Retrain. Siri: Settings → Siri & Search → "Hey Siri" → turn off and back on.',
  },
  {
    title: 'It got my command wrong',
    body:
      'Say "No, I said…" and repeat. Or "Cancel" and start over. All four assistants understand corrections in plain English.',
  },
  {
    title: 'I want it to stop listening for "Hey Siri"',
    body:
      'iPhone: Settings → Siri & Search → "Listen for" → set to Off. You can still call Siri by holding the side button.',
  },
  {
    title: 'The music drowns out my voice',
    body:
      'Say the wake word a little louder. The device automatically lowers the music to listen. If that fails, pause first: "Alexa, stop" / "Hey Google, stop" / "Hey Siri, stop".',
  },
];

interface FunCommand {
  text: string;
  assistant: string;
}

const FUN_COMMANDS: FunCommand[] = [
  { text: '"Siri, beatbox."', assistant: 'Siri' },
  { text: '"Alexa, sing a lullaby."', assistant: 'Alexa' },
  { text: '"Hey Google, tell me a story."', assistant: 'Google' },
  { text: '"Alexa, who let the dogs out?"', assistant: 'Alexa' },
  { text: '"Siri, I love you."', assistant: 'Siri' },
  { text: '"Hey Google, do you speak Klingon?"', assistant: 'Google' },
  { text: '"Alexa, party time."', assistant: 'Alexa' },
  { text: '"Hey Google, beam me up, Scotty."', assistant: 'Google' },
  { text: '"Siri, what does the fox say?"', assistant: 'Siri' },
  { text: '"Alexa, give me a hug."', assistant: 'Alexa' },
];

interface FaqItem {
  q: string;
  a: string;
}

const FAQ: FaqItem[] = [
  {
    q: 'Which voice assistant is best?',
    a: 'It depends on what you already have. If you use an iPhone, Siri costs nothing extra and works on every Apple device. If you shop at Amazon, Alexa Echo speakers are inexpensive and excellent for smart home control. If you use Gmail or Android, Google Assistant gives the most detailed answers.',
  },
  {
    q: 'Do they listen to me all the time?',
    a: 'No. They wait for the wake word locally on the device. Audio is only sent to the company\'s servers after the wake word triggers — and even then, you can review and delete every recording in the app.',
  },
  {
    q: 'Can a scammer trick my voice assistant into something bad?',
    a: 'Voice assistants are not connected to your phone calls — a scam caller cannot give your Echo a command through the phone. The main risk is unauthorized purchases, which you can block by turning on "Voice Purchasing PIN" in the Alexa app, or "Personal Results" lock-screen restrictions in Google Home and Siri.',
  },
  {
    q: 'Can I change the assistant\'s voice?',
    a: 'Yes. Siri: Settings → Siri & Search → Siri Voice. Alexa: app → Settings → Device Settings → "Alexa\'s Voice" → choose a new voice or celebrity skin. Google: Home app → Assistant settings → Assistant voice. Bixby: Bixby app → Voice style.',
  },
  {
    q: 'What if I have a heavy accent or a quiet voice?',
    a: 'Re-train the voice profile (see "Senior-friendly setup" above). Speak normally — not louder or slower. If the assistant still struggles, try a different wake word (Alexa allows "Echo", "Computer", or "Amazon").',
  },
  {
    q: 'Can two people use the same Echo or Nest?',
    a: 'Yes. Both Alexa and Google support multiple voice profiles, so each person hears their own calendar, contacts, and music when they speak. Set this up in the Alexa app under "Your Profile" or in the Google Home app under "Voice Match".',
  },
];

/* ── Family setup data ───────────────────────────────────────── */

interface FamilyTip {
  title: string;
  body: string;
}

const FAMILY_TIPS: FamilyTip[] = [
  {
    title: 'Apple Family Sharing',
    body:
      'Turn on Family Sharing in Settings → your name → Family. Up to 6 people share an Apple Music subscription, calendar, and reminders. Each person says "Hey Siri" and gets their own results.',
  },
  {
    title: 'Alexa Household',
    body:
      'In the Alexa app, tap More → Settings → Your Profile → Amazon Household. Add your spouse with their Amazon account — both of you get separate calendars, shopping lists, and music.',
  },
  {
    title: 'Google Home members',
    body:
      'In the Google Home app, tap your home → Settings → Household → Invite. Family members can control devices, hear personal reminders, and play their own music.',
  },
  {
    title: 'Setting up a voice assistant for your spouse',
    body:
      'Each person needs their own voice profile. Sit together at the speaker, open the assistant app, tap "Add another voice", and have your spouse repeat the training phrases. Takes about 2 minutes per person.',
  },
];

const ACCESSIBILITY_TIPS: FamilyTip[] = [
  {
    title: 'With hearing aids',
    body:
      'iPhone, Galaxy, and Pixel phones can pair directly with most modern hearing aids. The voice assistant\'s reply plays through your hearing aids. Pair in Settings → Accessibility → Hearing Devices (Apple) or Settings → Accessibility → Hearing enhancements (Samsung/Google).',
  },
  {
    title: 'With low vision',
    body:
      'Voice assistants are the single biggest help for low-vision users. Combine "Hey Siri, increase text size" with VoiceOver on iPhone or TalkBack on Android. On Echo, ask "Alexa, what is the screen showing?" on devices with a display.',
  },
  {
    title: 'With tremor or arthritis',
    body:
      'Voice control replaces touch entirely. Use commands like "Hey Siri, go back" or "Alexa, scroll down" instead of swiping. On Echo, the round Action button is large and easy to press without precise aim.',
  },
];

/* ── Print helper ────────────────────────────────────────────── */

function printCheatSheet(assistant: AssistantInfo, library: CommandGroup[]) {
  if (typeof window === 'undefined') return;
  const win = window.open('', '_blank', 'noopener,noreferrer,width=900,height=700');
  if (!win) return;

  const css = `
    @page { size: letter; margin: 0.5in; }
    body { font-family: Georgia, "Times New Roman", serif; color: #111; line-height: 1.45; padding: 0; margin: 0; }
    h1 { font-size: 28pt; margin: 0 0 4pt 0; }
    h2 { font-size: 16pt; margin: 14pt 0 4pt 0; border-bottom: 2pt solid #111; padding-bottom: 2pt; }
    .subtitle { font-size: 12pt; margin: 0 0 12pt 0; color: #444; }
    ul { margin: 0 0 6pt 18pt; padding: 0; }
    li { font-size: 13pt; margin-bottom: 3pt; }
    .footer { margin-top: 16pt; font-size: 10pt; color: #555; border-top: 1pt solid #999; padding-top: 6pt; }
  `;

  const sections = library
    .map((group) => {
      const items = group.commands.map((c) => `<li>${escapeHtml(c.text)}</li>`).join('');
      return `<h2>${escapeHtml(group.title)}</h2><ul>${items}</ul>`;
    })
    .join('');

  win.document.write(`<!DOCTYPE html><html><head><title>${assistant.name} Voice Commands — TekSure</title><style>${css}</style></head><body>
    <h1>${assistant.name} Voice Commands</h1>
    <div class="subtitle">Wake word: ${assistant.wakeWord} &middot; ${assistant.devices}</div>
    ${sections}
    <div class="footer">Printed from TekSure.com — your free tech-help library.</div>
    <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 250); };</script>
  </body></html>`);
  win.document.close();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Per-assistant panel (commands + search + print) ─────────── */

function AssistantPanel({
  assistant,
  query,
}: {
  assistant: AssistantInfo;
  query: string;
}) {
  const library = useMemo(
    () => buildLibrary(assistant.wakeWord.replace(/"/g, ''), assistant.id),
    [assistant],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return library;
    return library
      .map((group) => ({
        ...group,
        commands: group.commands.filter(
          (c) => c.text.toLowerCase().includes(q) || group.title.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.commands.length > 0);
  }, [library, query]);

  const totalCommands = library.reduce((n, g) => n + g.commands.length, 0);
  const visibleCommands = filtered.reduce((n, g) => n + g.commands.length, 0);

  return (
    <div className="space-y-6">
      {assistant.note ? (
        <Alert>
          <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          <AlertTitle className="text-base">A note about {assistant.shortName}</AlertTitle>
          <AlertDescription className="text-base leading-relaxed">{assistant.note}</AlertDescription>
        </Alert>
      ) : null}

      <Card className="border-amber-300/60 bg-amber-50/40 dark:bg-amber-950/20">
        <CardContent className="p-5 md:p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-amber-200/60 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 shrink-0">
              <assistant.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <div>
              <div className="text-base md:text-lg font-semibold leading-tight">
                {assistant.name} &middot; wake word {assistant.wakeWord}
              </div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Works on: {assistant.devices}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Showing {visibleCommands} of {totalCommands} commands
                {query ? ` (filtered by "${query}")` : ''}
              </div>
            </div>
          </div>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="min-h-14 gap-2 text-base"
            onClick={() => printCheatSheet(assistant, library)}
          >
            <Printer className="w-5 h-5" aria-hidden="true" />
            Print {assistant.shortName} cheat sheet
          </Button>
        </CardContent>
      </Card>

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center space-y-3">
            <SearchIcon className="w-8 h-8 mx-auto text-muted-foreground" aria-hidden="true" />
            <h3 className="text-lg font-semibold">No commands match that search</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Try a shorter word like "weather", "music", or "call".
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((group) => (
            <Card key={group.title}>
              <CardContent className="p-5 md:p-6 space-y-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">{group.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {group.commands.map((c) => (
                    <li key={c.text} className="flex items-start gap-2">
                      <Volume2 className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <div className="text-base leading-relaxed">
                        <div>"{c.text}"</div>
                        {c.note ? (
                          <div className="text-sm text-muted-foreground mt-0.5">{c.note}</div>
                        ) : null}
                        {c.link ? (
                          <Link
                            to={c.link.to}
                            className="text-primary underline text-sm font-medium inline-flex items-center gap-1 mt-1"
                          >
                            {c.link.label}
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </Link>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main page component ─────────────────────────────────────── */

export default function VoiceCommandCheatSheet() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<AssistantId>('siri');

  return (
    <>
      <SEOHead
        title="Voice Command Cheat Sheet — Siri, Alexa, Google, and Bixby"
        description="Hundreds of voice commands seniors actually use, organized by category and assistant. Searchable, printable, and written in plain English."
        path="/tools/voice-commands"
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-yellow-950/20">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="voice-commands"
                title="Voice Command Cheat Sheet"
                url="/tools/voice-commands"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mic className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              <Badge variant="outline" className="text-xs">Everyday Tech &middot; Reference</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
              Voice Command Cheat Sheet
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Hundreds of commands. Say them out loud. No typing required.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mt-3">
              Pick your assistant below — Siri, Alexa, Google, or Bixby — search for what you want to do, and print a wall poster for the kitchen or bedside.
            </p>
          </div>
        </section>

        {/* Search + assistant tabs */}
        <section className="container py-8 md:py-10">
          <div className="max-w-2xl mx-auto mb-6">
            <label htmlFor="cmd-search" className="block text-base font-medium mb-2">
              Search every command
            </label>
            <div className="relative">
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="cmd-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Try "weather", "call", or "lights"'
                className="pl-10 min-h-14 text-base"
              />
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as AssistantId)}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-muted/40 p-2">
              {ASSISTANTS.map((a) => (
                <TabsTrigger
                  key={a.id}
                  value={a.id}
                  className="min-h-14 text-base data-[state=active]:bg-background data-[state=active]:shadow"
                >
                  <a.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                  {a.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {ASSISTANTS.map((a) => (
              <TabsContent key={a.id} value={a.id} className="mt-6">
                <AssistantPanel assistant={a} query={query} />
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Invoke without saying wake word */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Radio className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              Wake your assistant without saying the wake word
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              In a quiet library, hospital, or church, you can wake any assistant with a button press instead of a wake word.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INVOKE_TIPS.map((tip) => (
                <Card key={tip.device}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-base md:text-lg">{tip.device}</h3>
                    <p className="text-base leading-relaxed">{tip.how}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Senior-friendly setup */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            Senior-friendly setup
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Train your assistant to recognize <em>your</em> voice. Each setup takes about 3 minutes and works much better afterward.
          </p>

          <Accordion type="single" collapsible className="max-w-3xl">
            {SETUP_TIPS.map((tip, i) => (
              <AccordionItem key={tip.assistant} value={`setup-${i}`}>
                <AccordionTrigger className="text-base md:text-lg font-semibold text-left min-h-14">
                  {tip.assistant}
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-6 space-y-2 text-base leading-relaxed">
                    {tip.steps.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Privacy */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Lock className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              What gets recorded — and how to delete it
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Voice assistants only start recording <strong>after</strong> they hear the wake word. You can review and delete every recording in the app.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PRIVACY_CARDS.map((card) => (
                <Card key={card.assistant}>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                      {card.assistant}
                    </h3>
                    <p className="text-base leading-relaxed">{card.recordedDescription}</p>
                    <div className="rounded-lg bg-muted/40 p-3 text-sm leading-relaxed">
                      <strong>Delete from app:</strong> {card.deletePath}
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3 text-sm leading-relaxed">
                      <strong>Delete by voice:</strong> {card.spokenDelete}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <MicOff className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            Troubleshooting
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            If voice control feels frustrating, one of these fixes almost always brings it back to life.
          </p>

          <Accordion type="single" collapsible className="max-w-3xl">
            {TROUBLESHOOTING.map((item, i) => (
              <AccordionItem key={item.title} value={`tr-${i}`}>
                <AccordionTrigger className="text-base md:text-lg font-semibold text-left min-h-14">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed pl-7">{item.body}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Accessibility */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Heart className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              Accessibility — voice for hearing aids, low vision, and tremor
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Voice assistants can be the single biggest help for older adults living with hearing loss, low vision, or hand tremor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ACCESSIBILITY_TIPS.map((tip) => (
                <Card key={tip.title}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-base md:text-lg">{tip.title}</h3>
                    <p className="text-base leading-relaxed">{tip.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Family setup */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Users className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            Family setup &middot; multi-voice profiles
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            One Echo or Nest can serve a whole household. Each person gets their own calendar, shopping list, and music — no mix-ups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAMILY_TIPS.map((tip) => (
              <Card key={tip.title}>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-base md:text-lg">{tip.title}</h3>
                  <p className="text-base leading-relaxed">{tip.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fun commands */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              Fun commands to try
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Voice assistants have a sense of humor. These are favorites with the grandkids.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {FUN_COMMANDS.map((cmd) => (
                <Card key={cmd.text}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <Volume2 className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-base leading-relaxed">{cmd.text}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{cmd.assistant}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-base md:text-lg font-semibold text-left min-h-14">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related tools */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Related TekSure tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
              <Button asChild size="lg" variant="outline" className="justify-start min-h-14 text-base">
                <Link to="/tools/voice-assistant-setup" className="gap-2">
                  <Mic className="w-5 h-5" aria-hidden="true" />
                  Voice Assistant Setup
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="justify-start min-h-14 text-base">
                <Link to="/tools/medication-reminder-setup" className="gap-2">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  Medication Reminder Setup
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="justify-start min-h-14 text-base">
                <Link to="/tools/smart-thermostat-setup" className="gap-2">
                  <Lightbulb className="w-5 h-5" aria-hidden="true" />
                  Smart Thermostat Setup
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="justify-start min-h-14 text-base">
                <Link to="/tools/rideshare-setup" className="gap-2">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Rideshare Setup (Uber & Lyft)
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
