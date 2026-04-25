import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  Ear,
  Bluetooth,
  Volume2,
  Smartphone,
  Apple,
  Tv,
  Phone,
  Battery,
  RefreshCw,
  AlertTriangle,
  Info,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Wrench,
  Heart,
  Users,
  DollarSign,
  Captions,
  ShieldCheck,
  Droplets,
  Sparkles,
  BellRing,
  Star,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Hearing Aid Tech Helper
 * ------------------------------------------------------------
 * Setup and troubleshooting hub for modern hearing aids and
 * their Bluetooth integrations with phones, TVs, and devices.
 * Senior-friendly: large text, plain English, numbered steps.
 * ────────────────────────────────────────────────────────────── */

type BrandId =
  | 'phonak'
  | 'oticon'
  | 'resound'
  | 'starkey'
  | 'widex'
  | 'signia';

interface Brand {
  id: BrandId;
  name: string;
  appName: string;
  tagline: string;
  mfiSupport: boolean;
  appFeatures: string[];
  iphonePairing: string[];
  androidPairing: string[];
  batteryGuidance: string;
  firmwareUpdates: string;
  tvAccessory: string;
}

const BRANDS: Brand[] = [
  {
    id: 'phonak',
    name: 'Phonak',
    appName: 'myPhonak',
    tagline: 'Broad device compatibility with classic Bluetooth on many models.',
    mfiSupport: true,
    appFeatures: [
      'Remote control for volume and program',
      'Custom hearing programs for home, restaurant, TV',
      'Find my hearing aids (last-seen location)',
      'Remote support calls with your audiologist',
      'Daily usage and step tracking',
    ],
    iphonePairing: [
      'Open Settings on your iPhone.',
      'Tap Accessibility, then Hearing Devices.',
      'Turn your hearing aids off, then back on (open and close the battery doors).',
      'Wait for your name to appear under MFi Hearing Devices.',
      'Tap your name and confirm the pairing for each aid.',
      'Open the myPhonak app and tap Pair to link the app too.',
    ],
    androidPairing: [
      'Open Settings on your Android phone.',
      'Tap Connected devices, then Pair new device.',
      'Turn your hearing aids off and back on to enter pairing mode.',
      'Pick your hearing aids from the list (name often starts with "R-" or "L-").',
      'Open the myPhonak app and tap Pair to link both sides.',
      'Test a call: say "testing, one two three" and adjust the volume in the app.',
    ],
    batteryGuidance:
      'Most newer Phonak models (Lumity, Sphere) are rechargeable and last about 16 hours per charge, or 10 hours with heavy streaming. Older models use size 13 or 312 disposable batteries — expect 3 to 7 days.',
    firmwareUpdates:
      'Firmware updates are handled by your audiologist during visits, or through the myPhonak app when you are connected to Wi-Fi and the aids are charging.',
    tvAccessory: 'Phonak TV Connector — $250. Plugs into your TV and streams audio straight to the aids.',
  },
  {
    id: 'oticon',
    name: 'Oticon',
    appName: 'Oticon ON',
    tagline: 'Clear sound focus with a wide, open listening feel.',
    mfiSupport: true,
    appFeatures: [
      'Volume, program, and mute controls',
      'If This Then That (IFTTT) automation',
      'HearingFitness usage tracker',
      'Find my hearing aids on a map',
      'Battery level and low-battery alerts',
    ],
    iphonePairing: [
      'Open Settings, tap Accessibility, then Hearing Devices.',
      'Open and close the battery doors on both aids (for rechargeable, turn off and on).',
      'Wait for your name to appear under MFi Hearing Devices.',
      'Tap the name and approve the pairing request on each aid.',
      'Open the Oticon ON app and tap Get Started to connect.',
    ],
    androidPairing: [
      'Open Settings, tap Bluetooth, then scan for devices.',
      'Restart your hearing aids to enter pairing mode.',
      'Tap your aids on the Android pair list.',
      'Download Oticon ON from the Play Store and follow the app setup.',
      'If pairing fails, unpair all old Bluetooth devices first and try again.',
    ],
    batteryGuidance:
      'Oticon Intent and More use rechargeable lithium-ion and last about 20 hours. Older Opn and Ruby use size 312 or 13 disposables — 4 to 6 days for typical use.',
    firmwareUpdates:
      'Your audiologist updates firmware during fittings. The Oticon ON app will prompt you when a minor update is available.',
    tvAccessory: 'Oticon TV Adapter 3.0 — about $250. One adapter per TV.',
  },
  {
    id: 'resound',
    name: 'ReSound',
    appName: 'ReSound Smart 3D',
    tagline: 'Strong Apple support with a friendly app.',
    mfiSupport: true,
    appFeatures: [
      'Volume, balance, and treble/bass sliders',
      'Save custom presets per location (uses GPS)',
      'Remote fine-tuning with your audiologist',
      'Tinnitus masking controls on supported models',
      'Find my hearing aids',
    ],
    iphonePairing: [
      'Open Settings, tap Accessibility, then Hearing Devices.',
      'Turn both hearing aids off and back on.',
      'Wait up to a minute for your name to appear.',
      'Tap your name and approve pairing on each side.',
      'Open ReSound Smart 3D to finish setup.',
    ],
    androidPairing: [
      'Check your Android version — ASHA support needs Android 10 or newer.',
      'Open Settings, tap Connected devices, then Pair new device.',
      'Restart your hearing aids.',
      'Select your aids and confirm pairing.',
      'Open ReSound Smart 3D and sign in.',
    ],
    batteryGuidance:
      'ReSound Nexia and Omnia rechargeable models run about 24 hours. Size 312 disposable models last 5 to 7 days with moderate streaming.',
    firmwareUpdates:
      'Done over the air through ReSound Smart 3D. Place aids in the charger, keep your phone nearby, and let the update run (usually 10 to 15 minutes).',
    tvAccessory: 'ReSound TV Streamer 2 — about $200. Works with all modern ReSound aids.',
  },
  {
    id: 'starkey',
    name: 'Starkey',
    appName: 'My Starkey',
    tagline: 'Health tracking and fall detection built in.',
    mfiSupport: true,
    appFeatures: [
      'Volume and program control',
      'Fall detection with automatic caregiver alerts',
      'Step and activity tracking',
      'Translate feature — speaks in one language, translates in your ears',
      'Transcribe conversations in real time',
    ],
    iphonePairing: [
      'Settings → Accessibility → Hearing Devices.',
      'Restart each hearing aid.',
      'Tap your name under MFi Hearing Devices.',
      'Approve pairing on each side (you may see two prompts).',
      'Open My Starkey and sign in.',
    ],
    androidPairing: [
      'Starkey Genesis AI supports Bluetooth LE Audio on newer Android phones.',
      'Open Settings → Connected devices → Pair new device.',
      'Restart your aids to enter pairing mode.',
      'Tap your aids in the list and approve.',
      'Open My Starkey to finish.',
    ],
    batteryGuidance:
      'Starkey Genesis AI rechargeable runs 24+ hours. Legacy Livio uses size 312 disposables — around 4 days.',
    firmwareUpdates:
      'My Starkey app prompts you when an update is ready. Keep the aids in the charger during the update.',
    tvAccessory: 'Starkey TV — about $300. Pairs via the My Starkey app.',
  },
  {
    id: 'widex',
    name: 'Widex',
    appName: 'Widex Moment',
    tagline: 'Natural, musical sound with quick response.',
    mfiSupport: true,
    appFeatures: [
      'SoundSense Learn — AI adjustments based on what you like',
      'Zen tinnitus relief program',
      'Remote programming visits with your clinic',
      'Battery and wear-time stats',
      'Preset locations',
    ],
    iphonePairing: [
      'Settings → Accessibility → Hearing Devices.',
      'Restart your aids.',
      'Tap your name when it appears and approve both sides.',
      'Open the Widex Moment app to connect.',
    ],
    androidPairing: [
      'Widex Moment supports ASHA on most Android 10+ phones.',
      'Open Settings → Bluetooth → Scan.',
      'Restart the aids to enter pairing mode.',
      'Pick your aids from the list and approve.',
      'Open Widex Moment app to finish.',
    ],
    batteryGuidance:
      'Widex Moment Sheer rechargeable runs 16 to 20 hours. Size 312 disposables last 5 days.',
    firmwareUpdates: 'Firmware updates are handled at your clinic.',
    tvAccessory: 'Widex TV Play — about $300.',
  },
  {
    id: 'signia',
    name: 'Signia',
    appName: 'Signia app',
    tagline: 'Strong speech focus with Own Voice Processing.',
    mfiSupport: true,
    appFeatures: [
      'Mask Mode for hearing people with masks on',
      'Own Voice Processing — stops your own voice from sounding boomy',
      'Signia Assistant — in-app AI adjustments',
      'Remote fine-tuning',
      'Activity and step tracking',
    ],
    iphonePairing: [
      'Settings → Accessibility → Hearing Devices.',
      'Restart each aid.',
      'Tap your name and approve pairing.',
      'Open the Signia app.',
    ],
    androidPairing: [
      'Settings → Connected devices → Pair new device.',
      'Restart your aids.',
      'Select your aids in the list.',
      'Open the Signia app and sign in.',
    ],
    batteryGuidance:
      'Signia Pure Charge&Go IX rechargeable runs about 24 hours. Disposable models use size 312 — 5 days.',
    firmwareUpdates: 'The Signia app prompts you when firmware updates are available.',
    tvAccessory: 'Signia StreamLine TV — about $250.',
  },
];

/* ── OTC Brands ─────────────────────────────────────────────── */

interface OtcBrand {
  name: string;
  price: string;
  highlight: string;
  notes: string;
}

const OTC_BRANDS: OtcBrand[] = [
  {
    name: 'Jabra Enhance',
    price: '$995 – $1,995 / pair',
    highlight: 'Includes 3 years of remote audiologist support.',
    notes:
      'Bluetooth streaming to iPhone and Android. 100-day money-back trial. Best fit for mild to moderate loss.',
  },
  {
    name: 'Sony CRE-C10 / CRE-E10',
    price: '$999 – $1,299 / pair',
    highlight: 'Self-fit with the Sony Hearing Control app.',
    notes:
      'C10 is nearly invisible; E10 is rechargeable with Bluetooth. Sony-branded, built by WS Audiology.',
  },
  {
    name: 'Eargo',
    price: '$799 – $2,950 / pair',
    highlight: 'In-the-canal, barely visible.',
    notes:
      'Rechargeable, self-fit, includes lifetime remote support. Good for mild to moderate high-frequency loss.',
  },
  {
    name: 'Lexie',
    price: '$799 – $999 / pair',
    highlight: 'Sold at Walgreens, Best Buy, and online.',
    notes:
      'Powered by Bose technology. Self-fit through the Lexie app. 45-day money-back trial.',
  },
];

/* ── Troubleshooting items ──────────────────────────────────── */

interface TroubleshootItem {
  issue: string;
  cause: string;
  fixSteps: string[];
  callDoctor: string;
}

const TROUBLESHOOTING: TroubleshootItem[] = [
  {
    issue: "Aid won't pair with my phone",
    cause:
      'Usually an old Bluetooth cache, out-of-date phone software, or the aid never entered pairing mode.',
    fixSteps: [
      'Turn Bluetooth off and back on in your phone settings.',
      'Open and close the battery doors on both aids (or turn rechargeable aids off and back on).',
      "Forget any older pairing: tap the (i) or gear next to the aid's name, then Forget Device.",
      'Restart your phone fully (hold power button, power off, wait 30 seconds, power back on).',
      'Try pairing again, keeping the phone within 3 feet of the aids.',
    ],
    callDoctor:
      "If pairing still fails after two tries, call your audiologist — they can reset the aids from their fitting software.",
  },
  {
    issue: 'Aid keeps disconnecting during calls',
    cause:
      'Phone battery saver, Wi-Fi calling interference, or weak Bluetooth signal (phone in back pocket).',
    fixSteps: [
      'Keep your phone on the same side as the master aid (usually the right).',
      'Turn off Low Power Mode or Battery Saver during calls.',
      'In phone settings, turn off Wi-Fi Calling and retry.',
      'Unpair and re-pair the aids.',
      'Update your phone software to the latest version.',
    ],
    callDoctor:
      "If drops happen on both sides and your phone is under 3 feet away, bring the aids in — the Bluetooth chip may need a firmware reflash.",
  },
  {
    issue: 'One side is quieter than the other',
    cause:
      'Earwax blocking the receiver, a clogged wax guard, or the aid slipped out of program.',
    fixSteps: [
      'Check the dome or earmold for wax — wipe with a dry cloth.',
      'Replace the wax guard (small white filter at the tip). Your brand sells refill kits.',
      'Open the app and reset the volume and program to default.',
      'Try the aid on your opposite ear briefly — if the problem moves with the aid, it is the aid; if it stays with your ear, it may be earwax in your ear canal.',
    ],
    callDoctor:
      'If the fix above does not balance the sound, call your audiologist. Sudden hearing loss in one ear can be medical — see the emergency note below.',
  },
  {
    issue: 'Whistling or feedback',
    cause:
      'The aid is too close to something (hand, phone, hat), the dome is loose, or wax is reflecting sound back.',
    fixSteps: [
      'Reseat the aid in your ear — push gently but firmly until it sits flush.',
      "Check that the dome isn't cracked or stretched. Replace if needed.",
      'Clean your ear canal or see a professional — too much wax sends sound bouncing.',
      'Lower the volume 1 to 2 clicks.',
    ],
    callDoctor:
      'Persistent feedback at normal volume usually means the dome size is wrong — your audiologist can refit in about 15 minutes.',
  },
  {
    issue: 'TV audio is cutting out',
    cause:
      'Weak signal between the TV Connector and the aids, or distance over 50 feet.',
    fixSteps: [
      'Move closer to the TV streamer — most work best within 30 feet.',
      'Unplug the TV streamer, wait 30 seconds, plug it back in.',
      'Keep the streamer away from other Bluetooth devices like soundbars.',
      'Check the TV audio output setting — it must be on Optical or RCA (red/white), not HDMI ARC in some cases.',
      "Re-pair the streamer through your hearing aid app.",
    ],
    callDoctor:
      'If you replaced the streamer and it still cuts out, your clinic can test the aids for Bluetooth radio issues.',
  },
  {
    issue: "My app can't find the aids",
    cause:
      'Bluetooth permission blocked, aids not paired at the phone level, or the app is out of date.',
    fixSteps: [
      'In phone Settings, find your app and allow Bluetooth and Location permissions.',
      'Make sure the aids show up under Settings → Bluetooth (or Accessibility → Hearing Devices on iPhone).',
      'Delete the app, restart the phone, and reinstall it from the App Store or Play Store.',
      'Sign back in with your email — your saved programs will restore.',
    ],
    callDoctor:
      'If the app still cannot connect, email the brand support line — they can push a new firmware package to your account.',
  },
  {
    issue: 'Battery is draining too fast',
    cause:
      'Heavy Bluetooth streaming, cold temperatures, or a battery near the end of its life (about 3 to 5 years for rechargeables).',
    fixSteps: [
      'Check your battery level in the app after an hour of streaming — expect 8 to 12 hours with heavy streaming.',
      'Turn off streaming when you are not using it (pause music, hang up calls).',
      'Keep the aids in the charger overnight, every night.',
      'Warm the aids in your hand for a minute before putting them in if it is under 40°F outside.',
    ],
    callDoctor:
      "If a rechargeable aid now lasts under 6 hours, the battery needs replacement. Most brands do this at the clinic for $100 to $200 per aid.",
  },
  {
    issue: 'Water or moisture in the aid',
    cause: 'Sweat, steam from a shower, or rain exposure.',
    fixSteps: [
      'Remove the aid immediately. Do not try to turn it on.',
      'Open the battery door (or remove the battery) and wipe dry with a soft cloth.',
      'Place the aid in a drying jar or electronic dehumidifier overnight — never use a hair dryer or microwave.',
      'In the morning, reinsert the battery or charge it and test.',
    ],
    callDoctor:
      'If the aid still sounds muffled or quiet after drying, bring it in. Many brands cover water damage under warranty for a small fee.',
  },
  {
    issue: 'When do I change the wax guard?',
    cause:
      'Wax guards block moisture and wax from reaching the receiver. They clog over time.',
    fixSteps: [
      'Check the tip every week — if it looks yellow or gray, it is time.',
      'Use the tool that came with your refill kit. The tool has a fresh guard on one end and a removal hook on the other.',
      'Pull the old guard straight out, then push a new one in until it clicks.',
      'Replace every 2 to 4 weeks for most people, or every week if you have oily skin.',
    ],
    callDoctor:
      'If you have never changed one, ask your audiologist to show you at your next visit. It takes 30 seconds once you see it done.',
  },
  {
    issue: 'My volume does not save between sessions',
    cause:
      'By design, most aids reset to the audiologist baseline when you power them off, for safety.',
    fixSteps: [
      'Open your hearing aid app.',
      'Adjust the volume to where you like it.',
      'Tap the Save or Star icon — some apps call it Create Preset or My Program.',
      'Name it (for example, My Kitchen).',
      'That preset will now load each time you pick it.',
    ],
    callDoctor:
      "If your aids don't let you save presets at all, your audiologist can enable that feature in the fitting software.",
  },
];

/* ── Streaming wizard steps ─────────────────────────────────── */

interface StreamingScenario {
  id: 'calls' | 'music' | 'tv' | 'video' | 'multipoint';
  label: string;
  icon: LucideIcon;
  description: string;
  iphoneSteps: string[];
  androidSteps: string[];
  note?: string;
}

const STREAMING: StreamingScenario[] = [
  {
    id: 'calls',
    label: 'Phone calls through the aids',
    icon: Phone,
    description:
      'Answer the phone and hear the caller directly in both ears. No holding the phone to your ear.',
    iphoneSteps: [
      'Make sure your aids are paired: Settings → Accessibility → Hearing Devices, your aids should show Connected.',
      "Call a friend or use your voicemail to test.",
      'When the call comes in, tap the green button — audio will route to the aids automatically.',
      'Your phone mic picks up your voice. Hold the phone within 2 feet of your mouth.',
    ],
    androidSteps: [
      'Make sure your aids are paired under Settings → Connected devices.',
      'Open Phone app → Settings → Calls → Call audio routing → pick your hearing aids as default.',
      'Test by calling voicemail or a family member.',
      'If the sound goes to the phone speaker instead, tap the speaker icon during the call and pick your aids.',
    ],
    note: 'Some Android phones route call audio separately from media. If calls work but music does not (or vice versa), that is normal.',
  },
  {
    id: 'music',
    label: 'Music, podcasts, audiobooks',
    icon: Volume2,
    description: 'Stream any audio app straight to the aids.',
    iphoneSteps: [
      'Open Music, Podcasts, Audible, YouTube, or Spotify.',
      'Tap the AirPlay or cast icon (usually a triangle with circles).',
      'Pick your hearing aids from the list.',
      'Adjust volume with the phone volume buttons or the app.',
    ],
    androidSteps: [
      'Open your music or podcast app.',
      'Make sure media audio is allowed to route to the aids (Settings → Connected devices → your aids → Media audio ON).',
      'Start playing and pick your aids from the cast menu if prompted.',
      'Use the aid app to set a dedicated Music program for richer sound.',
    ],
  },
  {
    id: 'tv',
    label: 'TV audio direct to the aids',
    icon: Tv,
    description:
      'Watch TV at a comfortable volume for everyone. The aids get clean audio straight from the TV box.',
    iphoneSteps: [
      "Buy your brand's TV streamer (Phonak TV Connector, Oticon TV Adapter, ReSound TV Streamer 2, Starkey TV, Signia StreamLine TV, Widex TV Play).",
      'Plug it in: optical cable to the TV audio out, power cable to a wall outlet.',
      'Set your TV audio output to Optical or PCM in TV Settings → Sound → Output.',
      'Press the Pair button on the streamer and hold your aids within 3 feet.',
      'Play any show — audio should arrive in the aids within a second.',
    ],
    androidSteps: [
      'The TV streamer pairs with the aids directly — your Android phone is not involved.',
      'Plug the streamer into the TV and wall outlet.',
      'Press the Pair button and turn your aids off and on.',
      'Use your hearing aid app to switch TV on and off as a program.',
    ],
    note: 'TV streamers work within 50 feet. One streamer serves up to two sets of aids, so a couple can both listen at once.',
  },
  {
    id: 'video',
    label: 'FaceTime, Zoom, and video calls',
    icon: Phone,
    description: 'Hear Zoom, FaceTime, Google Meet, and Teams through the aids.',
    iphoneSteps: [
      'Open Zoom or FaceTime.',
      'In the call, tap the audio output button (speaker icon) and pick your hearing aids.',
      'Turn OFF noise suppression in Zoom settings if your voice sounds muffled.',
      'Test with a family member first — never find out in the middle of a doctor visit.',
    ],
    androidSteps: [
      'Open Zoom or Google Meet.',
      'Tap the three-dot menu → Audio → choose your hearing aids.',
      'If voices sound thin, switch to Original Sound mode in Zoom.',
      "Ask the other person to speak at a normal pace — video calls drop an extra 200 milliseconds.",
    ],
  },
  {
    id: 'multipoint',
    label: 'Phone AND TV at the same time',
    icon: Bluetooth,
    description:
      'Modern aids support Bluetooth multipoint — keep the phone and the TV streamer both paired, and the phone takes over when a call comes in.',
    iphoneSteps: [
      'Pair your iPhone (Settings → Accessibility → Hearing Devices).',
      'Pair your TV streamer (press its Pair button while aids are near).',
      'Both connections live at once. If you get a call while watching TV, the aids ring.',
      'After you hang up, TV audio resumes automatically.',
    ],
    androidSteps: [
      'Not every Android phone supports multipoint well — Samsung and Pixel do; some budget phones do not.',
      'Pair your phone and the TV streamer separately.',
      'Test by playing TV and having a spouse call you — the ring should interrupt.',
      'If it does not, you may need to manually pause the TV when taking a call.',
    ],
    note: "Older aids (pre-2022) may not support multipoint. If this is important to you, ask your audiologist before buying.",
  },
];

/* ── Component ─────────────────────────────────────────────── */

const HearingAidTechHelper = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandId | null>(null);
  const [streamIdx, setStreamIdx] = useState(0);

  const brand = useMemo(
    () => BRANDS.find((b) => b.id === selectedBrand) ?? null,
    [selectedBrand]
  );

  const current = STREAMING[streamIdx];
  const totalSteps = STREAMING.length;
  const progress = ((streamIdx + 1) / totalSteps) * 100;

  return (
    <>
      <SEOHead
        title="Hearing Aids + Technology — Made Simpler | TekSure"
        description="Pair, stream, adjust, and fix the most common tech issues with your hearing aids. Senior-friendly setup and troubleshooting for Phonak, Oticon, ReSound, Starkey, Widex, Signia, and OTC brands."
        path="/tools/hearing-aid-tech-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-amber-50 via-yellow-50 to-white dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-background">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="hearing-aid-tech-helper"
                title="Hearing Aid Tech Helper"
                url="/tools/hearing-aid-tech-helper"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                <Ear className="w-7 h-7" />
              </div>
              <Badge variant="outline" className="text-xs">Health Tech · Setup &amp; Troubleshooting</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
              Hearing Aids + Technology — Made Simpler
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Pair, stream, adjust, and fix the most common tech issues with your hearing aids.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Bluetooth className="w-4 h-4 mr-1.5" /> Bluetooth &amp; MFi
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Apple className="w-4 h-4 mr-1.5" /> Made-for-iPhone
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Tv className="w-4 h-4 mr-1.5" /> TV &amp; streaming
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Wrench className="w-4 h-4 mr-1.5" /> 10 common fixes
              </Badge>
            </div>
          </div>
        </section>

        <div className="container py-10 md:py-14 space-y-14 max-w-6xl">
          {/* Intro note */}
          <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
            <Info className="h-5 w-5 text-amber-700" />
            <AlertTitle className="text-lg">About this guide</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Modern hearing aids are tiny computers. This page helps with the tech side — pairing,
              streaming, and the 10 issues people call their audiologist about most often. It is not
              medical advice. For a hearing test or adjustments to your prescription, always see a
              licensed audiologist.
            </AlertDescription>
          </Alert>

          {/* Brand picker */}
          <section aria-labelledby="brand-picker">
            <h2 id="brand-picker" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Pick your hearing aid brand
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Tap a card to see app features, pairing steps for iPhone and Android, battery tips,
              and firmware update info for your brand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BRANDS.map((b) => {
                const isSelected = selectedBrand === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBrand(isSelected ? null : b.id)}
                    className={`text-left rounded-xl border-2 p-5 transition-all min-h-14 ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/20 shadow-md'
                        : 'border-border bg-card hover:border-amber-300 hover:shadow-sm'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'bg-amber-600 text-white'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                        }`}
                      >
                        <Ear className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-foreground">{b.name}</h3>
                          {b.mfiSupport && (
                            <Badge variant="outline" className="text-xs">
                              <Apple className="w-3 h-3 mr-1" /> MFi
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{b.tagline}</p>
                        <Badge variant="secondary" className="text-xs">
                          App: {b.appName}
                        </Badge>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* MFi callout */}
            <Alert className="mt-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <Apple className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg">Apple Made-for-iPhone hearing aids</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Every brand above supports MFi. That means you pair through Settings → Accessibility →
                Hearing Devices (not the regular Bluetooth menu). MFi gives you Live Listen (turn the
                iPhone into a remote mic), better battery life, and audio routing controls.
              </AlertDescription>
            </Alert>

            {/* Brand detail */}
            {brand && (
              <Card className="mt-6 border-2 border-amber-200 dark:border-amber-900/50">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl">{brand.name}</CardTitle>
                      <CardDescription className="text-base">
                        Paired with the <strong>{brand.appName}</strong> app.
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedBrand(null)}
                      className="gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Pick a different brand
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="features">
                      <AccordionTrigger className="text-lg">App features</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="space-y-2 pl-4 list-disc">
                          {brand.appFeatures.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="iphone">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <Apple className="w-5 h-5" /> Pair with iPhone (MFi)
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <NumberedSteps steps={brand.iphonePairing} />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="android">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <Smartphone className="w-5 h-5" /> Pair with Android (ASHA / Fast Pair)
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <NumberedSteps steps={brand.androidPairing} />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="battery">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <Battery className="w-5 h-5" /> Battery guidance
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        {brand.batteryGuidance}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="firmware">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-5 h-5" /> Firmware updates
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        {brand.firmwareUpdates}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="tv">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <Tv className="w-5 h-5" /> TV accessory
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        {brand.tvAccessory}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </section>

          {/* OTC brands */}
          <section aria-labelledby="otc-brands">
            <h2 id="otc-brands" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Over-the-counter (OTC) hearing aids
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Since the FDA rule in October 2022, you can buy OTC hearing aids without a
              prescription. These work best for mild-to-moderate hearing loss in adults 18 and over.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OTC_BRANDS.map((o) => (
                <Card key={o.name}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{o.name}</CardTitle>
                      <Badge variant="outline" className="text-sm shrink-0">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {o.price}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground">
                      {o.highlight}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-base text-muted-foreground leading-relaxed">
                    {o.notes}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bluetooth streaming wizard */}
          <section aria-labelledby="streaming-wizard">
            <h2 id="streaming-wizard" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Bluetooth streaming wizard
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Five common streaming tasks, with separate steps for iPhone and Android.
            </p>

            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                      <current.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{current.label}</CardTitle>
                      <CardDescription className="text-base">{current.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Step {streamIdx + 1} of {totalSteps}
                  </Badge>
                </div>
                <Progress value={progress} className="h-3" aria-label="Wizard progress" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="rounded-lg border border-border p-5 bg-muted/30">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Apple className="w-5 h-5" /> iPhone
                    </h3>
                    <NumberedSteps steps={current.iphoneSteps} color="amber" />
                  </div>
                  <div className="rounded-lg border border-border p-5 bg-muted/30">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Smartphone className="w-5 h-5" /> Android
                    </h3>
                    <NumberedSteps steps={current.androidSteps} color="amber" />
                  </div>
                </div>
                {current.note && (
                  <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <Info className="h-5 w-5 text-blue-700" />
                    <AlertDescription className="text-base leading-relaxed">
                      {current.note}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base min-h-14"
                    onClick={() => setStreamIdx((i) => Math.max(0, i - 1))}
                    disabled={streamIdx === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                  </Button>
                  <div className="flex gap-2 flex-wrap">
                    {STREAMING.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setStreamIdx(idx)}
                        className={`w-9 h-9 rounded-full text-sm font-semibold border-2 transition-all ${
                          idx === streamIdx
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'bg-background border-border hover:border-amber-400'
                        }`}
                        aria-label={`Go to step ${idx + 1}: ${s.label}`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="text-base min-h-14 bg-amber-600 hover:bg-amber-700"
                    onClick={() => setStreamIdx((i) => Math.min(totalSteps - 1, i + 1))}
                    disabled={streamIdx === totalSteps - 1}
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Troubleshooting */}
          <section aria-labelledby="troubleshooting">
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Top 10 troubleshooting fixes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The most common issues, what usually causes them, a 3-to-5 step fix, and when to call
              your audiologist instead.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {TROUBLESHOOTING.map((t, idx) => (
                <AccordionItem key={t.issue} value={`t${idx}`}>
                  <AccordionTrigger className="text-lg text-left">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 flex items-center justify-center text-sm font-bold shrink-0">
                        {idx + 1}
                      </span>
                      {t.issue}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">What's usually causing it</p>
                      <p className="text-muted-foreground">{t.cause}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Try this</p>
                      <NumberedSteps steps={t.fixSteps} color="amber" />
                    </div>
                    <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                      <Phone className="h-5 w-5 text-amber-700" />
                      <AlertTitle className="text-base">When to call your audiologist</AlertTitle>
                      <AlertDescription className="text-base leading-relaxed">
                        {t.callDoctor}
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Insurance + Costs */}
          <section aria-labelledby="costs">
            <h2 id="costs" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Insurance &amp; costs
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A plain-English look at what you might pay and what help is out there.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-600" /> Medicare
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Original Medicare (Parts A &amp; B) generally does <strong>not</strong> cover
                  hearing aids. Medicare Advantage plans often include a hearing aid benefit with a
                  partner provider — check your plan's summary of benefits each fall during open
                  enrollment.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" /> VA benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Veterans enrolled in VA health care can receive hearing aids at no cost if they
                  qualify. The VA is the largest single buyer of hearing aids in the country. See
                  our guide collection on veterans benefits for next steps.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" /> HSA &amp; FSA
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Hearing aids, batteries, and repairs are HSA and FSA eligible. Keep your receipt.
                  For 2026, a family HSA can cover up to $8,550 in pre-tax medical spending.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-600" /> OTC vs prescription
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  OTC aids (Jabra Enhance, Sony CRE, Eargo, Lexie, Costco Kirkland) fit mild to
                  moderate loss in adults. Prescription aids are better for severe loss, complex
                  fittings, or if you have tinnitus. The biggest difference is the professional
                  support, not the hardware.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Captions */}
          <section aria-labelledby="captions">
            <h2 id="captions" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Captions for calls &amp; videos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A great backup for hearing aids. Turn on live captions and you'll catch words you
              might miss.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Apple className="w-5 h-5" /> iPhone Live Captions
                  </CardTitle>
                  <CardDescription className="text-base">Requires iOS 16 or newer.</CardDescription>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Settings → Accessibility → Live Captions → turn on. Captions appear in real time
                  for phone calls, FaceTime, and any app playing audio.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smartphone className="w-5 h-5" /> Android Live Caption
                  </CardTitle>
                  <CardDescription className="text-base">
                    Works on Pixel, Samsung, and most Android 10+ phones.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Settings → Sound → Live Caption. Or press the volume button and tap the caption
                  icon. Runs on the phone — no internet needed.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="w-5 h-5" /> CaptionCall &amp; InnoCaption
                  </CardTitle>
                  <CardDescription className="text-base">
                    Free certified captioned telephone services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  CaptionCall, InnoCaption, and ClearCaptions are FCC-funded services that caption
                  your phone calls on a dedicated device or app at no cost. Requires a self-attested
                  hearing loss form.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Captions className="w-5 h-5" /> Zoom, YouTube, and streaming
                  </CardTitle>
                  <CardDescription className="text-base">
                    Captions on every modern video platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Zoom: click CC during a call. YouTube: tap the CC icon on the player. Netflix,
                  Prime Video, and Hulu all have captions in each title's audio menu. See our{' '}
                  <Link to="/tools/streaming-service-picker" className="text-amber-700 underline">
                    Streaming Service Picker
                  </Link>{' '}
                  if you haven't chosen services yet.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tinnitus */}
          <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
            <Sparkles className="h-5 w-5 text-purple-700" />
            <AlertTitle className="text-lg">Tinnitus masking</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Most modern hearing aids include a tinnitus masking program — soft background tones
              that help mask ringing in the ears. It has to be turned on and dialed in by your
              audiologist based on your specific tinnitus. If you hear ringing, ask about it at your
              next fitting.
            </AlertDescription>
          </Alert>

          {/* Caregiver section */}
          <section aria-labelledby="caregivers">
            <h2 id="caregivers" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              For caregivers &amp; family
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Helping a parent or spouse with hearing aids? Here's what to know.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-700" /> Remote adjustments
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Most modern aids let the audiologist send program tweaks over the app. No drive to
                  the clinic. Helpful for limited-mobility loved ones.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Ear className="w-5 h-5 text-amber-700" /> Find my aids
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Each brand's app shows the last location the aids were connected. Not live GPS,
                  but often enough to find them in the couch cushions.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BellRing className="w-5 h-5 text-amber-700" /> Can't hear the doorbell?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Add visual or vibrating alerts. A Ring doorbell that flashes a smart bulb, a bed
                  shaker that pairs to a smoke alarm, or a flashing phone ringer all help when the
                  aids are out.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Maintenance */}
          <section aria-labelledby="maintenance">
            <h2 id="maintenance" className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Don't-forget maintenance
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Five habits that double the lifespan of your aids.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MaintenanceCard
                icon={Droplets}
                title="Dehumidify overnight"
                body="Sweat and humidity shorten battery life. Use a dry aid jar or electronic dehumidifier every night."
              />
              <MaintenanceCard
                icon={Sparkles}
                title="Wipe daily"
                body="Soft cloth only. Never alcohol, baby wipes, or water. Clean the dome and microphone ports gently."
              />
              <MaintenanceCard
                icon={Wrench}
                title="Check the wax guard weekly"
                body="Replace every 2 to 4 weeks, more often if you have oily skin. Your brand sells refill kits."
              />
              <MaintenanceCard
                icon={Heart}
                title="Professional clean every 6 months"
                body="Free at most clinics. They use an ultrasonic bath and inspect the aids under magnification."
              />
              <MaintenanceCard
                icon={Battery}
                title="Zinc-air batteries — the yellow sticker"
                body="For disposables: pull the yellow sticker, wait 1 full minute before closing the door. That 8-hour rule doubles battery life."
              />
              <MaintenanceCard
                icon={ShieldCheck}
                title="Store in the case when off"
                body="Never loose in a pocket, purse, or on the nightstand. The case keeps dust and curious pets away."
              />
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq">
            <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="f1">
                <AccordionTrigger className="text-lg text-left">
                  Are my hearing aids waterproof?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Most modern aids are water-resistant (IP68 rating) — fine for rain, sweat, or a
                  quick splash. They are <strong>not</strong> waterproof. Remove before showering,
                  swimming, or entering a hot tub. If they get soaked, dry them in a dehumidifier
                  and call your audiologist.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f2">
                <AccordionTrigger className="text-lg text-left">
                  Can I fly with them on?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Yes — leave them on the whole flight. Cabin pressure does not harm them. TSA lets
                  you keep them on through the security metal detectors. For body scanners, you can
                  leave them in; they will not set off alarms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f3">
                <AccordionTrigger className="text-lg text-left">
                  What about MRIs and CT scans?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Always remove hearing aids before an MRI — the magnets can permanently damage the
                  internal components. CT scans and X-rays are fine, but most techs will ask you to
                  remove them anyway. Cochlear implants have separate rules — check with your
                  surgeon.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f4">
                <AccordionTrigger className="text-lg text-left">
                  How often do I replace hearing aids?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Every 5 to 7 years on average. Batteries wear out, technology improves, and your
                  hearing may change. Many insurance plans cover replacement every 3 to 5 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f5">
                <AccordionTrigger className="text-lg text-left">
                  What is the difference between OTC and prescription?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  OTC aids fit mild to moderate loss and are self-programmed with an app.
                  Prescription aids are fit by a licensed audiologist after a hearing test, with
                  precise adjustments for your ear. OTC is roughly $1,000 per pair; prescription
                  averages $4,000 to $6,000 per pair including professional care. Both use the same
                  core technology.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f6">
                <AccordionTrigger className="text-lg text-left">
                  Do AirPods Pro replace hearing aids?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Since iOS 18, Apple's AirPods Pro 2 include a hearing aid feature that the FDA
                  cleared for mild to moderate loss. They are a reasonable first step if you don't
                  use them all day. For full-time wear, dedicated aids still last longer per charge,
                  fit better, and handle louder environments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="f7">
                <AccordionTrigger className="text-lg text-left">
                  Can I wear them in the shower?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  No. Even water-resistant aids are not built for sustained water or soap exposure.
                  Take them out and put them in the case on the counter while you shower.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Emergency */}
          <Alert className="border-red-300 bg-red-50 dark:bg-red-950/20">
            <AlertTriangle className="h-5 w-5 text-red-700" />
            <AlertTitle className="text-lg text-red-900 dark:text-red-200">
              Sudden hearing loss is a medical emergency
            </AlertTitle>
            <AlertDescription className="text-base text-red-900 dark:text-red-200 leading-relaxed">
              If you wake up unable to hear on one side, or lose hearing suddenly, call your
              audiologist same-day — or 911 if you also have dizziness or facial weakness. Sudden
              sensorineural hearing loss is often reversible if treated within 72 hours.
            </AlertDescription>
          </Alert>

          {/* Related */}
          <section aria-labelledby="related">
            <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Related tools &amp; help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <RelatedCard
                to="/tools/voice-assistant-setup"
                icon={Volume2}
                title="Voice Assistant Setup"
                body="Compare Alexa, Google, and Siri — and set one up."
              />
              <RelatedCard
                to="/tools/streaming-service-picker"
                icon={Tv}
                title="Streaming Service Picker"
                body="Find the right TV streaming service for you."
              />
              <RelatedCard
                to="/guides?category=health-tech"
                icon={Heart}
                title="Health Tech Guides"
                body="Plain-English guides for wearables, health apps, and more."
              />
              <RelatedCard
                to="/get-help"
                icon={Phone}
                title="Book a Technician"
                body="Need a human to help set this up? $15 deposit."
              />
            </div>
          </section>

          {/* Closing CTA */}
          <Card className="border-2 border-amber-600 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-foreground">You're not on your own.</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Start with one brand card above, then try one streaming task. If you get stuck on
                anything tech-related, a TekSure technician can walk you through it by video or
                phone.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base min-h-14"
                >
                  <Link to="/guides?category=health-tech">
                    Browse Health Tech Guides <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base min-h-14">
                  <Link to="/get-help">Book a Technician</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

/* ── Small helpers ─────────────────────────────────────────── */

interface NumberedStepsProps {
  steps: string[];
  color?: 'amber' | 'blue';
}

const NumberedSteps = ({ steps, color = 'amber' }: NumberedStepsProps) => {
  const bg =
    color === 'blue'
      ? 'bg-blue-600 text-white'
      : 'bg-amber-600 text-white';
  return (
    <ol className="space-y-3">
      {steps.map((step, idx) => (
        <li key={idx} className="flex gap-3 items-start">
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${bg}`}
          >
            {idx + 1}
          </div>
          <p className="flex-1 pt-1 text-base text-foreground leading-relaxed">{step}</p>
        </li>
      ))}
    </ol>
  );
};

interface MaintenanceCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

const MaintenanceCard = ({ icon: Icon, title, body }: MaintenanceCardProps) => (
  <Card>
    <CardContent className="p-5 flex gap-4 items-start">
      <div className="w-11 h-11 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-foreground mb-1">{title}</h4>
        <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </CardContent>
  </Card>
);

interface RelatedCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

const RelatedCard = ({ to, icon: Icon, title, body }: RelatedCardProps) => (
  <Link
    to={to}
    className="group rounded-xl border-2 border-border bg-card p-5 hover:border-amber-400 hover:shadow-sm transition-all min-h-14 block"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-base text-foreground mb-1 group-hover:text-amber-700">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </div>
  </Link>
);

export default HearingAidTechHelper;
